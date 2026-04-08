# Pulse Check Report Skill

You are generating a **monthly Pulse Check report** that helps Holly (Executive Producer) and James (Game Director) understand team progress against quarterly QVR goals.

> **Architecture**: QVR Goals + Brain planning docs + ClickUp state + recent reports --> Pulse Check markdown report

---

## Context

Pulse Checks are **monthly check-ins** between the Lotus team and executive stakeholders. They happen between QVRs (Quarterly Validation Reviews). The report should be distributed **48 hours before** the meeting.

**Audience**: Holly Mellor (EP), James Fielding (GD), executive stakeholders
**Tone**: Executive-level — concise, honest, forward-looking. Lead with status, follow with context.

---

## Your Task

### 1. Determine Report Context

Figure out:
- **Which quarter**: Check today's date against calendar quarters (Q1: Jan-Mar, Q2: Apr-Jun, Q3: Jul-Sep, Q4: Oct-Dec)
- **Which month in the quarter**: 1st, 2nd, or 3rd month (affects framing — early = setting pace, mid = course corrections, late = closing out)
- **Active milestone**: From `planning/product_targets.md`
- **Previous Pulse Check**: Check `generated/reports/pulse_checks/` for the most recent report

### 2. Read Source Files

Read ALL of these:

| File | Used For |
|------|----------|
| `planning/qvr/q{N}_{year}_goals.md` | **Primary** — the goals being evaluated |
| `planning/product_targets.md` | Milestone context, must-have features |
| `planning/capacity.md` | Team size, staffing, open roles, known risks |
| `planning/ValidationPlan.md` | Validation progress (WH confidence, SHQ status) |
| `generated/roadmap.md` | Feature delivery status |
| `planning/pods/*/features.md` | Per-pod feature progress |
| `planning/dependency_map.md` | Cross-pod blockers |
| `planning/TechnicalDebt.md` | Active debt items affecting delivery |

**Also check**:
- `generated/reports/risk_eval_*.md` — Most recent risk evaluation
- `generated/reports/pulse_checks/` — Previous Pulse Check for delta comparison
- `generated/sprint_plans/` — Recent sprint plans for velocity context

**If QVR goals file doesn't exist**: Warn the user that goals haven't been set for this quarter. Offer to help populate them. Still generate the report using milestone targets as a proxy for goals.

### 3. Check ClickUp State

Pull current sprint data for velocity context:
- Use the Sprints folder (`90124992719`) to find the current sprint list
- Get task counts by status and pod
- Note any blocked tasks

Check SHQ Tracker (`901324723345`) for validation progress:
- Epic statuses for active SHQs

**If ClickUp is unavailable**: Note it in the report and continue with brain-file data only.

### 4. Generate the Report

The report has **6 sections**. Generate each one:

---

#### Section 1: Executive Summary

2-3 paragraphs summarizing:
- What happened since the last Pulse Check (or QVR if this is the first)
- Key wins and key concerns
- Overall confidence in the game — has it increased or decreased, and why?

End with a clear signal: "Confidence is [stable / increasing / decreasing] because [reason]."

---

#### Section 2: Goal Summary

A quick-reference table of all QVR goals and their current status.

```markdown
## Goal Summary

| # | Goal | Status | Confidence | Notes |
|---|------|--------|------------|-------|
| 1 | [Goal title] | On Track / At Risk / Completed / Will Not Complete | [Brief signal] |
| 2 | [Goal title] | ... | | |
| 3 | [Goal title] | ... | | |
```

If no QVR goals are set, use milestone must-haves from `product_targets.md` as proxy goals and note this clearly.

---

#### Section 3: Goal Breakdown / Notes

For each goal, provide a detailed status update:

```markdown
## Goal Breakdown

### [Status Icon] Goal 1: [Title]
**Status**: [On Track / At Risk / Completed / Will Not Complete]

**Progress Since Last Check**:
- [What was accomplished]
- [What moved forward]

**Current State**:
- [Where things stand right now]
- [Reference specific features, SHQs, or ClickUp tasks]

**Blockers / Risks** (if At Risk or Will Not Complete):
- [What's blocking progress]
- [What assistance is needed]

**Next Steps**:
- [What needs to happen before next check-in]
```

Use these status icons:
- On Track: `[ON TRACK]`
- At Risk: `[AT RISK]`
- Completed: `[COMPLETED]`
- Will Not Complete: `[WILL NOT COMPLETE]`

Cross-reference each goal against:
- Relevant must-have features from `product_targets.md`
- Pod plan progress from `planning/pods/*/features.md`
- Validation progress from `ValidationPlan.md` (which SHQs relate to this goal?)
- Risk evaluation findings from `generated/reports/risk_eval_*.md`

---

#### Section 4: Team Size Summary

```markdown
## Team Size

**Current Team**: [N] people
- Full-Time: [N]
- Embedded: [N]
- Contractors: [N]

### Staffing by Discipline

| Discipline | Count | Notes |
|-----------|-------|-------|
| Engineering | [N] | |
| Design | [N] | |
| UX/UI | [N] | |
| Art | [N] | |
| QA | [N] | |
| Production | [N] | |
| Leadership | [N] | |

### Proposed Changes / Open Roles

| Role | Status | Pod | Impact | Timeline |
|------|--------|-----|--------|----------|
| [Role] | Open / Interviewing / Offer Out / Filled | [Pod] | [What this enables or blocks] | [Expected fill date] |

### Notable Team Changes (Since Last Check)
- [New hires, departures, transfers, role changes]
```

Source this from `planning/capacity.md`. If there are no open roles or changes, say so explicitly ("No open roles or team changes this period").

---

#### Section 5: Team Health Summary

```markdown
## Team Health

### Overall Assessment
[1-2 paragraphs on team morale, workload, and effectiveness]

### Highlights
- [Wins — what's working well from a "how we work" perspective]
- [Process improvements that are paying off]

### Concerns
- [Workload issues — anyone overloaded?]
- [Morale signals — anything concerning?]
- [Process friction — what's slowing people down?]
```

Source this from:
- `planning/capacity.md` — Known staffing risks (split responsibilities, single points of failure)
- Recent sprint plans — Are people consistently overloaded?
- Risk evaluation — Capacity risks flagged
- Note: This section will always be partially qualitative. Flag where you're inferring vs. where you have data. Prompt the user to add context the skill can't see (morale signals, 1:1 feedback, etc.).

---

#### Section 6: Blockers, Risks, Needs & Asks

```markdown
## Blockers, Risks, Needs & Asks

### Active Blockers
- [Things currently preventing progress — be specific]

### Top Risks
- [From risk evaluation + sprint plan analysis]
- [Timeline risks, capacity risks, dependency risks]

### Needs & Asks
- [Specific requests for executive stakeholders]
- [Include expected costs, benefits, alternatives where applicable]
- [These become action items for Holly/James]

### Open Questions
- [Unresolved questions that need executive input]
```

Source blockers and risks from:
- `generated/reports/risk_eval_*.md` — Most recent risk evaluation
- Sprint plans — Carry-over risks, blocked tasks
- `planning/TechnicalDebt.md` — Debt items affecting delivery
- `planning/dependency_map.md` — Cross-pod blocking dependencies

For Needs & Asks: Look for signals in risk evaluation (staffing gaps, scope pressure) and surface them as actionable requests.

---

### 5. Write the Report

Save the markdown report to `generated/reports/pulse_checks/pulse_check_YYYY-MM.md`.

Include a metadata header:

```markdown
---
Quarter: Q[N] [Year]
Month: [Month Name] [Year]
Active Milestone: [Name]
QVR Goals Source: planning/qvr/q[N]_[year]_goals.md
Previous Pulse Check: [date or "None"]
Generated: [Date]
---
```

### 5b. Generate Pulse Check Dashboard Data

Also generate `generated/reports/pulse_checks/pulse_check_data.js` for the HTML viewer at `generated/reports/pulse_checks/index.html`.

The data file drives a standalone web page with collapsible goal breakdowns. Structure:

```javascript
const PULSE_CHECK_DATA = {
  meta: {
    quarter, month, milestone, goals_source, previous_pulse_check, generated
  },
  executive_summary: "...", // HTML string — paragraphs, confidence signal div
  goals: [
    {
      number: 1,
      title: "...",
      status: "on_track|at_risk|completed|will_not_complete|no_plan",
      confidence: "...",
      summary_notes: "...",
      breakdown: "..." // HTML string — h4 headers, ul/li, p tags. This is the collapsible detail.
    }
  ],
  team_size: {
    total: N,
    disciplines: [{ name, count, notes }],
    changes: ["<strong>Name</strong> — description"],
    open_roles: [{ role, status, pod, impact, timeline }]
  },
  team_health: {
    assessment: "...",
    highlights: ["..."],
    concerns: ["..."],
    note: "..." // italic note about qualitative context
  },
  blockers_risks: {
    blockers: ["..."],
    risks: ["..."],
    needs_asks: [{ title, detail, ask }],
    open_questions: ["..."]
  },
  data_sources: [{ source, date, notes }]
};
```

Key formatting rules:
- `executive_summary` and `breakdown` fields contain HTML (use `<p>`, `<ul>`, `<li>`, `<h4>`)
- Use `<strong>` for emphasis in list items
- Use `&mdash;` for em dashes, `&rarr;` for arrows
- End the executive summary with a `<div class="confidence-signal">` block
- The `breakdown` HTML uses `<h4>` for sub-headers like "Progress This Month", "Current State", "Next Steps"
- For At Risk goals, include a `<div class="action-needed">` block in the breakdown

### 6. Update QVR Goals File

After generating the report, update the monthly status in `planning/qvr/q{N}_{year}_goals.md`:
- Fill in the current month's row in each goal's Monthly Updates table
- Update each goal's Status field if it changed

### 7. Report to User

Summarize:
- Quarter and month context
- Goal statuses at a glance
- Key risks or blockers that need attention before the Pulse Check meeting
- Any data gaps (missing files, stale data, no ClickUp connection)
- Remind user to review and add qualitative context (morale, 1:1 feedback, stakeholder conversations) before distributing

---

## Handling Missing Data

| If missing... | Behavior |
|---------------|----------|
| QVR goals file | Warn user. Use milestone must-haves as proxy goals. Offer to help set goals. |
| ClickUp unavailable | Note in report. Use brain-file data only. |
| No previous Pulse Check | Note "First Pulse Check of quarter" in exec summary. |
| Risk evaluation stale (>30 days) | Flag staleness. Suggest running `/risk-evaluation` first. |
| Capacity file stale | Flag. Suggest reviewing if staffing changed. |

---

## Notes

- Pulse Checks happen **monthly** — roughly at the end of each calendar month
- The report is a **preparation document** — Holly/James read it before the meeting, not during
- Keep the tone **honest and direct** — executives value clarity over optimism
- If a goal is At Risk, always include what assistance is needed (that's the point of the Pulse Check)
- The "Needs & Asks" section is critical — these become action items for executive stakeholders
- Don't include an Agenda section — the meeting agenda is managed separately
- Cross-reference with ValidationPlan.md to connect feature progress to validation outcomes
- Previous Pulse Check reports in `generated/reports/pulse_checks/` provide continuity — reference them for deltas
