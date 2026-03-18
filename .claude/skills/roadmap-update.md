# Roadmap Update Skill

You are helping update the project's **Feature Roadmap** - both the feature plans in `pods/*_Plan.md` and the visual Mermaid Gantt in `roadmap.md`.

> **Note**: This skill handles the Feature Roadmap (what features/boulders we're building, in which milestones, and when).
> Sprint-level task execution lives in **ClickUp**, not here.
> For Validation Roadmap updates (hypotheses, BHQs, SHQs), see the validation-review skill.

---

## Project Structure

- `roadmap.md` - Milestone definitions, timeline, and high-level Gantt
- `pods/Empire_Plan.md` - Empire features by milestone (lead: Diana Vasilescu)
- `pods/Metagame_Plan.md` - Metagame features by milestone
- `pods/Battle_Plan.md` - Battle features by milestone
- `pods/SocialDynamics_Plan.md` - Social Dynamics features by milestone
- `pods/Dozer_Plan.md` - Dozer features by milestone
- `dependency_map.md` - Pod and feature dependencies
- `GlobalRules.md` - Cross-project constraints
- `features/*.md` - Feature documentation
- `ValidationRoadmap.md` - Validation hypotheses and SHQs

---

## Your Task

### 1. Read Current State
- Read the relevant `pods/*_Plan.md` file(s) for the pod(s) being updated
- Read `roadmap.md` for milestone definitions and the current Gantt
- Read `dependency_map.md` for constraints
- If cross-pod impact is possible, read all pod plans
- Read relevant feature docs in `features/` if needed

### 2. Gather Updates
Ask the user for:
- Which pod(s) to update?
- Sprint progress (% complete, blockers)?
- New tasks to add?
- Priority or timeline changes?
- Tasks to move between sprints?
- New milestones or milestone date changes?

### 3. Validate Changes
- Check dependencies: Will moving tasks break dependent pods?
- Check capacity: Is the sprint overloaded?
- Check blockers: Are blockers documented with unblock dates?
- Check milestones: Do date shifts impact milestone targets?
- Flag risks if you spot them
- Check if changes affect any SHQs in `ValidationRoadmap.md` (mention if so, but don't update it here)

### 4. Update Documentation
- Update the relevant `pods/*_Plan.md` file(s) with new information
- Update "Last Updated" timestamps
- If priorities shifted significantly, ask if `dependency_map.md` needs updates
- If new cross-pod features emerge, ask if `GlobalRules.md` needs updates

### 5. Regenerate Visual Roadmap
**Always regenerate `roadmap.md` after updating pod backlogs.** Follow the Visual Roadmap Rules below.

### 6. Summary
- Summarize what changed (text + updated Gantt preview)
- Highlight risks or dependencies affected
- If changes affect Validation Roadmap SHQs, note which ones
- Suggest next steps

---

## Visual Roadmap Rules

The visual Feature Roadmap lives in `roadmap.md`. It contains Mermaid Gantt charts built from `pods/*_Plan.md` data.

### File Structure for `roadmap.md`

```markdown
# Feature Roadmap

Last Updated: [date]

> For product validation, see ValidationRoadmap.md.

## High-Level Roadmap

[Mermaid Gantt - all pods, major phases only, 3-6 month view]

## Detailed Pod Roadmaps

### Empire
[Mermaid Gantt - Empire tasks, sprint-level view]

### Metagame
[Mermaid Gantt]

### Battle
[Mermaid Gantt]

### Social Dynamics
[Mermaid Gantt]

### Dozer
[Mermaid Gantt]

## Legend
```

### Mermaid Gantt Syntax Rules

Use this exact syntax pattern:

```
gantt
    title [Chart Title]
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    tickInterval 1week

    section [Pod or Category Name]
    [Task Name]  :[status], [id], [start or dependency], [duration]
```

### Status Mapping Rules

Map pod backlog status to Mermaid Gantt status:

| Backlog Status | Gantt Status | Visual |
|----------------|-------------|--------|
| Completed / 100% | `done` | Gray bar |
| In Progress (any %) | `active` | Blue bar |
| Blocked / On Hold | `crit` | Red bar |
| Committed (not started) | (no tag) | Default bar |
| Backlog / Future | (no tag) | Default bar |
| Milestone | `milestone` | Diamond marker |

### Task ID Rules

Every task in the Gantt must have a unique ID for dependency linking:

- Pod prefixes: `emp` (Empire), `meta` (Metagame), `bat` (Battle), `soc` (Social Dynamics), `doz` (Dozer)
- Format: `[prefix][number]` - e.g., `emp1`, `bat3`, `meta2`
- Number sequentially within each pod section
- Keep IDs stable across updates when possible

### Dependency Rules

- Use `after [taskId]` for sequential tasks within a pod
- Use `after [taskId]` across pods when `dependency_map.md` shows a real dependency
- Only show dependencies that are real blockers, not loose relationships
- If a task depends on multiple things, use the latest blocker as the dependency

### Duration Rules

- Sprint = 14d (2 weeks) unless user specifies otherwise
- If a task spans multiple sprints, use actual duration
- For backlog items without dates, estimate based on complexity:
  - Small task: 7d
  - Medium task: 14d
  - Large task: 21d
  - Epic: 28d+
- Always ask user to confirm estimated durations

### Milestone Rules

```
section Milestones
Milestone 1     :milestone, m1, 2026-05-15, 0d
Milestone 2     :milestone, m2, 2026-06-30, 0d
```

- Milestones get their own section at the bottom of each chart
- Duration is always `0d`
- Flag if task delays push past a milestone date
- Milestones should align with `ValidationRoadmap.md` milestones where applicable

### High-Level vs Detailed Charts

**High-Level Chart** (top of `roadmap.md`):
- One row per pod showing major phases/epics only
- All 5 pods visible in one chart
- 3-6 month time horizon
- Include all milestones
- Goal: Executive overview, fits on one screen

**Detailed Pod Charts** (per-pod sections):
- Every task from that pod's backlog (current sprint + next sprint + P0/P1)
- Sprint boundaries visible
- Dependencies shown (including cross-pod)
- Blockers highlighted with `crit`
- Goal: Team-level planning view

### What NOT to Put in the Gantt

- P2/P3 backlog items (too speculative, clutters the chart)
- Completed tasks from more than 2 sprints ago (archive them)
- Tasks without owners (they're not real yet)
- Internal subtasks (keep it at the story/feature level)

---

## Output Format

After updates, provide:

```
## Roadmap Update Summary

**Updated**: [Pod Name(s)] - Sprint [Number]

**Changes**:
- Moved TASK-XXX from Sprint X to Sprint Y (reason)
- Updated TASK-YYY to 80% complete (was 60%)
- Added new P1 task: TASK-ZZZ
- TASK-AAA now blocked (marked critical on roadmap)

**Milestone Impact**:
- Milestone 1 (May 15): ON TRACK | AT RISK | DELAYED
  - [reason if not on track]

**Validation Roadmap Impact**:
- SHQ-1.1.2 may be affected (depends on [feature])

**Cross-Pod Impact**:
- [Pod Name] may be affected due to dependency on TASK-XXX
- Sprint Y at 110% capacity - recommend descoping TASK-AAA

**Recommended Actions**:
1. Notify [Pod] of TASK-XXX delay
2. Review Sprint Y capacity
3. Update ClickUp to match
```

Then show the updated Mermaid Gantt inline for review before committing.

---

## Notes

- Always preserve task IDs and ClickUp links in pod backlogs
- Don't delete "On Hold" tasks - move them with reasons
- If major changes affect multiple pods, suggest a sync meeting
- When in doubt about priorities or durations, ask the user
- The Gantt is a communication tool - optimize for clarity, not completeness
- Keep the high-level chart readable: max ~30 bars, consolidate if needed
