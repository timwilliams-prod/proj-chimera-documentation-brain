# Sprint Summary Skill

You are generating a sprint summary that categorizes tickets by their alignment with current milestone goals.

---

## Inputs

The user may provide:
- A sprint name (e.g., "Xenial Xeruses") — search ClickUp for the matching sprint list
- If no sprint name given, ask which sprint to summarize

---

## Your Task

### 1. Identify the Sprint

Use `clickup_search` or `clickup_get_workspace_hierarchy` to find the sprint list in the **Lotus** space under the **Sprints** folder. The list name format is `[Name] [Number] (date range)`.

Extract:
- Sprint name and number
- Date range
- List ID

### 2. Determine the Active Milestone

Read `planning/product_targets.md` to identify which milestone this sprint falls within based on dates:

| Milestone | End Date |
|-----------|----------|
| Systems Validation | Mar 30, 2026 |
| M&Ms | Jun 23, 2026 |
| Beta Launch Prep | Jul 21, 2026 |
| M&C | Oct 13, 2026 |
| Live Ops & Social | Feb 2, 2027 |
| Soft Launch | May 30, 2027 |

If the sprint straddles two milestones, note both and assess against the current one closing AND the next one's must-haves (prep work).

### 3. Gather Sprint Tasks

Use `clickup_filter_tasks` with the sprint list ID. Run TWO calls:
1. Open tasks (default statuses)
2. Closed/complete tasks (`include_closed: true`, `statuses: ["complete", "closed", "done"]`)

For each task, capture: ID, custom_id, name, status, priority, assignees, tags.

### 4. Read Milestone Goals

Read these files:
- `planning/product_targets.md` — must-have features and success criteria for the active milestone
- `planning/ValidationRoadmap.md` — SHQs being validated in the active milestone (scan the milestone's SHQ table)
- Relevant `planning/pods/*_Plan.md` files — feature priorities for the active milestone
- `planning/TechnicalDebt.md` — check if any sprint work addresses active debt items

### 5. Categorize Each Task

Place every task into one of three buckets:

#### Bucket 1: Directly Supporting Milestone Goals
Tasks that clearly map to:
- A **must-have feature** in `product_targets.md`
- An **active SHQ** being validated this milestone
- A **pod plan feature** prioritized for this milestone
- The milestone's **player journey goal** (from `ValidationRoadmap.md`)
- A **success criterion** for the milestone

For each task, note WHICH goal it supports.

#### Bucket 2: Supportive / Secondary
Tasks that are useful but not on the critical path:
- Nice-to-have features from `product_targets.md`
- Quality/polish work that improves the experience but doesn't gate validation
- Prep work for a future milestone (note which one)
- Tech debt items from the ledger

#### Bucket 3: Not Clearly Connected
Tasks that don't map to any milestone goal:
- Bug fixes not related to milestone features
- Housekeeping / cleanup
- Work carried over from a previous milestone with no current goal connection
- Tasks whose purpose is unclear from the title (flag for review)

**Important**: Be honest about categorization. If a task's connection to goals is a stretch, put it in Bucket 2 or 3. The point is to surface what's NOT aligned so the team can make conscious decisions.

### 6. Identify Risks and Observations

Scan for:
- **Load imbalance**: Any person with >40% of open tasks
- **Critical path blockers**: Tasks marked urgent/high that block other work
- **Status concerns**: High-priority tasks still in "to do" late in the sprint
- **Missing coverage**: Milestone goals with NO tasks in the sprint
- **Forward prep**: Tasks that set up the next milestone (positive signal)

### 7. Generate Report

Output the report in the format below. Also save to `generated/reports/sprint_summary_[sprint_name_snake_case].md`.

---

## Output Format

```markdown
# Sprint Summary: [Sprint Name] [Number]

**Sprint**: [Name] [Number] ([date range])
**Milestone**: [Active milestone name] (ends [date])
**Player Journey Goal**: [From ValidationRoadmap.md milestone table]
**Generated**: [Today's date]

---

## Sprint Snapshot

| Metric | Count |
|--------|-------|
| Total Tasks | [N] |
| Complete | [N] |
| In QA Verify | [N] |
| In Progress | [N] |
| To Do | [N] |
| Completion Rate | [X]% |

### Team Load

| Person | Open Tasks | Complete | Notes |
|--------|-----------|----------|-------|
| [Name] | [N] | [N] | [Flag if >40% of open tasks] |

---

## Alignment with [Milestone Name]

### Must-Have Features Coverage

| Must-Have Feature (from product_targets.md) | Sprint Tasks | Status |
|---------------------------------------------|-------------|--------|
| [Feature] | [Task names or "None in sprint"] | [Covered / Gap] |

### SHQ Coverage

| Active SHQ | Sprint Tasks | Status |
|------------|-------------|--------|
| [SHQ ID: question summary] | [Task names or "None"] | [Covered / Gap] |

---

## Task Categorization

### Directly Supporting Milestone Goals ([N] tasks)

| Task | ID | Status | Priority | Assignee | Supports |
|------|-----|--------|----------|----------|----------|
| [Name] | [CHI-XXXXX] | [status] | [priority] | [person] | [Which goal/SHQ/feature] |

### Supportive / Secondary ([N] tasks)

| Task | ID | Status | Priority | Assignee | Notes |
|------|-----|--------|----------|----------|-------|
| [Name] | [CHI-XXXXX] | [status] | [priority] | [person] | [Why it's secondary] |

### Not Clearly Connected ([N] tasks)

| Task | ID | Status | Priority | Assignee | Notes |
|------|-----|--------|----------|----------|-------|
| [Name] | [CHI-XXXXX] | [status] | [priority] | [person] | [What it appears to be] |

---

## Observations

### Critical Path
- [What must finish for the sprint/milestone to succeed]

### Risks
- [Load imbalance, blockers, late-status items]

### Positive Signals
- [Forward prep work, completed critical items, good alignment]

### Recommendations
- [Specific suggestions: deprioritize X, unblock Y, check with Z]

---

## Alignment Score

**[X]%** of open tasks directly support milestone goals
**[Y]%** are supportive/secondary
**[Z]%** are not clearly connected

[One sentence assessment: e.g., "Sprint is well-aligned with SV goals. Tutorial architecture is the critical path — if it slips, 10+ design tasks are blocked."]
```

---

## Notes

- The goal is NOT to say "these tasks are bad." It's to make alignment visible so the team can make conscious prioritization decisions.
- Tasks in Bucket 3 may be perfectly valid (bug fixes, hygiene) — the point is transparency about what's advancing goals vs what isn't.
- If the sprint is at a milestone boundary, assess tasks against BOTH the closing milestone and prep for the next one.
- When assessing SHQ coverage, use the ValidationRoadmap.md milestone SHQ table, not the full SHQ list.
- Reference task URLs from ClickUp results so readers can click through.
