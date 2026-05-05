# Agentic Engineering Roadmap

> Where we're going, why, and what's coming when.

**Owner:** Tim Williams
**Audience:** Producers + Project Leadership
**Last Updated:** 2026-05-05
**Status:** v0.5 — Condensed: merged "Three Layers" + "Where We Are" + Phase 0 intro; folded Agent Engineering into Phase 1; merged engagement sections; trimmed Vision and Indicators

---

## The Vision

We're not just making producers more strategic. We're rebuilding the production system so the whole team — every discipline — can move at the pace of small, high-craft, high-leverage teams that frontier studios are quietly building today. Producers strategize while agents synchronize. Engineers run 10+ parallel agentic terminals as standard practice. QA reclaims time for craft testing. Designers, artists, and ICs across every discipline get immediate feedback loops on the work only humans can do well: judgment, taste, craft, and decision-making.

**None of this works without the load-bearing infrastructure underneath.** Always-on scheduling. Observability so producers can trust agent output. Approval gates that bound risk. Evals that prove agents are doing the right thing. Skill maturity gates so we never deploy logic that isn't ready. The "boring" infrastructure quests aren't optional — they're what makes every discipline's upside real instead of theoretical.

This isn't replacing roles. It's reclaiming time from work that shouldn't be manual at 30-40 people scale.

---

## What Changes for Producers

The most concrete way to understand this roadmap is to look at the producer's day.

**Today (typical Monday morning):** Review weekend Slack. Chase status from leads. Update sprint plans. Draft tickets. Prep for standup. Prep for planning sync. Notice a Battle dependency that's at risk. Ping the lead. Wait. Status meeting. More chasing. By 11am, no strategic work has happened.

**At steady state (target Monday morning):** Read agent-prepared briefing in 5 minutes — what shipped over the weekend, what's at risk this week, what decisions need you, what your ICs need clarity on. Spend the first hour on the *single highest-leverage thing* surfaced by that briefing. Walk into standups with context loaded and decisions ready. Strategic work happens by 9:30.

The shift isn't "less work." It's **the same producer doing the work that requires a producer.**

### Adoption stages, not dates

We track this as adoption percentage — what share of the team is actually experiencing the new state — not by calendar. If we move fast, every column is closer than a calendar would suggest. If we get pulled to fires, the shape still holds; only the pace changes.

| | **Today (0%)** | **Beachhead (~25%)** | **Steady State (~95%)** |
|---|---|---|---|
| **Producer's week** | ~60% maintenance / 40% strategy | ~50/50 for pilot producers | ~20% maintenance / 80% strategy as default |
| **IC's morning** | "What am I doing? Why?" → 30 min hunting | Same as today; better specs reaching them | Personal daily brief with task, feature, why, blockers |
| **Sprint planning** | Manual drafting + manual ticket creation | Skill-assisted drafting in pilot pods | Continuous draft across all pods; producer approves |
| **Spec → ticket** | Multi-day, lossy handoffs | Skill-assisted breakdown for pilot pod | Spec approval triggers ticket scaffolding automatically |
| **Plan freshness** | Stale until someone runs a skill | Skills run more often; still manual | Continuously synced across all pods |
| **Risk surfacing** | Caught at sprint-end or by accident | Risks visible when skills are run | Continuous everywhere; risks surface as they emerge |
| **Status reporting** | Compiled manually each week | Skill-assisted compilation | Live surface anyone can read anytime |

A row is at **Steady State** when the new behavior is the default everyone falls into without deciding to — like git or Slack at a software company. The push from Beachhead to Steady State is the riskiest stretch — it requires the work to be *better* than what it replaced for people who weren't on the original effort.

---

## Phase 0: Where We Are + The Skill Maturity Gate

We've built the **brain** (this repo) — the shared substrate — and a growing set of **skills** (slash commands) that capture the logic of what we'd want agents to do. Producers invoke them manually today. **This is intentional: skills validate logic before automation, because agents without good logic aren't useful — they just fail faster.**

Phase 0 is the explicit bar between "useful skill" and "agent-ready skill." Without this gate, the people championing this work become the bottleneck — *they* end up intuiting whether something's ready, and that doesn't scale.

A skill is **agent-ready** when it meets all of these:

| Criterion | Bar |
|---|---|
| **Logic stable** | Last 5 runs produced output the producer accepted with no significant edits |
| **Idempotent or additive** | Running it twice does not break anything; outputs are predictable |
| **Failure modes known** | Documented list of how it can go wrong and what each failure looks like |
| **Approval gates clear** | Any write action has an explicit approval point with a clear human-readable diff |
| **Observable** | Every run produces an audit log: inputs, outputs, files touched, decisions made |
| **Reversible** | Any change the skill makes can be undone, manually or automatically |
| **Scope-bounded** | The skill cannot escape its lane and write to files it doesn't own |

A skill that passes all seven becomes a candidate for Phase 1 wrapping. A skill that fails any of them is a *useful manual skill* and stays manual until it's ready. This framework also drives skill *creation* — new skills get built with the bar in mind, not retrofitted.

### Why the phases compound

If engineers get 30% more effective and producers get 50% more strategic time, you don't get +30% +50% — you get a multiplicative effect because the **bottleneck moves.** Faster engineers expose slow producer alignment. Faster producer alignment exposes slow spec → ticket handoff. Each phase's gains unlock the next. This is why doing one phase well beats doing all phases poorly.

---

## Phase 1: Plan Maintenance Agent Cluster

A small cluster of agents that — together — keep plans, tickets, specs, and status in continuous sync. Each agent is narrow; the brain is their shared coordination layer. Each agent wraps one or more agent-ready skills.

| Agent | What It Does | Underlying Skills | Risk Level |
|---|---|---|---|
| **Status Sync** | Continuously pulls ClickUp + SHQ Tracker; updates sprint plans + validation roadmap so the brain is never stale | (read-only sync skills) | Low — read-only |
| **Spec Curator** | Watches Notion design docs; syncs new/changed specs to the brain; flags gaps to designer queue | `/spec-sync` (matured) | Low-Med — writes to specs |
| **Plan Coherence** | When pod plans, capacity, or dependencies change, surfaces downstream impact ("X grew → no longer fits M&Ms → here are 3 options") | `/risk-evaluation`, `/roadmap-options` (matured) | Low — surfaces only, no writes |
| **Sprint Pipeline** | Drafts sprint plans + ClickUp Epic/tasks from features. On approval, writes to ClickUp. Maintains linkage as sprint evolves. | `/sprint-plan` (matured) | High — writes to ClickUp |
| **Clarity Auditor** | Checks every active ticket has description, feature link, prioritization, clear "why". Pings owners on gaps. | (new skill needed) | Low — surfaces only |
| **Risk/Drift** | Continuous lightweight risk checks; surfaces new risks as they emerge | `/risk-evaluation` (continuous mode) | Low — surfaces only |

**Sequencing:** Start with the lowest-risk read-only agents (Status Sync, Plan Coherence, Risk/Drift). Build trust before any agent writes. Sprint Pipeline — the only one that writes to ClickUp — is last, because that's where misfires hurt most.

**Pilot pod:** Start with one pod (recommend Metagame — the producer championing this also produces it, so feedback loops are tight). Expand pod-by-pod as trust is earned.

**Approval gates:** Every write action requires producer approval until trust is earned per-workflow. Trust graduates per-agent, per-workflow, with a recorded track record.

### The Fortis-Specific Infrastructure Constraint

We don't have unrestricted infrastructure access. We can't spin up an n8n cluster or a custom scheduler stack — we have to operate within what Fortis provides. Figuring out the always-on scheduling/coordination layer using available tooling is a known unknown that needs a concrete answer before Phase 1 ships writes. **"We have a working skill" ≠ "we can trust it at 3am."** That gap is real engineering work — observability, state management, incident response, multi-agent coordination — and it'll need investment when Phase 1 begins.

---

## Phase 2: Team-Facing Clarity Layer

Once Phase 1 is solid (Phase 1 data is trustworthy and producers stop reflexively double-checking), the team-facing pieces become possible:

- **Personal Daily Brief** — each IC gets a morning DM: today's task, the feature it serves, why it matters, who else is on it, what's blocking
- **Pod Standup Pre-Brief** — auto-posted to pod Slack each standup: yesterday's progress, today's focus, blockers, upcoming dependencies
- **"Where I Fit" View** — per-person internal page showing current work → feature → SHQ → milestone → hypothesis traceability

Phase 1 makes the data trustworthy. Phase 2 puts it in front of people. **Doing Phase 2 before Phase 1 is solid is how you train the team to ignore agent output.**

---

## Phase 3: IC Augmentation by Discipline (Parallel Track)

Each discipline has different leverage points. Engineers are partway there. The rest is mostly ad-hoc and uneven.

| Discipline | Where AI Removes 30-50% of Hours |
|---|---|
| Engineers | Code authoring (Claude Code/Cursor — in flight), review, test generation |
| Designers | Spec authoring, balance/data analysis, design doc generation |
| Artists | Generative ideation, asset variations, reference gathering |
| QA | Test plan generation, bug triage, regression prep |
| Producers | This entire roadmap is producer augmentation |

**Next step:** Per-discipline audit — where does the day actually go for each role, and where can AI realistically remove a chunk? This is a 1-2 hour conversation per discipline lead, not a survey. Output: a per-discipline shortlist of high-leverage AI workflows ranked by friction-removed-per-hour.

---

## Phase 4: Workflow Redesign

Once Phase 1 is live and trusted, **pick one workflow and redesign it end-to-end around AI.** This is where the team doesn't just go faster — the *shape* of how we work changes.

Likely first candidate: **spec → shipped feature.** Today this involves designer → producer review → eng lead breakdown → ticket creation → IC reads ticket → asks clarifying questions → starts work. Multi-day, lossy at every handoff. The redesigned version: approved spec triggers automatic ticket scaffolding with full context (validation goal, adjacent work, dependencies), producer approves the breakdown in a 10-min review, IC sees a ticket they can start on without hunting.

This is **not held until late.** As soon as Phase 1 is real — first read-only agent trusted, plan freshness no longer a chore — the obsolete handoffs in current production become loud. Workflow redesign starts the moment Phase 1 is at Beachhead, not after it reaches Steady State.

Highest reward of any phase. Highest cultural risk too — see "What Could Go Wrong."

---

## What Could Go Wrong

Honest list. Naming these isn't pessimism — it's how we get support to do this right.

| Risk | What It Looks Like | Mitigation |
|---|---|---|
| **Destructive write at 3am** | Agent makes a bad change to ClickUp, designer notices Monday, blame falls on agentic effort | Approval gates on all writes until trust earned; full audit log; rollback capability |
| **Producers stop trusting and revert** | Daily brief is wrong twice, producers stop reading it, value collapses | Phase 0 maturity gate is strict; pilot small; ship only what's reliable |
| **IC clarity drops** | Daily briefs introduce confusion rather than reducing it; ICs get conflicting info | Don't ship Phase 2 until Phase 1 data is genuinely trustworthy; pulse-check ICs continuously |
| **ClickUp pollution** | Auto-generated tickets are noisy, low-quality, or duplicated; team resents the noise | Sprint Pipeline ships last; strict quality bar before any auto-creation; opt-in per pod |
| **Designers feel surveilled** | Spec Curator tracking changes feels like monitoring rather than helping | Frame as designer support; Spec Curator surfaces gaps to *designer*, not to leadership; transparent operation |
| **Champion gets reassigned** | Effort dies because one person was carrying it | Document the why obsessively; find at least one ally early; build the case so it survives turnover |
| **Cultural resistance** | Producers whose identity is plan maintenance feel threatened; meeting culture fights back | Lead with reclaimed time, not eliminated work; involve resistant producers early; let them experience the upside before pushing the change |
| **Tool/infra gaps** | We can't actually run scheduled agents in the Fortis environment | Solve scheduling/always-on hosting question before Phase 1 writes ship |

---

## How We'll Track Progress

The campaign tracks itself through the **Quest Log** — a living dashboard at `generated/agentic_quest_log/` that maps the full campaign as a quest tree, tracks the FRICTION boss's HP as quests complete, and shows which chapters and party members are unlocked. It's the canonical view of "where are we?" for anyone who wants to know.

Boss HP and quest completion are the headline. Underneath sit a few key signals that tell us whether the campaign is *actually* working — not just visibly progressing:

- **Skill runs per producer per week** — are skills being used, or shelfware?
- **Skill maturity progression** — how many skills passed Phase 0 this month?
- **Producer time reclaimed** — calendar audit + self-report, trended monthly
- **IC clarity pulse** — anonymous: "do you know what you're working on and why?" trended over time

If the boss HP is dropping but the indicators aren't moving, we're shipping motion without shipping value. If the indicators are moving but the boss HP isn't, we're undercrediting the work and need to recalibrate. Both numbers matter.

---

## How to Engage

**For producers and project leaders:**

1. **Flag maintenance tasks that should be skills** — anything you do every sprint that's mechanical, repetitive, or feels like "compiling" rather than thinking
2. **Use existing skills and report friction** — what's missing, what's wrong, what's noisy
3. **Surface clarity gaps** — where do ICs in your area most often get lost in "what should I be doing and why?"
4. **Don't engineer agents yet.** Skill logic has to be proven first.
5. **If you're skeptical, say so.** Skepticism caught early shapes the rollout. Skepticism caught late kills it.

**What this roadmap is not:**

- **Not a headcount reduction plan.** It's a leverage plan. Same producers, more strategic output. Same engineers, more shipped features.
- **Not "AI does the work."** Humans set direction, judge output, and own decisions. Agents synchronize and surface.
- **Not a replacement for ClickUp or Notion.** The brain connects them and adds cognition. Existing tools stay.
- **Not a fixed plan.** This is a living document. The vision is stable; the path is iterative.

---

## Change Log

| Date | Change | Author |
|---|---|---|
| 2026-05-04 | Initial vision draft (v0.1) | Tim Williams |
| 2026-05-04 | v0.2: Added Phase 0 maturity framework, sequencing in From→To, producer day-in-life, risk register, leading indicators, "What This Roadmap Is Not", Fortis infra constraint callout, Workflow Redesign moved earlier in window, multiplicative compounding callout | Tim Williams + Claude |
| 2026-05-04 | v0.3: Replaced calendar columns in From→To with adoption percentages (Today / Beachhead / Majority / Steady State); rewrote day-in-life and Phase 4 callouts to drop month-anchoring; added "What % adopted means in practice" framing | Tim Williams + Claude |
| 2026-05-04 | v0.4: Broadened Vision to full team picture (engineers, QA, designers, artists, ICs) with load-bearing infrastructure callout; replaced standalone progress dashboard with Quest Log as primary tracker; reframed indicators as signals that feed the Quest Log; added engineer parallel-work rate as a lagging signal | Tim Williams + Claude |
| 2026-05-05 | v0.5: Condensed structure — merged "Three Layers" + "Where We Are Today" + "Phase 0" into one section; folded "Agent Engineering" into Phase 1 (Fortis constraint preserved); merged "What You Can Help With" + "What This Roadmap Is Not" into "How to Engage"; trimmed Vision per-discipline list to single sentence; collapsed From→To from 4 to 3 columns (dropped Majority); compressed indicators from 10 to 4 | Tim Williams + Claude |
