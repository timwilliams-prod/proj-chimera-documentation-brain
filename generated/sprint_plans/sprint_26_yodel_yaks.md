---
Sprint: Yodel Yaks 26
Dates: 3/31 - 4/14
Milestone: M&Ms (Multiplayer & Meta) — Sprint 1 of ~7
Mode: Preview
Generated: 2026-03-24
---

# Sprint 26: Yodel Yaks — PREVIEW

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 1 of ~7** in this milestone. This is the kickoff sprint for M&Ms.
**ClickUp List**: `901326453291` (currently empty — no tasks added yet)

---

## PTO

**Google Calendar auth expired** — unable to pull PTO automatically. Please reauthorize:
```
! gcloud auth login
```
Or re-authorize the Google Workspace MCP connection, then re-run.

**Action needed**: Confirm PTO for the team before Kickoff.

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Gabriel Arruda, Henrique De Lima
**QA**: Laura Santana | **UX**: Yura Rusin

### Sprint Goals
- Continue **Governors** engineering (Sprint 1 of 3 for M&Ms) — validates SHQ7 (short/mid/long-term goals)
- Continue **Map Content** pipeline (ongoing, design/art track) — validates SHQ1

### Planned Work

| Task | Discipline | Assignee | Est | Priority | Notes |
|------|-----------|----------|-----|----------|-------|
| Governors - Engineering (continued) | Eng | Gabriel Arruda | Full sprint | P1 | Sprint 1 of 3. Spec: `planning/features/governors.md` |
| Governors - Engineering (continued) | Eng | Henrique De Lima | Full sprint | P1 | Tutorial architecture may carry over from S25 |
| Governors - UX Design | UX | Yura Rusin | ~5 days | P1 | Governors UI needed by Sprint 2 per capacity notes |
| Governors - Design (continued) | Design | Diana Vasilescu | Full sprint | P1 | CHI-36224 still "to do" in S25 — may carry over |
| Map Content | Design/Art | Jacob Siegel, Elise Cole | Ongoing | P2 | Continuous pipeline |

### Carry-Over Risk (from Sprint 25)
- **Diana Vasilescu**: Governors Design (CHI-36224) — still "to do" in S25
- **Henrique De Lima**: Tutorial Architecture tasks (CHI-36213, CHI-36212) — 1 in progress, 1 to do, both urgent

### Open Questions
- [ ] Will Henrique's tutorial architecture work complete this sprint, or will it carry into S26?
- [ ] Is Governors engineering on track for the 3-sprint estimate, or do we need to adjust?

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Dan Dupuis, Guilherme Quizzini
**QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- Start **UI Foundation** (Pipeline A, Sprint 1 of 6) — Dan Dupuis
- Complete **Building Upgrades** (Pipeline B, 1 sprint) — Guilherme Quizzini
- Support metagame systems depth for M&Ms validation

### Planned Work

| Task | Discipline | Assignee | Est | Priority | Notes |
|------|-----------|----------|-----|----------|-------|
| UI Foundation - Engineering | Eng | Dan Dupuis | Full sprint | P1 | Pipeline A. Hero Info, Hero Leveling, Gear, Badging, Tutorials/Narrative |
| Building Upgrades - Engineering | Eng | Guilherme Quizzini | Full sprint | P2 | Pipeline B. 1-sprint feature |
| UI Foundation - UX Design | UX | Kevin Ligon | ~5 days | P1 | Foundation wireframes/flows |
| UI Foundation - UI Art | UI Art | Miguel Duran | ~5 days | P2 | Interface elements for UI Foundation |

### Carry-Over Risk (from Sprint 25)
- **Christopher Fidalgo**: 10 tasks in S25, many still "to do" — heavy carry-over likely. Chris does design/tuning work that feeds into Metagame features.
- **Miguel Duran**: UI Art assets for elemental swaps (CHI-36195) still "to do"

### Open Questions
- [ ] Chris Fidalgo carry-over: which of his 10 S25 tasks are must-finish vs deferrable?
- [ ] Building Upgrades spec — does one exist? If not, what's the design source?
- [ ] UI Foundation scope for Sprint 1: which sub-features (Hero Info, Leveling, Gear, etc.) are first?

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira
**QA**: Julio Scarabelli

### Sprint Goals
- Start **Battle HUD Beta Overhaul** (Sprint 1 of ~4) — must-have for M&Ms, validates BHQ-B2
- Design work begins on **Obstacles**, **Actor System Overhaul**, **Pathfinding & AI** in parallel

### Planned Work

| Task | Discipline | Assignee | Est | Priority | Notes |
|------|-----------|----------|-----|----------|-------|
| Battle HUD Beta Overhaul - Engineering | Eng | Jota Oliveira | Full sprint | P1 | Must-have. Sprint 1 of ~4. Single engineer — critical path |
| Battle HUD Beta Overhaul - Design | Design | Lincoln Li | Full sprint | P1 | HUD design direction |
| Obstacles - Design | Design | Nathan Hajek | ~5 days | P3 | Design prep for future sprint |
| Battle Content | Design/Art | Dylan Jeffery, Vishaal Gupta | Ongoing | P2 | Continuous pipeline |
| Unit Content | Art | Ben Clair, Felipe Chaves, Tony Bonilla, Vinicius | Ongoing | P2 | Continuous pipeline |

### Open Questions
- [ ] Battle HUD Beta Overhaul: Is 4 sprints realistic with 1 engineer? Roadmap shows 56 days (4 sprints) but plan says 3 sprints. Clarify estimate.
- [ ] Which Battle features can have design work front-loaded while Jota is on HUD?

> **Capacity Warning**: Battle has 1 client engineer (Jota). 6 features totaling ~9 eng-sprints in a 7-sprint milestone. Pool Management already deferred to M&C. Any delay cascades through the entire Battle schedule.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Marcos Loures, Tiago Costa, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- Wrap **Phase 1** (Infrastructure & Foundation, ETA 3/30) — any overflow lands here
- Start **Phase 2** (Map Foundation, ~1 month) — core multiplayer map build-up
- Continue **AI Prototype Playtesting** and **Multiplayer Networking** tracks
- Validates SHQ 18-22 (multiplayer paper/prototype designs)

### Planned Work

| Task | Discipline | Assignee | Est | Priority | Notes |
|------|-----------|----------|-----|----------|-------|
| P1 wrap-up (if needed) | Eng | Randy Pasion | ~2 days | P1 | Messaging infra, game instance container |
| P2: Map Foundation - Engineering | Eng | Randy Pasion | Remainder | P1 | Start after P1 wrap |
| P2: Map Foundation - Engineering | Eng | Garrett Eidsvig | Full sprint | P1 | Real multiplayer infrastructure |
| P2: Map Foundation - Engineering | Eng | Marcos Loures | Full sprint | P1 | Moving from Empire to Social Dynamics |
| P2: Map Foundation - Engineering | Eng | Tiago Costa | Full sprint | P2 | New hire, first milestone |
| Multiplayer Networking | Eng | Bruno Bacelar | Full sprint | P1 | Parallel track |
| AI Prototype Playtesting | Design | Paul Flores | Ongoing | P1 | Parallel playtesting track |

### Open Questions
- [ ] Marcos Loures transition: Is his Empire handoff clean, or will he carry Empire work into S26?
- [ ] Tiago Costa onboarding: Does he need ramp-up time, or is he ready to contribute to P2 immediately?
- [ ] Phase 2 engineering breakdown: Is there a detailed task list, or does this need a scoping spike?

> **Staffing Risk**: Randy Pasion and Garrett Eidsvig have Dozer split responsibilities. Feature work at risk of interruption from build pipeline / networking issues.

---

## Dozer

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas

### Sprint Goals
- No planned feature work defined yet for M&Ms
- Infrastructure support and build pipeline maintenance

### Planned Work

| Task | Discipline | Assignee | Est | Priority | Notes |
|------|-----------|----------|-----|----------|-------|
| Infrastructure & build pipeline | Eng | Derek Gallant | As needed | P3 | |
| Infrastructure support | Eng | Bruno Freitas | As needed | P3 | |

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

### Planned Work

| Task | Discipline | Assignee | Est | Priority | Notes |
|------|-----------|----------|-----|----------|-------|
| Character Assets | Art | Art team (multiple) | Ongoing | P2 | Heroes & units |
| Environment Art | Art | Art team (multiple) | Ongoing | P2 | Map tiles, buildings, terrain |
| UI/UX Assets | Art | Art team (multiple) | Ongoing | P2 | Interface elements |
| VFX & Animation | Art | TBD | Starting | P3 | Combat effects, skill anims — new track |
| Sound Design | Audio | Lawrence Steele | Ongoing | P3 | |

### Open Questions
- [ ] VFX & Animation: Who is assigned? This track starts this sprint but no assignee is defined.
- [ ] Art priorities: Which pod's asset requests take precedence if there's contention? (Governors UI vs Battle HUD vs UI Foundation all need art this sprint)

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **Marcos Loures**: Transitioning from Empire to Social Dynamics. Needs clean handoff of any Empire work.
- **Dan Dupuis**: Engineering Lead for both Empire and Metagame. Metagame Pipeline A (UI Foundation) is his primary focus, but Governors may need his oversight as eng lead.

### Shared Resource Conflicts
- **Miguel Duran** (UI Artist): Metagame UI Foundation and Empire Governors both need UI art. S25 carry-over already pending.
- **Yura Rusin** (UX): Governors UI needed by Sprint 2 — must start now.

### Milestone Context
- This is **Sprint 1 of M&Ms**. The milestone transition from Systems Validation is happening.
- M&Ms success criteria require: multiplayer foundations, territory map at scale, empire strategy connection, metagame depth.
- Key SHQs entering active testing: SHQ7 (Governors), SHQ1/SHQ2 (Territory Map — upcoming), SHQ18-22 (Multiplayer prototypes).

---

## Capacity Summary

| Person | Pod | Available Days | Notes |
|--------|-----|---------------|-------|
| Gabriel Arruda | Empire | 10 | |
| Henrique De Lima | Empire | 10 | S25 carry-over risk (tutorial arch) |
| Diana Vasilescu | Empire | 10 | S25 carry-over risk (Governors Design) |
| Yura Rusin | Empire | 10 | Governors UI — critical timing |
| Jacob Siegel | Empire | 10 | Map Content |
| Elise Cole | Empire | 10 | Map Content / tuning |
| Dan Dupuis | Metagame | 10 | Eng Lead, UI Foundation Pipeline A |
| Guilherme Quizzini | Metagame | 10 | Building Upgrades Pipeline B |
| Leonard Perez | Metagame | 10 | Design Lead |
| Christopher Fidalgo | Metagame | 10 | Heavy S25 carry-over (10 tasks) |
| Kevin Ligon | Metagame | 10 | UX Lead |
| Miguel Duran | Metagame | 10 | UI Art — shared resource |
| Jota Oliveira | Battle | 10 | Solo engineer — critical path |
| Lincoln Li | Battle | 10 | Design Lead |
| Nathan Hajek | Battle | 10 | |
| Dylan Jeffery | Battle | 10 | Battle Content |
| Vishaal Gupta | Battle | 10 | |
| Marcos Loures | Social Dynamics | 10 | Transitioning from Empire |
| Tiago Costa | Social Dynamics | 10 | New hire |
| Randy Pasion | Social Dynamics | 10 | Dozer split risk |
| Garrett Eidsvig | Social Dynamics | 10 | Dozer split risk |
| Bruno Bacelar | Social Dynamics | 10 | Networking track |
| Derek Gallant | Dozer | 10 | Eng Lead |
| Bruno Freitas | Dozer | 10 | |
| Kevin Griffith | Art | 10 | Art Director |
| Brendan Cheatham | Art | 10 | Assoc. Art Director |
| Laura Santana | QA (Empire) | 10 | |
| Hugo Hideo | QA (Metagame) | 10 | |
| Julio Scarabelli | QA (Battle) | 10 | |

> **Note**: PTO data unavailable — all days shown as 10. Update after Google Calendar reauthorization.

---

## Active SHQ Epics (from ClickUp)

| SHQ | Status | Owner | Relevant This Sprint? |
|-----|--------|-------|----------------------|
| SHQ 02 | Complete | Tim Williams | No — already answered |
| SHQ 03 | In Progress | Tim Williams | Background — answered negative |
| SHQ 04 | In Progress | Tim Williams | Yes — Empire territory visualization |
| SHQ 05 | In Progress | Tim Williams | Yes — session-to-session goals |
| SHQ 07 | Discussion | Tim Williams | Yes — Governors directly validates this |
| SHQ 10, 11, 13 | In Progress | Thorben Novais | Background — hero-related, feeding M&C |
| SHQ 16 | In Progress | Tim Williams | Yes — multiplayer maps (Social Dynamics) |
| SHQ 18-22 | In Progress / Discussion | Unassigned | Yes — multiplayer prototype designs |
| SHQ 23 | In Progress | Thorben Novais | Background — battle depth |
| SHQ 24 | Discussion | Thorben Novais | Background — art clarity |

---

## Summary of Open Questions for Kickoff

1. **PTO**: Reauthorize Google Calendar and confirm who's out 3/31-4/14
2. **Chris Fidalgo carry-over**: Which of his 10 S25 tasks must finish vs defer?
3. **Henrique Lima carry-over**: Will tutorial architecture complete in S25?
4. **Diana Vasilescu carry-over**: Will Governors Design (CHI-36224) complete in S25?
5. **Battle HUD estimate**: Is it 3 sprints or 4? (Plan says 3, Gantt shows 56d/4 sprints)
6. **Social Dynamics P2 breakdown**: Detailed engineering task list for Map Foundation?
7. **Marcos Loures handoff**: Clean Empire → Social Dynamics transition?
8. **Tiago Costa onboarding**: Ready for P2 contribution, or needs ramp?
9. **VFX & Animation assignee**: Who starts this Art track?
10. **Art priority conflicts**: Governors vs Battle HUD vs UI Foundation — which gets art first?
11. **Dozer features**: Should M&Ms infrastructure work be defined and tracked?
