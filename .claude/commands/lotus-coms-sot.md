# Lotus COMS SOT Skill

Communications Source of Truth - monitors Slack messages, cross-references against Notion documentation and ClickUp tasks, detects discrepancies, and suggests documentation updates.

> **Note**: Posts summary back to the same channel. Slack is where information first appears, not the source of truth. Goal is to verify correctness and suggest updates to authoritative docs (Notion, ClickUp).

---

## Project Structure

**Authoritative Sources:**
- `planning/capacity.md` - Pod Leadership Summary (stakeholders to tag)
- Notion: `Lotus/Lotus HQ/Empire Overview` + connected pages - Feature specs, scope, timing
- ClickUp: Current sprint + Product Backlog tasks - Work tracking

**Information Flow:**
Slack messages → Cross-reference Notion + ClickUp → Detect gaps/conflicts → Suggest updates

---

## Mode Detection

Check if arguments contain "monitor":
- **If YES:** Run in Monitor Mode (check current thread for approvals)
- **If NO:** Run in Summary Mode (create new summary)

---

## Summary Mode

### 1. Read Pod Leadership

Read `planning/capacity.md` Pod Leadership Summary table to get stakeholders for Empire pod:
- Producer
- Design Lead
- Eng Lead
- QA POC

### 2. Read Slack Channel (Last 24 Hours)

Use `slack_read_channel` with channel ID for messages from last 24 hours.

**Configuration:**
- Monitor channel: `#proj-lotus-pod-empire` (C0B142LS2EQ)
- Post summary to: `#proj-lotus-slack-ai-testing` (C0B142LS2EQ for testing)
- Pod: Empire

**Channel-to-Pod Mapping:**
| Slack Channel | Channel ID | Pod | Pod Custom Field ID |
|--------------|------------|-----|---------------------|
| #proj-lotus-pod-empire | C0B142LS2EQ | Empire | b47eb6d4-bf57-4a60-8b02-a8be7b243063 |
| #proj-lotus-pod-battle | [TBD] | Battle | a1bd403a-aafc-4224-834f-6a75a452e761 |
| #proj-lotus-pod-art | [TBD] | Art | 225a6a3c-98ed-4536-893e-29a19a23981e |
| #proj-lotus-multiplayer | [TBD] | Social Dynamics | 55b93618-c252-400c-b1b1-3cd4b42c31ff |
| #proj-lotus-metagame | [TBD] | Metapod | 2bd3991f-d295-4540-bc60-9331dff0cc5c |
| #proj-lotus-pod-tech | [TBD] | Tech | be037c21-1064-4067-b5ff-750000d504a1 |

**ClickUp Custom Field:**
- Field ID: `ee297ee9-3b42-4f32-b3d8-b577debf883f`
- Field Name: "🪷 Lotus Pod"

**Sprint Configuration:**
- Current Sprint: "Abra 28 (4/28 - 5/12)"
- Sprint List ID: `901326732674`
- Sprint End Date: `2026-05-12`

**Filtering:**
- Ignore bot messages (except approved bots)
- Ignore user join/leave notifications
- Ignore Claude's own messages
- Focus on substantive work-related messages

### 3. Read Notion Documentation

Use `notion-fetch` to read:
- Base page: `Lotus/Lotus HQ/Empire Overview`
- All pages linked from Empire Overview

**What to look for:**
- Feature names and descriptions
- Scope and requirements
- Timeline estimates (in sprints, not dates)
- Design decisions
- Status indicators

### 4. Read ClickUp Tasks

Get current sprint and backlog tasks for cross-referencing:

**Current Sprint:**
- Workspace: Fortis Games (36181078)
- Space: Lotus (38562126)  
- Folder: Sprints (90124992719)
- Current List: "Abra 28 (4/28 - 5/12)" (901326732674)

**Product Backlog:**
- Folder: Product Backlog (90124982573)
- List: "Product Backlog" (901208416337)

Use `clickup_filter_tasks` filtering by custom field "🪷 Lotus Pod" = "Empire".

### 5. Categorize & Cross-Reference Messages

For each message, categorize AND cross-reference against Notion + ClickUp:

#### ⚠️ Sprint Impact
Messages affecting current sprint tasks.

**Cross-reference:**
- Does ClickUp current sprint reflect this information?
- Does Notion spec align with the sprint change?

**Discrepancies:**
- Timeline mismatch: Slack says "2 weeks delay", ClickUp still has old date, Notion says "2 sprints" (does it align?)
- Status conflict: Slack says "done", ClickUp says "in progress"
- Blocker mentioned: Not reflected in ClickUp task status

**Suggested Actions:**
- "Update ClickUp task [name] status to [new status]"
- "Add blocker note to ClickUp task [name]"
- "Verify Notion [page] sprint estimate still accurate given delay"

#### 🗺️ Roadmap Impact
Messages affecting feature delivery timelines or milestones.

**Cross-reference:**
- Does Notion feature spec have the updated timeline?
- Are dependent features affected?

**Discrepancies:**
- Slack: "World map taking 2 weeks longer" 
- Notion: Still shows "2 sprints" estimate
- Check if this cascades to other features

**Suggested Actions:**
- "Update Notion [page] timeline from X sprints to Y sprints"
- "Review dependent features: [list from Notion]"

#### ❓ Questions
Questions needing answers or decisions.

**Cross-reference:**
- Is answer already in Notion spec?
- Is there a ClickUp task to track this decision?

**Discrepancies:**
- Question asked but Notion spec has answer (need to communicate it)
- Question asked, no task to track decision

**Suggested Actions:**
- "Answer available in Notion [page]: [answer]"
- "Create ClickUp task to track decision on [question]"

#### 🔗 Cross-Pod
Messages affecting other pods that need documentation or tracking.

**Detection:**
- Mentions other pod names (Battle, Tech, Metagame, Social Dynamics, Dozer)
- Discusses dependencies on other pod's work

**Cross-reference:**
- Does Notion document this dependency?
- Is there a ClickUp task for cross-pod coordination?

**Suggested Actions:**
- "Add cross-pod dependency to Notion [page]"
- "Create ClickUp task for [pod] coordination"

#### 📣 Cross-Pod Call Outs
Messages that should be communicated to another pod's channel.

**Detection:**
- Empire discussing changes to another pod's work (e.g., "we should change from Toshoia to Marvin" when Battle is using Toshoia)
- Decisions that affect another pod's current work
- Requests for another pod's input or collaboration
- Blockers that require another pod's attention

**What to include in call out proposal:**
- Which pod channel to post to
- Summary of the message/decision
- Why the other pod needs to know
- Original Slack link for context

**Examples:**
- Empire wants to change Battle pod's hero choice → propose posting to #proj-lotus-pod-battle
- Empire blocked on Tech pod feature → propose posting to #proj-lotus-pod-tech
- Empire decision affects Metagame design → propose posting to #proj-lotus-metagame

#### ✅ New Work / Updates Needed
Work mentioned not found in ClickUp or Notion.

**Trigger Phrases:**
- "need a new task", "new work", "do we have a ticket"
- "we need to do this", "should we track this"
- Feature names or work descriptions

**Cross-reference Logic:**
1. Extract work description from Slack message
2. Search Notion pages for matching feature/work names or similar text
3. Search ClickUp sprint + backlog for matching tasks
4. If no match in either → suggest creation
5. If partial match → flag discrepancy

**Discrepancies:**
- Work mentioned, not in ClickUp or Notion → Create both
- Work in Notion but not ClickUp → Create ClickUp task
- Work in ClickUp but description doesn't match Slack → Update description
- Work in Notion but scope differs from Slack → Flag for review

**Suggested Actions:**
- "Create Notion page for [feature] under Empire Overview"
- "Create ClickUp task for [work] in [sprint/backlog]"
- "Update Notion [page] scope to include [new info from Slack]"
- "Conflict: Slack describes [X], Notion says [Y] - which is correct?"

### 6. Post Summary to Channel

**Two-part posting process:**

**Step 1: Post main summary**
Use `slack_send_message` to post the main summary (categories only, NO ticket proposals, NO cross-pod call outs).

**Step 2: Post proposals in thread**
If there are any tickets OR cross-pod call outs:
1. Use `slack_send_message` with `thread_ts` set to the message from Step 1
2. Post ticket proposals first (if any)
3. Post cross-pod call out proposals second (if any)
4. Include approval footer for both

**After posting:**
1. Save the thread timestamp from Step 1 to `.claude/lotus-coms-sot-current-thread.txt` for monitoring
2. Format: `<thread_ts>|<channel_id>|<date>`
3. Example: `1777596442.707729|C0B142LS2EQ|2026-04-30`

---

## Monitor Mode

When invoked with "monitor" argument (e.g., `/lotus-coms-sot monitor`):

### 1. Read Current Thread Info

Read `.claude/lotus-coms-sot-current-thread.txt`:
- Format: `<thread_ts>|<channel_id>|<date>`
- If file doesn't exist or is empty: exit silently (no active thread)

### 2. Check Thread for Approvals

Use `slack_read_thread` with stored channel_id and thread_ts.

Look for replies from:
- Brann Livesay (U02CMFMRE13) - Producer
- Holly Mellor (U02CQK3JLHZ) - Producer
- Diana Vasilescu (U035A4F2UMS) - Design Lead (for cross-pod call outs only)

**Approval phrases for tickets:**
- "make the tickets" → all tickets
- "create them all" → all tickets
- "yes to ticket 1, 2, and 4" / "tickets 1, 2, and 4" → tickets 1, 2, 4
- "all tickets except 3" → all except ticket 3
- "yes to all tickets" → all tickets

**Approval phrases for cross-pod call outs:**
- "send the call outs" → all call outs
- "post them all" → all call outs
- "yes to call out A, B, and D" / "call outs A, B, D" → call outs A, B, D
- "all call outs except C" → all except call out C
- "yes to all call outs" → all call outs

**Combined approvals:**
- "yes to all" → all tickets AND all call outs
- "make the tickets and send the call outs" → all tickets AND all call outs

### 3. Parse Original Summary

Read the parent message to extract:

**Ticket proposals:**
- Ticket numbers (1, 2, 3, etc.)
- Task names
- Destinations (Current Sprint / Product Backlog)
- Assignees
- Details
- References

**Cross-pod call out proposals:**
- Call out letters (A, B, C, etc.)
- Target pod channel
- Message summary
- Original Slack link

### 4. Create Approved Tickets

For each approved ticket number:
1. Determine destination list_id:
   - Current Sprint: `901326732674`
   - Product Backlog: `901208416337`
2. Resolve assignee via `clickup_resolve_assignees`
3. Use `clickup_create_task` with:
   - `name`: Task name from proposal
   - `list_id`: Destination from step 1
   - `assignees`: Resolved assignee user ID(s)
   - `markdown_description`: Details + References section
   - `tags`: Pod name (e.g., ["Empire"])
   - `custom_fields`: Array with Pod custom field:
     ```
     [{
       "id": "ee297ee9-3b42-4f32-b3d8-b577debf883f",
       "value": "<pod_option_id>"
     }]
     ```
     Use channel-to-pod mapping to get correct pod option ID
   - `due_date`: **ONLY if list_id is Current Sprint (901326732674)**
     - Set to sprint end date: "2026-05-12"
     - Format: YYYY-MM-DD

### 5. Post Approved Cross-Pod Call Outs

For each approved call out letter:
1. Determine target channel from call out proposal (e.g., #proj-lotus-pod-battle)
2. Use `slack_send_message` to post message to target channel with:
   - Summary of the Empire discussion/decision
   - Link back to the original Empire message
   - Tag relevant stakeholders from the target pod (if known)

**Message format:**
```
📣 **Heads up from Empire pod**

[Summary of the decision/discussion]

Context: [Link to original Empire message]

cc: [Target pod stakeholders if known]
```

### 6. Confirm in Thread

Reply with:
```
✅ **Ticket(s) created!**

[CHI-XXX: Task Name](link)
- Assigned to [Name]
- Added to [Destination]
- Tagged with Empire pod

📣 **Call out(s) posted!**

Call out A: Posted to #proj-lotus-pod-battle
Call out B: Posted to #proj-lotus-metagame
```

**Note:** Don't delete thread file after creating tickets/posting call outs - continue monitoring for additional approvals.

**Format Rules:**
- **Do NOT summarize Notion pages** unless there's a conflict (Slack says X, Notion says Y)
- **ClickUp tasks**: Show links only, NO status details
- **Sprint status**: Only report if there's a risk (ignore daily bot updates unless critical)
- Number all sections and items for easy reference
- Empty categories omitted

**Main Message Format:**

```
@BrannLivesay @DianaVasilescu @DanDupuis @LauraSantana

This is a summary of the channel's comms for **[DATE]** - [COUNT] substantive messages analyzed from **#proj-lotus-pod-empire**

---

⚠️ **Sprint Impact**
- [Link to message](slack URL) - [Summary of impact]
  📋 ClickUp: [Link to task]
  📄 Notion: ONLY mention if conflict exists
  ✏️ Suggested action: [Update X to Y] / [Conflict: need clarification]

---

🗺️ **Roadmap Impact**
- [Link to message](slack URL) - [Timeline/scope change, blocker, delay]
  📄 Notion: ONLY mention if conflict exists
  ✏️ Suggested action: [What needs updating]

---

❓ **Questions**
- [Link to message](slack URL) - [Question]
  - [Answer if provided in thread]
  📄 Notion: ONLY if answer exists there but wasn't shared
  ✏️ Suggested action: [What to do]

---

🔗 **Cross-Pod**
- [Link to message](slack URL) - [What affects which pod]
  📄 Notion: ONLY if dependency not documented
  ✏️ Suggested action: [Add dependency] / [Create coordination task]

---

📣 **Cross-Pod Call Outs**
- [Link to message](slack URL) - [Brief description of what needs to be communicated to which pod]
  ✏️ See thread for call out proposals

---

✅ **New Work / Updates Needed**
- [Link to message](slack URL) - [Work description]
  📋 ClickUp: [Link if exists] or [Not found]
  📄 Notion: [Link if exists] or [Not found]
  ✏️ Suggested action: ONLY if missing or conflict

---

_Generated by Lotus COMS SOT_
```

**Thread Reply Format (if there are missing tickets or cross-pod call outs):**

```
:clickup: **Missing/Needed Tickets**

**Ticket #1: [Task Name]**
- **Destination:** [Current Sprint (Abra 28) / Product Backlog]
- **Why:** [Justification for placement]
- **Assignee:** [Person doing the work based on Slack]
- **Details:** [What needs to be done]
- **References:** [Slack thread link, Notion links, Figma links, etc.]

**Ticket #2: [Task Name]**
- **Destination:** [Current Sprint (Abra 28) / Product Backlog]
- **Why:** [Justification for placement]
- **Assignee:** [Person doing the work based on Slack]
- **Details:** [What needs to be done]
- **References:** [Links]

[Continue for all missing tickets...]

---

📣 **Cross-Pod Call Outs**

**Call Out A: Post to #proj-lotus-pod-battle**
- **Message:** Empire discussing changing first 3 battles from Toshoia to Marvin
- **Why:** Battle pod is currently using Toshoia in their content, needs to know about potential change
- **Reference:** [Link to original Slack message]

**Call Out B: Post to #proj-lotus-metagame**
- **Message:** [Summary of message]
- **Why:** [Why other pod needs to know]
- **Reference:** [Link to original Slack message]

[Continue for all call outs...]

---

<@U02CMFMRE13|Brann Livesay> <@U02CQK3JLHZ|Holly Mellor> - Reply with:
- "make the tickets" or specify ticket numbers (e.g., "yes to tickets 1, 2, and 4")

<@U02CMFMRE13|Brann Livesay> <@U02CQK3JLHZ|Holly Mellor> <@U035A4F2UMS|Diana Vasilescu> - Reply with:
- "send the call outs" or specify call out letters (e.g., "yes to call outs A and B")

For both tickets and call outs:
- "yes to all" approves everything in the thread
```

**What to Include:**
- **Main message:** Pod stakeholder tags, date, message count, category summaries (Sprint Impact, Roadmap Impact, Questions, Cross-Pod, New Work/Updates Needed)
- **Thread reply:** All ticket proposals (numbered) and cross-pod call out proposals (lettered) with approval footer
- Notion/ClickUp state ONLY when there's a discrepancy or missing data
- Links to original Slack messages

**Symbols:**
- 📋 = ClickUp link
- 📄 = Notion link (only if conflict)
- ✏️ = Suggested action

### 7. Ticket Placement Logic

When proposing tickets in the `:clickup: Missing/Needed Tickets` section, use this logic:

**Current Sprint (Abra 28):**
- Work actively happening NOW (person said "I'm working on this")
- Blocking current sprint delivery
- Scheduled/committed for this sprint
- Meeting scheduled this week or next about it
- Time-sensitive (visdev blocked, deliverable due soon)

**Product Backlog:**
- Future work, needs planning first
- General cleanup/tech debt
- Not immediately urgent
- Discovery or research phase
- No specific sprint commitment mentioned

**Examples:**
- "Kevin working on props this week" → Current Sprint
- "Need to decide LOD, meeting Tuesday" → Current Sprint (blocking)
- "Actor V2 cleanup" → Product Backlog (general cleanup)
- "Lina will work on mockup next week" → Current Sprint (meeting scheduled)

### 8. Monitor for Approval & Create Tickets

After posting summary, monitor the thread for responses from:
- Brann Livesay (U02CMFMRE13)
- Holly Mellor (U08SKKM1P5F)

**Approval phrases:**
- "make the tickets"
- "create them all"
- "yes to 1, 2, and 4" (specific numbers)
- "all except 3"

**When approved:**
1. Use `clickup_create_task` for each approved ticket
2. Use the destination specified in the proposal (Current Sprint list ID or Product Backlog list ID)
3. Set assignee based on proposal
4. Include all references (Slack, Notion, Figma links) in task description
5. Tag with "Empire" pod
6. Reply to thread confirming tickets created with links

---

## Rules

### Never Auto-Modify
- Do NOT update Notion or ClickUp automatically
- Do NOT create tasks/pages - only suggest
- Do NOT post to channels other than configured target
- Always ask for confirmation before making changes

### Source of Truth Priority
1. **Notion** = feature specs, scope, design decisions (authoritative)
2. **ClickUp** = work tracking, status, assignments (authoritative)
3. **Slack** = new information, changes, questions (verification needed)

When conflict exists: flag for human review with "Conflict: Slack says X, Notion/ClickUp says Y - which is correct?"

### Missing Data Handling
- If Notion unavailable: note "Notion MCP unavailable - spec verification skipped"
- If ClickUp unavailable: note "ClickUp unavailable - task cross-reference skipped"
- If capacity.md missing: skip stakeholder tags, proceed with summary
- If Empire Overview not found: note specific Notion page missing

### Matching Logic
**Notion text matching:**
- Look for exact feature names
- Look for similar work descriptions (not just exact matches)
- Check nested pages under Empire Overview
- Flag if feature mentioned but description differs

**ClickUp task matching:**
- Match by task name
- Match by description content
- Match by custom fields (Pod, Milestone, etc.)
- Flag if task exists but differs from Slack info

---

## Notes

**When to Run:**
- Main run: Daily at 5pm PST (creates new thread)
- Monitoring: Hourly checks 5pm-8pm same day, 5am-4pm next day
- Manual invocation: `/lotus-coms-sot` (testing)

**Monitoring Schedule:**
- After 5pm run, check thread at: 6pm, 7pm, 8pm (same day)
- Next day: 5am, 6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm
- At 5pm next day: new thread created, old thread abandoned

**Testing:**
- Use #proj-lotus-slack-ai-testing for test runs
- Verify Notion cross-reference accuracy
- Check ClickUp filtering works (Empire-only tasks)

**Future Enhancements:**
- Multi-pod support (Battle, Tech, Metagame)
- Stakeholder approval workflow before updates
- Historical tracking of suggested vs applied updates
- Auto-create tasks/pages with approval

**Related:**
- Official `/channel-digest` - basic channel summary
- This skill adds Notion+ClickUp cross-referencing and update suggestions
