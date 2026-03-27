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
- `planning/ValidationRoadmap.md` — SHQs targeted at this milestone
- `planning/pods/Empire_Plan.md` — Empire features for this milestone
- `planning/pods/Metagame_Plan.md` — Metagame features
- `planning/pods/Battle_Plan.md` — Battle features
- `planning/pods/SocialDynamics_Plan.md` — Social Dynamics features
- `planning/pods/Dozer_Plan.md` — Dozer features
- `planning/pods/Art_Plan.md` — Art features
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
> Sources: product_targets.md, pod plans, ValidationRoadmap.md, capacity.md

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
| SHQ29 | [short question] | Battle HUD Overhaul | ~S29 | NOT STARTED |
```

**Earliest Testable**: The sprint when the feature is far enough along to start evaluating the SHQ. This is when meaningful test data becomes available — not necessarily when the feature ships.

Repeat for each Winning Hypothesis that has SHQs in this milestone.

### Section 4: Pod Order of Operations

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

### Section 5: Cross-Pod Dependencies

```markdown
## Cross-Pod Dependencies

| Dependency | From | To | Sprint | Risk |
|-----------|------|-----|--------|------|
| [description] | [pod] | [pod] | S[N] | [Low/Med/High] |
```

Only include dependencies relevant to THIS milestone.

### Section 6: Gaps and Risks

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
- Pod plans (`planning/pods/*_Plan.md`) are the source of truth for feature priorities
- `product_targets.md` is the source of truth for must-have features
- `ValidationRoadmap.md` is the source of truth for SHQs
- `capacity.md` is the source of truth for staffing
- If a pod has no features defined for this milestone, include it with "[TBD — awaiting feature definitions]"
- The Gantt should make capacity risks VISUALLY obvious — if features overflow the milestone boundary, they'll extend past the end marker
- Always run a target check: compare must-haves to planned features and flag gaps
