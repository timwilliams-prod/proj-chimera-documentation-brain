---
Sprint: Yodel Yaks 26
Dates: 3/31 - 4/14
Working Days: 9 (after Good Friday holiday)
Holidays:
  - Good Friday (Apr 3) — Fortis-wide studio closure
  - Easter Monday (Apr 6) — Canadian statutory holiday (affects some staff)
Milestone: M&Ms (Multiplayer & Meta) — Sprint 1 of ~7
Mode: Preview
Generated: 2026-03-24
---

# Sprint 26: Yodel Yaks — PREVIEW

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 1 of ~7** in this milestone. This is the kickoff sprint for M&Ms.
**Working Days**: 9 (10 weekdays minus Good Friday Apr 3)
**ClickUp List**: `901326453291` (currently empty — no tasks added yet)

### Studio Holidays

- **Good Friday (Apr 3)**: Fortis-wide closure. All staff off.
- **Easter Monday (Apr 6)**: Canadian statutory holiday. Hafiz Kassam (QA Lead) confirmed out. Other Canadian staff may also observe — confirm at kickoff.

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Gabriel Arruda, Henrique De Lima
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- Continue **Governors** engineering (Sprint 1 of 3 for M&Ms) — validates SHQ7
- Start **Governors UX** — UI needed by Sprint 2
- Continue **Map Content** pipeline (design/art track) — validates SHQ1

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Gabriel Arruda | Eng | 9 | 1. Governors engineering | Sprint 1 of 3. Spec: `planning/features/governors.md` |
| Henrique De Lima | Eng | 9 | 1. Governors engineering 2. Tutorial arch carry-over | Partial appts 4/1, 4/8 (~1.5 hrs). S25 carry-over risk on tutorial architecture (CHI-36213, CHI-36212) |
| Diana Vasilescu | Design | 9 | 1. Governors design | CHI-36224 still "to do" in S25 — may carry over. Out 4/14 (S27 start) |
| Yura Rusin | UX | 9 | 1. Governors UX wireframes/flows | Critical timing — UI needed by Sprint 2. Partial appts 4/6, 4/7 (~1 hr each) |
| Jacob Siegel | Design | **4** | 1. Map Content | **Out 3/31-4/7** (5 days PTO). Only available 4/8-4/10, 4/13 |
| Elise Cole | Design | 9 | 1. Map Content 2. Tuning carry-over | May need to solo-cover Map Content while Jacob is out |
| Laura Santana | QA | 9 | 1. Governors QA (when ready) 2. S25 bug verification | |

### ClickUp Ticket Summary

- **SHQ 07: Clear short/mid/long-term goals** (Epic, existing — CHI-34289)
  - Governors - Backend & Data (Phase 1 parent task, proposed)
    - Governors - Engineering (Gabriel)
    - Governors - Engineering (Henrique)
    - Governors - UX Design (Yura)
    - Governors - Design (Diana)
- **Standalone**
  - Map Content - Sprint 26 (ongoing, proposed)

### Carry-Over Risk
- **Diana Vasilescu**: Governors Design (CHI-36224) — still "to do" in S25
- **Henrique De Lima**: Tutorial Architecture tasks (CHI-36213, CHI-36212) — 1 in progress, 1 to do, both urgent

### Open Questions
- [ ] Will Henrique's tutorial architecture work complete in S25, or will it carry into S26?
- [ ] Is Governors engineering on track for the 3-sprint estimate?
- [ ] Jacob out 5 of 9 days — can Elise solo-cover Map Content?

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Dan Dupuis, Guilherme Quizzini
**QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- Start **UI Foundation** (Pipeline A, Sprint 1 of 6) — Dan Dupuis
- Complete **Building Upgrades** (Pipeline B, 1 sprint) — Guilherme Quizzini
- Support metagame systems depth for M&Ms validation

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Dan Dupuis | Eng Lead | 9 | 1. UI Foundation (Pipeline A) | Hero Info, Hero Leveling, Gear, Badging, Tutorials/Narrative. Also Empire eng lead — Governors may need oversight |
| Guilherme Quizzini | Eng | 9 | 1. Building Upgrades (Pipeline B) | 1-sprint feature, should complete this sprint |
| Leonard Perez | Design | 9 | 1. UI Foundation design direction 2. Building Upgrades design support | |
| Christopher Fidalgo | Design | 9 | 1. S25 carry-over (tuning/design tasks) 2. Metagame design support | **10 tasks in S25**, many still "to do" — heavy carry-over likely |
| Kevin Ligon | UX | 9 | 1. UI Foundation wireframes/flows | Foundation UX for metagame screens |
| Miguel Duran | UI Art | 9 | 1. UI Foundation art 2. Elemental swaps carry-over | S25 carry-over: CHI-36195 still "to do". Shared resource with Empire (Governors UI) |
| Hugo Hideo | QA | 9 | 1. Building Upgrades QA (end of sprint) 2. S25 verification | |

### ClickUp Ticket Summary

- **SHQ 07: Clear short/mid/long-term goals** (Epic, existing — also Empire)
  - Building Upgrades (proposed, 1 sprint)
    - Building Upgrades - Engineering (Guilherme)
    - Building Upgrades - QA (Hugo)
- **No SHQ mapped yet**
  - UI Foundation - Sprint 1 (proposed)
    - UI Foundation - Engineering (Dan)
    - UI Foundation - UX Design (Kevin)
    - UI Foundation - UI Art (Miguel)

### Carry-Over Risk
- **Christopher Fidalgo**: 10 tasks in S25, many still "to do" — heavy carry-over likely
- **Miguel Duran**: UI Art assets for elemental swaps (CHI-36195) still "to do"

### Open Questions
- [ ] Chris Fidalgo carry-over: which of his 10 S25 tasks are must-finish vs deferrable?
- [ ] Building Upgrades spec — does one exist? If not, what's the design source?
- [ ] UI Foundation scope for Sprint 1: which sub-features (Hero Info, Leveling, Gear, etc.) are first?
- [ ] Should UI Foundation be mapped to an SHQ? Currently no validation link.

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira
**QA**: Julio Scarabelli

### Sprint Goals
- Start **Battle HUD Beta Overhaul** (Sprint 1 of ~4) — must-have for M&Ms, validates BHQ-B2
- Design work begins on **Obstacles**, **Actor System Overhaul**, **Pathfinding & AI** in parallel

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Jota Oliveira | Eng | **8** | 1. Battle HUD Beta Overhaul | **Out 3/31** (misses kickoff day). Solo engineer — critical path. Starts 4/1. |
| Lincoln Li | Design Lead | 9 | 1. Battle HUD design direction 2. Coordinate design prep for future features | Partial — gymnastics 4/2, 4/9 (1 hr each) |
| Nathan Hajek | Design | 9 | 1. Obstacles design prep 2. Battle Content support | Front-loading design for future sprint |
| Dylan Jeffery | Design | 9 | 1. Battle Content pipeline | Ongoing |
| Vishaal Gupta | Design | **8** | 1. Battle Content pipeline 2. Unit balance | **Out 4/2** (1 day) + recurring appts |
| Julio Scarabelli | QA | 9 | 1. S25 bug verification 2. Battle HUD QA prep | 4/3 is studio holiday anyway |
| Ben Clair | Art | 9 | 1. Unit Content art | Partial appt 3/31 (1 hr) |
| Felipe Chaves | Art | 9 | 1. Unit Content art | |
| Tony Bonilla | Art | 9 | 1. Unit Content art | |
| Vinicius | Art | 9 | 1. Unit Content art | |

### ClickUp Ticket Summary

- **SHQ (TBD): Battle interface beta quality** (Epic needs creation)
  - Battle HUD Beta Overhaul - Phase 1 (proposed)
    - Battle HUD Beta Overhaul - Engineering (Jota)
    - Battle HUD Beta Overhaul - Design (Lincoln)
- **Standalone**
  - Obstacles - Design Prep (proposed, Nathan)
  - Battle Content - Sprint 26 (ongoing)
  - Unit Content - Sprint 26 (ongoing)

### Carry-Over Risk
- None identified from S25 for Battle core team.

### Open Questions
- [ ] Battle HUD estimate: Is it 3 sprints or 4? (Plan says 3, Gantt shows 56d/4 sprints)
- [ ] Jota misses kickoff day — any setup/planning needed 3/31 without him?
- [ ] Which Battle features can have design work front-loaded while Jota is on HUD?
- [ ] Battle HUD needs an SHQ Epic — should one be created, or does it map to an existing one?

> **Capacity Warning**: Battle has 1 client engineer (Jota) with only 8 available days this sprint. 6 features totaling ~9 eng-sprints in a 7-sprint milestone. Pool Management already deferred to M&C.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Marcos Loures, Tiago Costa, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- Wrap **Phase 1** (Infrastructure & Foundation, ETA 3/30) — any overflow lands here
- Start **Phase 2** (Map Foundation, ~1 month) — core multiplayer map build-up
- Continue **AI Prototype Playtesting** and **Multiplayer Networking** tracks

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Randy Pasion | Eng | **6** | 1. P1 wrap-up (3/31 only) 2. P2: Map Foundation (after PTO) | **Out 4/1-4/6** (3 days). Also Dozer split risk. Available: 3/31, 4/7-4/10, 4/13 |
| Garrett Eidsvig | Eng | 9 | 1. P2: Map Foundation - multiplayer infrastructure | Dozer split risk — feature work may be interrupted |
| Marcos Loures | Eng | 9 | 1. P2: Map Foundation | Transitioning from Empire. Needs clean handoff. |
| Tiago Costa | Eng | 9 | 1. P2: Map Foundation | New hire, first milestone. May need ramp-up. |
| Bruno Bacelar | Eng | 9 | 1. Multiplayer Networking | Parallel track, dedicated |
| Paul Flores | Design | 9 | 1. AI Prototype Playtesting 2. P2 design direction | |

### ClickUp Ticket Summary

- **SHQ 16: Shared multiplayer maps exciting & replayable** (Epic, existing — CHI-34296)
  - Multiplayer Maps - Phase 2: Map Foundation (proposed)
    - P2: Map Foundation - Engineering (Randy, after PTO)
    - P2: Map Foundation - Engineering (Garrett)
    - P2: Map Foundation - Engineering (Marcos)
    - P2: Map Foundation - Engineering (Tiago)
- **SHQ 18-22: Multiplayer prototype designs** (Epics, existing)
  - Multiplayer Networking - Sprint 26 (proposed, Bruno)
  - AI Prototype Playtesting - Sprint 26 (proposed, Paul)
- **Standalone**
  - P1 Infrastructure wrap-up (proposed, Randy — 3/31 only)

### Carry-Over Risk
- **Phase 1**: ETA was 3/30. If not complete, overflow hits Randy's single available day (3/31) before his PTO.

### Open Questions
- [ ] Randy out 4/1-4/6 and has Dozer split — is P1 wrap-up realistic on 3/31 alone?
- [ ] Marcos Loures transition: Is his Empire handoff clean?
- [ ] Tiago Costa onboarding: Ready for P2 contribution, or needs ramp?
- [ ] Phase 2 engineering breakdown: Detailed task list, or needs a scoping spike?

> **Staffing Risk**: Randy only 6 available days + Dozer split. Garrett also has Dozer split. 2 of 5 engineers at risk of interruption.

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas

### Sprint Goals
- Infrastructure support and build pipeline maintenance
- No planned feature work defined yet for M&Ms

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 9 | 1. Infrastructure support 2. Build pipeline | Also Social Dynamics eng lead |
| Bruno Freitas | Eng | 9 | 1. Infrastructure support | |

### ClickUp Ticket Summary

- No tickets proposed — Dozer M&Ms plan is TBD.

### Open Questions
- [ ] Should Dozer features be defined for M&Ms? Pod plan is entirely TBD.
- [ ] Are there specific infrastructure tasks (CI/CD, builds, DevOps) that should be tracked?

---

## Art

**Art Director**: Kevin Griffith | **Assoc. Art Director**: Brendan Cheatham | **Producer**: Brann Livesay

### Sprint Goals
- Continue **Character Assets**, **Environment Art**, **UI/UX Assets** pipelines
- Start **VFX & Animation** track (new for M&Ms)
- Cross-pod asset delivery for Governors, Battle HUD, UI Foundation

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Kevin Griffith | Art Director | 9 | 1. Cross-pod art direction 2. Art pipeline oversight | |
| Brendan Cheatham | Assoc. AD | 9 | 1. Cross-pod art direction | |
| Pedro Sarraf | Art | **3** | 1. Current assignments (3/31-4/2 only) | **Out 4/3-4/21** (6 working days). Only available first 3 days. Extends into S27. |
| Vinod Rams | Art | **8** | 1. Art assignments | **Out 3/31** (1 day) |
| Danny | Art | 9 | 1. Art assignments | |
| Alessandro | Art | 9 | 1. Art assignments | |
| Guilherme (Art) | Art | 9 | 1. Art assignments | |
| Thiago | Art | 9 | 1. Art assignments | |
| Lawrence Steele | Audio | 9 | 1. Sound design | |

### ClickUp Ticket Summary

- Art tasks are typically tracked per-pod request rather than as standalone SHQ items. No new Epics proposed.
- **Standalone**
  - VFX & Animation - Sprint 26 kickoff (proposed, assignee TBD)
  - Character Assets - Sprint 26 (ongoing)
  - Environment Art - Sprint 26 (ongoing)
  - UI/UX Assets - Sprint 26 (ongoing)

### Open Questions
- [ ] Pedro out 6 of 9 days — who covers his art assignments?
- [ ] VFX & Animation: Who is assigned to start this track?
- [ ] Art priorities: Governors UI vs Battle HUD vs UI Foundation — which gets art first?

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Marcos Loures**: Transitioning from Empire to Social Dynamics. Needs clean handoff.
- **Dan Dupuis**: Eng Lead for both Empire and Metagame. UI Foundation (Metagame Pipeline A) is primary, but Governors may need oversight.

### Shared Resource Conflicts
- **Miguel Duran** (UI Artist): Metagame UI Foundation and Empire Governors both need UI art. S25 carry-over pending.
- **Yura Rusin** (UX): Governors UI needed by Sprint 2 — must start now.

### Milestone Context
- **Sprint 1 of M&Ms**. Milestone transition from Systems Validation.
- M&Ms success criteria: multiplayer foundations, territory map at scale, empire strategy connection, metagame depth.
- Key SHQs entering active testing: SHQ7 (Governors), SHQ1/SHQ2 (Territory Map — upcoming), SHQ18-22 (Multiplayer prototypes).

---

## Capacity Summary

**Total Working Days**: 9 (Good Friday Apr 3 is Fortis-wide studio closure)
**Easter Monday (Apr 6)**: Canadian holiday — Hafiz Kassam confirmed out; others TBD.

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Gabriel Arruda | Empire | 9 | |
| Henrique De Lima | Empire | 9 | Partial appts 4/1, 4/8 |
| Diana Vasilescu | Empire | 9 | Out 4/14 (S27 boundary) |
| Yura Rusin | Empire | 9 | Partial appts 4/6, 4/7 |
| Jacob Siegel | Empire | **4** | Out 3/31-4/7 |
| Elise Cole | Empire | 9 | |
| Laura Santana | QA (Empire) | 9 | |
| Dan Dupuis | Metagame | 9 | |
| Guilherme Quizzini | Metagame | 9 | |
| Leonard Perez | Metagame | 9 | |
| Christopher Fidalgo | Metagame | 9 | Heavy S25 carry-over |
| Kevin Ligon | Metagame | 9 | |
| Miguel Duran | Metagame | 9 | Shared resource |
| Hugo Hideo | QA (Metagame) | 9 | |
| Jota Oliveira | Battle | **8** | Out 3/31. Solo engineer. |
| Lincoln Li | Battle | 9 | Partial appts |
| Nathan Hajek | Battle | 9 | |
| Dylan Jeffery | Battle | 9 | |
| Vishaal Gupta | Battle | **8** | Out 4/2 |
| Julio Scarabelli | QA (Battle) | 9 | |
| Randy Pasion | Social Dynamics | **6** | Out 4/1-4/6 + Dozer split |
| Garrett Eidsvig | Social Dynamics | 9 | Dozer split risk |
| Marcos Loures | Social Dynamics | 9 | Transitioning from Empire |
| Tiago Costa | Social Dynamics | 9 | New hire |
| Bruno Bacelar | Social Dynamics | 9 | |
| Paul Flores | Social Dynamics | 9 | |
| Derek Gallant | Dozer | 9 | |
| Bruno Freitas | Dozer | 9 | |
| Kevin Griffith | Art | 9 | |
| Brendan Cheatham | Art | 9 | |
| Pedro Sarraf | Art | **3** | Out 4/3-4/21 |
| Vinod Rams | Art | **8** | Out 3/31 |
| Danny | Art | 9 | |
| Alessandro | Art | 9 | |
| Lawrence Steele | Art (Audio) | 9 | |
| Hafiz Kassam | QA (Lead) | **8** | Easter Monday 4/6 |

---

## Active SHQ Epics (from ClickUp)

| SHQ | Status | Owner | Relevant This Sprint? |
|-----|--------|-------|----------------------|
| SHQ 02 | Complete | Tim Williams | No — already answered |
| SHQ 04 | In Progress | Tim Williams | Yes — Empire territory visualization |
| SHQ 05 | In Progress | Tim Williams | Yes — session-to-session goals |
| SHQ 07 | Discussion | Tim Williams | Yes — Governors directly validates this |
| SHQ 10, 11, 13 | In Progress | Thorben Novais | Background — hero-related, feeding M&C |
| SHQ 16 | In Progress | Tim Williams | Yes — multiplayer maps (Social Dynamics) |
| SHQ 18-22 | In Progress / Discussion | Unassigned | Yes — multiplayer prototype designs |
| SHQ 23 | In Progress | Thorben Novais | Background — battle depth |

---

## Summary of Open Questions for Kickoff

1. **Easter Monday**: Which Canadian staff observe this beyond Hafiz?
2. **Chris Fidalgo carry-over**: Which of his 10 S25 tasks must finish vs defer?
3. **Henrique Lima carry-over**: Will tutorial architecture complete in S25?
4. **Diana Vasilescu carry-over**: Will Governors Design (CHI-36224) complete in S25?
5. **Jacob out 5 of 9 days**: Can Elise solo-cover Map Content?
6. **Battle HUD estimate**: 3 sprints or 4?
7. **Jota misses kickoff**: Setup/planning needed 3/31 without him?
8. **Randy out + Dozer split**: P1 wrap-up realistic on 3/31 alone?
9. **Social Dynamics P2 breakdown**: Detailed task list or scoping spike?
10. **Marcos Loures handoff**: Clean Empire -> Social Dynamics transition?
11. **Tiago Costa onboarding**: Ready for P2, or needs ramp?
12. **Pedro out 6 of 9 days**: Who covers his art assignments?
13. **VFX & Animation assignee**: Who starts this track?
14. **Art priority conflicts**: Governors vs Battle HUD vs UI Foundation?
15. **UI Foundation SHQ mapping**: Should this be linked to a validation question?
16. **Battle HUD SHQ**: Needs an Epic — create new or map to existing?
