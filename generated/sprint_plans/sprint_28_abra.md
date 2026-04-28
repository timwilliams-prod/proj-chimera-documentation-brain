---
Sprint: Abra 28
Dates: 4/28 - 5/12
Working Days: 10 (May 1 confirmed Brazil holiday)
Holidays: May 1 (Friday) — Workers' Day / Labor Day (Brazil national holiday, affects BR team members)
Milestone: M&Ms (Multiplayer & Meta) — Sprint 3 of ~7
Mode: Kickoff
Generated: 2026-04-24
---

# Sprint 28: Abra — KICKOFF

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 3 of ~7** in this milestone. **First sprint of M&M Checkpoint 2 (4/28-5/25)** for Battle and Dozer.
**Working Days**: 10 (Apr 28 Tue – May 11 Mon; May 12 Tue is S29 kickoff)
**ClickUp List**: `901326732674`

> **Kickoff Mode**: This is the final plan for Sprint 28. ClickUp tasks will be created in Product Backlog and added to the sprint list. S27 carry-over has been verified: CHI-36575 (Elise, in progress) and CHI-36250 (Chris, to do).

---

## Sprint Overview

### Milestone Goals — M&Ms (Multiplayer & Meta)
- Multiplayer foundations playable in internal playtests by end of M&Ms
- Territory Map vertical slice proves scale + strategy/conquest connection (SHQ3-1, SHQ3-2)
- Battle HUD Beta Overhaul reaches beta quality bar (BHQ-B2)
- UI Foundation core systems shipped for all feature UIs
- At least one Metagame Depth system playable
- Optimization + compliance prep for beta
- 6 Starter Heroes — designed and arted
- Narrative and Tutorial tooling functional for designers

### M&M Checkpoint 2 Goals (4/28 – 5/25)

Sourced from each pod's `planning/pods/{pod}/milestone_mms.md` Checkpoint Goals section. CP2 spans S28 + S29 (S30 starts inside CP3) — these are what each pod has committed to landing by **5/25**.

- **Empire**: World Map Experience eng implementation kicked off (Henrique on Multiple Nodes per Territory)
- **Empire**: Territory Map vertical slice validation — 2D push, 3D assets, map decoration, performance evaluation against current progress (Guilherme L / Thiago S / Marcos T)
- **Empire**: Map Content variety expanded to support WME testing
- **Metagame**: Pipeline A — UI Foundation supports 2+ pod screens in active use; cross-pod adoption pattern proven
- **Metagame**: Pipeline B — Building Upgrades shipped; Empire Progression Tree underway
- **Battle**: **Battle HUD Implementation** (Jota eng + Miguel Duran cross-pod UI art integration)
- **Battle**: Unit content cadence steady — no Battle pod blockers from art (Ben/Felipe/Tony/Vini active)
- **Battle**: **Pathfinding and Obstacles Implementation**
- **Social Dynamics**: **In-client multiplayer baseline functionality** (Phase 2 wrap + Phase 3 kickoff + dev UI playable)
- **Dozer**: Build Pipeline Review kicked off — improvements scoped and starting to land
- **Dozer**: Compliance (OneTrust, Age Gate) implementation underway

### Active Focus This Sprint
- **WME — Multiple Nodes per Territory** eng kickoff (Empire, SHQ4-3 / SHQ4-4) → *Empire CP2 #1*
- **Territory Map vertical slice push** — Guilherme L (env concept) + Thiago S (3D blockouts/decoration) + Marcos T (Optimization Review) → *Empire CP2 #2*
- **Battle HUD Implementation** begins — Danny + Jota eng + Miguel Duran cross-pod UI art (Battle, SHQ4-1) — Sprint 1 of 4 (spans CP1 and CP2; UX/Design Review in CP1, implementation in CP2) → *Battle CP2 #1*
- **Actor System Overhaul Phase 2** — Jota + Ben (Phase 1 complete in S27, 4 phases total) → *Battle ongoing*
- **Unit Content + Affinity Swap** — Hero pipeline (5 heroes in flight: Toshoia concept, Merrin 3D/rig, Trench Knight anim/VFX, Mecha Saboteur concept kickoff) + Design Kits wrap (12 M&M heroes) + Ranged Bot → *Battle CP2 content*
- **UI Foundation Sprint 3 of 6** (Metagame, Pipeline A) → *Metagame CP2 #1 (laying groundwork)*
- **Building Upgrades (Meta Depth Phase 1)** eng kickoff (Metagame, Pipeline B) → *Metagame CP2 #2*
- **SD in-client multiplayer baseline** — P2 wrap (Loures/Gabriel/Randy) + dev UI v1 (Randy) → *SD CP2 #1 (P3 kickoff still uncovered)*
- **Dozer CP2** — EKS parallel workflows (Derek, continues from S27) + Build Pipeline Review + Compliance (One Trust spike, Age Gate) + UI Framework V2 Full kicking off → *Dozer CP2 #1, #2, #3*
- **Yura WME UX handoff package** before 5/11 maternity leave → *protects Empire CP2/CP3 continuity*
- **Map Content + Battle/Unit Content pipelines** continue (SHQ3-1) → *Empire + Battle CP2 content*

### Validation In Flight
- **SHQ3-1** — Map content pipeline validated at target production rate (Empire)
- **SHQ3-2** — Empire strategy layer and tile-level conquest feel connected (Empire)
- **SHQ3-3** — Map → hero progression validation, IN PROGRESS (Empire)
- **SHQ4-1** — HUD strategic + tactical play / Battle HUD Beta Overhaul (Battle)
- **SHQ4-3** — World Map Experience: territory readability (Empire)
- **SHQ4-4** — World Map Experience: multiple nodes per territory (Empire)

---

## Milestone Phase Transitions Hitting This Sprint

Sprint 28 is a **transition sprint** for multiple pods. Three big handoffs hit at the same time:

| Pod | Transition | Pre-condition | Risk |
|-----|------------|---------------|------|
| Empire | Tutorial Migration → **WME Eng begins** (Multiple Nodes per Territory) | Tutorial Node Migration completes in S27; WME spec ready | **S27 plan flagged Tutorial won't fully complete in S27**. WME eng start may proceed against partial migration state. |
| Battle | UX/Design Review (CP1) → **Battle HUD Implementation begins** (4-sprint span CP1→CP2, implementation in CP2 starting S28) | Battle HUD Design Doc ([CHI-35036](https://app.clickup.com/t/869bvfcym)) finalized in CP1 | UX and Design Review completed in CP1. First pass implementation with Danny + Jota begins S28. |
| Dozer | M&M CP1 → **CP2 starts** (Build Pipeline, Compliance, UI Framework V2 Full) + EKS continues | EKS parallel workflows setup continues from S27; UI Framework V2 Support wraps | EKS work continues into S28 (Derek). CP2 features kick off alongside EKS continuation. |

---

## PTO / OOO Summary (Apr 28 – May 11)

Pulled from Lotus OOO calendar `c_3992c42a3...`.

| Person | Pod | Dates Out | Days Lost | Avail Days | Impact |
|--------|-----|-----------|-----------|------------|--------|
| Tim Williams | Metagame / SD | 4/28-5/01 (returning Mon 5/4) | 4 | **6** | **Producer gap week 1** for Metagame + Social Dynamics. Continuation of S27 PTO. |
| Brendan Cheatham | Cross-pod (Assoc. AD) | 4/28-5/02 (returning Mon 5/4) | 4 | **6** | Assoc. AD missing first half of sprint. Continuation of S27 PTO. Kevin Griffith covers solo cross-pod art direction for week 1. |
| Bruno Bacelar | Social Dynamics | 5/6-5/15 (vacation) | 4 | **6** | Networking out for back half. Multiplayer Networking track impact. |
| Vinod Rams | Battle (Art) | 5/1, 5/4 | 2 | **8** | Hero concept work briefly slowed. |
| Yura Rusin | Empire (UX) | Dr appts 4/28, 5/1, 5/4, 5/7 + **Maternity leave starts 5/11** | ~1 sprint day + 1 maternity day | **9** (effective) | **MAJOR DOWNSTREAM**: Yura on maternity leave from 5/11 through 6/20. Loses last 1 day of S28 + ALL of S29, S30, S31 (most of M&Ms remainder). Empire WME UX must complete before 5/11 or transition to backup. |
| Elise Cole | Empire | 4/28 (Mon) | 1 | **9** | Misses first day of sprint. |
| Thiago Saraiva | Empire (Art) | 4/30 (Wed) | 1 | **9** | Empire 3D artist. May 1 also pending verification. |
| Brann Livesay | Empire | 5/8 (Fri) | 1 | **9** | Producer minor. |

**Partial Appointments** (1-2 hrs, minimal impact):
- Henrique Lima: 4/29, 5/6 (Wed mornings)
- Lincoln Li: 4/30, 5/7 (gymnastics, ~1 hr)
- Vishaal Gupta: 4/30, 5/7 (1 hr each)

**Holidays — VERIFY BEFORE KICKOFF**:
- **May 1 (Friday) — Workers' Day**. Observed in Brazil (Dia do Trabalhador) and most of the world. Affects 18+ BR-based team members. **Verify Fortis policy** for US/Canada (typically not observed in US, observed in some Canadian provinces). If Brazil-wide observance, BR team loses 1 day each (Henrique, Jota, Laura, Hugo, Julio, Bruno Freitas, Marcos Teles, Marcos Loures, Gabriel Arruda, Guilherme Quizzini, Thiago Saraiva, Guilherme Lascasas, Pedro Sarraf, Danny Oliveira, Alessandro Oliveira, Bruno Bacelar, Thorben Novais, Felipe Chaves, Vini Muniz, Tiago Costa, Ben Clair partial, Vinod Rams already PTO).

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Henrique De Lima (sole client eng)
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- **WME — Multiple Nodes per Territory** engineering kickoff (Henrique, Sub-effort 1 of 3) → *advances Empire CP2 #1* — SHQ4-3, SHQ4-4
- **WME — Multiple Nodes per Territory spec finalized** in week 1 (Diana) → *advances Empire CP2 #1* — SHQ4-3, SHQ4-4
- **Map Content pipeline continues: T5-6 edits, T7-8 creation** (Jacob, Elise) → *advances Empire CP2 #3* — SHQ3-1
- **Territory Map Vertical Slice** (Gui, Thiago, KG)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Diana Vasilescu | Design | 10 | 1. WME spec finalization: Multiple Nodes per Territory (support Henrique) 2. Map Content design support 3. Narrative design and planning for the second story arc | Critical week-1 design alignment with Henrique. |
| Jacob Siegel | Design | 10 | 1. T7 implementation 2. Any remaining ZZ Player Journey/CG follow-ups | Carry-over watch from [CHI-36411](https://app.clickup.com/t/86agp9g9c) family if not closed in S27. |
| Elise Cole | Design | **9** | 1. **Figma Map agentic research** ([CHI-36575](https://app.clickup.com/t/86agw4bfz)) — primary 2. T8 Design Prep ([CHI-36576](https://app.clickup.com/t/86agw4bwz)) — lower priority 3. WME design support | **Out 4/28 (first day)**. Carry-over from S27 confirmed continuing. Agentic research is the higher-priority track. |
| Yura Rusin | UX | **9** | 1. WME UX — Sub-effort 1 (multiple nodes) & 2 (game modes) wireframes/flows + open Qs log 2. Prep for OOO time + handoff to Lina | **Maternity leave starts 5/11** — loses sprint day 10 + all of M&Ms remainder (S29-S31). Sub-effort 3 deliberately left to Diana as flex room for iterations. |
| Henrique De Lima | Eng | **9** | 1. **WME — Multiple Nodes per Territory implementation** | **Off May 1 (BR Workers' Day, confirmed)**. Sole client engineer. Partial appts 4/29, 5/6. Tutorial Migration parked — Henrique focused on WME. Spec not 100% ready at sprint start — week-1 alignment with Diana required. |
| Laura Santana | QA | **9** | 1. WME smoke-test prep 2. Bug verification | **Off May 1 (BR Workers' Day)**. Tutorial QA dropped — Tutorial work parked. |
| Marcos Teles | Tech Art | **9-10** | 1. **Territory Map Optimization Review** (collab w Pedro) 2. Water VFX/Shader exploration | May 1 verify. Empire-embedded artist. |
| Guilherme Lascasas | 2D Env Concept | **9-10** | 1. Territory Map Visual Target assist 2. WME asset support | Empire-embedded artist. |
| Thiago Saraiva | Senior 3D | **9** | 1. Territory Map vertical slice tile creation 2. WME asset support | **Out 4/30**. May 1 also pending verification (if also off, would be 8 days). Empire-embedded artist. |
| Brann Livesay | Producer | **9** | 1. Empire production (incl. Empire-embedded art, Tim OOO coverage for Meta Pod) | Out 5/8. |

### ClickUp Ticket Summary (proposed)

- **SHQ4-3 / SHQ4-4: World Map Experience** (Epic — confirm exists or create)
  - WME Sub-effort 1: Multiple Nodes per Territory — Engineering (Henrique)
  - WME Sub-effort 1: Multiple Nodes per Territory — Design spec finalization (Diana — must close week 1)
  - WME Sub-effort 1: Multiple Nodes per Territory — UX final wireframes + flows (Yura — handoff package)
  - WME Sub-effort 2: Main Menu UX/UI — UX final wireframes + flows (Yura — handoff package)
  - WME Open Questions / Decisions Log (Yura — handoff package)
- **Tutorial Migration — PARKED**, no trickle to other engineers; revisit when designer tooling is re-prioritized:
  - [CHI-36213](https://app.clickup.com/t/86aga1m3a) Tutorial Arch - Orchestration (parked)
  - [CHI-36212](https://app.clickup.com/t/86aga1j5p) Tutorial Arch - Triggering (parked)
  - [CHI-36381](https://app.clickup.com/t/86agjz596) Tutorial Node Rewrites (parked)
- **Carry-over from S27** (confirmed continuing)
  - [CHI-36575](https://app.clickup.com/t/86agw4bfz) Figma Map agentic research (Elise — primary)
  - [CHI-36576](https://app.clickup.com/t/86agw4bwz) T8 Design Prep (Elise — continues into T8 Implementation, lower priority)
- **Standalone**
  - Map Content - Sprint 28 (Jacob/Elise, ongoing)

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Henrique (3), Elise Cole (2)
- [x] **Past Sprint Cleanup — will we have to deal with these?** Tutorial Arch (3) PARKED. Elise's two carry-overs continue: Figma agentic research is primary; T8 Design Prep continues into T8 Implementation as lower priority.
- [x] **Tutorial Migration trickle plan** — **PARKED entirely** until designer tooling is re-prioritized. No engineer pickup planned.
- [x] **Is WME Multiple Nodes per Territory spec ready** for engineering kickoff? Not yet, but **Diana commits to getting it ready in time**. Plan: spec finalization week 1, deep eng once locked.
- [x] **Yura maternity coverage**: **No embedded Empire UX coverage post-5/11**. Lina supports the project but is on Meta. **Diana absorbs UX duties** for WME Sub-efforts 2 & 3.
- [x] **WME UX handoff package** — Sub-effort 1 final wireframes + flows, Sub-effort 2 final wireframes + flows, open Qs / decisions log. Sub-effort 3 intentionally left as flex room for iteration.
- [x] **May 1 Brazil Labor Day** — **Henrique is OFF** (BR holiday observed). Same applies to Laura.

### Key Risks
- **No embedded Empire UX after 5/11** — Diana now owns design + UX for WME Sub-efforts 2 & 3 alongside spec/lead duties. Highest pod-level risk for M&Ms remainder. Watch Diana's load in S29+.
- **WME spec not yet ready at sprint start** — Diana committed to closing the gap in week 1; eng-kickoff slips by a few days are expected. Henrique should have a scoping/exploration backup in week 1 to absorb any spec lag.
- **Tutorial Migration parked** — three open tickets are now stale. Owner needed for re-prioritization decision (probably at next milestone planning).
- **Henrique sole engineer + spec catch-up** = first-week risk; Diana–Henrique alignment is the critical path.
- **May 1 BR Workers' Day** — Henrique and Laura confirmed off. Empire effective sprint = 9 days for eng + QA.

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Guilherme Quizzini (Pipeline A — UI Foundation), Tiago Costa (Pipeline B — Building Upgrade Implementation)
**Eng Lead**: Dan Dupuis (planning capacity) | **QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- **UI Foundation** (Pipeline A, Sprint 3 of 6) — Quizzini continues. Sub-feature focus TBD.
- Continue Meta Depth design/UX maturation (Leonard, Kevin) — especially Building Upgrades to unblock Tiago
- **Building Upgrades (Meta Depth Phase 1)** — Tiago kicks off as next Pipeline B feature

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Leonard Perez | Design | 10 | 1. Meta Depth design progression (Building Upgrades, EPT, Combat Research Tree) 2. Commercial plan continuation | Tim out week 1 — Leonard may drive design decisions independently. |
| Christopher Fidalgo | Design | 10 | 1. Narrative/Tutorial design 2. S27 carry-over ([CHI-36250](https://app.clickup.com/t/86agcpt61) T5/T6 rewards if still open) 3. Add source of Gacha scrolls to game economy | |
| Kevin Ligon | UX | 10 | 1. UI Foundation UX 2. Meta Depth UX (Building Upgrades, EPT) 3. Battle HUD UX support cross-pod | UI Foundation primary. Meta Depth needs UX to unblock Pipeline B. Next up for Kevin = Scripted Sequences |
| Dan Dupuis | Eng Lead | 10 | 1. UI Foundation oversight 2. Empire eng lead support (WME kickoff) | Planning capacity only. |
| Guilherme Quizzini | Eng | **9-10** | 1. UI Foundation (Pipeline A, Sprint 3) | May 1 Labor Day verify. Dedicated to UI Foundation for full milestone: Hero Screen is coming along, Gear will likely be next unless we want to re-prioritize |
| Tiago Costa | Eng | **9-10** | 1. **Building Upgrades (Meta Depth Phase 1) — Pipeline B kickoff** | May 1 Labor Day verify. New hire — ensure clean spec + design handoff. |
| Miguel Duran | UI Art | 10 | 1. Territory Map UI asset finalization 2. Building Upgrades UI Art 3. Cross-pod UI art (Battle HUD, WME) 4. Collaborating with KevinL on Scripted Sequence UI Art Exploration | Shared resource |
| Hugo Hideo | QA | **9-10** | 1. Hero Gacha v1 QA closeout (if S27 didn't finish) 2. UI Foundation QA | May 1 verify. |

### ClickUp Ticket Summary (proposed)

- **No SHQ mapped** — UI Foundation SHQ linkage open from S26
  - UI Foundation - Sprint 3
    - UI Foundation - UX (Kevin)
    - UI Foundation - Engineering (Guilherme)
    - UI Foundation - UI Art (Miguel)
- **Pipeline B — Building Upgrades (Meta Depth Phase 1)**
  - Building Upgrades - Engineering kickoff (Tiago)
  - Building Upgrades - UX (Kevin Ligon)
  - Building Upgrades - Design (Leonard)
  - Hero Gacha v1 close-out if needed (Tiago, Hugo QA — spillover only)
- **Carry-over to confirm**
  - [CHI-36250](https://app.clickup.com/t/86agcpt61) T5/T6 rewards (Chris, if not closed in S27)

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Christopher Fidalgo (1)
- [ ] **Past Sprint Cleanup — Christopher Fidalgo (1 — CHI-36250 T5/T6 rewards)**
- [ ] **Building Upgrades spec readiness** — is Meta Depth Phase 1 design + UX ready for Tiago's eng kickoff?
- [ ] **UI Foundation Sprint 3 scope** — which sub-features?
- [ ] **Tim coverage week 1** (4/28-5/1) — backup decision-maker for Metagame + SD?
- [ ] UI Foundation SHQ linkage (carried from S26 and S27)

### Key Risks
- **Tim out 4 days at sprint start** — Metagame decisions may stall. Front-load week-1 alignment before 4/28.
- **Building Upgrades design readiness** — if Meta Depth Phase 1 isn't ready, Tiago risks idle time on his second feature.
- May 1 Labor Day affects Guilherme, Tiago, Hugo (Brazil).

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- **Affinity Swap** (Felipe, Dylan, Lincoln will provide required color adjustments)
- **Battle HUD Beta Overhaul - Implementation begins** (Danny + Jota, Sprint 1 of 4 — spans CP1 and CP2; UX/Design Review completed in CP1, implementation starts in CP2) — SHQ4-1
- **Unit Content**
  - **Art**
    - Implement Ranged Bot (Portraits, cross-pod Kevin/Yura)
    - New Hero Concept (Toshoia) — Vinod continues from S27
    - New Hero 3D (Merrin) — Felipe continues from S27
    - New Hero Animation (Trench Knight) — Tony continues from S27
    - New Hero VFXs (Trench Knight) — Alessandro and Danny continue from S27
    - New Hero Concept (Mecha Saboteur) — Vini starts in S28 (2D Concept Kick-Off scheduled: 4/29)
    - New Hero Rig (Merrin) — Ben starts in S28
  - **Design**
    - Design Kits wrap for 12 M&M heroes (Lincoln, Nathan)
- **Actor System Overhaul** (Phase 2, Jota and Ben — continues from S27. Total of 4 phases. Phase 1 is complete in S27)
- **Obstacles** — design validation (Dylan) + early eng (per milestone plan)
- **Pathfinding & AI Improvements** — early prep work
- **Battle ENV Performance Investigate** (Danny)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Lincoln Li | Design Lead | 10 | 1. Battle HUD design support during eng implementation 2. Design Kits wrap for 12 M&M heroes (with Nathan) 3. Affinity Swap color adjustments (with Dylan, Felipe) 4. Pathfinding & AI design prep | Partial appts 4/30, 5/7 (~1 hr each). Battle HUD eng starts now — design availability for Q&A critical. |
| Nathan Hajek | Design | 10 | 1. Design Kits wrap for 12 M&M heroes (with Lincoln) 2. Unit Design & Prototype | |
| Dylan Jeffery | Design | 10 | 1. Affinity Swap (with Felipe, Lincoln provides color adjustments) 2. Obstacles design validation 3. Battle Templates | Continuation from S27. |
| Vishaal Gupta | Design | 10 | 1. Unit Content + unit balance | Partial appts 4/30, 5/7. |
| Jota Oliveira | Eng | **9-10** | 1. **Battle HUD first pass implementation - Sprint 1 of 4** (with Danny) 2. **Actor System Overhaul Phase 2** (with Ben, continues from S27) | May 1 Labor Day verify. **Solo client eng — critical path for ALL Battle eng.** Battle HUD is now the headline. Phase 1 of Actor System complete in S27. |
| Danny Oliveira | Art (VFX) | 10 | 1. **Battle HUD first pass implementation** (with Jota) 2. **New Hero VFXs (Trench Knight)** (with Alessandro, continues from S27) 3. **Battle ENV Performance Investigate** | |
| Alessandro Oliveira | Art (VFX) | **9-10** | 1. **New Hero VFXs (Trench Knight)** (with Danny, continues from S27) 2. VFX implementation | May 1 verify. |
| Vinod Rams | Art (Lead 2D Concept) | **8** | 1. **New Hero Concept (Toshoia)** (continues from S27) 2. Unit concepts | Out 5/1, 5/4. |
| Ben Clair | Art | 10 | 1. **New Hero Rig (Merrin)** (starts in S28) 2. **Actor System Overhaul Phase 2** (with Jota, continues from S27) | |
| Felipe Chaves | Art | **9-10** | 1. **Affinity Swap** (with Dylan, Lincoln provides color adjustments) 2. **New Hero 3D (Merrin)** (continues from S27) | May 1 verify. |
| Tony Bonilla | Art | 10 | 1. **New Hero Animation (Trench Knight)** (continues from S27) | |
| Vini Muniz | Art | 10 | 1. **New Hero Concept (Mecha Saboteur)** (starts in S28, 2D Concept Kick-Off: 4/29) 2. Ranged Bot implementation (Portraits, cross-pod Kevin/Yura) | |
| Julio Scarabelli | QA | **9-10** | 1. Battle HUD QA prep 2. Bug verification | May 1 verify. |
| Thorben Novais | Producer | **9-10** | 1. Battle production 2. Dozer production (CP2 starts) | May 1 verify. Two pods. |

### ClickUp Ticket Summary (proposed)

- **Affinity Swap**
  - Affinity Swap Implementation (Felipe, Dylan, Lincoln — color adjustments)
- **SHQ4-1: HUD strategic + tactical play** (Epic [CHI-36324](https://app.clickup.com/t/86aghvg71))
  - Battle HUD Implementation - Sprint 1 (Danny + Jota) — first of 4-sprint phase; first pass implementation
- **Unit Content - Art**
  - Ranged Bot Implementation (Vini — Portraits, cross-pod Kevin/Yura)
  - New Hero Concept (Toshoia) - Sprint 28 (Vinod, continuation from S27)
  - New Hero 3D (Merrin) - Sprint 28 (Felipe, continuation from S27)
  - New Hero Animation (Trench Knight) - Sprint 28 (Tony, continuation from S27)
  - New Hero VFXs (Trench Knight) - Sprint 28 (Alessandro + Danny, continuation from S27)
  - New Hero Concept (Mecha Saboteur) - Kick-Off (Vini, starts 4/29)
  - New Hero Rig (Merrin) (Ben, starts in S28)
- **Unit Content - Design**
  - Design Kits wrap for 12 M&M heroes (Lincoln, Nathan)
- **Actor System Overhaul - Phase 2** (Epic — 4 phases total, Phase 1 complete in S27)
  - Actor System Overhaul Phase 2 - Engineering (Jota, Ben — continuation from S27)
- **Obstacles** (proposed Epic — confirm SHQ link)
  - Obstacles - Design Validation (Dylan)
  - Obstacles - Engineering kickoff (capacity dependent)
- **Pathfinding & AI Improvements** (proposed)
  - Pathfinding & AI - Design prep (Lincoln)
- **Battle ENV Performance**
  - Battle ENV Performance Investigate (Danny)
- **Carry-over to confirm**
  - Effect Stacking [CHI-35985](https://app.clickup.com/t/86ag15v96) (still deferred?)

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Jota Oliveira (1)
- [x] **Past Sprint Cleanup — will we have to deal with these?** Lincoln Li (CHI-35036 Battle HUD DD completed in CP1), Jota Oliveira (1 — CHI-35985 Effect Stacking)
- [x] **Battle HUD Design Doc finalized?** [CHI-35036](https://app.clickup.com/t/869bvfcym) completed in CP1. UX and Design Review finished; ready for implementation.
- [x] **Did Actor System Overhaul Phase 1 complete in S27?** Yes, Phase 1 complete. Phase 2 continues in S28 with Jota and Ben.
- [ ] **Obstacles eng start S28 or S29?** Milestone plan says CP2 (which spans 2 sprints). Capacity-constrained on Jota.
- [ ] **Pathfinding & AI eng start** — same Jota dependency.
- [ ] **4 features × ~9 eng-sprints in 6 sprints** (capacity note from milestone plan) — does this hold? Battle HUD (4) + Obstacles (1) + Pathfinding (2) + Actor Phase 2/3/4 = tight capacity.
- [ ] May 1 Labor Day — Jota off?

### Key Risks
- **Battle HUD first pass implementation** — Danny + Jota collaboration begins; Actor System Phase 1 complete in S27, Phase 2 continues.
- **Actor System Overhaul multi-phase** — 4 phases total, Phase 2 continues in S28 (Jota + Ben). Phases 3-4 need to be scheduled across remaining sprints.
- **CP2 capacity over-subscribed** — milestone plan flagged ~9 eng-sprints in 7-sprint milestone. CP2 specifically loads Battle HUD (4 sprints) + Actor System Phase 2 + Obstacles + Pathfinding with limited engineering capacity (Jota solo client eng).
- May 1 Labor Day reduces Jota by another day.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Gabriel Arruda, Marcos Loures, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- **AI Prototype Playtesting, Feedback, Iterations** (Paul, Bruno)
- **Continue Phase 2: Tile Ownership/States/Visualization, Embark Flow, and Multiplayer Map Instance creation, listing, joining** (Loures, Gabriel, Randy)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Paul Flores | Design | 10 | 1. AI Prototype Playtesting 2. P2 wrap design support | |
| Marcos Loures | Eng | **9-10** | 1. **Tile Ownership** 2. **Tile States** 3. **Map Visualization** | May 1 verify. AA-target P2 wrap-up. |
| Gabriel Arruda | Eng | **9-10** | 1. **Embark Flow (Dock / Hero / Troop selection)** 2. **Battle** (stretch if time) | May 1 verify. |
| Randy Pasion | Eng | 10 | 1. **Multiplayer Map Instance Creation, list, join, dev UI v1** | Dozer split risk. |
| Garrett Eidsvig | Eng | 10 | 1. MP infrastructure (P2 wrap support) | Dozer split risk. [CHI-35564](https://app.clickup.com/t/86afj74z5) status to verify. |
| Bruno Bacelar | Eng | **6** | 1. Multiplayer Networking — front-load weeks 1-1.5 | **Out 5/6-5/15** for vacation. Loses last 4 sprint days. Networking work at risk in week 2. |

### ClickUp Ticket Summary (proposed)

- **Multiplayer Foundation — Phase 2 wrap** (AA target)
  - P2: Tile Ownership (Loures)
  - P2: Tile States (Loures)
  - P2: Map Visualization (Loures)
  - P2: Embark Flow — Dock / Hero / Troop selection (Gabriel)
  - P2: Battle (Gabriel — stretch)
  - P2: Multiplayer Map Instance Creation + list + join + dev UI v1 (Randy)
  - Multiplayer Networking - Sprint 28 (Bruno — front-loaded)
  - AI Prototype Playtesting - Sprint 28 (Paul)
- **Carry-over to confirm**
  - [CHI-35564](https://app.clickup.com/t/86afj74z5) MP Backend architecture (Garrett — was in progress)

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Garrett Eidsvig (1)
- [ ] **Past Sprint Cleanup — Garrett Eidsvig (1 — CHI-35564 MP Backend architecture)**
- [ ] **Does P2 wrap fully complete in S28?** AA target depends on Loures + Gabriel + Randy landing their pieces.
- [ ] **Tim coverage week 1** for SD producer decisions (same gap as Metagame).
- [ ] **Bruno week-2 networking** — what's safe to defer or hand off while he's out 5/6-5/11?
- [ ] **Switchover assessment** — is in-client version closer to playtest-viable?
- [ ] **Gabriel's Battle stretch** — does he have time after Embark Flow, or pull forward to S29?
- [ ] May 1 Labor Day — Gabriel, Marcos, Bruno (BR) likely off.

### Key Risks
- **Bruno out 4 days at sprint end** — Multiplayer Networking pace will dip in week 2.
- **Tim out 4 days at sprint start** — back-to-back producer gap with S27.
- **AA-target P2 wrap** — three engineers each owning distinct pieces; if any slip, AA switchover slides.
- Randy/Garrett Dozer split continues.
- May 1 Labor Day reduces 3 of 5 engineers (Gabriel, Marcos, Bruno) by 1 day.

---

## Dozer (Tech Pod)

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas | **Producer**: Thorben Novais

**M&M Checkpoint 2 begins this sprint (4/28-5/25).**

### Sprint Goals
- **EKS - Setting up parallel workflows** (Derek - continues from Sprint 27)
- **Compliance (OneTrust, Age Gate)** kickoff (CP2 Sprint 1 of 2)
  - Spike: One Trust (Derek)
  - Age Gate (Bruno) - Check Unified SDK with Randy, plan Reskin with UI Kit
- **UI Framework V2 (Full)** kickoff (CP2 Sprint 1 of 2)
- **Build Pipeline Review** kickoff (CP2 Sprint 1 of 2)
- Performance/Optimization continues
- Multiplayer infra support continues

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 10 | 1. **EKS - Setting up parallel workflows** (continues from S27) 2. **Spike: One Trust** 3. UI Framework V2 (Full) oversight 4. SD eng lead duties (P2/P3) 5. Multiplayer infra | Split: Dozer + SD eng lead. EKS work continues into S28. |
| Thorben Novais | Producer | **9-10** | 1. Build Pipeline Review coordination 2. M&M roadmap maintenance 3. Battle production | May 1 verify. Two pods. |
| Bruno Freitas | Eng | **9-10** | 1. **Age Gate** (Check Unified SDK with Randy, plan Reskin with UI Kit) 2. Build Pipeline Review 3. Performance/Optimization | May 1 verify. |

### ClickUp Ticket Summary (proposed)

- **EKS - Setting up parallel workflows** (continuation from S27)
  - EKS - Parallel Workflows Setup (Derek, continues from S27)
- **Compliance (OneTrust, Age Gate)** (proposed Epic, CP2)
  - Spike: One Trust (Derek)
  - Age Gate - Check Unified SDK with Randy (Bruno)
  - Age Gate - Plan Reskin with UI Kit (Bruno)
- **UI Framework V2 (Full)** (proposed Epic, CP2)
  - UI Framework V2 - Migration kickoff (Derek + cross-pod)
- **Build Pipeline Review** (proposed Epic, CP2)
  - Build Pipeline Review - Audit & Plan (Bruno F, Thorben)
- **Standalone / ongoing**
  - Performance/Optimization - Sprint 28 (Bruno F)
  - Multiplayer infra support (Derek)

### Open Questions
- [x] **Did EKS deployment complete in S27?** EKS work continues into S28 with parallel workflows setup (Derek).
- [ ] **Did UI Framework V2 - UI Support (CP1) wrap?** Predecessor to V2 Full.
- [ ] **CP2 task ownership** — 3 parallel CP2 features (Build Pipeline, Compliance, UI Framework V2) + EKS continuation against 2 engineers (Derek, Bruno F). Realistic?
- [ ] **Age Gate Unified SDK verification** — Bruno needs to check with Randy on SDK status.
- [ ] May 1 Labor Day — Bruno F, Thorben off?

### Key Risks
- **CP2 over-loaded** — 3 features (Build Pipeline, Compliance, UI Framework V2 Full) + EKS parallel workflows starting/continuing with 2 engineers. Likely needs prioritization.
- Derek's split between Dozer + SD eng lead intensifies as both pods enter big phases.
- **Age Gate dependencies** — Bruno needs Randy's input on Unified SDK status before planning Reskin with UI Kit.

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Tutorial Migration PARKED → no trickle** (Empire — revisit at next milestone planning; Henrique focused on WME)
- **Battle HUD UX/Design Review (CP1) → Battle HUD Implementation kickoff** (Battle — Danny + Jota first pass)
- **EKS → Parallel Workflows setup continues** (Dozer — Derek, continuation from S27)
- **Age Gate → Unified SDK check with Randy** (Dozer — Bruno needs Randy's input before UI Kit reskin planning)
- **Building Upgrades design + UX → Tiago eng kickoff** (Metagame — Leonard / Kevin Ligon to Tiago)
- **P2 wrap pieces → AA switchover assessment** (SD — Loures + Gabriel + Randy)
- **Yura WME UX → handoff package before 5/11 maternity leave** (Empire — Sub-effort 1 + 2 wireframes/flows + open Qs log; Diana absorbs UX post-5/11)

### Shared Resource Conflicts
- **Tim Williams** (Producer): out week 1 for both Metagame and Social Dynamics. Same as S27.
- **Derek Gallant** (Eng Lead): Dozer CP2 + SD eng lead at peak intensity simultaneously.
- **Kevin Ligon** (UX): UI Foundation primary + Meta Depth + Battle HUD support (cross-pod).
- **Miguel Duran** (UI Artist): UI Foundation primary + cross-pod (Battle HUD, WME).
- **Dan Dupuis** (Eng Lead): UI Foundation oversight + Empire WME kickoff support.
- **Thorben Novais** (Producer): Battle + Dozer both ramping to CP2.
- **Kevin Griffith** (Art Director, cross-pod): solo AD coverage week 1 (Brendan out through 5/3). Setting CP2 art priorities across Empire (WME) + Battle (HUD) + Metagame (UI Foundation).
- **Brendan Cheatham** (Assoc. AD, cross-pod): Out 4/28-5/1, returns 5/4. 6 sprint days available for cross-pod art direction.
- **Pedro Sarraf** (Lead Tech Art, cross-pod / Battle from CP3): Tech art assignments across pods.
- **Lawrence Steele** (Audio, cross-pod): Sound design across pods.

### Critical Cross-Pod Risk: Yura Maternity Leave (RESOLVED)
- Empire's only UX leaves **5/11**. Affects M&Ms remainder (S29, S30, S31).
- WME has 3 sub-efforts; only Sub-effort 1 starts before Yura departs.
- **Decision**: No embedded Empire UX replacement. Lina supports the broader project but is on Meta. **Diana Vasilescu absorbs UX duties** for WME Sub-efforts 2 & 3 in addition to her design lead role.
- Yura handoff package (due before 5/11): Sub-effort 1 final wireframes + flows, Sub-effort 2 final wireframes + flows, open Qs / decisions log. Sub-effort 3 left as iteration flex room.
- **Open watch**: Diana's load in S29+ — if WME UX eats into her design lead bandwidth, scope cut conversation may need to happen at next milestone checkpoint.

### Producer Coverage — Week 1 Gap (continuing from S27)
- **Tim out 4/28-5/1** (4 days) for Metagame + Social Dynamics.
- Backup decision-maker still needed (carried question from S27).

### May 1 Workers' Day — VERIFY
- Brazilian holiday (Dia do Trabalhador). Affects all 18+ BR-based team members.
- US/Canada policy varies — confirm with Holly/HR.
- If observed studio-wide for BR team: 1-day capacity hit on the heaviest day of week-1 work.

### Milestone Context
- **Sprint 3 of M&Ms** — entering the bulk of milestone work.
- **CP2 begins for Battle and Dozer** (4/28-5/25).
- Two simultaneous eng kickoffs (WME, Battle HUD) = highest-risk transition sprint of the milestone so far.
- S28 ClickUp list **empty** — needs population at kickoff.

---

## Checkpoint Coverage — M&M Checkpoint 2 (4/28 – 5/25)

S28 is the first sprint of CP2 (only Empire and Metagame had CP2 work pre-existing; Battle and Dozer **enter** CP2 now). This panel shows whether each pod's checkpoint goals have meaningful sprint work behind them in S28.

| Pod | Checkpoint Goal | S28 Active Work | Status |
|-----|-----------------|------------------|--------|
| Empire | WME eng implementation kicked off (Multiple Nodes per Territory) | WME Sub-effort 1 eng kickoff — Henrique | ✅ On Track |
| Empire | Territory Map vertical slice validation (2D push, 3D assets, decoration, perf eval) | Guilherme L env concept + Thiago S 3D blockouts + Marcos T Optimization Review | ✅ On Track |
| Empire | Map Content variety expanded for WME testing | Jacob + Elise on Map Content / T8 prep | ✅ On Track |
| Metagame | UI Foundation supports 2+ pod screens | Sprint 3 of 6 in flight (still building toward consumability) | ⚠️ Light |
| Metagame | Building Upgrades shipped; EPT underway | Building Upgrades eng kickoff — Tiago | ✅ On Track |
| Battle | Battle HUD Implementation (eng + asset integration) | Sprint 1 of 4 begins — Danny + Jota; Miguel Duran cross-pod UI art | ✅ On Track |
| Battle | Unit content cadence steady — no art blockers | Ben/Felipe/Tony/Vini active | ✅ On Track |
| Battle | Pathfinding and Obstacles Implementation | Lincoln/Nathan design prep + Obstacles design validation only — no eng start | ⚠️ Light |
| Social Dynamics | In-client multiplayer baseline functionality (P2 wrap + P3 kickoff + dev UI playable) | Loures/Gabriel/Randy AA-target P2 wrap + dev UI v1; Phase 3 not yet started | ⚠️ Light |
| Dozer | Build Pipeline Review kicked off | Bruno F + Thorben — Audit & Plan | ✅ On Track |
| Dozer | Compliance (OneTrust, Age Gate) underway | Derek — kickoff (capacity-constrained) | ⚠️ Light |

**Summary**: **7 of 11** CP2 goals (64%) have ✅ on-track sprint work in S28. **4 are ⚠️ light**, **0 are ❌ uncovered**. Note: 2 previously-uncovered goals (Pathfinding eng kickoff, SD Phase 3 kickoff) are now folded into broader merged goals — the underlying risks remain (see Top Risks).

**At-Risk Within Merged Goals (2 sprints remaining in CP2)**:
- ⚠️ **Battle: Pathfinding and Obstacles Implementation** — Jota fully consumed by HUD; only design prep happens in S28. Pathfinding eng start may slip to CP3. Decision needed before S29: cut, defer, or bring in support.
- ⚠️ **SD: In-client multiplayer baseline functionality** — P2 wrap and dev UI on track, but Phase 3 (Basic Game Logic) kickoff has no S28 work. P3 entry may slip to CP3 unless P2 closes cleanly.

**⚠️ Light goals to watch**: Metagame UI Foundation consumption (still in build-out), Dozer Compliance (kickoff-only this sprint).

---

## Capacity Summary

**Total Working Days**: 10 (May 1 Workers' Day pending verification — could reduce BR team to 9)

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Tim Williams | Metagame / SD | **6** | Out 4/28-5/1 |
| Brendan Cheatham | Cross-pod (Assoc. AD) | **6** | Out 4/28-5/1 (returns 5/4) |
| Bruno Bacelar | Social Dynamics | **6** | Vacation 5/6-5/15 |
| Vinod Rams | Battle (Art) | **8** | PTO 5/1, 5/4 |
| Brann Livesay | Empire | **9** | Out 5/8 |
| Yura Rusin | Empire (UX) | **9** | Maternity leave begins 5/11 (loses last day; absent ~6 weeks after) + Dr appts 4/28, 5/1, 5/4, 5/7 |
| Diana Vasilescu | Empire | 10 | |
| Jacob Siegel | Empire | 10 | |
| Elise Cole | Empire | **9** | Out 4/28 |
| Henrique De Lima | Empire | **9** | **Off May 1 (BR Workers' Day, confirmed)**; partial appts 4/29, 5/6 |
| Laura Santana | QA (Empire) | **9** | **Off May 1 (BR Workers' Day, confirmed)** |
| Leonard Perez | Metagame | 10 | |
| Christopher Fidalgo | Metagame | 10 | |
| Kevin Ligon | Metagame (UX) | 10 | |
| Dan Dupuis | Metagame | 10 | Planning capacity |
| Guilherme Quizzini | Metagame | **9-10** | May 1 verify |
| Tiago Costa | Metagame | **9-10** | May 1 verify |
| Miguel Duran | Metagame | 10 | Shared resource |
| Hugo Hideo | QA (Metagame) | **9-10** | May 1 verify |
| Lincoln Li | Battle | 10 | Partial appts |
| Nathan Hajek | Battle | 10 | |
| Dylan Jeffery | Battle | 10 | |
| Vishaal Gupta | Battle | 10 | Partial appts |
| Jota Oliveira | Battle | **9-10** | May 1 verify. Solo eng. |
| Julio Scarabelli | QA (Battle) | **9-10** | May 1 verify |
| Thorben Novais | Battle / Dozer | **9-10** | May 1 verify |
| Danny Oliveira | Battle (Art) | 10 | |
| Alessandro Oliveira | Battle (Art) | **9-10** | May 1 verify |
| Ben Clair | Battle (Art) | 10 | |
| Felipe Chaves | Battle (Art) | **9-10** | May 1 verify (BR nationality) |
| Tony Bonilla | Battle (Art) | 10 | |
| Vini Muniz | Battle (Art) | **9-10** | May 1 verify |
| Paul Flores | Social Dynamics | 10 | |
| Gabriel Arruda | Social Dynamics | **9-10** | May 1 verify |
| Marcos Loures | Social Dynamics | **9-10** | May 1 verify |
| Randy Pasion | Social Dynamics | 10 | Dozer split risk |
| Garrett Eidsvig | Social Dynamics | 10 | Dozer split risk |
| Derek Gallant | Dozer | 10 | Also SD eng lead |
| Bruno Freitas | Dozer | **9-10** | May 1 verify |
| Marcos Teles | Empire (Tech Art) | **9-10** | May 1 verify. Empire-embedded artist. |
| Guilherme Lascasas | Empire (2D Env) | **9-10** | May 1 verify. Empire-embedded artist. |
| Thiago Saraiva | Empire (3D) | **9** | Out 4/30; May 1 also pending. Empire-embedded artist. |
| Kevin Griffith | Cross-pod (Art Director) | 10 | Solo AD coverage week 1 |
| Pedro Sarraf | Cross-pod (Lead Tech Art) | 10 | Battle from CP3+ |
| Lawrence Steele | Cross-pod (Audio) | 10 | |
| Hafiz Kassam | QA (Lead) | 10 | |

---

## Preview Summary

### Top Risks

1. **Within Battle's "Pathfinding and Obstacles Implementation" CP2 goal** — Pathfinding has no S28 eng work and Obstacles is design validation only; Jota fully consumed by HUD. Decision needed before S29: cut, defer to CP3, or bring in support.
2. **Within SD's "In-client multiplayer baseline functionality" CP2 goal** — Phase 3 (Basic Game Logic) has no S28 work; pod still wrapping P2. P3 kickoff likely slips to CP3 unless P2 closes cleanly.
3. **Empire has no embedded UX after 5/11** — Diana absorbs UX duties for WME Sub-efforts 2 & 3 alongside design lead role. Highest single-pod risk for M&Ms remainder.
4. **WME spec not yet ready** — Diana committed to closing the gap in week 1, but Henrique's eng kickoff begins against a still-maturing spec.
5. **Triple eng kickoff sprint** — Battle HUD, WME, and Dozer CP2 (3 features) all begin S28. Highest transition load of M&Ms so far.
6. **S27 carry-over uncertainty** — Actor System Overhaul Phase 1 complete in S27, Phase 2 continues (4 phases total). EKS (Dozer) continues into S28 with parallel workflows setup. Battle HUD DD completed in CP1. Tutorial Migration is **PARKED** entirely — owner needed for re-prioritization decision (next milestone planning).
7. **Tim out 4 days at sprint start** — Metagame + Social Dynamics producer gap, second sprint in a row. Backup decision-maker still not identified.
8. **Brendan Cheatham out 4 days at sprint start** — Kevin Griffith solo cross-pod art direction for week 1, second sprint in a row.
9. **Bruno Bacelar out last 4 sprint days** — Multiplayer Networking dips in week 2.
10. **Battle CP2 over-subscribed** — 3 features (HUD, Obstacles, Pathfinding) against 1 engineer (Jota).
11. **Dozer CP2 over-subscribed** — 3 features (Build Pipeline, Compliance, UI Framework V2) against 2 engineers.
12. **May 1 Workers' Day** — Empire confirmed observed (Henrique, Laura off). Other BR pods pending Holly/HR verification.
13. **S28 ClickUp list empty** — needs population before Tuesday 4/28 kickoff.

### Open Questions (resolve before kickoff)

**Empire — RESOLVED 2026-04-21**:
- [x] **Yura maternity coverage**: No embedded Empire UX after 5/11. Diana absorbs UX for WME Sub-efforts 2 & 3.
- [x] **Tutorial Migration trickle plan**: PARKED entirely — no engineer trickle.
- [x] **WME spec readiness**: Not yet, but Diana commits to readiness in time (week-1 finalization).
- [x] **WME UX handoff package**: Sub-effort 1 + 2 final wireframes/flows + open Qs/decisions log. Sub-effort 3 = flex room.
- [x] **May 1 BR Workers' Day**: Henrique and Laura confirmed off (BR holiday observed).
- [x] **Empire S27 carry-over**: Tutorial Arch (3) parked. Elise's Figma agentic research = primary; T8 Design Prep continues into T8 Implementation as lower priority.

**Open**:
1. [ ] **Tim week-1 backup**: Producer coverage for Metagame + SD (4/28-5/1)
2. [x] **Battle HUD Design Doc** ([CHI-35036](https://app.clickup.com/t/869bvfcym)) finalized in CP1
3. [x] **Actor System Overhaul Phase 1** complete in S27, Phase 2 continues in S28 (4 phases total)
4. [x] **EKS deployment** continues in S28 with parallel workflows setup (Derek)
5. [ ] **Building Upgrades (Meta Depth Phase 1) spec + UX readiness** — ready for Tiago's eng kickoff?
6. [ ] **UI Foundation Sprint 3 sub-feature scope**
7. [ ] **Battle CP2 prioritization** — HUD vs Obstacles vs Pathfinding under 1-engineer constraint
8. [ ] **Dozer CP2 prioritization** — Build Pipeline vs Compliance vs UI Framework V2 under 2-engineer constraint
9. [ ] **Cross-pod art priority for CP2** — Battle HUD assets vs WME assets vs UI Foundation (Kevin Griffith / Brendan Cheatham to set)
10. [ ] **May 1 Workers' Day** policy for non-Empire BR team (Metagame, Battle, SD, Dozer, Art) — verify with Holly/HR
11. [ ] **Chris Fidalgo carry-over** — [CHI-36250](https://app.clickup.com/t/86agcpt61) closed?
12. [ ] **UI Foundation SHQ linkage** (carried from S26 + S27)
13. [ ] **SD P2 wrap completion** — does the AA-target switchover land in S28?
14. [ ] **Gabriel SD Battle stretch** — fits in S28 or pulls to S29?
