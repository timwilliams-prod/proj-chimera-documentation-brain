---
Sprint: Yodel Yaks 26
Dates: 3/31 - 4/14
Working Days: 9 (after Good Friday holiday)
Holidays:
  - Good Friday (Apr 3) — Fortis-wide studio closure
  - Easter Monday (Apr 6) — Canadian statutory holiday (affects some staff)
Milestone: M&Ms (Multiplayer & Meta) — Sprint 1 of ~7
Mode: Kickoff
Generated: 2026-03-30
---

# Sprint 26: Yodel Yaks — KICKOFF

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 1 of ~7** in this milestone. First sprint of M&Ms.
**Working Days**: 9 (10 weekdays minus Good Friday Apr 3)
**ClickUp List**: `901326453291`

### Studio Holidays

- **Good Friday (Apr 3)**: Fortis-wide closure. All staff off.
- **Easter Monday (Apr 6)**: Canadian statutory holiday. Hafiz Kassam (QA Lead) confirmed out. Other Canadian staff may also observe — confirm with team.

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Henrique De Lima (sole client eng)
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- **Tutorial Node Migration** engineering (Henrique, 1-sprint effort) — designer tooling enablement
- Begin **World Map Experience** design/UX prep — front-loading for Sprint 27 eng start
- Continue **Map Content** pipeline — validates SHQ3-1

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Henrique De Lima | Eng | 9 | 1. Tutorial Node Migration eng | S25 carry-over: CHI-36213 (in progress), CHI-36212 (to do) — tutorial arch feeds into this. Partial appts 4/1, 4/8. |
| Diana Vasilescu | Design | 9 | 1. World Map Experience design prep — scoping "Multiple Nodes per Territory" for S27 eng start | Out 4/14 (S27 start day) |
| Yura Rusin | UX | 9 | 1. World Map Experience UX flows | UX for multiple nodes, world map interactions. Partial appts 4/6, 4/7. |
| Jacob Siegel | Design | **4** | 1. Map Content (T5/T6 iterations) | **Out 3/31-4/7** (5 days PTO). Only available 4/8-4/13. |
| Elise Cole | Design | 9 | 1. Consolidating source of truth for Narrative 2. Map Content coverage | Solo-covering Map Content while Jacob is out |
| Laura Santana | QA | 9 | 1. Bug verification 2. Tutorial Node Migration QA (when ready) | |

### ClickUp Ticket Summary

- **Standalone / No SHQ**
  - Tutorial Node Migration - Engineering (Henrique) — *proposed*
  - Tutorial Node Migration - QA (Laura, end of sprint) — *proposed*
  - World Map Experience - Design Prep (Diana) — *proposed*
  - World Map Experience - UX (Yura) — *proposed*
  - Map Content - Sprint 26 (Jacob/Elise, ongoing) — *proposed*

### Carry-Over from S25
- **Henrique De Lima**: CHI-36213 (Tutorial Architecture - Orchestration, in progress), CHI-36212 (Tutorial Architecture - Triggering, to do) — both feed directly into Tutorial Node Migration
- **Diana Vasilescu**: CHI-36224 (Governors Design) — status unknown, may carry over

### Key Risks
- Henrique is sole client engineer — no engineering parallelism
- Jacob out 5 of 9 days — Elise solo-covers Map Content
- WME design/UX prep must be far enough for Henrique to start engineering in S27
- No ClickUp tasks exist for Tutorial Node Migration — scaffold at kickoff

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Guilherme Quizzini (Pipeline A), Tiago Costa (Pipeline B)
**Eng Lead**: Dan Dupuis (planning capacity, oversight) | **QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- Start **UI Foundation** (Pipeline A, Sprint 1 of 6) — foundation for Hero Info, Leveling, Gear, Badging, Tutorials/Narrative
- Complete **Building Upgrades** (Pipeline B, 1-sprint feature)
- Support metagame systems depth for M&Ms validation

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Guilherme Quizzini | Eng | 9 | 1. UI Foundation (Pipeline A) | Dedicated to UI Foundation for the milestone (6 sprints) |
| Tiago Costa | Eng | 9 | 1. Building Upgrades (Pipeline B) | New hire, first milestone. 1-sprint feature — should complete this sprint. May need ramp-up support. |
| Dan Dupuis | Eng Lead | 9 | 1. UI Foundation oversight + architecture | Planning capacity only. Also Empire eng lead. |
| Leonard Perez | Design | 9 | 1. UI Foundation design direction 2. Building Upgrades design support | |
| Christopher Fidalgo | Design | 9 | 1. S25 carry-over 2. Metagame design support | **6 open S25 tasks** (see carry-over). CHI-36250 (Enter T5 & T6 rewards) is high priority. |
| Kevin Ligon | UX | 9 | 1. UI Foundation UX wireframes/flows | Foundation UX for metagame screens |
| Miguel Duran | UI Art | 9 | 1. UI Foundation UI art | S25 carry-over: CHI-36195 (elemental swaps, in progress, high priority). Shared resource with Empire. |
| Hugo Hideo | QA | 9 | 1. Building Upgrades QA (end of sprint) 2. S25 verification | |

### ClickUp Ticket Summary

- **No SHQ mapped yet** (UI Foundation should link to a validation question — open item)
  - UI Foundation - Sprint 1 (proposed)
    - UI Foundation - UX Design (Kevin)
    - UI Foundation - Engineering (Guilherme)
    - UI Foundation - UI Art (Miguel)
  - Building Upgrades (proposed, 1 sprint)
    - Building Upgrades - Engineering (Tiago)
    - Building Upgrades - QA (Hugo)

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
- Building Upgrades spec — does one exist? Design source needed for Tiago.
- Tiago is new hire — may need pairing/support for Building Upgrades.
- UI Foundation scope for Sprint 1: which sub-features come first needs definition.
- UI Foundation has no SHQ mapping — should it link to a validation question?

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- Start **Battle HUD Beta Overhaul** (Sprint 1 of ~4) — must-have for M&Ms, validates BHQ-B2
- Front-load design work on **Obstacles**, **Actor System Overhaul**, **Pathfinding & AI** while Jota focuses on HUD
- Continue **Battle Content** and **Unit Content** pipelines

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Jota Oliveira | Eng | **8** | 1. Actor System Overhaul 2. Pathfinding & AI improvements | **Out 3/31** (misses kickoff). Solo engineer — critical path. Starts 4/1. |
| Lincoln Li | Design Lead | 9 | 1. Battle HUD design direction 2. Coordinate design prep for future features | Partial — gymnastics 4/2, 4/9 (~1 hr each) |
| Nathan Hajek | Design | 9 | 1. Unit Design & Prototype (M&M) | |
| Dylan Jeffery | Design | 9 | 1. Battle Content pipeline | Ongoing |
| Vishaal Gupta | Design | **8** | 1. Battle Content + unit balance | **Out 4/2** (1 day) |
| Julio Scarabelli | QA | 9 | 1. S25 bug verification 2. Battle HUD QA prep | |
| Alessandro Oliveira | Art | 9 | 1. New VFXs | Starting this sprint |
| Danny Oliveira | Art | 9 | 1. VFXs implementation and polish | Starting this sprint |
| Vinod Rams | Art | **8** | 1. New unit concepts (Boss, Shared Assets for Heroes) | **Out 3/31** (1 day) |
| Ben Clair | Art | 9 | 1. Unit Content art | |
| Felipe Chaves | Art | 9 | 1. Trench Knight 3D | |
| Tony Bonilla | Art | 9 | 1. Unit Content art | |
| Vinicius Muniz | Art | 9 | 1. Unit Content art | |

### ClickUp Ticket Summary

- **SHQ (TBD): Battle interface beta quality** (Epic needs creation)
  - Battle HUD Beta Overhaul - Phase 1 (proposed)
    - Battle HUD Beta Overhaul - Engineering (Jota)
    - Battle HUD Beta Overhaul - Design (Lincoln)
- **Standalone**
  - Obstacles - Design Prep (Nathan) — *proposed*
  - Battle Content - Sprint 26 (ongoing)
  - Unit Content - Sprint 26 (ongoing)

### Key Risks
- **Solo engineer**: Jota is the only client engineer. All features are sequential — any delay cascades.
- Jota misses kickoff day (3/31) — needs setup/planning without him.
- 4 features totaling ~9 eng-sprints in a 7-sprint milestone. Tight.
- Battle HUD estimate ambiguity: plan says varying estimates (3-4 sprints). Needs clarification.
- Battle HUD needs an SHQ Epic — should one be created or mapped to existing?

> **Capacity Warning**: Battle has 1 client engineer (Jota) with only 8 available days this sprint.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Gabriel Arruda, Marcos Loures, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

> **Note**: Tiago Costa was previously listed here but is now assigned to **Metagame Pipeline B** per capacity.md and producer decision. Social Dynamics retains 5 engineers for M&Ms.

### Sprint Goals
- Wrap **Phase 1** (Infrastructure & Foundation, ETA was 3/30) — any overflow lands here
- Start **Phase 2** (Map Foundation) — core multiplayer map build-up begins
- Continue **AI Prototype Playtesting** and **Multiplayer Networking** tracks

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Gabriel Arruda | Eng | 9 | 1. P2: Map Foundation | Transitioning from Empire — needs clean handoff |
| Marcos Loures | Eng | 9 | 1. P2: Map Foundation | Transitioning from Empire — needs clean handoff |
| Randy Pasion | Eng | **6** | 1. P1 wrap-up (3/31 only) 2. P2: Map Foundation (after PTO) | **Out 4/1-4/6** (3 days PTO). Dozer split risk. Available: 3/31, 4/7-4/10, 4/13 |
| Garrett Eidsvig | Eng | 9 | 1. P2: Map Foundation - multiplayer infrastructure | Dozer split risk — feature work may be interrupted |
| Bruno Bacelar | Eng | 9 | 1. Multiplayer Networking | Parallel track, dedicated |
| Paul Flores | Design | 9 | 1. AI Prototype Playtesting 2. P2 design direction | |

### ClickUp Ticket Summary

- **SHQ 16: Shared multiplayer maps exciting & replayable** (Epic, existing — CHI-34296)
  - Multiplayer Maps - Phase 2: Map Foundation (proposed)
    - P2: Map Foundation - Engineering (Gabriel, Marcos, Randy post-PTO, Garrett)
- **SHQ 18-22: Multiplayer prototype designs** (Epics, existing)
  - Multiplayer Networking - Sprint 26 (proposed, Bruno)
  - AI Prototype Playtesting - Sprint 26 (proposed, Paul)
- **Standalone**
  - P1 Infrastructure wrap-up (proposed, Randy — 3/31 only)

### Key Risks
- **Phase 1 overflow**: ETA was 3/30. If not complete, overflow consumes Randy's single day (3/31) before PTO.
- Randy only 6 available days + Dozer split. Garrett also has Dozer split. 2 of 5 engineers at risk.
- Gabriel Arruda and Marcos Loures transitioning from Empire — handoff readiness?
- Phase 2 engineering breakdown: detailed task list needed or scoping spike first?

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas

### Sprint Goals
- EKS infrastructure deployment (Prod week 1, Stage week 2)
- Multiplayer support infrastructure
- Build pipeline maintenance

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 9 | 1. EKS Prod (week 1) 2. EKS Stage (week 2) 3. Multiplayer Support 4. UI Framework V2 - UI Support (Cross-Pod) | Also Social Dynamics eng lead |
| Bruno Freitas | Eng | 9 | 1. Single Config Editor 2. Build Info/Logs | |

### ClickUp Ticket Summary

- No SHQ-linked tasks proposed.
- **Standalone**
  - EKS Prod Deployment (Derek) — *proposed*
  - EKS Stage Deployment (Derek) — *proposed*
  - UI Framework V2 - UI Support (Derek) — *proposed*
  - Single Config Editor (Bruno) — *proposed*

### Key Risks
- EKS deployments are critical path for multiplayer readiness (Social Dynamics dependency)
- Randy and Garrett (Social Dynamics) may be pulled for Dozer infra work

---

## Art

**Art Director**: Kevin Griffith | **Assoc. Art Director**: Brendan Cheatham | **Producer**: Brann Livesay

### Sprint Goals
- Continue **Character Assets**, **Environment Art**, **UI/UX Assets** pipelines
- Start **VFX & Animation** track (new for M&Ms)
- Cross-pod asset delivery for Battle HUD (Battle), UI Foundation (Metagame), World Map Experience (Empire)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Kevin Griffith | Art Director | 9 | 1. Cross-pod art direction + pipeline oversight | |
| Brendan Cheatham | Assoc. AD | 9 | 1. Cross-pod art direction | |
| Pedro Sarraf | Lead Tech Art | **3** | 1. Current assignments (3/31-4/2 only) | **Out 4/3-4/21** (extends into S27). Only available first 3 days. |
| Guilherme Lascasas | 2D Env Concept | 9 | 1. Environment Art (Empire) | |
| Thiago Saraiva | Senior 3D | 9 | 1. 3D art (Empire) | |
| Lawrence Steele | Audio | 9 | 1. Sound design | |

### Key Risks
- Pedro Sarraf out 6 of 9 days — who covers his assignments?
- VFX & Animation: assignee TBD — who starts this track?
- Art priority conflicts: Battle HUD vs UI Foundation vs World Map Experience — which gets art resources first?

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Gabriel Arruda + Marcos Loures**: Transitioning from Empire to Social Dynamics. Need clean handoff from Empire work.
- **Tiago Costa**: Assigned to Metagame Pipeline B (Building Upgrades). SocialDynamics_Plan.md still references him — needs update.
- **Dan Dupuis**: Eng Lead for both Empire and Metagame. UI Foundation (Metagame) is primary focus, but may need to support Tutorial Node Migration architecture questions.

### Shared Resource Conflicts
- **Miguel Duran** (UI Artist): Metagame UI Foundation primary. Empire may need UI art later. S25 carry-over (CHI-36195) still pending.
- **Derek Gallant**: Dozer EKS deployments + Social Dynamics eng lead. Critical path for multiplayer.

### Milestone Context
- **Sprint 1 of M&Ms**. Milestone transition from Systems Validation.
- M&Ms success criteria: multiplayer foundations, territory map at scale, empire strategy connection, metagame depth.
- Key SHQs entering active testing: SHQ3-1/SHQ3-2 (Territory Map — future sprints), SHQ3-16 (Multiplayer maps), SHQ3-18 through SHQ3-22 (Multiplayer prototypes).

---

## Capacity Summary

**Total Working Days**: 9 (Good Friday Apr 3 is Fortis-wide studio closure)
**Easter Monday (Apr 6)**: Canadian holiday — Hafiz Kassam confirmed out; others TBD.

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Henrique De Lima | Empire | 9 | Partial appts 4/1, 4/8. S25 carry-over. |
| Diana Vasilescu | Empire | 9 | Out 4/14 (S27 boundary) |
| Yura Rusin | Empire | 9 | Partial appts 4/6, 4/7 |
| Jacob Siegel | Empire | **4** | Out 3/31-4/7 |
| Elise Cole | Empire | 9 | |
| Laura Santana | QA (Empire) | 9 | |
| Guilherme Quizzini | Metagame | 9 | Pipeline A: UI Foundation |
| Tiago Costa | Metagame | 9 | Pipeline B: Building Upgrades. New hire. |
| Dan Dupuis | Metagame | 9 | Eng Lead, planning capacity |
| Leonard Perez | Metagame | 9 | |
| Christopher Fidalgo | Metagame | 9 | **6 open S25 tasks** |
| Kevin Ligon | Metagame | 9 | |
| Miguel Duran | Metagame | 9 | Shared resource. S25 carry-over. |
| Hugo Hideo | QA (Metagame) | 9 | |
| Jota Oliveira | Battle | **8** | Out 3/31. Solo engineer. |
| Lincoln Li | Battle | 9 | Partial appts |
| Nathan Hajek | Battle | 9 | |
| Dylan Jeffery | Battle | 9 | |
| Vishaal Gupta | Battle | **8** | Out 4/2 |
| Julio Scarabelli | QA (Battle) | 9 | |
| Gabriel Arruda | Social Dynamics | 9 | Transitioning from Empire |
| Marcos Loures | Social Dynamics | 9 | Transitioning from Empire |
| Randy Pasion | Social Dynamics | **6** | Out 4/1-4/6 + Dozer split |
| Garrett Eidsvig | Social Dynamics | 9 | Dozer split risk |
| Bruno Bacelar | Social Dynamics | 9 | |
| Paul Flores | Social Dynamics | 9 | |
| Derek Gallant | Dozer | 9 | Also SD eng lead |
| Bruno Freitas | Dozer | 9 | |
| Kevin Griffith | Art | 9 | |
| Brendan Cheatham | Art | 9 | |
| Pedro Sarraf | Art | **3** | Out 4/3-4/21 |
| Vinod Rams | Battle (Art) | **8** | Out 3/31 |
| Alessandro Oliveira | Battle (Art) | 9 | VFX |
| Danny Oliveira | Battle (Art) | 9 | VFX |
| Lawrence Steele | Art (Audio) | 9 | |
| Hafiz Kassam | QA (Lead) | **8** | Easter Monday 4/6 |

---

## Active SHQ Epics (from ClickUp)

| SHQ | Status | Owner | Relevant This Sprint? |
|-----|--------|-------|----------------------|
| SHQ 02 | Complete | Tim Williams | No — already answered |
| SHQ 04 | In Progress | Tim Williams | Background — Empire territory visualization |
| SHQ 05 | In Progress | Tim Williams | Background — session-to-session goals |
| SHQ 07 | Discussion | Tim Williams | Background — future Governors work |
| SHQ 10, 11, 13 | In Progress | Thorben Novais | Background — hero-related |
| SHQ 16 | In Progress | Tim Williams | Yes — multiplayer maps (Social Dynamics P2) |
| SHQ 18-22 | In Progress / Discussion | Unassigned | Yes — multiplayer prototype designs |
| SHQ 23 | In Progress | Thorben Novais | Background — battle depth |

---

## Key Action Items for Kickoff

1. **Scaffold ClickUp tasks** in Product Backlog and add to YY sprint list (list is currently empty)
2. **Update SocialDynamics_Plan.md** — remove Tiago Costa from sprint assignments (he's Metagame)
3. **Confirm Building Upgrades spec source** — Tiago needs design direction for his first task
4. **Confirm Easter Monday** — which Canadian staff observe beyond Hafiz?
5. **Chris Fidalgo carry-over triage** — which of his 6 S25 tasks are must-finish vs deferrable?
6. **Battle HUD SHQ Epic** — should one be created?
7. **UI Foundation SHQ mapping** — should this link to a validation question?
