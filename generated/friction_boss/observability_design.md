# Observability Design — Skill & Agent Telemetry Pipeline

> Technical design for the unified telemetry pipeline that powers the Skill Maturity Framework (q1-1) and the Observability Hall (q3-4). One pipeline, both layers, no second infrastructure.

**Owner:** Tim Williams (drafted) → Thorben (Track B implementation)
**Audience:** Holly, Thorben, Brann
**Last Updated:** 2026-05-06
**Status:** v0.1 — Draft for Track B review

---

## Purpose

Every skill run and every agent action emits a structured telemetry event to a single endpoint, persists in Cloudflare D1, and renders in picon's existing `#/health/logs` and `#/health/agent` routes (currently stubbed as "Coming soon").

This pipeline simultaneously:
- Satisfies Maturity Gate criterion #5 ("Observable") — every run produces an audit log
- Provides the data path for criteria #1 (Logic stability), #3 (Failure modes known), #4 (Approval gates), #6 (Reversible), and #7 (Scope-bounded) — see `/skill-evaluate` queries below
- Becomes the read path for the Observability Hall (q3-4) on day one of any agent deploy

**Why one pipeline**: producer skill calls today and autonomous agent runs tomorrow share the same structural telemetry need. Building two pipelines is a Phase-2 mistake we can avoid by designing the schema for `actor_type IN ('producer', 'agent', 'subagent')` from the start.

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  Producer's Claude Code session (Tim, Holly, Thorben, Brann)     │
│                                                                  │
│  Hooks in .claude/settings.json (committed at project level):    │
│    UserPromptSubmit  → log-event.js skill_invocation             │
│    PostToolUse       → log-event.js tool_use                     │
│    SubagentStop      → log-event.js subagent_use                 │
│    Stop              → log-event.js session_end                  │
│                                                                  │
│  Skills explicitly emit (when entering approval gates / failures):│
│    POST /api/log-event  approval_request | approval_decision     │
│    POST /api/log-event  skill_failure                            │
└────────────────────────────┬─────────────────────────────────────┘
                             │ POST { event JSON }
                             │ Header: X-Lotus-Telemetry-Token
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  Cloudflare Pages Function — /api/log-event                      │
│  - Validates token (rejects with 401 if mismatch)                │
│  - Augments with server timestamp                                │
│  - Computes scope_violation by matching target_path against the  │
│    declared scope from the skill's frontmatter cache             │
│  - INSERTs into D1 events table                                  │
└────────────────────────────┬─────────────────────────────────────┘
                             │ INSERT
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  Cloudflare D1 — lotus-events database                           │
│  Single table: events (schema below)                             │
│  Append-only. No UPDATEs.                                        │
└────────────────────────────┬─────────────────────────────────────┘
                             │ SELECT (via /api/query-events)
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  Picon (generated/dashboard_v2/)                                 │
│    #/health/logs          — recent activity, scope violations    │
│    #/health/agent         — agent-only slice (empty today)       │
│    skill maturity scoreboard — joins D1 query with frontmatter   │
│                                                                  │
│  /skill-evaluate skill                                           │
│    - Parses frontmatter from .claude/commands/*.md               │
│    - Queries D1 via /api/query-events                            │
│    - Writes scorecard to generated/reports/                      │
│    - Writes maturity data to dashboard_v2/data/                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## D1 Schema

Single events table. Append-only. All time fields are epoch milliseconds (UTC).

```sql
CREATE TABLE events (
  -- Identity
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  ts            INTEGER NOT NULL,              -- epoch ms (server-set on insert)
  client_ts     INTEGER,                       -- epoch ms from hook (for clock-skew detection)

  -- Actor
  actor_type    TEXT NOT NULL,                 -- 'producer' | 'agent' | 'subagent'
  actor_name    TEXT NOT NULL,                 -- 'Tim' | 'sprint-pipeline-agent' | 'eda-brain-search'

  -- Session / run grouping
  session_id    TEXT NOT NULL,                 -- Claude Code session id
  run_id        TEXT,                          -- skill invocation id (uuid, set by skill at start)
  parent_run_id TEXT,                          -- for subagent_use: links to parent skill's run_id

  -- Event discriminator
  event_type    TEXT NOT NULL,                 -- enum (see taxonomy below)

  -- Skill context
  skill         TEXT,                          -- 'sprint-plan' (no leading slash)

  -- Tool context (for tool_use)
  tool          TEXT,                          -- 'Edit' | 'Write' | 'mcp__clickup__create_task' | etc
  target_path   TEXT,                          -- file path for file tools
  diff_hash     TEXT,                          -- sha-256 (first 16 chars) of post-edit content

  -- Failure context (for skill_failure)
  failure_mode_id  TEXT,                       -- matches frontmatter id, or 'novel'
  error_type       TEXT,                       -- short slug 'http_429' | 'file_not_found' | etc
  error_message    TEXT,                       -- truncated to 500 chars

  -- Approval context (for approval_*)
  approval_point    TEXT,                      -- matches frontmatter approval_points id
  approval_decision TEXT,                      -- 'approved' | 'rejected' | 'modified'

  -- Performance / cost
  duration_ms   INTEGER,
  tokens_in     INTEGER,
  tokens_out    INTEGER,
  cost_usd      REAL,

  -- Reversibility tracking (criterion #6)
  git_sha_before TEXT,
  git_sha_after  TEXT,

  -- Scope check (criterion #7) — server-computed at insert time
  scope_violation INTEGER DEFAULT 0,           -- 0 | 1 (SQLite has no bool)

  -- Free-form metadata (anything not covered by typed columns)
  metadata      TEXT                           -- JSON blob
);

-- Hot indexes
CREATE INDEX idx_ts             ON events(ts);
CREATE INDEX idx_actor_ts       ON events(actor_name, ts);
CREATE INDEX idx_skill_ts       ON events(skill, ts);
CREATE INDEX idx_event_type     ON events(event_type);
CREATE INDEX idx_run            ON events(run_id);
CREATE INDEX idx_session        ON events(session_id);

-- Partial index for failure analysis
CREATE INDEX idx_failure        ON events(skill, failure_mode_id) WHERE event_type='skill_failure';
```

**Sizing note**: at ~1 KB per event and assuming ~500 events/producer/week × 4 producers + (eventually) 5 agents × 10K events/week, we hit D1's 5 GB free tier after ~10 years. Not a concern.

---

## Event Taxonomy

Each event type has required fields beyond the universal `ts | actor_type | actor_name | session_id | event_type`.

| event_type | When it fires | Source | Required extra fields |
|---|---|---|---|
| `skill_invocation` | Producer types `/skill-name` | UserPromptSubmit hook | `skill`, `run_id` (generated by hook) |
| `tool_use` | Any Edit/Write/Bash/MCP call | PostToolUse hook | `tool`, `target_path` (when file), `diff_hash` (post-write), `duration_ms` |
| `subagent_use` | Eda invokes a worker | SubagentStop hook | `parent_run_id`, `metadata.subagent_name`, `duration_ms` |
| `approval_request` | Skill prompts at an approval gate | Skill emits explicitly | `skill`, `run_id`, `approval_point` |
| `approval_decision` | Producer responds to gate | Skill emits explicitly | `skill`, `run_id`, `approval_point`, `approval_decision` |
| `skill_failure` | Skill catches a failure (known or novel) | Skill emits explicitly | `skill`, `run_id`, `failure_mode_id`, `error_type`, `error_message` |
| `session_end` | Claude Code session closes | Stop hook | `duration_ms`, `tokens_in`, `tokens_out`, `cost_usd` (if available), `git_sha_after` |
| `agent_run` | Autonomous agent invocation | Agent infrastructure | `actor_type='agent'`, all relevant context |

**Notably absent**: `run_outcome`. We deliberately do NOT auto-detect "was this run accepted." Logic stability is set manually in frontmatter (per Tim's #3 decision). The only auto-flip is `stable` → `problematic` based on `skill_failure` rate in a rolling window.

---

## Endpoints (Cloudflare Pages Functions)

### `POST /api/log-event` — single event ingestion

```
Headers:
  Content-Type: application/json
  X-Lotus-Telemetry-Token: <shared secret from CF env>

Body (JSON):
  {
    "ts": 1735000000000,              // optional; server overrides
    "actor_type": "producer",
    "actor_name": "Tim",
    "session_id": "abc123",
    "event_type": "tool_use",
    ...event-specific fields...
  }

Response:
  201 { "id": 12345 }
  401 if token invalid
  400 if required fields missing
```

The function computes `scope_violation` server-side by looking up the skill's declared scope (cached from frontmatter) and matching `target_path`.

### `POST /api/log-events` — batch ingestion

Accepts an array of events for hooks that buffer locally before flushing. Same auth.

### `GET /api/query-events` — read endpoint for picon

```
Query params:
  since=<epoch_ms>          required
  until=<epoch_ms>          optional, default now
  skill=<name>              optional filter
  actor_type=<producer|agent|subagent>  optional
  event_type=<type>         optional, can repeat
  limit=<n>                 default 1000, max 10000

Headers:
  X-Lotus-Telemetry-Token: <token>

Response:
  { events: [...], total: N }
```

### `GET /api/skill-maturity-scorecard` — derived view

Returns per-skill scoring against the seven criteria. Used by `/skill-evaluate` and picon's maturity scoreboard.

```
Response:
  {
    skills: [
      {
        skill: "sprint-plan",
        logic_stability: "hardening",        // from frontmatter
        runs_30d: 12,
        failures_30d: 2,
        novel_failures_30d: 1,
        scope_violations_30d: 0,
        approval_reject_rate_30d: 0.08,
        last_run: 1735000000000,
        criteria: {
          logic_stability: "hardening",      // from frontmatter
          idempotent: "additive",            // from frontmatter
          failure_modes_documented: true,    // frontmatter has list
          approval_gates_clear: true,        // requires_approval + approval_points present
          observable: true,                  // events present in last 30d
          reversible: true,                  // reversible field present
          scope_bounded: true,               // scope present + 0 violations
        },
        agent_ready: false,                  // all 7 must pass
      },
      ...
    ]
  }
```

---

## Producer Hook Setup

### File layout (in repo)

```
.claude/
  settings.json            Project-level hook config (committed)
  hooks/
    log-event.js           Cross-platform Node script (committed)
```

### `.claude/settings.json` (committed at project level)

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/log-event.js skill_invocation" }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write|NotebookEdit|Bash",
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/log-event.js tool_use" }
        ]
      }
    ],
    "SubagentStop": [
      {
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/log-event.js subagent_use" }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          { "type": "command", "command": "node .claude/hooks/log-event.js session_end" }
        ]
      }
    ]
  }
}
```

### `.claude/hooks/log-event.js` (sketch — final version ships in next task)

```javascript
#!/usr/bin/env node
// Telemetry hook — Reads JSON from stdin, POSTs an event to the pipeline.
// Silent on error. Never breaks the user's workflow.

if (process.env.LOTUS_TELEMETRY === 'off') process.exit(0);

const eventType = process.argv[2] || 'unknown';
const endpoint = process.env.LOTUS_TELEMETRY_ENDPOINT;
const token = process.env.LOTUS_TELEMETRY_TOKEN;
const producer = process.env.LOTUS_TELEMETRY_PRODUCER || require('os').userInfo().username;

if (!endpoint || !token) process.exit(0);   // unconfigured = silent no-op

let stdin = '';
process.stdin.on('data', d => stdin += d);
process.stdin.on('end', async () => {
  let h = {};
  try { h = JSON.parse(stdin); } catch (e) {}

  const event = {
    client_ts: Date.now(),
    actor_type: 'producer',
    actor_name: producer,
    session_id: h.session_id || 'unknown',
    event_type: eventType,
  };

  // Type-specific extraction from hook payload
  if (eventType === 'skill_invocation') {
    const m = (h.prompt || '').match(/^\/(\S+)/);
    if (!m) process.exit(0);   // not a slash command, drop
    event.skill = m[1];
    event.run_id = crypto.randomUUID();
    // TODO: stash run_id somewhere session-scoped so subsequent events reference it
  }
  if (eventType === 'tool_use') {
    event.tool = h.tool_name;
    event.target_path = h.tool_input?.file_path || h.tool_input?.notebook_path;
    // diff_hash computed in a follow-up — needs file read post-write
  }
  if (eventType === 'subagent_use') {
    event.metadata = JSON.stringify({ subagent_name: h.subagent_type });
  }
  if (eventType === 'session_end') {
    event.duration_ms = h.duration_ms;
    event.tokens_in = h.usage?.input_tokens;
    event.tokens_out = h.usage?.output_tokens;
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-lotus-telemetry-token': token },
      body: JSON.stringify(event),
    });
  } catch (e) { /* never break the workflow */ }
  process.exit(0);
});
```

### Per-producer environment setup

Each producer adds to their shell rc (`.bashrc` / `.zshrc` / Windows env):

```bash
export LOTUS_TELEMETRY_ENDPOINT="https://lotus-picon.pages.dev/api/log-event"
export LOTUS_TELEMETRY_TOKEN="<personal token, one per producer>"
export LOTUS_TELEMETRY_PRODUCER="Tim"     # or Holly / Thorben / Brann
# To opt out: export LOTUS_TELEMETRY=off
```

Per-producer tokens (rather than one shared) means we get unspoofable attribution and can revoke individually.

---

## Privacy & Security

### What we DO log
- Skill name (`sprint-plan`)
- Tool name (`Edit`, `Write`, etc)
- File paths (for scope-violation checks)
- Diff hashes (sha-256 truncated — one-way, not the diff itself)
- Error messages (truncated to 500 chars)
- Approval gate decisions (which gate, approve/reject)
- Token counts and cost (when available)
- Producer name (for attribution; aggregate views default)

### What we DO NOT log
- The user's prompt text
- File content (only the hash post-write)
- Tool input parameters beyond the file path
- Tool output / response text
- Anything from the brain's `planning/` files

### Auth & attribution model
- Per-producer secret in `X-Lotus-Telemetry-Token` header
- Tokens stored as Cloudflare env vars: `TELEMETRY_TOKEN_TIM`, `TELEMETRY_TOKEN_HOLLY`, etc
- Endpoint reads all `TELEMETRY_TOKEN_*` env vars and derives validated `actor_name` from the suffix when the incoming token matches a value
- **No token = unattributed mode**: event is still logged with `actor_name='unattributed'`. The hostname and OS username are captured in `metadata` as soft attribution
- This means zero setup friction (hooks always fire) and producers opt INTO attribution rather than opt out

### Opt-out (full)
- `LOTUS_TELEMETRY=off` in env → hook script no-ops immediately, no event sent at all
- Producer can fully opt out at any time, no code changes needed
- Documented in the rollout note

### Surveillance framing (per Tim's #1 decision)
- Default picon views aggregate by skill, not by producer
- Per-producer views exist but are owner-only or opt-in
- Framing: "are these skills getting better?" not "who's using them most?"
- Mirrors the Spec Curator framing in the roadmap risk register

---

## Picon Dashboard Views

### `#/health/logs` — Skill Maturity Scoreboard (default view)

Top of page: campaign-level rollup
```
This week:    412 skill runs   |   8 failures   |   2 novel modes   |   1 scope violation
Last 30 days: 1,847 runs      |   31 failures  |   4 novel modes   |   3 scope violations
```

Main grid: per-skill scoreboard with maturity status
```
Skill              Stability    Runs(30d)  Failures  Scope  Last Run     Status
─────────────────────────────────────────────────────────────────────────────────
sprint-plan        🟡 hardening    12        2 (0n)   ✅      2h ago       3/7 ✓
risk-evaluation    🟢 stable       28        0        ✅      1d ago       7/7 ✓ READY
spec-sync          🔴 problematic   8        4 (2n)   ⚠️      3d ago       4/7 ✓
roadmap-update     ⚪ vibe         1        0        ✅      5d ago       2/7 ✓
...
```

Click a skill → drill into per-criterion detail + run history.

### `#/health/agent` — Agent Health (empty until agents deploy)

Same structure, sliced to `actor_type IN ('agent', 'subagent')`. Eda's three workers (`brain-search`, `cross-search`, `skill-router`) populate it on day one — the only `subagent` actors that exist today.

### Failure Mode Watch (sub-section of Logs)

```
Recent failure mode hits:
─────────────────────────────────────────────
sprint-plan    clickup_rate_limit    × 3      (declared) ✅
sprint-plan    capacity_stale        × 1      (declared) ✅
spec-sync      novel                 × 2      ⚠ NEEDS DOCUMENTATION
                  "ENOENT: features/units.md"  → suggests adding failure mode
```

---

## `/skill-evaluate` Query Patterns

The skill reads frontmatter from each `.claude/commands/*.md` and queries D1 to score each criterion.

| Criterion | Query / Check |
|---|---|
| **#1 Logic stable** | Read `logic_stability` from frontmatter directly. Auto-flip `stable` → `problematic` if `failures_30d / runs_30d > 0.20`. |
| **#2 Idempotent** | Read `idempotent` from frontmatter. Optional smell check: if same `(skill, run_inputs_hash)` ran twice and produced different `output_hash`, flag. |
| **#3 Failure modes known** | Frontmatter has `failure_modes:` list. D1 query: `SELECT failure_mode_id, COUNT(*) FROM events WHERE event_type='skill_failure' AND skill=? AND failure_mode_id='novel'` → if > 0, criterion fails until owner documents the new mode. |
| **#4 Approval gates clear** | Frontmatter has `requires_approval` + `approval_points`. D1 query: every write `tool_use` should have a preceding `approval_decision='approved'` within the same `run_id`. |
| **#5 Observable** | D1 query: `SELECT COUNT(*) FROM events WHERE skill=? AND ts > ?` > 0 in last 30d. Trivially satisfied once the pipe is on. |
| **#6 Reversible** | Frontmatter has `reversible:` per surface. D1 query: every write `tool_use` to a reversible-via-`git_commit` surface should have a non-null `git_sha_after`. |
| **#7 Scope-bounded** | D1 query: `SELECT COUNT(*) FROM events WHERE skill=? AND scope_violation=1 AND ts > ?` should be 0. |

Output: per-skill scorecard markdown to `generated/reports/skill_maturity_YYYYMMDD.md` and a JS data file to `generated/dashboard_v2/data/skill_maturity_data.js` for picon.

---

## Build Sequence (this campaign)

| Step | Owner | Dependencies | Status |
|---|---|---|---|
| 1. Add frontmatter to `/sprint-plan` (reference) | Tim | — | ✅ Done 2026-05-06 |
| 2. Lock D1 schema + this design doc | Tim drafts → Thorben reviews | — | 🟡 In flight (this doc) |
| 3. Cloudflare D1 database + table | Thorben | (2) | Pending |
| 4. `/api/log-event` Pages Function | Thorben | (3) | Pending |
| 5. `/api/query-events` + `/api/skill-maturity-scorecard` Pages Functions | Thorben | (3) | Pending |
| 6. `.claude/hooks/log-event.js` script | Thorben | (4) | Pending |
| 7. `.claude/settings.json` hook config | Thorben | (6) | Pending |
| 8. Per-producer env setup + tokens | Each producer | (4, 7) | Pending |
| 9. Wire picon `#/health/logs` + `#/health/agent` | Tim | (5) | Pending |
| 10. `/skill-evaluate` skill | Tim | (5) | Pending |
| 11. Retrofit frontmatter to remaining 30 skills | All four | (1, 10) | Pending — pairs with q1-2 |

Steps 3–7 bundle naturally with the picon next-session work (`/api/clickup-sprint`, `/api/save-md`). Same env setup, same deploy pipeline.

---

## Locked Decisions (2026-05-06)

1. **Per-producer tokens** ✅ — unspoofable attribution, independent revocation.

2. **Tokens live in Cloudflare env vars**, one per producer (`TELEMETRY_TOKEN_TIM`, `TELEMETRY_TOKEN_HOLLY`, etc). Endpoint reads all `TELEMETRY_TOKEN_*` vars at request time and derives `actor_name` from the env-var suffix when the incoming token matches. Producers cannot spoof each other (they don't have each other's tokens). Migration to a DB-backed `producers` table is a later option if we exceed ~10 producers or want self-service rotation.

3. **Synchronous scope validation** ✅ — endpoint computes `scope_violation` at insert time using the cached frontmatter scope. Cache refreshes on `POST /api/refresh-frontmatter` called by `/skill-evaluate`.

4. **Unattributed mode by default** ✅ — hook script always attempts to send. Missing token = endpoint accepts with `actor_name='unattributed'`, captures hostname/OS-username in `metadata` as soft attribution. Producers gain producer-name attribution by setting `LOTUS_TELEMETRY_TOKEN`. **This means zero setup friction**: pull the repo, hook fires, telemetry flows. Producer attribution is the only thing that requires extra steps.

5. **Logic stability auto-flip deferred** — manual only for v1. The framework supports the `problematic` state but `/skill-evaluate` only sets it on explicit run, never via cron mutation. Revisit when failure data accumulates.

6. **Eda's three subagents are the first instrumented population** — `SubagentStop` hook captures them automatically. No special Eda configuration needed.

### Rollout order

Tim first (champion + willing crash-test dummy). Thorben second (dogfooding while building). Holly + Brann hook up whenever they want — the pipeline is producing data either way thanks to unattributed mode.

---

## What This Doc Is NOT

- **Not the Skill Maturity Framework itself.** That's q1-1, owned by Holly + Tim, lives at `planning/skill_maturity_framework.md` once authored. This doc is the *implementation* that proves a skill meets it.
- **Not a final spec.** v0.1 — Thorben's review will sharpen it. Pricing, exact CF tier choices, and the GitHub App flow for frontmatter mutations will likely shift.
- **Not surveillance infrastructure.** Per-producer attribution exists for accountability and revocation, not dashboards. Default views aggregate by skill.

---

## Change Log

| Date | Change | Author |
|---|---|---|
| 2026-05-06 | v0.1 — Initial design doc, schema, endpoint contracts, hook sketch | Tim Williams + Claude |
