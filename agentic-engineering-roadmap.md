# Agentic Engineering Roadmap

> Where we're going, why, and what's coming when.

**Owner:** Tim Williams
**Audience:** Producers + Project Leadership
**Last Updated:** 2026-05-04
**Status:** v0.1 — Initial vision

---

## The Vision

**Producers spend their time on strategy and team alignment — not compiling and maintaining plans.** The team always has clear, prioritized work that ties to the bigger picture, because the plumbing between specs, tickets, sprint plans, and status reports is maintained by agents.

Producers think. Agents synchronize. ICs always know what they're working on and why.

This isn't replacing producers. It's reclaiming their time from work that shouldn't be manual at 30-40 people scale.

---

## From → To

> *(Today's split varies meaningfully per pod and producer — some producers are closer to 50/50, others closer to 70/30. The numbers below are a directional average, not a per-person target.)*

| | Today | 6-9 Months |
|---|---|---|
| **Producer's week** | ~60% plan maintenance / ~40% strategy | ~20% maintenance / ~80% strategy & alignment |
| **IC's morning** | "What's on my list? Why does this matter?" → 30 min hunting | Daily brief: task, the feature it serves, why it matters, who else is on it |
| **Sprint planning** | Manual drafting + manual ticket creation per pod | Pre-drafted sprint plans + auto-scaffolded tickets; producer reviews & approves |
| **Spec → ticket** | Designer → Producer → Eng Lead → tickets (multi-day, lossy) | Approved spec auto-drafts tickets; producer approves; engineer sees clear "why" |
| **Plan freshness** | Stale until someone runs a skill | Continuously synced; brain reflects reality in real time |
| **Risk surfacing** | Caught at sprint-end or by accident | Continuous; risks surface as they emerge |

---

## The Three Layers of Transformation

We're not just building agents. The full picture is three stacked transformations:

1. **Org Coordination Layer** — agents that maintain plans, sync data, surface decisions. **(Current focus.)**
2. **IC Augmentation** — per-discipline AI tooling that makes each person 2-3x more effective. **(Parallel; engineers partway there.)**
3. **Workflow Redesign** — once agents and tooling are mature, re-shape *how* work flows. **(Later in the 6-9 month window.)**

Most orgs try all three at once and accomplish none. We're sequencing.

---

## Where We Are Today: Skills & Logic

We've built the **brain** (this repo) — the shared substrate — and a growing set of **skills** (slash commands) that capture the logic of what we'd want agents to do. Producers invoke them manually today.

This is intentional. **Skills validate the logic before automation.** Agents without good logic aren't useful — they just fail faster. So our current investment is:

- Building skills that cover the high-leverage maintenance tasks
- Refining them through real use
- Identifying which ones are mature enough to run autonomously

Once a skill is proven, it becomes a candidate for the next phase.

---

## Phase 1: Plan Maintenance Agent Cluster

A small cluster of agents that — together — keep plans, tickets, specs, and status in continuous sync. Each agent is narrow; the brain is their shared coordination layer.

| Agent | What It Does |
|---|---|
| **Spec Curator** | Watches Notion design docs; syncs new/changed specs to the brain; flags gaps to designer queue |
| **Plan Coherence** | When pod plans, capacity, or dependencies change, surfaces downstream impact ("X grew → no longer fits M&Ms → here are 3 options") |
| **Sprint Pipeline** | Drafts sprint plans + ClickUp Epic/tasks from features. On approval, writes to ClickUp. Maintains linkage as sprint evolves. |
| **Status Sync** | Continuously pulls ClickUp + SHQ Tracker; updates sprint plans + validation roadmap so the brain is never stale |
| **Clarity Auditor** | Checks every active ticket has description, feature link, prioritization, clear "why". Pings owners on gaps. |
| **Risk/Drift** | Continuous lightweight risk checks; surfaces new risks as they emerge, not at sprint retro |

**Rollout:** Pilot on one pod (likely Metagame), expand pod-by-pod. Producer approval gates on all writes to ClickUp/Notion until trust is earned.

---

## Phase 2: Team-Facing Clarity Layer

Once Phase 1 is solid, the team-facing pieces become possible:

- **Personal Daily Brief** — each IC gets a morning DM: today's task, the feature it serves, why it matters, who else is on it, what's blocking
- **Pod Standup Pre-Brief** — auto-posted to pod Slack each standup: yesterday's progress, today's focus, blockers, upcoming dependencies
- **"Where I Fit" View** — per-person internal page showing current work → feature → SHQ → milestone → hypothesis traceability

Phase 1 makes the data trustworthy. Phase 2 puts it in front of people.

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

Next step here: a **per-discipline audit** — where does the day actually go, and where can AI realistically remove a chunk?

---

## Phase 4: Workflow Redesign (Deep)

Once the foundation is real, pick **one workflow** and redesign it end-to-end around AI. Likely candidate: **spec → shipped feature**. This is where the team doesn't just go faster — the *shape* of how we work changes.

Highest risk, highest reward. Late in the 6-9 month window. Listed here so it's visible, not actionable yet.

---

## Agent Engineering: The Parallel Discipline

> **Skills are what agents *think*. Agent Engineering is what makes them *reliable*.**

Building agents that can be trusted to run autonomously is real engineering work, separate from writing skill logic. It includes:

- **Observability** — audit logs, dashboards, "what did the agents do today?"
- **State management** — idempotency, dedup, recovery from failure
- **Approval gates** — bounded authority, human-in-loop for destructive actions
- **Testing & evals** — how do we know an agent is doing the right thing?
- **Cost & rate-limit controls** — agents that run continuously add up
- **Incident response** — when an agent misfires at 3am, how do we stop, diagnose, fix?
- **Multi-agent coordination** — agents touching the same data shouldn't stomp on each other

**Right now we're investing in skills** because agents without good logic aren't useful, and skill use validates that logic. **Agent Engineering becomes the priority** once we have critical mass of skill logic ready to wrap.

Producers don't need to dive into this yet. But knowing it exists matters: **"we have a working skill" ≠ "we can trust it at 3am."** That gap is engineering work, not prompt-writing, and it'll need real investment when Phase 1 begins.

---

## How We'll Track Progress

Simple markers, not a Gantt:

- **Skill coverage** — % of plan-maintenance tasks wrapped in a skill vs. manual
- **Skill maturity** — which are stable, which are iterating, which are agent-ready
- **Agent readiness** — which skills are candidates for Phase 1
- **Producer time reclaimed** — rough self-reported %, sprint-over-sprint
- **IC clarity** — pulse-checked: "do you know what you're working on and why?" trend over time

A simple dashboard in `generated/reports/agentic_progress.md`, regenerated monthly.

---

## What You Can Help With Right Now

For producers and project leaders, the most valuable contributions today:

1. **Flag maintenance tasks that should be skills** — anything you do every sprint that's mechanical, repetitive, or feels like "compiling" rather than thinking
2. **Use existing skills and report friction** — what's missing, what's wrong, what's noisy
3. **Surface clarity gaps** — where do ICs in your area most often get lost in "what should I be doing and why?"
4. **Don't engineer agents yet.** That's premature. Skill logic has to be proven first.

---

## Change Log

| Date | Change | Author |
|---|---|---|
| 2026-05-04 | Initial vision draft | Tim Williams |
