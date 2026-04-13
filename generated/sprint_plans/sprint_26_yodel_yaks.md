---
Sprint: Yodel Yaks 26
Dates: 3/31 - 4/14
Working Days: 9 (after Good Friday holiday)
Holidays:
  - Good Friday (Apr 3) — Fortis-wide studio closure
  - Easter Monday (Apr 6) — Canadian statutory holiday (affects subset of staff)
Milestone: M&Ms (Multiplayer & Meta) — Sprint 1 of ~7
Mode: Kickoff
Generated: 2026-04-08 (mid-sprint snapshot)
---

# Sprint 26: Yodel Yaks — KICKOFF

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 1 of ~7** in this milestone. First sprint of M&Ms.
**Working Days**: 9 (10 weekdays minus Good Friday Apr 3)
**ClickUp List**: `901326453291` (6 tasks as of 4/8)
**Snapshot Date**: April 8 — mid-sprint (day 6 of 9)

### Studio Holidays

- **Good Friday (Apr 3)**: Fortis-wide closure. All staff off.
- **Easter Monday (Apr 6)**: Canadian statutory holiday. Confirmed out: Brendan Cheatham, Christopher Fidalgo, Garrett Eidsvig, James Fielding. Others may also observe.

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Henrique De Lima (sole client eng)
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- **Tutorial Node Migration** engineering (Henrique, 1-sprint effort) — designer tooling enablement
- Begin **World Map Experience** design/UX prep — front-loading for Sprint 27 eng start
- Continue **Map Content** pipeline (T5/T6) — validates SHQ3-1

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Henrique De Lima | Eng | 9 | 1. Tutorial Node Migration eng 2. Tutorial Arch carry-over (CHI-36213, CHI-36212) | S25 carry-over: CHI-36213 (in progress), CHI-36212 (to do). Partial appts 4/1, 4/8. |
| Diana Vasilescu | Design | 8 | 1. World Map Experience design prep — scoping "Multiple Nodes per Territory" for S27 eng start | Out 4/14 (S27 start day) |
| Yura Rusin | UX | 8 | 1. World Map Experience UX flows | Heavy appt load: 4/6 Dr, 4/7 school, 4/9 Dr x2, 4/13 Dr x2, 4/14 Dr. |
| Jacob Siegel | Design | **4** | 1. Map Content (T5/T6 iterations) | **Out 3/31-4/3** (OOO + Good Friday). Partial 4/10, 4/14 (doctor appts). Only available ~4/7-4/13. |
| Elise Cole | Design | 9 | 1. Consolidating source of truth for Narrative 2. Map Content coverage | Solo-covering Map Content while Jacob is out |
| Laura Santana | QA | 9 | 1. Bug verification 2. Tutorial Node Migration QA (when ready) | CHI-35674 (T5/T6 playable) completed. |
| Guilherme Lascasas | 2D Env Concept | 7 | 1. Environment Art (Empire map tiles) | Out 4/13-4/14 (2 days) |
| Thiago Saraiva | Senior 3D | 9 | 1. 3D art (Empire) | |
| Marcos Teles | Tech Art | 9 | 1. CHI-36339 T6 flickering (in progress) 2. CHI-36431 Statue shader (to do) | Both tasks in ClickUp sprint list |

### ClickUp Ticket Summary

**In Sprint List (6 tasks)**:
- CHI-36213: Tutorial Architecture - Orchestration (Henrique, in progress)
- CHI-36212: Tutorial Architecture - Triggering (Henrique, to do)
- CHI-36339: Territory Map T6 texture flickering (Marcos Teles, in progress)
- CHI-36431: Territory Map statue shader glow (Marcos Teles, to do)
- CHI-36250: Enter T5 & T6 rewards (Chris Fidalgo, to do — Metagame carry-over)
- CHI-35674: T5/T6 playable (Laura Santana, **complete**)

**Not yet scaffolded** (proposed at kickoff, not yet created):
- Tutorial Node Migration - Engineering (Henrique)
- World Map Experience - Design Prep (Diana)
- World Map Experience - UX (Yura)
- Map Content - Sprint 26 (Jacob/Elise, ongoing)

### Carry-Over from S25
- **Henrique De Lima**: CHI-36213 (Tutorial Architecture - Orchestration, in progress), CHI-36212 (Tutorial Architecture - Triggering, to do) — both feed directly into Tutorial Node Migration

### Key Risks
- Henrique is sole client engineer — no engineering parallelism
- Jacob out ~5 of 9 days — Elise solo-covers Map Content
- Yura heavy appointment load — may impact WME UX delivery
- WME design/UX prep must be far enough for Henrique to start engineering in S27
- No ClickUp tasks exist for Tutorial Node Migration itself — only the prerequisite Tutorial Architecture tasks

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Guilherme Quizzini (Pipeline A), Tiago Costa (Pipeline B)
**Eng Lead**: Dan Dupuis (planning capacity, oversight) | **QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- Start **UI Foundation** (Pipeline A, Sprint 1 of 6) — foundation for Hero Info, Leveling, Gear, Badging, Tutorials/Narrative
- Complete **Building Upgrades** (Pipeline B, 1-sprint feature)
- Resolve Chris Fidalgo S25 carry-over — CHI-36250 (T5/T6 rewards, high priority)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Guilherme Quizzini | Eng | 9 | 1. UI Foundation (Pipeline A, Sprint 1 of 6) | Dedicated to UI Foundation for the milestone |
| Tiago Costa | Eng | 9 | 1. Building Upgrades (Pipeline B) | New hire, first milestone. 1-sprint feature. May need ramp-up support. |
| Dan Dupuis | Eng Lead | 9 | 1. UI Foundation oversight + architecture | Planning capacity only. Also Empire eng lead. Partial appts 4/7, 4/9. |
| Leonard Perez | Design | 9 | 1. UI Foundation design direction 2. Building Upgrades design support | |
| Christopher Fidalgo | Design | **8** | 1. CHI-36250 Enter T5 & T6 rewards (high priority) 2. S25 carry-over triage (5 more open tasks) | Easter Monday 4/6. Partial 4/8 (doc appt). **6 open S25 tasks** total. |
| Kevin Ligon | UX | 9 | 1. UI Foundation UX wireframes/flows | Foundation UX for metagame screens |
| Miguel Duran | UI Art | 9 | 1. UI Foundation UI art 2. CHI-36195 elemental swaps (S25 carry-over, high priority) | Shared resource with Empire. |
| Hugo Hideo | QA | 9 | 1. Building Upgrades QA (end of sprint) 2. S25 verification | Partial 4/1 (dentist). |

### ClickUp Ticket Summary

**In Sprint List**:
- CHI-36250: Enter T5 & T6 rewards (Chris Fidalgo, to do, **high priority** — S25 carry-over)

**Not yet scaffolded** (proposed):
- UI Foundation - Sprint 1 (Guilherme, Kevin, Miguel)
- Building Upgrades - Engineering (Tiago)
- Building Upgrades - QA (Hugo, end of sprint)

### Carry-Over from S25
- **Christopher Fidalgo** (6 open tasks):
  - CHI-36250: Enter T5 & T6 rewards (to do, **high priority**)
  - CHI-36295: Clean-up RPS item naming (to do, normal)
  - CHI-35840: Tutorial: Dungeon Army Preset (to do, normal)
  - CHI-35839: Tutorial: Dungeon System Introduction (to do, low)
  - CHI-36252: Max level tuning (to do, low)
  - CHI-36225: Review First Clear rewards for Gear Dungeon (to do, low)
- **Miguel Duran**: CHI-36195 — Update UI Art assets for elemental swaps (in progress, high priority)

### Key Risks
- Chris Fidalgo: 6 open S25 tasks — heavy carry-over. CHI-36250 is high priority.
- Miguel Duran: shared UI artist between Metagame and Empire. S25 carry-over pending.
- Building Upgrades spec — does a design source exist for Tiago?
- Tiago is new hire — may need pairing/support for Building Upgrades.
- UI Foundation scope for Sprint 1: which sub-features come first needs definition.
- UI Foundation has no SHQ mapping — should it link to a validation question?

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals (Planned)
- Start **Battle HUD Beta Overhaul** (Sprint 1 of ~4) — must-have for M&Ms, validates BHQ-B2
- Front-load design work on **Obstacles**, **Actor System Overhaul**, **Pathfinding & AI** while Jota focuses on HUD
- Continue **Battle Content** and **Unit Content** pipelines

### Actual Work Completed
- **Actor System Overhaul**: ENG plan completed by Jota
- **Bug fixes**: Priority bugs addressed
- **PTC Feedback tasks**: Implemented feedback from playtest
- Continue **Battle Content** and **Unit Content** pipelines
- Battle HUD Beta Overhaul deferred to Sprint 27

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Jota Oliveira | Eng | **8** | 1. Actor System Overhaul ENG plan 2. Bug fixes 3. PTC Feedback tasks | **Out 3/31** (misses kickoff). Solo engineer — critical path. |
| Lincoln Li | Design Lead | **5** | 1. Battle HUD design direction 2. Coordinate design prep for future features | **PTO 4/6-4/9** (3 days). Partial appts 4/2 (gymnastics + eye doc + dentist). |
| Nathan Hajek | Design | 9 | 1. Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Design | 9 | 1. Battle Content pipeline | Ongoing |
| Vishaal Gupta | Design | **7** | 1. Battle Content + unit balance | **Out 4/2** (full day). Partial 3/31, 4/9 (appts). |
| Julio Scarabelli | QA | **8** | 1. S25 bug verification 2. Battle HUD QA prep | Out 4/3 (1 day). |
| Danny Oliveira | Art (VFX) | 9 | 1. VFX implementation and polish | Starting VFX this sprint |
| Alessandro Oliveira | Art (VFX) | 9 | 1. New VFXs | Starting VFX this sprint |
| Vinod Rams | Art (Lead 2D Concept) | **8** | 1. New unit concepts (Boss, Shared Assets for Heroes) | **Out 3/31** (1 day) |
| Ben Clair | Art (Sr Tech Art) | **7** | 1. Unit Content art | **Out 4/2** (full day). Partial 3/31 (appt). |
| Felipe Chaves | Art (Staff 3D Char) | 9 | 1. Trench Knight 3D | Partial appts 3/31, 4/10. |
| Tony Bonilla | Art (Lead Animator) | **5** | 1. Unit Content art | **Out 4/2-4/3, 4/6-4/11** (~4 days). Significantly reduced capacity. |
| Vinicius Muniz | Art (Char Concept) | 9 | 1. Unit Content art | |

### ClickUp Ticket Summary

**In Sprint List**: No Battle tasks in ClickUp sprint list.

**Not yet scaffolded** (proposed):
- Battle HUD Beta Overhaul - Phase 1 Engineering (Jota)
- Battle HUD Beta Overhaul - Design (Lincoln)
- Obstacles - Design Prep (Nathan)
- Battle Content - Sprint 26 (ongoing)
- Unit Content - Sprint 26 (ongoing)

### Key Risks
- **Solo engineer**: Jota is the only client engineer. All features are sequential — any delay cascades.
- Jota misses kickoff day (3/31) — needs setup/planning without him.
- **Lincoln Li out 4+ days** (PTO 4/6-4/9 + heavy appts 4/2) — design direction gap mid-sprint. Battle HUD design pacing at risk.
- **Tony Bonilla out ~4 of 9 days** — animation pipeline capacity significantly reduced.
- 4 features totaling ~9 eng-sprints in a 7-sprint milestone. Tight.
- Battle HUD estimate ambiguity: plan says 3-4 sprints. Needs clarification.
- No Battle tasks in ClickUp sprint list — task scaffolding needed.

> **Capacity Warning**: Battle has 1 client engineer (Jota) with only 8 available days and the design lead (Lincoln) only available ~5 days.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Gabriel Arruda, Marcos Loures, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- Wrap **Phase 1** (Infrastructure & Foundation, ETA was 3/30) — any overflow lands here
- Start **Phase 2** (Map Foundation) — core multiplayer map build-up begins
- Continue **AI Prototype Playtesting** and **Multiplayer Networking** tracks

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Gabriel Arruda | Eng | 9 | 1. P2: Map Foundation | Transitioning from Empire — needs clean handoff |
| Marcos Loures | Eng | 9 | 1. P2: Map Foundation | Transitioning from Empire — needs clean handoff |
| Randy Pasion | Eng | **5** | 1. P1 wrap-up (3/31 only) 2. P2: Map Foundation (after PTO) | **Out 4/1-4/7** (4 working days PTO). Dozer split risk. Available: 3/31, 4/8-4/10, 4/13. |
| Garrett Eidsvig | Eng | **7** | 1. P2: Map Foundation - multiplayer infrastructure | Out 4/3 + Easter Monday 4/6 (2 days). Dozer split risk. |
| Bruno Bacelar | Eng | 9 | 1. Multiplayer Networking | Parallel track, dedicated |
| Paul Flores | Design | 9 | 1. AI Prototype Playtesting 2. P2 design direction | |

### ClickUp Ticket Summary

**In Sprint List**: No Social Dynamics tasks in ClickUp sprint list.

**Not yet scaffolded** (proposed):
- Multiplayer Maps - Phase 2: Map Foundation Engineering (Gabriel, Marcos, Randy post-PTO, Garrett)
- Multiplayer Networking - Sprint 26 (Bruno)
- AI Prototype Playtesting - Sprint 26 (Paul)
- P1 Infrastructure wrap-up (Randy — 3/31 only)

### Key Risks
- **Phase 1 overflow**: ETA was 3/30. If not complete, overflow consumes Randy's single day (3/31) before PTO.
- **Randy only 5 available days** + Dozer split. Garrett out 2 days + Dozer split. 2 of 5 engineers at reduced capacity.
- Gabriel Arruda and Marcos Loures transitioning from Empire — handoff readiness uncertain.
- Phase 2 engineering breakdown: detailed task list needed for 4-engineer team.

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas | **Producer**: Thorben Novais

### Sprint Goals (Planned)
- EKS infrastructure deployment (Prod week 1, Stage week 2) — critical path for multiplayer
- Multiplayer support infrastructure
- Build pipeline maintenance + Single Config Editor

### Actual Work Completed
- EKS infrastructure deployment started (Prod/Stage) — **completing in S27**
- Multiplayer support infrastructure work
- Build pipeline maintenance

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 9 | 1. EKS Prod (week 1) 2. EKS Stage (week 2) 3. Multiplayer Support 4. UI Framework V2 | Also Social Dynamics eng lead |
| Bruno Freitas | Eng | 9 | 1. Single Config Editor 2. Build Info/Logs | |

### ClickUp Ticket Summary

**In Sprint List**: No Dozer tasks in ClickUp sprint list.

### Key Risks
- EKS deployments are critical path for multiplayer readiness (Social Dynamics dependency)
- Randy and Garrett (Social Dynamics) may be pulled for Dozer infra work
- Derek split between Dozer leadership and Social Dynamics eng lead

### Outcomes
- EKS deployment initiated, continues into Sprint 27 for completion

---

## Art

**Art Director**: Kevin Griffith | **Assoc. Art Director**: Brendan Cheatham | **Producer**: Brann Livesay

### Sprint Goals
- Continue **Character Assets**, **Environment Art**, **UI/UX Assets** pipelines
- Start **VFX & Animation** track (new for M&Ms — Danny + Alessandro)
- Cross-pod asset delivery for Battle HUD (Battle), UI Foundation (Metagame), World Map Experience (Empire)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Kevin Griffith | Art Director | 9 | 1. Cross-pod art direction + pipeline oversight | Partial 3/31 (appt). |
| Brendan Cheatham | Assoc. AD | **8** | 1. Cross-pod art direction | Easter Monday 4/6. Partial 4/8 (doc appt). |
| Pedro Sarraf | Lead Tech Art | **2** | 1. Current assignments (3/31-4/2 only) | **Out 4/3-4/22** (extends into S27). Only available first 2 working days. |
| Lawrence Steele | Audio | 9 | 1. Sound design | |

> **Note**: Battle art team (Danny, Alessandro, Vinod, Ben, Felipe, Tony, Vini) listed under Battle pod. Empire art team (Guilherme Lascasas, Thiago Saraiva, Marcos Teles) listed under Empire pod.

### ClickUp Ticket Summary

**In Sprint List** (assigned to Marcos Teles, listed under Empire):
- CHI-36339: Territory Map T6 texture flickering (in progress)
- CHI-36431: Territory Map statue shader glow T5 (to do)

### Key Risks
- Pedro Sarraf out 7 of 9 days (only 2 available) — Lead Tech Art coverage severely reduced
- Tony Bonilla (Battle art) out ~4 of 9 days — animation pipeline capacity hit
- Art priority conflicts: Battle HUD vs UI Foundation vs World Map Experience — resource allocation needed
- VFX & Animation track starting fresh — ramp-up time may impact delivery

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Gabriel Arruda + Marcos Loures**: Transitioning from Empire to Social Dynamics. Need clean handoff from Empire work.
- **Tiago Costa**: Assigned to Metagame Pipeline B (Building Upgrades). SocialDynamics_Plan.md may still reference him — needs update.
- **Dan Dupuis**: Eng Lead for both Empire and Metagame. UI Foundation (Metagame) is primary focus, but may need to support Tutorial Node Migration architecture questions.

### Shared Resource Conflicts
- **Miguel Duran** (UI Artist): Metagame UI Foundation primary. Empire may need UI art later. S25 carry-over (CHI-36195) still pending.
- **Derek Gallant**: Dozer EKS deployments + Social Dynamics eng lead. Critical path for multiplayer.
- **Dan Dupuis**: Metagame eng lead (UI Foundation) + Empire eng lead.

### Milestone Context
- **Sprint 1 of M&Ms**. Milestone transition from Systems Validation.
- M&Ms success criteria: multiplayer foundations, territory map at scale, empire strategy connection, metagame depth.
- Key SHQs entering active testing: SHQ4-1 (Battle HUD), SHQ3-1/SHQ3-2 (Territory Map — future sprints), SHQ3-16 (Multiplayer maps).
- ClickUp sprint list sparsely populated (6 tasks) — most planned work not yet scaffolded.

---

## Capacity Summary

**Total Working Days**: 9 (Good Friday Apr 3 is Fortis-wide studio closure)
**Easter Monday (Apr 6)**: Canadian holiday — confirmed out: Brendan Cheatham, Christopher Fidalgo, Garrett Eidsvig, James Fielding.

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Henrique De Lima | Empire | 9 | Partial appts 4/1, 4/8. S25 carry-over. |
| Diana Vasilescu | Empire | 8 | Out 4/14 (S27 boundary) |
| Yura Rusin | Empire (UX) | 8 | Heavy appt load (4/6, 4/7, 4/9 x2, 4/13 x2, 4/14) |
| Jacob Siegel | Empire | **4** | Out 3/31-4/3. Partial 4/10, 4/14. |
| Elise Cole | Empire | 9 | |
| Laura Santana | QA (Empire) | 9 | |
| Guilherme Lascasas | Empire (Art) | 7 | Out 4/13-4/14 |
| Thiago Saraiva | Empire (Art) | 9 | |
| Marcos Teles | Empire (Tech Art) | 9 | ClickUp art bugs assigned |
| Guilherme Quizzini | Metagame | 9 | Pipeline A: UI Foundation |
| Tiago Costa | Metagame | 9 | Pipeline B: Building Upgrades. New hire. |
| Dan Dupuis | Metagame | 9 | Eng Lead, planning capacity. Partial 4/7, 4/9. |
| Leonard Perez | Metagame | 9 | |
| Christopher Fidalgo | Metagame | **8** | Easter Monday 4/6. Partial 4/8. **6 open S25 tasks** |
| Kevin Ligon | Metagame (UX) | 9 | |
| Miguel Duran | Metagame (UI Art) | 9 | Shared resource. S25 carry-over. |
| Hugo Hideo | QA (Metagame) | 9 | Partial 4/1 (dentist). |
| Jota Oliveira | Battle | **8** | Out 3/31. Solo engineer. |
| Lincoln Li | Battle | **5** | PTO 4/6-4/9 (3 days). Heavy appts 4/2. |
| Nathan Hajek | Battle | 9 | |
| Dylan Jeffery | Battle | 9 | |
| Vishaal Gupta | Battle | **7** | Out 4/2. Partial 3/31, 4/9. |
| Julio Scarabelli | QA (Battle) | **8** | Out 4/3 |
| Danny Oliveira | Battle (Art) | 9 | VFX starting |
| Alessandro Oliveira | Battle (Art) | 9 | VFX starting |
| Vinod Rams | Battle (Art) | **8** | Out 3/31 |
| Ben Clair | Battle (Art) | **7** | Out 4/2. Partial 3/31. |
| Felipe Chaves | Battle (Art) | 9 | Partial 3/31, 4/10 |
| Tony Bonilla | Battle (Art) | **5** | Out 4/2-4/3, 4/6-4/11. Heavy PTO. |
| Vinicius Muniz | Battle (Art) | 9 | |
| Gabriel Arruda | Social Dynamics | 9 | Transitioning from Empire |
| Marcos Loures | Social Dynamics | 9 | Transitioning from Empire |
| Randy Pasion | Social Dynamics | **5** | Out 4/1-4/7 + Dozer split |
| Garrett Eidsvig | Social Dynamics | **7** | Out 4/3, 4/6 (Easter Mon) + Dozer split |
| Bruno Bacelar | Social Dynamics | 9 | |
| Paul Flores | Social Dynamics | 9 | |
| Derek Gallant | Dozer | 9 | Also SD eng lead |
| Bruno Freitas | Dozer | 9 | |
| Kevin Griffith | Art | 9 | Partial 3/31 |
| Brendan Cheatham | Art | **8** | Easter Monday 4/6. Partial 4/8. |
| Pedro Sarraf | Art | **2** | Out 4/3-4/22. Only available 3/31-4/2. |
| Lawrence Steele | Art (Audio) | 9 | |
| Hafiz Kassam | QA (Lead) | **8** | Easter Monday 4/6 (assumed, Canadian) |

### Leadership (not assigned to sprint work)
| Person | Role | Notes |
|--------|------|-------|
| James Fielding | Game Director | Easter Monday 4/6 |
| Holly Mellor | Executive Producer | |
| Tim Williams | Producer (Metagame, Social Dynamics) | |
| Brann Livesay | Producer (Empire, Art) | Partial 4/8 |
| Thorben Novais | Producer (Battle, Dozer) | Partial 4/8 (work exam) |

---

## Active SHQ Epics (from ClickUp)

| SHQ | Status | Relevant This Sprint? |
|-----|--------|----------------------|
| SHQ3-1 | IN PROGRESS | Background — Empire territory map production pipeline |
| SHQ3-24 | IN PROGRESS | Background — art direction clarity |
| SHQ3-26 | PENDING VALIDATION | Background — hero/troop collection motivation |
| SHQ3-27 | IN PROGRESS | Background — scalable battle building |
| SHQ3-28 | IN PROGRESS | Background — unit production pipeline |
| SHQ4-1 | IN PROGRESS | Yes — Battle HUD (Jota's primary focus) |

---

## Key Action Items

1. **Scaffold ClickUp tasks** — Sprint list only has 6 items; most planned work is not yet represented
2. **Confirm Building Upgrades spec** — Tiago needs design direction for his first feature
3. **Chris Fidalgo carry-over triage** — which of his 6 S25 tasks are must-finish vs deferrable?
4. **Battle HUD SHQ Epic** — should one be created or mapped to existing?
5. **UI Foundation SHQ mapping** — should this link to a validation question?
6. **Phase 2 task breakdown** — Social Dynamics needs a detailed engineering plan for 4-engineer team
