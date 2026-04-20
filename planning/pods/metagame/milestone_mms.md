# Metagame — M&Ms Milestone Plan

Last Updated: 2026-04-08
Doc Status: DRAFT

Ends: Jun 23, 2026 | Sprints: ~7 | Capacity: 2x ENG (parallel pipelines)

## Pipeline Assignments

| Pipeline | Engineer | Focus |
|----------|----------|-------|
| A | Guilherme Quizzini | UI Foundation (6 sprints) |
| B | Tiago Costa | Sequential features (see below) |

## Sprint Allocation

```
Pipeline A (Guilherme Quizzini):             Pipeline B (Tiago Costa):
─────────────────────────────────────        ─────────────────────────────────────
S1 ┃ UI Foundation                           S1 ┃ Building Upgrades (1 sprint)
S2 ┃ UI Foundation                           S2 ┃ Empire Progression Tree (1 sprint)
S3 ┃ UI Foundation                           S3 ┃ Global Combat Research Tree
S4 ┃ UI Foundation          (6 sprints)      S4 ┃ Global Combat Research Tree (2 sprints)
S5 ┃ UI Foundation                           S5 ┃ Hero Gacha v1 (1 sprint)
S6 ┃ UI Foundation                           S6 ┃ Passive Bonus Tiles (1 sprint)
S7 ┃ (buffer)                                S7 ┃ (buffer)
```

## Checkpoint Goals

**M&M Checkpoint 1 (ends 4/27)**
- Pipeline A: UI Foundation framework scaffolding in place, first cross-pod screens consuming it
- Pipeline B: Building Upgrades design locked, ready for Tiago to start eng in CP2
- Christopher Fidalgo carry-over from S25 burned down

**M&M Checkpoint 2 (4/28 - 5/25)**
- Pipeline A: UI Foundation supports 2+ pod screens in active use; cross-pod adoption pattern proven
- Pipeline B: Building Upgrades shipped; Empire Progression Tree underway
- FTUE Friction reduction design implementation has visible in-game changes

**M&M Checkpoint 3 (5/26 - 6/22)**
- Pipeline A: UI Foundation feature-complete for beta — supports all milestone metagame screens
- Pipeline B: Global Combat Research Tree complete; Hero Gacha v1 + Passive Bonus Tiles integrated
- Metagame depth systems (progression, gacha, bonuses) playable end-to-end

## Milestone Goals

- UI Foundation supports cross-pod metagame screens for beta
- Pipeline B features deliver metagame depth systems (progression, gacha, bonuses)
- Reduction of FTUE Friction design implementation

## Capacity & Constraints

- Guilherme dedicated to Pipeline A for the full milestone
- Tiago is new hire — may need ramp-up support
- Christopher Fidalgo has heavy S25 carry-over (6 tasks)
- Dan Dupuis split: UI Foundation oversight + Empire eng lead
- See `planning/capacity.md` for full staffing

## Beta Launch Prep (ends Jul 21, 2026 — 2 sprints)

No planned feature work. Stabilize, polish, and bugfix.
