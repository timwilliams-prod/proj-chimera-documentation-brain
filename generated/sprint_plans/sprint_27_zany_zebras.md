---
Sprint: Zany Zebras 27
Dates: 4/14 - 4/28
Working Days: 10 (no studio-wide holidays)
Holidays: None
Milestone: M&Ms (Multiplayer & Meta) — Sprint 2 of ~7
Mode: Preview
Generated: 2026-04-06
---

# Sprint 27: Zany Zebras — PREVIEW

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 2 of ~7** in this milestone.
**Working Days**: 10 (no studio-wide holidays in this window)
**ClickUp List**: `901326453323`

### PTO Summary

| Person           | Pod           | Dates Out    | Days Lost | Avail Days | Impact                                         |
| ---------------- | ------------- | ------------ | --------- | ---------- | ---------------------------------------------- |
| Tim Williams     | Metagame / SD | 4/22-5/01    | 4         | **6**      | Producer coverage gap week 2                   |
| Brendan Cheatham | Art           | 4/17-5/02    | 7         | **3**      | Major — Assoc. Art Director mostly unavailable |
| Pedro Sarraf     | Art           | through 4/21 | 6         | **4**      | Returns 4/22, limited availability             |
| Danny Oliveira   | Battle (Art)  | 4/16-4/17    | 2         | **8**      | VFX pipeline minor impact                      |
| Kevin Ligon      | Metagame (UX) | 4/23-4/24    | 2         | **8**      | UI Foundation UX minor impact week 2           |
| Diana Vasilescu  | Empire        | 4/14         | 1         | **9**      | Misses sprint start                            |
| Brann Livesay    | Empire / Art  | 4/16         | 1         | **9**      | Travel recovery, minor                         |

**Partial Appointments** (1-1.5 hrs, minimal impact):
- Henrique De Lima: 4/15, 4/22
- Yura Rusin: 4/22
- Vishaal Gupta: 4/16, 4/23
- Lincoln Li: 4/16, 4/23
- Jacob Siegel: 4/14

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Henrique De Lima (sole client eng)
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- Start **World Map Experience** engineering — "Multiple Nodes per Territory" (Sprint 1 of 3, SHQ3-1/SHQ3-2)
- Continue **World Map Experience** design/UX iteration
- Continue **Map Content** pipeline (SHQ3-1)

### Individual Breakdown

| Assignee         | Discipline | Avail Days | Priorities                                             | Notes                                                                                                                       |
| ---------------- | ---------- | ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Henrique De Lima | Eng        | 10         | 1. World Map Experience — Multiple Nodes per Territory | Sprint 1 of 3. Sole client engineer. Partial appts 4/15, 4/22. S26 carry-over (Tutorial Arch tasks) may still be in flight. |
| Diana Vasilescu  | Design     | 9          | 1. World Map Experience design iteration               | Out 4/14 (sprint start day). Scoping should be complete from S26 prep.                                                      |
| Yura Rusin       | UX         | 10         | 1. World Map Experience UX                             | Partial appt 4/22. Continuing UX flows from S26.                                                                            |
| Jacob Siegel     | Design     | 10         | 1. Map Content (T5/T6 iterations)                      | Partial appt 4/14. Full availability after S26 PTO.                                                                         |
| Elise Cole       | Design     | 10         | 1. Map Content 2. WME design support                   |                                                                                                                             |
| Laura Santana    | QA         | 10         | 1. Tutorial Node Migration QA 2. Bug verification      | Tutorial Node Migration QA when S26 engineering wraps.                                                                      |

### ClickUp Ticket Summary

- **SHQ3-1 / SHQ3-2: Territory Map at Scale / Strategy-Conquest Connection** (Epics, existing)
  - World Map Experience — Multiple Nodes per Territory (Parent task, proposed)
    - WME - Engineering (Henrique)
    - WME - Design (Diana)
    - WME - UX (Yura)
- **Standalone**
  - Map Content - Sprint 27 (Jacob/Elise, ongoing)
  - Tutorial Node Migration - QA (Laura, carry-over from S26)

### Carry-Over from S26
- **Henrique De Lima**: CHI-36213 (Tutorial Arch - Orchestration, in progress) and CHI-36212 (Tutorial Arch - Triggering, to do) — may carry forward if Tutorial Node Migration didn't fully complete in S26
- **Diana Vasilescu**: CHI-36224 (Governors Design) — background carry-over

### Open Questions
- [ ] Did Tutorial Node Migration (Henrique) complete in S26? If not, how much carries into S27 vs. WME start?
- [ ] Is the WME spec (`planning/features/world_map_vs.md`) updated for "Multiple Nodes per Territory" scope?
- [ ] Is S26 design/UX prep far enough along for Henrique to start engineering day 1?

### Key Risks
- Henrique is sole client engineer — no parallelism. If Tutorial Node Migration carries over, WME start is delayed.
- Diana misses sprint start day (4/14) — kickoff planning must happen end of S26.
- WME "Multiple Nodes per Territory" design readiness depends entirely on S26 prep quality.

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Guilherme Quizzini (Pipeline A), Tiago Costa (Pipeline B)
**Eng Lead**: Dan Dupuis (planning capacity) | **QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- Continue **UI Foundation** (Pipeline A, Sprint 2 of 6) — Guilherme Quizzini
- Start **Empire Progression Tree** (Pipeline B, 1-sprint feature) — Tiago Costa
- Resolve **Chris Fidalgo carry-over** (CHI-36250, T5/T6 rewards)

### Individual Breakdown

| Assignee            | Discipline | Avail Days | Priorities                                                            | Notes                                                                                 |
| ------------------- | ---------- | ---------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Guilherme Quizzini  | Eng        | 10         | 1. UI Foundation (Pipeline A, Sprint 2)                               | Dedicated to UI Foundation for the milestone (6 sprints)                              |
| Tiago Costa         | Eng        | 10         | 1. Empire Progression Tree (Pipeline B)                               | 1-sprint feature. Second sprint on the team — assess ramp-up after Building Upgrades. |
| Dan Dupuis          | Eng Lead   | 10         | 1. UI Foundation oversight + architecture                             | Planning capacity only. Also Empire eng lead.                                         |
| Leonard Perez       | Design     | 10         | 1. UI Foundation design 2. Empire Progression Tree design support     |                                                                                       |
| Christopher Fidalgo | Design     | 10         | 1. CHI-36250 (T5/T6 rewards, carry-over) 2. Narrative/Tutorial Design | S26 carry-over confirmed. High priority item must close early.                        |
| Kevin Ligon         | UX         | **8**      | 1. UI Foundation UX wireframes/flows                                  | Out 4/23-4/24. Front-load UX deliverables week 1.                                     |
| Miguel Duran        | UI Art     | 10         | 1. UI Foundation UI art                                               | Shared resource with Empire. Check S26 carry-over (CHI-36195).                        |
| Hugo Hideo          | QA         | 10         | 1. Empire Progression Tree QA (end of sprint) 2. Ongoing verification |                                                                                       |

### ClickUp Ticket Summary

- **No SHQ mapped** (UI Foundation SHQ linkage still an open item from S26)
  - UI Foundation - Sprint 2 (proposed)
    - UI Foundation - UX (Kevin)
    - UI Foundation - Engineering (Guilherme)
    - UI Foundation - UI Art (Miguel)
  - Empire Progression Tree (proposed, 1 sprint)
    - Empire Progression Tree - Engineering (Tiago)
    - Empire Progression Tree - QA (Hugo)
- **Carry-Over**
  - CHI-36250: Enter T5 & T6 rewards (Chris, high priority)

### Carry-Over from S26
- **CHI-36250** (Chris Fidalgo, T5/T6 rewards) — confirmed carry-over, high priority
- **CHI-36195** (Miguel Duran, elemental swaps UI) — status TBD from S26

### Open Questions
- [ ] UI Foundation Sprint 2 scope: which sub-features are the focus? (Hero Info? Leveling? Gear?)
- [ ] Empire Progression Tree: does a design spec exist for Tiago to work from?
- [ ] Should UI Foundation link to an SHQ? (carried from S26)
- [ ] Tim out all of week 2 — who covers Metagame production decisions?

### Key Risks
- **Tim out week 2** (4/22-4/25) — producer coverage gap for Metagame AND Social Dynamics. Need backup decision-maker identified.
- Chris Fidalgo carry-over: CHI-36250 must close early in sprint or it compounds further.
- Kevin Ligon out 4/23-4/24 — front-load UX deliverables in week 1.
- Dan Dupuis split: UI Foundation (Metagame) + Empire eng lead oversight.

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- Continue **Battle HUD Beta Overhaul** engineering (Sprint 2 of ~4) — must-have for M&Ms, validates BHQ-B2 (SHQ4-1)
- Continue design prep for upcoming features (Obstacles, Actor System Overhaul)
- Continue **Battle Content** and **Unit Content** pipelines

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Jota Oliveira | Eng | 10 | 1. Continue from S26 (HUD / Actor System / Pathfinding) | Solo client engineer. Critical path for all Battle engineering. |
| Lincoln Li | Design Lead | 10 | 1. Battle HUD design direction 2. Future feature design prep | Partial — gymnastics 4/16, 4/23 (~1 hr each) |
| Nathan Hajek | Design | 10 | 1. Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Design | 10 | 1. Battle Content pipeline | Ongoing |
| Vishaal Gupta | Design | 10 | 1. Battle Content + unit balance | Partial appts 4/16, 4/23 (~1 hr each) |
| Julio Scarabelli | QA | 10 | 1. Battle HUD QA + bug verification | |
| Danny Oliveira | Art (VFX) | **8** | 1. VFX implementation and polish | Out 4/16-4/17 (2 days) |
| Alessandro Oliveira | Art (VFX) | 10 | 1. New VFXs | |
| Vinod Rams | Art | 10 | 1. Unit concepts | |
| Ben Clair | Art | 10 | 1. Unit Content art | |
| Felipe Chaves | Art | 10 | 1. Character art | |
| Tony Bonilla | Art | 10 | 1. Unit Content art | |
| Vinicius Muniz | Art | 10 | 1. Unit Content art | |

### ClickUp Ticket Summary

- **SHQ4-1: HUD strategic + tactical play** (Epic CHI-36324, existing)
  - Battle HUD Beta Overhaul - Phase 2 (proposed)
    - Battle HUD - Engineering (Jota)
    - Battle HUD - Design (Lincoln)
- **Standalone**
  - Battle Content - Sprint 27 (ongoing)
  - Unit Content - Sprint 27 (ongoing)

### Open Questions
- [ ] What did Jota actually work on in S26 — HUD, Actor System Overhaul, or Pathfinding & AI? What carries into S27?
- [ ] Battle HUD estimate: 3 sprints or 4? Is the milestone breakdown still accurate?
- [ ] Battle HUD SHQ Epic — was one created in S26?

### Key Risks
- **Solo engineer (Jota)**: All features sequential. Any delay cascades through the entire M&Ms milestone.
- If HUD runs long, Obstacles / Actor System / Pathfinding compress further. 4 features totaling ~9 eng-sprints in a 7-sprint milestone is already tight.
- Danny out 2 days — minor VFX pipeline impact, Alessandro covers.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Gabriel Arruda, Marcos Loures, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- Continue **Phase 2** (Map Foundation) — should be approaching mid-point by end of sprint
- Continue **AI Prototype Playtesting** and **Multiplayer Networking** tracks
- Complete **architecture/task breakdown** for P2 (still in progress from S26)
- Assess switchover readiness: is in-client version approaching playtest-viable?

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Gabriel Arruda | Eng | 10 | 1. P2: Map Foundation | Transitioned from Empire in S26 |
| Marcos Loures | Eng | 10 | 1. P2: Map Foundation | Transitioned from Empire in S26 |
| Randy Pasion | Eng | 10 | 1. P2: Map Foundation | Dozer split risk — feature work may be interrupted |
| Garrett Eidsvig | Eng | 10 | 1. P2: Map Foundation - multiplayer infrastructure | Dozer split risk |
| Bruno Bacelar | Eng | 10 | 1. Multiplayer Networking | Parallel track, dedicated |
| Paul Flores | Design | 10 | 1. AI Prototype Playtesting 2. P2 design direction | |

### ClickUp Ticket Summary

- **Multiplayer Foundation** (Epics, existing)
  - Multiplayer Maps - Phase 2: Map Foundation (proposed, continuing from S26)
    - P2 Engineering (Gabriel, Marcos, Randy, Garrett)
  - Multiplayer Networking - Sprint 27 (Bruno, ongoing)
  - AI Prototype Playtesting - Sprint 27 (Paul, ongoing)
- **Backlog items ready to pull**
  - CHI-36382: Multiplayer Onboarding & Map Foundation Work Breakdown (Marcos, Gabriel — high priority, to do)
  - CHI-35830: Support Real Multiplayer for Paul's AI Prototype (Garrett — urgent, in progress)
  - CHI-35829: Document Multiplayer Game Mode Logic (Paul — high, to do)
  - CHI-35564: Multiplayer Backend - architecture and plan (Garrett — high, in progress)
  - CHI-35563: Onboard with Multiplayer, prepare Architecture/Plan (Randy — high, in progress)

### Open Questions
- [ ] P2 architecture/task breakdown: when will this be complete? Should it be a sprint goal to finish in week 1?
- [ ] Tim out all of week 2 — who covers Social Dynamics production decisions?
- [ ] Switchover assessment: what criteria determine if in-client is playtest-ready?

### Key Risks
- **Tim out week 2** — producer gap for Social Dynamics (and Metagame). Need backup.
- **P2 architecture/task breakdown not complete** — until this finishes, engineers may be blocked or working without clear direction.
- Randy/Garrett Dozer split continues — 2 of 4 P2 engineers at risk of interruption.
- Phase 2 is ~1 month. If S26 work was slowed by P1 overflow or missing breakdown, P2 timeline compresses.

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas

### Sprint Goals
- Continue infrastructure support
- Deliverables TBD — no defined M&Ms sprint goals

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 10 | 1. Infrastructure support 2. UI Framework V2 support 3. Multiplayer support | Also Social Dynamics eng lead |
| Bruno Freitas | Eng | 10 | 1. Build pipeline / tools | |

### Open Questions
- [ ] Should Dozer have defined M&Ms deliverables per sprint? (Carried from S26)
- [ ] EKS deployment status: did S26 deployments (Prod/Stage) complete?

### Key Risks
- No defined sprint goals — hard to measure progress or flag delays.
- Derek split between Dozer and Social Dynamics eng lead responsibilities.

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
| Kevin Griffith | Art Director | 10 | 1. Cross-pod art direction + pipeline oversight | Solo AD coverage while Brendan is out |
| Brendan Cheatham | Assoc. AD | **3** | 1. Cross-pod art direction (4/14-4/16 only) | **Out 4/17-5/02** — 7 of 10 days. Major capacity hit. |
| Pedro Sarraf | Lead Tech Art | **4** | 1. Tech art assignments (4/22-4/25 only) | Out through 4/21. Returns week 2. |
| Guilherme Lascasas | 2D Env Concept | 10 | 1. Environment Art (Empire map tiles) | |
| Thiago Saraiva | Senior 3D | 10 | 1. 3D art (Empire) | |
| Marcos Teles | Tech Art | 10 | 1. Tech art (Empire) | |
| Lawrence Steele | Audio | 10 | 1. Sound design | |

### Open Questions
- [ ] Brendan out 7 of 10 days — who covers Assoc. Art Director responsibilities? Kevin Griffith solo?
- [ ] Art priority conflicts: Battle HUD vs UI Foundation vs WME — which gets art resources first?
- [ ] Pedro returns 4/22 — what should he focus on for the remaining 4 days?

### Key Risks
- **Brendan Cheatham out 7 of 10 days** — art direction coverage thinned significantly. Kevin Griffith covers solo.
- Pedro Sarraf only available 4 days (returns 4/22) — limited tech art capacity.
- Danny Oliveira (Battle VFX) out 2 days — Alessandro covers VFX.
- Cross-pod art demands intensifying as M&Ms features ramp up (HUD, UI Foundation, WME all need art).

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **WME design readiness → Henrique engineering start**: S26 design/UX prep by Diana and Yura must be complete for Henrique to start "Multiple Nodes per Territory" on day 1.
- **Building Upgrades → Empire Progression Tree**: Tiago Costa finishes Building Upgrades (S26) and starts Empire Progression Tree (S27). Smooth transition needed.
- **P2 architecture breakdown → Social Dynamics engineering**: Until the task breakdown is done, 4 engineers may lack clear direction.

### Shared Resource Conflicts
- **Miguel Duran** (UI Artist): Metagame UI Foundation primary. Empire may need WME UI art.
- **Derek Gallant**: Dozer infrastructure + Social Dynamics eng lead. Critical path for multiplayer.
- **Dan Dupuis**: Metagame eng lead (UI Foundation) + Empire eng lead.

### Producer Coverage — Week 2 Gap
- **Tim Williams out 4/22-4/25** — full week 2. Produces both Metagame and Social Dynamics.
- Need identified backup for production decisions during this window.
- Brann Livesay (Empire/Art producer) available but already covering two pods.

### Milestone Context
- **Sprint 2 of M&Ms**. Settling into milestone rhythm after S26 transition.
- Key M&Ms SHQs entering active testing: SHQ3-1 (map at scale), SHQ4-1 (HUD strategic/tactical), SHQ4-3/4-4 (world map readability — future sprints).
- Map Goals Handshake (Empire/Battle/Metagame) — dependency to watch as WME engineering starts.

---

## Capacity Summary

**Total Working Days**: 10 (no studio-wide holidays)

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Tim Williams | Metagame / SD | **6** | Out 4/22-4/25 |
| Brendan Cheatham | Art | **3** | Out 4/17-5/02 |
| Pedro Sarraf | Art | **4** | Out through 4/21 |
| Danny Oliveira | Battle (Art) | **8** | Out 4/16-4/17 |
| Kevin Ligon | Metagame (UX) | **8** | Out 4/23-4/24 |
| Diana Vasilescu | Empire | **9** | Out 4/14 |
| Brann Livesay | Empire / Art | **9** | Out 4/16 |
| Henrique De Lima | Empire | 10 | Partial appts 4/15, 4/22 |
| Guilherme Quizzini | Metagame | 10 | |
| Tiago Costa | Metagame | 10 | |
| Dan Dupuis | Metagame | 10 | Planning capacity |
| Leonard Perez | Metagame | 10 | |
| Christopher Fidalgo | Metagame | 10 | S26 carry-over |
| Miguel Duran | Metagame | 10 | Shared resource |
| Hugo Hideo | QA (Metagame) | 10 | |
| Jota Oliveira | Battle | 10 | Solo engineer |
| Lincoln Li | Battle | 10 | Partial appts |
| Nathan Hajek | Battle | 10 | |
| Dylan Jeffery | Battle | 10 | |
| Vishaal Gupta | Battle | 10 | Partial appts |
| Julio Scarabelli | QA (Battle) | 10 | |
| Gabriel Arruda | Social Dynamics | 10 | |
| Marcos Loures | Social Dynamics | 10 | |
| Randy Pasion | Social Dynamics | 10 | Dozer split risk |
| Garrett Eidsvig | Social Dynamics | 10 | Dozer split risk |
| Bruno Bacelar | Social Dynamics | 10 | Dedicated to Networking |
| Paul Flores | Social Dynamics | 10 | |
| Derek Gallant | Dozer | 10 | Also SD eng lead |
| Bruno Freitas | Dozer | 10 | |
| Yura Rusin | Empire (UX) | 10 | Partial appt 4/22 |
| Jacob Siegel | Empire | 10 | Partial appt 4/14 |
| Elise Cole | Empire | 10 | |
| Laura Santana | QA (Empire) | 10 | |
| Kevin Griffith | Art | 10 | Solo AD coverage |
| Guilherme Lascasas | Art | 10 | |
| Thiago Saraiva | Art | 10 | |
| Marcos Teles | Art | 10 | |
| Lawrence Steele | Art (Audio) | 10 | |
| Hafiz Kassam | QA (Lead) | 10 | |
| Vinod Rams | Battle (Art) | 10 | |
| Alessandro Oliveira | Battle (Art) | 10 | |
| Ben Clair | Battle (Art) | 10 | |
| Felipe Chaves | Battle (Art) | 10 | |
| Tony Bonilla | Battle (Art) | 10 | |
| Vinicius Muniz | Battle (Art) | 10 | |

---

## Preview Summary

### Top Risks

1. **Tim out all of week 2** — two pods (Metagame + Social Dynamics) without producer. Need backup identified.
2. **Brendan Cheatham out 7/10 days** — art direction thinned. Kevin Griffith covers solo.
3. **Social Dynamics P2 architecture breakdown incomplete** — 4 engineers may lack clear direction until this finishes.
4. **Battle solo engineer (Jota)** — all features sequential, any delay cascades through M&Ms.
5. **Empire WME design readiness** — if S26 prep isn't complete, Henrique's S27 start slips.

### Open Questions (resolve before kickoff)

1. [ ] **Tim week 2 coverage**: Who covers Metagame and Social Dynamics production decisions 4/22-4/25?
2. [ ] **Jota S26 status**: What did Jota work on in S26 (HUD vs Actor System vs Pathfinding)? What continues in S27?
3. [ ] **Tutorial Node Migration completion**: Did it complete in S26? If not, how much carries into S27?
4. [ ] **WME design readiness**: Is S26 design/UX prep sufficient for Henrique to start engineering?
5. [ ] **P2 task breakdown**: When will the Social Dynamics P2 architecture/task breakdown be complete?
6. [ ] **Empire Progression Tree spec**: Does a design spec exist for Tiago?
7. [ ] **UI Foundation Sprint 2 scope**: Which sub-features are the focus?
8. [ ] **Art Brendan coverage**: Who covers Assoc. Art Director for 7 days?
9. [ ] **Dozer deliverables**: Should Dozer have defined sprint goals for M&Ms?
