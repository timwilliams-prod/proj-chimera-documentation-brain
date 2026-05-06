// functions/api/clickup-sprint.ts
// GET /api/clickup-sprint?listId=<sprint_list_id>
//   → { list_id, totals, by_pod, data_source, fetched_at }
//
// Returns live sprint data for picon's Home Sprint widget. Uses ClickUp's
// Filtered Team Tasks endpoint (?list_ids[]=...) which respects multi-list
// memberships — fixes the "snapshot saw 2 tasks but the sprint actually has
// 117" bug caused by tasks whose home list is Product Backlog but were
// *added* to a sprint list via the "Tasks in Multiple Lists" ClickApp.
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

interface ClickUpCustomField {
  id: string;
  name: string;
  type: string;
  type_config?: {
    options?: Array<{ id: string; name: string; orderindex: number }>;
  };
  value?: unknown;
}

interface ClickUpTask {
  id: string;
  name: string;
  status?: { status?: string };
  custom_fields?: ClickUpCustomField[];
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

  // Page through all tasks for the list. ClickUp returns 100/page; fewer = end.
  // Cap pages for safety (a single sprint list with >2000 tasks would be a bug).
  const allTasks: ClickUpTask[] = [];
  for (let page = 0; page < 20; page++) {
    const r = await fetch(
      `https://api.clickup.com/api/v2/team/${env.CLICKUP_TEAM_ID}/task` +
        `?list_ids[]=${encodeURIComponent(listId)}` +
        `&include_closed=true&subtasks=true&page=${page}`,
      { headers: { Authorization: env.CLICKUP_API_TOKEN } }
    );
    if (!r.ok) {
      return jsonResponse({ error: `ClickUp ${r.status}` }, 502);
    }
    const j = (await r.json()) as { tasks?: ClickUpTask[] };
    const batch = j.tasks || [];
    allTasks.push(...batch);
    if (batch.length < 100) break;
  }

  // Aggregate by pod + bucket
  const totals = { total: 0, open: 0, in_progress: 0, complete: 0, blocked: 0 };
  const byPod: Record<string, PodTotals> = {};

  for (const t of allTasks) {
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

  // Sort pods by total descending so the widget shows largest contributors first
  const byPodSorted = Object.values(byPod).sort((a, b) => b.total - a.total);

  return jsonResponse(
    {
      list_id: listId,
      totals,
      by_pod: byPodSorted,
      data_source: `Live from ClickUp — ${allTasks.length} tasks`,
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
