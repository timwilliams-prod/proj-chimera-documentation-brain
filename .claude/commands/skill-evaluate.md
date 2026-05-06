---
name: skill-evaluate
description: Score every skill in the armory against the seven Skill Maturity Framework criteria. Combines frontmatter declarations with telemetry from /api/query-events when available. Outputs scorecard markdown + data file for picon's #/health/logs view.
owner: Tim
category: meta

# ─── Skill Maturity Framework (q1-1) ─────────────────────────────────────
logic_stability: vibe
last_maturity_review: 2026-05-06

idempotent: pure
# Re-running produces the same scorecard given the same inputs (frontmatter
# state + telemetry window). No side effects beyond writing output files,
# which are deterministic given inputs.

failure_modes:
  - id: telemetry_unreachable
    description: /api/query-events not configured or returning errors
    detection: HTTP error or env var unset
    mitigation: Fall back to static-only scoring; mark dynamic criteria as 'no data'
  - id: malformed_frontmatter
    description: A skill file has YAML frontmatter that fails to parse
    detection: YAML parse exception per skill
    mitigation: Score that skill as 'frontmatter invalid' with the error message; continue
  - id: missing_frontmatter
    description: A skill file has no YAML frontmatter at all
    detection: First line is not '---'
    mitigation: Score as 'needs frontmatter' (0/7); list at top of report

requires_approval: false
# Read-only against skills + telemetry; writes only to generated/

emits_events:
  - skill_invocation
  - tool_use
  - skill_failure
  - session_end

reversible:
  files: git_commit

scope:
  read:
    - .claude/commands/**
    - .claude/agents/**
    - generated/dashboard_v2/data/**     # to read prior data for diff
  write:
    - generated/reports/skill_maturity_*.md
    - generated/dashboard_v2/data/skill_maturity_data.js
  external_reads:
    - lotus_telemetry                    # /api/query-events
---

# Skill Evaluate Skill

You are scoring every skill in the Lotus skill armory against the **seven Skill Maturity Framework criteria** (q1-1) and producing a scorecard that drives both the producer-facing report and picon's `#/health/logs` view.

> **This skill is the bridge between the framework and the telemetry pipeline.** It reads each skill's declared maturity frontmatter and (when available) its actual telemetry events, then scores each criterion as pass / fail / no data.

---

## What This Skill Does

1. Walks `.claude/commands/*.md` and `.claude/agents/*.md`
2. Parses YAML frontmatter from each file
3. (When telemetry is reachable) Queries `/api/query-events` for the last 30 days per skill
4. Scores each skill against the seven criteria
5. Computes overall maturity status: **vibe / hardening / agent-ready**
6. Writes:
   - `generated/reports/skill_maturity_YYYYMMDD.md` — human-readable scorecard
   - `generated/dashboard_v2/data/skill_maturity_data.js` — picon data file

The skill is **read-only against the armory** — it never modifies a skill file. If `logic_stability` should change, that's the skill owner's call (or a future cron-triggered auto-flip we deliberately deferred).

---

## Modes

Ask the user: **"What would you like to do?"**

- **Full Report** (default): Score every skill, write both outputs.
- **Single Skill**: Score one skill in detail. Useful when an owner is working to graduate a specific skill. Doesn't write the picon data file (would partially-overwrite).
- **Dry Run**: Score every skill, print to console, write nothing.

If unclear, default to Full Report.

---

## How It Works

### 1. Discover skills

```
Glob .claude/commands/*.md → list of skill files
Glob .claude/agents/*.md   → list of agent files
```

Each is treated equivalently — both can carry maturity frontmatter.

### 2. Parse frontmatter per skill

For each file, check whether the first line is `---`. If so, parse the YAML frontmatter block. Capture:
- `name`, `owner`, `category`, `description` (identity)
- `logic_stability` (criterion #1)
- `idempotent` (criterion #2)
- `failure_modes` (criterion #3)
- `requires_approval`, `approval_points` (criterion #4)
- `emits_events` (criterion #5 — declared signal)
- `reversible` (criterion #6)
- `scope` (criterion #7)
- `last_maturity_review`

If the file has no frontmatter at all → mark as `needs_frontmatter` (0/7) and continue. Do not crash the run for one bad skill.

If the YAML fails to parse → mark as `frontmatter_invalid` with the parse error and continue.

### 3. Probe telemetry (best-effort)

Check whether `/api/query-events` is reachable. The endpoint is at `${LOTUS_TELEMETRY_ENDPOINT}` (replacing `log-event` with `query-events`). If `LOTUS_TELEMETRY_ENDPOINT` env var is unset, or the endpoint returns 401/5xx, fall back to **static-only mode**. Record the reason so the report can flag it.

When telemetry IS available, query for each skill (over the last 30 days):
- `total_runs` — `event_type='skill_invocation'`
- `failures` — `event_type='skill_failure'` (split by `failure_mode_id` matched vs `novel`)
- `scope_violations` — `tool_use` events with `scope_violation=1`
- `approval_decisions` — count of `approval_decision` rejections
- `last_run` — most recent `ts`
- `git_sha_coverage` — fraction of write `tool_use` events with non-null `git_sha_after`

### 4. Score each criterion

| Criterion | Pass condition | Static-mode fallback |
|---|---|---|
| **#1 Logic stable** | `logic_stability == 'stable'` | (same — manual field) |
| **#2 Idempotent** | `idempotent ∈ {'additive', 'pure'}` | (same) |
| **#3 Failure modes known** | `failure_modes:` has ≥1 item AND `novel_failures_30d == 0` | Pass if list has ≥1 item (no telemetry available to find novel hits) |
| **#4 Approval gates clear** | If `requires_approval`: `approval_points` declared AND every write `tool_use` in 30d has a preceding `approval_decision='approved'` | Pass if declarations present (cannot verify dynamically) |
| **#5 Observable** | `total_runs_30d > 0` AND `emits_events` declared | "no data" if no telemetry; warn |
| **#6 Reversible** | `reversible:` declared per surface AND `git_sha_coverage > 0.95` for git_commit surfaces | Pass if declarations present |
| **#7 Scope-bounded** | `scope:` declared AND `scope_violations_30d == 0` | Pass if declarations present |

### 5. Compute overall status

```
agent_ready = (all 7 criteria pass) AND (logic_stability == 'stable')

if agent_ready:                    status = 'AGENT-READY'
elif passing >= 5:                 status = 'hardening'
elif passing >= 1:                 status = 'vibe'
else:                              status = 'unstarted'   # e.g. needs_frontmatter
```

**One exception**: if `logic_stability == 'problematic'`, status is always `problematic` regardless of other criteria — regression takes priority over previously-earned passes.

### 6. Auto-flip suggestion (output only — does NOT mutate frontmatter)

If telemetry shows `failures_30d / runs_30d > 0.20` for a skill currently marked `stable`, **suggest** in the report that the owner consider flipping to `problematic`. Do NOT modify the skill file. (Per locked decision #5: explicit only, no cron mutation in v1.)

---

## Output Format

### Console (always)

```
Skill Maturity Scoreboard — 2026-05-06
Telemetry: ✅ live (1,847 events in last 30d)  |  ❌ unavailable, static-mode only

Agent-ready (7/7 + stable):     0   ▓
Hardening   (5-6/7):             4   ▓▓▓▓
Vibe        (1-4/7):            18   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
Problematic:                     1   ▓
Needs frontmatter:              28   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Top blockers across the armory:
  - Frontmatter retrofit:      28 skills need it (paired with q1-2)
  - Failure modes undeclared:   3 skills (sprint-plan, …, …)
  - Scope violations active:    1 skill (spec-sync — wrote outside declared scope 2x)
```

### Report file: `generated/reports/skill_maturity_YYYYMMDD.md`

Section per skill:
```markdown
## sprint-plan
**Status**: hardening · 5/7 criteria pass · last reviewed 2026-05-06

| Criterion | Result | Notes |
|---|---|---|
| 1. Logic stable    | 🟡 hardening    | Manual; awaiting 5 clean runs to mark stable |
| 2. Idempotent      | ✅ additive      | Declared |
| 3. Failure modes   | ✅ 6 declared    | 0 novel failures in last 30d |
| 4. Approval gates  | ✅ declared      | 12 approval events in 30d, 1 rejection (8%) |
| 5. Observable      | ✅ 12 runs/30d   | All 6 declared event types observed |
| 6. Reversible      | ✅ declared      | 100% git_sha coverage |
| 7. Scope-bounded   | ✅ declared      | 0 violations |

**Recent failure mode hits**:
- clickup_rate_limit × 1 (declared) ✅
- capacity_stale × 1 (declared) ✅

**Owner action**: Continue hardening. Next review when failure-free streak hits 5.
```

Top of report: campaign-level rollup + the "Top blockers" summary from console.
Bottom of report: list of skills marked `needs_frontmatter` with quick-fix instructions (copy the sprint-plan frontmatter as the template).

### Picon data file: `generated/dashboard_v2/data/skill_maturity_data.js`

```javascript
// Auto-generated by /skill-evaluate. Do not edit by hand.
const SKILL_MATURITY_DATA = {
  generated_at: "2026-05-06T18:42:11Z",
  telemetry_available: true,
  telemetry_window_days: 30,
  rollup: {
    total_skills: 31,
    agent_ready: 0,
    hardening: 4,
    vibe: 18,
    problematic: 1,
    needs_frontmatter: 28,
  },
  skills: [
    {
      name: "sprint-plan",
      owner: "Tim",
      category: "planning",
      status: "hardening",
      criteria: {
        logic_stability: { result: "hardening", note: "manual" },
        idempotent: { result: "pass", value: "additive" },
        failure_modes: { result: "pass", declared: 6, novel_30d: 0 },
        approval_gates: { result: "pass", reject_rate_30d: 0.08 },
        observable: { result: "pass", runs_30d: 12 },
        reversible: { result: "pass", git_sha_coverage: 1.0 },
        scope: { result: "pass", violations_30d: 0 },
      },
      passes: 5,
      runs_30d: 12,
      failures_30d: 2,
      novel_failures_30d: 0,
      last_run: 1735000000000,
      last_review: "2026-05-06",
    },
    // ... one entry per skill
  ],
};
```

Picon's `renderSkillMaturity()` reads this file and renders the scoreboard table at `#/health/logs`.

---

## Architectural Notes

- **Telemetry is best-effort**, never blocking. The skill must produce a useful report even when `/api/query-events` is unreachable.
- **Frontmatter is the source of truth for declared criteria** (#2, #3 declared, #4 declared, #6 declared, #7 declared). Telemetry adds dynamic verification on top.
- **The skill never mutates a skill file.** `logic_stability` flips are owner decisions. Suggestions go in the report only.
- **The picon data file is regenerated wholesale.** No incremental writes.
- This skill is **append-only safe** — running it twice in a row produces the same scorecard with a fresh timestamp.

---

## Related Skills

- `/sprint-plan` — Reference implementation of the maturity frontmatter shape
- (future) `/skill-armory-audit` — q1-2 deliverable, pairs with this skill for the initial frontmatter retrofit pass
- `/new-skill` — Should be updated to require frontmatter from day one for any new skill

---

## Failure Mode Documentation Template

When this skill encounters a `novel` failure in another skill's telemetry, the report includes a quick-fix line owners can copy into their skill's frontmatter:

```yaml
- id: <slug-from-error-type>
  description: <short description from error_message>
  detection: <error_type>
  mitigation: TODO — owner to document
```

This nudges declared coverage upward over time without making the skill itself a write tool against the armory.
