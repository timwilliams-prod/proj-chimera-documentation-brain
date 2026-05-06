# Create Animation Tickets

Creates a parent ticket and 10 sequential subtasks for unit animation work, based on the unit pipeline template.

## Process

1. **Get Parameters**
   - Unit name (e.g., "Toshoia")
   - Start date (e.g., "May 25th" or "2026-05-25") - optional, will check dependency first
   - Assignee name (e.g., "Tony Bonilla")

2. **Check Rig & Skin Dependency**
   - Search for `{Unit Name} - Rig` parent ticket using `clickup_search`
   - If found, get full task details with `clickup_get_task` and `subtasks=true`
   - Look for `{Unit Name} - Rig & Skin` subtask
   - Check status:
     - If **completed**: proceed with provided start date (or day after rig completion)
     - If **not completed**:
       - Warn user that rig is not done yet
       - Suggest start date = rig due_date + 1 working day
       - Ask user to confirm or provide override date
   - If Rig parent ticket not found: warn user and ask to confirm proceeding without dependency check (or to run `/create-rig-tickets` first)

3. **Find Assignee**
   - Use `clickup_find_member_by_name` to get user ID

4. **Load Estimates**
   - Read `planning/pods/unit/animation_estimates.md` for task durations

5. **Confirm Required Deliverables**

   Not every unit needs every animation. Before scheduling, present the full list to the user (with the default suggestion based on common unit archetypes) and ask which deliverables are required for THIS unit.

   Use `AskUserQuestion` with a single multi-select question listing all 10 deliverables. Each option label includes the time estimate so the user can weigh inclusion vs. timeline impact.

   **Default guidance (use this to recommend, but always defer to the user's selection):**
   - **Always required (core combat loop):** Idle, Move, Basic Attack, Death
   - **Almost always required:** at least one Special Ability (A1)
   - **Common but optional:** Special Ability 2, Special Ability 3, Stun
   - **Legendary / hero-only:** Wombo Combo (typically skipped for uncommon units, common units, or troops)
   - **Always include if any animations are being made:** Feedback and Revisions (this is review buffer, not a discrete asset)

   **Examples of valid subsets:**
   - *Legendary hero (full kit):* all 10
   - *Uncommon hero (3 abilities, no wombo):* skip Wombo Combo → 9 deliverables (~14 days)
   - *Common troop (1 ability, no wombo, no death anim variant):* Idle, Move, Basic Attack, A1, Stun, Death, Feedback → 7 deliverables (~9.5 days)

   Record the user's selection. From this point on, "deliverables" refers to **only the selected ones** — subsequent steps must respect the subset.

6. **Calculate Schedule**
   - Calculate working days (excluding weekends)
   - Start from validated/confirmed start date (after dependency check)
   - Schedule **only the deliverables selected in step 5**, in this canonical order (skip any not selected):
     1. Idle (1 day)
     2. Move (1 day)
     3. Basic Attack (1 day)
     4. Special Ability 1 (2 days)
     5. Special Ability 2 (2 days)
     6. Special Ability 3 (2 days)
     7. Stun (0.5 days)
     8. Death (1.5 days)
     9. Wombo Combo (2 days)
     10. Feedback and Revisions (3 days)
   - Parent ticket spans from first task start to last task end (sum of selected days, weekends excluded)

7. **Check Assignee Workload Conflicts**

   Before creating the parent ticket, verify the assignee isn't already overloaded during the proposed window.

   - Call `clickup_filter_tasks` with:
     - `assignees`: [found user ID]
     - `due_date_from`: proposed parent start date
     - `include_closed`: false
     - `subtasks`: true

   - Post-filter the results — keep only tasks that:
     - Have **both** `start_date` and `due_date` set (otherwise overlap is undefined)
     - Have `start_date` **on or before** the proposed parent due date (otherwise they begin after our work ends)
   - The survivors are the **conflicts**.

   - **No conflicts:** proceed to the next step.

   - **Conflicts exist:**
     1. Show the user the conflict list — for each: task name, custom ID, status, `start → due` dates, URL.
     2. Compute `suggested_start = max(due_date among conflicts) + 1 working day` (skip Sat/Sun).
     3. Use `AskUserQuestion` with three options:
        - **Reschedule to {suggested_start}** (Recommended) — recompute the entire schedule from this new start.
        - **Proceed anyway** — accept the overlap and create the tickets as planned.
        - **Pick a different start date** — user provides a custom date; recompute.
     4. If the user reschedules (suggested or custom), **re-run this check** with the new dates. Loop until either no conflicts remain or the user chooses "Proceed anyway".

8. **Create Parent Ticket**
   - Name: `{Unit Name} - Animations`
   - List ID: `901208416337` (Product Backlog)
   - Start/Due dates: calculated span (covers only the selected deliverables)
   - Assignee: found user ID
   - Custom field "🪷 Lotus Pod" = "Battle" (ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`, value: `a1bd403a-aafc-4224-834f-6a75a452e761`)
   - Tag: "animation"
   - Task type: "Deliverable"
   - Parent: `86ag90gaw` (CHI-36166 — "Unit Animations")

9. **Create Subtasks** (only the deliverables selected in step 5, in canonical order)

   Possible subtasks (create only those that were selected):
   1. {Unit Name} - Idle
   2. {Unit Name} - Move
   3. {Unit Name} - Basic Attack
   4. {Unit Name} - Special Ability 1
   5. {Unit Name} - Special Ability 2
   6. {Unit Name} - Special Ability 3
   7. {Unit Name} - Stun
   8. {Unit Name} - Death
   9. {Unit Name} - Wombo Combo
   10. {Unit Name} - Feedback and Revisions

   Each with:
   - Calculated start/due dates (sequential, weekends excluded)
   - Time estimate in milliseconds (see table below)
   - Same assignee as parent
   - Lotus Pod custom field = "Battle"
   - Parent: the newly created parent ticket ID

   Note: Time estimates must be set via a follow-up `clickup_update_task` call — the create-task tool does not accept `time_estimate` as a creation parameter.

10. **Return Summary**
   - Parent ticket ID and URL
   - All created subtask IDs and URLs with their dates
   - List of any deliverables that were skipped (so the user can sanity-check the subset)
   - Total duration (sum of selected days)

## Custom Field Details

**Lotus Pod Field:**
- Field ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`
- Battle option ID: `a1bd403a-aafc-4224-834f-6a75a452e761`
- Set using: `custom_fields` parameter with `[{"id": "ee297ee9-3b42-4f32-b3d8-b577debf883f", "value": "a1bd403a-aafc-4224-834f-6a75a452e761"}]`

## Time Estimates (milliseconds)

| Deliverable | Days | Milliseconds |
|---|---|---|
| Idle | 1 | 28,800,000 |
| Move | 1 | 28,800,000 |
| Basic Attack | 1 | 28,800,000 |
| Special Ability 1 | 2 | 57,600,000 |
| Special Ability 2 | 2 | 57,600,000 |
| Special Ability 3 | 2 | 57,600,000 |
| Stun | 0.5 | 14,400,000 |
| Death | 1.5 | 43,200,000 |
| Wombo Combo | 2 | 57,600,000 |
| Feedback and Revisions | 3 | 86,400,000 |
| **Total** | **16** | **460,800,000** |

Conversion reference: 1 day = 8 hours = 28,800,000 ms

## Example Usage

```
User: Create animation tickets for "Toshoia" starting May 25th, assign to Tony Bonilla
```

## Notes

- **Dependency Check**: Automatically checks if `{Unit Name} - Rig & Skin` subtask is completed before scheduling
- If rig not done, suggests start date based on rig due_date + 1 working day
- User can override dependency check if needed
- Weekends (Saturday/Sunday) are excluded from working days
- All dates calculated sequentially (one task after another)
- Parent ticket gets parent ID: `86ag90gaw` (CHI-36166 — "Unit Animations")
- **Total pipeline time depends on which deliverables were selected in step 5.** Full kit (all 10) = 16 working days / 128 hours. Common subsets land in the 7–14 working-day range.
- For tighter schedules, ask the user whether the "Feedback and Revisions" subtask should be parallelized (overlap with later abilities) rather than serialized at the end
- Deliverable selection is per-unit; never assume the previous unit's selection applies to the next one
