---
Sprint: Zany Zebras 27
Dates: 4/14 - 4/28
Working Days: 10 (no studio-wide holidays)
Holidays: April 21 — Tiradentes (Brazil regional, affects BR team members)
Milestone: M&Ms (Multiplayer & Meta) — Sprint 2 of ~7
Mode: Preview
Generated: 2026-04-09 (updated — Empire M&Ms resequence)
---

# Sprint 27: Zany Zebras — PREVIEW

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 2 of ~7** in this milestone.
**Working Days**: 10 (no studio-wide holidays in this window)
**ClickUp List**: `901326453323`

> **Data freshness**: PTO from Google Calendar pull on 4/8. ClickUp data refreshed 4/9. ZZ sprint list is empty (no pre-staged tasks).
> **Updated 4/9**: Empire M&Ms resequenced — Tutorial Node Migration expanded to 2 sprints (S26-S27). WME eng start pushed to S28.

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
- **Henrique De Lima**: CHI-36213 (Tutorial Arch - Orchestration/State Tracking, **in progress**) and CHI-36212 (Tutorial Arch - Triggering, **to do**) — these are core Tutorial Node Migration work. With the resequence to 2 sprints (S26-S27), Henrique has the full sprint to complete tutorial architecture and migration.
- **Backlog items tagged for ZZ**: CHI-36411 (ZZ Player Journey/CG Revisions — Elise, Jacob, Chris Fidalgo), CHI-36381 (Tutorial Node Rewrites — Henrique, after Tutorial Arch completes)

### Open Questions
- [x] ~~Did Tutorial Node Migration complete in S26?~~ **Plan updated**: Tutorial Node Migration expanded to 2 sprints (S26-S27). S27 is Sprint 2 — expected.
- [ ] Is the WME spec (`planning/features/world_map_vs.md`) updated for "Multiple Nodes per Territory" scope? (Needed for S28 eng start)
- [ ] Will Tutorial Node Migration complete by end of S27? If not, WME eng start (S28) is at risk.

### Key Risks
- **Henrique is sole client engineer** — Tutorial Node Migration must complete this sprint or WME eng start (S28) slips.
- Diana/Yura have an extra sprint for WME UX exploration — this is an opportunity to mature design before eng starts. Ensure this time is used well.
- Diana misses sprint start day (4/14) — kickoff planning must happen end of S26.
- **Brazil holiday 4/21** costs Henrique and Laura each 1 day.

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
| Guilherme Quizzini  | Eng        | **9**      | 1. UI Foundation (Pipeline A, Sprint 2)                               | **Brazil holiday 4/21 = 9 days**. Dedicated to UI Foundation for the milestone (6 sprints). |
| Tiago Costa         | Eng        | 10         | 1. Empire Progression Tree (Pipeline B)                               | 1-sprint feature. Second sprint on team — assess ramp-up. Also has Data Tuning Tool (CHI-31707) in progress in backlog. |
| Dan Dupuis          | Eng Lead   | 10         | 1. UI Foundation oversight + architecture                             | Planning capacity only. Also Empire eng lead.                                         |
| Leonard Perez       | Design     | 10         | 1. UI Foundation design 2. Empire Progression Tree design support     |                                                                                       |
| Christopher Fidalgo | Design     | 10         | 1. CHI-36250 (T5/T6 rewards, carry-over) 2. ZZ Player Journey/CG Revisions (CHI-36411) 3. Narrative/Tutorial Design | S26 carry-over confirmed. High priority item must close early. |
| Kevin Ligon         | UX         | **8**      | 1. UI Foundation UX wireframes/flows                                  | Out 4/23-4/24. Front-load UX deliverables week 1.                                     |
| Miguel Duran        | UI Art     | 10         | 1. UI Foundation UI art                                               | Shared resource with Empire.                                                          |
| Hugo Hideo          | QA         | **9**      | 1. Empire Progression Tree QA (end of sprint) 2. Ongoing verification | **Brazil holiday 4/21 = 9 days**.                                                     |

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
  - CHI-36250: Enter T5 & T6 rewards (Chris, high priority, **confirmed still to do**)
- **Cross-pod**
  - CHI-36411: ZZ Player Journey/CG Revisions (Chris + Empire designers)

### Carry-Over from S26 (confirmed via ClickUp 4/8)
- **CHI-36250** (Chris Fidalgo, T5/T6 rewards) — **confirmed still to do**, high priority. Must close early in S27.

### Open Questions
- [ ] UI Foundation Sprint 2 scope: which sub-features are the focus? (Hero Info? Leveling? Gear?)
- [ ] Empire Progression Tree: does a design spec exist for Tiago to work from?
- [ ] Should UI Foundation link to an SHQ? (carried from S26)
- [ ] Tim out week 2 and Monday of week 1 return — who covers Metagame production decisions?
- [ ] Tiago has Data Tuning Tool epic (CHI-31707) in progress in backlog — is this competing with Empire Progression Tree?

### Key Risks
- **Tim out 4/22-5/01** (6 working days in this sprint = 5 lost) — producer coverage gap for Metagame AND Social Dynamics. Need backup decision-maker identified.
- Chris Fidalgo carry-over: CHI-36250 must close early in sprint or it compounds further.
- Kevin Ligon out 4/23-4/24 — front-load UX deliverables in week 1.
- Dan Dupuis split: UI Foundation (Metagame) + Empire eng lead oversight.
- **Brazil holiday 4/21**: Guilherme Quizzini and Hugo Hideo each lose 1 day.

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- Continue **Battle HUD Beta Overhaul** engineering (Sprint 2 of ~4) — must-have for M&Ms, validates BHQ-B2 (SHQ4-1)
- Lincoln Li: Battle HUD Design Doc (CHI-35036) in discipline review — finalize and hand off
- Continue design prep for upcoming features (Obstacles, Actor System Overhaul)
- Continue **Battle Content** and **Unit Content** pipelines

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Jota Oliveira | Eng | **9** | 1. Battle HUD Beta Overhaul (continued from S26) | **Brazil holiday 4/21 = 9 days**. Solo client engineer. Critical path for all Battle engineering. Also has Effect Stacking (CHI-35985) in backlog for ZZ. |
| Lincoln Li | Design Lead | 10 | 1. Battle HUD Design Doc finalization (CHI-35036, discipline review) 2. Future feature design prep | Partial — gymnastics 4/16, 4/23 (~1 hr each). |
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

- **SHQ4-1: HUD strategic + tactical play** (Epic CHI-36324, existing)
  - Battle HUD Beta Overhaul - Phase 2 (proposed)
    - Battle HUD - Engineering (Jota)
    - Battle HUD - Design Doc finalization (Lincoln, CHI-35036 in discipline review)
- **Standalone**
  - Battle Content - Sprint 27 (ongoing)
  - Unit Content - Sprint 27 (ongoing, multiple ZZ-tagged tasks)
  - Effect Stacking - Migrate patterns (CHI-35985, Jota — ZZ-tagged, if bandwidth allows)

### Open Questions
- [ ] What did Jota actually work on in S26 — HUD, Actor System Overhaul, or Pathfinding & AI? What carries into S27?
- [ ] Battle HUD estimate: 3 sprints or 4? Is the milestone breakdown still accurate?
- [ ] Effect Stacking (CHI-35985) is tagged for ZZ — does Jota have bandwidth alongside HUD?

### Key Risks
- **Solo engineer (Jota)**: All features sequential. Any delay cascades through the entire M&Ms milestone. Brazil holiday 4/21 reduces him to 9 days.
- If HUD runs long, Obstacles / Actor System / Pathfinding compress further. 4 features totaling ~9 eng-sprints in a 7-sprint milestone is already tight.
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
- [ ] P2 architecture/task breakdown: CHI-36382 **confirmed still to do** in ClickUp (4/8). Must complete in week 1 or engineers lack direction.
- [ ] Tim out 4/22-5/01 — who covers Social Dynamics production decisions?
- [ ] Switchover assessment: what criteria determine if in-client is playtest-ready?

### Key Risks
- **Tim out 4/22-5/01** — producer gap for Social Dynamics (and Metagame). Need backup.
- **P2 architecture/task breakdown not complete** — CHI-36382 still to do after full sprint. Until this finishes, engineers may be blocked or working without clear direction. This is a Sprint 1 carry-over that should have been done already.
- Randy/Garrett Dozer split continues — 2 of 5 engineers at risk of interruption.
- **Brazil holiday 4/21**: Gabriel, Marcos, and Bruno each lose 1 day (9 avail each).
- Phase 2 is ~1 month. If S26 work was slowed by P1 overflow or missing breakdown, P2 timeline compresses.

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas | **Producer**: Thorben Novais

### Sprint Goals
- Continue infrastructure support and performance monitoring
- Continue UI Framework V2 support (cross-pod)
- EKS deployment — verify S26 deployments completed

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 10 | 1. Infrastructure support 2. UI Framework V2 support 3. Multiplayer support | Also Social Dynamics eng lead. |
| Bruno Freitas | Eng | **9** | 1. Build pipeline / tools | **Brazil holiday 4/21 = 9 days**. |

### Open Questions
- [ ] Should Dozer have defined M&Ms deliverables per sprint? (Carried from S26)
- [ ] EKS deployment status: did S26 deployments (Prod/Stage) complete?

### Key Risks
- No defined sprint goals — hard to measure progress or flag delays.
- Derek split between Dozer and Social Dynamics eng lead responsibilities.
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

### Carry-Over from S26 (confirmed via ClickUp 4/8)
- **Marcos Teles**: CHI-36339 (Territory Map texture flickering T6, **in progress**), CHI-36431 (Territory Map shader statue glowing, **to do**)
- **Marcos Teles backlog in flight**: CHI-36374 (animated loading visualization, in progress)

### Open Questions
- [ ] Brendan out 8 of 10 days — who covers Assoc. Art Director responsibilities? Kevin Griffith solo?
- [ ] Art priority conflicts: Battle HUD vs UI Foundation vs WME — which gets art resources first?
- [ ] Pedro returns 4/22 — what should he focus on for the remaining 4 days?

### Key Risks
- **Brendan Cheatham out 8 of 10 days** — art direction coverage thinned significantly. Kevin Griffith covers solo.
- Pedro Sarraf only available 4 days (returns 4/22) — limited tech art capacity.
- Danny Oliveira (Battle VFX) out 3 days total — Alessandro covers VFX.
- **Brazil holiday 4/21** hits multiple art team members: Guilherme Lascasas, Thiago Saraiva, Marcos Teles all lose 1 day.
- Cross-pod art demands intensifying as M&Ms features ramp up (HUD, UI Foundation, WME all need art).
- **Art backlog is deep** — ClickUp shows many open art tasks in Product Backlog. Prioritization needed.

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Tutorial Node Migration (Empire)**: Henrique continues Tutorial Node Migration (Sprint 2 of 2). No handoff needed — WME eng pushed to S28.
- **WME design prep (Empire)**: Diana/Yura have extra UX exploration time before S28 eng start. Design should be well-matured by sprint end.
- **Building Upgrades -> Empire Progression Tree**: Tiago Costa finishes Building Upgrades (S26) and starts Empire Progression Tree (S27). Smooth transition needed. Verify no conflict with Data Tuning Tool epic (CHI-31707).
- **P2 architecture breakdown -> Social Dynamics engineering**: CHI-36382 confirmed still to do. Until done, 4 engineers may lack clear direction.
- **Battle HUD Design Doc -> Engineering**: Lincoln's CHI-35036 is in discipline review. Must finalize for Jota's continued HUD work.

### Shared Resource Conflicts
- **Miguel Duran** (UI Artist): Metagame UI Foundation primary. Empire may need WME UI art.
- **Derek Gallant**: Dozer infrastructure + Social Dynamics eng lead. Critical path for multiplayer.
- **Dan Dupuis**: Metagame eng lead (UI Foundation) + Empire eng lead.
- **Chris Fidalgo**: Assigned to both CHI-36250 (Metagame carry-over) and CHI-36411 (ZZ Player Journey — Empire cross-pod).

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
- Map Goals Handshake (Empire/Battle/Metagame) — dependency to watch as WME engineering starts.

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

1. **Tim out 5 working days** (4/22-5/01) — two pods (Metagame + Social Dynamics) without producer. Need backup identified.
2. **Empire: Tutorial Node Migration must complete S27** — Henrique has full sprint (CHI-36213, CHI-36212, tutorial migration eng). If this overflows into S28, WME eng start slips.
3. **Social Dynamics P2 architecture breakdown still to do** — CHI-36382 confirmed still to do after full S26 sprint. 4 engineers may lack clear direction at sprint start.
4. **Brendan Cheatham out 8/10 days** — art direction thinned. Kevin Griffith covers solo.
5. **Battle solo engineer (Jota)** — all features sequential, any delay cascades through M&Ms. Brazil holiday reduces him to 9 days.
6. **Brazil holiday April 21** — 18 team members lose 1 day. Concentrated impact on Social Dynamics (3/5 engineers) and Battle (sole eng).
7. **Metagame: Chris carry-over confirmed** — CHI-36250 (T5/T6 rewards) still to do after full sprint. Must close early in S27.

### Open Questions (resolve before kickoff)

1. [ ] **Tim week 2 coverage**: Who covers Metagame and Social Dynamics production decisions 4/22-5/01?
2. [ ] **Jota S26 status**: What did Jota work on in S26 (HUD vs Actor System vs Pathfinding)? What continues in S27?
3. [x] ~~**Tutorial Node Migration timeline**~~: **Plan updated** — expanded to 2 sprints (S26-S27). Henrique has full S27 dedicated to tutorial work.
4. [ ] **WME design readiness for S28**: Will Diana/Yura UX exploration be mature enough for Henrique to start WME engineering in S28?
5. [x] ~~**P2 task breakdown**~~: CHI-36382 **confirmed still to do**. Must complete early S27 or engineers lack direction.
6. [ ] **Empire Progression Tree spec**: Does a design spec exist for Tiago?
7. [ ] **Tiago competing priorities**: Data Tuning Tool epic (CHI-31707) in progress — does this conflict with Empire Progression Tree?
8. [ ] **UI Foundation Sprint 2 scope**: Which sub-features are the focus?
9. [ ] **Art Brendan coverage**: Who covers Assoc. Art Director for 8 days?
10. [ ] **Dozer deliverables**: Should Dozer have defined sprint goals for M&Ms?
