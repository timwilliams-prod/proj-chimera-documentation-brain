# Generate Milestone Plan

You are generating a **Milestone Plan** — a focused, single-milestone view that shows what we're building, what we're validating, and the order of operations per pod.

**Argument**: `$ARGUMENTS` — the milestone name (e.g., "M&Ms", "M&C", "Beta Prep", "Live Ops", "Soft Launch")

---

## Milestone Name Mapping

| Input | Full Name | Key Dates |
|-------|-----------|-----------|
| M&Ms | Multiplayer & Meta | ~Mar 30 → Jun 23, 2026 |
| Beta Prep | Beta Launch Prep | Jun 24 → Jul 21, 2026 |
| M&C | Monetization & Conversion | Jul 22 → Oct 13, 2026 |
| Live Ops | Live Ops & Social | Oct 14, 2026 → Feb 2, 2027 |
| Soft Launch | Soft Launch (UA Scale) | Feb 3 → May 30, 2027 |

If the argument doesn't match, ask the user to clarify.

---

## Your Task

### 1. Read Planning Sources

Read ALL of these:

- `planning/product_targets.md` — Must-have features and success criteria for this milestone
- `planning/capacity.md` — Team staffing for this milestone (use the milestone column)
- `planning/ValidationPlan.md` — SHQs targeted at this milestone
- `planning/pods/empire/features.md` + `planning/pods/empire/milestone_{ms}.md` — Empire features and sprint allocation for this milestone
- `planning/pods/metagame/features.md` + `planning/pods/metagame/milestone_{ms}.md` — Metagame features and sprint allocation
- `planning/pods/battle/features.md` + `planning/pods/battle/milestone_{ms}.md` — Battle features and sprint allocation
- `planning/pods/social_dynamics/features.md` + `planning/pods/social_dynamics/milestone_{ms}.md` — Social Dynamics features and sprint allocation
- `planning/pods/dozer/features.md` + `planning/pods/dozer/milestone_{ms}.md` — Dozer features and sprint allocation

> **5 active pods**: Empire, Metagame, Battle, Social Dynamics, Dozer. Art Pod was closed 2026-04-13 — `planning/pods/art/` only contains a closure marker. Do not read it as a pod plan and do not produce an Art section in the milestone plan. Artist deliverables roll up under each pod's content track per `planning/capacity.md`.

Replace `{ms}` with the milestone short name (e.g., `milestone_mms.md` for M&Ms, `milestone_mc.md` for M&C, `milestone_beta_prep.md` for Beta Prep, `milestone_live_ops.md` for Live Ops, `milestone_soft_launch.md` for Soft Launch).
- `generated/roadmap.md` — Consolidated view for cross-reference

### 2. Determine Sprint Window

Calculate which sprints fall within this milestone:
- Sprint cadence: 2 weeks
- Sprint 26 (Yodel Yaks): 3/31 - 4/14/2026
- Subsequent sprints follow sequentially
- Count how many full sprints fit in the milestone window

### 3. Generate the Milestone Plan

Output file: `generated/milestone_plans/[ShortName]_MilestonePlan.md`

Examples: `MMs_MilestonePlan.md`, `MC_MilestonePlan.md`, `BetaPrep_MilestonePlan.md`

---

## Output Structure

### Header

```markdown
# [Full Milestone Name] — Milestone Plan

> Generated: [date] by `/generate_ms_plan`
> Sources: product_targets.md, pod plans, ValidationPlan.md, capacity.md

**Dates**: [start] → [end]
**Sprints**: [N] ([sprint numbers and names if known])
**Phase**: [from product_targets.md]
**Goal**: [1-2 sentence goal from product_targets.md]
```

### Section 1: Milestone Timeline (Gantt)

A single Mermaid Gantt showing ALL pods within this milestone's timeframe. Each pod gets its own section. Features that overflow past the milestone boundary should use `crit` styling to make overflow visible.

Rules:
- `dateFormat YYYY-MM-DD`, `axisFormat %b %d`, `tickInterval 2week`
- One `section` per pod (split into sub-sections for parallel pipelines like Metagame A/B)
- Include engineering capacity in the section header: `section Empire (1 ENG: Henrique)`
- Mark features as `active` if IN PROGRESS, `done` if completed, `crit` if at-risk/overflow, default if NOT STARTED
- Only show features scheduled for THIS milestone (plus overflow from previous if relevant)
- Keep task names clean — no special characters. Use "and" not "&"
- Add milestone end date as a marker in a separate section

### Section 2: Must-Have Feature Coverage

A table mapping each must-have from `product_targets.md` to the pod feature that covers it:

```markdown
## What Are We Building? — Must-Have Coverage

| Must-Have Feature | Responsible Pod | Planned Feature | Sprint Window | Coverage |
|-------------------|----------------|-----------------|---------------|----------|
| [from targets] | [pod] | [feature from pod plan] | S26-S28 | ✅ Covered |
| [from targets] | [pod] | [partial match] | - | ⚠️ Partial |
| [from targets] | [pod] | - | - | ❌ Gap |
```

Coverage values:
- ✅ **Covered** — A specific pod feature maps directly to this must-have
- ⚠️ **Partial** — Related work exists but doesn't fully address the must-have
- ❌ **Gap** — No pod feature addresses this must-have

### Section 3: SHQ Validation Plan

A table showing every SHQ targeted at this milestone, organized by Winning Hypothesis:

```markdown
## What Are We Validating? — SHQ Plan

### WH-1: Battle Hypothesis

| SHQ | Question | Validating Feature(s) | Earliest Testable | Status |
|-----|----------|----------------------|-------------------|--------|
| SHQ4-1 | [short question] | Battle HUD Overhaul | ~S29 | NOT STARTED |
```

**Earliest Testable**: The sprint when the feature is far enough along to start evaluating the SHQ. This is when meaningful test data becomes available — not necessarily when the feature ships.

Repeat for each Winning Hypothesis that has SHQs in this milestone.

### Section 4: Milestone Checkpoint Plan

A cross-pod synthesis of the per-pod **Checkpoint Goals** sections (read from each `planning/pods/{pod}/milestone_{ms}.md`). Checkpoints divide the milestone into ~monthly phases (e.g. M&Ms has CP1, CP2, CP3) and each pod owns 2-5 outcome bullets per checkpoint.

```markdown
## Milestone Checkpoint Plan

### [Checkpoint Name] (date range)

**Cross-pod theme**: [1-line synthesis of what this checkpoint is collectively about]

| Pod | Checkpoint Outcomes |
|-----|---------------------|
| Empire | • [outcome 1]<br>• [outcome 2] |
| Metagame | • [outcome 1]<br>• [outcome 2] |
| Battle | • [outcome 1] |
| Social Dynamics | • [outcome 1] |
| Dozer | • [outcome 1] |
| Art | • [outcome 1] |

**Checkpoint risks**: [any cross-pod risks specific to hitting this checkpoint]
```

Repeat for each checkpoint defined by the pods.

Rules:
- If a pod hasn't defined Checkpoint Goals in their `milestone_{ms}.md`, mark it **⚠️ Missing — pod has not authored checkpoint outcomes** and surface in Gaps/Risks.
- The **cross-pod theme** is your synthesis — what's the collective story for this checkpoint? (e.g., "CP2 is when multiplayer infra meets first cross-pod consumer; Battle HUD eng begins.")
- Use checkpoint names exactly as the pods write them (typically "M&M Checkpoint 1" / "CP1" — match style).

### Section 5: Pod Order of Operations

For EACH pod with features in this milestone, generate a sprint-by-sprint breakdown:

```markdown
## Pod Order of Operations

### [Pod Name]

**Staffing**: [list all people assigned to this pod for this milestone, from capacity.md]
**Engineering**: [N]x ENG ([names])
**Design**: [names]
**Art**: [names if applicable]
**QA**: [name if applicable]

| Sprint | Engineering Focus | Design/Art Focus | SHQs Under Test |
|--------|------------------|-----------------|-----------------|
| S26 (3/31-4/14) | [Feature (X/Y)] | [Design work] | [SHQ IDs] |
| S27 (4/14-4/28) | [Feature] | [Design work] | [SHQ IDs] |
| ... | ... | ... | ... |
```

Rules:
- Show engineering progress as fractions: "HUD Overhaul (2/4)" means sprint 2 of 4
- Show design work happening in parallel (designers can prep future features while engineering works on current)
- Show SHQs as "under test" during the sprints when relevant features are being built or shortly after
- If a feature overflows past the milestone, add an "⚠️ Overflow" row showing what spills
- For pods with parallel pipelines (Metagame), show "Pipeline A" and "Pipeline B" columns instead of a single Engineering column
- For phased pods (Social Dynamics), show phases in the Engineering column

In the per-pod table, also include a **Checkpoint Outcomes** subsection beneath the sprint table that restates the pod's checkpoint goals (so the per-pod section is self-contained for that pod's lead):

```markdown
**Checkpoint Outcomes** (from pod milestone plan):
- **CP1**: [outcomes]
- **CP2**: [outcomes]
- **CP3**: [outcomes]
```

### Section 6: Cross-Pod Dependencies

```markdown
## Cross-Pod Dependencies

| Dependency | From | To | Sprint | Risk |
|-----------|------|-----|--------|------|
| [description] | [pod] | [pod] | S[N] | [Low/Med/High] |
```

Only include dependencies relevant to THIS milestone.

### Section 7: Gaps and Risks

```markdown
## Gaps and Risks

### Must-Have Gaps
- [Feature from product_targets.md that has no pod coverage]

### Capacity Risks
- [Pod]: [description of capacity constraint]

### Validation Risks
- [SHQ]: [risk to testability within milestone]

### Open Questions
- [ ] [Unresolved question affecting this milestone]
```

---

## Notes

- This is a **generated** file — it lives in `generated/milestone_plans/` and can be regenerated at any time
- Pod feature files (`planning/pods/{pod}/features.md`) are the source of truth for feature priorities
- `product_targets.md` is the source of truth for must-have features
- `ValidationPlan.md` is the source of truth for SHQs
- `capacity.md` is the source of truth for staffing
- If a pod has no features defined for this milestone, include it with "[TBD — awaiting feature definitions]"
- The Gantt should make capacity risks VISUALLY obvious — if features overflow the milestone boundary, they'll extend past the end marker
- Always run a target check: compare must-haves to planned features and flag gaps
- Checkpoint Goals come from each pod's `planning/pods/{pod}/milestone_{ms}.md` — the milestone plan synthesizes them, it does NOT author them. If a pod is missing checkpoint goals, surface the gap rather than inventing outcomes.
