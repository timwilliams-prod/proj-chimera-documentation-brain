# QVR Goals — Q1 2026 (January - March)

Last Updated: 2026-04-08
Doc Status: DRAFT
Quarter: Q1 2026 (Jan 1 - Mar 31)
QVR Set Date: January 2026
Active Milestone: Systems Validation (ends Mar 2026)

> **Quarter Closed**: 2026-03-31. This quarter's goals were evaluated at the Q2 QVR.

---

## Quarter Context

- **Milestone**: Systems Validation — proving core loop systems work at a foundational level
- **Sprints in Q1**: S20 through S25
- **Key Events**: Systems Validation milestone close (end of March), vision doc review with Calvin and Shawn

---

## Goals

### Goal 1: Establish a Roadmap for Content Pipeline — Art with Tooling & AI (Heroes, Troops, Maps)

**Status**: On Track
**Owner**: Kevin Griffith / Brann Livesay
**Target Date**: End of Q1

**Description**: Build a scalable content production roadmap covering heroes, troops, and maps. Evaluate internal capacity, outsourcing ramp, and AI-assisted workflows to determine how we hit target asset counts across each category.

**Key Results / Deliverables**:
1. Content Roadmap document with target asset counts per category
2. Outsourcing plan evaluated — target 5 characters/month from external partners
3. AI exploration underway to identify optimization opportunities at each production step
4. Estimates refined for each stage of content development

**Monthly Updates**:

| Month | Status | Notes |
|-------|--------|-------|
| January | On Track | Initial content bucket identification and target counts established |
| February | On Track | Content Roadmap viewable in Productionomicon spreadsheet (WIP). Outsourcing ramp plan drafted — 5 chars/month target. |
| March | On Track | Continuing AI exploration for pipeline optimization. Next steps: refine per-stage estimates, build scalable plan evaluating internal vs outsource options. |

---

### Goal 2: Expanded Core Loop — Exit Exploration (Meta Loop Progress, World Map)

**Status**: On Track
**Owner**: Diana Vasilescu (Empire) / Leonard Perez (Metagame)
**Target Date**: End of Q1

**Description**: Push beyond the core battle loop into the broader metagame. Players should experience meta loop progress (resource flow, building upgrades, hero progression) and world map interactions that give context to battles.

**Key Results / Deliverables**:
1. Meta loop systems playable — resource generators, building upgrades, hero progression
2. World map experience functional at basic level
3. Empire-to-battle connection demonstrated (map triggers battle, results affect empire)

**Monthly Updates**:

| Month | Status | Notes |
|-------|--------|-------|
| January | On Track | Core meta systems in development |
| February | On Track | Building upgrades and resource flow coming online |
| March | On Track | Meta loop progress systems playable. World map functional. |

---

### Goal 3: Prepare for Beta (Tech, Launch Process)

**Status**: On Track
**Owner**: Derek Gallant (Dozer) / Thorben Novais
**Target Date**: Ongoing through Beta Launch Prep (Jul 2026)

**Description**: Establish the technical foundations and launch processes required for a beta release. Includes performance optimization, build pipeline stability, security, DevOps tooling, and defining what "beta ready" means.

**Key Results / Deliverables**:
1. Performance optimization baseline established
2. Build pipeline reliable and automated
3. Security audit completed or in progress
4. Beta launch checklist defined

**Monthly Updates**:

| Month | Status | Notes |
|-------|--------|-------|
| January | On Track | Infrastructure and build pipeline work ongoing |
| February | On Track | GrowthBook integration started for feature flagging |
| March | On Track | Performance and stability work continuing. Beta prep is a multi-milestone effort — foundations being laid now, heavy push in M&Ms and Beta Launch Prep. |

---

### Goal 4: Multiplayer Game Mode (Not In Engine — Exploration / Prototyping)

**Status**: On Track
**Owner**: Paul Flores (Social Dynamics) / Tim Williams
**Target Date**: End of Q1 (prototype); In-engine by end of M&Ms (Jun 2026)

**Description**: Explore and prototype the multiplayer game mode outside of the engine to solidify rules, content, and player experience before committing engineering resources to the real implementation.

**Key Results / Deliverables**:
1. Multiplayer vision aligned with leadership (Calvin, Shawn)
2. Playable prototype that demonstrates core multiplayer loop
3. Rules and content solidified enough to drive engineering implementation
4. Directional approval from stakeholders

**Monthly Updates**:

| Month | Status | Notes |
|-------|--------|-------|
| January | On Track | Early multiplayer exploration and vision doc drafting |
| February | On Track | Vision doc review ongoing. HTML-based bot-driven prototype in development. |
| March | On Track | We reviewed the Empire, Multiplayer, & Monetization vision doc with Calvin and Shawn. One result is we're leaning much harder into multiplayer live ops maps, less on static territories and horizontal expansion of the home empire. The multiplayer prototype was reviewed (HTML-bot-driven) and has directional approval. The prototype became very detailed, helping us solidify the rules and content that we'll be using to build the real thing in the client. While the prototype currently only works vs bot-players, we are updating it to work as actual multiplayer with others — we'll continue iterating and fine-tuning the experience while the engineering team builds this out "for real" in Unity. We're targeting playable in software for internal testing by end of June. |

---

### Goal 5: Stand Up Visual Target and Vertical Slices for Heroes / Troops / Maps

**Status**: On Track
**Owner**: Kevin Griffith (Art) / Lincoln Li (Battle) / Diana Vasilescu (Empire)
**Target Date**: End of Q1

**Description**: Establish the visual quality bar for the game's three primary content types — heroes, troops, and maps. Produce vertical slice assets that demonstrate final art direction and can be used as reference for production-scale content creation.

**Key Results / Deliverables**:
1. Hero visual target established with at least 1-2 final-quality hero assets
2. Troop visual direction defined
3. Map visual target established — environment art direction locked
4. Vertical slices usable as outsourcing reference

**Monthly Updates**:

| Month | Status | Notes |
|-------|--------|-------|
| January | On Track | Art direction exploration for heroes and environments |
| February | On Track | Visual targets taking shape across hero and map categories |
| March | On Track | 6 Starter Heroes identified as the vehicle for proving art direction in M&Ms. Map content pipeline being validated. |

---

## How This File Is Used

```
planning/qvr/q1_2026_goals.md         "What did we commit to this quarter?"
        |
        +--> /pulse-check (monthly)     Generates report comparing progress against these goals
        |
        +--> /qvr-report (quarterly)    End-of-quarter evaluation with CRAPS decision
```

- **Goals are set at QVR** and remain stable through the quarter (barring major pivots)
- **Monthly updates** are filled in during or after each Pulse Check
- **Status changes** should include context — what changed and why
- For feature-level detail, reference `planning/product_targets.md` and pod plans

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-04-08 | Retroactively documented Q1 2026 goals from QVR | Tim / Claude |
