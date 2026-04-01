# Skill Evaluation: /risk-evaluation & /roadmap-update

Date: 2026-03-24

---

## Original Query

> Can you please evaluate & recommend changes to the /risk-evaluation and /roadmap-update commands based on our progress so far, as well as the ..\brain-template\project-charter.md file.

---

## Evaluation Inputs

- `.claude/commands/risk-evaluation.md` — current skill definition
- `.claude/commands/roadmap-update.md` — current skill definition
- `brain-template/project-charter.md` — architecture reference / charter
- Current brain state: all planning/, generated/, and reference/ files

---

# /risk-evaluation

## What's Working Well

- **Core triangle is solid**: targets vs plans vs resources comparison is correctly implemented and matches the charter's "Three-Layer Architecture"
- **Risk categories are comprehensive**: target gaps, capacity, timeline, dependency, validation, and process risks cover the space well
- **Output format is structured and actionable**: severity matrix, per-risk detail, recommended actions
- **Evaluation modes** (Quick Scan, Deep Dive, Pre-Milestone, etc.) are a useful feature
- **"Flag, Don't Fix" principle** from the charter is respected — skill produces a report, no file changes

## Recommended Changes

### 1. Add `feature_registry.md` to the read list (Charter gap)

The charter explicitly lists `feature_registry.md` as an authoritative file in the architecture. Currently the skill doesn't read it.

**Why it matters**: The registry is the only place that tracks which features have specs and which don't. Currently only Empire features are registered — Battle, Metagame, Social Dynamics, Art, and Dozer features are all missing. This is a process risk the skill should catch.

**Recommendation**: Add to Step 1 (Read Project State), after item 6:
```
7. `planning/feature_registry.md` - Which features have specs? Which are stubs?
```

Add a new check under **Process Risks**:
```
- Features in pod plans or product_targets that aren't in the feature registry
- Features in the registry with "Needs Spec" status that are starting soon
```

### 2. Add `planning/TechnicalDebt.md` as a risk source

Tech debt exists as a managed ledger but the risk-eval skill doesn't consider it.

**Why it matters**: Active tech debt items can block features, consume engineering capacity, or create compounding risk. Even with 0 items today, the skill should be wired to check it as the ledger grows.

**Recommendation**: Add to Step 1:
```
8. `planning/TechnicalDebt.md` - Active debt items that could affect planned work
```

Add a new risk pattern:
```
#### Tech Debt Risks
- Active debt items that affect in-progress or upcoming features
- Debt items that consume engineering capacity from planned work
- Features being built on top of known debt (compounding risk)
```

### 3. Add internal consistency checking

The ValidationPlan currently has contradictions: BHQ sections show SHQs as "ANSWERED" but the milestone-level SHQ tables still show "NOT STARTED." The skill should catch this.

**Recommendation**: Add under **Validation Risks**:
```
- Internal inconsistencies between BHQ-level and milestone-level SHQ statuses
- Stale "Last Updated" or "Last Evaluated" timestamps
```

### 4. Group recommended actions by owner (Charter principle)

The charter's Skill Design Principles say "Questions Grouped by Owner" (from capacity.md). Currently the skill's output format groups by risk severity only.

**Recommendation**: Add an **Action Items by Owner** section to the output format, after the prioritized actions:
```
## Action Items by Owner (from capacity.md)

### [Person / Role]
- [Action from Risk X]
- [Action from Risk Y]
```

### 5. Add graceful degradation guidance (Charter principle)

The charter says skills should "do useful work with what's available" if sources are missing. The skill doesn't address missing files.

**Recommendation**: Add a note to Step 1:
```
If any file is missing or empty, note it as a **Process Risk** (missing documentation)
and continue with available files. Do not halt the evaluation.
```

### 6. Persist reports for historical tracking

The skill generates a report but doesn't save it. There's no way to track risk trends over time or diff "since last evaluation."

**Recommendation**: Add to Step 5 (Generate Report):
```
Save the report to `generated/reports/risk_eval_[YYYY-MM-DD].md`.
If a previous report exists, note key changes in the summary (new risks, resolved risks, escalations).
```

### 7. Add product_targets.md [TBD] flagging

product_targets.md has heavy [TBD] sections in later milestones. The skill mentions flagging TBDs in feature docs, but not in product_targets itself.

**Recommendation**: Add under **Target Gaps**:
```
- Milestones with [TBD] must-have features (undefined targets can't be planned against)
- Success criteria that are still [TBD] for approaching milestones
```

---

# /roadmap-update

## What's Working Well

- **Clear read-then-validate-then-update flow** follows the charter's "Read-Assess-Act-Summarize" pattern
- **Gantt rebuild instructions** are specific and produce consistent output
- **Validation cross-check** is included (Step 3 and Step 6c)
- **Status mapping** and ID conventions are well-defined
- **Idempotent regeneration** — safe to run repeatedly per charter principle
- **Output summary format** covers changes, target impact, capacity impact, and validation impact

## Recommended Changes

### 1. Update `feature_registry.md` when adding features (Charter gap)

The charter's file relationships diagram shows `feature_registry.md` sits between `product_targets.md` and `features/*.md`. Currently the skill says "note that a features/*.md doc should be created" for new features, but doesn't mention the registry.

**Why it matters**: If a feature gets added to a pod plan but not to the registry, `/spec-sync` won't know about it. The registry drifts out of sync.

**Recommendation**: Update Step 4 to include:
```
- If a new feature is added, also add it to `planning/feature_registry.md` with
  Pod, Milestone, and "Needs Spec" status
```

### 2. Add multi-milestone feature display guidance

Metagame already has features defined across M&Ms, M&C, Live Ops, and Soft Launch. But the pod section template in Step 6b only shows a single milestone ("Next Milestone Features"). This causes information loss when regenerating.

**Recommendation**: Update the pod section template to support multiple milestones:
```markdown
**[Current/Next Milestone] Features**:
| # | Feature | Estimate | Status |
...

**[Future Milestone] Features** (if defined):
| # | Feature | Estimate | Status |
...
```

Add guidance: "Include all milestones that have defined features in the pod plan. Don't discard future milestone definitions during regeneration."

### 3. Add Gantt scaling strategies

The Gantt is approaching the 30-bar readability limit. The skill states the limit but doesn't explain what to do when it's hit.

**Recommendation**: Add to the Visual Roadmap Rules section:
```
### When the Gantt Exceeds 30 Bars
- Consolidate future milestone features into single bars (e.g., "M&C - 9 features")
- Only show individual bars for the current + next milestone
- Merge ongoing/continuous tracks (e.g., "Battle Content" + "Unit Content" -> "Battle Content Pipeline")
- Consider splitting into two Gantts if needed (e.g., "Near-term" and "Full Roadmap")
```

### 4. Add parallel pipeline notation

Metagame uses parallel engineering pipelines (A and B). The Gantt and skill don't address this pattern.

**Recommendation**: Add to Visual Roadmap Rules:
```
### Parallel Pipelines
When a pod has multiple engineers working in parallel:
- Use sub-IDs: meta_a1, meta_a2 (Pipeline A) and meta_b1, meta_b2 (Pipeline B)
- In the Gantt, parallel tasks share the same start date but run independently
- In the pod section table, add a "Pipeline" column when applicable
```

### 5. Pull pod leadership from `capacity.md` (data accuracy)

The Art pod section in roadmap.md currently shows "[TBD]" for pod lead and producer, but `capacity.md` has this data (Kevin Griffith as Art Director, Brann Livesay as Producer). The skill should cross-reference.

**Recommendation**: Update Step 6b:
```
Pull Pod Lead, Producer, and Eng Lead from the Pod Leadership Summary table
in `planning/capacity.md`. If the pod plan has different names, flag the discrepancy.
```

### 6. Add phase-based planning support

Social Dynamics uses a P1-P10 phased approach that doesn't fit the standard feature table format. The skill should accommodate this.

**Recommendation**: Add a note to the pod section template:
```
If a pod uses phased planning (e.g., P1-P10 build-up), use a Phase column
instead of Feature number:
| Phase | Feature | Status |
|-------|---------|--------|
| P1 | Infrastructure & Foundation | IN PROGRESS |
```

### 7. Add tech debt cross-check

When updating the roadmap, features may depend on or conflict with active tech debt items.

**Recommendation**: Add to Step 3 (Validate Changes):
```
- **Check tech debt**: Do any planned features depend on systems with active debt items
  in `planning/TechnicalDebt.md`? Flag if so.
```

### 8. Add stale validation data warning

The ValidationPlan has internal inconsistencies. When the roadmap-update skill pulls validation info for pod sections, it could propagate stale data.

**Recommendation**: Add to Step 6b:
```
When pulling validation info, check that the SHQ statuses in the pod plan match
the statuses in `planning/ValidationPlan.md`. If they differ, use the
ValidationPlan as authoritative and flag the discrepancy.
```

### 9. Add graceful degradation for missing pod plans

The charter says skills should degrade gracefully. What if a pod is referenced in product_targets but has no plan file yet?

**Recommendation**: Add to Step 1:
```
If a pod referenced in product_targets.md has no *_Plan.md file, flag it as a gap
and include a placeholder section in the regenerated roadmap with "[Awaiting Pod Plan]".
```

---

# Summary: Changes by Priority

## High Priority (address before next use)

| # | Skill | Change | Rationale |
|---|-------|--------|-----------|
| 1 | Both | Add `feature_registry.md` to read/update flow | Charter architecture requires it; registry is already drifting (only Empire features registered) |
| 2 | `/roadmap-update` | Multi-milestone feature display | Metagame data will be lost on next regeneration |
| 3 | `/risk-evaluation` | Add internal consistency checking | ValidationPlan already has contradictions that should be caught |

## Medium Priority (next refinement pass)

| # | Skill | Change | Rationale |
|---|-------|--------|-----------|
| 4 | Both | Add `TechnicalDebt.md` cross-check | Infrastructure exists, just needs wiring |
| 5 | `/risk-evaluation` | Persist reports to `generated/reports/` | Enables trend tracking and "since last eval" comparisons |
| 6 | `/roadmap-update` | Gantt scaling strategies | Approaching 30-bar limit now |
| 7 | `/roadmap-update` | Pull pod leadership from capacity.md | Prevents [TBD] when data exists |
| 8 | Both | Graceful degradation notes | Charter principle; prevents skill failures on incomplete data |

## Low Priority (nice to have)

| # | Skill | Change | Rationale |
|---|-------|--------|-----------|
| 9 | `/risk-evaluation` | Group actions by owner | Charter principle; improves actionability |
| 10 | `/roadmap-update` | Parallel pipeline notation | Only affects Metagame currently |
| 11 | `/roadmap-update` | Phase-based planning support | Only affects Social Dynamics currently |
| 12 | `/risk-evaluation` | Flag product_targets [TBD] sections | Later milestones have heavy TBDs |
| 13 | `/roadmap-update` | Stale validation data warning | Defensive; prevents propagating bad data |

---

# Charter Alignment Notes

The `brain-template/project-charter.md` uses slightly different naming conventions than our actual brain:

| Charter Name | Our Brain Name |
|-------------|---------------|
| `teams/` | `planning/pods/` |
| `validation_roadmap.md` | `ValidationPlan.md` |
| `global_rules.md` | `GlobalRules.md` |
| `*_plan.md` | `*_Plan.md` |

Both skills use our actual naming (correct). If we adopt the charter template for other projects, we should standardize on one convention. The charter's Core Skills table also understates what `/risk-evaluation` reads — it lists only "product_targets, roadmap, capacity" but the skill actually reads 7+ files, which is appropriate.
