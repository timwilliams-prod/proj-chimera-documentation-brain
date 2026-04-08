# QVR Report Skill

You are generating a **Quarterly Validation Review (QVR) report** — the end-of-quarter evaluation presented to executive stakeholders.

> **Architecture**: QVR Goals + Pulse Check history + Brain planning docs + ClickUp state --> QVR Report

---

## Context

QVRs happen every **3 months**, aligned to calendar quarters. They serve two purposes:
1. **Review** the quarter's goals — what was achieved, what wasn't, and why
2. **Set** goals for the next quarter

The QVR culminates in a **CRAPS decision** (Continue / Reset / Advance / Pivot / Sunset) by executive stakeholders.

**Audience**: Holly Mellor (EP), James Fielding (GD), executive stakeholders (Jing, etc.)
**Tone**: Executive-level, evidence-based, candid about outcomes.

---

## Your Task

### 1. Determine Report Context

- **Which quarter is ending**: Check today's date
- **QVR goals file**: `planning/qvr/q{N}_{year}_goals.md`
- **Pulse Check history**: `generated/reports/pulse_checks/` — all reports from this quarter
- **Active milestone**: From `planning/product_targets.md`

### 2. Read Source Files

| File | Used For |
|------|----------|
| `planning/qvr/q{N}_{year}_goals.md` | Goals being evaluated |
| `generated/reports/pulse_checks/pulse_check_*.md` | Monthly trajectory (all from this quarter) |
| `planning/product_targets.md` | Milestone alignment |
| `planning/capacity.md` | Team size, changes over quarter |
| `planning/ValidationPlan.md` | Validation progress across the quarter |
| `generated/roadmap.md` | Feature delivery status |
| `generated/reports/risk_eval_*.md` | Risk trends over the quarter |
| `planning/TechnicalDebt.md` | Debt accumulated or resolved |

### 3. Generate the Report

---

#### High-Level Summary

2-3 paragraphs capturing the quarter's story arc. What was the plan, what actually happened, what does it mean?

End with the recommended **CRAPS decision** and rationale:
- **Continue**: Staying the course, goals and direction are correct
- **Reset**: Direction is right but execution needs adjustment
- **Advance**: Ahead of plan, ready to accelerate
- **Pivot**: Significant direction change needed based on learnings
- **Sunset**: [Unlikely for an active project but include for completeness]

```markdown
> **Recommended Decision**: [Continue / Reset / Advance / Pivot]
> - [Ramifications: staffing changes, milestone changes, budget changes if any]
```

---

#### Goal Outcomes

For each QVR goal, provide a final assessment:

```markdown
## Goal Outcomes

### [Status] Goal 1: [Title]

**Final Status**: Completed / Partially Completed / Not Completed
**Pulse Check Trajectory**: [On Track -> On Track -> Completed] or [On Track -> At Risk -> Will Not Complete]

**What was accomplished**:
- [Specific deliverables completed]

**What was not accomplished** (if applicable):
- [What fell short and why]

**Key Learnings**:
- [What did we learn from pursuing this goal?]

**Carry-Forward** (if applicable):
- [What should carry into next quarter's goals?]
```

---

#### Validation Progress

From `ValidationPlan.md`, summarize the quarter's validation outcomes:

```markdown
## Validation Progress

### Winning Hypothesis Confidence

| Hypothesis | Start of Quarter | End of Quarter | Trend | Notes |
|-----------|-----------------|----------------|-------|-------|
| WH-1: Battle | [Level] | [Level] | [+/=/–] | |
| WH-2: Empire | [Level] | [Level] | [+/=/–] | |
| WH-3: Monetization | [Level] | [Level] | [+/=/–] | |

### SHQs Answered This Quarter
- [List SHQs that moved to ANSWERED with their findings]

### SHQs Still Open
- [List SHQs that are IN PROGRESS or NOT STARTED]
```

---

#### Team & Capacity Review

```markdown
## Team & Capacity

**Team Size**: [N] (start of quarter) -> [N] (end of quarter)

### Changes This Quarter
- [Hires, departures, transfers, role changes]

### Capacity Observations
- [Were we staffed correctly for the goals?]
- [Any persistent overload or underutilization?]
- [Staffing risks that materialized or didn't]
```

---

#### Iteration Cycle Time

```markdown
## Iteration Cycle Time

- **What improved**: [Build-measure-learn loop improvements]
- **Biggest bottleneck**: [Current constraint and where it shows up]
- **Next change to try**: [Process/workflow change for next quarter]
```

If ICT data isn't available in the brain, flag it as needing manual input from the team.

---

#### Expectations for Next Quarter

```markdown
## Looking Ahead: Q[N+1] [Year]

### Milestone Context
- [Which milestone(s) span next quarter]
- [Key dates and deadlines]

### Proposed Goals for Next Quarter
Based on this quarter's outcomes and current trajectory, proposed goals:

1. [Proposed goal — connected to milestone must-haves]
2. [Proposed goal — connected to validation needs]
3. [Proposed goal — connected to team/process improvement]

> These are starting points for the QVR goal-setting discussion, not commitments.

### Open Questions for Executive Discussion
- [Strategic questions that need resolution]
- [Scope/priority questions]
- [Resource questions]
```

---

### 4. Write the Report

Save to `generated/reports/qvr_reports/qvr_q{N}_{year}.md`.

Include metadata header:

```markdown
---
Quarter: Q[N] [Year]
Dates: [Quarter start] - [Quarter end]
Active Milestone: [Name]
Goals Source: planning/qvr/q{N}_{year}_goals.md
Pulse Checks: [List of pulse check dates this quarter]
Generated: [Date]
---
```

### 5. Prepare Next Quarter's Goals File

If the QVR is reviewing Q{N}, create a stub for Q{N+1}:
- Copy the template structure from the current quarter's goals file
- Pre-populate with any carry-forward items from goal outcomes
- Pre-populate proposed goals from the "Looking Ahead" section
- Save to `planning/qvr/q{N+1}_{year}_goals.md`

Ask the user before writing: "Want me to create the Q{N+1} goals file with carry-forward items?"

### 6. Update QVR Goals File

Mark the quarter's goals file with final statuses. Add a "Quarter Closed" section at the top:

```markdown
> **Quarter Closed**: [Date]. Final assessment captured in `generated/reports/qvr_reports/qvr_q{N}_{year}.md`.
> CRAPS Decision: [Decision]
```

### 7. Report to User

Summarize:
- Goal outcomes at a glance
- Recommended CRAPS decision and why
- Validation confidence changes
- Key items for executive discussion
- Whether next quarter's goals file was created
- Remind user to add qualitative context (ICT data, morale, stakeholder feedback) before the QVR meeting

---

## Notes

- QVRs are **heavyweight** — they're the most important planning checkpoint each quarter
- The CRAPS decision has real consequences (staffing, budget, direction) — be evidence-based
- Use Pulse Check trajectory to show trends, not just point-in-time status
- If this is the first QVR (no previous quarter's goals), note that and focus on milestone evaluation
- Always propose next quarter's goals — gives the QVR meeting something concrete to react to
- Cross-reference ValidationPlan.md to connect feature delivery to hypothesis confidence
