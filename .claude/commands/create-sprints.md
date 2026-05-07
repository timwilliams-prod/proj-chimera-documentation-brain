---
name: create-sprints
description: Create the next 2 sprint lists in Lotus → Sprints, named from the active sprint-name pack sheet (currently May '26 Pokemon, column G). Auto-derives sprint number and dates from the latest existing list. Duplicates the most recent Not-Started sprint as the source (sets inherited status correctly). Skips names already used.
owner: Thorben
category: planning

# ─── Skill Maturity Framework ────────────────────────────────────────────
logic_stability: vibe
last_maturity_review: 2026-05-07

idempotent: additive
# Notes:
# - Reads existing sprint lists before creating; never duplicates a Pokemon name.
# - Re-running after partial success only creates the missing lists.
# - Date inference is deterministic given current ClickUp state.

failure_modes:
  - id: clickup_token_missing
    description: CLICKUP_API_TOKEN env var not set; cannot call template endpoint
    detection: empty $CLICKUP_API_TOKEN
    mitigation: Halt with one-time setup instructions, do not attempt fallback
  - id: clickup_template_api_error
    description: ClickUp REST API returns non-2xx from list_template POST
    detection: HTTP status not in 200/201/202 from /folder/{id}/list_template/{id}
    mitigation: Surface response body, halt before further calls (no partial-state retry)
  - id: list_created_trashed
    description: New list returned with deleted:true OR locked in "Done" status — happens when using the saved subcategory template (901326452273) instead of a live source list, OR when return_immediately:true
    detection: response.list.deleted == true OR new sprint shows "Done" badge in UI despite future dates
    mitigation: MUST use a live Not-Started sprint as source (list_template/{list_id} URL) AND return_immediately:false. The saved subcategory template is broken — do not use it.
  - id: list_dates_not_set
    description: start_date/due_date in create options are silently ignored by template endpoint
    detection: response.list.start_date != requested timestamp after create
    mitigation: Always do a follow-up PUT /list/{id} with dates after the create
  - id: source_sprint_not_found
    description: No existing sprint qualifies as source (no list with future start_date)
    detection: After querying folder, zero sprints have start_date > now
    mitigation: Halt with clear message; user must seed a Not-Started sprint manually (or specify a source list ID)
  - id: inherited_tasks_present
    description: Source-sprint duplication copies its real tasks into the new sprint (not just structure)
    detection: response.list.task_count > 0 after create
    mitigation: Surface task count + URL in the output summary; user decides whether to clear them. Do NOT auto-delete — they may be intentional handover items.
  - id: sheet_unavailable
    description: Pokemon-pack Google Sheet fetch fails
    detection: MCP error from sheets_getRange
    mitigation: Halt; ask user to verify sheet access
  - id: pack_exhausted
    description: Fewer than 2 unused names remain in the active pack
    detection: candidate count after dedup is 0 or 1
    mitigation: Create what's possible (1 or 0); remind user to define next pack
  - id: cadence_drift
    description: Latest sprint dates don't fit the 14-day Mon-Mon pattern
    detection: parsed end - start ≠ 14 days, OR start is not a Monday
    mitigation: Surface inferred dates in the approval gate; user confirms or aborts

requires_approval: true
approval_points:
  - sprint_creation_preview    # show 2 list names + dates, confirm before POST

emits_events:
  - skill_invocation
  - approval_request
  - approval_decision
  - tool_use
  - skill_failure
  - session_end
---

# /create-sprints

Creates the **next 2 sprint lists** in Lotus → Sprints, named from the active sprint-name pack, with sprint number and dates auto-derived from the latest existing list. Applies the Sprint list template via ClickUp REST API.

Run once every two weeks (after a sprint kicks off) to keep a one-month buffer of upcoming sprint lists.

---

## Constants

| What | Value |
|------|-------|
| Workspace ID | `36181078` |
| Space ID (Lotus) | `38562126` |
| Sprint folder ID | `90124992719` (Lotus → Sprints) |
| Source sprint | Latest existing sprint whose `start_date` is in the future (i.e., currently "Not Started"). Picked at runtime from the folder. **Do NOT use the saved subcategory template** — it produces lists locked in "Done" state (see Notes). |
| Sprint name pack sheet | [`16sCy8Ofpmb4mQ1s3YetidziInhUhTZGrL7Sbm-iHFTY`](https://docs.google.com/spreadsheets/d/16sCy8Ofpmb4mQ1s3YetidziInhUhTZGrL7Sbm-iHFTY/edit?gid=0#gid=0) |
| Active pack column | `G` (May '26 Pokemon, A→Z, 26 names) |
| Sprint cadence | 14 days, Tuesday → Tuesday — **end date of one = start date of next** |
| List name format | `<Name> <Sprint#> (<M/D> - <M/D>)` (no leading zeros) |

---

## One-time setup

The ClickUp MCP does not expose "create list from template" — only the REST API does. The skill needs a personal ClickUp API token.

**Token storage**: `.claude/.env` (gitignored). The skill sources it automatically at runtime — no shell-profile editing required.

To install or rotate the token:
1. ClickUp → top-right avatar → **Settings → Apps → API Token → Generate** (or Regenerate). Token starts with `pk_`.
2. Write the token to `.claude/.env` in this format:
   ```
   CLICKUP_API_TOKEN=pk_xxxxx
   ```
3. Confirm `.claude/.env` is in `.gitignore` (it should be already).

If the env var is missing or empty after sourcing, the skill halts with the `clickup_token_missing` failure mode.

---

## Procedure

### 1. Token check

```bash
set -a && [ -f .claude/.env ] && . .claude/.env; set +a
test -n "$CLICKUP_API_TOKEN" && echo OK || echo MISSING
```
The first line sources `.claude/.env` if present (gitignored), so the token is available to subsequent Bash calls in the same chain. **Important**: each Bash tool call is a fresh shell — every `curl` invocation must re-source `.claude/.env` itself (see step 9).

If `MISSING` → emit `skill_failure` (`clickup_token_missing`) with the setup instructions above and halt.

### 2. Read the active pack

`mcp__google-workspace__sheets_getRange` on the pack sheet, range `G1:G50`.
- Row 1 = period label (e.g. `May '26`) — skip
- Row 2 = theme label (e.g. `Pokemon`) — skip
- Rows 3+ = names in order (Abra, Bulbasaur, …, Zapdos)

Result: ordered list of pack names.

### 3. Read existing sprint lists

`mcp__clickup__clickup_get_workspace_hierarchy` with `space_ids: ["38562126"]`, `max_depth: 2`. Filter children of folder `90124992719` (the Sprints folder).

For each list, parse the name with regex:
```
^(?P<name>.+?)\s(?P<num>\d+)\s\((?P<start>\d+/\d+)\s-\s(?P<end>\d+/\d+)\)$
```
Names with multiple words (e.g., `Zany Zebras`) match because `.+?` is non-greedy and the trailing `\s\d+\s\(...\)` is the anchor.

### 4. Identify the latest sprint + the source sprint

- `last_number` = max sprint number across parsed lists
- `last_start`, `last_end` = dates from that list (parse as `M/D`, infer year = current year, roll over if month would go backwards)
- `source_list_id` = pick the list with the **highest sprint number whose `start_date` (from list-name or via API) is in the future**. This is the "Not Started" sprint we'll duplicate. Today this is typically the same as the latest. If no such list → emit `source_sprint_not_found` and halt.

### 5. Cadence sanity

Verify:
- `(last_end - last_start).days == 14`
- `last_start.weekday() == 1` (Tuesday)

If either fails → flag `cadence_drift` in the approval gate (surface the dates anyway, let the user judge).

### 6. Pick next 2 names

Walk the pack in order. For each name, lowercase-compare against the set of existing list base-names. Skip if present. Take the first 2 that remain.

If 0 or 1 remain → flag `pack_exhausted` and create what's possible (or halt if 0).

### 7. Compute dates

```
N+1.start = last_end          ; N+1.end = last_end + 14 days
N+2.start = N+1.end           ; N+2.end = N+1.end + 14 days
```
Format dates as `M/D` (no leading zeros).

### 8. Approval gate (`sprint_creation_preview`)

Emit `approval_request`. Show the user:

```
I'll create these 2 sprint lists in Lotus → Sprints by duplicating <source sprint name>:

  1. <Name> <N+1> (<start> - <end>)
  2. <Name> <N+2> (<start> - <end>)

Source sprint (template): <source name> (id: <source_list_id>)
  ⚠ Will copy <task_count> task(s) from source into each new sprint — clean up after if needed.

Skipped (already exist): <comma-separated names with their sprint #>
[Cadence drift warning, if any]

Proceed? [y/N]
```

Emit `approval_decision`. On `n`/no → halt cleanly (no failure event).

### 9. Create lists (sequential per sprint)

For each of the 2 sprints, run **two API calls in order**: (a) duplicate the source sprint, (b) PUT correct dates. The endpoint silently ignores dates passed in `options`, so the PUT is mandatory.

**CRITICAL** (learned via field testing 2026-05-07):
- **Use the source list ID, NOT the saved subcategory template**. `POST /folder/{id}/list_template/{LIST_ID}` works — the API accepts a regular list ID where docs say "template ID", and duplicates that list. The saved subcategory template (`901326452273`) is broken — it produces lists locked in "Done" status that can't be unlocked via API.
- **`return_immediately:false` is required**. With `:true`, the new list comes back trashed (`deleted:true`) and invisible.

```bash
set -a && . .claude/.env && set +a && \
SOURCE_ID=<source_list_id> && \
START=$(date -d "<YYYY-MM-DD> 00:00:00 UTC" +%s)000 && \
END=$(date -d "<YYYY-MM-DD> 23:59:59 UTC" +%s)000 && \
# (a) Duplicate source sprint - sync mode required
RESP=$(curl -sS -w "\nHTTP_STATUS:%{http_code}" -X POST \
  "https://api.clickup.com/api/v2/folder/90124992719/list_template/$SOURCE_ID" \
  -H "Authorization: $CLICKUP_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"<computed list name>","options":{"return_immediately":false,"include_views":true}}') && \
echo "$RESP" && \
NEW_ID=$(echo "$RESP" | grep -oE '"id":"[0-9]+"' | head -1 | grep -oE '[0-9]+') && \
# (b) Override the inherited dates with sprint-correct ones
curl -sS -w "HTTP_STATUS:%{http_code}\n" -X PUT \
  "https://api.clickup.com/api/v2/list/$NEW_ID" \
  -H "Authorization: $CLICKUP_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"start_date\":$START,\"due_date\":$END}" -o /dev/null
```

- Verify create response has `"deleted":false`. If `true` → emit `skill_failure` (`list_created_trashed`), halt before the next sprint.
- Capture HTTP status from each call. On non-2xx → emit `skill_failure` (`clickup_template_api_error`) with the response body, halt before further calls.
- Capture `task_count` from response — emit `inherited_tasks_present` warning if > 0, surface in output summary.
- Build URL: `https://app.clickup.com/36181078/v/l/li/<NEW_ID>`.

**Note on sprint status**: status (Not Started / In Progress / Done) is **inherited from the source sprint at creation time** — it is NOT recomputed when you PUT new dates afterward. This is why the source MUST be a Not-Started sprint. Confirmed empirically: copying from a "Not Started" source produces "Not Started" new lists; copying from a "Done" source produces "Done" new lists that can't be unlocked.

### 10. Output summary

```
✓ Created: <Name1> <N+1> (<start1> - <end1>)
    https://app.clickup.com/36181078/v/l/li/<id1>
    [⚠ <N> task(s) copied from source — review and delete if not wanted]
✓ Created: <Name2> <N+2> (<start2> - <end2>)
    https://app.clickup.com/36181078/v/l/li/<id2>
    [⚠ <N> task(s) copied from source — review and delete if not wanted]

Source: <source name> (id: <source_list_id>)
Skipped (already existed): <names>
```

---

## Notes

- **Why list-as-template (not the saved subcategory template)**: the saved subcategory template `901326452273` produces lists locked in "Done" status — the date-derived sprint status is set once at creation from the template's stale dates and can't be unlocked via API afterward. The workaround is to POST to `list_template/{LIST_ID}` with a regular list ID (the API treats it as a duplicate-source). A live "Not Started" sprint as source → new lists inherit "Not Started". Discovered by trial-and-error 2026-05-07.
- **Source-task drift**: each duplication copies the source's current tasks. If the user adds tasks to the source between runs, those propagate forward. Skill surfaces `task_count` in the output so the user can clean up. Long-term option: maintain a dedicated "blank" sprint as the perpetual source — but adds manual coordination.
- **Pack switching**: when the May '26 Pokemon pack runs out (after Zapdos, sprint ~53), the next pack lives in column I or beyond on the same sheet. Update the `active pack column` constant or extend the skill to detect "active pack" by parsing the period header (most recent date that's ≤ today).
- **Two-sprint horizon**: dates further out get re-cut frequently; two is the empirical sweet spot.
- **Why curl, not MCP**: ClickUp MCP tools (`clickup_create_list_in_folder`) don't accept a template/source-list ID. The REST endpoint `POST /folder/{id}/list_template/{LIST_ID}` is the only working path.
- **Failure recovery**: the skill is designed to be safely re-run. If list 1 succeeds and list 2 fails, the next run will skip list 1 (already exists) and retry list 2 from a clean state.
