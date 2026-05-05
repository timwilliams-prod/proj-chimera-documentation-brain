# Create 3D Modeling Tickets

Creates a parent ticket and subtasks for 3D modeling based on the template CHI-36273.

## Process

1. **Get Parameters**
   - Unit name (e.g., "Steam Sage")
   - Start date (e.g., "May 11th" or "2026-05-11")
   - Assignee name (e.g., "Felipe Chaves")

2. **Find Assignee**
   - Use `clickup_find_member_by_name` to get user ID

3. **Load Estimates**
   - Read `planning/pods/unit/3d_modeling_estimates.md` for task durations

4. **Calculate Schedule**
   - Calculate working days (excluding weekends)
   - Start from provided start date
   - Sequential tasks based on estimates:
     - High Poly modeling: 4 days
     - Low poly modeling: 2 days
     - UVs (texture layout): 0.5 days
     - Bake: 0.5 days
     - Textures: 3 days
   - Parent ticket spans from first task start to last task end

5. **Create Parent Ticket**
   - Name: `{Unit Name} - 3D`
   - List ID: `901208416337` (Product Backlog)
   - Start/Due dates: calculated span
   - Assignee: found user ID
   - Custom field "🪷 Lotus Pod" = "Battle" (ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`, value: `a1bd403a-aafc-4224-834f-6a75a452e761`)
   - Tag: "3d"
   - Parent: `86ag91381` (from template's parent field)

6. **Create Subtasks** (in order)
   - {Unit Name} - Highpoly
   - {Unit Name} - Lowpoly
   - {Unit Name} - UVs
   - {Unit Name} - Bake
   - {Unit Name} - Textures
   
   Each with:
   - Calculated start/due dates
   - Time estimate (in milliseconds: days * 8 hours * 3600000)
   - Same assignee as parent
   - Lotus Pod custom field = "Battle"
   - Parent: the newly created parent ticket ID

7. **Return Summary**
   - Parent ticket ID and URL
   - All subtask IDs and URLs with dates
   - Total duration

## Custom Field Details

**Lotus Pod Field:**
- Field ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`
- Battle option ID: `a1bd403a-aafc-4224-834f-6a75a452e761`
- Set using: `custom_fields` parameter with `[{"id": "ee297ee9-3b42-4f32-b3d8-b577debf883f", "value": "a1bd403a-aafc-4224-834f-6a75a452e761"}]`

## Time Estimates (milliseconds)

- 4 days = 115,200,000 ms (32 hours)
- 3 days = 86,400,000 ms (24 hours)
- 2 days = 57,600,000 ms (16 hours)
- 0.5 days = 14,400,000 ms (4 hours)

## Example Usage

```
User: Create 3D tickets for "Steam Sage" starting May 27th, assign to Felipe Chaves
```

## Notes

- Weekends (Saturday/Sunday) are excluded from working days
- All dates calculated sequentially (one task after another)
- Template ticket CHI-36273 used as structural reference
- Parent ticket gets parent ID: `86ag91381` from template
- Total pipeline time: 10 working days (80 hours)
