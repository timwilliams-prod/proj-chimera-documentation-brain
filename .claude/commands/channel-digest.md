# Channel Digest Skill

You are generating a cross-referenced digest of Slack channel activity, evaluated against ClickUp tasks and project documentation.

---

## Inputs

The user may provide:
- **Channels**: Slack channel names to digest (e.g., `#proj-lotus-pod-empire`, `#proj-lotus-metagame`). If not provided, ask which channels to include.
- **Timeframe**: How far back to look (e.g., "last 3 days", "this sprint", "since Monday"). Default: last 5 work days.
- **Focus areas**: Optional — specific topics or features to prioritize (e.g., "tutorial system", "gear progression").

---

## Your Task

### 1. Find the Channels

Use `slack_search_channels` to resolve each channel name to an ID. All Lotus pod channels follow the pattern `#proj-lotus-pod-[name]` or `#proj-lotus-[name]`.

Known channel IDs (use as cache, verify if stale):
- `#proj-lotus-pod-empire` → `C08KKVAAQ2Y`
- `#proj-lotus-metagame` → `C0A2DBGPM8Q`
- `#proj-lotus-pod-battle` → `C04U4M05TQB`
- `#proj-lotus-pod-tech` → `C0548U6N73J`
- `#proj-lotus-pod-art` → `C04U56T2P5G`

### 2. Read Channel Messages

Use `slack_read_channel` for each channel. Read up to 100 messages per channel (adjust based on timeframe). If conversations are very active, paginate to cover the full timeframe.

For each message, capture:
- Author and timestamp
- Key content (decisions, questions, blockers, announcements)
- Thread reply counts (high reply counts = hot topics)
- ClickUp task links mentioned
- Files/screenshots shared
- Reactions that signal importance (alert, eyes, raised_hands, etc.)

**Skip**: Routine async bot standup prompts (from "Empire Async" / "Metagame Async" bots) — but DO read the thread replies on standups if they contain substantive updates.

### 3. Read Project Documentation

Read these files for cross-referencing:
- `planning/product_targets.md` — current milestone goals
- `planning/ValidationRoadmap.md` — active SHQs and validation goals
- Relevant `planning/pods/*_Plan.md` files — for channels being digested
- Relevant `planning/features/*.md` — if specific features are being discussed
- `planning/TechnicalDebt.md` — if engineering issues are mentioned

### 4. Cross-Reference with ClickUp

For any ClickUp task IDs mentioned in Slack (CHI-XXXXX format or clickup.com links):
- Use `clickup_get_task` or `clickup_search` to check current status
- Note if the Slack discussion suggests the task status is stale (e.g., someone says "this is done" but ClickUp shows "to do")

For discussions about work that doesn't appear to have a ticket:
- Flag it as a potential missing ticket

### 5. Generate the Digest

Organize findings into four sections:

---

#### Section 1: Executive Summary (TLDR)

A concise 3-5 bullet narrative of what's happening across the channels. Written for someone who hasn't read the channels in a week. Focus on:
- What's actively being worked on
- What's blocked or at risk
- What's been shipped/merged
- Any heated or high-engagement discussions
- Mood/energy of the team (are people stressed, cruising, firefighting?)

#### Section 2: ClickUp Action Items

Tasks that may need updates or creation based on Slack activity:

**Tasks to Update:**
| Task | Current Status | Suggested Update | Evidence |
|------|---------------|-----------------|----------|
| CHI-XXXXX: [name] | [ClickUp status] | [What Slack suggests] | [Link to Slack message] |

**Tasks to Create:**
| Suggested Task | Why | Source |
|---------------|-----|--------|
| [Description] | [Work discussed but no ticket found] | [Link to Slack message] |

**Tasks to Verify:**
| Task | Concern | Source |
|------|---------|--------|
| [Task where status seems stale or unclear] | [What's unclear] | [Link] |

#### Section 3: Documentation Misalignments

Compare what people are saying/assuming in Slack against what the documentation says. Look for:

- **Incorrect assumptions**: Someone states something as fact that contradicts a feature doc, pod plan, or ValidationRoadmap
- **Stale information**: Someone references old designs or deprecated systems
- **Naming conflicts**: Different terms for the same thing (e.g., "bot factory" vs "barracks")
- **Scope creep signals**: Discussions that expand beyond what's in the feature spec
- **Process gaps**: People confused about workflows that should be documented

For each finding:
| What Was Said | What Docs Say | Source File | Slack Message |
|--------------|--------------|------------|---------------|
| [Quote/paraphrase] | [What the documentation states] | [File path] | [Link] |

#### Section 4: Decisions to Capture

Decisions made (or in progress) in Slack that should be documented or communicated more broadly:

| Decision | Made By | Status | Where to Capture | Slack Source |
|----------|---------|--------|-----------------|-------------|
| [What was decided] | [Who] | [Final / In Progress / Needs Approval] | [Which doc/ticket should reflect this] | [Link] |

Include:
- Design decisions (e.g., rarity color scheme, tutorial flow changes)
- Technical decisions (e.g., architecture choices, system migrations)
- Process decisions (e.g., workflow changes, meeting restructures)
- Tuning decisions (e.g., economy values, progression changes)

---

### 6. Save the Report

Save to `generated/reports/channel_digest_[YYYY-MM-DD].md`.

---

## Output Format

```markdown
# Channel Digest

**Channels**: [list of channels digested]
**Timeframe**: [date range covered]
**Generated**: [today's date]
**Active Milestone**: [current milestone from product_targets.md]

---

## Executive Summary

- [Bullet 1: What's the big picture?]
- [Bullet 2: What shipped or progressed?]
- [Bullet 3: What's blocked or at risk?]
- [Bullet 4: Key discussions or debates]
- [Bullet 5: Team energy/focus assessment]

---

## ClickUp Action Items

### Tasks to Update
[Table or "None identified"]

### Tasks to Create
[Table or "None identified"]

### Tasks to Verify
[Table or "None identified"]

---

## Documentation Misalignments

[Table of findings, or "No misalignments identified"]

### Recommendations
- [Specific doc updates needed]

---

## Decisions to Capture

[Table of decisions]

### Uncaptured Decisions (Action Required)
[Decisions that are NOT yet in any doc or ticket — these need someone to capture them]

### In-Progress Decisions (Watch)
[Decisions still being discussed — may need follow-up]

---

## Hot Threads

Threads with high engagement (10+ replies) that may warrant attention:

| Thread | Channel | Replies | Topic | Link |
|--------|---------|---------|-------|------|
| [Topic] | [Channel] | [N] | [Brief summary] | [Link] |
```

---

## Notes

- The goal is to surface **actionable intelligence**, not summarize every message. Skip social chat, routine check-ins, and resolved items.
- When flagging documentation misalignments, be specific about which file is contradicted. Don't flag vague "this might be wrong" — only flag concrete contradictions.
- For ClickUp actions, prefer linking to the specific Slack message so the reader can verify context.
- Thread reply counts are a proxy for importance — threads with 15+ replies often contain decisions or debates worth capturing.
- Async bot messages themselves are noise, but their thread replies often contain real status updates.
- If a channel is very quiet, note that — silence can be a signal too.
- Be mindful of tone when flagging misalignments — frame as "alignment opportunities" not "someone is wrong."
