# Battle — Validation Alignment

Last Updated: 2026-04-20
Doc Status: DRAFT

> Full validation hierarchy in `planning/ValidationPlan.md`.

The Battle pod is primarily validating combat engagement, unit variety, and tactical depth.

## BHQs This Pod Contributes To

| BHQ | Question | Status | Cross-Pod? |
|-----|----------|--------|------------|
| [TBD] | Does combat feel engaging and skill-expressive? | TESTING | No |
| [TBD] | Does unit variety create meaningful tactical choices? | NOT YET TESTED | Yes (Metagame) |
| [TBD] | Can we balance accessibility with depth? | NOT YET TESTED | No |

> BHQ IDs need to be assigned. See `planning/ValidationPlan.md` for next available IDs.

## SHQs (Smaller Hypothesis Questions)

| SHQ ID | Question | Related Features | Target Sprint | Status | Cross-Pod? |
|--------|----------|------------------|---------------|--------|------------|
| SHQ-01 | Does our new art direction maintain the level of clarity necessary for fun-to-execute gameplay that the player can understand the impact of their in-game choices? | Battle HUD Beta Overhaul, Unit Content, Character Assets | ~S28-S29 (mid-HUD build) | NOT STARTED | No |
| SHQ-02 | Does the HUD allow strategic planning (understanding the challenge) as well as tactical response (understanding who's turn it is and the result of their targeting choices)? | Battle HUD Beta Overhaul | ~S29-S30 (HUD implementation complete) | NOT STARTED | No |
| SHQ-03 | Can players understand the role and abilities of all six starter heroes, and do player meta game progression choices vary per hero in support of that role? | Hero implementation, Unit Content, Hero Concepts (Toshoia, Mecha Saboteur) | ~S28-S30 (hero content build-out) | NOT STARTED | Yes (Metagame) |
| SHQ-04 | Validate the unit production pipeline to ensure it works in practice and supports confident long-term projections | Unit Content (ongoing), Character Assets | ~S29-S31 (pipeline validation) | IN PROGRESS | No |
| SHQ-05 | Can we establish an effective, scalable process for building battles across all game modes, with confidence on early, mid, and late game? | Battle Content (ongoing), Battle Server Validation | ~S30-S32 (content pipeline maturity) | IN PROGRESS | No |
| SHQ-13 | Are players motivated to return session to session across three days to pursue progression goals (heroes, empire, research) while engaging in varied game mechanics and game modes? | Battle Content, Hero implementation, Unit variety | Beta Prep / M&C | NOT STARTED | Yes (Empire, Metagame) |

## Active SHQ Gaps

- BHQ IDs not yet assigned — needs attention at next validation review.
- Additional SHQs may be needed for Actor System Overhaul, Obstacles, Pathfinding & AI features.
