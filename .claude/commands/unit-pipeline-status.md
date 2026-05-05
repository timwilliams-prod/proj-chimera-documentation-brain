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
- Miro - Concept art progress board (primary image source)
- Google Drive - Hero image folders (fallback image source)
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

### 3. Search Miro Board for Concept Images (Primary)

The Miro concept art progress board is the primary source for the latest concept image. Only the **Vinod Rams** and **Vinicius Muniz** lanes are searched — skip Guilherme Lascasas and any other lanes.

**Board:** `https://miro.com/app/board/uXjVG_G7jjo=/`

**Step 3a — Anchor on artist labels:**
- Use `mcp__miro__board_list_items` with `item_type=text` to enumerate text widgets on the board
- Find the two artist label texts: `"Vinod Rams"` and `"Vinicius Muniz"` (large fontSize ~747, white text)
- Record each artist's `position.y` (the lane's vertical anchor)
- Define each lane's y-window as anchor_y ± 3000 units (covers date row + image row)

**Step 3b — Collect unit-matching signals within each lane:**
Within each lane's y-window, gather any of these signals (used as confidence boosters in step 3c):
- **Text widgets** containing the hero name in their content (case-insensitive, partial match OK)
- **Notion link text** with hrefs like `notion.so/...{hero_name}...` (e.g., `Approved-Merrin-AoE-Specialist`)
- **Image `data.altText` or `data.title`** containing the hero name — when present, this is the strongest signal
- **Date labels** near such matches (smaller fontSize ~369, formatted like `M/D/YY`) — capture them as date hints

Signals are optional: if none are found, step 3c still returns the rightmost images by x-position. The signals are used to filter or disambiguate when many candidates exist.

**Step 3c — Pick the top 2 rightmost images in each lane:**
- Re-query `mcp__miro__board_list_items` with `item_type=image`, paginating until `has_more=false`
- Filter to images whose `position.y` falls in the lane's y-window
- Sort by `position.x` **descending** (rightmost = most recent on the horizontal timeline)
- Take the **top 2 images** by x-position from each lane (yielding up to 4 candidates total across both lanes)
- If a lane has no images in its y-window, skip it; if both lanes are empty, fall through to step 3e (Drive fallback)
- When more than 2 candidates exist within a tight x-range, prefer images that match a step-3b signal (alt/title hit, or within ~5000 units of a unit-mentioning anchor)

**Step 3d — Capture image details:**
For each of the top 2 images per lane:
- Use `mcp__miro__image_get_url` to get the **signed download URL** (note: signed URLs expire in ~2 hours, so they should be sent in the DM promptly)
- Record: artist (lane), nearest date label, image x/y position, Miro deep link (`?moveToWidget={image_id}`)
- These will be embedded in the DM with link text **"image 01"** and **"image 02"** (per artist/lane)

**Step 3e — Fallback to Google Drive (only if Miro returned nothing):**
- Parent folder: `1uGs0fpHNkKgtQbajDOwFxU8GrDn0vbXo`
- Search within parent folder for sub-folders matching the hero name (case-insensitive)
- Use `drive_search` with query like: `name contains '{hero_name}' and '{parent_folder_id}' in parents and mimeType='application/vnd.google-apps.folder'`
- If multiple matches, list them and ask user to select
- Find the latest image file in the selected folder (prioritize: .png > .jpg > .psd)
- Download to: `generated/unit_images/{hero_name}/`
  - Save as: `{hero_name}_latest.png` (or appropriate extension)
  - Also save with timestamp: `{hero_name}_{YYYY-MM-DD}.png` (backup)
- Record: file path, file name, last modified date, Drive folder URL
- Note in the report that Drive was used as fallback (no Miro match)

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

### 7. Search Slack for Discussions and Shared Images
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

**Also run a parallel search for image-bearing messages:**
- **Preferred:** standard `slack_search_public` with the `has:file` modifier in the query, e.g. `{hero_name} has:file after:{date_10_days_ago}`. This reliably catches messages where designers attached work-in-progress images.
- Fallback (less reliable, often returns 0 hits): `slack_search_public` with `content_types="files"` and a query like `{hero_name} type:images after:{date_10_days_ago}`. Try only if `has:file` returns nothing.
- Designer image shares typically land in `#proj-lotus-pod-battle`, `#proj-lotus-art-style-development`, or unit-pipeline channels — useful as `in:` filters if results are noisy.
- For each image file or image-bearing message captured:
  - File name (or message text preview)
  - Permalink to the Slack message/file
  - Channel
  - Author
  - Timestamp
- Limit to the **5 most recent** image attachments to keep the DM concise
- These will appear in a dedicated "Recently Shared in Slack" section of the DM

### 8. Send Condensed Slack DM
Use `slack_send_message` to send a DM to the requester's Slack user ID (obtained in step 2).

Message should use standard Slack markdown formatting (not rich blocks):

```markdown
*Unit Pipeline Status: {Hero Name}*

---

*🎨 Latest Concept Images (Miro)*
{for each artist with images:}
*{artist_name}*
• <{img1_signed_url}|image 01> _(near {date1})_
• <{img2_signed_url}|image 02> _(near {date2})_
{if Drive fallback used:}
• _Drive fallback_ — <{drive_folder_url}|{filename}> _({modified_date})_

*📸 Recently Shared in Slack* _(last 10 days)_
{for each image attachment found, up to 5:}
• <{slack_permalink}|{file_name or "image"}> — _{channel} • {author} • {date}_
{if no Slack image attachments found, omit this entire section}

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
- If Miro board has no unit-matching anchor in either lane: fall back to Google Drive (step 3e)
- If Drive fallback also returns nothing: skip image section, note "No concept image found (Miro + Drive)" in Slack message
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

### Miro Board Details (Primary Image Source)
- Board URL: `https://miro.com/app/board/uXjVG_G7jjo=/`
- The board is a horizontal timeline: dates progress left → right (newer = larger x)
- Artists are organized into vertical lanes (rows). Only these two are searched:
  - **Vinod Rams** lane — anchor `position.y ≈ 8,800`
  - **Vinicius Muniz** lane — anchor `position.y ≈ 42,400`
- A third lane exists for Guilherme Lascasas (`y ≈ 24,200`) — **do not search it**
- Lane y-anchor positions can shift as the board grows; always re-derive them by searching for the artist name text (large fontSize ~747) rather than hardcoding y-values
- Lane y-window: anchor_y ± 3,000 captures the date row + image row for that artist
- Image selection: take the **top 2 rightmost images** in each lane's y-window (newest = largest x). Fetch all image pages until `has_more=false` before sorting.
- Confidence signals (used to disambiguate when many candidates cluster at similar x): `data.altText`/`data.title` on the image containing the unit name, or proximity (~5000 units) to a text widget or Notion link mentioning the unit
- Date labels follow `M/D/YY` format (smaller fontSize ~369) and sit just below images — use them as the "near {date}" hint in the DM
- Image URLs from `image_get_url` are signed CloudFront links that **expire in ~2 hours**, so the DM should be sent promptly after fetching
- DM link text convention: label the two images **"image 01"** and **"image 02"** per lane, in rightmost-first order
- This board is read-only for this skill — do NOT create/move/edit Miro items

### Google Drive Details (Fallback Image Source)
- Used **only if no unit-matching image found in the Miro lanes**
- Parent folder ID: `1uGs0fpHNkKgtQbajDOwFxU8GrDn0vbXo`
- Parent folder URL: `https://drive.google.com/drive/folders/1uGs0fpHNkKgtQbajDOwFxU8GrDn0vbXo`
- Contains sub-folders for each hero/unit with their images
- Search within this parent folder to limit scope and improve accuracy
- Image priority order: .png > .jpg > .psd (most recent file wins)
- When this fallback is used, note it explicitly in the Slack DM

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
