# Unit Pipeline Status Skill

Gathers comprehensive status for a game unit/hero across Google Drive (latest images), ClickUp (active tickets), and Slack (recent discussions). Sends a condensed summary via Slack DM to the requester.

> **Usage**: `/unit-pipeline-status`
> 
> The skill will ask you which unit to check after invocation.

> **Note**: This skill is read-only on external systems. It downloads images and sends a private Slack DM with the status - no planning files are modified.

---

## Project Structure

### Output (Generated)
- `generated/unit_images/{hero_name}/` - Downloaded hero images with timestamps
- Slack DM to requester - Condensed status summary

### External Sources (Read-Only)
- Google Drive - Hero image folders
- Notion - Design Kit database
- ClickUp - Task tickets and timeline view
- Slack - Channel discussions
- ClickUp User API - To get requester's email
- Slack User Search - To find requester's Slack account

---

## Your Task

### 1. Ask User for Unit Name
- Prompt the user: "Which unit would you like to check?"
- Accept the hero/unit name from user response
- Supports partial names (e.g., "Merr" will match "Merrin")
- Clean and normalize the name for searching (e.g., "merrin" → "Merrin")

### 2. Identify Requester
- Use `clickup_resolve_assignees` with `["me"]` to get current user ID
- Use `clickup_get_workspace_members` or user profile to get requester's email
- Use `slack_search_users` with the email to find Slack user ID
- Store the Slack user ID for final DM

### 3. Search Google Drive for Images
- Parent folder: `1uGs0fpHNkKgtQbajDOwFxU8GrDn0vbXo`
- Search within parent folder for sub-folders matching the hero name (case-insensitive)
- Use `drive_search` with query like: `name contains '{hero_name}' and '{parent_folder_id}' in parents and mimeType='application/vnd.google-apps.folder'`
- If multiple matches, list them and ask user to select
- Find the latest image file in the selected folder (prioritize: .png > .jpg > .psd)
- Download to: `generated/unit_images/{hero_name}/`
  - Save as: `{hero_name}_latest.png` (or appropriate extension)
  - Also save with timestamp: `{hero_name}_{YYYY-MM-DD}.png` (backup)
- Record: file path, file name, last modified date, Drive folder URL

### 4. Search ClickUp Tickets
- Use the ClickUp MCP tool to search for tickets containing the hero name
- Filter: last 30 days of activity
- For each ticket, gather:
  - Ticket ID and title
  - Status (To Do, In Progress, Done, etc.)
  - Assignees
  - Due date (if set)
  - Priority (if set)
  - URL to ticket
- Group tickets by status

### 5. Get Discipline Due Dates from Timeline
- Query ClickUp timeline view: `https://app.clickup.com/36181078/v/tl/12g52p-488133`
- View ID: `12g52p-488133`
- Use `clickup_query_data_sources` in view mode:
  ```
  mode: "view"
  view_url: "https://app.clickup.com/36181078/v/tl/12g52p-488133"
  ```
- Search results for parent tickets matching the hero name pattern:
  - `Hero - {Unit Name} - Concepts` → Concept due date
  - `{Unit Name} - 3D` → 3D due date
  - `{Unit Name} - Rig` → Rig due date
  - `{Unit Name} - Animation` → Animation due date
  - `{Unit Name} - VFXs` → VFXs due date
- Extract `due_date` field from each matching parent ticket
- Store as discipline → due_date mapping
- If a discipline parent ticket not found or has no due date, mark as "Not set"

### 6. Get Design Kit Link
- Query Notion database: `https://www.notion.so/1eb3f0b3b6ab805893cfff034a5ceb42?v=3133f0b3b6ab8073ab4a000cd643a365`
- Search for page matching the hero name
- Extract the Design Kit URL for this unit
- If not found, mark as "Not available"

### 7. Search Slack for Discussions
- Use Slack MCP search tool for messages containing the hero name
- Filter: last 10 days
- Search in: all public channels (use `slack_search_public`)
- For each relevant result:
  - Channel name
  - Message preview (first 100 chars)
  - Author
  - Timestamp
  - Link to message
- Limit to top 10 most recent/relevant results

### 8. Send Condensed Slack DM
Use `slack_send_message` to send a DM to the requester's Slack user ID (obtained in step 2).

Message should use standard Slack markdown formatting (not rich blocks):

```markdown
*Unit Pipeline Status: {Hero Name}*

---

*📁 Latest Image*
{filename} • Modified {date}
<{drive_folder_url}|View in Drive> • `{local_path}`

*📋 Design Kit*
<{design_kit_url}|View Design Kit>

*📅 Discipline Due Dates*
• Concept: {due_date or "Not set"}
• 3D: {due_date or "Not set"}
• Rig: {due_date or "Not set"}
• Animation: {due_date or "Not set"}
• VFXs: {due_date or "Not set"}

*📋 ClickUp Tickets* ({total} total)
{emoji} *{count} In Progress*
{ticket_emoji} <{ticket_url}|{Ticket ID}> - {Title} ({assignee})
...

{emoji} *{count} To Do* • {emoji} *{count} Done*

*💬 Slack Activity* (last 10 days: {count} mentions)
Most recent: {X} days ago in <{slack_link}|#{channel}>

---

*⚡ Summary*
{status_emoji} Image: {status}
{status_emoji} Active work: {in_progress_count} tickets
{status_emoji} Recent activity: {days_since_last_mention} days ago

{blockers_or_next_steps_if_applicable}
```

**Formatting Rules**:
- Use `*bold*` for headers and emphasis
- Use `_italic_` for metadata
- Use `<url|text>` for clickable links
- Use emoji for visual indicators (✅ ⚠️ 🔄 📝)
- Keep it concise - max 3 tickets per status shown
- If >3 tickets in a status, show count only: "5 In Progress (view in ClickUp)"
- Limit Slack mentions to most recent 2-3
- Keep total message under 2000 characters

### 9. Confirm Delivery
After sending the Slack DM, display to user:
```
✅ Unit Pipeline Status: {Hero Name}

📁 Image: {local_path}
📋 Design Kit: {design_kit_url or "Not available"}
📅 Due Dates: {count_with_dates} of 5 disciplines set
📋 Tickets: {count} found ({in_progress} active)
💬 Slack: {count} discussions (last 10 days)

📨 Status sent via Slack DM to {requester_email}
```

---

## Rules

### Never Auto-Modify Planning
- Do NOT edit planning/ files
- Do NOT create ClickUp tickets
- ONLY send Slack DM to the requester (no channel messages)
- This is a read-only status gathering tool with private delivery

### Handle Missing Data Gracefully
- If Google Drive folder not found: skip image section, note in Slack message
- If Design Kit not found in Notion: show "Design Kit not available" in message
- If no ClickUp tickets found: show "No tickets found" in message
- If no Slack discussions: show "No recent discussions" in message
- If requester email/Slack not found: notify via console and ask for manual user ID
- Skill should complete successfully even if 1-2 data sources have no data

### Partial Name Matching
- User can provide partial or full unit name when prompted
- Search Google Drive with partial name, show all matches
- If multiple folders found (e.g., "Merrin" matches "Merrin" and "Merrin_Final"):
  - List all matches with modification dates
  - Ask user which to use OR auto-select most recently modified
- Use partial name in ClickUp/Slack searches too (broader matches)

### Image File Handling
- If `{hero_name}_latest.png` exists, overwrite it (it's disposable)
- Always create timestamped backup: `{hero_name}_{date}.png`
- No report files are created (status sent via Slack DM only)

### Date Ranges
- Slack search: last 10 days
- ClickUp search: tickets active or modified in last 30 days
- Include date range in report header for clarity

### Timeline View Details
- Timeline view URL: `https://app.clickup.com/36181078/v/tl/12g52p-488133`
- View ID: `12g52p-488133`
- Contains all unit production parent tickets with due dates
- Parent tickets follow naming patterns:
  - Concept: `Hero - {Unit Name} - Concepts`
  - 3D: `{Unit Name} - 3D`
  - Rig: `{Unit Name} - Rig`
  - Animation: `{Unit Name} - Animation`
  - VFXs: `{Unit Name} - VFXs`
- Use view mode query to get filtered results with due dates
- Fallback: If view query fails, search individual tickets by name pattern

### Google Drive Details
- Parent folder ID: `1uGs0fpHNkKgtQbajDOwFxU8GrDn0vbXo`
- Parent folder URL: `https://drive.google.com/drive/folders/1uGs0fpHNkKgtQbajDOwFxU8GrDn0vbXo`
- Contains sub-folders for each hero/unit with their images
- Search within this parent folder to limit scope and improve accuracy
- Image priority order: .png > .jpg > .psd (most recent file wins)

### Design Kit Database Details
- Notion database URL: `https://www.notion.so/1eb3f0b3b6ab805893cfff034a5ceb42?v=3133f0b3b6ab8073ab4a000cd643a365`
- Contains Design Kit links for each hero/unit
- Query the database by hero name to find the matching page
- Extract the page URL as the Design Kit link
- Include this link in the Slack message for easy access to design specs

---

## Notes

### When to Run
- Before sprint planning (check unit status)
- During production reviews (gather current state)
- When someone asks "what's the status of X hero?"
- After designer updates (verify assets uploaded)

### Related Skills
- `/channel-digest` - For broader Slack channel summaries
- `/queue-review` - For designer queue status (different focus)

### Tips
- Skill prompts for unit name - just type `/unit-pipeline-status` to start
- Partial names work: "Merr" will find "Merrin", "Merriment", etc.
- If hero has multiple Drive folders (concept, final, etc.), skill will show all
- Slack message is private to requester only - no channel noise
- ClickUp ticket links in Slack message are clickable for quick access
- Message stays in requester's DM history for reference

### Future Enhancements
- Add Notion document search for design specs
- Include GitHub commit history if repos are linked
- Support date range override (e.g., last 7 days instead of 30)
- Batch mode: generate status for multiple heroes at once
- Option to send to specific Slack user/channel instead of requester
- Add interactive Slack buttons (e.g., "View full details", "Mark reviewed")
- Support saving a copy to file if explicitly requested
