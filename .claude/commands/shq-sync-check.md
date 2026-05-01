# SHQ Sync Check Skill

Weekly automated check that ClickUp SHQ Tracker, Notion M&M's Validation Plan, and Google Sheets Validation Roadmap are in sync. Posts to production and admin channels every Monday 9am PST.

> **Note**: Compares ClickUp (Milestone = 3) vs Notion M&M's Validation Plan vs Google Sheets Validation Roadmap. Does NOT involve ValidationPlan.md.

---

## Project Structure

**Sources:**
- ClickUp: SHQ Tracker list (901324723345) filtered by Milestone custom field = 3 (Multiplayer & Meta)
- Notion: M&M's Validation Plan (3533f0b3b6ab80c3b6eccad51cd2b09a)
- Google Sheets: Lotus Productionomicon (156hViBsjoRMKy-j9kW5oZbeKFTWWEKo4wARHXVpY70E), tab "Validation Roadmap", column K for SHQs

**Thread tracking files:**
- `.claude/shq-sync-check-production-thread.txt` - Production channel thread info
- `.claude/shq-sync-check-admin-thread.txt` - Admin channel thread info

---

## Mode Detection

Check if arguments contain "monitor":
- **If YES:** Run in Monitor Mode (check threads for resolution commands)
- **If NO:** Run in Summary Mode (compare and post to channels)

---

## Summary Mode

### 1. Fetch ClickUp SHQs

Use `clickup_filter_tasks` on list 901324723345 to get all tasks.

Then use `clickup_get_task` for each to check custom field "🪷 Milestone (Lotus)" (ID: `1fd015d9-deb1-4121-b28b-732287e1c285`).

Filter for value = 3 (option ID: `4845d68a-a776-4258-bc71-e9f8c3f1864c` = "Multiplayer & Meta").

Extract:
- Local SHQ number (from task name, e.g., "SHQ 01", "SHQ 26")
- Full question text
- Task ID

### 2. Fetch Notion SHQs

Use `notion-fetch` on page 3533f0b3b6ab80c3b6eccad51cd2b09a.

Extract all SHQs from main body (ignore "needs organising" section).

For each SHQ:
- Local SHQ number (e.g., "SHQ 01", "SHQ 26")
- Full question text

### 3. Fetch Google Sheets SHQs

Use `sheets_getRange` on spreadsheet 156hViBsjoRMKy-j9kW5oZbeKFTWWEKo4wARHXVpY70E, range "Validation Roadmap!K:K".

Filter for rows that start with "SHQ" followed by a number (ignore headers, section labels like "SHQ (shared)").

For each SHQ:
- Extract SHQ number from the prefix (e.g., "SHQ 01", "SHQ26")
- Extract full question text after the colon
- Normalize SHQ number format to "SHQ ##" (e.g., "SHQ26" → "SHQ 26")

### 5. Compare

For each SHQ number, compare across all three sources:
- Does it exist in ClickUp, Notion, and/or Google Sheets?
- Is the question text identical across all sources where it exists?

**Ignore minor formatting differences:**
- Spacing (e.g., "meta game" vs "metagame")
- Capitalization differences
- Minor punctuation variations

**Do NOT ignore:**
- Prefixes like "[in software]", "[prototype]", "(Paper)" - these are content differences
- Different words or truncated text
- Different meaning or intent

**Categories:**
- ✅ **Exact Match**: Same question text in all three sources (ignoring spacing/capitalization only)
- ⚠️ **Content Difference**: Exists in multiple sources but actual content differs (different words, prefixes, truncated text, different meaning)
- ❌ **Missing from Source**: Exists in some sources but not others
  - Missing from ClickUp
  - Missing from Notion
  - Missing from Google Sheets

### 6. Post to Channels

Post to BOTH channels:
- `#proj-lotus-production` (C04LV0XFZ1B)
- `#proj-lotus-admin` (C061CNP3LE6)

**If everything matches:**

```
✅ Your SHQs are matching in all locations! Great job your really awesome ok?

_SHQ Sync Check - 2026-05-05_
```

**If discrepancies exist:**

```
⚠️ **SHQ Sync Check - Discrepancies Found**

The following SHQs have differences across ClickUp, Notion, and Google Sheets:

**⚠️ Content Differences:**

| SHQ # | Source | Question | Issue |
|-------|--------|----------|-------|
| SHQ 01 | ClickUp | Does our new art direction maintain the level of clarity necessary for fun-to-execute gameplay that the player can understand the impact of their in-game choices? | |
| SHQ 01 | Notion | Does our new art direction maintain the level of clarity necessary for this to be clear? | Truncated |
| SHQ 01 | Google Sheets | Does our new art direction maintain the level of clarity necessary for the audience to clearly understand the state of battle at a glance | Different focus |

**❌ Missing from Sources:**

| SHQ # | ClickUp | Notion | Google Sheets | Full Question (from available source) |
|-------|---------|--------|---------------|---------------------------------------|
| SHQ 08 | ✅ | ❌ | ✅ | Can we create progression opportunities to come back and finish the next session that are high-impact and time sensitive? |
| SHQ 17 | ✅ | ❌ | ✅ | Do players get attached to favorite heroes and feel excited to focus on its progression? |
| SHQ4-6 | ❌ | ✅ | ❌ | Do we have a clear UX vision for how the player will engage and navigate between home empire, limited time maps (whirlpool), and multiplayer? |

---

**To resolve:** Reply in this thread with:
- "ClickUp is correct for SHQ 01" (updates Notion and Google Sheets to match ClickUp)
- "Notion is correct for SHQ 01" (updates ClickUp and Google Sheets to match Notion)
- "Google Sheets is correct for SHQ 01" (updates ClickUp and Notion to match Google Sheets)
- "close" (stops monitoring without changes)

_SHQ Sync Check - 2026-05-05_
```

### 7. Save Thread Info

If discrepancies exist:

Save thread timestamps to both tracking files:

`.claude/shq-sync-check-production-thread.txt`:
```
<thread_ts>|C04LV0XFZ1B|<date>
```

`.claude/shq-sync-check-admin-thread.txt`:
```
<thread_ts>|C061CNP3LE6|<date>
```

Format: `<thread_ts>|<channel_id>|<YYYY-MM-DD>`

---

## Monitor Mode

### 1. Read Thread Files

Read both thread tracking files:
- `.claude/shq-sync-check-production-thread.txt`
- `.claude/shq-sync-check-admin-thread.txt`

If both files are empty or don't exist: exit silently (no active threads).

### 2. Check Threads for Commands

For each active thread, use `slack_read_thread` with stored channel_id and thread_ts.

Look for replies from ANY user with these patterns:

**Resolution commands:**
- "ClickUp is correct for SHQ X" → Update Notion and Google Sheets SHQ X to match ClickUp
- "Notion is correct for SHQ X" → Update ClickUp and Google Sheets SHQ X to match Notion
- "Google Sheets is correct for SHQ X" → Update ClickUp and Notion SHQ X to match Google Sheets
- Multiple in one message: "Notion is correct for SHQ 01 and SHQ 03, ClickUp is correct for SHQ 08"

**Close command:**
- "close" → Stop monitoring this thread, delete thread file

### 3. Fetch Current State

To apply updates, first fetch current state:

**ClickUp SHQs:**
- Use `clickup_filter_tasks` + `clickup_get_task` to get all M&Ms SHQs (same as Summary Mode step 1)

**Notion SHQs:**
- Use `notion-fetch` on page 3533f0b3b6ab80c3b6eccad51cd2b09a (same as Summary Mode step 2)

**Google Sheets SHQs:**
- Use `sheets_getRange` on spreadsheet 156hViBsjoRMKy-j9kW5oZbeKFTWWEKo4wARHXVpY70E, range "Validation Roadmap!K:K" (same as Summary Mode step 3)

### 4. Apply Approved Updates

**For each "ClickUp is correct for SHQ X" command:**

1. Find the ClickUp question text for SHQ X
2. Update Notion:
   - Find the Notion SHQ X section
   - Use `notion-update-page` with `update_content` to replace the Notion question text
   - `old_str`: Current Notion question for SHQ X
   - `new_str`: ClickUp question text for SHQ X
3. Update Google Sheets:
   - Find the row in column K containing "SHQ X:" or "SHQX:"
   - Use `sheets_updateRange` to replace the cell content
   - New format: "SHQ ##: [ClickUp question text]" (with leading zero for single digits)

**For each "Notion is correct for SHQ X" command:**

1. Find the Notion question text for SHQ X
2. Update ClickUp:
   - Find the ClickUp task for SHQ X
   - Use `clickup_update_task` to update the task name to match Notion question text
3. Update Google Sheets:
   - Find the row in column K containing "SHQ X:" or "SHQX:"
   - Use `sheets_updateRange` to replace the cell content
   - New format: "SHQ ##: [Notion question text]" (with leading zero for single digits)

**For each "Google Sheets is correct for SHQ X" command:**

1. Find the Google Sheets question text for SHQ X (from column K)
2. Update ClickUp:
   - Find the ClickUp task for SHQ X
   - Use `clickup_update_task` to update the task name to match Google Sheets question text
3. Update Notion:
   - Find the Notion SHQ X section
   - Use `notion-update-page` with `update_content` to replace the Notion question text
   - `old_str`: Current Notion question for SHQ X
   - `new_str`: Google Sheets question text for SHQ X

**Note on Google Sheets updates:**
- When updating Google Sheets, preserve the "SHQ ##:" prefix format
- Maintain consistent numbering with leading zeros (SHQ 01, SHQ 02, etc.)
- The API for updating Google Sheets is not yet implemented in this skill - use manual update instructions in thread reply until implemented

### 5. Handle Missing SHQs

**If source of truth is missing:**
- "ClickUp is correct for SHQ X" but SHQ X doesn't exist in ClickUp → Reply: "⚠️ Cannot update - SHQ X doesn't exist in ClickUp (source of truth). Check SHQ number."
- "Notion is correct for SHQ X" but SHQ X doesn't exist in Notion → Reply: "⚠️ Cannot update - SHQ X doesn't exist in Notion (source of truth). Check SHQ number."
- "Google Sheets is correct for SHQ X" but SHQ X doesn't exist in Google Sheets → Reply: "⚠️ Cannot update - SHQ X doesn't exist in Google Sheets (source of truth). Check SHQ number."

**If target is missing but source exists:**
- Skip updating that specific target
- Include in confirmation message which targets were updated and which were skipped
- Example: "⚠️ SHQ X updated in ClickUp and Notion. Google Sheets doesn't have SHQ X - add it manually if needed."

### 6. Confirm in Thread

Reply to the thread with confirmation:

```
✅ **Updates Applied**

**Source: ClickUp**
- SHQ 01: Updated Notion ✅ | Updated Google Sheets ✅
- SHQ 03: Updated Notion ✅ | Updated Google Sheets ✅

**Source: Notion**
- SHQ 08: Updated ClickUp ✅ | Updated Google Sheets ✅

**Source: Google Sheets**
- SHQ 17: Updated ClickUp ✅ | Updated Notion ✅

_Next sync check: Monday 2026-05-12 at 9am PST_
```

**If some targets were skipped:**

```
✅ **Updates Applied (with warnings)**

**Source: ClickUp**
- SHQ 01: Updated Notion ✅ | Google Sheets ⚠️ (doesn't exist in Google Sheets)

⚠️ Please add missing SHQs to Google Sheets manually.

_Next sync check: Monday 2026-05-12 at 9am PST_
```

### 7. Handle Close Command

If "close" is found in any reply:

Delete the appropriate thread file:
- Production thread: Delete `.claude/shq-sync-check-production-thread.txt`
- Admin thread: Delete `.claude/shq-sync-check-admin-thread.txt`

Reply to thread:
```
✅ Monitoring stopped for this thread. See you next Monday at 9am PST for the next sync check!
```

---

## Rules

### Never Auto-Update
- Do NOT update ClickUp, Notion, or Google Sheets automatically
- ONLY update when explicit command received: "ClickUp is correct for SHQ X", "Notion is correct for SHQ X", or "Google Sheets is correct for SHQ X"
- Always confirm what was updated in thread reply
- When one source is chosen as correct, update the OTHER TWO sources to match it

### Comparison Logic
- Normalize text before comparing: strip extra whitespace, normalize "metagame" vs "meta game", ignore case differences
- Prefixes like "[in software]", "[prototype]" ARE content differences - flag them
- Flag as discrepancy if: different words, prefixes present/absent, truncated/expanded text, different intent
- Spacing and capitalization variations are NOT discrepancies

### Thread Lifecycle
- New thread created every Monday 9am PST if discrepancies exist
- Old threads continue monitoring until "close" command or all issues resolved
- "close" command stops monitoring immediately, doesn't wait for next Monday
- If Monday check finds NO discrepancies, post success message but don't create tracking files

### Multiple Channels
- Production and admin threads are independent
- Someone can close production thread but admin thread continues monitoring
- Apply same updates to all three sources (ClickUp, Notion, Google Sheets) regardless of which thread the command came from
- If command appears in BOTH threads, apply update only ONCE but confirm in BOTH threads

---

## Notes

**Cron Schedule:**
- Summary Mode: Weekly Monday 9am PST (17 17 * * 1 in UTC, minute 17 to avoid :00 congestion)
- Monitor Mode: Daily 10am PST (17 18 * * * in UTC) to check for responses

**Timezone:**
- Cron runs in UTC
- 9am PST = 5pm UTC (Pacific Standard Time, winter)
- 9am PDT = 4pm UTC (Pacific Daylight Time, summer)
- Use PST year-round for consistency: 17 17 * * 1 (Summary), 17 18 * * * (Monitor)

**Testing:**
- Manual invocation: `/shq-sync-check` (runs Summary Mode)
- Manual monitoring: `/shq-sync-check monitor` (runs Monitor Mode)
- Test channels: Use #proj-lotus-slack-ai-testing for testing before deploying to production

**Related:**
- `/validation-review` - Sprint/milestone SHQ evaluation
- `planning/ValidationPlan.md` - NOT used by this skill (ClickUp + Notion + Google Sheets only)
