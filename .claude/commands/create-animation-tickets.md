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

5. **Calculate Schedule**
   - Calculate working days (excluding weekends)
   - Start from validated/confirmed start date (after dependency check)
   - Sequential tasks based on estimates:
     - Idle: 1 day
     - Move: 1 day
     - Basic Attack: 1 day
     - Special Ability 1: 2 days
     - Special Ability 2: 2 days
     - Special Ability 3: 2 days
     - Stun: 0.5 days
     - Death: 1.5 days
     - Wombo Combo: 2 days
     - Feedback and Revisions: 3 days
   - Parent ticket spans from first task start to last task end (16 working days total)

6. **Create Parent Ticket**
   - Name: `{Unit Name} - Animations`
   - List ID: `901208416337` (Product Backlog)
   - Start/Due dates: calculated span (full 16 working days)
   - Assignee: found user ID
   - Custom field "🪷 Lotus Pod" = "Battle" (ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`, value: `a1bd403a-aafc-4224-834f-6a75a452e761`)
   - Tag: "animation"
   - Task type: "Deliverable"
   - Parent: `86ag91381` (Unit Content parent)

7. **Create Subtasks** (in order)
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

8. **Return Summary**
   - Parent ticket ID and URL
   - All 10 subtask IDs and URLs with their dates
   - Total duration (16 working days / 128 hours)

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
- Parent ticket gets parent ID: `86ag91381` (Unit Content parent)
- Total pipeline time: 16 working days (128 hours) — over 3 calendar weeks
- For tighter schedules, ask the user whether the "Feedback and Revisions" subtask should be parallelized (overlap with later abilities) rather than serialized at the end
