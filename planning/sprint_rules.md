# Sprint Planning Rules

Last Updated: 2026-03-24

> **What this file is**: Rules for how sprint work gets broken into ClickUp tasks.
> Used by `/sprint-plan` to scaffold tasks with the right structure, naming, and discipline breakdown.
> For team staffing, see `planning/capacity.md`. For milestone goals, see `planning/product_targets.md`.

---

## Sprint Cadence

- **Duration**: 2 weeks (Monday to Friday of the following week)
- **Kickoff**: Tuesday morning of week 1 (sprint starts Monday)
- **Preview**: Tuesday of week 2 (planning the next sprint)
- **Retrospective**: Friday of week 2

---

## ClickUp Structure

### Hierarchy

```
Lotus Space (38562126)
  Sprints Folder (90124992719)
    Sprint List (one per sprint, e.g., "Yodel Yaks 26")
  Product Backlog List (901208416337)
  SHQ Tracker List (901324723345)
```

### Workflow

1. Tasks are **created in Product Backlog** (`901208416337`)
2. Tasks are **added to the relevant Sprint list** when assigned to a sprint
3. Tasks stay linked to their parent Epic (SHQ) in SHQ Tracker

### Task Statuses

| Status | Meaning |
|--------|---------|
| To Do | Not started |
| In Progress | Actively being worked on |
| In Review | In code review or design review |
| QA Verify | Ready for QA testing |
| Complete | Done and verified |

---

## Epic & Phase Structure

SHQs are tracked as **Epics** in the SHQ Tracker. Multi-sprint features get **phased subtasks** under the Epic.

### Phase Naming Convention

When a feature spans multiple sprints, break it into phases:

| Phase | Name Pattern | Typical Sprint | Focus |
|-------|-------------|----------------|-------|
| 1 | `[Feature] - Backend & Data` | First sprint | Data models, APIs, server-side logic |
| 2 | `[Feature] - UI Implementation` | Second sprint | Client-side UI, screens, interactions |
| 3 | `[Feature] - Experience Polish & Onboarding` | Third sprint | UX polish, tutorials, onboarding flows |

**Rules**:
- Not every feature needs 3 phases. Use the number that fits the scope.
- Single-sprint features don't need phase names — just use the feature name.
- Phase subtasks are children of the Epic. Individual work items are children of the phase.

### Example Structure

```
Epic: SHQ7 - Clear Short/Mid/Long-term Goals
  Subtask: Governors - Backend & Data (Sprint 26)
    Child: Set up governor data models
    Child: Governor assignment API
    Child: Governor progression logic
  Subtask: Governors - UI Implementation (Sprint 27)
    Child: Governor selection screen
    Child: Governor detail panel
    Child: Governor effects display
  Subtask: Governors - Experience Polish (Sprint 28)
    Child: Governor onboarding tutorial
    Child: Governor tooltip polish
    Child: QA - Governors full pass
```

---

## Task Scaffolding Rules

When a feature effort is planned for a sprint, scaffold tasks using these discipline-based rules. The standard flow is:

```
UX Design -> UI Art -> Engineering -> QA
```

### Standard Scaffolding (New Feature)

For a **new feature** that hasn't been through UX/UI yet:

| Order | Task | Discipline | Assignee Source | Notes |
|-------|------|-----------|-----------------|-------|
| 1 | `[Feature] - UX Design` | UX | UX designer for the pod | Wireframes, flows, interaction design |
| 2 | `[Feature] - UI Art` | UI Art | UI artist for the pod | Visual design, assets, animations |
| 3 | `[Feature] - Engineering` | Engineering | Engineer(s) for the pod | Implementation |
| 4 | `[Feature] - QA` | QA | QA POC for the pod | Test plan, execution, verification |

### When to Skip Steps

| Scenario | Skip | Reason |
|----------|------|--------|
| **Iteration on existing feature** | UX Design, UI Art | Wireframes/visuals already exist; engineering is iterating |
| **Backend-only work** | UX Design, UI Art | No user-facing changes |
| **Art asset request** | UX Design, Engineering | Art pipeline handles independently |
| **Bug fix** | UX Design, UI Art | Fix existing behavior |
| **Infrastructure/Dozer work** | UX Design, UI Art, QA | Technical work without UI |
| **Polish pass** | UX Design | UI exists, just refining visuals/interactions |
| **Prototype/spike** | UI Art, QA | Throwaway exploration work |

### Task Description Template

Every task created by `/sprint-plan` should include:

```markdown
**Feature**: [Feature name]
**Spec**: [Link to planning/features/[feature].md if exists]
**SHQ**: [SHQ ID and brief question, if applicable]
**Sprint**: [Sprint name and number]
**Phase**: [Phase name, if multi-sprint]

**Acceptance Criteria**:
- [ ] [Specific, testable criteria]
```

---

## Assignee Resolution

Use `planning/capacity.md` Pod Leadership Summary to determine default assignees:

| Discipline | Lookup |
|-----------|--------|
| UX Design | UX/UI section, filtered by pod |
| UI Art | UX/UI section (UI Artist role), filtered by pod |
| Engineering | Engineering section, filtered by pod |
| QA | Pod Leadership Summary → QA POC column |
| Design Review | Pod Leadership Summary → Design Lead column |

When a pod has multiple engineers, the `/sprint-plan` skill will list the task without a specific assignee and flag it for the user to assign.

---

## PTO Handling

- **Source**: Lotus OOO Google Calendar (`c_3992c42a3903831f4100bc114a0b4758274a26d5a31f749f5aaacc140caeddc7@group.calendar.google.com`)
- PTO is shown per-person in the sprint plan output
- If someone has 3+ days PTO in a sprint, flag as **reduced capacity** in the plan
- If someone has the full sprint off, flag as **unavailable** and do not assign them tasks

---

## Sprint Plan Output Format

The `/sprint-plan` skill generates markdown files in `generated/sprint_plans/`. See the skill definition for the full output format.

---

## Capacity Rules of Thumb

| Metric | Guideline |
|--------|-----------|
| Tasks per engineer per sprint | 3-5 meaningful tasks (not counting sub-items) |
| Tasks per designer per sprint | 2-4 design deliverables |
| QA tasks per sprint | 1 per feature in QA Verify phase |
| Buffer | Reserve ~20% of sprint capacity for interrupts, bugs, meetings |

### Overload Detection

Flag a warning when:
- An engineer has **6+ tasks** assigned in a sprint
- A person with known split responsibilities (Randy, Garrett — see `capacity.md` staffing risks) has **4+ tasks**
- A pod has more task-sprints planned than available engineer-sprints

---

## Change Log

| Date | Change | Reason |
|------|--------|--------|
| 2026-03-24 | Initial sprint rules created | Supporting /sprint-plan skill |
