// functions/api/clickup-search.ts
// GET /api/clickup-search?name=<urlencoded>&limit=3
//   → { matches: [{ task_id, name, url, status, list_name }], total, fetched_at }
//
// Searches a fixed set of "interesting" ClickUp lists (Product Backlog, SHQ
// Tracker, current/next sprint) for a case-insensitive name match. Used by
// picon's roadmap popover to resolve a boulder name → live ClickUp ticket.
//
// Env (Cloudflare Pages → Settings → Environment variables):
//   CLICKUP_API_TOKEN   pk_... (personal API token)
//   CLICKUP_TEAM_ID     36181078 (Lotus workspace)
//
// Bundled with /api/clickup-sprint per WALKTHROUGH.md — same env vars.

interface Env {
  CLICKUP_API_TOKEN: string;
  CLICKUP_TEAM_ID: string;
}

// Lists searched, in priority order. Update if the active sprint changes.
// Future: read from SPRINT_MANIFEST once listId is added to it.
const SEARCH_LISTS: Array<{ id: string; label: string }> = [
  { id: "901208416337", label: "Product Backlog" },
  { id: "901324723345", label: "SHQ Tracker" },
  { id: "901326732674", label: "Sprint 28 (Abra)" },
  { id: "901326918886", label: "Sprint 29 (Bulbasaur)" }
];

interface ClickUpTask {
  id: string;
  name: string;
  url: string;
  status?: { status?: string };
  list?: { id?: string; name?: string };
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const name = (url.searchParams.get("name") || "").trim();
  const limit = Math.max(1, Math.min(10, Number(url.searchParams.get("limit") || "3")));

  if (!name) {
    return jsonResponse({ error: "name parameter required" }, 400);
  }
  if (!env.CLICKUP_API_TOKEN || !env.CLICKUP_TEAM_ID) {
    return jsonResponse({ error: "ClickUp credentials not configured" }, 500);
  }

  const needle = name.toLowerCase();

  // Build one Filtered Team Tasks request per list (each can paginate; cap pages
  // for safety). Run them in parallel.
  const perListResults = await Promise.all(
    SEARCH_LISTS.map(async (list) => {
      const tasks: ClickUpTask[] = [];
      for (let page = 0; page < 8; page++) {
        const r = await fetch(
          `https://api.clickup.com/api/v2/team/${env.CLICKUP_TEAM_ID}/task` +
            `?list_ids[]=${list.id}` +
            `&include_closed=false&subtasks=false&page=${page}`,
          { headers: { Authorization: env.CLICKUP_API_TOKEN } }
        );
        if (!r.ok) {
          // Soft-fail per list: log and move on so one bad list doesn't kill the search.
          return { list, tasks, error: `ClickUp ${r.status}` };
        }
        const j = (await r.json()) as { tasks?: ClickUpTask[] };
        const batch = j.tasks || [];
        tasks.push(...batch);
        if (batch.length < 100) break;
      }
      return { list, tasks };
    })
  );

  // Flatten + score
  type Scored = { task: ClickUpTask; listLabel: string; score: number };
  const scored: Scored[] = [];
  for (const { list, tasks } of perListResults) {
    for (const t of tasks) {
      const tn = (t.name || "").toLowerCase();
      let score = 0;
      if (tn === needle) score = 100;
      else if (tn.startsWith(needle)) score = 60;
      else if (tn.includes(needle)) score = 30;
      else continue;
      scored.push({ task: t, listLabel: list.label, score });
    }
  }

  // Sort by score desc, then by name length asc (shorter = closer match)
  scored.sort((a, b) => b.score - a.score || a.task.name.length - b.task.name.length);

  const matches = scored.slice(0, limit).map(({ task, listLabel }) => ({
    task_id: task.id,
    name: task.name,
    url: task.url,
    status: task.status?.status || null,
    list_name: task.list?.name || listLabel
  }));

  return jsonResponse(
    {
      query: name,
      total: scored.length,
      matches,
      fetched_at: new Date().toISOString()
    },
    200,
    { "cache-control": "public, max-age=60" }
  );
};

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...extraHeaders }
  });
}
