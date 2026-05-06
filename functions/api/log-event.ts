// functions/api/log-event.ts
// POST /api/log-event   — single event ingestion (or batch via JSON array)
//
// Body (JSON):
//   Single:  { actor_type, session_id, event_type, ...event-specific fields }
//   Batch:   [ { ... }, { ... }, ... ]
//
// Headers:
//   X-Lotus-Telemetry-Token: <token>     optional
//                                        Missing = unattributed mode
//                                        Match against TELEMETRY_TOKEN_<NAME>
//                                        env vars; suffix becomes actor_name.
//
// Response:
//   201 { ok, id }       single
//   201 { ok, ids }      batch
//   400 { error }        validation failure (no token errors — unattributed
//                        mode means a missing/bad token is not an error)
//
// See generated/friction_boss/observability_design.md for the full design.

interface Env {
  LOTUS_EVENTS: D1Database;
  [key: string]: any;        // for TELEMETRY_TOKEN_* env vars
}

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
  let body: IncomingEvent | IncomingEvent[];
  try {
    body = await request.json();
  } catch (_) {
    return jsonResponse({ error: 'invalid json' }, 400);
  }

  // Resolve attributed actor from token (if supplied + valid)
  const incomingToken = request.headers.get('x-lotus-telemetry-token');
  const validatedActor = resolveTokenToActor(incomingToken, env);

  const events = Array.isArray(body) ? body : [body];
  if (events.length === 0) return jsonResponse({ error: 'no events' }, 400);

  const ids: number[] = [];
  for (const e of events) {
    const validation = validateEvent(e);
    if (validation) return jsonResponse({ error: validation }, 400);

    // Validated token wins over claimed actor_name
    const actorName = validatedActor || e.actor_name || 'unattributed';

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

/**
 * Match token against TELEMETRY_TOKEN_* env vars. Returns the producer name
 * derived from the suffix (e.g. TELEMETRY_TOKEN_TIM → 'Tim') if matched,
 * else null. Constant-time comparison to avoid timing leaks.
 */
function resolveTokenToActor(token: string | null, env: Env): string | null {
  if (!token) return null;
  for (const [key, value] of Object.entries(env)) {
    if (!key.startsWith('TELEMETRY_TOKEN_')) continue;
    if (typeof value !== 'string') continue;
    if (constantTimeEqual(token, value)) {
      return titleCase(key.slice('TELEMETRY_TOKEN_'.length));
    }
  }
  return null;
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
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
