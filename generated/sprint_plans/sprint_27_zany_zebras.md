---
Sprint: Zany Zebras 27
Dates: 4/14 - 4/28
Working Days: 10 (no studio-wide holidays)
Holidays: April 21 — Tiradentes (Brazil regional, affects BR team members)
Milestone: M&Ms (Multiplayer & Meta) — Sprint 2 of ~7
Mode: Preview
Generated: 2026-04-13 (updated — ClickUp refresh, carry-over/risk/OQ update)
---

# Sprint 27: Zany Zebras — PREVIEW

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 2 of ~7** in this milestone.
**Working Days**: 10 (no studio-wide holidays in this window)
**ClickUp List**: `901326453323`

> **Data freshness**: ClickUp refreshed 4/13. S26 list: 4 open tasks carrying over. ZZ sprint list still empty.
> **Changes since 4/9**: CHI-36431 (Territory Map shader) COMPLETE. CHI-36374 (animated loading) COMPLETE. CHI-36381 (Tutorial Node Rewrites) now IN PROGRESS. CHI-36411 (ZZ Player Journey) now has 6 subtasks with assignments.

### Regional Holidays
- **April 21 (Tuesday) — Tiradentes**: Brazil national holiday. Affects BR-based team members: Henrique De Lima, Jota Oliveira, Laura Santana, Hugo Hideo, Julio Scarabelli, Bruno Freitas, Marcos Teles, Marcos Loures, Gabriel Arruda, Guilherme Quizzini, Thiago Saraiva, Guilherme Lascasas, Pedro Sarraf (already OOO), Danny Oliveira, Alessandro Oliveira, Bruno Bacelar, Thorben Novais, Felipe Chaves. Each loses 1 working day.

### PTO Summary

| Person           | Pod           | Dates Out        | Days Lost | Avail Days | Impact                                         |
| ---------------- | ------------- | ---------------- | --------- | ---------- | ---------------------------------------------- |
| Tim Williams     | Metagame / SD | 4/22-5/01        | 5         | **5**      | Producer coverage gap week 2 (full week + Mon) |
| Brendan Cheatham | Art           | 4/17-5/02        | 8         | **2**      | Major — Assoc. Art Director mostly unavailable  |
| Pedro Sarraf     | Art           | through 4/21     | 6         | **4**      | Returns 4/22, limited availability             |
| Danny Oliveira   | Battle (Art)  | 4/16-4/17, 4/23  | 3         | **7**      | VFX pipeline impact; extra day for local holiday 4/23 |
| Kevin Ligon      | Metagame (UX) | 4/23-4/24        | 2         | **8**      | UI Foundation UX minor impact week 2           |
| Diana Vasilescu  | Empire        | 4/14             | 1         | **9**      | Misses sprint start                            |
| Brann Livesay    | Empire / Art  | 4/16             | 1         | **9**      | Travel recovery, minor                         |
| Guilherme Lascasas | Art (Empire) | 4/13-4/14       | 1         | **9**      | Returns 4/15, loses sprint day 1 only          |

**Partial Appointments** (1-2 hrs, minimal impact):
- Henrique De Lima: 4/15, 4/22
- Yura Rusin: 4/14, 4/16, 4/21, 4/22, 4/28 (multiple Dr appointments — heavier than previously noted)
- Vishaal Gupta: 4/16, 4/23
- Lincoln Li: 4/16, 4/23 (gymnastics)
- Jacob Siegel: 4/14
- Ben Clair: 4/22

**Brazil Holiday (April 21)**: 18 team members lose 1 day each. See Regional Holidays section above.

---

## Systems Validation Playtest Results — Week 1 Triage

**CRITICAL**: Three playtest result sets arrive in **Week 1** (4/14-4/17) and will require cross-pod triage.

### Incoming Playtest Results

| Playtest | Build | Results Date | Type | Notes |
|----------|-------|--------------|------|-------|
| **Internal Fortis-Wide Playtest** | SV Milestone | **4/14** (Tuesday, sprint start) | Internal | Full team feedback |
| **Superuser Longitudinal Playtest** | SV Milestone | **4/14** (Tuesday, sprint start) | External | Preliminary results |
| **PTC External Playtest** | SV Milestone | **4/17** (Friday, week 1) | External | Final external validation for SV |

### Triage Impact

- **Week 1 capacity hit**: Playtest results review, discussion, and triage will consume time across all pods
- **Priority shifts possible**: High-severity findings may require immediate bug fixes or design pivots
- **Cross-pod coordination**: Results may affect Battle, Empire, Metagame, and Social Dynamics features
- **SHQ implications**: SV milestone SHQs (SHQ3-x series) may get updated based on playtest findings

### Triage Plan

- **4/14 (Tuesday)**: Review Internal Fortis-Wide + Superuser preliminary results
- **4/17 (Friday)**: Review PTC External results
- **Week 1**: Triage critical/high-priority findings, assign follow-up work
- **Week 2**: Execute on triage decisions (bug fixes, design adjustments, etc.)

> **Note**: This is the final major external validation for the Systems Validation milestone. Results will inform M&Ms feature priorities and may surface gaps that need addressing before beta.

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Henrique De Lima (sole client eng)
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- Continue **Tutorial Node Migration** engineering (Sprint 2 of 2) — complete tutorial architecture and migration work
- Continue **World Map Experience** design/UX prep — maturing UX exploration for S28 eng start (SHQ4-3, SHQ4-4)
- Continue **Map Content** pipeline (SHQ3-1)

### Individual Breakdown

| Assignee         | Discipline | Avail Days | Priorities                                             | Notes                                                                                                                       |
| ---------------- | ---------- | ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Henrique De Lima | Eng        | **9**      | 1. Tutorial Node Migration (Sprint 2 of 2) — complete CHI-36213, CHI-36212, continue tutorial eng | **Brazil holiday 4/21 = 9 days**. Sole client engineer. Partial appts 4/15, 4/22. Full sprint on Tutorial. WME eng starts S28. |
| Diana Vasilescu  | Design     | 9          | 1. World Map Experience design prep (UX exploration for S28 eng start) | Out 4/14 (sprint start day). Extra sprint for UX exploration — use this time to mature WME design.                              |
| Yura Rusin       | UX         | 10         | 1. World Map Experience UX exploration                 | Multiple partial appts (4/14, 4/16, 4/21, 4/22, 4/28). Extended UX runway — WME eng starts S28 not S27.                     |
| Jacob Siegel     | Design     | 10         | 1. Map Content (T5/T6 iterations)  2. ZZ Player Journey/CG Revisions (CHI-36411) | Partial appt 4/14.                                                                        |
| Elise Cole       | Design     | 10         | 1. Map Content 2. ZZ Player Journey/CG Revisions (CHI-36411) 3. WME design support |                                                                                          |
| Laura Santana    | QA         | **9**      | 1. Tutorial Node Migration QA 2. Bug verification      | **Brazil holiday 4/21 = 9 days**. Tutorial Node Migration QA when S26 engineering wraps.                                    |

### ClickUp Ticket Summary

- **Tutorial Node Migration** (Sprint 2 of 2)
  - CHI-36213: Tutorial Arch - Orchestration/State Tracking (Henrique, continuing from S26)
  - CHI-36212: Tutorial Arch - Triggering (Henrique, continuing from S26)
  - Tutorial Node Rewrites — CHI-36381 (Henrique, after Tutorial Arch completes)
  - Tutorial Node Migration - QA (Laura)
- **WME Design Prep** (UX exploration — eng starts S28)
  - WME - Design (Diana, proposed)
  - WME - UX (Yura, proposed)
- **Standalone**
  - Map Content - Sprint 27 (Jacob/Elise, ongoing)
  - ZZ Player Journey/CG Revisions — CHI-36411 (Elise, Jacob, Chris Fidalgo — cross-pod)

### Continuing from S26
- **Henrique De Lima**: CHI-36213 (Tutorial Arch - Orchestration/State Tracking, **in progress**), CHI-36212 (Tutorial Arch - Triggering, **to do**), CHI-36381 (Tutorial Node Rewrites, **in progress**) — 3 open tutorial tasks. Must all complete S27 for WME eng start S28.
- **CHI-36411** (ZZ Player Journey/CG Revisions) now has 6 subtasks:
  - CHI-36495: T2 Player Journey Revisions (Elise, HIGH priority)
  - CHI-36496: T3 Player Journey Revisions (Jacob, HIGH priority)
  - CHI-36497: T4 Player Journey Revisions (Elise, HIGH priority)
  - CHI-36412: Journey Changes (Jacob + Chris)
  - CHI-36413: Conquest Guide Objective changes T2-T4 (Jacob + Chris)
  - CHI-36508: Update Scientist picture (Diana)

### Open Questions
- [x] ~~Did Tutorial Node Migration complete in S26?~~ **Plan updated**: Tutorial Node Migration expanded to 2 sprints (S26-S27). S27 is Sprint 2 — expected. CHI-36381 now in progress.
- [ ] Is the WME spec (`planning/features/world_map_vs.md`) updated for "Multiple Nodes per Territory" scope? (Needed for S28 eng start)
- [ ] Will Tutorial Node Migration complete by end of S27? Henrique has 3 open tasks (CHI-36213, CHI-36212, CHI-36381). If not, WME eng start (S28) is at risk.
- [ ] CHI-36411 subtask assignments: Elise has T2+T4, Jacob has T3+CG, Chris has Journey+CG, Diana has Scientist pic. Confirm alignment with set priorities.

### Key Risks
- **Henrique is sole client engineer** — 3 open tutorial tasks (CHI-36213 in progress, CHI-36212 to do, CHI-36381 in progress). Must all complete this sprint or WME eng start (S28) slips.
- Diana/Yura have an extra sprint for WME UX exploration — ensure this time is used well to mature design before S28 eng start.
- Diana misses sprint start day (4/14) — kickoff planning must happen end of S26.
- **Brazil holiday 4/21** costs Henrique and Laura each 1 day.
- CHI-36411 (ZZ Player Journey) now has 6 subtasks across Jacob, Elise, Chris, Diana — cross-pod coordination needed alongside map content work.

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Guilherme Quizzini (Pipeline A), Tiago Costa (Pipeline B)
**Eng Lead**: Dan Dupuis (planning capacity) | **QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- Continue **UI Foundation** (Pipeline A, Sprint 2 of 6) — Guilherme Quizzini
- Continue **Hero Gacha v1** (Pipeline B, YY/ZZ sprints) — Tiago Costa
- **Building Upgrades UX** completion — Kevin Ligon wrapping up during ZZ
- Resolve **Chris Fidalgo carry-over** (CHI-36250, T5/T6 rewards)

### Individual Breakdown

| Assignee            | Discipline | Avail Days | Priorities                                                            | Notes                                                                                 |
| ------------------- | ---------- | ---------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Guilherme Quizzini  | Eng        | **9**      | 1. UI Foundation (Pipeline A, Sprint 2)                               | **Brazil holiday 4/21 = 9 days**. Dedicated to UI Foundation for the milestone (6 sprints). |
| Tiago Costa         | Eng        | 10         | 1. Hero Gacha v1 (Pipeline B)                                        | Prioritized over Meta Depth features (Building Upgrades, Empire Progression Summary, Combat Research Tree) which need more design/UX time. YY/ZZ sprint scope. |
| Dan Dupuis          | Eng Lead   | 10         | 1. UI Foundation oversight + architecture                             | Planning capacity only. Also Empire eng lead.                                         |
| Leonard Perez       | Design     | 10         | 1. Commercial Plan 2. Meta Depth designs                             | Meta Depth features (Building Upgrades, Empire Progression Summary, Combat Research Tree) need more design/UX time before engineering. |
| Christopher Fidalgo | Design     | 10         | 1. CHI-36250 (T5/T6 rewards, carry-over) 2. ZZ Player Journey/CG Revisions (CHI-36411) 3. Narrative/Tutorial Design | S26 carry-over confirmed. High priority item must close early. |
| Kevin Ligon         | UX         | **8**      | 1. Building Upgrades UX designs 2. UI Foundation UX wireframes/flows  | Out 4/23-4/24. Wrapping up Building Upgrades UX during ZZ. Front-load UX deliverables week 1. |
| Miguel Duran        | UI Art     | 10         | 1. UI Foundation UI art                                               | Shared resource with Empire.                                                          |
| Hugo Hideo          | QA         | **9**      | 1. Hero Gacha v1 QA (end of sprint) 2. Ongoing verification          | **Brazil holiday 4/21 = 9 days**.                                                     |

### ClickUp Ticket Summary

- **No SHQ mapped** (UI Foundation SHQ linkage still an open item from S26)
  - UI Foundation - Sprint 2 (proposed)
    - UI Foundation - UX (Kevin)
    - UI Foundation - Engineering (Guilherme)
    - UI Foundation - UI Art (Miguel)
  - Hero Gacha v1 (proposed, YY/ZZ sprints)
    - Hero Gacha v1 - Engineering (Tiago)
    - Hero Gacha v1 - QA (Hugo)
  - Building Upgrades UX (proposed)
    - Building Upgrades - UX (Kevin, wrapping up during ZZ)
- **Carry-Over**
  - CHI-36250: Enter T5 & T6 rewards (Chris, high priority, **confirmed still to do**)
- **Cross-pod**
  - CHI-36411: ZZ Player Journey/CG Revisions (Chris + Empire designers)

### Carry-Over from S26 (confirmed via ClickUp 4/13)
- **CHI-36250** (Chris Fidalgo, T5/T6 rewards) — **confirmed still to do** (verified 4/13), high priority. Must close early in S27.

### Open Questions
- [ ] UI Foundation Sprint 2 scope: which sub-features are the focus? (Hero Info? Leveling? Gear?)
- [ ] Hero Gacha v1: does a design spec exist for Tiago Costa to work from?
- [ ] Should UI Foundation link to an SHQ? (carried from S26)
- [ ] Tim out week 2 and Monday of week 1 return — who covers Metagame production decisions?
- [ ] Meta Depth features (Building Upgrades, Empire Progression Summary, Combat Research Tree): when will design/UX be ready for engineering? Target sprint?

### Key Risks
- **Tim out 4/22-5/01** (5 working days lost) — producer coverage gap for Metagame AND Social Dynamics. Need backup decision-maker identified.
- **Chris Fidalgo carry-over**: CHI-36250 **confirmed still to do** (4/13). Must close early in sprint or it compounds further. Chris also now assigned CHI-36412 + CHI-36413 (ZZ Player Journey subtasks — cross-pod). Risk of spreading thin.
- Kevin Ligon out 4/23-4/24 — front-load Building Upgrades UX + UI Foundation UX deliverables in week 1.
- **Meta Depth features deferred**: Building Upgrades, Empire Progression Summary, and Combat Research Tree need more design/UX time before engineering. Risk of pushing engineering start later in M&Ms if designs don't land.
- Dan Dupuis split: UI Foundation (Metagame) + Empire eng lead oversight.
- **Brazil holiday 4/21**: Guilherme Quizzini and Hugo Hideo each lose 1 day.

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- **Actor System Overhaul** implementation (Jota, Sprint 1 of ~2) — based on S26 ENG plan
- **Battle HUD Beta Overhaul** design/UX finalization (Lincoln/Kevin) — design phase before engineering, validates BHQ-B2 (SHQ4-1)
- Lincoln Li: Battle HUD Design Doc (CHI-35036) in discipline review — finalize and hand off
- Continue design prep for upcoming features (Obstacles, Pathfinding & AI)
- Continue **Battle Content** and **Unit Content** pipelines

### S26 Actuals (updated)
- Jota worked on **Actor System Overhaul ENG plan**, **bug fixes**, and **PTC Feedback tasks** in S26
- Battle HUD engineering deferred to S28 (design/UX work in S27)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Jota Oliveira | Eng | **9** | 1. Actor System Overhaul implementation (based on S26 plan) 2. Hero implementation tech (new tech work) | **Brazil holiday 4/21 = 9 days**. Solo client engineer. Critical path for all Battle engineering. Battle HUD eng deferred to S28. Also has Effect Stacking (CHI-35985) in backlog for ZZ. |
| Lincoln Li | Design Lead | 10 | 1. Battle HUD Design Doc finalization (CHI-35036, discipline review) 2. Future feature design prep | Partial — gymnastics 4/16, 4/23 (~1 hr each). Design/UX phase for Battle HUD this sprint. |
| Kevin Ligon | UX (Metagame) | **8** | 1. Building Upgrades UX designs 2. UI Foundation UX wireframes/flows 3. Battle HUD UX support | Out 4/23-4/24. Primary focus on Building Upgrades UX (wrapping up during ZZ). Cross-pod support for Battle HUD. |
| Nathan Hajek | Design | 10 | 1. Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Design | 10 | 1. Battle Content pipeline | Ongoing. |
| Vishaal Gupta | Design | 10 | 1. Battle Content + unit balance | Partial appts 4/16, 4/23 (~1 hr each). |
| Julio Scarabelli | QA | **9** | 1. Battle HUD QA + bug verification | **Brazil holiday 4/21 = 9 days**. |
| Danny Oliveira | Art (VFX) | **7** | 1. VFX implementation and polish | Out 4/16-4/17 (2 days) + local holiday 4/23 (1 day). |
| Alessandro Oliveira | Art (VFX) | **9** | 1. Trench Knight VFXs (CHI-36350, 36351, 36352) 2. New VFXs | **Brazil holiday 4/21 = 9 days**. |
| Vinod Rams | Art | 10 | 1. Unit concepts | |
| Ben Clair | Art | 10 | 1. Unit Content art | Partial appt 4/22. |
| Felipe Chaves | Art | **9** | 1. Character art | **Brazil holiday 4/21 = 9 days** (Canada-based but BR nationality — verify). |
| Tony Bonilla | Art | 10 | 1. Unit Content art / Hero animations (CHI-31445) | |
| Vinicius Muniz | Art | 10 | 1. Melee Bot Tiers (CHI-36356) + Affinities (CHI-36473) | Unit content art — ZZ-tagged tasks. |

### ClickUp Ticket Summary

- **Actor System Overhaul** (proposed)
  - Actor System Overhaul - Engineering (Jota, Sprint 1 of ~2, based on S26 ENG plan)
- **Hero Implementation Tech** (proposed)
  - New tech for Hero implementation (Jota, partial sprint focus)
- **SHQ4-1: HUD strategic + tactical play** (Epic CHI-36324, existing)
  - Battle HUD Beta Overhaul - Design/UX Phase (Lincoln/Kevin)
    - Battle HUD - Design Doc finalization (Lincoln, CHI-35036 in discipline review)
    - Battle HUD - UX support (Kevin Ligon, cross-pod)
  - Battle HUD - Engineering deferred to S28
- **Standalone**
  - Battle Content - Sprint 27 (ongoing)
  - Unit Content - Sprint 27 (ongoing, multiple ZZ-tagged tasks)
  - Effect Stacking - Migrate patterns (CHI-35985, Jota — ZZ-tagged, deferred due to Actor System priority)

### Open Questions
- [x] ~~What did Jota actually work on in S26?~~ **Resolved**: Actor System Overhaul ENG plan, bug fixes, PTC Feedback tasks.
- [x] ~~Battle HUD timeline?~~ **Resolved**: Design/UX phase in S27 (Lincoln/Kevin). Engineering starts S28.
- [x] ~~Jota's S27 priorities?~~ **Resolved**: 1) Actor System Overhaul implementation, 2) Hero implementation tech.
- [ ] Effect Stacking (CHI-35985) is tagged for ZZ — deferred due to Actor System + Hero tech priority?
- [ ] Battle HUD engineering estimate: 3 sprints or 4 starting from S28? Milestone deadline Jun 23.

### Key Risks
- **Solo engineer (Jota)**: All features sequential. Any delay cascades through the entire M&Ms milestone. Brazil holiday 4/21 reduces him to 9 days.
- **Timeline compressed**: Battle HUD engineering pushed to S28 (design/UX in S27). 4 features totaling ~9 eng-sprints in 6 remaining sprints.
- **Dual track in S27**: Jota splitting time between Actor System Overhaul implementation and Hero implementation tech (new tech work). Both are critical-path items.
- Battle HUD engineering doesn't start until S28, leaving only 5 sprints for HUD + Obstacles + Pathfinding. Tight fit.
- If Actor System, Hero tech, or Battle HUD eng runs long, downstream features (Obstacles, Pathfinding) may not fit in M&Ms.
- Danny out 3 days total (4/16-4/17 PTO + 4/23 local holiday) — Alessandro covers VFX.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Gabriel Arruda, Marcos Loures, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- Continue **Phase 2** (Map Foundation) — should be approaching mid-point by end of sprint
- Continue **AI Prototype Playtesting** and **Multiplayer Networking** tracks
- **Complete architecture/task breakdown for P2** (CHI-36382, still to do as of 4/8 — must finish week 1)
- Assess switchover readiness: is in-client version approaching playtest-viable?

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Gabriel Arruda | Eng | **9** | 1. P2: Map Foundation 2. CHI-36382 (Work Breakdown) | **Brazil holiday 4/21 = 9 days**. Transitioned from Empire in S26. |
| Marcos Loures | Eng | **9** | 1. P2: Map Foundation 2. CHI-36382 (Work Breakdown) | **Brazil holiday 4/21 = 9 days**. Transitioned from Empire in S26. |
| Randy Pasion | Eng | 10 | 1. P2: Map Foundation | Dozer split risk — feature work may be interrupted. |
| Garrett Eidsvig | Eng | 10 | 1. P2: Map Foundation - multiplayer infrastructure | Dozer split risk. Has backlog items in progress (CHI-35564 MP Backend arch). |
| Bruno Bacelar | Eng | **9** | 1. Multiplayer Networking | **Brazil holiday 4/21 = 9 days**. Parallel track, dedicated. |
| Paul Flores | Design | 10 | 1. AI Prototype Playtesting 2. P2 design direction | |

### ClickUp Ticket Summary

- **Multiplayer Foundation** (Epics, existing)
  - Multiplayer Maps - Phase 2: Map Foundation (proposed, continuing from S26)
    - P2 Engineering (Gabriel, Marcos, Randy, Garrett)
  - Multiplayer Networking - Sprint 27 (Bruno, ongoing)
  - AI Prototype Playtesting - Sprint 27 (Paul, ongoing)
- **Backlog items in flight** (confirmed 4/8)
  - CHI-36382: Multiplayer Onboarding & Map Foundation Work Breakdown (Marcos, Gabriel — **still to do**)
  - CHI-35564: Multiplayer Backend - architecture and plan (Garrett — in progress)

### Open Questions
- [ ] P2 architecture/task breakdown: CHI-36382 **confirmed still to do** (verified 4/13 — now 2 full sprints without completion). MUST complete week 1 or engineers lack direction.
- [ ] Tim out 4/22-5/01 — who covers Social Dynamics production decisions?
- [ ] Switchover assessment: what criteria determine if in-client is playtest-ready?
- [ ] CHI-35564 (MP Backend arch) still in progress — is Garrett blocked or making progress?

### Key Risks
- **Tim out 4/22-5/01** — producer gap for Social Dynamics (and Metagame). Need backup.
- **P2 architecture/task breakdown STILL not complete** — CHI-36382 still to do after TWO full sprints. This is now a critical escalation: 4 engineers may lack clear direction at sprint start. Was flagged as risk in S26, situation unchanged.
- Randy/Garrett Dozer split continues — 2 of 5 engineers at risk of interruption.
- **Brazil holiday 4/21**: Gabriel, Marcos, and Bruno each lose 1 day (9 avail each).
- CHI-35564 (MP Backend arch) in progress since S25 — verify this isn't stale or blocked.

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas | **Producer**: Thorben Novais

### Sprint Goals
- **Complete EKS deployment (Prod/Stage)** (Derek) — **enables parallel workflows setup in S28**
- **Complete Single Config Editor** (Bruno) — finishing from S26
- **Performance Improvements** (Bruno) — ongoing optimization work
- Continue UI Framework V2 support (cross-pod)
- Multiplayer infrastructure support for Social Dynamics

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 10 | 1. EKS deployment completion (Prod/Stage) 2. Multiplayer infrastructure support 3. UI Framework V2 support | Also Social Dynamics eng lead. EKS must complete to enable S28 parallel workflows. |
| Bruno Freitas | Eng | **9** | 1. Single Config Editor (finish from S26) 2. Performance Improvements | **Brazil holiday 4/21 = 9 days**. |

### S26 Status
- EKS deployment (Prod/Stage) started in S26, completing in S27

### Open Questions
- [ ] Should Dozer have defined M&Ms deliverables per sprint? (Carried from S26)
- [x] ~~EKS deployment status~~ **Resolved**: Started S26, completing S27 (Derek)

### Key Risks
- Derek split between Dozer (EKS deployment) and Social Dynamics eng lead responsibilities.
- **EKS deployment must complete by end of S27** — blocks parallel workflows setup in S28. Any delay cascades to next sprint.
- Bruno Freitas loses 1 day to Brazil holiday.

---

## Art

**Art Director**: Kevin Griffith | **Assoc. Art Director**: Brendan Cheatham | **Producer**: Brann Livesay

### Sprint Goals
- Continue all active art pipelines (Character Assets, Environment Art, UI/UX Assets)
- Continue **VFX & Animation** ramp-up
- Cross-pod asset delivery: Battle HUD (Battle), UI Foundation (Metagame), World Map Experience (Empire)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Kevin Griffith | Art Director | 10 | 1. Cross-pod art direction + pipeline oversight | Solo AD coverage while Brendan is out. |
| Brendan Cheatham | Assoc. AD | **2** | 1. Cross-pod art direction (4/14-4/16 only) | **Out 4/17-5/02** — 8 of 10 days. Major capacity hit. |
| Pedro Sarraf | Lead Tech Art | **4** | 1. Tech art assignments (4/22-4/25 only) | Out through 4/21 (includes holiday). Returns week 2. |
| Guilherme Lascasas | 2D Env Concept | **8** | 1. Environment Art (Empire map tiles) | Out 4/14 (returns 4/15). **Brazil holiday 4/21 = loses another day**. |
| Thiago Saraiva | Senior 3D | **9** | 1. 3D art (Empire) | **Brazil holiday 4/21 = 9 days**. |
| Marcos Teles | Tech Art | **9** | 1. Territory Map texture flickering (CHI-36339) 2. Territory Map shader (CHI-36431) 3. Animated loading visualization (CHI-36374) | **Brazil holiday 4/21 = 9 days**. Carry-over from S26. |
| Lawrence Steele | Audio | 10 | 1. Sound design | |

### Carry-Over from S26 (confirmed via ClickUp 4/13)
- **Marcos Teles**: CHI-36339 (Territory Map texture flickering T6, **in progress**) — carrying over.
- ~~CHI-36431 (Territory Map shader statue glowing)~~ — **COMPLETE** (closed 4/13)
- ~~CHI-36374 (animated loading visualization)~~ — **COMPLETE** (closed 4/13)

### Open Questions
- [ ] Brendan out 8 of 10 days — who covers Assoc. Art Director responsibilities? Kevin Griffith solo?
- [ ] Art priority conflicts: Battle HUD vs UI Foundation vs WME — which gets art resources first?
- [ ] Pedro returns 4/22 — what should he focus on for the remaining 4 days?
- [ ] CHI-36339 (Territory Map texture flickering) still in progress from S26 — will it close early in S27?

### Key Risks
- **Brendan Cheatham out 8 of 10 days** — art direction coverage thinned significantly. Kevin Griffith covers solo.
- Pedro Sarraf only available 4 days (returns 4/22) — limited tech art capacity.
- Danny Oliveira (Battle VFX) out 3 days total — Alessandro covers VFX.
- **Brazil holiday 4/21** hits multiple art team members: Guilherme Lascasas, Thiago Saraiva, Marcos Teles all lose 1 day.
- Cross-pod art demands intensifying as M&Ms features ramp up (HUD, UI Foundation, WME all need art).
- CHI-36339 (Territory Map texture flickering) carrying over from S26 — Marcos's priorities have shifted, ensure this still gets attention.

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Tutorial Node Migration (Empire)**: Henrique has 3 open tasks (CHI-36213 in progress, CHI-36212 to do, CHI-36381 in progress). Must complete S27 for WME eng start S28.
- **WME design prep (Empire)**: Diana/Yura have extra UX exploration time before S28 eng start.
- **CHI-36411 (ZZ Player Journey/CG Revisions)**: Now has 6 subtasks with specific assignments across Jacob, Elise (Empire), Chris (Metagame), Diana (Empire). Cross-pod coordination needed.
- **P2 architecture breakdown -> Social Dynamics engineering**: CHI-36382 STILL to do after 2 sprints. Critical escalation — 4 engineers may lack direction.
- **Battle HUD Design Doc (CHI-35036)**: Still in discipline review (Lincoln). Must finalize for engineering decisions.

### Shared Resource Conflicts
- **Chris Fidalgo**: CHI-36250 (Metagame carry-over, still to do) + CHI-36412/CHI-36413 (ZZ Player Journey subtasks — Empire cross-pod). Risk of spreading thin.
- **Derek Gallant**: Dozer infrastructure + Social Dynamics eng lead.
- **Kevin Ligon** (UX): Building Upgrades UX (wrapping up) + UI Foundation UX + Battle HUD UX (cross-pod). Three competing UX streams. Out 4/23-4/24.
- **Miguel Duran** (UI Artist): Metagame UI Foundation primary. Empire may need WME UI art.
- **Dan Dupuis**: Metagame eng lead (UI Foundation) + Empire eng lead.

### Producer Coverage — Week 2 Gap
- **Tim Williams out 4/22-5/01** — 5 working days in this sprint. Produces both Metagame and Social Dynamics.
- Need identified backup for production decisions during this window.
- Brann Livesay (Empire/Art producer) available but already covering two pods.

### Brazil Holiday Impact (April 21)
- 18 team members affected. 1 day lost each. Total: ~18 person-days across the studio.
- Heaviest impact on Social Dynamics (3 of 5 engineers lose a day) and Battle (Jota sole eng loses a day).

### Milestone Context
- **Sprint 2 of M&Ms**. Settling into milestone rhythm after S26 transition.
- Key M&Ms SHQs entering active testing: SHQ3-1 (map at scale), SHQ4-1 (HUD strategic/tactical).
- **ClickUp status changes since 4/9**: CHI-36431 COMPLETE, CHI-36374 COMPLETE, CHI-36381 now IN PROGRESS. CHI-36411 now has 6 subtasks with assignments.
- S27 ClickUp list still empty — tasks need to be staged before Monday sprint start.
- Map Goals Handshake (Empire/Battle/Metagame) — dependency to watch as WME engineering approaches.

---

## Capacity Summary

**Total Working Days**: 10 (no studio-wide holidays; April 21 is Brazil regional)

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Tim Williams | Metagame / SD | **5** | Out 4/22-5/01 |
| Brendan Cheatham | Art | **2** | Out 4/17-5/02 |
| Pedro Sarraf | Art | **4** | Out through 4/21 |
| Danny Oliveira | Battle (Art) | **7** | Out 4/16-4/17 + local holiday 4/23 |
| Kevin Ligon | Metagame (UX) | **8** | Out 4/23-4/24 |
| Diana Vasilescu | Empire | **9** | Out 4/14 |
| Brann Livesay | Empire / Art | **9** | Out 4/16 |
| Guilherme Lascasas | Art | **8** | Out 4/14 + Brazil holiday 4/21 |
| Henrique De Lima | Empire | **9** | Brazil holiday 4/21 |
| Guilherme Quizzini | Metagame | **9** | Brazil holiday 4/21 |
| Tiago Costa | Metagame | 10 | |
| Dan Dupuis | Metagame | 10 | Planning capacity |
| Leonard Perez | Metagame | 10 | |
| Christopher Fidalgo | Metagame | 10 | S26 carry-over + cross-pod ZZ work |
| Miguel Duran | Metagame | 10 | Shared resource |
| Hugo Hideo | QA (Metagame) | **9** | Brazil holiday 4/21 |
| Jota Oliveira | Battle | **9** | Brazil holiday 4/21. Solo engineer |
| Lincoln Li | Battle | 10 | Partial appts |
| Nathan Hajek | Battle | 10 | |
| Dylan Jeffery | Battle | 10 | |
| Vishaal Gupta | Battle | 10 | Partial appts |
| Julio Scarabelli | QA (Battle) | **9** | Brazil holiday 4/21 |
| Thorben Novais | Battle / Dozer | **9** | Brazil holiday 4/21 |
| Gabriel Arruda | Social Dynamics | **9** | Brazil holiday 4/21 |
| Marcos Loures | Social Dynamics | **9** | Brazil holiday 4/21 |
| Randy Pasion | Social Dynamics | 10 | Dozer split risk |
| Garrett Eidsvig | Social Dynamics | 10 | Dozer split risk |
| Bruno Bacelar | Social Dynamics | **9** | Brazil holiday 4/21 |
| Paul Flores | Social Dynamics | 10 | |
| Derek Gallant | Dozer | 10 | Also SD eng lead |
| Bruno Freitas | Dozer | **9** | Brazil holiday 4/21 |
| Yura Rusin | Empire (UX) | 10 | Multiple partial appts |
| Jacob Siegel | Empire | 10 | Partial appt 4/14 |
| Elise Cole | Empire | 10 | |
| Laura Santana | QA (Empire) | **9** | Brazil holiday 4/21 |
| Kevin Griffith | Art | 10 | Solo AD coverage |
| Thiago Saraiva | Art | **9** | Brazil holiday 4/21 |
| Marcos Teles | Art | **9** | Brazil holiday 4/21. Carry-over tasks |
| Lawrence Steele | Art (Audio) | 10 | |
| Hafiz Kassam | QA (Lead) | 10 | |
| Vinod Rams | Battle (Art) | 10 | |
| Alessandro Oliveira | Battle (Art) | **9** | Brazil holiday 4/21 |
| Ben Clair | Battle (Art) | 10 | Partial appt 4/22 |
| Felipe Chaves | Battle (Art) | **9** | Brazil holiday 4/21 (verify) |
| Tony Bonilla | Battle (Art) | 10 | |
| Vinicius Muniz | Battle (Art) | 10 | ZZ-tagged unit content tasks |

---

## Preview Summary

### Top Risks

1. **Social Dynamics: CHI-36382 still to do after TWO sprints** — P2 Work Breakdown never started. 4 engineers may lack direction at sprint start. This needs escalation, not just flagging.
2. **Tim out 5 working days** (4/22-5/01) — two pods (Metagame + Social Dynamics) without producer. Need backup identified.
3. **Empire: Henrique has 3 open tutorial tasks** — CHI-36213 (in progress), CHI-36212 (to do), CHI-36381 (in progress). Must all complete S27 or WME eng start (S28) slips.
4. **Brendan Cheatham out 8/10 days** — art direction thinned. Kevin Griffith covers solo.
5. **Battle sole engineer (Jota)** — all features sequential, any delay cascades. Brazil holiday = 9 days. CHI-35036 (HUD Design Doc) still in discipline review.
6. **Brazil holiday April 21** — 18 team members lose 1 day. Concentrated impact on Social Dynamics (3/5 engineers) and Battle (sole eng).
7. **Chris Fidalgo spreading thin** — CHI-36250 (carry-over, still to do) + CHI-36412/CHI-36413 (ZZ Player Journey subtasks) + Narrative/Tutorial Design. Three competing priorities.
8. **S27 ClickUp list still empty** — tasks need to be staged before sprint start Monday.

### Open Questions (resolve before kickoff)

1. [ ] **Tim week 2 coverage**: Who covers Metagame and Social Dynamics production decisions 4/22-5/01?
2. [ ] **Jota S26 status**: What did Jota work on in S26? What continues into S27?
3. [x] ~~**Tutorial Node Migration timeline**~~: **Updated** — expanded to 2 sprints. CHI-36381 now in progress alongside CHI-36213 and CHI-36212.
4. [ ] **WME design readiness for S28**: Will Diana/Yura UX exploration be mature enough for Henrique to start WME engineering in S28?
5. [ ] **P2 task breakdown (CHI-36382)**: Still to do after 2 sprints. Escalation needed — must complete week 1 or engineers lack direction.
6. [ ] **Hero Gacha v1 spec**: Does a design spec exist for Tiago Costa?
7. [ ] **Meta Depth features**: Building Upgrades, Empire Progression Summary, Combat Research Tree need more design/UX time. When will they be ready for engineering?
8. [ ] **UI Foundation Sprint 2 scope**: Which sub-features are the focus?
9. [ ] **Art Brendan coverage**: Who covers Assoc. Art Director for 8 days?
10. [ ] **CHI-35036 (Battle HUD DD)**: Still in discipline review — when does it finalize?
11. [ ] **CHI-36411 subtask alignment**: Do ClickUp assignments match user-set priorities for Jacob, Elise, Chris, Diana?
