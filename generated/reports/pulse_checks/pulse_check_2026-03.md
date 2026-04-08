---
Quarter: Q1 2026
Month: March 2026
Active Milestone: Systems Validation — ends March 2026
QVR Goals Source: planning/qvr/q1_2026_goals.md
Previous Pulse Check: None (first Pulse Check in this system)
Generated: 2026-03-25
---

# Pulse Check — March 2026

---

## 1. Executive Summary

This is the final Pulse Check of Q1 2026. The Systems Validation milestone is wrapping up and we are preparing to transition into M&Ms (Multiplayer & Meta), which begins March 31. This quarter was focused on five goals: establishing an art content pipeline roadmap, expanding the core loop beyond battle into meta and world map, preparing tech foundations for beta, prototyping the multiplayer game mode, and standing up visual targets for heroes/troops/maps.

The biggest win this quarter was the multiplayer prototype. We reviewed the Empire, Multiplayer, & Monetization vision doc with Calvin and Shawn, and the result is a significant strategic shift — we're leaning much harder into multiplayer live ops maps, less on static territories and horizontal expansion of the home empire. The HTML-bot-driven prototype received directional approval and became detailed enough to solidify the rules and content we'll use to build the real thing in Unity. This gives us strong direction heading into M&Ms.

On the content pipeline side, we have an outsourcing ramp plan targeting 5 characters per month, a Content Roadmap in the Productionomicon spreadsheet (WIP), and ongoing AI exploration for production optimization. The core loop has expanded — meta loop progress systems are playable, and the world map is functional. Beta prep foundations are being laid, with GrowthBook integration started and build pipeline work ongoing.

**Confidence is increasing.** The multiplayer direction is clear and validated at the executive level. The core loop expansion and art pipeline progress give us a solid foundation entering M&Ms. The main concern is whether we can execute on the ambitious M&Ms scope — 11 must-have features, a multiplayer mode to build "for real" in Unity, and a team restructuring (2 engineers moving from Empire to Social Dynamics).

---

## 2. Goal Summary

| # | Goal | Status | Confidence | Notes |
|---|------|--------|------------|-------|
| 1 | Content Pipeline Roadmap (Art + Tooling + AI) | On Track | Good | Roadmap exists, outsourcing plan drafted, AI exploration ongoing |
| 2 | Expanded Core Loop — Exit Exploration | On Track | Good | Meta loop playable, world map functional |
| 3 | Prepare for Beta (Tech, Launch Process) | On Track | Moderate | Foundations laid but beta targets still undefined |
| 4 | Multiplayer Game Mode (Prototyping) | On Track | Strong | Directional approval from Calvin/Shawn. Strategic direction locked. |
| 5 | Visual Targets & Vertical Slices | On Track | Good | 6 Starter Heroes identified as M&Ms vehicle. Map pipeline validating. |

**All 5 goals On Track** heading into the Q1 QVR.

---

## 3. Goal Breakdown / Notes

### [ON TRACK] Goal 1: Establish a Roadmap for Content Pipeline — Art with Tooling & AI (Heroes, Troops, Maps)

**Status**: On Track

**Progress This Month**: We've continued refining the content production roadmap with a focus on determining sustainable production rates. The outsourcing ramp plan targets 5 characters per month from external partners, and we're exploring how AI can optimize each step of the production pipeline.

**Current State**: The Content Roadmap is viewable in the Productionomicon spreadsheet (WIP). Key content buckets and target asset counts have been identified. The outsourcing ramp targets 5 characters/month. AI exploration is ongoing — we're researching how much we can optimize each production step.

**Next Steps**:
- Refine estimates for each stage of content development
- Continue AI exploration to research optimization opportunities at each step
- Build a scalable plan to evaluate internal vs. outsourcing resource options
- In M&Ms, the 6 Starter Heroes will be the first real test of the pipeline at production quality

---

### [ON TRACK] Goal 2: Expanded Core Loop — Exit Exploration (Meta Loop Progress, World Map)

**Status**: On Track

**Progress This Month**: The meta loop is now playable — players can experience resource generation, building upgrades, and hero progression. The world map is functional at a basic level. The Empire-to-battle connection is demonstrated: the map triggers battles and results affect empire state.

**Current State**: The core loop expansion from "just battles" to "battles + empire + meta" is working at a foundational level. This was the key thing Systems Validation needed to prove. Entering M&Ms, the focus shifts to depth — Territory Map VS, World Map Experience, and vertical empire progression (Building Upgrades, Empire Progression Tree, etc.).

**Validation Connection**: SHQ3-2 (empire strategy + tile conquest feel connected) is IN PROGRESS in ClickUp. SHQ3-3 (map exploration fuels hero progression) is IN PROGRESS. These Systems Validation SHQs are still being evaluated and will carry into M&Ms.

**Next Steps**:
- World Map Experience is the #2 Empire M&Ms feature (3 sprints)
- Territory Map VS will prove the map works at scale with real art (2 sprints)
- Metagame begins building the deeper progression systems (Building Upgrades, Empire Progression Tree, Global Combat Research)

---

### [ON TRACK] Goal 3: Prepare for Beta (Tech, Launch Process)

**Status**: On Track

**Progress This Month**: Performance and stability work continues. GrowthBook integration has started for feature flagging (allows A/B testing and controlled rollouts). Build pipeline is functional and improving. Beta prep is recognized as a multi-milestone effort — foundations are being laid now, with a heavy push coming in M&Ms and the dedicated Beta Launch Prep milestone (Jul 21, 2026).

**Current State**: This goal is intentionally long-running. The concrete deliverables for Q1 were about establishing baselines and tooling, not reaching beta readiness. Dozer (Derek Gallant, Bruno Freitas) is driving the technical work. Key items like performance targets, security audit scope, and the beta launch checklist are still being defined.

**Concerns**:
- No specific performance targets are defined yet (FPS, memory, load times)
- Beta Launch Prep milestone (2 sprints after M&Ms) has "[TBD]" for all must-haves in product_targets.md
- The tech debt ledger has 84 active items, including 3 Critical performance items

**Next Steps**:
- UI Framework V2 starts in M&Ms Sprint 1 (cross-pod support for all M&Ms features)
- Performance optimization is an "ongoing" Dozer track through M&Ms
- Define concrete beta performance targets before mid-M&Ms

---

### [ON TRACK] Goal 4: Multiplayer Game Mode (Not In Engine — Exploration / Prototyping)

**Status**: On Track

We have reviewed the Empire, Multiplayer, & Monetization vision doc with Calvin and Shawn. One result is we're leaning much harder into multiplayer live ops maps, less on static territories and horizontal expansion of the home empire. The multiplayer prototype was reviewed (HTML-bot-driven) and has directional approval. The prototype became very detailed, helping us solidify the rules and content that we'll be using to build the real thing in the client.

While the prototype currently only works vs bot-players, we are updating it to work as actual multiplayer with others — we'll continue iterating and fine-tuning the experience while the engineering team builds this out "for real" in Unity. We're targeting playable in software for internal testing by end of June.

**What This Unlocks for M&Ms**: The prototype work has de-risked the multiplayer game mode significantly. We now have a clear design to execute against. Social Dynamics is ramping up with 5 engineers for M&Ms (Gabriel Arruda and Marcos Loures transferring from Empire, Randy Pasion, Garrett Eidsvig, Bruno Bacelar). The phased build-up (P1-P10) starts March 31 with P1: Infrastructure & Foundation.

**Validation Connection**: SHQ3-18 through SHQ3-22 (paper/prototype multiplayer designs) were all ANSWERED in Systems Validation. Five SHQs validated through the prototype — multiplayer modes create investment & strategic planning, provide dynamic decisions, and have viable monetization avenues. This is strong validation evidence supporting WH-3 (Monetization) and BHQ-M4 (Multiplayer motivations).

**Next Steps**:
- Update prototype to actual multiplayer (vs. bots -> vs. players)
- Social Dynamics begins in-engine implementation (P1 -> P2 -> ...) on March 31
- Target: internally playable in software by end of June (end of M&Ms)

---

### [ON TRACK] Goal 5: Stand Up Visual Target and Vertical Slices for Heroes / Troops / Maps

**Status**: On Track

**Progress This Month**: Visual targets are taking shape across hero and map content categories. The 6 Starter Heroes have been identified as the primary vehicle for proving art direction during M&Ms — these will be the first heroes at final art quality and will serve as reference for production-scale outsourcing.

**Current State**: The map content pipeline is actively being validated (SHQ3-1 IN PROGRESS). Art style has been tested with players — SHQ3-13 (real heroes, final assets: do they invoke curiosity, collectibility, emotional attachment?) was ANSWERED positively in Systems Validation. SHQ3-24 (new art direction maintains visual clarity) is IN PROGRESS and carrying into M&Ms.

**Connection to Goal 1**: The visual targets established here become the reference assets for the outsourcing pipeline in Goal 1. The 6 Starter Heroes at final quality will be used to evaluate external art partners' ability to match the quality bar.

**Next Steps**:
- 6 Starter Heroes move into full production during M&Ms
- Map content pipeline continues as an ongoing Empire track
- VFX & Animation production begins in M&Ms

---

## 4. Team Size

**Current Team**: ~48 people

### Staffing by Discipline

| Discipline | Count | Notes |
|-----------|-------|-------|
| Leadership | 5 | James (GD), Holly (EP), Kevin Griffith (AD), Derek Gallant (TD), Hafiz (QA Lead) |
| Engineering | 12 | Tiago Costa (new) joining for M&Ms. Derek also in Leadership. |
| Design | 10 | 4 in Battle, 3 in Empire, 2 in Metagame, 1 in Social Dynamics |
| UX/UI | 3 | Kevin Ligon, Yura Rusin, Miguel Duran |
| Art | 14 | Largest discipline. Cross-pod support for all content. |
| QA | 4 | 1 per major pod + Hafiz (cross-pod) |
| Production | 3 | Tim, Brann, Thorben — all split across 2 pods |

### Proposed Changes / Open Roles

No open roles this period.

### Notable Team Changes (Since Last Check)

- **Tiago Costa** — New hire starting with M&Ms milestone. Will be assigned to Metagame Pipeline B. First milestone for onboarding. Note: Listed as "Tiago Keller" in Notion.
- **Gabriel Arruda** and **Marcos Loures** — Transferring from Empire to Social Dynamics effective M&Ms start (March 31). This restructuring supports the multiplayer build-out but drops Empire from 3 to 1 client engineer.

---

## 5. Team Health

### Overall Assessment

The team is in a good place heading into a significant transition. Systems Validation is wrapping up with solid results — most SHQs answered positively, the core loop expansion is working, and the multiplayer prototype has executive buy-in. Morale should be boosted by the directional clarity on multiplayer.

The main structural concern is the transition itself: 2 engineers moving pods, a new hire onboarding, and an ambitious M&Ms scope. The sprint following milestone transitions is typically disruptive — new priorities, new team compositions, new tooling needs.

### Highlights

- Multiplayer directional approval gives the team clear purpose and confidence
- 5 of 5 multiplayer SHQs (SHQ3-18 through SHQ3-22) answered positively — strong validation foundation
- Content pipeline roadmap provides Art team with a planning framework they've been needing
- No departures or negative team changes this quarter

### Concerns

- **All 3 producers split across 2 pods** — persistent attention divide, especially acute during milestone transitions
- **Empire drops to 1 engineer for M&Ms** — Henrique carries the entire Empire engineering load
- **Battle: 4 designers, 1 engineer** — high design output may bottleneck on Jota
- **Randy/Garrett Dozer split** — multiplayer build-out relies on 2 engineers who may be pulled for infrastructure work

> **Note**: Tim should add qualitative context about team morale, 1:1 feedback, and any specific concerns raised by team members before distributing.

---

## 6. Blockers, Risks, Needs & Asks

### Active Blockers

No active blockers at end of Q1. The transition to M&Ms is the main risk — new team compositions need to gel quickly.

### Top Risks (Entering M&Ms)

1. **M&Ms scope is ambitious** — 11 must-have features across 7 sprints with significant team restructuring. Several must-haves (Audio Tooling, Art Outsourcing, Tone/Emotion) don't have pod plans yet.
2. **Empire single-engineer risk** — Henrique carries Tutorial Architecture, World Map Experience (3 spr), and Territory Map VS (2 spr) sequentially with one flex sprint buffer.
3. **Battle overcommitted** — 9 eng-sprints of features listed for a 7-sprint milestone with 1 engineer. Needs explicit prioritization of what's M&Ms vs. Beta Prep.
4. **Validation cadence not established** — The validation evaluation loop (`/validation-review`) has never been run. 12 of 17 M&Ms SHQs are NOT STARTED. We need to establish this cadence in Sprint 26.
5. **Feature specs sparse** — Most M&Ms features lack detailed specs. Battle HUD, World Map Experience, Territory Map VS all show as "Stub Only" in the feature registry.

### Needs & Asks

1. **Define M&Ms must-have ownership for the 3 unplanned features**
   - Audio Tooling Foundation, Art Outsourcing Pipelines, Overarching Tone/Emotion need pod assignments and scope
   - *Ask: Can we resolve ownership at the M&Ms kickoff?*

2. **Start defining Beta Launch Prep targets**
   - 2-sprint milestone with "[TBD]" for everything. We need at least a sketch of what each pod should polish.
   - *Ask: Can Holly/James provide initial direction on what "beta ready" looks like?*

3. **Tiago Costa onboarding support**
   - New hire joining during a milestone transition. Metagame Pipeline B work depends on him ramping up quickly.
   - *Ask: Is Dan Dupuis confirmed as his onboarding buddy/mentor?*

### Open Questions

- When will the Q2 QVR goals be formally set? The Q1 QVR should include goal-setting for Q2.
- Multiplayer prototype: should we continue iterating the HTML prototype in parallel with in-engine work, or transition fully to Unity once P2 starts?
- Performance targets: who owns defining the concrete beta quality bar (FPS, memory, load times)?
- SHQ4-10 (paper economy model) — should this be a Q2/M&Ms priority given WH-3 Monetization confidence is Low?

---

## Looking Ahead: Q2 Priorities

Q2 (April - June) aligns almost exactly with the M&Ms milestone (ends June 23). The Q2 QVR goals should reflect M&Ms must-haves plus carry-forward from Q1:

**Suggested Q2 goal themes** (for QVR discussion):
1. **Multiplayer playable in software** — internal testing by end of June (carry-forward from Q1 Goal 4)
2. **Territory Map proven at scale** — SHQ3-1, SHQ4-4 validated (M&Ms must-have)
3. **Battle at beta quality bar** — HUD overhaul complete, content pipeline validated
4. **Art pipeline scaling** — outsourcing established, 6 starter heroes at final quality (carry-forward from Q1 Goals 1 & 5)
5. **Meta progression depth** — UI Foundation + empire progression systems playable

---

## Data Sources & Freshness

| Source | Date | Notes |
|--------|------|-------|
| Q1 QVR Goals | 2026-04-08 | Retroactively documented |
| Product Targets | 2026-03-27 | Current |
| Roadmap | 2026-03-27 | Current |
| ValidationPlan | 2026-04-01 | Never formally evaluated |
| Capacity | 2026-03-30 | Current |
| Risk Evaluation | 2026-04-07 | First evaluation |
| Sprint Plans | S27 Preview | Available |
