# Battle — M&Ms Milestone Plan

Last Updated: 2026-04-08
Doc Status: DRAFT

Ends: Jun 23, 2026 | Sprints: ~7 | Capacity: 1x ENG (Jota Oliveira)

**M&M Checkpoints**:
- Checkpoint 1 (M&M 1): ends 4/27
- Checkpoint 2 (M&M 2): 4/28 - 5/25
- Checkpoint 3 (M&M 3): 5/26 - 6/22

**CAPACITY NOTE**: 4 features totaling ~9 eng-sprints scheduled in a 7-sprint milestone. Requires tight execution. Design/art prep front-loaded in parallel while Jota focuses on engineering.

## Sprint Allocation

```
M&M Checkpoint 1 (ends 4/27):     Actor System Overhaul — IN PROGRESS (Jota)
                                  Battle HUD Design/UX Review — DESIGN PHASE (Lincoln, Kevin)
M&M Checkpoint 2 (4/28 - 5/25):   Battle HUD Implementation (Jota, 4 sprints, spans into CP3)
                                  Obstacles (design validation + eng)
                                  Pathfinding & AI Improvements (starts, continues into CP3)
M&M Checkpoint 3 (5/26 - 6/22):   Battle HUD Implementation (completion)
                                  Pathfinding & AI Improvements (completion)
M&M Checkpoint 1-3 (ongoing):     Battle Content, Unit Content
```

**Note**: Battle HUD engineering implementation begins in CP2 and completes in CP3. Pathfinding & AI also spans CP2-CP3.

Battle Content (#7) and Unit Content (#8) run in parallel on design/art track throughout.

## Checkpoint Goals

**M&M Checkpoint 1 (ends 4/27)**
- Actor System Overhaul shipped — performance foundation in place for HUD work
- Battle HUD design/UX review complete — eng spec ready for CP2 kickoff
- Obstacles design validation underway

**M&M Checkpoint 2 (4/28 - 5/25)**
- Battle HUD Implementation in active engineering (Jota) — at least 50% through impl scope
- Obstacles eng integration started; design proven viable for ship
- Pathfinding & AI Improvements eng kicked off

**M&M Checkpoint 3 (5/26 - 6/22)**
- Battle HUD Implementation complete — combat interface meets beta quality bar (SHQ4-1 answered)
- Pathfinding & AI Improvements complete
- Battle Content + Unit Content delivering against pipeline targets for beta

## Milestone Goals

- Combat interface meets beta quality bar (Battle HUD Overhaul)
- Environmental tactics validated (Obstacles)
- Performance foundation for scale (Actor System Overhaul)

## Capacity & Constraints

- **Jota Oliveira** is sole client engineer — all features sequential. Any delay cascades.
- Design/art prep runs in parallel: Lincoln Li (design direction), Nathan Hajek (unit design), Dylan Jeffery (content pipeline)
- See `planning/capacity.md` for full staffing

## Beta Launch Prep (ends Jul 21, 2026 — 2 sprints)

```
Sprint 1:  Pool Management (#5)
Sprint 2:  Build stability and bugfixing
```

## M&C Preview (ends Oct 13, 2026 — 6 sprints)

```
Sprint 1-2:  Battle Server Validation Client (#6)
Sprint 3-6:  [TBD — awaiting feature definitions]
```

Battle Content and Unit Content continue throughout.
