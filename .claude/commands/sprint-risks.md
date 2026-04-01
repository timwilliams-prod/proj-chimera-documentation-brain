# Sprint Risks Skill

You are running an **interactive risk triage** for the current sprint. You surface items at risk of not completing, ask the user for decisions on each, then generate a copy/paste summary of outcomes.

---

## Your Task

### 1. Identify the Current Sprint

Use `clickup_get_workspace_hierarchy` or the cached sprint list IDs to find the current sprint in the **Lotus** space > **Sprints** folder. Pick the sprint whose date range contains today's date.

If ambiguous (e.g., sprint boundary day), ask the user which sprint to evaluate.

Extract: sprint name, number, date range, list ID, and how many work days remain.

### 2. Determine the Active Milestone

Read `planning/product_targets.md` to identify which milestone this sprint falls within. Note whether this is the final sprint of a milestone (milestone wrap-up mode).

If this is a milestone-closing sprint, also read:
- The relevant `planning/pods/*_Plan.md` files for milestone feature priorities
- `planning/ValidationPlan.md` for active SHQs in scope

### 3. Pull All Sprint Tasks

Use `clickup_filter_tasks` with the sprint list ID. Run two calls:
1. **Open tasks** (default — excludes complete/closed)
2. **Complete/closed tasks** (`include_closed: true`, `statuses: ["complete", "closed", "done"]`)

For each open task, capture: ID, custom_id, name, status, priority, assignees, tags, due_date.

### 4. Identify At-Risk Items

Apply these filters to find items that are **at risk of not completing** this sprint. Only surface items that meet one or more of these criteria:

#### Status Risk
- **High/Urgent priority tasks still in "to do"** in the back half of the sprint (less than 50% time remaining)
- **Urgent tasks not yet in progress** regardless of sprint timing

#### Load Risk
- **Any person with 5+ open tasks** — flag as overloaded, list their tasks by priority
- **Any person with 3+ tasks still in "to do"** in the back half of the sprint

#### Blocker Risk
- Tasks mentioned in recent Slack discussions as blocked (if Slack MCP is available, check the relevant pod channels for the last 2-3 days for mentions of "blocked", "blocker", "waiting on", "can't proceed")
- Tasks with dependencies that aren't complete

#### Milestone Risk (only if this is a milestone-closing sprint)
- **Must-have features** from `product_targets.md` that have open tasks without clear path to completion
- **SHQs** from `ValidationPlan.md` that this sprint should be closing out but aren't addressed

**Important**: Do NOT flag items that are clearly on track (in progress with reasonable scope, in QA verify, low priority items). The goal is signal, not noise. Only surface genuine risks.

### 5. Present Risks Interactively

Present the at-risk items to the user **grouped by risk type**, one group at a time. For each item, show:

```
**[Task Name]** (CHI-XXXXX) — [status], [priority]
Assignee: [name]
Risk: [Why this is at risk — be specific]
```

After presenting each group, ask:
> "For each of these, what's the call? Options: **push** (stays in sprint, we'll make it work), **defer** (move to next sprint), **cut** (remove from sprint, back to backlog), or **escalate** (needs discussion with someone specific)."

Let the user respond naturally — they might say "push 1 and 3, defer 2" or "all of those can defer except the tutorial one." Parse their intent.

### 6. Milestone Check (if applicable)

If this is a milestone-closing sprint, after task triage, present a separate milestone health check:

> **Milestone: [Name] — closing in [N] days**
>
> Must-Have Features:
> - [Feature]: [status assessment]
> - [Feature]: [status assessment]
>
> Any of these concerns need escalation?

### 7. Generate Copy/Paste Summary

After all decisions are made, generate a clean summary the user can paste into Slack, an email, or a meeting doc. Format:

```markdown
**Sprint Risk Triage — [Sprint Name] [Number] ([Date])**
[N] work days remaining | [X] tasks open | [Y] complete

**Staying in Sprint (Push):**
• [Task] (CHI-XXXXX, [assignee]) — [brief reason it's at risk + why we're keeping it]

**Deferred to Next Sprint:**
• [Task] (CHI-XXXXX, [assignee]) — [why it's deferred]

**Cut / Back to Backlog:**
• [Task] (CHI-XXXXX) — [reason]

**Needs Escalation:**
• [Task] (CHI-XXXXX) — [who needs to be involved + what the question is]

**Milestone Notes:** (if applicable)
• [Any milestone-level observations]
```

Present the summary and say: "Here's your copy/paste summary. Want me to adjust anything?"

---

## Rules

- **Don't guess outcomes.** Surface the risk, give the user context, let them decide. You are a triage assistant, not a decision maker.
- **Don't pad the list.** If only 2 things are at risk, show 2 things. An empty risk list is a good outcome — say "Nothing looks at risk. Sprint is on track."
- **Be specific about why something is at risk.** "Still in to do" isn't enough — say "Still in to do with 3 days left, high priority, assigned to someone with 8 other open tasks."
- **Keep the interactive flow tight.** Don't dump everything at once. Group by risk type, get decisions, move on.
- **The copy/paste summary should be clean and professional.** No emojis, no markdown headers beyond bold. Suitable for pasting into a Slack message or email to stakeholders.
