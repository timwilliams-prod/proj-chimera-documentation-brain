# Channel Digest

**Channels**: #proj-lotus-pod-empire, #proj-lotus-metagame
**Timeframe**: Mar 13 – Mar 24, 2026 (~2 sprint weeks)
**Generated**: 2026-03-24
**Active Milestone**: Systems Validation (ends Mar 30) — final sprint (Xenial Xeruses 25)

---

## Executive Summary

- **Sprint is in crunch mode closing out Systems Validation.** 5 work days remain. Both pods are pushing hard on FTUE polish, gear system tuning, narrative content, and tutorial infrastructure. The sprint has ballooned from 14 tickets at start to 38 (Empire) / 29 (Metagame) — scope grew significantly mid-sprint.
- **Critical hardlock discovered today (CHI-36254)** — Story Fragment collection failure crashes the game. Laura flagged it as top priority. Marcos Loures picked it up and it's already in QA verify. A PTC playtest also revealed Android-specific issues affecting a "significant portion" of players getting stuck after first battle — Hafiz and Dan are investigating but no ticket exists yet.
- **Major engineering shipped this sprint**: Gabriel landed Conditionals for tile states (replacing Trackables), Guilherme shipped Gear Sell/Dismantle, Marcos Loures built Story Fragments in Map V2, Henrique merged tile unlock ordering changes and is deep in Tutorial Architecture. Kevin Ligon shipped Gwen portrait fix and Hero Stats popup went in.
- **Key design decisions being made in threads** that need broader capture: rarity color scheme finalized, gear sell values deliberately undertuned, empire level XP thresholds adjusted, troop unlocking via resource generator shipped — several of these lack tickets or documentation.
- **QA process concern raised by Laura (3/19)**: "I'm still noticing major changes being made without a request for QA to review before merging." She's asked for this before. Some new tutorial steps shipped without QA review and caused a progression blocker (3/13).

---

## ClickUp Action Items

### Tasks to Update

| Task | Current Status | Suggested Update | Evidence |
|------|---------------|-----------------|----------|
| [CHI-36002](https://app.clickup.com/t/86ag3k4fd): Barrier banner not updating | complete | **Verify — may need reopening.** Laura reopened this on 3/17 AND 3/19, saying it's still occurring in dev and stage builds. ClickUp shows complete as of 3/21. Laura's 3/24 bug list doesn't mention it, so it may actually be fixed now. | [Slack 3/19](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773938442639039), [Slack 3/17](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773767246902639) |
| [CHI-36134](https://app.clickup.com/t/86ag88zc6): Move Elemental Troop Type unlocking into conditionals | to do | **Likely in progress or partially done.** Marcos Loures announced (3/24) he merged support for unlocking troops through resource generators using a new UnitUpgradeGameItem config. He also said award screen is still missing and he's working on it. | [Slack 3/24](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773942771950429) |
| [CHI-36193](https://app.clickup.com/t/86ag98w48): FTUE tap-too-fast locks player | to do | **Risk: may not get worked this sprint.** Assigned to Henrique, who is fully consumed by Tutorial Architecture (2 URGENT tasks). This bug competes for his time. | [Slack 3/19](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773938442639039) |

### Tasks to Create

| Suggested Task | Why | Source |
|---------------|-----|--------|
| **PTC Android players stuck after first battle** | Hafiz reported a significant portion of Android PTC testers got stuck on the map after completing the first battle. Issue didn't occur during internal tests. Dan is investigating. No ticket found. | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774356477773719) (16 replies) |
| **Narrative dialogue box spacing fix** | Leonard flagged as "high priority" — affects both Empire and Meta teams. "It makes all our dialogue look sloppy and it's been a big push from empire and meta teams this sprint." Tagged Kevin Ligon. No ticket found. | [Slack 3/23 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774304649390579) |
| **Rarity color scheme implementation** | Decision made in sync (3/19): Common/Grey, Uncommon/Green, Rare/Blue, Epic/Purple, Legendary/Yellow, Mythic/Red. Christopher explicitly asked Tim to create tickets for Kevin/UX coloring update + gear level progression update. No tickets found. | [Slack 3/19 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1773946679231259) |
| **Troop unlock award screen** | Marcos Loures: "there's no award screen for this at the moment. I'll be working on that today." New UnitUpgradeGameItem system shipped without a reward screen. No ticket for the screen work. | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774366611698319) |
| **Conquest Guide eng improvement (single-tap claim)** | Christopher's Conquest Guide MVP requires double-tap (spotlight dismiss + claim). He said it's "shippable as is" but needs eng support to tighten. May warrant a backlog ticket. | [Slack 3/24 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1774365817323099) (26 replies) |

### Tasks to Verify

| Task | Concern | Source |
|------|---------|--------|
| [CHI-35824](https://app.clickup.com/t/86afxfhc2): Production/min not displayed | Laura reopened this (3/24). ClickUp shows "to do" assigned to Marcos Loures. Previously closed, back again. | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774370415546219) |
| [CHI-36258](https://app.clickup.com/t/86agdgybb): Story panels don't stretch full screen | Created today, "to do", **unassigned**. Needs an owner. | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774370415546219) |
| [CHI-36255](https://app.clickup.com/t/86agddm42): Capital city opens before tutorial finishes | Created today, "to do", assigned to Henrique. **Risk**: adds to Henrique's already-heavy URGENT load. | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774370415546219) |

---

## Documentation Misalignments

| What Was Said | What Docs Say | Source File | Slack Message |
|--------------|--------------|------------|---------------|
| Marcos Loures (3/16): Story Fragments feature is "extremely close to Story Shards, to the point that I'm not sure what the differences are." Reading the Notion design doc "didn't make that much clearer." | Brain has `planning/features/story_shards.md` but **no `story_fragments.md` exists**. The Story Shards doc is mostly TBD placeholders. Two related features being implemented without clear brain documentation distinguishing them. | `planning/features/story_shards.md` | [Slack 3/16 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773688643559459) |
| Christopher (3/19): Shortened gear tutorial shared in thread for review. Gear tutorial was too long — SHQ6 (not overwhelming) risk. | `planning/features/story_shards.md` has SHQ6 listed but gear tutorial isn't tracked in any feature doc. No `gear_system.md` or `gear_tutorial.md` in the brain. Gear tuning work (max level, sell values, dungeon rewards) is scattered across sprint tickets with no consolidated design spec. | No feature doc exists | [Slack 3/19 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1773937607296939) |
| Marcos Loures (3/24): Documented how to use new UnitUpgradeGameItem for troop unlocking via resource generators. Said "I'll see if I can find somewhere in the documentation to write this down." | No brain documentation for this system. This is a new technical capability that changes how troop unlocking works (previously via barracks upgrade tree). Marcos's Slack message IS currently the only documentation. | No doc exists | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774366611698319) |
| Diana (3/24): Tuning alert — ran out of lumber before completing iron mine because she used it to upgrade archers. Progression halted. | `planning/product_targets.md` SV goal is "strong emotional attachment" and smooth FTUE. An economy deadlock where players can't progress contradicts this. May indicate economy tuning isn't documented or cross-validated. | `planning/product_targets.md` | [Slack 3/24 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1774349899850429) |

### Recommendations

1. **Create `planning/features/story_fragments.md`** (or merge the concept into `story_shards.md` with clear differentiation). The engineering team is implementing something they can't clearly distinguish from an existing feature.
2. **Consider a `planning/features/gear_system.md`** consolidating gear progression, sell values, dismantle, tutorials, and the max-level decision. Currently this is spread across 6+ sprint tickets and Slack threads.
3. **Marcos's UnitUpgradeGameItem documentation** needs a home — either a technical doc in the brain or the Notion design doc for troop progression.

---

## Decisions to Capture

### Uncaptured Decisions (Action Required)

| Decision | Made By | Status | Where to Capture | Slack Source |
|----------|---------|--------|-----------------|-------------|
| **Conditionals replace Trackables for tile states.** Use Conditionals as first go-to implementation. Trackables only for edge cases. All existing tiles migrated. Slow migration of remaining features planned. | Gabriel Arruda | Final — code merged | Needs a tech doc or note in `planning/TechnicalDebt.md` (Trackables migration is tech debt) | [Slack 3/23 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774298882202459) |
| **Gear sell values deliberately undertuned for SV release.** Reason: economy doesn't have full feature set/sinks. Backlog task planned for beta retuning. Dismantle values are internal to gear and fine. | Christopher Fidalgo | Final — PR submitted | Should be noted in gear feature doc (doesn't exist yet) and/or a backlog ticket for beta retuning | [Slack 3/20 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1774019327363679) |
| **Rarity color scheme: Common/Grey, Uncommon/Green, Rare/Blue, Epic/Purple, Legendary/Yellow, Mythic/Red.** Kevin Ligon/UX to update rarity coloring. Christopher to update gear level progression. | Christopher Fidalgo (from sync) | Final — needs tickets | Gear feature doc + UX spec. Christopher explicitly asked Tim to make tickets. | [Slack 3/19 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1773946679231259) |
| **Empire level XP thresholds adjusted.** Lowered EL2 XP threshold + reduced CG XP rewards. Player should now reach EL2 after first T2 battle (was jumping to EL3 too early). Slows troop progression rate. | Leonard Perez | Final — merged | Economy tuning doc or tuning changelog | [Slack 3/16 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1773679068767359) |
| **Troop unlocking moved to resource generator (temples).** New UnitUpgradeGameItem config. Any troop upgrade can be granted as a conquest reward. Barracks no longer has "unlock elemental troop" node. | Marcos Loures | Final — code merged | Needs documentation (Marcos acknowledged this). Changes barracks design. | [Slack 3/24 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774366611698319) |

### In-Progress Decisions (Watch)

| Decision | Made By | Status | Where to Capture | Slack Source |
|----------|---------|--------|-----------------|-------------|
| **Conquest Guide MVP scope.** Christopher built a simple version, triggers after overlay clears. Double-tap UX issue (spotlight dismiss + claim are separate taps). "Shippable as is" but eng could tighten. | Christopher Fidalgo | In Progress — PR in review (26-reply thread) | Sprint task CHI-36251 | [Slack 3/24 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1774365817323099) |
| **Map Pipeline workflow improvements.** Holly reviewed Miro board and gave detailed feedback: needs horizontal timeline alignment, software icons, day counts, time-sink breakdowns, and identification of high-friction steps for tooling. | Holly Mellor | In Progress — feedback given, needs follow-up | Map content pipeline doc (separate from brain?) | [Slack 3/19 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773928199279439) |
| **Player Journey UX scenarios (D0-D14).** Diana shared World Map reveal scenarios showing gradual map unlock across day 0-14. Linked to Notion UX Exploration page. | Diana Vasilescu | In Progress — shared for review | Notion UX Exploration doc (external to brain) | [Slack 3/23 — Empire](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774285617618739) |
| **"Avalon" Gear Set design.** Leonard posted gear set details (19-reply thread, active through 3/24). | Leonard Perez | In Progress | Gear feature doc when created | [Slack 3/19 — Metagame](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1773947914049759) |

---

## Hot Threads

Threads with high engagement that may warrant attention:

| Thread | Channel | Replies | Topic | Link |
|--------|---------|---------|-------|------|
| Elise: Territory 2 conquered conditional | Empire | 81 | Elise trying to queue narrative after T2 conquest — can't use conquest guide mission or FeatureUnlocker as conditionals. Long technical thread with Henrique. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773430181948179) |
| Christopher: Gear level 17→16 misalignment | Metagame | 38 | Code/data mismatch when adjusting gear max level. Extended debugging session with Guilherme. | [Link](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1774279517392779) |
| Marcos Teles: Eda piece CAT VFX | Empire | 38 | VFX concept for Eda collectible pieces on the map. Diana reviewing. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773754589642069) |
| Christopher: Conquest Guide MVP | Metagame | 26 | Tutorial implementation, double-tap issue, eng support needed for tightening. | [Link](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1774365817323099) |
| Brann: Sprint kickoff blockers | Empire | 21 | Sprint planning — Elise's T2 task needed eng conditional. Cross-pod capacity question. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773763139627889) |
| Diana: T2 tile position swap | Empire | 21 | Last-minute change request for build — moved TC position to avoid friction. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773675575836619) |
| Leonard: "Avalon" Gear Set | Metagame | 19 | End-of-experience gear set design discussion. Active through 3/24. | [Link](https://fortisgames.slack.com/archives/C0A2DBGPM8Q/p1773947914049759) |
| Brann: Build review fixes | Empire | 19 | PTC build day — crash on Conquest Guide, bot factory rename, multiple bugs to fix same day. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773766736563459) |
| Laura: Army Selection tutorial blocker | Empire | 19 | New tutorial step not sent to QA caused progression blocker. Process issue. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773431353141859) |
| Marcos Teles: Smoogy area polyshapes | Empire | 18 | Technical approach for fog-of-war style visual on map. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773945566544779) |
| Hafiz: PTC Android stuck issue | Empire | 16 | Significant Android playtest failure. Investigation ongoing. | [Link](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774356477773719) |

---

## Process Signals

| Signal | Details | Source |
|--------|---------|--------|
| **QA bypass recurring** | Laura (3/19): "I'm still noticing major changes being made without a request for QA to review before merging." Previously, a new tutorial step shipped without QA and caused a progression blocker (3/13). | [Slack 3/19](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1773938442639039) |
| **Sprint scope creep** | Empire tickets went from 14 (sprint start, 3/17) to 42 (3/20) to 38 (3/24). Metagame went from 13 to 29. Nearly tripled. | Daily async bot counts |
| **Diana overloaded on meetings** | Diana (3/20): "Im double booked and I have ~5h of back to back meetings (short ones)" — recommended pushing Map Pipeline sync to give Jacob/Elise focus time. | [Slack 3/20](https://fortisgames.slack.com/archives/C08KKVAAQ2Y/p1774010082865469) |
| **Henrique is a bottleneck** | Tutorial Architecture (2 URGENT tasks) + FTUE tap-too-fast bug + Capital city tutorial bug — all assigned to him. He's delivering (tile unlock ordering, tutorial sharing) but load is heavy. | Multiple messages |
