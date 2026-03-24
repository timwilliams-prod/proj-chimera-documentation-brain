# Sprint Summary: Xenial Xeruses 25

**Sprint**: Xenial Xeruses 25 (3/17 - 3/31)
**Milestone**: Systems Validation (ends Mar 30, 2026) — final sprint
**Next Milestone**: M&Ms (ends Jun 23, 2026)
**Player Journey Goal**: *Day 0-1: Expand FTUE with map exploration that facilitates strong emotional attachment to characters & "completing" a hero to a soft-cap (e.g. epic max rank).*
**Generated**: 2026-03-24

---

## Sprint Snapshot

| Metric | Count |
|--------|-------|
| Total Tasks | 25 |
| Complete | 8 |
| In QA Verify | 4 |
| In Progress | 1 |
| To Do | 12 |
| Completion Rate | 32% |

### Team Load

| Person | Open Tasks | Complete | Notes |
|--------|-----------|----------|-------|
| Christopher Fidalgo | 12 | 1 | **Heavy load — 71% of open tasks.** Mostly design/tuning. |
| Henrique Lima | 2 | 0 | Both URGENT eng tasks (tutorial architecture) |
| Diana Vasilescu | 1 | 0 | Governors Design |
| Miguel Duran | 1 | 0 | Art assets |
| Elise Cole | 1 | 1 | Design |
| Gabriel Arruda | 0 | 1 | |
| Dan Dupuis | 0 | 2 | |
| Jacob Siegel | 0 | 2 | |
| Others | 0 | 3 | Thorben, Tim, Garrett |

---

## Alignment with Systems Validation

### Must-Have / Player Journey Coverage

The SV milestone doesn't have explicit must-have features in `product_targets.md` (it's a prior/completed milestone), but the player journey goal and active SHQs define what matters.

| Goal Area | Sprint Tasks | Status |
|-----------|-------------|--------|
| **FTUE expansion** | Tutorial Architecture (2 tasks), Tutorial: Conquest Guide, Shorten Gear Tutorial, Dungeon tutorials (2 tasks), Barracks Tutorial (done) | Covered — 7 tasks |
| **Hero to soft-cap** | Manual Hero Progression (done), Align gear progression max 16, Create end-of-experience gear set, Enter gear sell values | Covered — 4 tasks |
| **Map exploration** | Map prep (done), Dragon fix (done), Empire tuning spec (done) | Covered — 3 tasks (all complete) |
| **Emotional attachment to characters** | No direct tasks | Gap — but may be addressed elsewhere |

### M&Ms Prep (Next Milestone)

| Must-Have Feature | Sprint Tasks | Status |
|-------------------|-------------|--------|
| Governors | Governors Design (CHI-36224, Diana) | Covered — design phase |
| Territory Map VS | No tasks | Expected — starts M&Ms Sprint 4 |
| Battle HUD Beta Overhaul | No tasks | Expected — starts M&Ms |

### Active SHQ Coverage

| SHQ | Sprint Tasks | Coverage |
|-----|-------------|----------|
| SHQ2 (empire strategy <-> tile conquest) | Tutorial: Conquest Guide | Partial |
| SHQ6 (explore activity types, not overwhelmed) | Shorten Gear Tutorial, Tutorial architecture | Partial |
| SHQ7 (short/mid/long-term goals) | Governors Design (M&Ms prep) | Forward prep |
| SHQ23-28 (battle depth, content pipeline) | No direct tasks | Gap — but these may be validated via playtest data, not sprint tasks |
| SHQ10-13 (hero collectability) | Manual Hero Progression (complete) | Partial |

---

## Task Categorization

### Directly Supporting Milestone Goals (16 tasks)

| Task | ID | Status | Priority | Assignee | Supports |
|------|-----|--------|----------|----------|----------|
| Tutorial Architecture -> Orchestration/State Tracking | [CHI-36213](https://app.clickup.com/t/86aga1m3a) | in progress | urgent | Henrique Lima | SV FTUE goal — gates all tutorial content |
| Tutorial Architecture -> Triggering | [CHI-36212](https://app.clickup.com/t/86aga1j5p) | to do | urgent | Henrique Lima | SV FTUE goal — gates all tutorial content |
| Governors Design | [CHI-36224](https://app.clickup.com/t/86agavtva) | to do | - | Diana Vasilescu | M&Ms must-have #1, SHQ7 |
| Tutorial: Conquest Guide | [CHI-36251](https://app.clickup.com/t/86agcpugc) | qa verify | high | Christopher Fidalgo | SV FTUE + SHQ2 (map exploration) |
| Align gear system progression for max 16 | [CHI-36226](https://app.clickup.com/t/86agaz8f0) | qa verify | high | Christopher Fidalgo | SV "hero to soft-cap" goal |
| Enter T5 & T6 rewards | [CHI-36250](https://app.clickup.com/t/86agcpt61) | to do | high | Christopher Fidalgo | SV content completeness for playtest |
| Create end of experience gear set | [CHI-36239](https://app.clickup.com/t/86agb8p16) | to do | high | Christopher Fidalgo | SV progression ceiling definition |
| Enter gear sell values | [CHI-36217](https://app.clickup.com/t/86aga42ch) | qa verify | high | Christopher Fidalgo | SV economy coherence |
| Shorten Gear Tutorial | [CHI-36218](https://app.clickup.com/t/86aga42v8) | to do | high | Christopher Fidalgo | SV FTUE polish, SHQ6 (not overwhelming) |
| Remove story tokens from T2, T3 fights | [CHI-36228](https://app.clickup.com/t/86agb20ur) | qa verify | high | Christopher Fidalgo | SV reward clarity |
| Update UI Art assets for new elemental swaps | [CHI-36195](https://app.clickup.com/t/86ag99p2y) | to do | high | Miguel Duran | SV visual quality bar (BHQ-B2) |
| Manual Hero Progression | [CHI-35630](https://app.clickup.com/t/86afk7wz2) | complete | - | Thorben / Tim | SV "hero to soft-cap" — cross-pod |
| [Map] Dragon model dying after every battle | [CHI-35629](https://app.clickup.com/t/86afk7wy3) | complete | normal | Jacob / Garrett | SV map exploration polish |
| Map-making preparation for SysV | [CHI-35626](https://app.clickup.com/t/86afk7wvy) | complete | high | Dan Dupuis | SV map content readiness |
| Spec out Tuning Data Migration for Empire | [CHI-35627](https://app.clickup.com/t/86afk7wwe) | complete | high | Dan Dupuis | SV Empire data readiness |
| Barracks Tutorial | [CHI-35625](https://app.clickup.com/t/86afk7wvj) | complete | low | Jacob Siegel | SV FTUE expansion |

### Supportive / Secondary (5 tasks)

| Task | ID | Status | Priority | Assignee | Notes |
|------|-----|--------|----------|----------|-------|
| Tutorial: Dungeon Army Preset | [CHI-35840](https://app.clickup.com/t/86afyadut) | to do | normal | Christopher Fidalgo | Tutorial content, but dungeons are secondary to conquest FTUE |
| Tutorial: Dungeon System Introduction | [CHI-35839](https://app.clickup.com/t/86afyadnp) | to do | low | Christopher Fidalgo | Same — low priority confirms secondary |
| Review First Clear rewards for Gear Dungeon | [CHI-36225](https://app.clickup.com/t/86agaz7b7) | to do | low | Christopher Fidalgo | Tuning polish, not blocking validation |
| Max level tuning | [CHI-36252](https://app.clickup.com/t/86agcwuvw) | to do | low | Christopher Fidalgo | Edge case tuning |
| Design Debug for Player Save States | [CHI-35628](https://app.clickup.com/t/86afk7wx9) | complete | normal | Elise Cole | Developer tooling — useful but not player-facing |

### Not Clearly Connected (4 tasks)

| Task | ID | Status | Priority | Assignee | Notes |
|------|-----|--------|----------|----------|-------|
| Fix food basket Treasure Chests | [CHI-35827](https://app.clickup.com/t/86afxgkj2) | to do | normal | Christopher Fidalgo | Bug fix — not tied to any SHQ or milestone feature |
| Purge old tuning configs | [CHI-35013](https://app.clickup.com/t/869bvcx7d) | to do | normal | Elise Cole | Tech hygiene — good practice but doesn't advance validation |
| Review existing treasure chest names | [CHI-35535](https://app.clickup.com/t/86afh3t51) | complete | low | Christopher Fidalgo | Naming consistency — already done |
| Fix Granary Tooltip on RC | [CHI-35631](https://app.clickup.com/t/86afk7wzr) | complete | urgent | Gabriel / Jacob / Dan | Bug fix on RC — already done, was likely blocking release |

---

## Observations

### Critical Path

**Tutorial Architecture (Henrique Lima)** is the #1 critical path item. Both tasks are marked URGENT. These two engineering tasks provide the framework that Christopher's ~6 tutorial content tasks depend on. If Orchestration/State Tracking doesn't complete, the tutorial content tasks can't be properly validated.

### Risks

- **Christopher Fidalgo has 12 of 17 open tasks (71%)**. He's carrying the design/tuning load for the entire sprint. Any absence or blocker cascades across most of the sprint.
- **12 of 17 open tasks are still "to do"** with 1 week left in the sprint (assuming today is 3/24). Several high-priority items haven't started.
- **Tutorial Architecture -> Triggering is still "to do"** despite being URGENT. If Henrique is blocked on Orchestration first, Triggering may not start this sprint.

### Positive Signals

- **4 tasks already in QA Verify** — gear system work is nearly complete
- **Governors Design** is smart forward planning — Diana starting M&Ms must-have #1 while SV closes out
- **8 tasks already complete** including critical map prep and hero progression work
- **Strong FTUE focus** — 7 tasks directly support tutorial/onboarding, which is exactly what SV needs

### Recommendations

1. **Protect Henrique's time** — Tutorial Architecture is the highest-leverage work in the sprint. Ensure nothing pulls him off these two tasks.
2. **Triage Christopher's backlog** — 12 tasks is a lot. If time gets tight, deprioritize: Max level tuning (low), Dungeon tutorials (low/normal), Fix food basket (normal), Review First Clear rewards (low). Focus on the high-priority gear and conquest tutorial work.
3. **Purge old tuning configs (Elise)** can safely slip to next sprint if needed — it's hygiene, not validation.
4. **Food basket Treasure Chests** fix isn't connected to any SHQ — if Christopher is overloaded, this should be first to defer.

---

## Alignment Score

**64%** of open tasks (11/17) directly support milestone goals
**24%** (4/17) are supportive/secondary
**12%** (2/17) are not clearly connected

**Assessment**: Sprint is well-aligned with Systems Validation goals. Tutorial architecture is the critical path — if it slips, 6+ design tasks lose their validation foundation. Christopher's load is the main risk; triage his lower-priority items early if the sprint gets squeezed.
