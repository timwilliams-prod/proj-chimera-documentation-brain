// functions/api/query-events.ts
// GET /api/query-events?since=<ms>&until=<ms>&skill=<name>
//                      &actor_type=<type>&event_type=<type>&limit=<n>
//
// Read endpoint for picon's #/health/logs and the /skill-evaluate skill.
//
// Headers:
//   X-Lotus-Telemetry-Token: <token>     required
//                                        Any valid producer token works.
//
// Response:
//   200 { events: [...], count, fetched_at }
//   401 if token missing or invalid
//
// See generated/friction_boss/observability_design.md for the full design.

interface Env {
  LOTUS_EVENTS: D1Database;
  [key: string]: any;        // for TELEMETRY_TOKEN_* env vars
}

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  // Read endpoint requires a valid token to prevent leaking telemetry to
  // anyone who guesses the URL. Any producer's token is acceptable.
  const token = request.headers.get('x-lotus-telemetry-token');
  if (!isValidToken(token, env)) {
    return jsonResponse({ error: 'unauthorized' }, 401);
  }

  const url = new URL(request.url);
  const since = numParam(url, 'since', Date.now() - THIRTY_DAYS_MS);
  const until = numParam(url, 'until', Date.now());
  const skill = url.searchParams.get('skill');
  const actorType = url.searchParams.get('actor_type');
  const eventTypes = url.searchParams.getAll('event_type');
  const limit = clamp(numParam(url, 'limit', 1000), 1, 10000);

  const where: string[] = ['ts BETWEEN ? AND ?'];
  const params: any[] = [since, until];

  if (skill) { where.push('skill = ?'); params.push(skill); }
  if (actorType) { where.push('actor_type = ?'); params.push(actorType); }
  if (eventTypes.length === 1) {
    where.push('event_type = ?');
    params.push(eventTypes[0]);
  } else if (eventTypes.length > 1) {
    where.push(`event_type IN (${eventTypes.map(() => '?').join(',')})`);
    params.push(...eventTypes);
  }

  const sql = `
    SELECT * FROM events
    WHERE ${where.join(' AND ')}
    ORDER BY ts DESC
    LIMIT ?
  `;
  params.push(limit);

  const result = await env.LOTUS_EVENTS.prepare(sql).bind(...params).all();
  const rows = (result.results || []) as any[];

  // Parse metadata JSON for caller convenience
  const events = rows.map((r) => ({
    ...r,
    metadata: r.metadata ? safeParse(r.metadata) : null,
  }));

  return jsonResponse(
    {
      events,
      count: events.length,
      fetched_at: new Date().toISOString(),
    },
    200,
    { 'cache-control': 'no-store' },
  );
};

// ─── Helpers ─────────────────────────────────────────────────────────

function isValidToken(token: string | null, env: Env): boolean {
  if (!token) return false;
  for (const [key, value] of Object.entries(env)) {
    if (!key.startsWith('TELEMETRY_TOKEN_')) continue;
    if (typeof value !== 'string') continue;
    if (constantTimeEqual(token, value)) return true;
  }
  return false;
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function numParam(url: URL, key: string, fallback: number): number {
  const v = Number(url.searchParams.get(key));
  return Number.isFinite(v) && v > 0 ? v : fallback;
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

function safeParse(s: string): any {
  try { return JSON.parse(s); } catch { return s; }
}

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extraHeaders },
  });
}
