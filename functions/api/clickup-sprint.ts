// functions/api/clickup-sprint.ts
// GET /api/clickup-sprint?listId=<sprint_list_id>
//   → { list_id, totals, by_pod, data_source, fetched_at }
//
// Returns live sprint data for picon's Home Sprint widget.
//
// ClickUp's `?list_ids[]=` filter on the team-task endpoint only matches
// HOME list — it does NOT include tasks added via the "Tasks in Multiple
// Lists" (TIML) ClickApp, despite docs implying otherwise. Verified via
// MCP 2026-05-06: task 86ah5gax1 is home-listed in Product Backlog with
// `locations: [{id: "901326732674" (Abra 28)}]`, but a sprint-only
// list_ids query did not return it.
//
// Fix: query the union of [sprint list, source lists] in one paginated
// call, then filter client-side to keep tasks where either home list OR
// any `locations[]` entry matches the sprint list. SOURCE_LIST_IDS lists
// the lists that typically feed the sprint via TIML — extend if more
// source lists appear in practice.
//
// Env (Cloudflare Pages → Settings → Environment variables):
//   CLICKUP_API_TOKEN   pk_... (personal API token)
//   CLICKUP_TEAM_ID     36181078 (Lotus workspace)
//
// Bundled with /api/clickup-search and /api/save-md per WALKTHROUGH.md.

interface Env {
  CLICKUP_API_TOKEN: string;
  CLICKUP_TEAM_ID: string;
}

// Verified via MCP 2026-05-05: the actual custom field name includes the
// lotus emoji prefix and a trailing space. Don't "clean it up" without
// re-verifying against ClickUp — this string must match exactly.
const POD_FIELD_NAME = "🪷 Lotus Pod";

// Lists from which tasks commonly get TIML-added to a sprint. Verified
// via workspace hierarchy MCP 2026-05-06 in the Product Backlog folder.
// If a task lives elsewhere and is TIML'd into the sprint, it'll be
// missed — extend this list when new source lists appear.
const SOURCE_LIST_IDS = [
  "901208416337", // Product Backlog
  "188607299",    // Bug Backlog
  "901324723345", // SHQ Tracker
  "901208509635"  // Feature Priority
];

interface ClickUpCustomField {
  id: string;
  name: string;
  type: string;
  type_config?: {
    options?: Array<{ id: string; name: string; orderindex: number }>;
  };
  value?: unknown;
}

interface ClickUpLocation {
  id: string;
  name?: string;
}

interface ClickUpTask {
  id: string;
  name: string;
  status?: { status?: string };
  custom_fields?: ClickUpCustomField[];
  list?: { id?: string; name?: string };
  locations?: ClickUpLocation[];
}

type Bucket = "open" | "in_progress" | "complete" | "blocked";

interface PodTotals {
  pod: string;
  total: number;
  open: number;
  in_progress: number;
  complete: number;
  blocked: number;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const listId = url.searchParams.get("listId");

  if (!listId) {
    return jsonResponse({ error: "listId parameter required" }, 400);
  }
  if (!env.CLICKUP_API_TOKEN || !env.CLICKUP_TEAM_ID) {
    return jsonResponse({ error: "ClickUp credentials not configured" }, 500);
  }

  // Build the union list_ids[] query: sprint + all source lists. Dedupe so
  // we don't accidentally double-include if the sprint ID happens to be in
  // SOURCE_LIST_IDS. ClickUp accepts repeated list_ids[]= params natively.
  const listsToQuery = Array.from(new Set([listId, ...SOURCE_LIST_IDS]));
  const listIdsParam = listsToQuery
    .map((id) => `list_ids[]=${encodeURIComponent(id)}`)
    .join("&");

  // Page through all matching tasks. Bumped cap to 30 pages (3000 tasks)
  // since we're now scanning Product/Bug/SHQ backlogs alongside the sprint.
  const allFetched: ClickUpTask[] = [];
  for (let page = 0; page < 30; page++) {
    const r = await fetch(
      `https://api.clickup.com/api/v2/team/${env.CLICKUP_TEAM_ID}/task` +
        `?${listIdsParam}&include_closed=true&subtasks=true&page=${page}`,
      { headers: { Authorization: env.CLICKUP_API_TOKEN } }
    );
    if (!r.ok) {
      return jsonResponse({ error: `ClickUp ${r.status}` }, 502);
    }
    const j = (await r.json()) as { tasks?: ClickUpTask[] };
    const batch = j.tasks || [];
    allFetched.push(...batch);
    if (batch.length < 100) break;
  }

  // Filter to tasks actually in the sprint (home list OR multi-list location).
  // Dedupe by task id in case ClickUp returns the same task more than once
  // when it matches multiple of the queried list_ids.
  const seen = new Set<string>();
  const sprintTasks: ClickUpTask[] = [];
  for (const t of allFetched) {
    if (seen.has(t.id)) continue;
    const inSprint =
      t.list?.id === listId ||
      (t.locations || []).some((loc) => loc.id === listId);
    if (!inSprint) continue;
    seen.add(t.id);
    sprintTasks.push(t);
  }

  // Aggregate by pod + bucket
  const totals = { total: 0, open: 0, in_progress: 0, complete: 0, blocked: 0 };
  const byPod: Record<string, PodTotals> = {};

  for (const t of sprintTasks) {
    const pod = resolvePodName(t);
    const bucket = statusBucket(t.status?.status);
    totals.total += 1;
    totals[bucket] += 1;
    if (!byPod[pod]) {
      byPod[pod] = { pod, total: 0, open: 0, in_progress: 0, complete: 0, blocked: 0 };
    }
    byPod[pod].total += 1;
    byPod[pod][bucket] += 1;
  }

  const byPodSorted = Object.values(byPod).sort((a, b) => b.total - a.total);

  return jsonResponse(
    {
      list_id: listId,
      totals,
      by_pod: byPodSorted,
      data_source: `Live from ClickUp — ${sprintTasks.length} tasks (scanned ${allFetched.length} across ${listsToQuery.length} lists)`,
      fetched_at: new Date().toISOString()
    },
    200,
    { "cache-control": "public, max-age=60" }
  );
};

function resolvePodName(task: ClickUpTask): string {
  const field = (task.custom_fields || []).find((f) => f.name === POD_FIELD_NAME);
  if (!field || field.value === undefined || field.value === null) {
    return "Unassigned/Cross-pod";
  }
  const options = field.type_config?.options || [];
  // ClickUp returns the option's UUID (string) for new-style dropdowns, or
  // the orderindex (number) for legacy ones. Try both.
  const opt = options.find(
    (o) => o.id === field.value || o.orderindex === field.value
  );
  return opt?.name || "Unassigned/Cross-pod";
}

function statusBucket(status: string | undefined): Bucket {
  const s = (status || "").toLowerCase();
  if (s.includes("complete") || s.includes("done") || s.includes("closed")) return "complete";
  if (s.includes("blocked") || s.includes("qa verify")) return "blocked";
  if (s.includes("in progress") || s.includes("in review") || s.includes("in qa")) return "in_progress";
  return "open";
}

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...extraHeaders }
  });
}
