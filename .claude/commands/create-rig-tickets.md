# Create Rig & Skinning Tickets

Creates a parent ticket and subtask for rig & skinning based on the unit pipeline template.

## Process

1. **Get Parameters**
   - Unit name (e.g., "Steam Sage")
   - Start date (e.g., "May 11th" or "2026-05-11") - optional, will check dependency first
   - Assignee name (e.g., "Felipe Chaves")

2. **Check 3D Lowpoly Dependency**
   - Search for `{Unit Name} - 3D` parent ticket using `clickup_search`
   - If found, get full task details with `clickup_get_task` and `subtasks=true`
   - Look for `{Unit Name} - Lowpoly` subtask
   - Check status:
     - If **completed**: proceed with provided start date (or day after lowpoly completion)
     - If **not completed**: 
       - Warn user that lowpoly is not done yet
       - Suggest start date = lowpoly due_date + 1 working day
       - Ask user to confirm or provide override date
   - If 3D parent ticket not found: warn user and ask to confirm proceeding without dependency check

3. **Find Assignee**
   - Use `clickup_find_member_by_name` to get user ID

4. **Load Estimates**
   - Read `planning/pods/unit/rig_skinning_estimates.md` for task durations

5. **Calculate Schedule**
   - Calculate working days (excluding weekends)
   - Start from validated/confirmed start date (after dependency check)
   - Single task based on estimates:
     - Rig & Skin: 4 days
   - Parent ticket spans from first task start to last task end

6. **Create Parent Ticket**
   - Name: `{Unit Name} - Rig`
   - List ID: `901208416337` (Product Backlog)
   - Start/Due dates: calculated span
   - Assignee: found user ID
   - Custom field "🪷 Lotus Pod" = "Battle" (ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`, value: `a1bd403a-aafc-4224-834f-6a75a452e761`)
   - Tag: "rig"
   - Parent: `86ag91381` (Unit Content parent)

7. **Create Subtask**
   - {Unit Name} - Rig & Skin
   
   With:
   - Calculated start/due dates (4 working days)
   - Time estimate: 115,200,000 ms (4 days = 32 hours)
   - Same assignee as parent
   - Lotus Pod custom field = "Battle"
   - Parent: the newly created parent ticket ID

8. **Return Summary**
   - Parent ticket ID and URL
   - Subtask ID and URL with dates
   - Total duration

## Custom Field Details

**Lotus Pod Field:**
- Field ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`
- Battle option ID: `a1bd403a-aafc-4224-834f-6a75a452e761`
- Set using: `custom_fields` parameter with `[{"id": "ee297ee9-3b42-4f32-b3d8-b577debf883f", "value": "a1bd403a-aafc-4224-834f-6a75a452e761"}]`

## Time Estimates (milliseconds)

- 4 days = 115,200,000 ms (32 hours)

## Example Usage

```
User: Create rig tickets for "Steam Sage" starting May 27th, assign to Felipe Chaves
```

## Notes

- **Dependency Check**: Automatically checks if `{Unit Name} - Lowpoly` subtask is completed before scheduling
- If lowpoly not done, suggests start date based on lowpoly due_date + 1 working day
- User can override dependency check if needed
- Weekends (Saturday/Sunday) are excluded from working days
- All dates calculated sequentially (one task after another)
- Parent ticket gets parent ID: `86ag91381` (Unit Content parent)
- Total pipeline time: 4 working days (32 hours)
