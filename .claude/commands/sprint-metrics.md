# Sprint Metrics Skill

You are generating a sprint estimation accuracy report with velocity trends. This skill helps producers understand how well sprints are being estimated and identify patterns to improve predictability.

> **Note**: This skill focuses on estimation accuracy and velocity. It does NOT assess milestone alignment (use `/sprint-summary` for that) or identify risks (use `/sprint-risks`). This skill is read-only — it never modifies ClickUp data.

---

## Inputs

The user may provide:
- A sprint name or number (e.g., "Xenial Xeruses", "Sprint 25", "25")
- If not provided, ask which sprint to analyze

---

## Constants

### ClickUp References
- **Sprints Folder ID**: `90124992719`
- **Lotus Space ID**: `38562126`
- **Sprint List Name Format**: `{Name} {Number} ({start_date} - {end_date})`

### Estimation Hierarchy

Tasks are estimated using **T-shirt Size first, Time Estimate as fallback**:

1. **T-shirt Size** (custom field `ac0ab579...`) — preferred, maps to fixed day values
2. **Time Estimate** (`time_estimate` field) — stored in milliseconds, convert to work days (÷ 28,800,000 ms per 8-hour day)
3. **Unestimated** — neither field is set

### T-shirt Size → Estimated Days
| Size | Days |
|------|------|
| Tiny (1 day) | 1 |
| S (3 days) | 3 |
| M (5 days) | 5 |
| L (10 days) | 10 |
| XL (20 days) | 20 |
| XXL (30 days +) | 30 |

### Custom Field IDs
- **T-shirt Sizes**: `ac0ab579-2122-48bc-9610-27bb504921f9`
- **Lotus Pod**: `ee297ee9-3b42-4f32-b3d8-b577debf883f`

### Notion Output
- **Parent Page**: `https://www.notion.so/3593f0b3b6ab8060bd8dc0555e637dad`

---

## Your Task

### 1. Identify the Target Sprint

Use `clickup_get_workspace_hierarchy` with `space_ids: ["38562126"]` and `max_depth: 2` to find all sprint lists in the Sprints folder (`90124992719`).

From the target sprint list name, extract:
- Sprint name (e.g., "Xenial Xeruses")
- Sprint number (e.g., 25)
- Date range (e.g., 3/17 - 3/31) — parse into start and end dates, assuming current year unless specified
- List ID

Determine sprint status:
- If the sprint end date is in the past → **Complete**
- If today is between start and end → **In Progress** (calculate day X of total sprint days)
- If the sprint hasn't started → **Upcoming** (warn the user there's no data yet)

### 2. Collect All Sprint Lists for Trends

From the same hierarchy data, collect ALL sprint lists. For each, parse name, number, date range, and list ID. Sort chronologically by sprint number.

### 3. Gather Target Sprint Tasks (Deep Dive)

**Important**: The team uses ClickUp's "Tasks in Multiple Lists" feature. Tasks have their home list in Product Backlog or Bug Backlog but are **added** to sprint lists for tracking. The `clickup_filter_tasks` API only returns tasks whose home list is the sprint — this will miss the majority of tasks. You MUST use the approach below instead.

#### Step 3a: Discover All Task IDs via Search

Use `clickup_search` with:
- `filters.asset_types: ["task"]`
- `filters.location.subcategories: ["{target_list_id}"]`
- `count: 25`

**Paginate** through ALL results using the `next_cursor` from each response until no more results are returned. Collect every task `id`, `name`, `status`, `assignees`, `custom_id`, and `taskType` from search results.

**Also** run `clickup_filter_tasks` with `list_ids: ["{target_list_id}"]`, `include_closed: true`, `subtasks: true` to catch any tasks whose home list IS the sprint (these may or may not appear in search). Merge results by task ID to avoid duplicates.

#### Step 3b: Fetch Full Task Details

For each unique task ID collected, use `clickup_get_task` with `detail_level: "detailed"` to get:
- `date_created` (Unix timestamp — needed for scope creep detection)
- Custom field values: **T-shirt Sizes** (field ID `ac0ab579...`), **Lotus Pod** (field ID `ee297ee9...`)
- `time_estimate` (milliseconds — fallback estimation source if no T-shirt size)
- `priority`, `tags`

**Determining estimated days for a task** (apply in order):
1. If T-shirt Size is set → use the T-shirt → Days mapping. Record source as "T-shirt".
2. Else if `time_estimate` is set and > 0 → convert ms to work days: `time_estimate / 28,800,000`. Record source as "Time Estimate".
3. Else → task is **Unestimated**. Contributes 0 to velocity.

To minimize API calls, batch these requests in parallel where possible. If a sprint has 100+ tasks, you may use `detail_level: "summary"` for the basic metrics pass and only fetch "detailed" for tasks that need custom field analysis.

**Important**: The T-shirt Size custom field stores the selected option's `orderindex` as `value`. Map it:
| orderindex | Size |
|-----------|------|
| 0 | Tiny (1 day) |
| 1 | S (3 days) |
| 2 | M (5 days) |
| 3 | L (10 days) |
| 4 | XL (20 days) |
| 5 | XXL (30 days +) |

If the field has no `value` or `value` is null, the task is **Unestimated**.

The Lotus Pod field also stores `orderindex` as `value`. Use the options list to resolve the pod name.

### 4. Get Time-in-Status for Target Sprint Tasks

Use `clickup_get_bulk_tasks_time_in_status` with all task IDs from step 3 (up to 100 at a time).

For each task, extract:
- Current status and time in it
- Full status history with time spent in each status

Calculate **active work time** = sum of time in "in progress" + "paused" statuses (in minutes, convert to days using 8-hour work days = 480 minutes per day).

**Note**: "paused" counts as active time because the task was in the developer's hands — they paused it, meaning it was being worked on at some point. If you want pure development time, use only "in progress". Report both.

### 5. Gather Historical Sprint Data (Trends)

For each OTHER sprint list (not the target):
- Use `clickup_search` with `filters.asset_types: ["task"]` and `filters.location.subcategories: ["{list_id}"]` to discover all tasks in each sprint list (paginate through all results)
- Also run `clickup_filter_tasks` with `list_ids`, `include_closed: true`, `subtasks: true` to catch home-list tasks, and merge by task ID
- From search results, extract: status (available in search results)
- For estimation values: only fetch individual task details if the total across all historical sprints is manageable (< 50 tasks). Otherwise, use `time_estimate` from filter_tasks results (available without individual fetches) to compute velocity, or report "No estimation data."
- Apply the same estimation hierarchy: T-shirt Size → Time Estimate → Unestimated
- Calculate: total tasks, completed tasks, completion rate, total estimated days completed (velocity)
- Do NOT call time-in-status for historical sprints (too many API calls)

For historical estimation accuracy: if there are fewer than 30 total tasks across all historical sprints, you MAY call `clickup_get_bulk_tasks_time_in_status` for them too. Otherwise, skip accuracy for historical sprints and note "Time-in-status data not collected for historical sprints."

### 6. Compute Metrics

#### Completion Rate
- Count tasks with status type "closed" (status = "complete") vs total
- Also compute by effort: sum of estimated days for completed tasks / sum of estimated days for all estimated tasks (using T-shirt or Time Estimate, whichever is available)

#### Estimation Accuracy (Target Sprint Only)
For each completed task with an estimate (T-shirt OR Time Estimate) AND time-in-status data:
1. Get estimated days from T-shirt mapping or Time Estimate conversion
2. Get actual days = active work time (step 4) converted to work days
3. Accuracy ratio = actual days / estimated days

Group by estimation source AND size:
- For T-shirt tasks: group by T-shirt size (Tiny/S/M/L/XL/XXL)
- For Time Estimate tasks: group by day-equivalent bucket (< 1d, 1-3d, 3-5d, 5-10d, 10d+)
- Average accuracy ratio per group
- Verdict: ratio 0.8-1.2 = "Accurate", < 0.8 = "Overestimated", > 1.2 = "Underestimated"

Overall accuracy = average of all individual task ratios (weighted by estimated effort).

**Report estimation adoption**: show count and % of tasks using T-shirt Size, Time Estimate, or neither.

#### Scope Creep
- Parse sprint start date from list name
- Convert task `date_created` (Unix ms timestamp) to date
- Tasks where `date_created` > sprint start date = scope creep
- Calculate: count and % of total sprint tasks

#### Carryover
- Tasks NOT in "complete" status = carryover
- For in-progress sprints, this is expected — label appropriately

#### Velocity
- Sum of estimated day values for completed tasks (from T-shirt Size or Time Estimate, whichever is set)
- Unestimated completed tasks contribute 0 to velocity (note count separately)
- Report velocity broken out by estimation source: "X days from T-shirt sizes, Y days from Time Estimates"

#### Status Flow
- From time-in-status data, average time spent in each status across all tasks
- Calculate % of total lifecycle per status
- Flag statuses where avg time > 3 days as potential bottlenecks

#### Pod Breakdown
- Group all metrics by Lotus Pod
- Include: task count, completed count, velocity, accuracy ratio

#### Cross-Sprint Trends
- Compile velocity, completion rate, scope creep % per sprint
- If accuracy data available for historical sprints, include it
- Note direction of each metric (improving, stable, declining)

### 7. Generate Notion Page

Create a page under the parent page (`3593f0b3b6ab8060bd8dc0555e637dad`) using `notion-create-pages`.

**Page Title**: `Sprint Metrics: {Sprint Name} {Number}`

**Page Content** (use Notion-flavored Markdown):

Structure the content in this order:

1. **Header** — Sprint name, number, date range, status (Complete/In Progress), generation date
2. **Sprint Health Summary** — Table with key counts: total tasks, completed, in progress, to do, carryover, scope creep count, velocity
3. **Estimation Adoption** — Table showing how many tasks use T-shirt Size, Time Estimate, or neither. Include adoption % trend if historical data available.
4. **Estimation Accuracy** — Table by estimation group (T-shirt sizes separately, Time Estimate in day-equivalent buckets) with tasks, est. days, avg actual days, ratio, verdict. Include overall accuracy and interpretation paragraph.
5. **Status Flow Analysis** — Table showing avg time per status, % of total, observations for bottlenecks
6. **Pod Breakdown** — Table by pod with tasks, completed, velocity, accuracy
7. **Scope & Planning** — Two sub-tables:
   - Scope Creep: tasks added mid-sprint with dates
   - Carryover: uncompleted tasks with current status and time stuck
8. **Velocity Trend** — Table across all sprints with key metrics per sprint, plus a trend interpretation paragraph
9. **Recommendations** — 3-5 actionable observations derived from the data. Be specific, reference actual numbers.

For the **Recommendations** section, generate observations by analyzing:
- Which T-shirt sizes or Time Estimate ranges are most inaccurate?
- Is there a status bottleneck?
- Is scope creep increasing?
- Are certain pods over/under-performing on estimates?
- Is velocity trending up, down, or flat?
- What % of tasks are unestimated? Is adoption improving sprint-over-sprint?
- Are T-shirt Sizes or Time Estimates more accurate? (If both are used, compare.)

### 8. Summary

After creating the Notion page, display a brief summary to the user:

```
Sprint Metrics generated for {Sprint Name} {Number}

Key findings:
- Completion: X% ({N}/{M} tasks)
- Estimation Adoption: {N}% estimated ({X} T-shirt, {Y} Time Estimate, {Z} unestimated)
- Velocity: {N} estimated days ({X} from T-shirt, {Y} from Time Estimates)
- Estimation Accuracy: {X.X} overall (1.0 = perfect) [or "N/A" if < 3 estimated+completed tasks]
- Scope Creep: {N} tasks ({X}%)
- Biggest bottleneck: {status} (avg {X} days)

Notion page: {URL}
```

---

## Rules

1. **Never modify ClickUp data** — this skill is strictly read-only
2. **Never create local files** — output goes to Notion only
3. **Handle missing estimates gracefully** — apply T-shirt Size → Time Estimate → Unestimated hierarchy. Report adoption counts for each source. Unestimated tasks still appear in task counts and completion rates, they just contribute 0 to velocity.
4. **Handle missing time-in-status gracefully** — if the ClickApp isn't enabled or returns errors, skip accuracy metrics and note why
5. **Use work days (8 hours) for time conversions** — don't use calendar days for estimation accuracy, use `total_time_minutes / 480`
6. **For in-progress sprints**: clearly label all metrics as partial. Carryover is expected and should not be flagged as concerning.
7. **Don't name individuals in negative contexts** — pod-level breakdowns are fine, but don't call out "Developer X is slow." Carryover table shows assignees for operational purposes only.
8. **If a sprint has fewer than 3 tasks**, warn the user that metrics may not be meaningful due to small sample size.
9. **Subtasks**: Include subtasks in task counts but be aware that parent task T-shirt sizes may represent the total effort including subtasks. If a parent has subtasks AND a T-shirt size, note this in the interpretation.
10. **Accuracy ratio interpretation**: < 0.5 = "Significantly Overestimated", 0.5-0.8 = "Overestimated", 0.8-1.2 = "Accurate", 1.2-2.0 = "Underestimated", > 2.0 = "Significantly Underestimated"

---

## Notes

- Run this after a sprint closes for the most complete picture, but it works mid-sprint too with partial data.
- Pair with `/sprint-summary` for a complete view: this skill tells you HOW the sprint went operationally, while `/sprint-summary` tells you WHETHER the work aligned with milestone goals.
- Over time, the velocity trend becomes the most valuable section — it shows whether the team is becoming more predictable.
- The estimation accuracy by T-shirt size is the key lever for improvement: if L tasks always take 1.5x, the team can either recalibrate what "L" means or learn to split L tasks.
- Scope creep tracking helps distinguish between "we didn't finish our plan" and "our plan kept changing."
