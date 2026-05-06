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
 * Configuration (env vars — all optional; missing config = silent no-op):
 *   LOTUS_TELEMETRY            'off' to disable entirely
 *   LOTUS_TELEMETRY_ENDPOINT   e.g. https://lotus-picon.pages.dev/api/log-event
 *   LOTUS_TELEMETRY_TOKEN      Personal token. Missing = unattributed mode
 *                              (event still logged; actor_name = 'unattributed').
 *   LOTUS_TELEMETRY_PRODUCER   Display name (e.g. 'Tim'). Soft hint only;
 *                              the validated token wins server-side.
 */

const os = require('os');

if (process.env.LOTUS_TELEMETRY === 'off') process.exit(0);

const eventType = process.argv[2];
const endpoint = process.env.LOTUS_TELEMETRY_ENDPOINT;
if (!eventType || !endpoint) process.exit(0);

const token = process.env.LOTUS_TELEMETRY_TOKEN || null;
const claimedProducer = process.env.LOTUS_TELEMETRY_PRODUCER || null;

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

// ─── Event construction ──────────────────────────────────────────────

function buildEvent(type, hook) {
  const base = {
    client_ts: Date.now(),
    actor_type: 'producer',
    actor_name: claimedProducer || 'unattributed',
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
      base.metadata.parent_actor = claimedProducer || 'unattributed';
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
  const headers = { 'content-type': 'application/json' };
  if (token) headers['x-lotus-telemetry-token'] = token;

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
