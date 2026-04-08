---
Quarter: Q2 2026
Month: April 2026
Active Milestone: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
QVR Goals Source: Q2 goals not yet set — using M&Ms must-haves as proxy goals
Previous Pulse Check: None (first Pulse Check)
Generated: 2026-04-08
---

# Pulse Check — April 2026

---

## 1. Executive Summary

This is the first Pulse Check of Q2 2026. We've just entered the M&Ms (Multiplayer & Meta) milestone — Sprint 26 (Yodel Yaks) is wrapping up as the first of roughly 7 sprints in this milestone window. The transition from Systems Validation was productive: the multiplayer prototype received directional approval from Calvin and Shawn, and we're leaning harder into multiplayer live ops maps as the core social experience. The empire, battle, and metagame pods all have clear feature roadmaps through June.

The first sprint has been light in ClickUp — only 6 tasks were tracked in S26, with Tutorial Architecture carry-over still in progress for Henrique (Empire's sole engineer). Battle HUD work has started (SHQ4-1 in progress in ClickUp), UI Foundation is underway in Metagame, and Social Dynamics completed P1 (Infrastructure & Foundation) and is moving into P2 (Map Foundation). However, three of our eleven M&Ms must-have features have no pod plan, no owner, and no schedule: Audio Tooling Foundation, Art Outsourcing Pipelines, and Overarching Tone/Emotion. This is a gap that needs immediate resolution.

The validation system has never been formally evaluated in-system — ValidationPlan.md's "Last Evaluated" field reads "Not yet evaluated in-system." Of the 17 M&Ms SHQs, 12 are NOT STARTED. We're building features but we haven't started proving them. **Confidence is stable but fragile** — we have a solid plan for the milestone, but significant gaps in must-have coverage, validation cadence, and feature spec depth need to be closed in April to stay on track.

> **Q2 QVR goals have not been set.** This report uses M&Ms milestone must-haves from `product_targets.md` as proxy goals. We recommend setting Q2 goals before the next Pulse Check.

---

## 2. Goal Summary

Since Q2 QVR goals haven't been formally set, this table tracks M&Ms must-have features as proxy goals:

| # | Must-Have Feature | Pod | Status | Assessment |
|---|-------------------|-----|--------|------------|
| 1 | Territory Map Vertical Slice | Empire | NOT STARTED (planned S30-S31) | On Track — depends on WME completing first |
| 2 | Battle HUD Beta Overhaul | Battle | IN PROGRESS (S26-S29) | On Track |
| 3 | Optimisation in Prep for Beta | Dozer | NOT STARTED | On Track — ongoing track, but scope vague |
| 4 | Narrative and Tutorial Tooling | Empire | IN PROGRESS (carry-over from SV) | On Track — Tutorial Arch carry-over still open |
| 5 | Audio Tooling Foundation | Dozer? | **NO PLAN** | **At Risk — not in any pod plan** |
| 6 | UI Foundation | Metagame | IN PROGRESS (6 sprints, Pipeline A) | On Track |
| 7 | 6 Starter Heroes — Designed and Arted | Battle/Art | IN PROGRESS (not discretely tracked) | At Risk — no explicit milestone or tracking |
| 8 | Art Outsourcing Pipelines Established | Art | **NO PLAN** | **At Risk — not in any pod plan** |
| 9 | Reduction of FTUE Friction | Cross-pod | NOT STARTED (Metagame #7, unscheduled) | At Risk — must-have with no schedule |
| 10 | Overarching Tone/Emotion of Game | Art/Empire | **NO PLAN** | **At Risk — not in any pod plan** |
| 11 | Multiplayer Foundation Complete | Social Dynamics | IN PROGRESS (P1 done, P2 starting) | On Track |

**Summary**: 4 On Track, 4 At Risk, 3 with no plan at all.

---

## 3. Goal Breakdown / Notes

### [ON TRACK] Territory Map Vertical Slice

**Status**: On Track (planned for S30-S31)

**Progress Since Last Check**: This is a downstream dependency — not scheduled to start until World Map Experience completes. World Map Experience (3 sprints, S27-S29) begins engineering this sprint with Henrique. Territory Map VS will validate that the map works at scale with real art, testing SHQ3-1 (map production pipeline) and SHQ3-2 (strategy-conquest connection, already ANSWERED).

**Current State**: WME design work is underway (Diana, Yura). Henrique must first clear Tutorial Architecture carry-over tasks (CHI-36213 still in progress, CHI-36212 to do) before starting WME engineering. The WME -> TerMap VS pipeline is sequential with zero buffer — any delay in WME compresses Territory Map VS.

**Next Steps**: Clear Tutorial Arch carry-over in first days of S27. Begin WME engineering. Design prep for TerMap VS should start in parallel by S29.

---

### [ON TRACK] Battle HUD Beta Overhaul

**Status**: On Track

**Progress Since Last Check**: Battle HUD work has begun — SHQ4-1 (HUD strategic + tactical play) is IN PROGRESS in the ClickUp SHQ Tracker. The feature is allocated 4 sprints (S26-S29). Lincoln Li (design lead) and Jota Oliveira (sole engineer) are driving this.

**Current State**: Jota has 9 days available in S27 (Brazil holiday April 21 = 1 day lost). Lincoln has full availability with minor partial appointments. The 4-sprint allocation is tight for a "beta overhaul" level effort, and no feature spec exists yet — the scope is being defined as work proceeds. SHQ3-24 (art clarity) is also in progress, which is related to the HUD visual quality bar.

**Risks**: No formal feature spec means scope could drift. Battle has a single engineer (Jota) — any unplanned absence cascades the entire pod. Actor System Overhaul and Pathfinding (4 more sprints combined) are listed as M&Ms features but realistically overflow into Beta Prep.

**Next Steps**: Lincoln should produce a Battle HUD spec to lock scope. Continue engineering through S29.

---

### [ON TRACK] Optimisation in Preparation for Beta

**Status**: On Track (but scope vague)

**Progress Since Last Check**: Derek Gallant and Bruno Freitas are assigned to Dozer. Performance optimization is listed as an "ongoing" track but has no discrete deliverables or success criteria defined.

**Current State**: No specific performance targets have been set (e.g., target FPS, memory budget, load time thresholds). The tech debt ledger contains 3 Critical performance items (TD-027, TD-028, TD-029) but these aren't connected to specific sprint work. UI Framework V2 (2 sprints) is the only concrete Dozer deliverable.

**Next Steps**: Define concrete beta performance targets. Connect them to planned work so we can measure progress.

---

### [ON TRACK] Narrative and Tutorial Tooling

**Status**: On Track (carry-over in progress)

**Progress Since Last Check**: Tutorial Architecture was the primary Empire engineering focus in S26. Two tasks remain from carry-over:
- CHI-36213 (Orchestration/State Tracking/Post Step) — **in progress**
- CHI-36212 (Triggering) — **to do**

These must complete before Henrique can pivot to World Map Experience.

**Current State**: Henrique is Empire's sole client engineer. Each day spent on Tutorial Arch carry-over is a day not spent on WME. The S32 flex sprint provides buffer, but the margin is thin.

**Next Steps**: Target Tutorial Arch completion by end of S27 week 1. Begin WME engineering immediately after.

---

### [AT RISK] Audio Tooling Foundation

**Status**: At Risk — **not in any pod plan**

This is a must-have in product_targets.md ("Audio pipeline must be established for content production") but has no entry in any pod's features.md, no milestone plan, no feature spec, and no owner. Lawrence Steele (Sound Engineer) is the natural resource, and this likely belongs to Dozer or Art.

**Action Needed**: Assign to a pod. Define minimum scope. Add to pod features.md and feature_registry. Even a small "establish audio pipeline tooling" task would address this gap.

---

### [ON TRACK] UI Foundation

**Status**: On Track

**Progress Since Last Check**: UI Foundation is Metagame's #1 priority — a 6-sprint effort running through Pipeline A (Guilherme Quizzini). This is the foundational UI system that all other feature UIs build on. Dan Dupuis (Eng Lead) is overseeing architecture.

**Current State**: Work is underway and tracking to plan. The tech debt ledger has 4 Critical UI-related items (TD-010 through TD-013) that directly overlap with UI Foundation scope. It's unclear whether UI Foundation is *resolving* these debt items or *building on top of them*.

**Next Steps**: Clarify relationship between UI Foundation and TD-010 through TD-013. Continue Pipeline A execution. Tiago Costa (new hire) is ramping up on Pipeline B (Building Upgrades, Empire Progression Tree, etc.).

---

### [AT RISK] 6 Starter Heroes — Designed and Arted

**Status**: At Risk — not discretely tracked

This must-have ("Verify art direction with final hero assets; hero roster needed for all playtests") is covered indirectly by Art pod's "Character Assets" work, but there's no specific milestone, feature spec, or tracking mechanism for "6 starter heroes at final quality." It's also not in the feature registry.

Additionally, Art leadership is thin in S27: Brendan Cheatham (Assoc. Art Director) is out 8 of 10 days, Pedro Sarraf out 6 days. Kevin Griffith covers solo.

**Action Needed**: Create a discrete tracking item for the 6 starter heroes — who are they, what's the art status of each, when will they be at final quality?

---

### [AT RISK] Art Outsourcing Pipelines Established

**Status**: At Risk — **not in any pod plan**

Must-have in product_targets.md ("External art production must be validated for scale") with no pod plan entry. This was a Q1 goal ("Establish a Roadmap for Content Pipeline") and progress was made — outsourcing ramp targeted at 5 characters/month — but the Q2 execution of establishing the actual pipeline isn't tracked.

**Action Needed**: Assign to Art pod (Kevin Griffith + Brann). Define what "established" means — first external asset delivered? Pipeline tested end-to-end? Add to features.md.

---

### [AT RISK] Reduction of FTUE Friction

**Status**: At Risk — unscheduled

Listed as Metagame feature #7 (2 sprints estimated) but not scheduled in any sprint allocation. No engineer assigned. The M&Ms success criteria include "First-time user experience must be smooth enough for external playtests."

**Action Needed**: Determine if this is engineering work or design-only. If engineering, it needs a pipeline slot. If design, clarify scope and assign.

---

### [AT RISK] Overarching Tone/Emotion of Game

**Status**: At Risk — **not in any pod plan**

Must-have in product_targets.md ("Narrative and art direction must come together to establish cohesive game identity") with no formal plan. This may be happening informally through Art direction and Empire narrative work, but it's not tracked or accountable.

**Action Needed**: Determine if this is already being addressed informally. If so, formalize it with an owner and deliverable. If not, scope it and assign.

---

### [ON TRACK] Multiplayer Foundation Complete

**Status**: On Track

**Progress Since Last Check**: This is the headline outcome from Q1's multiplayer prototyping work. The HTML prototype received directional approval from Calvin and Shawn, with a strategic shift toward multiplayer live ops maps. Social Dynamics completed P1 (Infrastructure & Foundation) and is moving into P2 (Map Foundation) with 5 engineers: Gabriel Arruda and Marcos Loures (transferred from Empire), Randy Pasion, Garrett Eidsvig, and Bruno Bacelar.

**Current State**: P2 architecture breakdown (CHI-36382) is still "to do" — Marcos and Gabriel need to complete this before the team can start building. The prototype is being updated to work as actual multiplayer (vs. bot-only currently). Networking work (Bruno Bacelar) is progressing in parallel. Target: internally playable in software by end of June.

**Risks**: Randy and Garrett have Dozer split responsibilities — any build pipeline or infrastructure incident pulls them away from multiplayer work. P2 task breakdown delay could leave 4 engineers without clear direction in S27.

**Next Steps**: Complete P2 task breakdown in S27 week 1. Continue networking foundation. Continue prototype iteration.

---

## 4. Team Size

**Current Team**: 48 people

### Staffing by Discipline

| Discipline | Count | Notes |
|-----------|-------|-------|
| Leadership | 5 | James (GD), Holly (EP), Kevin G (AD), Derek G (TD), Hafiz (QA Lead) |
| Engineering | 12 | Includes Derek (also Leadership/Dozer lead). Tiago Costa is new hire ramping up. |
| Design | 10 | 4 in Battle (large relative to 1 engineer) |
| UX/UI | 3 | Kevin Ligon (UX Lead), Yura (UX), Miguel (UI Art) |
| Art | 14 | Largest discipline. Cross-pod support. |
| QA | 4 | Hafiz (cross-pod lead), Laura (Empire), Hugo (Meta), Julio (Battle) |
| Production | 3 | Tim (Meta + SD), Brann (Empire + Art), Thorben (Battle + Dozer). All split across 2 pods. |

### Proposed Changes / Open Roles

No open roles or proposed team changes this period.

### Notable Team Changes (Since Last Check)

- **Tiago Costa** — New hire, first milestone is M&Ms. Assigned to Metagame Pipeline B. Ramping up. Listed as "Tiago Keller" in Notion — verify correct name.
- **Gabriel Arruda** and **Marcos Loures** — Transferred from Empire to Social Dynamics for M&Ms to support multiplayer build-out. Empire drops from 3 to 1 client engineer (Henrique).

---

## 5. Team Health

### Overall Assessment

The team is in a transition period — moving from Systems Validation (primarily proving core loop) into M&Ms (adding multiplayer and meta depth). The organizational restructuring for M&Ms is significant: two engineers moved from Empire to Social Dynamics, a new hire is onboarding, and the multiplayer team is ramping from prototype to real implementation. Sprint 26 was light on tracked ClickUp work (only 6 tasks), which likely reflects a transition sprint rather than low output.

The three producers (Tim, Brann, Thorben) are each split across two pods, which is a persistent structural concern. Tim is additionally out for 5 days in S27 (4/22-5/01), creating a producer coverage gap for both Metagame and Social Dynamics during week 2.

### Highlights

- Multiplayer prototype received directional approval — gives the team clear direction and confidence
- Social Dynamics successfully onboarded 2 engineers from Empire (Gabriel, Marcos) and completed P1
- Q1 goals all tracked as "On Track" — content pipeline roadmap, core loop expansion, beta prep, multiplayer prototyping, and visual targets all progressed

### Concerns

- **Battle single-engineer bottleneck**: Jota is the sole engineer for Battle, which has 4 designers. 9 eng-sprints of work in a 7-sprint milestone. Any absence cascades everything.
- **Empire reduced to 1 engineer**: Henrique is carrying Tutorial Arch carry-over + WME (3 sprints) + Territory Map VS (2 sprints) with no backup. Sequential with no buffer beyond S32 flex.
- **Randy/Garrett Dozer split**: Both Social Dynamics engineers also handle Dozer pipeline/infra work. Unplanned interruptions affect multiplayer velocity.
- **All producers split across 2 pods**: Attention divided, especially during planning-heavy milestone start.
- **Art leadership thin in S27**: Brendan out 8/10 days, Pedro out 6/10 days. Kevin Griffith covers solo.

> **Note**: This section is based on staffing data and sprint plan analysis. Tim should add qualitative context from 1:1s, team meetings, and morale observations before distributing.

---

## 6. Blockers, Risks, Needs & Asks

### Active Blockers

- **Tutorial Architecture carry-over** (CHI-36213 in progress, CHI-36212 to do): Blocks Henrique from starting World Map Experience. Direct cascade to Territory Map VS.
- **P2 task breakdown not done** (CHI-36382 to do): Blocks Social Dynamics' 4 engineers from having clear P2 direction.
- **3 must-have features with no plan**: Audio Tooling, Art Outsourcing Pipelines, Tone/Emotion — no owner, no schedule.

### Top Risks

1. **3 of 11 M&Ms must-haves have no pod plan or owner** (Audio Tooling, Art Outsourcing, Tone/Emotion) — Risk C2 from April 7 risk evaluation. These need immediate assignment.
2. **Validation system not running** — ValidationPlan has never been formally evaluated. 12 of 17 M&Ms SHQs are NOT STARTED. We're 1 sprint in with no validation cadence established.
3. **Battle overcommitted** — 9 eng-sprints, 1 engineer, 7-sprint milestone. Actor System and Pathfinding likely overflow to Beta Prep.
4. **Empire sequential pipeline with zero buffer** — Tutorial Arch -> WME (3 spr) -> TerMap VS (2 spr) = 6 sprints, 7 available, 1 flex. Any slip cascades.
5. **Feature specs missing** — Battle HUD, WME, Territory Map VS, Obstacles all lack specs. Features starting without defined scope.
6. **Beta Launch Prep entirely undefined** — 2 sprints after M&Ms ends, "[TBD]" for all must-haves.
7. **WH-3 Monetization confidence Low, flat** — All 5 M&Ms monetization SHQs NOT STARTED. No player-facing monetization data exists.

### Needs & Asks

1. **Decision needed: Who owns the 3 unplanned must-haves?**
   - Audio Tooling Foundation → likely Dozer + Lawrence Steele
   - Art Outsourcing Pipelines → likely Art + Brann
   - Overarching Tone/Emotion → likely Art (Kevin G) + Empire (Diana)
   - *Ask: Can we assign these at the next pod leads sync?*

2. **Beta Launch Prep targets need definition**
   - We're 4 sprints away from M&Ms end and Beta Prep has zero defined must-haves. We need at least a short list of per-pod polish/stability targets.
   - *Ask: Can Holly/James provide guidance on what "beta ready" means?*

3. **Producer backup for Tim's PTO (4/22-5/01)**
   - Tim is out for a full week + 1 day. Metagame and Social Dynamics need a decision-maker.
   - *Ask: Can we designate Brann or Thorben as backup for Tim's pods?*

### Open Questions

- When will Q2 QVR goals be formally set? This report uses M&Ms must-haves as proxy goals.
- Should we define SHQs for BHQ-E4 (instant gratification), or explicitly defer/deprioritize it?
- SHQ4-10 (paper economy model confidence) — this should be answerable without engineering. When does Leonard/Chris plan to tackle it?
- FTUE Friction — is this engineering work or design-only? Who owns the scope definition?

---

## Data Sources & Freshness

| Source | Date | Notes |
|--------|------|-------|
| ClickUp S26 (Yodel Yaks) | 2026-04-08 | 6 tasks, live pull |
| ClickUp SHQ Tracker | 2026-04-08 | 20 entries, live pull |
| Risk Evaluation | 2026-04-07 | First evaluation, comprehensive |
| ValidationPlan.md | 2026-04-01 | Last updated, never formally evaluated |
| Roadmap | 2026-03-27 | 12 days old |
| Capacity | 2026-03-30 | 9 days old |
| Sprint 27 Preview | 2026-04-08 | PTO + ClickUp data current |
| Q2 QVR Goals | Not set | Template only |
