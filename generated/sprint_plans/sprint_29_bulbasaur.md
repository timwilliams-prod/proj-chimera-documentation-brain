---
Sprint: Bulbasaur 29
Dates: 5/12 - 5/26
Working Days: 10 (split holidays: May 18 Victoria Day Canada, May 25 Memorial Day USA — affect different sub-teams)
Holidays: May 18 (Mon) — Victoria Day (Canada national holiday, affects CA team); May 25 (Mon) — Memorial Day (US federal holiday, affects US team). No Brazil holiday this window.
Milestone: M&Ms (Multiplayer & Meta) — Sprint 4 of ~7
Mode: Preview
Generated: 2026-05-04
---

# Sprint 29: Bulbasaur — PREVIEW

**Milestone**: M&Ms (Multiplayer & Meta) — ends Jun 23, 2026
**Sprint 4 of ~7** in this milestone. **Closing sprint of M&M Checkpoint 2 (4/28-5/25)** for all pods. CP2 ends mid-S29 on 5/25; CP3 begins 5/26 (only the final sprint day overlaps CP3).
**Working Days**: 10 (Tue 5/12 – Mon 5/25 = 10 days). Different staff lose different days due to split US/CA national holidays.
**ClickUp List**: `901326918886` (Bulbasaur 29) — currently empty, will be populated at Kickoff.

> **Preview Mode**: This is a draft for Sprint 29 — open questions surfaced, no ClickUp tasks created yet. Carry-over from S28 to be verified at Kickoff. **Critical context**: Henrique Lima begins ~3-week vacation 5/20 (returns 6/8) — Empire loses sole client engineer for the back half of S29 and most of S30. CP2 close-out for Empire is at high risk.

---

## Sprint Overview

### Milestone Goals — M&Ms (Multiplayer & Meta)
- Multiplayer foundations playable in internal playtests by end of M&Ms
- Territory Map vertical slice proves scale + strategy/conquest connection (SHQ3-1, SHQ3-2)
- Battle HUD Beta Overhaul reaches beta quality bar (BHQ-B2)
- UI Foundation core systems shipped for all feature UIs
- At least one Metagame Depth system playable
- Optimization + compliance prep for beta
- 6 Starter Heroes — designed and arted
- Narrative and Tutorial tooling functional for designers

### M&M Checkpoint 2 Close-Out Goals (4/28 – 5/25 — last full sprint)

S29 is the **last full sprint of CP2**. These are the outcomes each pod committed to landing by 5/25 — anything still open at end of S29 spills into CP3 and erodes the back half of the milestone.

- **Empire**: World Map Experience eng implementation kicked off (Henrique on Multiple Nodes per Territory → Main Menu/Game Mode Navigation)
- **Empire**: Territory Map vertical slice validation — 2D push, 3D assets, map decoration, performance evaluation against current progress (Guilherme L / Thiago S / Marcos T)
- **Empire**: Map Content variety expanded to support WME testing
- **Metagame**: Pipeline A — UI Foundation supports cross-pod screens (Hero List/Info/Leveling/Gear migrated)
- **Metagame**: Pipeline B — Building Upgrades shipped; Empire Progression Tree underway
- **Metagame**: FTUE Friction reduction has visible in-game changes
- **Battle**: Battle HUD Implementation through ≥50% of impl scope (Jota eng + Miguel Duran cross-pod UI art)
- **Battle**: Unit content cadence steady — no Battle pod blockers from art (Ben/Felipe/Tony/Vini active)
- **Battle**: Pathfinding & AI Improvements eng kicked off; Obstacles design proven viable for ship
- **Social Dynamics**: In-client multiplayer demonstrably playable in dev UI (MM2 — covers most of P3 Basic Game Logic, including Battles + Troop Training in S29)
- **Dozer**: Build Pipeline Review — improvements landed
- **Dozer**: Compliance (OneTrust, Age Gate) implementation underway/feature-complete
- **Dozer**: UI Framework V2 Full feature-complete enough for cross-pod adoption

### Active Focus This Sprint
- **WME — Multiple Nodes per Territory wrap + Main Menu/Game Mode Navigation kickoff** (Empire, SHQ4-3 / SHQ4-4) — Henrique has ~5 days before vacation; Diana absorbs UX for #2b → *Empire CP2 #1*
- **Territory Map vertical slice continued push** — Guilherme L (env concept) + Thiago S (3D blockouts/decoration) + Marcos T (Optimization Review continues) → *Empire CP2 #2*
- **Battle HUD Implementation Sprint 2 of 4** — Danny + Jota; UI integration ramps with Miguel Duran (SHQ4-1) → *Battle CP2 #1*
- **Actor System Overhaul Phase 3** — Jota + Ben (continues from S28 Phase 2; 4 phases total) → *Battle ongoing*
- **Unit Content + Affinity Swap continuation** — Trench Knight VFX/anim wrap, Merrin 3D/rig continues, Mecha Saboteur 2D concept progresses, Toshoia concept refinement → *Battle CP2 content*
- **UI Foundation Sprint 4 of 6** (Metagame, Pipeline A) → *Metagame CP2 #1*
- **Empire Progression Tree eng kickoff** (Metagame, Pipeline B — Tiago) — assumes Building Upgrades wraps in S28 → *Metagame CP2 #2*
- **MM2 Sprint B — Battles + Troop Training** (SD — covers most of P3 Basic Game Logic) → *SD CP2 #1*
- **Multiplayer Networking back-loaded** — Bruno B returns 5/18 (out first week); Networking work concentrates in week 2
- **AI Prototype playtest iterations** continue (Paul) → *SD ongoing*
- **Dozer CP2 wrap-up** — Build Pipeline Review (improvements landing), Compliance (OneTrust + Age Gate), UI Framework V2 Full all targeting feature-complete by 5/25 → *Dozer CP2 #1, #2, #3*
- **Map Content + Battle/Unit Content pipelines** continue (SHQ3-1) → *Empire + Battle CP2 content*

### Validation In Flight
- **SHQ3-1** — Map content pipeline validated at target production rate (Empire)
- **SHQ3-2** — Empire strategy layer and tile-level conquest feel connected (Empire)
- **SHQ3-3** — Map → hero progression validation, IN PROGRESS (Empire)
- **SHQ4-1** — HUD strategic + tactical play / Battle HUD Beta Overhaul (Battle)
- **SHQ4-3** — World Map Experience: territory readability (Empire)
- **SHQ4-4** — World Map Experience: multiple nodes per territory (Empire)

---

## Milestone Phase Transitions Hitting This Sprint

S29 is the **last sprint of CP2** for all pods. Transitions to track:

| Pod | Transition | Pre-condition | Risk |
|-----|------------|---------------|------|
| Empire | WME #2a (Multiple Nodes per Territory) → WME #2b (Main Menu/Game Mode Navigation) eng kickoff | #2a eng completes in S28 (or close); #2b spec/UX ready for Henrique handoff | **Henrique vacation 5/20-6/6** consumes back half of S29 + most of S30. Realistic outcome: #2a wraps + #2b limited progress in week 1 only. |
| Empire | Yura UX → Diana UX absorption (full effect from S29) | Yura handoff package landed before 5/11 | Yura on maternity leave full sprint. Diana now solo on Empire UX for #2b and #2c. |
| Battle | Actor System Overhaul Phase 2 → Phase 3 | Phase 2 wraps end of S28 | 4 phases total — Phase 3/4 sequencing eats into Battle HUD eng time. |
| Dozer | CP2 features kickoff (S28) → CP2 features close-out (S29) | S28 CP2 kickoffs landed | 3 features × 2 engineers — likely needs prioritization by mid-S29. |
| SD | MM2 Sprint A → MM2 Sprint B (Battles + Troop Training) | Sprint A pieces (Tile Ownership, Embark Flow, MP Map Instance dev UI v1) wrap in S28 | If Sprint A slips, Sprint B feature work in S29 has a pre-condition gap. |

---

## PTO / OOO Summary (May 12 – May 26)

Pulled from Lotus OOO calendar `c_3992c42a3...`.

| Person | Pod | Dates Out | Days Lost | Avail Days | Impact |
|--------|-----|-----------|-----------|------------|--------|
| Henrique De Lima | Empire (Eng) | **5/20-6/6 vacation** + partial appts 5/13, 5/20 | 5 full days + partial | **~4-5** | **CRITICAL**: Sole client engineer out for back half + first half of S30. Empire eng work caps at week-1. |
| Yura Rusin | Empire (UX) | Full sprint — maternity leave (5/11 - ~6/20) | 10 | **0** | Empire embedded UX gone. Diana absorbs UX for WME #2b and #2c. |
| Bruno Bacelar | Social Dynamics (Eng) | Vacation continuation 5/12-5/15 (returns 5/18) | 4 | **6** | Multiplayer Networking effectively has only week 2. |
| Christopher Fidalgo | Metagame (Design) | In Denver 5/19-5/22 (4 days — verify if PTO or remote/conference) | ~4 (assumed PTO) | **~6** | Confirm with Chris whether he's working remotely or off. |
| Vishaal Gupta | Battle (Design) | Victoria Day 5/18 + 1 hr appts 5/14, 5/21 | 1 + minor | **9** | Canadian — Victoria Day. |
| Brendan Cheatham | Cross-pod (Assoc. AD) | Victoria Day 5/18 | 1 | **9** | Canadian — Victoria Day. |
| Felipe Chaves | Battle (Art) | Victoria Day 5/18 | 1 | **9** | Canadian — Victoria Day. |
| Garrett Eidsvig | Social Dynamics (Eng) | Victoria Day 5/18 | 1 | **9** | Canadian — Victoria Day. |
| Derek Gallant | Dozer (Eng Lead) | Victoria Day 5/18 | 1 | **9** | Canadian — Victoria Day. |
| Hafiz Kassam | QA Lead (Cross-pod) | Victoria Day 5/18 | 1 | **9** | Canadian — Victoria Day. |
| Lincoln Li | Battle (Design Lead) | Memorial Day 5/25 + ~1 hr appts 5/14, 5/21 | 1 + minor | **9** | US — Memorial Day. |

**US Memorial Day (Mon 5/25) — affects all US-based staff**: James, Holly, Kevin Griffith, Tim Williams, Jacob Siegel, Elise Cole, Leonard Perez, Chris Fidalgo, Kevin Ligon, Miguel Duran, Lincoln Li, Nathan Hajek, Dylan Jeffery, Paul Flores, Randy Pasion, Ben Clair, Tony Bonilla — each lose 1 day.

**Canada Victoria Day (Mon 5/18) — affects all Canadian staff**: Derek Gallant, Garrett Eidsvig, Hafiz Kassam, Vishaal Gupta, Brendan Cheatham, Felipe Chaves — each lose 1 day.

**Brazil**: No national holiday in this window. BR team avail = 10 (minus any individual PTO).

**Partial Appointments** (1-2 hrs, minimal impact):
- Henrique Lima: 5/13 (Wed morning, before vacation start)
- Vishaal Gupta: 5/14, 5/21 (1 hr each)
- Lincoln Li: 5/14, 5/21 (gymnastics, ~1 hr)

---

## Empire

**Design Lead**: Diana Vasilescu | **Producer**: Brann Livesay | **Eng**: Henrique De Lima (sole client eng)
**QA**: Laura Santana | **UX**: Diana (absorbing — Yura on maternity)

### Sprint Goals
- **WME — Multiple Nodes per Territory wrap** (Henrique, week 1 only) → *advances Empire CP2 #1* — SHQ4-3, SHQ4-4
- **WME — Main Menu/Game Mode Navigation eng kickoff** with tightly-bounded week-1 scope (Henrique, before 5/20 vacation) → *advances Empire CP2 #1* — SHQ4-4
- **WME #2b spec + UX locked by Diana before Henrique vacation** so any S30 backup engineer (if any) has a clean handoff → *advances Empire CP2 #1*
- **Territory Map Vertical Slice — visual target finalization push** (Guilherme L + Thiago S + Marcos T optimization review wrap) → *advances Empire CP2 #2* — SHQ3-1
- **Map Content T7-T8 implementation** (Jacob, Elise) → *advances Empire CP2 #3* — SHQ3-1

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Diana Vasilescu | Design | 9 (Memorial Day -1) | 1. **WME #2b spec + UX finalization** (absorbing Yura's UX) — must close before Henrique vacation 5/20 2. WME #2a iteration support during Henrique's last week 3. Narrative for Region 2 (continuation from S28) 4. Territory Map visual target feedback | US — out 5/25. Highest individual load this sprint. |
| Jacob Siegel | Design | 9 (Memorial Day -1) | 1. T7 implementation 2. T8 design wrap 3. World Map Reshaping continuation | US — out 5/25. |
| Elise Cole | Design | 9 (Memorial Day -1) | 1. Map Creation flow (continuation from S28) 2. Figma Map agentic research wrap (CHI-36575) 3. T7/T8 design support | US — out 5/25. |
| Henrique De Lima | Eng | **~4-5** | 1. **WME #2a wrap** (week 1) 2. **WME #2b eng kickoff — bounded scope** (week 1, hand-off ready) 3. Pre-vacation handoff doc | **Vacation 5/20-6/6 (5 days lost in S29).** Partial appt 5/13 morning. Sole client engineer — Empire eng pauses 5/20 onwards. |
| Laura Santana | QA | 10 | 1. WME #2a smoke-test during Henrique's wrap 2. Bug verification 3. Test plan prep for #2b | BR — no holiday. |
| Marcos Teles | Tech Art | 10 | 1. **Territory Map Optimization Review wrap** (collab w Pedro) — CP2 close-out item 2. WME TA support 3. Water VFX/Shader exploration | BR — no holiday. Empire-embedded artist. |
| Guilherme Lascasas | 2D Env Concept | 10 | 1. **Territory Map Visual Target push** 2. WME asset support | BR — no holiday. Empire-embedded artist. |
| Thiago Saraiva | Senior 3D | 10 | 1. **Territory Map vertical slice tile creation continued** 2. WME asset support | BR — no holiday. Empire-embedded artist. |
| Brann Livesay | Producer | 9 (Memorial Day -1) | 1. Empire production (incl. Empire-embedded art) 2. Henrique vacation transition planning 3. Plan S30 Empire eng coverage | US — out 5/25. |

### ClickUp Ticket Summary (proposed)

- **SHQ4-3 / SHQ4-4: World Map Experience** (existing Epic from S28)
  - WME #2a: Multiple Nodes per Territory — Engineering wrap (Henrique, week 1)
  - WME #2a: Multiple Nodes per Territory — QA pass (Laura, late week 1 / week 2)
  - WME #2b: Main Menu/Game Mode Navigation — Spec finalization (Diana — close before 5/20)
  - WME #2b: Main Menu/Game Mode Navigation — UX wireframes/flows (Diana absorbing — close before 5/20)
  - WME #2b: Main Menu/Game Mode Navigation — Engineering kickoff bounded scope (Henrique, week 1)
- **Territory Map Vertical Slice** (CP2 close-out)
  - Territory Map Optimization Review — wrap (Marcos T + Pedro)
  - Territory Map Visual Target push (Guilherme L + Thiago S)
  - Territory Map vertical slice tile creation (Thiago S, continuation)
- **Map Content - Sprint 29** (Jacob, Elise — ongoing)
  - T7 Implementation
  - T8 Design wrap
  - World Map Reshaping continuation
- **Tutorial Migration — STILL PARKED**, no new work
- **Carry-over from S28** (verify at Kickoff)
  - WME #2a tasks (CHI-36655, CHI-36665, CHI-36667, CHI-36669, etc.)
  - Map Content tasks (CHI-36659, CHI-36660, CHI-36661, CHI-36662, CHI-36671, CHI-36672)
  - Elise's Figma agentic research (CHI-36575)

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Henrique (likely 2+ from WME #2a if not fully wrapped), Diana, Elise — verify at Kickoff
- [ ] **Henrique vacation coverage**: Does any other engineer (Gabriel? Marcos Loures?) flex back to Empire for ~1 week to keep WME #2b moving in S29 week 2 + S30? Or does Empire eng pause entirely 5/20 → 6/8?
- [ ] **WME #2b scope bounding**: What slice of #2b can Henrique realistically land in 4-5 days? Define narrowly to avoid mid-flight pause.
- [ ] **Diana load check**: Diana absorbing UX + leading design + WME spec + Territory Map feedback. Realistic in 9 days?
- [ ] **WME #2c (Experience Iterations)**: Originally planned S30. With Henrique out half of S30, does this slip into S31 (Territory Map VS sprint) or get cut?
- [ ] **Memorial Day** — confirm Fortis observes (typical for US studios)

### Key Risks
- **🔴 Henrique vacation collision with CP2 close**: Empire's only client engineer is out 5/20-6/6. WME #2b eng kickoff has only week 1 to make meaningful progress, and S30 starts with Henrique still away. **CP2 close-out for Empire is at high risk.** Decision needed at Preview: scope-cut WME #2b, find backup eng, or accept slip.
- **🔴 No embedded Empire UX, Diana solo**: Diana absorbing UX for WME #2b + #2c on top of design lead. Yura full sprint OOO. Watch Diana's load — biggest pod-level risk for M&Ms remainder.
- **🟡 Territory Map vertical slice work continues without engineering anchor**: Art track can keep pushing visuals/optimization, but eng integration is paused once Henrique is out.
- **🟡 Memorial Day** — Diana, Jacob, Elise, Brann all out 5/25 (the CP2 close date). One day where most Empire design + production is unavailable on the date the checkpoint formally closes.

---

## Metagame

**Design Lead**: Leonard Perez | **Producer**: Tim Williams | **Eng**: Guilherme Quizzini (Pipeline A — UI Foundation), Tiago Costa (Pipeline B)
**Eng Lead**: Dan Dupuis (planning capacity) | **QA**: Hugo Hideo | **UX**: Kevin Ligon | **UI Art**: Miguel Duran

### Sprint Goals
- **UI Foundation Sprint 4 of 6** — Quizzini continues; Hero List/Info/Leveling/Gear screens migration progress (CP2 close-out goal)
- **Empire Progression Tree eng kickoff** (Tiago, Pipeline B) — assumes Building Upgrades wraps in S28; if not, this slips
- **Building Upgrades wrap-up + closeout** if any spillover from S28 (Tiago, Hugo QA)
- **Meta Depth design progression**: Combat Research Tree spec maturation for S30 (Leonard, Kevin Ligon UX support)
- **FTUE Friction reduction — visible in-game changes** (Leonard) — CP2 close-out goal

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Leonard Perez | Design | 9 (Memorial Day -1) | 1. **FTUE Friction visible in-game changes** (CP2 close) 2. **Combat Research Tree spec maturation** for S30 3. Empire Progression Tree spec support (unblock Tiago) 4. Commercial plan continuation | US — out 5/25. |
| Christopher Fidalgo | Design | ~6 (Denver 5/19-5/22 + Memorial Day 5/25) | 1. Narrative/Tutorial design 2. Add source of Gacha scrolls to game economy 3. Bug close-out (CHI-36765 zero crit chance) | **In Denver 5/19-5/22 — verify if PTO/conference or remote-working.** US — out 5/25. |
| Kevin Ligon | UX | 9 (Memorial Day -1) | 1. UI Foundation UX (Sprint 4 sub-features) 2. **Empire Progression Tree UX** (unblock Tiago) 3. Combat Research Tree UX prep 4. Battle HUD UX support cross-pod | US — out 5/25. UI Foundation primary; EPT UX is critical to keep Pipeline B moving. |
| Dan Dupuis | Eng Lead | 9 (Canada — Victoria Day -1) | 1. UI Foundation oversight 2. Empire eng lead support — **Henrique vacation backup planning** | Planning capacity only. Canada — out 5/18. |
| Guilherme Quizzini | Eng | 10 | 1. **UI Foundation Sprint 4** (Pipeline A — Hero Screen continues, Gear next likely) | BR — no holiday. Dedicated to UI Foundation for full milestone. |
| Tiago Costa | Eng | 10 | 1. **Building Upgrades wrap** if any S28 spillover 2. **Empire Progression Tree (Meta Depth Phase 2) eng kickoff** | BR — no holiday. Pipeline B kickoff dependency: EPT spec + UX from Leonard/Kevin Ligon ready. |
| Miguel Duran | UI Art | 9 (Memorial Day -1) | 1. **Building Upgrades UI Art** (continuation/wrap from S28) 2. **Battle HUD UI Art continuation** (cross-pod) 3. **Empire Progression Tree UI Art** kickoff 4. Rank icons / Building Stat icons / Hero/Troop Stat icons (continuation thread from S28) | US — out 5/25. Cross-pod load high (Battle HUD + Meta + WME). |
| Hugo Hideo | QA | 10 | 1. Building Upgrades QA wrap 2. UI Foundation QA 3. Empire Progression Tree QA prep | BR — no holiday. |

### ClickUp Ticket Summary (proposed)

- **UI Foundation - Sprint 4** (no SHQ link yet — carried open Q from S26)
  - UI Foundation - UX (Kevin Ligon)
  - UI Foundation - Engineering (Guilherme)
  - UI Foundation - UI Art (Miguel)
  - UI Foundation - QA (Hugo)
- **Pipeline B — Empire Progression Tree (Meta Depth Phase 2)** (proposed Epic — confirm SHQ link)
  - Empire Progression Tree - Engineering kickoff (Tiago)
  - Empire Progression Tree - UX (Kevin Ligon)
  - Empire Progression Tree - Design (Leonard)
  - Empire Progression Tree - UI Art (Miguel)
- **Building Upgrades (Meta Depth Phase 1) — wrap if needed**
  - Building Upgrades - Engineering wrap (Tiago, Hugo QA)
  - Building Upgrades - UI Art wrap (Miguel)
- **Meta Depth design progression — Combat Research Tree spec** (Leonard, Kevin Ligon)
- **FTUE Friction reduction — visible in-game changes** (Leonard)
- **Standalone**
  - Zero percent crit chance bug (Hugo, Fidalgo) — CHI-36765 carry-over from S28
  - Debug dungeon content — close out CHI-36652 if QA verify completes
- **Carry-over from S28** (verify at Kickoff)
  - CHI-36765 (Hugo / Fidalgo) — bug
  - CHI-36652 (Fidalgo) — QA verify
  - Building Upgrades engineering tickets if not wrapped

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Hugo (1+), Fidalgo (1+), Tiago (likely Building Upgrades carry-over) — verify at Kickoff
- [ ] **Did Building Upgrades complete in S28?** If not, Empire Progression Tree start slips a sprint and CP2 #2 goal is at risk.
- [ ] **EPT spec + UX readiness check** — is Leonard + Kevin Ligon ready to hand to Tiago at S29 start?
- [ ] **Chris Fidalgo Denver trip** — PTO or working remotely? Affects QA bug ownership and design availability.
- [ ] **UI Foundation Sprint 4 sub-feature scope** — which screens this sprint?
- [ ] **UI Foundation SHQ linkage** (carried open from S26 + S27 + S28)
- [ ] **Combat Research Tree spec readiness for S30** — needs to be pre-baked by end of S29 to unblock Tiago for the next Pipeline B feature.

### Key Risks
- **🟡 Pipeline B continuity depends on Building Upgrades S28 close**: If Building Upgrades doesn't wrap in S28, Tiago has no clean handoff for EPT. Chain reaction risk for the rest of Pipeline B.
- **🟡 Miguel Duran cross-pod overload**: UI Foundation primary + Battle HUD continuation + Building Upgrades wrap + EPT kickoff + cross-pod icon work. Watch for bottleneck on Battle HUD/EPT UI art.
- **🟡 Dan Dupuis Henrique-vacation backup ask**: If Empire needs eng coverage during Henrique's vacation, Dan is the natural escalation — pulls from Metagame oversight.
- **🟢 No major BR holiday** — Quizzini, Tiago, Hugo all at 10 days.

---

## Battle

**Design Lead**: Lincoln Li | **Producer**: Thorben Novais | **Eng**: Jota Oliveira (sole client eng)
**QA**: Julio Scarabelli

### Sprint Goals
- **Battle HUD Beta Overhaul — Implementation Sprint 2 of 4** (Danny + Jota; UI Art continued integration with Miguel Duran cross-pod) — SHQ4-1 → *advances Battle CP2 #1*
- **Actor System Overhaul Phase 3** (Jota + Ben — continues from S28 Phase 2; 4 phases total) → *advances Battle ongoing*
- **Unit Content cadence**:
  - Trench Knight VFX (Alessandro + Danny) — wrap pass
  - Merrin 3D + Rig (Felipe + Ben) — continuation
  - Toshoia concept refinement (Vinod) — continuation
  - Mecha Saboteur 2D concept progression (Vini)
  - Hero pipeline closeout for any S28 in-flight items
  → *advances Battle CP2 content*
- **Affinity Swap implementation completion** (Felipe, Dylan, Lincoln color adjustments — continuation from S28)
- **Pathfinding & AI Improvements — design prep continues** (Lincoln); eng start unlikely (Jota fully consumed by HUD + Actor System Phase 3) → *Battle CP2 ⚠️ light coverage*
- **Obstacles — design validation wrap** (Dylan); eng start unlikely → *Battle CP2 ⚠️ light coverage*

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Lincoln Li | Design Lead | 9 (Memorial Day -1) | 1. **Battle HUD design support during eng implementation S2** 2. **Pathfinding & AI design spec maturation** 3. Affinity Swap color adjustments wrap 4. Design Kits wrap (12 M&M heroes, with Nathan) | US — out 5/25. Partial appts 5/14, 5/21. |
| Nathan Hajek | Design | 9 (Memorial Day -1) | 1. **Design Kits wrap for 12 M&M heroes** (with Lincoln) 2. Unit Design & Prototype | US — out 5/25. |
| Dylan Jeffery | Design | 9 (Memorial Day -1) | 1. **Obstacles design validation wrap** 2. Affinity Swap (with Felipe) 3. Battle Templates | US — out 5/25. |
| Vishaal Gupta | Design | 8 (Victoria Day -1, partial appts) | 1. Unit Content + unit balance | Canada — out 5/18. Partial appts 5/14, 5/21. |
| Jota Oliveira | Eng | 10 | 1. **Battle HUD Implementation Sprint 2 of 4** (with Danny) 2. **Actor System Overhaul Phase 3** (with Ben) | BR — no holiday. **Solo client eng — critical path for ALL Battle eng.** |
| Danny Oliveira | Art (VFX) | 10 | 1. **Battle HUD first-pass implementation continuation** (with Jota) 2. **Trench Knight VFX wrap** (with Alessandro) 3. Battle ENV Performance follow-up | BR — no holiday. |
| Alessandro Oliveira | Art (VFX) | 10 | 1. **Trench Knight VFX wrap** (with Danny) 2. VFX implementation continuation | BR — no holiday. |
| Vinod Rams | Art (Lead 2D Concept) | 10 | 1. **Toshoia concept refinement** 2. Unit concepts | BR — no holiday. |
| Ben Clair | Art | 10 | 1. **Merrin Rig continuation** 2. **Actor System Overhaul Phase 3** (with Jota) | US Memorial Day -1. (Ben Clair = USA per capacity.md.) Re-verify nationality. |
| Felipe Chaves | Art | 9 (Victoria Day -1) | 1. **Affinity Swap wrap** (with Dylan, Lincoln) 2. **Merrin 3D continuation** | Canada — out 5/18. |
| Tony Bonilla | Art | 9 (Memorial Day -1) | 1. **Trench Knight Animation wrap** 2. Next hero anim queue | US — out 5/25. |
| Vini Muniz | Art | 10 | 1. **Mecha Saboteur 2D concept progression** 2. Ranged Bot continuation if not wrapped | BR — no holiday. |
| Julio Scarabelli | QA | 10 | 1. Battle HUD QA — first-pass smoke test 2. Bug verification | BR — no holiday. |
| Thorben Novais | Producer | 10 | 1. Battle production 2. Dozer production (CP2 close) | BR — no holiday. Two pods. |

### ClickUp Ticket Summary (proposed)

- **SHQ4-1: HUD strategic + tactical play** (Epic CHI-36324, existing)
  - Battle HUD Implementation - Sprint 2 (Danny + Jota) — second of 4-sprint phase
  - Battle HUD UI Art Integration (Miguel Duran cross-pod)
  - Battle HUD QA - Smoke Test (Julio)
- **Actor System Overhaul - Phase 3** (Epic — 4 phases total, Phase 2 wraps end S28)
  - Actor System Overhaul Phase 3 - Engineering (Jota, Ben)
- **Unit Content - Art**
  - Trench Knight VFX - Wrap (Alessandro + Danny)
  - New Hero 3D (Merrin) - Continuation (Felipe)
  - New Hero Rig (Merrin) - Continuation (Ben)
  - New Hero Animation (Trench Knight) - Wrap (Tony)
  - New Hero Concept (Toshoia) - Refinement (Vinod)
  - New Hero Concept (Mecha Saboteur) - Progression (Vini)
- **Unit Content - Design**
  - Design Kits wrap for 12 M&M heroes (Lincoln, Nathan)
- **Affinity Swap - Wrap** (Felipe + Dylan + Lincoln)
- **Obstacles** (proposed Epic — confirm SHQ link)
  - Obstacles - Design Validation Wrap (Dylan)
- **Pathfinding & AI Improvements** (proposed)
  - Pathfinding & AI - Design Spec Maturation (Lincoln)
- **Carry-over from S28** (verify at Kickoff)
  - Battle HUD Implementation tasks
  - Actor System Phase 2 closeout tickets
  - Unit Content art tickets in progress

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Jota (likely 1-2), Felipe/Tony/Ben/Alessandro (multi-sprint art continuations) — verify at Kickoff
- [ ] **Battle HUD Sprint 2 scope** — what's locked in for the second sprint of the 4-sprint feature?
- [ ] **Actor System Phase 2 → Phase 3 handoff** — Phase 2 fully wrapping in S28? Phase 3 spec ready?
- [ ] **Obstacles eng start in S29 or slip to S30?** Jota fully consumed by HUD + Actor System.
- [ ] **Pathfinding & AI eng start** — same Jota dependency. Likely slips into CP3.
- [ ] **Ben Clair holiday** — confirm nationality (capacity.md says USA → Memorial Day) for accurate avail days.
- [ ] **Battle CP2 closure** — Pathfinding/Obstacles eng kickoff was a CP2 commitment; without it, the goal is unmet at 5/25.

### Key Risks
- **🔴 Battle CP2 capacity wall**: 3 features (Battle HUD ongoing 4-sprint, Obstacles, Pathfinding) committed to CP2; only Battle HUD has eng coverage. Pathfinding/Obstacles eng kickoffs effectively deferred to CP3. **Decision needed**: officially defer or scope-cut at Preview review.
- **🟡 Actor System multi-phase pressure**: Phase 3 in S29 with Phase 4 still ahead. Each phase eats Jota's HUD time.
- **🟡 Memorial Day on the CP2 close date**: 4 of Battle's design + producer staff out on 5/25 (the day CP2 formally closes).
- **🟢 Battle BR-heavy art team unaffected by US/Canada holidays** — VFX, 3D, animation, concept can all push without holiday hit.

---

## Social Dynamics

**Design Lead**: Paul Flores | **Producer**: Tim Williams | **Eng**: Gabriel Arruda, Marcos Loures, Randy Pasion, Garrett Eidsvig, Bruno Bacelar

### Sprint Goals
- **MM2 Sprint B — Battles + Troop Training** (engineering build-out per milestone plan; covers most of P3 Basic Game Logic) → *advances SD CP2 #1*
- **MM2 Sprint A wrap-up** if anything spills (Tile Ownership/States/Visualization, Embark Flow, MP Map Instance dev UI v1) → *advances SD CP2 #1*
- **Multiplayer Networking — week-2 push** (Bruno B back 5/18) → *supports SD CP2 #1*
- **AI Prototype playtest iterations + feedback loop** (Paul) → *SD ongoing*
- **In-client multiplayer demonstrably playable in dev UI** by 5/25 → *SD CP2 #1 close-out goal*

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Paul Flores | Design | 9 (Memorial Day -1) | 1. AI Prototype Playtesting + iteration 2. MM2 wrap design support 3. P4 (Heroes on Map) design prep for S30 | US — out 5/25. |
| Marcos Loures | Eng | 10 | 1. **Battles eng implementation** 2. MM2 Sprint A spillover (Tile Ownership/States/Visualization) | BR — no holiday. |
| Gabriel Arruda | Eng | 10 | 1. **Troop Training eng implementation** 2. MM2 Sprint A spillover (Embark Flow) | BR — no holiday. |
| Randy Pasion | Eng | 9 (Memorial Day -1) | 1. **MP Map Instance flows** continuation (Creation/List/Join — beyond dev UI v1) 2. Dozer split risk — build pipeline | US — out 5/25. Dozer split risk. |
| Garrett Eidsvig | Eng | 9 (Victoria Day -1) | 1. **MP infrastructure / Backend support** for Battles + Troop Training 2. Dozer split risk — networking infra | Canada — out 5/18. Dozer split risk. |
| Bruno Bacelar | Eng | **6** (vacation 5/12-5/15) | 1. **Multiplayer Networking — front-load week 2** (5/18 onwards) 2. Backlog catch-up | **Out first 4 sprint days (vacation through 5/15).** Concentrated week-2 push. |

### ClickUp Ticket Summary (proposed)

- **MM2 Sprint B — Battles + Troop Training** (covers most of P3 Basic Game Logic)
  - MM2-B: Battles - Engineering (Marcos Loures)
  - MM2-B: Troop Training - Engineering (Gabriel Arruda)
  - MM2-B: MP Map Instance flows continuation (Randy Pasion)
- **MM2 Sprint A spillover** (verify at Kickoff)
  - MM2-A: Tile Ownership/States/Visualization wrap (Marcos Loures)
  - MM2-A: Embark Flow wrap (Gabriel Arruda)
  - MM2-A: MP Map Instance dev UI v1 wrap (Randy Pasion)
- **Multiplayer Networking - Sprint 29** (Bruno Bacelar — week 2 concentration)
- **AI Prototype Playtesting - Sprint 29** (Paul Flores)
- **Backend infrastructure support** (Garrett Eidsvig)
- **Carry-over from S28** (verify at Kickoff)
  - CHI-35564 MP Backend architecture (Garrett — was in progress)
  - Any MM2 Sprint A tickets

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Verify all 5 SD engineers' S28 carry-over at Kickoff
- [ ] **Did MM2 Sprint A close cleanly in S28?** AA-target was P2 wrap + dev UI v1 — confirm before locking S29 scope.
- [ ] **In-client multiplayer playable in dev UI by 5/25** — what's the demo bar for "playable"? Need an explicit playtest checklist.
- [ ] **Bruno B week-2 networking scope** — what's the highest-priority slice he can land in 6 days?
- [ ] **Tim coverage** — Tim available the full sprint (no PTO this window)? Producer coverage continuity good.
- [ ] **Switchover assessment** (in-client → AI prototype replacement) — pulled forward in light of MM2 progress?
- [ ] **Randy/Garrett Dozer split** — does Dozer's CP2 close-out push pull either back to Dozer mid-sprint?
- [ ] **Bruno B vacation overlap with Memorial Day & Victoria Day** — Bruno is BR (no Memorial/Victoria impact) but does lose 4 vacation days.

### Key Risks
- **🔴 SD CP2 #1 close depends on MM2 Sprint A wrapping in S28**: If Sprint A slips, Sprint B (S29) takes on Sprint A debt and CP2 close is at risk.
- **🟡 Bruno Bacelar concentrated in week 2 only**: Networking work depends on his return 5/18; if anything blocks him in week 2, no recovery time before sprint end.
- **🟡 Randy/Garrett Dozer split**: CP2 is also Dozer's close-out sprint — Dozer prioritization may pull Randy/Garrett back. Watch for build pipeline / infra interrupts.
- **🟡 Memorial Day pulls Paul + Randy** on 5/25 (CP2 close date).
- **🟢 BR-heavy SD eng team mostly unaffected by US/Canada holidays** in week 1.

---

## Dozer (Tech Pod)

**Eng Lead**: Derek Gallant | **Eng**: Bruno Freitas | **Producer**: Thorben Novais

**M&M Checkpoint 2 closes this sprint (4/28-5/25). All CP2 features target feature-complete by 5/25.**

### Sprint Goals
- **Build Pipeline Review — Sprint 2 of 2** — improvements landing, audit findings actioned (Bruno F + Thorben) → *advances Dozer CP2 #1*
- **Compliance (OneTrust + Age Gate) — Sprint 2 of 2** — implementation underway/feature-complete (Derek One Trust, Bruno F Age Gate) → *advances Dozer CP2 #2*
- **UI Framework V2 (Full) — Sprint 2 of 2** — feature-complete enough for cross-pod adoption (Derek + cross-pod) → *advances Dozer CP2 #3*
- **EKS parallel workflows wrap** if not closed in S28 (Derek)
- **Performance/Optimization continues** (Bruno F, ongoing)
- **Multiplayer infra support continues** (Derek)

### Individual Breakdown

| Assignee | Discipline | Avail Days | Priorities | Notes |
|----------|-----------|------------|------------|-------|
| Derek Gallant | Eng Lead | 9 (Victoria Day -1) | 1. **Compliance — One Trust implementation** (CP2 close) 2. **UI Framework V2 (Full) wrap** 3. EKS parallel workflows wrap 4. SD eng lead duties (MM2 Sprint B oversight) 5. **Empire Henrique vacation backup planning** | Canada — out 5/18. Split: Dozer + SD eng lead. Highest cross-pod load this sprint. |
| Bruno Freitas | Eng | 10 | 1. **Age Gate implementation** (Unified SDK confirmed with Randy) 2. **Build Pipeline Review — improvements landing** 3. Performance/Optimization | BR — no holiday. |
| Thorben Novais | Producer | 10 | 1. Build Pipeline Review coordination 2. M&M roadmap maintenance 3. Battle production (HUD Sprint 2) | BR — no holiday. Two pods. |

### ClickUp Ticket Summary (proposed)

- **Compliance (OneTrust, Age Gate)** (Epic from S28)
  - One Trust - Implementation (Derek)
  - Age Gate - Implementation (Bruno F — Unified SDK + UI Kit reskin)
- **UI Framework V2 (Full)** (Epic from S28)
  - UI Framework V2 - Migration wrap (Derek + cross-pod)
- **Build Pipeline Review** (Epic from S28)
  - Build Pipeline Review - Improvements landing (Bruno F, Thorben)
- **EKS - Parallel Workflows wrap** if needed (Derek)
- **Standalone / ongoing**
  - Performance/Optimization - Sprint 29 (Bruno F)
  - Multiplayer infra support (Derek)

### Open Questions
- [ ] **Past Sprint Cleanup — will we have to deal with these?** Derek (likely EKS + Compliance + UIFW V2 in flight), Bruno F (Age Gate + Build Pipeline) — verify at Kickoff
- [ ] **Did EKS deployment complete in S28?** If not, Derek's CP2 close-out work is double-loaded.
- [ ] **Did UI Framework V2 - UI Support (CP1) fully wrap?** Predecessor to V2 Full — confirm before locking S29 scope.
- [ ] **CP2 prioritization with 2 engineers** — 3 features all targeting feature-complete by 5/25 + EKS wrap + SD eng lead duties. Realistic? Need Derek/Bruno to triage at Preview.
- [ ] **Empire Henrique vacation backup** — does Dozer get pulled? Derek is the natural escalation but already over-loaded.
- [ ] **Age Gate Unified SDK status** — confirmed with Randy in S28?
- [ ] **Audio Tooling / QA Automation stretch goals** — staying parked given CP2 over-load? (Per milestone plan, both stretch goals are CP3-targeted.)

### Key Risks
- **🔴 CP2 over-loaded — feature-complete deadline hits with 2 engineers**: 3 features (Build Pipeline, Compliance, UI Framework V2 Full) all targeting close by 5/25, with Derek also running SD eng lead duties + potential Empire backup ask. Likely outcome: at least one CP2 commitment slips.
- **🟡 Derek's split intensifies further**: Dozer CP2 close + SD MM2 Sprint B oversight + potential Empire Henrique backup. Highest individual load on the team.
- **🟡 Victoria Day + Memorial Day combo** — Derek out 5/18, Thorben + Bruno F unaffected. Coverage for Derek's Canadian holiday day needed.
- **🟡 Age Gate Unified SDK dependency** — if Randy didn't confirm Unified SDK status in S28, Bruno F is blocked.

---

## Cross-Pod & Dependencies

### Key Handoffs This Sprint
- **WME #2a → #2b eng kickoff** (Empire — Henrique completes #2a in week 1 before vacation, hands off #2b spec/UX to whoever covers in S30)
- **Building Upgrades → Empire Progression Tree eng kickoff** (Metagame — Tiago, dependent on S28 close)
- **MM2 Sprint A → MM2 Sprint B (Battles + Troop Training)** (SD — dependent on Sprint A close in S28)
- **Battle HUD UI Art continuation** (Miguel Duran cross-pod into Battle pod, ongoing)
- **EKS → CP2 features close-out** (Dozer — Derek across multiple workstreams)
- **AI Prototype → in-client multiplayer switchover assessment** (SD — playable bar for 5/25)

### Shared Resource Conflicts
- **🔴 Derek Gallant** (Eng Lead): Dozer CP2 close + SD MM2 Sprint B + potential Empire Henrique vacation backup. **Highest cross-pod load.**
- **🟡 Miguel Duran** (UI Artist): UI Foundation primary + Battle HUD continuation + Building Upgrades wrap + EPT kickoff + cross-pod icon work. **Bottleneck risk.**
- **🟡 Kevin Ligon** (UX): UI Foundation Sprint 4 + EPT UX (unblock Pipeline B) + Combat Research Tree prep + Battle HUD support. **High UX load.**
- **🟡 Dan Dupuis** (Eng Lead, planning capacity): UI Foundation oversight + Empire eng lead support during Henrique vacation.
- **🟡 Thorben Novais** (Producer): Battle HUD Sprint 2 + Dozer CP2 close-out + roadmap maintenance.
- **🟡 Diana Vasilescu** (Empire Design Lead): Design lead + UX absorption (WME #2b) + Territory Map feedback + Region 2 narrative. **Single-person bottleneck.**
- **Kevin Griffith** (Art Director, cross-pod): Setting CP2 close art priorities — Empire Territory Map visual target sign-off + Battle HUD asset sign-off.
- **Brendan Cheatham** (Assoc. AD, cross-pod): Out 5/18 (Victoria Day). Otherwise full sprint.
- **Pedro Sarraf** (Lead Tech Art): Empire Optimization Review collab with Marcos T.
- **Lawrence Steele** (Audio): Cross-pod sound design work.

### Critical Cross-Pod Risk: Empire Henrique Vacation (NEW for S29)
- **Henrique Lima out 5/20-6/6** (vacation). Loses last 5 days of S29 + most of S30 + 2-3 days of S31.
- **Empire is sole-engineer** — no automatic backup. WME #2b eng work pauses 5/20 onwards unless backup arranged.
- **Decision needed at Preview**: 
  - (a) Accept slip — Empire CP2 close-out partial; CP3 absorbs WME #2b + #2c.
  - (b) Borrow eng from Metagame (Dan Dupuis at low planning capacity?) or SD (someone with Empire context — Marcos Loures or Gabriel Arruda recently transitioned out).
  - (c) Scope-cut WME #2b into a smaller deliverable that Henrique can land in week 1.
- **Diana load pressure**: Diana absorbs UX for #2b, leads design, supports Territory Map feedback. If Henrique vacation also pulls Diana into eng coordination/spec defense, her load is unsustainable.

### Critical Cross-Pod Risk: Yura Maternity Leave (CONTINUING)
- Empire's only UX gone full sprint S29 (and through ~6/20).
- Diana absorbing — see above.

### CP2 Close-Out — All Pods Hit 5/25
- **All 5 pods have CP2 close-out work landing 5/25**. CP3 starts 5/26 (technically the last sprint day).
- Holiday pile-up around CP2 close: **5/25 is Memorial Day** (US) — significant US team OOO on the formal CP2 close date.
- Recommend CP2 retro / CP3 kickoff **scheduled for week of 5/26-5/29** (next sprint Tuesday or Wednesday).

### Holiday Coverage
- **Mon 5/18 (Victoria Day, Canada)** — Derek, Garrett, Hafiz, Vishaal, Brendan, Felipe out. Coverage for Derek's eng lead duties critical.
- **Mon 5/25 (Memorial Day, USA)** — large US contingent out on CP2 close date. Plan close-out reviews/sign-offs for 5/22 (Fri) or 5/26 (Tue).

### Producer Coverage
- **Tim Williams** — full sprint available (no PTO this window). Both Metagame and SD covered.
- **Brann Livesay** — out 5/25 only (Memorial Day). Otherwise full sprint.
- **Thorben Novais** — full sprint available.

---

## Checkpoint Coverage — M&M Checkpoint 2 (4/28 – 5/25, **CLOSING SPRINT**)

S29 is the **last full sprint of CP2**. This panel measures whether each CP2 commitment will land by 5/25 with the work planned.

| Pod | Checkpoint Goal | S29 Active Work | Status |
|-----|-----------------|------------------|--------|
| Empire | WME eng implementation kicked off (Multiple Nodes per Territory → Main Menu/Game Mode Navigation) | Henrique week 1 only (#2a wrap + #2b kickoff bounded) — vacation 5/20+ | ⚠️ **Light** (Henrique vacation cuts S29 capacity in half; #2b minimal progress) |
| Empire | Territory Map vertical slice validation | Guilherme L visual target push + Thiago S 3D + Marcos T Optimization Review wrap | ✅ On Track |
| Empire | Map Content variety expanded for WME testing | Jacob T7 + Elise T8 + Map Creation flow | ✅ On Track |
| Metagame | UI Foundation supports cross-pod screens | Sprint 4 of 6 in flight (Hero Screen continues, Gear next likely) | ⚠️ Light (still in build-out; no proof of cross-pod adoption yet) |
| Metagame | Building Upgrades shipped; Empire Progression Tree underway | EPT eng kickoff (Tiago) + Building Upgrades wrap if needed | ✅ On Track (assuming Building Upgrades closes S28) |
| Metagame | FTUE Friction reduction has visible in-game changes | Leonard design implementation push | ⚠️ Light (no eng anchor — needs designer-facing implementation in the game) |
| Battle | Battle HUD Implementation through ≥50% of impl scope | Sprint 2 of 4 in flight (Danny + Jota) | ✅ On Track (sequenced as planned) |
| Battle | Unit content cadence steady | Trench Knight wrap + Merrin continuation + new concepts | ✅ On Track |
| Battle | Pathfinding & AI Improvements eng kicked off | Lincoln design spec maturation only — no eng start (Jota fully consumed) | ❌ **No Coverage** — slips to CP3 |
| Battle | Obstacles design proven viable for ship | Dylan design validation wrap; eng start unlikely | ⚠️ Light (design wrap only; eng kickoff slips) |
| Social Dynamics | In-client multiplayer demonstrably playable in dev UI (MM2 P3) | MM2 Sprint B Battles + Troop Training (Marcos L + Gabriel + Randy) + dev UI iteration | ✅ On Track (assumes MM2 Sprint A closes S28) |
| Dozer | Build Pipeline Review — improvements landing | Sprint 2 of 2 (Bruno F + Thorben) | ✅ On Track |
| Dozer | Compliance (OneTrust, Age Gate) | Sprint 2 of 2 (Derek + Bruno F) | ⚠️ Light (capacity-constrained; likely lands but at risk) |
| Dozer | UI Framework V2 Full feature-complete | Sprint 2 of 2 (Derek + cross-pod) | ⚠️ Light (capacity-constrained; Derek over-loaded) |

**Summary**: **6 of 14 CP2 close-out goals are ✅ On Track. 7 are ⚠️ Light. 1 is ❌ No Coverage** (Battle Pathfinding eng kickoff). With this being the final CP2 sprint, "Light" status means the goal will likely partially land but not fully complete by 5/25.

**At-Risk Goals (no recovery sprint left in CP2)**:
- ❌ **Battle: Pathfinding & AI Improvements eng kickoff** — Jota fully consumed by HUD + Actor System Phase 3. Officially defer to CP3.
- ⚠️ **Empire: WME eng implementation** — Henrique vacation makes #2b a stretch. Most likely outcome: #2a fully wrapped, #2b minimal week-1 progress, full kickoff slips to CP3.
- ⚠️ **Battle: Obstacles design viable for ship** — design wrap only; ship status depends on eng kickoff (which slips to CP3).
- ⚠️ **Dozer: All 3 CP2 features** — capacity-constrained close-out; at least one likely lands feature-incomplete.
- ⚠️ **Metagame: UI Foundation cross-pod adoption** — still in Sprint 4 of 6 build-out; CP2 goal of "supports cross-pod screens" needs proof point that hasn't materialized.
- ⚠️ **Metagame: FTUE Friction visible in-game changes** — no clear eng anchor; design implementation may not produce visible in-game changes by 5/25.

**Top recommendation**: Schedule a CP2 close-out review for **week of 5/26** to formally accept slip on Battle Pathfinding/Obstacles + Empire WME #2b, and to confirm which Dozer features land vs. carry. Use that review to re-baseline CP3.

---

## Capacity Summary

**Total Working Days**: 10 (Tue 5/12 – Mon 5/25). Holiday impact varies by region.

| Person | Pod | Avail Days | PTO/Notes |
|--------|-----|-----------|-----------|
| Tim Williams | Metagame / SD | 9 | Memorial Day -1 |
| Brann Livesay | Empire | 9 | Memorial Day -1 |
| Thorben Novais | Battle / Dozer | 10 | BR — no holiday |
| Yura Rusin | Empire (UX) | **0** | Maternity leave full sprint |
| Diana Vasilescu | Empire | 9 | Memorial Day -1 |
| Jacob Siegel | Empire | 9 | Memorial Day -1 |
| Elise Cole | Empire | 9 | Memorial Day -1 |
| Henrique De Lima | Empire (Eng) | **~4-5** | **Vacation 5/20-6/6**; partial appt 5/13 |
| Laura Santana | Empire (QA) | 10 | BR — no holiday |
| Marcos Teles | Empire (Tech Art) | 10 | BR — no holiday |
| Guilherme Lascasas | Empire (2D) | 10 | BR — no holiday |
| Thiago Saraiva | Empire (3D) | 10 | BR — no holiday |
| Leonard Perez | Metagame | 9 | Memorial Day -1 |
| Christopher Fidalgo | Metagame | ~6 | Denver 5/19-5/22 (verify PTO) + Memorial Day |
| Kevin Ligon | Metagame (UX) | 9 | Memorial Day -1 |
| Dan Dupuis | Metagame (Eng Lead) | 9 | Victoria Day -1 (Canada) |
| Guilherme Quizzini | Metagame | 10 | BR — no holiday |
| Tiago Costa | Metagame | 10 | BR — no holiday |
| Miguel Duran | Metagame (UI Art) | 9 | Memorial Day -1 |
| Hugo Hideo | Metagame (QA) | 10 | BR — no holiday |
| Lincoln Li | Battle | 9 | Memorial Day -1 + partial appts |
| Nathan Hajek | Battle | 9 | Memorial Day -1 |
| Dylan Jeffery | Battle | 9 | Memorial Day -1 |
| Vishaal Gupta | Battle | 8 | Victoria Day -1 (Canada) + partial appts |
| Jota Oliveira | Battle (Eng) | 10 | BR — no holiday |
| Julio Scarabelli | Battle (QA) | 10 | BR — no holiday |
| Danny Oliveira | Battle (Art) | 10 | BR — no holiday |
| Alessandro Oliveira | Battle (Art) | 10 | BR — no holiday |
| Vinod Rams | Battle (Art) | 10 | BR — no holiday |
| Ben Clair | Battle (Art) | 9 | Memorial Day -1 (US per capacity.md) |
| Felipe Chaves | Battle (Art) | 9 | Victoria Day -1 (Canada) |
| Tony Bonilla | Battle (Art) | 9 | Memorial Day -1 (US) |
| Vini Muniz | Battle (Art) | 10 | BR — no holiday |
| Paul Flores | Social Dynamics | 9 | Memorial Day -1 |
| Marcos Loures | Social Dynamics | 10 | BR — no holiday |
| Gabriel Arruda | Social Dynamics | 10 | BR — no holiday |
| Randy Pasion | Social Dynamics | 9 | Memorial Day -1 |
| Garrett Eidsvig | Social Dynamics | 9 | Victoria Day -1 (Canada) |
| Bruno Bacelar | Social Dynamics | **6** | Vacation 5/12-5/15 |
| Derek Gallant | Dozer | 9 | Victoria Day -1 (Canada) |
| Bruno Freitas | Dozer | 10 | BR — no holiday |
| Kevin Griffith | Cross-pod (AD) | 9 | Memorial Day -1 |
| Brendan Cheatham | Cross-pod (Assoc. AD) | 9 | Victoria Day -1 (Canada) |
| Pedro Sarraf | Cross-pod | 10 | BR — no holiday |
| Lawrence Steele | Cross-pod (Audio) | 10 | No holiday flagged |
| Hafiz Kassam | QA Lead | 9 | Victoria Day -1 (Canada) |

---

## Preview Summary

### Top Risks

1. **🔴 Empire Henrique vacation (5/20-6/6) collides with CP2 close**: Sole client engineer out for back half of S29 + most of S30. WME #2b eng kickoff has only week-1 to make meaningful progress. **Decision needed at Preview**: scope-cut #2b, find backup engineer (Dan Dupuis? cross-pod?), or accept CP2 #1 slip to CP3.
2. **🔴 Battle Pathfinding & AI Improvements eng kickoff has no S29 coverage**: CP2 commitment will not land by 5/25. Officially defer to CP3.
3. **🔴 Dozer CP2 over-load**: 3 features close-out + EKS wrap + SD eng lead duties (+ potential Empire backup) for 2 engineers. At least one CP2 commitment likely slips.
4. **🟡 Diana Vasilescu single-person bottleneck**: Design lead + UX absorption (WME #2b) + Territory Map feedback + Region 2 narrative. Highest pod-level individual load.
5. **🟡 Bruno Bacelar concentrated week 2 only**: SD Networking has no recovery time if blocked.
6. **🟡 Battle Obstacles design wrap only — no eng start**: Ship status undetermined by CP2 close.
7. **🟡 Metagame Pipeline B handoff dependency**: EPT eng kickoff blocked if Building Upgrades doesn't close in S28.
8. **🟡 Memorial Day on CP2 close date (5/25)**: Large US contingent OOO on the day CP2 formally closes. Schedule close-out reviews 5/22 or 5/26.
9. **🟡 Victoria Day (5/18) hits Derek + Garrett**: Day 1 of week 2 — backup ownership for Derek's eng lead duties needed.
10. **🟡 Miguel Duran cross-pod overload**: UI Foundation + Battle HUD + Building Upgrades + EPT + icons. Bottleneck risk for Battle HUD or EPT.
11. **🟡 Chris Fidalgo Denver trip 5/19-5/22**: PTO or working remote? Affects Metagame design + bug ownership.
12. **🟡 S29 ClickUp list empty** — needs population at Kickoff.
13. **🟡 S28 ClickUp list under-populated** (only 5 tasks visible at time of Preview): S28 carry-over verification will be incomplete until S28 tasks are scaffolded.

### Open Questions (resolve before Kickoff)

1. [ ] **Henrique vacation backup decision**: Scope-cut WME #2b, find backup eng (Dan? cross-pod borrow?), or accept slip?
2. [ ] **Battle Pathfinding/Obstacles eng — formally defer to CP3**?
3. [ ] **Dozer CP2 prioritization** — which of 3 features (Build Pipeline, Compliance, UI Framework V2 Full) is "hold the line" on 5/25 if one has to slip?
4. [ ] **Building Upgrades S28 close confirmation** — required for Metagame EPT eng kickoff in S29.
5. [ ] **MM2 Sprint A S28 close confirmation** — required for SD MM2 Sprint B work in S29.
6. [ ] **Chris Fidalgo Denver trip status** — PTO or working remote?
7. [ ] **WME #2b scope bounding** — what slice can Henrique land in 4-5 days?
8. [ ] **Combat Research Tree spec readiness for S30** — pre-bake during S29 to unblock Tiago for next Pipeline B feature?
9. [ ] **EPT spec + UX readiness check** — Leonard + Kevin Ligon ready to hand to Tiago at S29 start?
10. [ ] **CP2 close-out review timing** — schedule 5/22 (Fri) or 5/26 (Tue) to work around Memorial Day?
11. [ ] **In-client multiplayer "playable" bar for 5/25** — explicit playtest checklist needed for SD CP2 #1 verification.
12. [ ] **Age Gate Unified SDK status** — Bruno F unblocked from S28?
13. [ ] **UI Foundation Sprint 4 sub-feature scope** — which screens?
14. [ ] **UI Foundation SHQ linkage** (carried open from S26 + S27 + S28 — still unanswered).
15. [ ] **S28 carry-over** (verify when S28 ClickUp is fully populated): Empire WME tickets, Battle HUD/Actor/Unit Content tickets, Metagame Building Upgrades tickets, SD MM2 Sprint A tickets, Dozer Compliance/UIFW V2/Build Pipeline tickets.
16. [ ] **Memorial Day Fortis policy** — confirm observance for US team.
17. [ ] **Victoria Day Fortis policy** — confirm observance for Canada team.
18. [ ] **Plan S30 Empire eng coverage** — Henrique still on vacation through 6/8 (most of S30); WME #2c originally S30. Decision needed before Kickoff or at S30 Preview.
