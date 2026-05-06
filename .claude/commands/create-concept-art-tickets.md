# Create Concept Art Tickets

Creates a parent ticket and subtasks for concept art based on the template CHI-36432.

## Process

1. **Get Parameters**
   - Unit name (e.g., "Generalist Healer (Celestine Replacement)")
   - Start date (e.g., "May 11th" or "2026-05-11")
   - Assignee name (e.g., "Vinod Rams")

2. **Find Assignee**
   - Use `clickup_find_member_by_name` to get user ID

3. **Load Estimates**
   - Read `planning/pods/unit/concept_art_estimates.md` for task durations

4. **Calculate Schedule**
   - Calculate working days (excluding weekends)
   - Start from provided start date
   - Sequential tasks based on estimates:
     - Ideation: 2 days
     - AI pose iterations: 0.5 days
     - Gacha portrait: 3 days
     - Dialogue portraits: 2 days
     - Turn around: 1 day
     - Battle View: 0.5 days
     - VFX guidance: 1 day
   - Parent ticket spans from first task start to last task end

5. **Check Assignee Workload Conflicts**

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

6. **Create Parent Ticket**
   - Name: `Hero - {Unit Name} - Concepts`
   - List ID: `901208416337` (Product Backlog)
   - Start/Due dates: calculated span
   - Assignee: found user ID
   - Custom field "🪷 Lotus Pod" = "Battle" (ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`, value: `a1bd403a-aafc-4224-834f-6a75a452e761`)
   - Tag: "2d"
   - Parent: Same as template (from template's parent field)

7. **Create Subtasks** (in order)
   - Hero - {Unit Name} - Ideation
   - Hero - {Unit Name} - AI Pose Iterations
   - Hero - {Unit Name} - Gacha Portrait
   - Hero - {Unit Name} - Dialogue Portrait(s)
   - Hero - {Unit Name} - Turnaround
   - Hero - {Unit Name} - Battle View
   - Hero - {Unit Name} - VFXs Guidance
   
   Each with:
   - Calculated start/due dates
   - Time estimate (in milliseconds: days * 8 hours * 3600000)
   - Same assignee as parent
   - Lotus Pod custom field = "Battle"
   - Parent: the newly created parent ticket ID

8. **Return Summary**
   - Parent ticket ID and URL
   - All subtask IDs and URLs with dates
   - Total duration

## Custom Field Details

**Lotus Pod Field:**
- Field ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`
- Battle option ID: `a1bd403a-aafc-4224-834f-6a75a452e761`
- Set using: `custom_fields` parameter with `[{"id": "ee297ee9-3b42-4f32-b3d8-b577debf883f", "value": "a1bd403a-aafc-4224-834f-6a75a452e761"}]`

## Time Estimates (milliseconds)

- 2 days = 57,600,000 ms (16 hours)
- 3 days = 86,400,000 ms (24 hours)
- 1 day = 28,800,000 ms (8 hours)
- 0.5 days = 14,400,000 ms (4 hours)

## Example Usage

```
User: Create concept art tickets for "Generalist Healer (Celestine Replacement)" starting May 11th, assign to Vinod Rams
```

## Notes

- Weekends (Saturday/Sunday) are excluded from working days
- All dates calculated sequentially (one task after another)
- Template ticket CHI-36432 used as structural reference
- Parent ticket gets same parent as template ticket
