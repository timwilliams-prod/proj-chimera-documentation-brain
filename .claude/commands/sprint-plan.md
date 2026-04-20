# Sprint Plan Skill

You are generating a **sprint plan** that bridges strategic planning (this brain) with execution (ClickUp). This skill has two modes depending on where you are in the sprint cycle.

> **Architecture**: Brain planning docs + Google Calendar PTO + ClickUp tasks → Sprint plan markdown + `sprint_data.js` (dashboard) + ClickUp task scaffolding.

---

## Modes

Ask the user which mode to run (or infer from context):

### Preview Mode
**When**: Tuesday of week 2 (planning next sprint, ~3 days before it starts)
**Purpose**: "Here's what we're thinking for next sprint. What questions do we need to tackle now?"
**Output**: Draft plan with proposed work, capacity analysis, open questions
**ClickUp**: Read-only (check what's in backlog, what's carrying over)

### Kickoff Mode
**When**: Tuesday of week 1 (sprint starting tomorrow or just started)
**Purpose**: "Here's what we're kicking off. Details are locked in."
**Output**: Final plan with assignments, task scaffolding ready
**ClickUp**: Creates/updates tasks in Product Backlog, adds to Sprint list

---

## Your Task

### 1. Identify Sprint Context

Determine which sprint you're planning for:

**For Preview**: The *next* sprint (the one that hasn't started yet).
**For Kickoff**: The *current* sprint (just started or starting tomorrow).

Use the sprint list IDs from memory or `clickup_get_workspace_hierarchy` to find the correct sprint list. Key IDs:
- Sprints folder: `90124992719`
- Product Backlog: `901208416337`
- SHQ Tracker: `901324723345`

Read `planning/product_targets.md` to determine which milestone this sprint falls within.

### 2. Read Planning Sources

Read ALL of these to understand what should be in this sprint:

**Always read**:
- `planning/product_targets.md` — Milestone goals and must-have features
- `planning/capacity.md` — Team roster and pod assignments
- `planning/sprint_rules.md` — Task scaffolding rules, naming conventions, discipline flow
- `planning/pods/empire/features.md` — Empire feature priorities (ranked backlog)
- `planning/pods/empire/milestone_{ms}.md` — Empire sprint allocation for current milestone
- `planning/pods/metagame/features.md` — Metagame feature priorities
- `planning/pods/metagame/milestone_{ms}.md` — Metagame sprint allocation for current milestone
- `planning/pods/battle/features.md` — Battle feature priorities
- `planning/pods/battle/milestone_{ms}.md` — Battle sprint allocation for current milestone
- `planning/pods/social_dynamics/features.md` — Social Dynamics feature priorities
- `planning/pods/social_dynamics/milestone_{ms}.md` — Social Dynamics sprint allocation for current milestone
- `planning/pods/dozer/features.md` — Dozer feature priorities
- `planning/pods/dozer/milestone_{ms}.md` — Dozer sprint allocation for current milestone
- `planning/pods/art/features.md` — Art feature priorities
- `planning/pods/art/milestone_{ms}.md` — Art sprint allocation for current milestone
- `generated/roadmap.md` — Consolidated roadmap (which features are scheduled when)

Replace `{ms}` with the milestone short name for the current milestone (e.g., `milestone_mms.md` for M&Ms, `milestone_mc.md` for M&C).

**Read if they exist**:
- Previous sprint plan (`generated/sprint_plans/`) — For continuity, carry-over items
- `planning/dependency_map.md` — Cross-pod dependencies that affect sequencing
- `planning/ValidationPlan.md` — Active SHQs to connect work to validation

### 3. Cross-Reference Pod Data with Context

For each pod, combine the feature priorities (`features.md`) and milestone sprint allocation (`milestone_{ms}.md`) to understand what work is planned for this sprint window. Then enrich with additional context:

- **Feature spec**: Link to `planning/features/[feature].md` if it exists. Note key info (SHQs, estimate, status).
- **Validation alignment**: Read `planning/pods/{pod}/validation.md` (where it exists) to understand which SHQs/BHQs this pod's work contributes to.
- **ClickUp state**: Search for existing tasks related to planned features. Note task IDs, statuses, carry-over items.
- Cross-reference against ClickUp state, PTO, and capacity to validate and enrich.
- Flag any conflicts between pod plans and ClickUp reality (e.g., a person assigned work but fully on PTO, a feature marked "NOT STARTED" that has ClickUp tasks already in progress).

### 4. Pull PTO from Google Calendar

Read the **Lotus OOO** calendar for the sprint's 2-week window:
- Calendar ID: `c_3992c42a3903831f4100bc114a0b4758274a26d5a31f749f5aaacc140caeddc7@group.calendar.google.com`
- Use `calendar_listEvents` with the sprint start and end dates
- Extract: who is out, which days, total days missed

Calculate **total working days** for the sprint:
- Count weekdays (Mon-Fri) in the sprint date range
- Subtract any **studio-wide holidays** (e.g., Good Friday, company holidays)
- Look for calendar events containing "Fortis Wide Holiday", "Studio Closed", "Company Holiday", or similar — these affect everyone
- Also note **regional holidays** (e.g., Easter Monday for Canadian staff) — these affect a subset of the team

Flag anyone with:
- **3+ days out**: Reduced capacity — note in their section
- **Full sprint out**: Unavailable — do not assign work
- **Key person out during critical phase**: Risk flag (e.g., only engineer on a pod out during their feature's sprint)

### 5. Check ClickUp State

#### For Preview Mode:
- Pull tasks from the **current sprint list** to identify carry-over risks (tasks still open that might not finish)
- Pull tasks from **Product Backlog** to see what's ready to pull in
- Check **SHQ Tracker** for active Epics and their phase status

#### For Kickoff Mode:
- Pull tasks from the **target sprint list** to see what's already been added
- Pull tasks from **Product Backlog** for items that need to be added
- Identify gaps: features in the plan that don't have ClickUp tasks yet

Use `clickup_search` with `space_ids: ["38562126"]` to search within Lotus only. For list-specific queries, use `clickup_filter_tasks` with the list ID.

### 6. Build the Sprint Plan

Generate the sprint plan organized by pod. Lead with a milestone-lens **Sprint Overview** section, then per-pod sections, then cross-pod, then capacity, then risks/questions.

#### Sprint Overview (top of plan):

Authoring this section is a **synthesis step**, not a copy job. Look at the milestone goals (`product_targets.md`), checkpoint allocations (pod milestone files), validation roadmap (`ValidationPlan.md` and `generated/validation_roadmap.md`), and the per-pod sprint goals you're about to write. Then summarize *what this sprint is actively driving toward* in milestone terms.

```markdown
## Sprint Overview

### Milestone Goals — [Milestone Name]
- [Pulled from product_targets.md — the high-level "Goal" + Must-Have Features]

### [Checkpoint Name] Goals (if applicable)
- [If the sprint falls inside a checkpoint, pull that checkpoint's goals from pod milestone files]

### Active Focus This Sprint
- [Cross-pod, milestone-lens summary of what's being driven this sprint — not a list of every task. Each item should connect to a milestone goal or SHQ.]

### Validation In Flight
- SHQ-X: [label] — [pods]
```

The Overview should answer: "If a leadership team member only reads the top section, do they understand what we're driving this sprint and how it lines up with milestone goals?"

#### Per-Pod Structure:
```markdown
## [Pod Name]
**Lead**: [Design Lead] | **Producer**: [Producer] | **Eng**: [Engineers]

### Sprint Goals
- [1-3 high-level goals for this pod this sprint, connected to milestone/SHQ]

### Individual Breakdown

List EVERY person assigned to this pod (from capacity.md). Include their PTO inline in the Notes column — no separate PTO section.

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| [Name] | Eng | [9 - PTO] | 1. [Primary focus] 2. [Secondary] | [PTO dates, carry-over, risks] |
| [Name] | Design | [9 - PTO] | 1. [Primary focus] | |
| [Name] | QA | [9 - PTO] | 1. [Primary focus] | |

The **Priorities** column lists that person's individual priorities in order of importance, relative to each other. This is what each person should focus on first, second, etc.

### ClickUp Ticket Summary

Hierarchical view of what will be created in ClickUp at Kickoff. Mirrors the SHQ → Parent Task → Child Task structure.

- **SHQ XX: [Question]** (Epic, existing)
  - [Feature] - [Phase] (Parent task)
    - [Feature] - UX Design
    - [Feature] - Engineering
    - [Feature] - QA
- **Standalone / No SHQ**
  - [Task name]

In Preview mode, mark items as (proposed) or (confirmed). In Kickoff mode, this is the definitive list.

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** [Name] (count), [Name] (count), … [Roll up carry-over from the previous sprint as the FIRST open question, grouped by assignee. Carry-over IS NOT a separate section anymore.]
- [ ] [Other open questions that need resolution before kickoff]
```

**Carry-over handling**: The raw carry-over data (CHI IDs, names, statuses) still belongs in the data file's `pod.carry_over[]` array — the dashboard reads from it to render the rollup question with a tooltip and per-item drilldown. But in the markdown plan, surface it only as the synthesized "Past Sprint Cleanup" question. Do not produce a standalone "Carry-Over" section.

#### Cross-Pod Section:
```markdown
## Cross-Pod & Dependencies
- [Any cross-pod handoffs happening this sprint]
- [Shared resource conflicts]
- [Milestone checkpoint if applicable]
```

#### Capacity Summary:
```markdown
## Capacity Summary

**Total Working Days**: [N] (after [holiday name] on [date])

| Person | Pod | Available Days | Assigned Days | Load |
|--------|-----|---------------|---------------|------|
| [Name] | [Pod] | [working days - PTO days] | [sum of estimates] | [OK / Heavy / Over] |
```

### 7. Scaffold ClickUp Tasks (Kickoff Mode Only)

For each planned work item, apply the scaffolding rules from `planning/sprint_rules.md`:

1. **Determine task type**: New feature, iteration, backend-only, bug fix, etc.
2. **Apply discipline flow**: UX → UI Art → Engineering → QA (skip steps per rules)
3. **Build task description** using the template from sprint_rules.md
4. **Link to feature spec** if one exists in `planning/features/`
5. **Link to SHQ Epic** if the work connects to a validation question

**Before creating any ClickUp tasks**, present the full list to the user and ask for confirmation:
> "Here are the [N] tasks I'd create in ClickUp. Want me to proceed, or adjust anything first?"

When confirmed, for each task:
1. Create in Product Backlog (`901208416337`) using `clickup_create_task`
2. Add to the Sprint list using `clickup_add_task_to_list`
3. If there's a parent Epic, set the parent relationship

### 8. Write Sprint Plan File

Save the full sprint plan to `generated/sprint_plans/sprint_[number]_[name].md`.

Example: `generated/sprint_plans/sprint_27_zany_zebras.md`

Include a metadata header:
```markdown
---
Sprint: [Name] [Number]
Dates: [Start] - [End]
Working Days: [N] (after holidays)
Holidays: [list any studio-wide or regional holidays in the sprint window]
Milestone: [Current milestone]
Mode: [Preview | Kickoff]
Generated: [Date]
---
```

### 9. Generate Sprint Dashboard Data

Generate a versioned sprint data file and update the manifest for the sprint view dashboard.

**File structure:**
- `generated/dashboard/sprints/sprint_[N].js` — Per-sprint data file (e.g., `sprint_27.js`)
- `generated/dashboard/sprint_manifest.js` — Index of all available sprints + which is current

**After writing the sprint data file**, update `sprint_manifest.js`:
1. Read the existing manifest
2. If an entry for this sprint number already exists, update it (mode, dates, etc.)
3. If not, append a new entry
4. Set `SPRINT_CURRENT` to this sprint's number

Manifest format:
```javascript
const SPRINT_MANIFEST = [
  { number: 27, name: "Zany Zebras", file: "sprints/sprint_27.js", dates: "Apr 14 - Apr 28", mode: "Preview" }
];
const SPRINT_CURRENT = 27;
```

Structure the sprint data using `var SPRINT_DATA` (**must be `var`**, not `const` — multiple sprint files are loaded sequentially and `const` would throw a redeclaration error):

```javascript
var SPRINT_DATA = {
  meta: {
    sprint_name, sprint_number, start_date, end_date, working_days,
    holidays: [], milestone, milestone_end, milestone_sprint, milestone_sprint_total,
    mode: "Preview|Kickoff", generated: "YYYY-MM-DD",
    clickup_list: "list_id", data_notes: "sourcing info"
  },
  pods: [
    {
      name, lead, producer, eng_summary,
      goals: [{ text, shqs: [] }],
      people: [{ name, discipline, avail, total, priorities: [], notes, flags: [] }],
      carry_over: [{ id, name, assignee, status, confirmed }],   // RAW DATA — dashboard renders this as a synthesized "Past Sprint Cleanup" open question, not its own section
      open_questions: [{ text, resolved, answer }],
      risks: []
    }
  ],
  cross_pod: { handoffs: [], shared_resources: [], notes: [] },
  summary: {
    // ── Sprint Overview (milestone-lens) — REQUIRED, rendered as the top panel
    milestone_goals: ["…"],                                         // High-level milestone goals from product_targets.md
    checkpoint: { name: "…", goals: ["…"] },                        // Optional: only when sprint falls inside a checkpoint
    active_focus: [{ text, shqs: [], pods: [] }],                   // What this sprint is actively driving — milestone-lens, not a task list
    validation_in_flight: [{ id: "SHQ-X", label: "…", pods: [] }],  // Active SHQs being worked
    // ── Risks & Open Questions — rendered in a separate panel below the pod sections
    top_risks: [],
    open_questions: [{ text, resolved }]
  }
};
```

Key mappings:
- `avail`: working days minus PTO days for that person
- `total`: total working days in the sprint (same for everyone, before PTO)
- `flags`: array from `["sole-eng", "carry-over", "pto", "new-hire", "split", "shared"]`
- `carry_over.confirmed`: true if verified against ClickUp (not just assumed from previous plan). Carry-over is RAW data — the dashboard auto-rolls it into a synthesized open question per pod (e.g. *"Past Sprint Cleanup — will we have to deal with these? Henrique (3), Yura (1)"*) with a tooltip and per-item drilldown.
- Include ALL people from `capacity.md` assigned to each pod, not just engineers
- `summary.milestone_goals` and `summary.active_focus` are REQUIRED — without them, the Sprint Overview panel renders empty. Author them as a synthesis pass after writing the per-pod sections.

The data file is consumed by `sprint.html` which supports View/Edit modes. Editable fields (goals, priorities, notes, open questions) can be modified inline and exported as `sprint_edits_[N].json` for the skill to apply back. The HTML loads `sprint_manifest.js` and dynamically loads the selected sprint's data file. A dropdown in the header lets users switch between sprints.

### 10. Summary

Report to the user:
- **Mode**: Preview or Kickoff
- **Sprint**: Name, number, dates
- **Milestone**: Which milestone, how far through it
- **PTO impact**: Who's out, capacity effect
- **Key risks**: Overloaded people, missing specs, dependency conflicts
- **Preview only**: Open questions that need answers before kickoff
- **Kickoff only**: How many ClickUp tasks created/updated, any gaps

---

## Task Creation Rules

When creating ClickUp tasks, follow these rules strictly:

1. **Never create duplicate tasks.** Search for existing tasks with similar names before creating.
2. **Always include the feature spec link** in the task description if one exists.
3. **Use consistent naming**: `[Feature Name] - [Discipline/Phase]`
4. **Set priority** based on milestone alignment:
   - P1 (Urgent): Must-have feature for current milestone, on critical path
   - P2 (High): Must-have feature, not on critical path
   - P3 (Normal): Nice-to-have or supporting work
   - P4 (Low): Tech debt, cleanup, exploration
5. **Assign to the correct person** using `planning/capacity.md`. If multiple candidates, leave unassigned and flag.
6. **Tag with pod name** (lowercase): `empire`, `metagame`, `battle`, `social-dynamics`, `dozer`, `art`

---

## Handling Ambiguity

- If the roadmap says a feature starts "this sprint" but no spec exists, flag it as an open question in Preview mode or a risk in Kickoff mode.
- If two pods need the same person in the same sprint, flag the conflict and ask the user to prioritize.
- If carry-over from the previous sprint is heavy (3+ tasks per person), flag as a capacity risk and suggest scope cuts.
- If a feature is too vague to scaffold tasks, create a single "Spike: [Feature] - Scoping" task instead of guessing at breakdown.

---

## Notes

- Sprint numbers are sequential. Use ClickUp sprint list names to get the current number.
- The skill reads from the brain for *what* to build, and from ClickUp for *current state*.
- Preview mode is intentionally lighter — it's a conversation starter, not a contract.
- Kickoff mode is heavier — it produces the actual execution plan and creates real tasks.
- Always check for an existing sprint plan file before writing — if one exists for the same sprint, update it rather than creating a duplicate.
- Pod feature priorities live in `planning/pods/{pod}/features.md`, milestone sprint allocations in `planning/pods/{pod}/milestone_{ms}.md`, and validation alignment in `planning/pods/{pod}/validation.md`.
- Sprint plans are generated output only — they live entirely in `generated/sprint_plans/`. This skill does NOT write to pod plan files in `planning/pods/`.
