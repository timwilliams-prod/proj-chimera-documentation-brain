// functions/api/log-event.ts
// POST /api/log-event   — single event ingestion (or batch via JSON array)
//
// Body (JSON):
//   Single:  { actor_type, session_id, event_type, ...event-specific fields }
//   Batch:   [ { ... }, { ... }, ... ]
//
// Headers:
//   X-Lotus-Shared-Key: <SHARED_KEY>     required
//                                        Low-bar drive-by spam filter — the
//                                        key lives in the git repo on purpose
//                                        so anyone with repo access can write.
//                                        See .claude/hooks/log-event.js.
//
// Response:
//   201 { ok, id }       single
//   201 { ok, ids }      batch
//   400 { error }        validation failure
//   401 { error }        missing or wrong shared key
//
// Identity attribution is client-claimed — actor_name comes from the request
// body (typically the producer's git config user.email). For internal
// productivity telemetry that's a tolerable trust model. The hostname and
// os_user metadata fields provide a sanity-check signal.
//
// See generated/friction_boss/observability_design.md for the full design.

interface Env {
  LOTUS_EVENTS: D1Database;
}

// MUST match .claude/hooks/log-event.js SHARED_KEY constant.
const SHARED_KEY = 'lts_GkunqNt-ve0vaI0UziIa4IHOomVGgnaI';

const VALID_EVENT_TYPES = new Set([
  'skill_invocation',
  'tool_use',
  'subagent_use',
  'approval_request',
  'approval_decision',
  'skill_failure',
  'session_end',
  'agent_run',
]);

const VALID_ACTOR_TYPES = new Set(['producer', 'agent', 'subagent']);

interface IncomingEvent {
  client_ts?: number;
  actor_type: string;
  actor_name?: string;
  session_id: string;
  run_id?: string;
  parent_run_id?: string;
  event_type: string;
  skill?: string;
  tool?: string;
  target_path?: string;
  diff_hash?: string;
  failure_mode_id?: string;
  error_type?: string;
  error_message?: string;
  approval_point?: string;
  approval_decision?: string;
  duration_ms?: number;
  tokens_in?: number;
  tokens_out?: number;
  cost_usd?: number;
  git_sha_before?: string;
  git_sha_after?: string;
  metadata?: any;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Shared-key gate
  const incomingKey = request.headers.get('x-lotus-shared-key');
  if (!incomingKey || !constantTimeEqual(incomingKey, SHARED_KEY)) {
    return jsonResponse({ error: 'invalid or missing shared key' }, 401);
  }

  let body: IncomingEvent | IncomingEvent[];
  try {
    body = await request.json();
  } catch (_) {
    return jsonResponse({ error: 'invalid json' }, 400);
  }

  const events = Array.isArray(body) ? body : [body];
  if (events.length === 0) return jsonResponse({ error: 'no events' }, 400);

  const ids: number[] = [];
  for (const e of events) {
    const validation = validateEvent(e);
    if (validation) return jsonResponse({ error: validation }, 400);

    const actorName = e.actor_name || 'unattributed';

    // Scope-violation check (locked decision #3 — synchronous).
    // Stub for v1: requires the frontmatter cache, which arrives with
    // /api/refresh-frontmatter. For now: 0 always; query-time enforcement
    // is still possible by joining against the frontmatter data file.
    const scopeViolation = 0;

    const insert = await env.LOTUS_EVENTS.prepare(`
      INSERT INTO events (
        ts, client_ts, actor_type, actor_name, session_id, run_id, parent_run_id,
        event_type, skill, tool, target_path, diff_hash,
        failure_mode_id, error_type, error_message,
        approval_point, approval_decision,
        duration_ms, tokens_in, tokens_out, cost_usd,
        git_sha_before, git_sha_after, scope_violation, metadata
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      Date.now(),
      e.client_ts ?? null,
      e.actor_type,
      actorName,
      e.session_id,
      e.run_id ?? null,
      e.parent_run_id ?? null,
      e.event_type,
      e.skill ?? null,
      e.tool ?? null,
      e.target_path ?? null,
      e.diff_hash ?? null,
      e.failure_mode_id ?? null,
      e.error_type ?? null,
      truncate(e.error_message, 500),
      e.approval_point ?? null,
      e.approval_decision ?? null,
      e.duration_ms ?? null,
      e.tokens_in ?? null,
      e.tokens_out ?? null,
      e.cost_usd ?? null,
      e.git_sha_before ?? null,
      e.git_sha_after ?? null,
      scopeViolation,
      e.metadata ? JSON.stringify(e.metadata) : null,
    ).run();

    ids.push(insert.meta.last_row_id as number);
  }

  return jsonResponse(
    Array.isArray(body) ? { ok: true, ids } : { ok: true, id: ids[0] },
    201,
  );
};

// ─── Helpers ─────────────────────────────────────────────────────────

function validateEvent(e: IncomingEvent): string | null {
  if (!e.event_type || !VALID_EVENT_TYPES.has(e.event_type)) {
    return `invalid event_type: ${e.event_type ?? '(missing)'}`;
  }
  if (!e.actor_type || !VALID_ACTOR_TYPES.has(e.actor_type)) {
    return `invalid actor_type: ${e.actor_type ?? '(missing)'}`;
  }
  if (!e.session_id) {
    return 'session_id required';
  }
  return null;
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function truncate(s: string | undefined | null, max: number): string | null {
  if (!s) return null;
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extraHeaders },
  });
}
