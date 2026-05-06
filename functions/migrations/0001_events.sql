-- 0001_events.sql
-- Initial schema for the Lotus telemetry pipeline.
--
-- Apply with:
--   wrangler d1 execute lotus-events --remote --file=functions/migrations/0001_events.sql
--
-- Or for local dev:
--   wrangler d1 execute lotus-events --local --file=functions/migrations/0001_events.sql
--
-- Bind D1 in wrangler.toml (or via Cloudflare dashboard → Pages → Settings →
-- Functions → D1 database bindings):
--   binding = "LOTUS_EVENTS"   database_name = "lotus-events"
--
-- See generated/friction_boss/observability_design.md for the full design.

CREATE TABLE IF NOT EXISTS events (
  -- Identity
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  ts            INTEGER NOT NULL,            -- server-set epoch ms (UTC)
  client_ts     INTEGER,                     -- hook's wall-clock ms (clock skew detection)

  -- Actor
  actor_type    TEXT NOT NULL,               -- 'producer' | 'agent' | 'subagent'
  actor_name    TEXT NOT NULL,               -- 'Tim' | 'unattributed' | 'eda-brain-search' | etc

  -- Session / run grouping
  session_id    TEXT NOT NULL,               -- Claude Code session id
  run_id        TEXT,                        -- skill invocation id (optional, set by skill)
  parent_run_id TEXT,                        -- subagent_use → parent skill's run_id

  -- Event discriminator
  event_type    TEXT NOT NULL,               -- skill_invocation | tool_use | etc

  -- Skill context
  skill         TEXT,                        -- 'sprint-plan' (no leading slash)

  -- Tool context (for tool_use)
  tool          TEXT,                        -- 'Edit' | 'Write' | 'Bash' | mcp__* | etc
  target_path   TEXT,                        -- file path for file tools
  diff_hash     TEXT,                        -- sha-256 truncated, post-write

  -- Failure context (for skill_failure)
  failure_mode_id  TEXT,                     -- frontmatter id, or 'novel'
  error_type       TEXT,                     -- short slug
  error_message    TEXT,                     -- truncated to 500 chars

  -- Approval gate context (for approval_*)
  approval_point    TEXT,                    -- frontmatter approval_points id
  approval_decision TEXT,                    -- 'approved' | 'rejected' | 'modified'

  -- Performance / cost
  duration_ms   INTEGER,
  tokens_in     INTEGER,
  tokens_out    INTEGER,
  cost_usd      REAL,

  -- Reversibility tracking (criterion #6)
  git_sha_before TEXT,
  git_sha_after  TEXT,

  -- Scope check (criterion #7) — server-computed at insert time
  scope_violation INTEGER DEFAULT 0,         -- 0 | 1 (SQLite has no boolean)

  -- Free-form metadata
  metadata      TEXT                         -- JSON blob
);

-- Hot read indexes
CREATE INDEX IF NOT EXISTS idx_ts          ON events(ts);
CREATE INDEX IF NOT EXISTS idx_actor_ts    ON events(actor_name, ts);
CREATE INDEX IF NOT EXISTS idx_skill_ts    ON events(skill, ts);
CREATE INDEX IF NOT EXISTS idx_event_type  ON events(event_type);
CREATE INDEX IF NOT EXISTS idx_run         ON events(run_id);
CREATE INDEX IF NOT EXISTS idx_session     ON events(session_id);

-- Partial index — failure analysis
CREATE INDEX IF NOT EXISTS idx_failure_mode
  ON events(skill, failure_mode_id)
  WHERE event_type = 'skill_failure';
