#!/usr/bin/env node
/**
 * Lotus Skill Telemetry — Hook Script
 *
 * Reads hook payload from stdin, transforms it to a telemetry event, POSTs
 * to the Lotus telemetry endpoint. Silent on every error path — telemetry
 * must NEVER break a producer's workflow.
 *
 * Usage:
 *   node .claude/hooks/log-event.js <event_type>
 *
 *   event_type ∈ { skill_invocation | tool_use | subagent_use | session_end }
 *
 * Wired by .claude/settings.json. See the design doc at:
 *   generated/friction_boss/observability_design.md
 *
 * Identity attribution (in priority order):
 *   1. LOTUS_TELEMETRY_PRODUCER env var (manual override; e.g. "Tim")
 *   2. `git config user.email`         (auto-detected from local git config)
 *   3. "unattributed"                   (fallback)
 *
 * Configuration (env vars — all optional):
 *   LOTUS_TELEMETRY            'off' to disable entirely
 *   LOTUS_TELEMETRY_ENDPOINT   Override the default ingestion endpoint
 *   LOTUS_TELEMETRY_PRODUCER   Display name override (otherwise auto-detected
 *                              from `git config user.email`)
 *
 * Spam protection:
 *   The shared key below MUST match the SHARED_KEY constant in
 *   functions/api/log-event.ts. Both are kept in the git repo on purpose —
 *   it's a low-bar drive-by spam filter, not a real secret. Rotate by
 *   editing both files and redeploying.
 */

const os = require('os');
const { execSync } = require('child_process');

const DEFAULT_ENDPOINT = 'https://lotus-production-brain.pages.dev/api/log-event';

// MUST match functions/api/log-event.ts SHARED_KEY constant.
const SHARED_KEY = 'lts_GkunqNt-ve0vaI0UziIa4IHOomVGgnaI';

if (process.env.LOTUS_TELEMETRY === 'off') process.exit(0);

const eventType = process.argv[2];
const endpoint = process.env.LOTUS_TELEMETRY_ENDPOINT || DEFAULT_ENDPOINT;
if (!eventType) process.exit(0);

const actorName = resolveActorName();

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { raw += chunk; });
process.stdin.on('end', () => {
  let hook = {};
  try { hook = JSON.parse(raw); } catch (_) { /* tolerate non-JSON */ }

  const event = buildEvent(eventType, hook);
  if (!event) process.exit(0);   // e.g. UserPromptSubmit without a slash command

  send(event).finally(() => process.exit(0));
});

// Safety net — if stdin hangs, abandon after 2s rather than block the workflow
setTimeout(() => process.exit(0), 2000).unref();

// ─── Identity ────────────────────────────────────────────────────────

function resolveActorName() {
  if (process.env.LOTUS_TELEMETRY_PRODUCER) {
    return process.env.LOTUS_TELEMETRY_PRODUCER;
  }
  try {
    const email = execSync('git config user.email', {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();
    if (email) return email;
  } catch (_) { /* git not installed, no repo, no config — fall through */ }
  return 'unattributed';
}

// ─── Event construction ──────────────────────────────────────────────

function buildEvent(type, hook) {
  const base = {
    client_ts: Date.now(),
    actor_type: 'producer',
    actor_name: actorName,
    session_id: hook.session_id || hook.sessionId || 'unknown',
    event_type: type,
    metadata: {
      hostname: os.hostname(),
      os_user: os.userInfo().username,
    },
  };

  switch (type) {
    case 'skill_invocation': {
      const prompt = hook.prompt || hook.user_prompt || '';
      const m = prompt.match(/^\/(\S+)/);
      if (!m) return null;        // not a slash command, drop silently
      base.skill = m[1];
      return base;
    }

    case 'tool_use': {
      base.tool = hook.tool_name || 'unknown';
      const input = hook.tool_input || {};
      base.target_path = input.file_path || input.notebook_path || null;
      // Deliberately NOT capturing tool_response — too large + may contain
      // sensitive content. Hash-of-content can be added later if needed.
      return base;
    }

    case 'subagent_use': {
      base.actor_type = 'subagent';
      base.actor_name = hook.subagent_type
        || hook.metadata?.subagent_name
        || 'unknown';
      base.metadata.parent_actor = actorName;
      base.duration_ms = hook.duration_ms ?? null;
      return base;
    }

    case 'session_end': {
      base.duration_ms = hook.duration_ms ?? null;
      base.tokens_in = hook.usage?.input_tokens ?? null;
      base.tokens_out = hook.usage?.output_tokens ?? null;
      return base;
    }

    default:
      return base;
  }
}

// ─── Network ─────────────────────────────────────────────────────────

async function send(event) {
  const headers = {
    'content-type': 'application/json',
    'x-lotus-shared-key': SHARED_KEY,
  };

  // Bound the request — telemetry is fire-and-forget
  const ctrl = new AbortController();
  const timeoutId = setTimeout(() => ctrl.abort(), 1500);

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(event),
      signal: ctrl.signal,
    });
  } catch (_) {
    // Silent failure — telemetry must never break workflows
  } finally {
    clearTimeout(timeoutId);
  }
}
