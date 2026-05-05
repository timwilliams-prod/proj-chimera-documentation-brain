# Agentic Engineering — Team Track Split

> How four producers split the campaign without going four directions.

**Owner:** Tim Williams
**Audience:** Holly, Thorben, Brann, Tim
**Last Updated:** 2026-05-04
**Status:** v0.1 — Draft for discussion

---

## The Premise

Four of us are 100% bought in. That's rare and shouldn't be wasted on parallel-but-uncoordinated effort. The goal of this doc: **give each of us a track that plays to our context, while designing the seams between tracks so we accelerate each other instead of drifting.**

Three principles guide the split:

1. **Each track owns a domain of the campaign.** Not just tasks — a coherent slice of the friction-defeated outcome.
2. **Each track produces artifacts the other tracks consume.** The seams are the design.
3. **Knowledge sharing is async-first, lightweight, and producer-grade.** No new meeting tax. We're trying to *reduce* ceremony, not invent more.

---

## The Four Tracks

### 🎯 Track A — Strategy & Roadmap
**Lead:** Holly + Tim (paired)
**Pods covered:** Cross-cutting; EP altitude
**Why this pairing:** Holly carries executive air cover and the milestone-target view. Tim carries the agentic engineering vision and the maker's hands. Together this is "what should be true" + "what's mechanically possible." Neither of us alone has the full picture.

**Owns:**
- The agentic engineering roadmap itself — keeping v0.x current as the campaign evolves
- The Skill Maturity Framework (Phase 0 gate)
- The Skill Review Ritual (how skills graduate)
- The cross-track narrative — what we tell leadership, what we tell the team, when
- Risk surfacing at the campaign level (not the agent-output level — that's elsewhere)
- Ally recruitment beyond the four of us

**Produces (consumed by other tracks):**
- Maturity Framework → gates every skill Thorben and Brann harden
- Roadmap deltas → tells Thorben/Brann when their track's priority shifts
- Where-Things-Live edict → all tracks reference it
- Always-On Infrastructure proposal → unblocks every agent-deploy quest

**Quests primarily owned (from the campaign):**
- q1-1 Forge the Maturity Gate
- q1-3 Solve the Always-On Riddle *(Tim leads, Holly opens doors)*
- q1-4 Enshrine the Where-Things-Live Edict
- q1-5 Build the Skill Review Ritual
- q1-6 Recruit the First Ally → "more allies"

---

### ⚙️ Track B — Tech & Backend Agents
**Lead:** Thorben
**Pods covered:** Battle (primary), Dozer-adjacent infra concerns
**Why this person:** Battle pod sits closest to the deepest engineering systems work. Thorben already operates in close partnership with engineering leads (Jota, Derek). The agents that touch the most technical surfaces — risk evaluation, dependency mapping, ticket scaffolding, the observability layer itself — benefit from a producer who can speak engineer fluently.

**Owns:**
- Skills that touch ClickUp deeply (status sync, sprint pipeline, ticket scaffolding)
- The Observability Hall — "what did the agents do today?" dashboard
- Engineering Augmentation Audit (the 10+ parallel terminals dream)
- Coordination with Eng Leads on the Always-On Riddle's *implementation* (Tim/Holly handle the *policy* conversation; Thorben handles the *technical* one)
- Tech debt integration with the brain (TechnicalDebt.md is owned by Eng Leads, but Thorben is the producer-side liaison)

**Produces (consumed by other tracks):**
- Working ClickUp-integration patterns → Brann reuses these for any Empire-side ClickUp automations
- Observability dashboard → Holly/Tim use it to evaluate agent trust and graduation
- Engineering audit findings → Holly/Tim fold into roadmap; Brann references for art-pipeline parallels

**Quests primarily owned:**
- q2-2 Skill: /dependency-map-sync
- q2-3 Skill: /risk-surface
- q2-4 Skill: /spec-to-tickets
- q3-1 Deploy Status Sync Agent (read-only)
- q3-4 Build the Observability Hall
- q4-2 Deploy Sprint Pipeline Agent (the dangerous one)
- q6-1 Engineering Augmentation Audit

---

### 🎨 Track C — Content & Art Pipelines
**Lead:** Brann
**Pods covered:** Empire (primary), cross-pod art coordination (post Art Pod closure)
**Why this person:** Empire is maps + map content, where the content pipeline pressure is highest. The Art Pod closure dispersed artists across pods, which means *art coordination* is now a producer-side concern with no clean owner. Brann is positioned to make it one of his signature contributions. Plus Empire has Tone/Emotion as a must-have, which is inherently a content/art question.

**Owns:**
- Skills that touch content workflows (spec-sync as it relates to art docs, content-pipeline gap detection)
- Cross-pod art coordination as an agentic surface — who's making what, who's blocked, who needs what
- Art Augmentation Audit (per-discipline AI leverage for artists, within Fortis policy)
- Design Augmentation Audit (the design-doc and balance-data parallels — designers and artists share workflow patterns)
- Content readiness signals — which features have specs ready vs which are content-blocked

**Produces (consumed by other tracks):**
- Art coordination surface → Holly references for milestone-readiness; Tim/Thorben reference when planning sprints with art dependencies
- Content-readiness signals → feed directly into Tim's roadmap reviews
- Augmentation audit findings → Holly/Tim fold into roadmap

**Quests primarily owned:**
- q2-1 Skill: /clarity-audit *(co-owned with Thorben — this skill spans content + tech tickets)*
- q2-5 Skill: /ic-daily-brief
- q2-6 Skill: /standup-prebrief
- q2-7 Skill: /milestone-checkpoint
- q4-1 Deploy Spec Curator Agent
- q6-2 Design Augmentation Audit
- q6-4 Art Augmentation Audit

---

### 🔁 Track D — Cross-Cutting & Pilot
**Lead:** All four, rotating
**Why this exists:** Some quests don't fit neatly in one track. They benefit from rotating ownership so no single person becomes a single-point-of-failure on shared infrastructure.

**Owns:**
- The Metagame pilot itself (Tim's home pod, but learnings shared across all tracks)
- Quest log maintenance (this dashboard, quest state updates, completion XP/HP bookkeeping)
- Skill audit and re-audit (q1-2, run quarterly)
- Workflow redesign (Chapter V) — too big for one track
- The "ally recruitment" effort beyond the founding four

**Quests primarily owned:**
- q1-2 Audit the Skill Armory *(Holly/Tim run first audit; rotates after)*
- q3-2/3-3 Plan Coherence + Clarity Auditor Agent deploys *(joint Thorben/Brann)*
- q4-3 Expand to Second Pod *(Brann naturally — Empire is candidate #2)*
- All of Chapter V (Workflow redesign — the four of us together)

---

## How the Tracks Help Each Other

The seams are the point. Drawn explicitly:

```
        ┌──────────────────────────────────┐
        │  Track A — Strategy & Roadmap    │
        │       Holly + Tim                │
        │                                  │
        │  Maturity Framework, Where-      │
        │  Things-Live, Always-On policy,  │
        │  Roadmap deltas                  │
        └────────────┬─────────────────────┘
                     │
       ┌─────────────┼──────────────┐
       │             │              │
       ▼             ▼              ▼
  ┌────────────┐ ┌────────┐ ┌──────────────┐
  │ Track B    │ │Track D │ │ Track C      │
  │ Tech &     │ │ Cross- │ │ Content &    │
  │ Backend    │ │ Cutting│ │ Art          │
  │            │ │        │ │              │
  │ Thorben    │ │ All    │ │ Brann        │
  └─────┬──────┘ └────────┘ └──────┬───────┘
        │                          │
        │   Observability,         │
        │   ClickUp patterns,      │
        │   Eng audit              │
        │                          │
        │   Art coordination       │
        │   surface, content       │
        │   readiness, art audit   │
        ▼                          ▼
   Both feed back into Track A's roadmap
```

### Specific seams worth calling out

**Maturity Framework (A → B + C).** Holly/Tim author it. Thorben and Brann use it as the bar for every skill they harden. If the framework is wrong or missing a criterion, Thorben/Brann are the first to feel it — and their pushback sharpens the framework.

**Always-On Infrastructure (A ↔ B).** Tim/Holly handle the political/policy half — *can we run this?* Thorben handles the technical half — *here's how we'd actually run it given X and Y available.* Neither half works without the other.

**ClickUp Integration Patterns (B → C).** Thorben builds the first ClickUp-touching skills against the hardest case (sprint pipeline). The patterns Thorben establishes — auth, rate limits, error handling, dry-run modes — Brann reuses for any Empire-side ClickUp automations. Build once, share.

**Content Readiness Signals (C → A).** Brann's content/art readiness surface tells Tim which features are at risk on the *content* side, not just the engineering side. Today this risk is invisible until late. Brann's track makes it continuous.

**Engineering Augmentation Audit (B → All).** When Thorben surfaces what 10+ parallel terminals actually requires (specs, tooling, repo conventions), it shapes what Brann builds for art (since art has a parallel "10+ generations in flight" dynamic) and what Holly/Tim ask for in the roadmap.

---

## Knowledge Sharing — The Anti-Meeting Approach

We're trying to *cut* meetings, not invent new ones. Knowledge sharing has to feel weightless.

### Async-First Channels

| Channel | Purpose | Cadence |
|---|---|---|
| **#agentic-engineering Slack** | Working channel for the four of us | Continuous |
| **`generated/agentic_quest_log/`** | Quest log + state — visible to anyone | Updated as quests complete |
| **`library/learnings/`** *(new directory)* | Per-track learnings, written by whoever discovered them | When something's worth sharing |
| **Track Logs in `library/track_logs/`** *(new)* | One log per track, append-only, weekly bullets | 5 min/week from each lead |
| **Quest Completion Posts** | Slack post when a quest completes — what shipped, what's unlocked next, what we learned | Per quest |

### Sync, but Tiny

One actual sync recommended, and only one:

**Weekly Track Sync — 30 min, all four producers.**
- 5 min: Boss HP and Quest Log state (handled by whoever maintains the log that week)
- 5 min × 3: each track lead reads their own track log aloud, pulls one thing they need from another track
- 10 min: open discussion on cross-track friction or seams that need adjustment

That's it. No status theater. No full-team broadcasting. If a track is on fire, that's its lead's job to flag in Slack mid-week, not save it for Monday.

### Quest Completion as Documentation

Every completed quest produces a Slack post in #agentic-engineering with this template:

```
⚔ QUEST COMPLETE: [Quest Title]
Track: [A/B/C/D]
What shipped: [link or summary]
Friction damaged: [-N] | XP earned: [+N] | Boss HP now: [X/1000]
What we learned: [1-3 bullets]
What this unlocks: [next quests now available]
```

This gives us a free running history of the campaign, makes wins visible, makes learnings reusable, and means we don't need to write retros.

---

## Recommended First Two Weeks

If we want to start with momentum and visible wins:

### Week 1 — Foundation Setup
- **Holly + Tim:** Draft Skill Maturity Framework v0.1 (q1-1) — circulate to Thorben/Brann for sharpening
- **Tim:** Draft `WHERE_THINGS_LIVE.md` (q1-4) — quick, low effort, useful immediately
- **Thorben:** Begin Always-On Riddle technical scoping (q1-3) — survey what Fortis platform team has available, light conversations
- **Brann:** Begin Skill Armory audit pass on existing skills (q1-2) — read through `.claude/commands/`, draft initial assessment
- **All four:** Read each other's drafts; meet Friday for first 30-min Track Sync

### Week 2 — First Skill Build + Foundation Lock
- **Holly + Tim:** Lock Maturity Framework v0.2 based on track feedback; ship Skill Review Ritual (q1-5)
- **Thorben:** Continue Always-On work; begin first new skill (`/dependency-map-sync` or `/risk-surface`)
- **Brann:** Begin first new skill (`/clarity-audit`) — paired with Thorben since it spans content + tech
- **All four:** First completed quest post in Slack

By end of Week 2: Maturity Framework live. Always-On has a draft proposal. At least one new skill in flight. Visible boss damage. The campaign feels real.

---

## What Could Go Wrong (Honest List)

- **Track A becomes the bottleneck** — every track depends on the Maturity Framework. Mitigation: ship v0.1 fast and improve in v0.2/v0.3. Don't wait for perfect.
- **Track B becomes a solo show** — the technical track is the easiest to disappear into. Mitigation: Thorben writes track log every week; Holly/Tim review weekly.
- **Track C struggles to bound scope** — "art coordination across pods" is genuinely sprawling. Mitigation: Brann picks one specific surface (recommend content-readiness signal) as the first deliverable, expands from there.
- **The four of us stop talking.** Mitigation: Weekly Track Sync is non-negotiable for the first 8 weeks. Re-evaluate after that.
- **One of us gets pulled to a fire.** This *will* happen — we're producers. Mitigation: track logs are append-only and visible; if someone disappears for a sprint, the others can read what was in flight.
- **The four-person bubble becomes a clique.** Mitigation: start recruiting the *fifth* ally by Week 4. If only the founders ever ship anything, the campaign dies when one of us moves on.

---

## What This Is Not

- **Not territorial.** Tracks own *primary leadership* of work, not exclusive rights. Brann can absolutely write a skill that touches ClickUp; Thorben can absolutely shape the Maturity Framework. The track owner is who's accountable for the work moving forward, not who's allowed to touch it.
- **Not permanent.** This split is for the first phase. As skills mature and agents deploy, the natural shape of work will shift. Re-evaluate at Phase 1 → Phase 2 boundary.
- **Not a hierarchy.** Tim is championing the campaign but isn't the boss of any track. Holly's altitude is executive sponsorship, not approval-gating Thorben's work. Each track lead owns their track.

---

## Open Questions for the Four of Us

To resolve in the kickoff:

1. **Are these the right track boundaries** for how each of us actually wants to spend our time?
2. **Is weekly 30-min the right sync cadence,** or should we try 2x/week × 15 min for the first month while we calibrate?
3. **Where does this work live officially?** This Project's brain (`lotusDocumentationBrain/`) is the natural home, but the campaign affects all pods — does it belong somewhere more cross-cutting?
4. **Who owns the quest log day-to-day?** I've been treating it as "whoever maintains it that week" but a single accountable maintainer might be better for the first phase.
5. **What's our first joint deliverable** that demonstrates to leadership that the campaign is real and producing? My vote: a Maturity Framework + first new skill shipped + boss-damage visible by end of Week 2.

---

## Change Log

| Date | Change | Author |
|---|---|---|
| 2026-05-04 | Initial four-track split draft | Tim |
