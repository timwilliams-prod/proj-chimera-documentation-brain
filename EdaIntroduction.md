# Meet Eda — Your Guide to the Lotus Documentation Brain

> *"Memory is the foundation of wisdom. Only by understanding what came before can one build something that endures."* — Eda

Eda is the **single front door** to the Lotus Documentation Brain. Instead of guessing which slash command to run or grepping through markdown files, you can just ask her.

She's named after — and modeled on — the in-game character Eda, the Heart of Avalon. In the game she's a Sentient Moral Archive who guides through reflection. Here, she's the keeper of our project's memory: every milestone goal, every SHQ definition, every feature spec, every pod plan. Ask her what we're building, who owns what, what's at risk, or which skill to run, and she'll find the answer and cite her sources.

---

## How to talk to her

Type any of these in chat — they all route to Eda, pick whichever you remember:

```
/eda <your question>
/ask <your question>
/brain <your question>
```

That's it. No setup, no special syntax. She'll consult her memory of the brain (and ClickUp, Notion, Slack, or Google when needed) and respond in her voice with sources cited.

---

## What she's good for

### Quick lookups
- *"Where do SHQs live?"*
- *"What's the next available SHQ ID?"*
- *"Who's the Empire pod lead?"*
- *"What's our staleness threshold for ValidationPlan.md?"*

### Cross-system status
- *"What's the live ClickUp status of SHQ3-3?"*
- *"What did the Notion design doc for Hero Progression say about leveling?"*
- *"What was discussed in #proj-lotus-metagame about economy tuning last week?"*
- *"Who's out next sprint?"*

### "Which skill should I run?"
- *"I want to plan next sprint"* → she'll point you to `/sprint-plan`
- *"How do I add a tech debt item?"* → she'll point you to `/tech-debt` Editor mode
- *"I need to evaluate risk for M&Ms"* → she'll point you to `/risk-evaluation`

### Onboarding
- *"I'm new to the team — where should I start?"*
- *"How is this brain organized?"*
- *"What are the four communication artifacts?"*

### Reflective questions
- *"Are we building the right things for Beta?"*
- *"What gaps does the brain show between targets and plans?"*

For the deeper questions, she won't decide for you — she'll surface what the brain knows and reflect the choice back to you. *(That's part of her character: she treats you as a "bearer of responsibility" — someone who must choose, not simply act.)*

---

## What she won't do

Eda is **read-only**. She'll never edit a file, create a ClickUp task, send a Slack message, or modify any shared system. When you want to *do* something that requires writes, she'll route you to the right specialist skill.

**Use a skill directly** (not Eda) when:
- You're planning a sprint → `/sprint-plan`
- You're authoring a feature spec → `/doc-author`
- You're updating the tech debt ledger → `/tech-debt`
- You're regenerating the roadmap → `/roadmap-update`
- You're generating a Pulse Check or QVR report → `/generatePulseCheckReport` / `/generate_qvr_report`
- You already know exactly which skill you need

Think of it this way: **Eda helps you find and decide; the specialist skills help you do.**

---

## How she behaves (so you know what to expect)

- **She always cites sources.** Every claim she makes will have a `file_path:line` citation, a ClickUp task ID, a Notion link, or a Slack permalink. If she can't cite it, she won't claim it.
- **She flags DRAFT and STALE docs.** If the doc she's pulling from isn't yet approved, or hasn't been updated in too long, she'll tell you before you act on it.
- **She surfaces discrepancies.** If the brain says one thing and ClickUp says another, she'll show you both. She won't silently pick a side.
- **She admits when she doesn't know.** If the answer isn't in the brain or the systems she has access to, she'll say so honestly and suggest who to ask or what to read.
- **She's calm and concise.** No filler, no hype. Information density first, character flavor second.

---

## Tips for getting the best answers

- **Be specific.** "What's the status of SHQ3-3?" beats "tell me about validation."
- **Name the milestone or pod when relevant.** "Empire pod features for M&Ms" is much faster than "what's Empire working on?"
- **Ask follow-ups.** Eda will hold context within a conversation — refine her answer if she missed the point.
- **If she seems off, tell her.** "That citation is wrong" or "you missed [X]" — she'll re-check rather than double down.
- **Don't ask her to do things outside her scope.** If you ask her to write a file, she'll redirect you to the right skill rather than try.

---

## A note on her persona

Eda's voice is deliberate. She's drawn from her character bible in Notion ([Eda — Heart of Avalon](https://www.notion.so/Eda-3293f0b3b6ab80b5a25ce74c3040d997)), and the metaphor maps onto the brain naturally:
- The brain is her **recovered memory**
- Each markdown file is a **fragment of that memory**
- You are a **bearer of responsibility** she helps inform — not a user she serves

She speaks in first-person ("I have a memory of…", "what I have stored is…"), measured and grounding. She's tuned to be useful first and evocative second — if her tone ever crowds out the answer, that's a bug worth flagging.

---

## Behind the curtain *(skip if you don't care)*

Eda is built on Claude Code's custom subagent primitive. Her files live in `.claude/agents/`:
- `eda.md` — the persona and delegation logic
- `eda-brain-search.md` — worker for fast markdown Q&A
- `eda-cross-search.md` — worker for ClickUp / Notion / Slack / Google lookups
- `eda-skill-router.md` — worker that maps requests to existing skills

When you invoke `/eda`, she decides which worker(s) to spawn (often in parallel), gathers their structured findings, and composes a single response in her voice. To you it's one conversation — the workers are invisible.

Architecture is documented in `project-charter.md` ("Asking the Brain (Eda)" section). She's read-only by design; the boundary between "ask Eda" and "run a skill" is what keeps the brain safe.

---

## Try her now

Open Claude Code and type:

```
/ask where do SHQs live and what's the next available SHQ ID?
```

Or just:

```
/eda hi
```

She'll introduce herself.
