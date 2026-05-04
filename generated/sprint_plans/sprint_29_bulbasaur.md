---
Sprint: Bulbasaur 29
Dates: 5/12 - 5/26
Working Days: 10
Holidays: TBD
Milestone: M&Ms (Multiplayer & Meta) — Sprint 4 of ~7
Mode: Draft
Generated: 2026-05-04
---

# Sprint 29: Bulbasaur — DRAFT

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 4 of ~7** in this milestone. **Second sprint of M&M Checkpoint 2 (4/28-5/25)** for Battle and Dozer.
**Working Days**: 10 (May 12 Mon – May 26 Mon; May 27 Tue is S30 kickoff)
**ClickUp List**: TBD

> **Draft Mode**: This is a preliminary plan for Sprint 29. Additional pod details and ClickUp tasks will be added.

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- **Battle HUD Beta Overhaul - Implementation continues** (Danny + Jota) — SHQ4-1
- **Unit Content**
  - **Art**
    - New Hero Concept (Steam Sage) — Vinod (2D Concept Kick-Off scheduled: 5/6)
    - New Hero 3D (Toshoia) — Felipe 
    - New Hero Animation (Merrin) — Tony 
    - New Hero VFXs (Merrin) — Alessandro and Danny 
    - New Hero Concept (Generalist Healer (Celestine Replacement)) — Vini 
    - New Hero Rig (Toshoia) — Ben  
  - **Design**
    - Design Kits wrap up for 12 M&M heroes (Lincoln, Nathan)
- **Actor System Overhaul** (Optimization and Phase 3, Jota — continues from S28. Total of 4 phases. Clean up is complete in S28)
- **Obstacles** — design validation (Dylan) — continues from S28
- **Pathfinding & AI Improvements** — continues from S28

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Lincoln Li | Design Lead | 10 | 1. Design Kits wrap for 12 M&M heroes (with Nathan) 2. Battle HUD design support 3. Pathfinding & AI design | |
| Nathan Hajek | Design | 10 | 1. Design Kits wrap for 12 M&M heroes (with Lincoln) 2. Unit Design & Prototype | |
| Dylan Jeffery | Design | 10 | 1. Obstacles design validation (continues from S28) 2. Battle Templates | |
| Vishaal Gupta | Design | 10 | 1. Unit Content + unit balance | |
| Jota Oliveira | Eng | 10 | 1. **Battle HUD Implementation - Sprint 2 of 4** (with Danny) 2. **Actor System Overhaul Phase 3** (Optimization, continues from S28) | Solo client eng — critical path for ALL Battle eng. |
| Danny Oliveira | Art (VFX) | 10 | 1. **Battle HUD Implementation** (with Jota) 2. **New Hero VFXs (Merrin)** (with Alessandro) | |
| Alessandro Oliveira | Art (VFX) | 10 | 1. **New Hero VFXs (Merrin)** (with Danny) 2. VFX implementation | |
| Vinod Rams | Art (Lead 2D Concept) | 10 | 1. **New Hero Concept (Steam Sage)** (2D Concept Kick-Off: 5/6) | |
| Ben Clair | Art | 10 | 1. **New Hero Rig (Toshoia)** 2. **Actor System Overhaul Phase 3** support (with Jota) | |
| Felipe Chaves | Art | 10 | 1. **New Hero 3D (Toshoia)** | |
| Tony Bonilla | Art | 10 | 1. **New Hero Animation (Merrin)** | |
| Vini Muniz | Art | 10 | 1. **New Hero Concept (Generalist Healer (Celestine Replacement))** | |
| Julio Scarabelli | QA | 10 | 1. Battle HUD QA 2. Bug verification | |
| Thorben Novais | Producer | 10 | 1. Battle production 2. Dozer production | Two pods. |

### ClickUp Ticket Summary (proposed)

- **SHQ4-1: HUD strategic + tactical play** (Epic [CHI-36324](https://app.clickup.com/t/86aghvg71))
  - Battle HUD Implementation - Sprint 2 of 4 (Danny + Jota)
- **Unit Content - Art**
  - New Hero Concept (Steam Sage) - Kick-Off (Vinod, 2D Concept Kick-Off: 5/6)
  - New Hero 3D (Toshoia) - Sprint 29 (Felipe)
  - New Hero Animation (Merrin) - Sprint 29 (Tony)
  - New Hero VFXs (Merrin) - Sprint 29 (Alessandro + Danny)
  - New Hero Concept (Generalist Healer - Celestine Replacement) - Sprint 29 (Vini)
  - New Hero Rig (Toshoia) - Sprint 29 (Ben)
- **Unit Content - Design**
  - Design Kits wrap for 12 M&M heroes (Lincoln, Nathan)
- **Actor System Overhaul - Phase 3** (Epic — 4 phases total, Clean up complete in S28)
  - Actor System Overhaul Phase 3 - Optimization (Jota, Ben — continuation from S28)
- **Obstacles**
  - Obstacles - Design Validation (Dylan, continues from S28)
- **Pathfinding & AI Improvements**
  - Pathfinding & AI - Continued work (continues from S28)

### Key Risks
- **Battle HUD implementation continues** — Sprint 2 of 4-sprint implementation phase
- **Actor System Overhaul multi-phase** — Phase 3 (Optimization) continues; 4 phases total
- **Jota solo client eng** — managing Battle HUD + Actor System Phase 3 simultaneously
- **Unit content pipeline** — 6 heroes in various stages (Steam Sage concept kickoff, Toshoia 3D/rig, Merrin anim/VFX, Generalist Healer concept)

---

## Dozer (Tech Pod)

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas | **Producer**: Thorben Novais

**M&M Checkpoint 2 continues this sprint (4/28-5/25).**

### Sprint Goals
- **EKS - Wrap Up** (Derek - Reach out to legal after EKS/Fortis is set up)
- **Compliance (OneTrust, Age Gate)** (continues from S28 - CP2 Sprint 2 of 2)
  - One Trust (Derek)
  - Age Gate (Bruno) - Reskin with UI Kit
- **UI Framework V2 - Support** - continues (Derek)
- **Build Pipeline Review** - continues
- Performance/Optimization continues
- Multiplayer infra support continues

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 10 | 1. **EKS - Wrap Up** (Reach out to legal after setup) 2. **One Trust** 3. UI Framework V2 - Support 4. SD eng lead duties 5. Multiplayer infra | Split: Dozer + SD eng lead. EKS wrapping up in S29. |
| Thorben Novais | Producer | 10 | 1. Build Pipeline Review coordination 2. M&M roadmap maintenance 3. Battle production | Two pods. |
| Bruno Freitas | Eng | 10 | 1. **Age Gate - Reskin with UI Kit** 2. Build Pipeline Review 3. Performance/Optimization | |

### ClickUp Ticket Summary (proposed)

- **EKS - Wrap Up** (continuation from S28)
  - EKS - Wrap Up (Derek, reach out to legal after EKS/Fortis setup)
- **Compliance (OneTrust, Age Gate)** (Epic, CP2 Sprint 2 of 2)
  - One Trust (Derek, continues from S28)
  - Age Gate - Reskin with UI Kit (Bruno, continues from S28)
- **UI Framework V2 - Support** (continuation from S28)
  - UI Framework V2 - Support (Derek, continues from S28)
- **Build Pipeline Review** (Epic, CP2 continuation)
  - Build Pipeline Review - Continued work (Bruno F, Thorben)
- **Standalone / ongoing**
  - Performance/Optimization - Sprint 29 (Bruno F)
  - Multiplayer infra support (Derek)

### Key Risks
- **CP2 final sprint** — Last sprint of Checkpoint 2 (4/28-5/25); EKS wrap-up and Compliance features must land
- **EKS legal coordination** — Derek needs to reach out to legal after EKS/Fortis setup completes
- **Age Gate UI Kit reskin** — Bruno completing reskin work from S28
- Derek's split between Dozer + SD eng lead continues at high intensity

---

## Other Pods

[To be added: Empire, Metagame, Social Dynamics sections]

---

## Preview Summary

### Top Risks

**Battle Pod:**
1. **Battle HUD Sprint 2 of 4** — Implementation continues with Danny + Jota
2. **Actor System Overhaul Phase 3** — Optimization phase begins, Jota's focus split between HUD and Actor System
3. **Jota sole engineer** — Managing two major engineering efforts simultaneously
4. **Unit content cadence** — 6 heroes in pipeline across concept, 3D, animation, VFX, and rigging stages
5. **Design Kits wrap** — 12 M&M heroes remaining for Lincoln and Nathan
6. **Obstacles and Pathfinding** — Design validation continues, engineering timeline TBD

**Tech Pod (Dozer):**
1. **CP2 final sprint** — Last sprint of Checkpoint 2; EKS and Compliance must land by 5/25
2. **EKS legal coordination** — Derek must reach out to legal after EKS/Fortis setup
3. **Derek split role** — Dozer eng lead + SD eng lead at continued high intensity
4. **Age Gate reskin completion** — Bruno wrapping UI Kit integration

---
