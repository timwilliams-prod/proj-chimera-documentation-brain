# Killing FRICTION
## A Producer Kickoff

**Audience:** Holly, Thorben, Brann
**Presenter:** Tim
**Date:** 2026-05-05
**Duration target:** 30–45 min, half presentation / half discussion

---

## Why We're Here

I've been building toward something. It's gotten concrete enough that it needs the four of us, not one of me.

**This meeting has three jobs:**

1. **Get you bought in on the vision** — or stop me if it's wrong
2. **Show you the system** — the boss, the Quest Log, the roadmap
3. **Agree on the next two weeks** — Phase 0 + the first skills each of us owns

If you push back, the whole thing gets sharper. Push back hard.

---

## The Producer's Monday Morning

**Today:** review weekend Slack → chase status from leads → update sprint plans → draft tickets → prep standup → notice a Battle dependency at risk → ping the lead → wait → status meeting → more chasing → **by 11am no strategic work has happened.**

**Steady state (target):** read agent-prepared briefing in 5 min → spend hour 1 on the *single highest-leverage thing* → walk into standups with context loaded and decisions ready → **strategic work happening by 9:30.**

Same producer. Same headcount. Different day. *That's* what we're building.

---

## Meet FRICTION

Every campaign needs a villain. Ours has a name.

**FRICTION — The Devourer of Producer Hours.**

Not the work that requires a producer. The work that shouldn't — the manual handoffs, the stale plans, the chase-down DMs, the spec → ticket relay race that loses context at every step.

It's slain not by force, but by **skills, agents, and clarity.**

This isn't deck-flavor. It's how we'll actually track the campaign — see two slides from now.

---

## The Roadmap (TL;DR)

Five phases. No calendar dates — pace depends on how hard we push and how fast trust is earned at each gate. **Each phase unlocks the next; gains compound because the bottleneck moves.**

| Phase | What | Status |
|---|---|---|
| **0** | Skill Maturity Gate — the bar between useful skill and agent-ready | **NOW** |
| **1** | Plan Maintenance Agent Cluster — read-only first, write last | NEXT |
| **2** | Team-Facing Clarity Layer — IC daily briefs, standup pre-briefs | After 1 is trusted |
| **3** | IC Augmentation by Discipline — engineer/designer/artist/QA leverage | Parallel |
| **4** | Workflow Redesign — spec → shipped collapses from days to hours | Starts when 1 hits Beachhead |

Today's meeting is about Phase 0 + lining up Phase 1.

---

## The Quest Log *(live demo)*

> Open `generated/friction_boss/index.html`. Walk through it.

- **Boss HP** — drops as quests complete. Visible, shared progress.
- **Captain XP / Level** — campaign experience accumulates
- **Party** — humans + agents + systems, status: active / vacant / locked
- **Chapters** — six phases of the campaign
- **Quests** — the actual work, with prereqs and dependencies

**This is our shared canonical view.** Replaces "what's the status of the agentic effort?" with "open the Quest Log."

Updated manually today. Eventually a `/quest-complete` skill will bump HP/XP and unlock downstream quests.

---

## Phase 0: The Skill Maturity Gate

We've built ~25 skills (slash commands) that capture the logic of what we'd want agents to do. Producers invoke them manually today. **This is intentional — skills validate logic before automation.** Agents without good logic aren't useful; they just fail faster.

The Maturity Gate is the bar between "useful skill" and "agent-ready skill." Without it, *we* become the bottleneck — intuiting readiness doesn't scale.

A skill is **agent-ready** when it meets all seven:

| # | Criterion |
|---|---|
| 1 | **Logic stable** — last 5 runs accepted with no significant edits |
| 2 | **Idempotent or additive** — running twice doesn't break anything |
| 3 | **Failure modes documented** — known list of how it goes wrong |
| 4 | **Approval gates clear** — human-readable diff before any write |
| 5 | **Observable** — audit log every run |
| 6 | **Reversible** — any change can be undone |
| 7 | **Scope-bounded** — can't escape its lane |

Pass all seven → candidate for Phase 1 wrapping. Fail any → useful manual skill, stays manual.

---

## Proposed: The Four-Track Split

Four producers, four tracks. **Not territorial** — each owns primary leadership, not exclusive rights.

| Track | Lead | Domain |
|---|---|---|
| 🎯 **A — Strategy & Roadmap** | Holly + Tim | Maturity Framework, roadmap deltas, narrative, ally recruitment |
| ⚙ **B — Tech & Backend Agents** | Thorben | ClickUp-touching skills, observability, eng augmentation audit |
| 🎨 **C — Content & Art Pipelines** | Brann | Content readiness, cross-pod art coordination, design/art audits |
| 🔁 **D — Cross-Cutting & Pilot** | All four, rotating | Metagame pilot, Quest Log maintenance, workflow redesign |

The **seams** between tracks are the design — full breakdown in `team-track-split.md`.

---

## First-Wave Skills (Per Track)

What each track would build/harden first. All feed Phase 1 agents later.

**Track A (Holly + Tim):**
- Skill Maturity Framework v0.1 *(q1-1)*
- `WHERE_THINGS_LIVE.md` edict *(q1-4)*
- Skill Review Ritual *(q1-5)*

**Track B (Thorben):**
- Always-On Riddle technical scoping *(q1-3)*
- `/dependency-map-sync` or `/risk-surface` *(q2-2 / q2-3)*
- Observability dashboard scaffolding *(q3-4)*

**Track C (Brann):**
- Skill Armory audit *(q1-2)*
- `/clarity-audit` *(q2-1, paired with Thorben)*
- `/ic-daily-brief` design *(q2-5)*

Full quest list lives in the Quest Log. Today we just need agreement on the first wave.

---

## First Two Weeks

If we want momentum + visible boss damage by end of Week 2:

**Week 1 — Foundation**
- Holly + Tim draft Maturity Framework v0.1
- Tim drafts `WHERE_THINGS_LIVE.md`
- Thorben begins Always-On Riddle technical scoping
- Brann begins Skill Armory audit
- Friday: first 30-min Track Sync

**Week 2 — First Skill Build**
- Lock Maturity Framework v0.2 based on track feedback
- Thorben begins first new skill
- Brann begins `/clarity-audit` (paired with Thorben)
- First completed quest post in Slack

**Walk-out goal:** Maturity Framework live. Always-On has a draft proposal. At least one new skill in flight. Boss HP visibly down. The campaign feels real.

---

## How We'll Talk *(no new meetings, almost)*

We're trying to *cut* meetings, not invent more.

| Channel | Purpose | Cadence |
|---|---|---|
| **#agentic-engineering Slack** | Working channel for the four of us | Continuous |
| **Quest Log** | Shared progress surface | Updated as quests close |
| **Track Logs** *(new)* | Per-track append-only weekly bullets | 5 min/week from each lead |
| **Quest Completion Posts** | Slack post when a quest closes | Per quest |
| **Weekly Track Sync** | One actual sync, all four | 30 min/week, first 8 weeks |

If a track is on fire, that's the lead's job to flag mid-week, not save it for Monday.

---

## What I Need From You Today

Five questions to leave with answers:

1. **Vision check.** Yes/no on the campaign as framed. If no — what's wrong?
2. **Track boundaries.** Are these the right divisions for how each of you wants to spend your time?
3. **Maturity Gate bar.** Too strict, too loose, missing a criterion?
4. **Sync cadence.** Weekly 30-min, or 2x/week × 15 min for the first month while we calibrate?
5. **Quest Log ownership.** Single accountable maintainer, or rotating?

If you have hard pushback on the *vision*, now's the time. If the vision lands but the *how* needs reshaping, today's the day to reshape it.

---

## What This Roadmap Is *Not*

To prevent expectation drift before it starts:

- **Not a headcount reduction plan.** Same producers, more strategic output. Same engineers, more shipped features.
- **Not "AI does the work."** Humans set direction, judge output, own decisions. Agents synchronize and surface.
- **Not a replacement for ClickUp or Notion.** The brain connects them and adds cognition. Existing tools stay.
- **Not a fixed plan.** v0.5 today. The vision is stable; the path is iterative.

---

## Closing — Three Things to Walk Out With

1. **Yes / no on the vision** — is this the campaign we're running?
2. **Yes / maybe / no on the four-track split** — does the proposed division work?
3. **Commitment to Week 1 deliverables** — Maturity Framework, Always-On scoping, Skill Armory audit, first quest post

**Boss HP starts at 870. Let's start swinging.**

---

## Appendix — Where the Docs Live

| File | Purpose |
|---|---|
| `generated/friction_boss/trailer.html` | The 2-min producer pitch (newcomer entry point) |
| `generated/friction_boss/index.html` | The Quest Log dashboard |
| `generated/friction_boss/agentic-engineering-roadmap.md` | Full v0.5 vision narrative |
| `generated/friction_boss/team-track-split.md` | Four-track proposal in detail |
| `generated/friction_boss/README.md` | Folder orientation |
| `.claude/commands/` | Current skill armory (~25 skills) |

---

## Appendix — Suggested Pre-Read

If they want to land in the meeting already partway in:

1. **`trailer.html`** — 2 min, sets the frame
2. **Skim `agentic-engineering-roadmap.md`** — 10 min, the substance behind the trailer
3. **`team-track-split.md` §1–4** — 5 min, the proposed split

Not required. The deck stands on its own. But if Holly/Thorben/Brann walk in cold, Slides 1–6 will land harder.
