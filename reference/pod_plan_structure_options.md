# Pod Plan Structure Options

Last Updated: 2026-04-07

> Exploring whether splitting monolithic pod plans into focused documents
> improves reviewability, skill maintenance, and producer workflow.

---

## Current State

Each pod plan (`planning/pods/*_Plan.md`) is a ~200-line monolith containing 5 sections:

| Section | Lines | Update Frequency | Who Writes | Who Reads |
|---------|-------|------------------|------------|-----------|
| Roadmap View (Gantt) | ~50 | Monthly | `/roadmap-update` | Everyone |
| Validation Focus | ~20 | Per milestone | Human | Validation reviewers |
| Feature Priorities | ~15 | When priorities shift | Human (design lead/producer) | Design leads, producers |
| Sprint Plans | ~45 | Every sprint | `/sprint-plan` | Producers, eng leads |
| Milestone Breakdown | ~65 | Per milestone | Human | Producers, eng leads |

### What's Working
- Single file = easy to find ("open the pod plan")
- Everything about a pod in one place

### What's Not Working
- **Review friction**: Approving a sprint plan change means opening a file with 150+ lines of stable content around it. The signal-to-noise ratio for diffs is low.
- **Mixed ownership**: Skill-maintained sections (Sprint Plans, Gantt) live in a human-authored file. Skills must carefully edit sections without touching others.
- **Update frequency mismatch**: Sprint Plans change biweekly, Milestone Breakdown changes once per milestone, Validation Focus changes rarely. Every sprint edit touches the same file as stable content.
- **Redundancy with other files**: The Gantt duplicates `generated/roadmap.md` at pod level. Validation Focus summarizes `planning/ValidationPlan.md`. Sprint Plans summarize `generated/sprint_plans/sprint_N.md`.
- **Scrolling past irrelevant sections**: A producer checking "what's in this sprint" has to scroll past milestone breakdowns and Gantt charts.

---

## Proposed Split: Pod Plan Folder

Replace each `Empire_Plan.md` with a folder of focused documents:

```
planning/pods/empire/
  features.md          — Ranked feature backlog (the core priority list)
  milestone_mms.md     — M&Ms milestone plan (sprint allocation, goals)
  validation.md        — Which BHQs/SHQs this pod contributes to
```

Sprint plans stay cross-pod in `generated/sprint_plans/sprint_N.md` (already exists).
Roadmap Gantt stays in `generated/roadmap.md` (already exists).

### What Each File Contains

#### `features.md` — The Priority List
The core artifact. A **ranked backlog** of all features for this pod, ordered by priority. Milestone is metadata, not the organizing principle.

See [Priority List Formats](#priority-list-formats) below for format options. The recommended format is **Numbered List with Inline Metadata** (Option B).

**Rules**:
- Rank is global, not per-milestone. Rank 1 is always the most important thing.
- Status updates happen here. This is the living backlog.
- Feature specs (in `planning/features/`) have the details. This file is the index.
- Sub-items (phases, sub-efforts) are indented under their parent feature.

#### `milestone_mms.md` — Milestone Plan
One file per milestone this pod is active in. Contains the sprint-by-sprint allocation and goals specific to this milestone.

```markdown
# Empire — M&Ms Milestone Plan

Ends: Jun 23, 2026 | Sprints: ~7 | Eng: Henrique De Lima (sole client eng)

## Sprint Allocation

| Sprint | Focus | Feature(s) |
|--------|-------|------------|
| S26 | Tutorial Node Migration | #1 |
| S27-S29 | World Map Experience | #2 (3 sub-efforts) |
| S30-S31 | Territory Map VS | #3 |
| S32 | Flex / risk buffer | — |

## Milestone Goals
- Territory map proves scalable (SHQ3-1)
- Empire strategy + tile conquest feel connected (SHQ3-2)
- World map surfaces session goals (SHQ4-3)

## Capacity & Constraints
- Henrique is sole client engineer — all features sequential
- Map Content runs on design/art track in parallel
```

**Why this view helps**: This is the "how do we get through this milestone" view. It's stable within a milestone (rarely changes). Producers and eng leads reference this when checking if the milestone is on track. It doesn't get cluttered with sprint-level details.

#### `validation.md` — Validation Alignment
Which BHQs/SHQs this pod contributes to, and any gaps. References `planning/ValidationPlan.md` by ID — doesn't duplicate definitions.

```markdown
# Empire — Validation Alignment

## BHQs This Pod Contributes To

| BHQ | Status | Cross-Pod? |
|-----|--------|------------|
| BHQ-E1: Intuitive map exploration | NOT YET TESTED | No |
| BHQ-E2: Return motivations | TESTING | Yes (Metagame) |
| BHQ-E3: Long-term progression | NOT YET TESTED | Yes (Metagame) |

## Active SHQ Gaps
- BHQ-E4 has no SHQs defined. Needs attention.
- SHQ3-3 answered negative — may need cross-pod input.
```

**Why this view helps**: Validation reviewers get a clean, focused view. No feature tables, no sprint details, no Gantt. Just: "what is this pod trying to prove, and where are the gaps?"

#### Sprint Plans — Stay Where They Are
Full cross-pod sprint plans already live in `generated/sprint_plans/sprint_N.md`. No per-pod sprint file needed. The pod's section within that file is the "pod sprint plan."

The lightweight Sprint Plans section currently in pod plans would be **removed**. The generated sprint plan file is the single source.

---

## Priority List Formats

The `features.md` file is the most frequently edited planning artifact. The format must be easy to scan, easy to reorder, and handle sub-items (phases, sub-efforts) gracefully. Tables are not the only option.

### Option A: Ranked Table

```markdown
| Rank | Feature | Milestone | Est | Status | Validates |
|------|---------|-----------|-----|--------|-----------|
| 1 | Tutorial Node Migration | M&Ms | 1 spr | IN PROGRESS | — |
| 2 | World Map Experience | M&Ms | 3 spr | NOT STARTED | SHQ4-3 |
| 3 | Territory Map VS | M&Ms | 2 spr | NOT STARTED | SHQ3-1 |
```

- (+) Dense, structured, easy to scan columns
- (+) Skills can parse columns reliably
- (-) **Painful to edit by hand** — column alignment, pipe characters, reordering means renumbering a column
- (-) Sub-items don't fit — you end up with rows like `2a`, `2b`, `2c` or separate tables per phase
- (-) Small lists (3-5 items) have more markup than content

### Option B: Numbered List with Inline Metadata (Recommended)

```markdown
1. **Tutorial Node Migration** — M&Ms, 1 sprint, IN PROGRESS
   Enables designer tooling. No SHQ linkage.

2. **World Map Experience** — M&Ms, 3 sprints, NOT STARTED → SHQ4-3, SHQ4-4
   a. Multiple Nodes per Territory (Sprint 1)
   b. Main Menu UX/UI Implementation (Sprint 2)
   c. World Map Experience Iterations (Sprint 3)

3. **Territory Map VS** — M&Ms, 2 sprints, NOT STARTED → SHQ3-1, SHQ3-2
   Two map layers feel connected; seamless strategic flow.

4. **Map Content** — Ongoing, IN PROGRESS → SHQ3-1
   Design/Art track. Validates production capacity at scale.

5. **Governors** — M&C, 3 sprints, IN PROGRESS → SHQ3-7
   Long-term goal vector within Empire.
```

- (+) **Natural to read and write** — no table markup
- (+) **Sub-items are just indentation** — lettered sub-lists, bullet points, whatever fits
- (+) **Easy to reorder** — cut/paste a block, renumber
- (+) **Notes/context live inline** — no separate "Notes" column
- (+) Handles both simple features (one line) and complex features (with phases) equally well
- (-) Less structured for machine parsing (but skills can parse `**bold** — metadata` patterns)
- (-) Column alignment fans won't love it

### Option C: Priority Tiers

```markdown
## Must Ship (M&Ms)
1. **Tutorial Node Migration** — 1 sprint, IN PROGRESS
2. **World Map Experience** — 3 sprints, NOT STARTED → SHQ4-3, SHQ4-4
3. **Territory Map VS** — 2 sprints, NOT STARTED → SHQ3-1, SHQ3-2

## Should Ship (M&Ms)
4. **Map Content** — Ongoing, IN PROGRESS → SHQ3-1

## Next Milestone (M&C)
5. **Governors** — 3 sprints, IN PROGRESS → SHQ3-7
6. **WM Building Upgrades** — 1 sprint, NOT STARTED
```

- (+) Clear priority buckets — "must ship" vs "should ship" is immediately obvious
- (+) Milestone grouping still visible but secondary to priority tier
- (-) Tier boundaries are debatable ("is this a must or a should?")
- (-) Extra heading overhead — adds structure that may not be needed for small pods

### Option D: Flat Numbered List (Minimal)

```markdown
1. Tutorial Node Migration — 1 sprint, IN PROGRESS
2. World Map Experience — 3 sprints, NOT STARTED
3. Territory Map VS — 2 sprints, NOT STARTED
4. Map Content — Ongoing
5. Governors — 3 sprints, IN PROGRESS
6. WM Building Upgrades — 1 sprint
```

- (+) Maximum simplicity — one line per feature, order IS priority
- (+) Fastest to scan and edit
- (-) No metadata unless you add it inline (gets long)
- (-) No room for sub-items or context

---

### Social Dynamics: Before & After

The Social Dynamics pod plan is the clearest example of format problems. Currently it has **10 phases, each with a separate table of 3-6 items**. That's ~90 lines of table markup for what's essentially an ordered list.

#### Current (tables per phase — 87 lines in the pod plan)

```markdown
### Phase 3 -- Basic Game Logic (TBD)

| # | Feature |
|---|---------|
| 1 | Multiplayer Map Instance Creation / List / Join v1 |
| 2 | Multiplayer Map Authoring |
| 3 | Embark Flow (Dock Selection + 1-3 hero party & troop selection) |
| 4 | Tile Ownership & Tile States & Map Visualization |
| 9 (part 1) | Troop Training |
| 13 | Battles |

### Phase 4 -- Heroes on Map (TBD)

| # | Feature |
|---|---------|
| 5 | Hero Party Map Representation |
| 6 | Persistent Hero Health & Recovery |
| 7 | Hero Energy System (& pathing) |
| 9 (part 2) | Army Screen |

### Phase 5 -- Interesting Tiles (TBD)

| # | Feature |
|---|---------|
| 10 | Tile Info and Actions (view info, attack, defend, Fortify, Upgrade) |
| 11 | Tile Types (Foundations, Barracks, Shrines) |
| 8 | Cycle Generation System |
```

That's 27 lines for 3 phases. Repeat for all 10 and you get ~90 lines of table headers, pipes, and dashes.

#### After: Option B (Numbered List) — Same Content, ~40 Lines for All 10 Phases

```markdown
# Social Dynamics Features

## Multiplayer Map Build-Up (Phases 1-10)

Phases are sequential. Each phase builds on the previous. All target completion by end of M&C.

1. **P1: Infrastructure & Foundation** — ETA 3/30, IN PROGRESS
   Messaging infrastructure, game instance container pattern, testing.

2. **P2: Map Foundation** — ~1 month, IN PROGRESS
   Engineering work breakdown, map foundation support.

3. **P3: Basic Game Logic** — TBD
   a. Multiplayer Map Instance Creation / List / Join v1
   b. Multiplayer Map Authoring
   c. Embark Flow (dock selection + hero party & troop selection)
   d. Tile Ownership & Tile States & Map Visualization
   e. Troop Training (part 1)
   f. Battles

4. **P4: Heroes on Map** — TBD
   a. Hero Party Map Representation
   b. Persistent Hero Health & Recovery
   c. Hero Energy System & pathing
   d. Army Screen

5. **P5: Interesting Tiles** — TBD
   a. Tile Info and Actions (view, attack, defend, fortify, upgrade)
   b. Tile Types (Foundations, Barracks, Shrines)
   c. Cycle Generation System

6. **P6: Initial Rollout** — TBD
   a. Map Leaderboard

7. **P7: Dynamic Experience** — TBD
   a. Fog of War (hero avatar sight range)
   b. Story Shards at random locations
   c. 3 multiplayer options on entry
   d. Per-map modifiers
   e. Departure logic

8. **P8: Clarity of State** — TBD
   a. Active modifiers / passive boost display
   b. Map activity log (all players)
   c. Multiplayer income summary
   d. End level reward screen updates
   e. Metagame leaderboard (cross-season)

9. **P9: More Design Depth** — TBD
   a. Buildings start at higher upgrade levels
   b. Seasonal map changes
   c. Leaderboard payouts

10. **P10: Preparing for Rollout** — TBD
    a. Battle Server Authoritative
    b. Multiplayer Onboarding
    c. Map Instance System v2

## Standalone Features

11. **Ravager's Reef** — Post-P10, 3 sprints, NOT STARTED
12. **Battlepass** — Post-P10, 2 sprints, NOT STARTED
```

**Result**: Same information, ~45 lines instead of ~90. No table markup. Easy to scan, easy to edit. Phases are numbered, sub-items are lettered. A producer can read this in 30 seconds and understand the full sequencing.

### Recommendation: Option B

**Numbered List with Inline Metadata** is the best default for `features.md`:
- Handles both simple pods (Dozer: 2 features, no sub-items) and complex pods (Social Dynamics: 10 phases with sub-items)
- Natural to read and write — no table syntax
- Easy to reorder — just renumber
- Sub-items are indentation, not separate tables
- Metadata convention: `**Feature Name** — Milestone, estimate, STATUS → SHQ links`

Skills can parse this format reliably by looking for `**bold text** —` at the start of numbered list items.

If a pod's feature list grows beyond ~15 items, **Option C (Priority Tiers)** can layer on top: add `## Must Ship` / `## Should Ship` headings around the numbered list.

---

## Paradigm Shifts

### 1. Pod Plan = Folder, Not File
Instead of "open the Empire pod plan," it's "open the Empire folder." The folder is the plan; each file is a view.

### 2. Priority Is a Rank, Not a Position
Current: features are organized by milestone, with implicit priority from top-to-bottom ordering within each milestone section. New: features have an explicit global rank number. "Rank 1 is the most important thing this pod should be doing right now, regardless of milestone."

### 3. Sprint Details Leave the Pod Plan
Currently the pod plan has a Sprint Plans section that `/sprint-plan` maintains. This creates a skill-writing-to-human-authored-file pattern that requires careful approval. In the new structure, sprint plans are entirely generated — the pod plan folder has no sprint section.

### 4. Milestone Plans Are First-Class Documents
Currently the milestone breakdown is embedded in the pod plan and is the longest section (~65 lines). Making it its own file means it can be reviewed, approved, and versioned independently. When milestone priorities shift, you update one focused file.

### 5. Validation Becomes Optional
Not every pod has strong validation alignment today (Dozer, Art). In the current structure, those pods still have a Validation Focus section (often with `[TBD]` entries). In the new structure, pods without validation alignment simply don't have a `validation.md` file. No empty sections.

---

## Trade-Offs

### Benefits

| Benefit | Why It Matters |
|---------|----------------|
| **Faster review** | Sprint plan diffs only touch sprint files. Feature priority changes only touch `features.md`. No scrolling past irrelevant content. |
| **Clear ownership** | Skills write to generated files. Humans write to planning files. No mixed-ownership files. |
| **Update frequency match** | Each file changes at its natural cadence. Sprint files biweekly, milestone files once per milestone, features when priorities shift. |
| **Concise documents** | Each file is 30-60 lines instead of 200+. Scannable in seconds. |
| **Eliminates redundancy** | No pod-level Gantt (use `generated/roadmap.md`). No pod-level sprint section (use `generated/sprint_plans/`). No duplicated validation definitions. |

### Costs

| Cost | Mitigation |
|------|------------|
| **More files** (5 pods x 3 files = 15 files vs 5 today) | Folder structure keeps them organized. Each file is much smaller. |
| **Cross-referencing** ("where does X live?") | `features.md` is always the starting point. It links to specs, milestone plans, and validation. |
| **Skill updates needed** | `/roadmap-update`, `/sprint-plan`, `/risk-evaluation` read pod plans. All would need path updates. |
| **Migration effort** | One-time cost. Can migrate one pod first as a pilot. |
| **Loss of "one file" simplicity** | The folder IS the one place. Three short files > one long file for reviewability. |

---

## Impact on Skills

| Skill | Current | After Split |
|-------|---------|-------------|
| `/sprint-plan` | Reads pod plan for goals/assignments. Writes Sprint Plans section to pod plan. | Reads `features.md` + `milestone_X.md` for goals. Writes only to `generated/sprint_plans/`. No more writing to pod plan files. |
| `/roadmap-update` | Reads pod plans, regenerates Gantt in each pod plan + `generated/roadmap.md`. | Reads `features.md` from each pod. Only regenerates `generated/roadmap.md`. Pod-level Gantts eliminated. |
| `/risk-evaluation` | Reads pod plans for feature priorities and milestone breakdown. | Reads `features.md` + `milestone_X.md`. Same data, different file paths. |
| `/validation-review` | Reads Validation Focus section from pod plans. | Reads `validation.md` from each pod. Cleaner — dedicated file. |
| `/spec-sync` | Doesn't read pod plans directly. | No change. |

**Key win**: `/sprint-plan` no longer writes to human-authored files. The "update pod plan Sprint Plans section and ask for approval" workflow goes away entirely.

---

## File Count Comparison

### Current
```
planning/pods/
  Empire_Plan.md          (213 lines)
  Metagame_Plan.md        (252 lines)
  Battle_Plan.md          (202 lines)
  SocialDynamics_Plan.md  (261 lines)
  Dozer_Plan.md           (141 lines)
  Art_Plan.md             (197 lines)
= 6 files, ~1,266 total lines
```

### Proposed
```
planning/pods/
  empire/
    features.md           (~30 lines)
    milestone_mms.md      (~35 lines)
    validation.md         (~25 lines)
  metagame/
    features.md           (~35 lines)
    milestone_mms.md      (~40 lines)
    validation.md         (~25 lines)
  battle/
    features.md           (~25 lines)
    milestone_mms.md      (~35 lines)
    validation.md         (~20 lines)
  social_dynamics/
    features.md           (~30 lines)
    milestone_mms.md      (~40 lines)
    validation.md         (~15 lines)
  dozer/
    features.md           (~15 lines)
    milestone_mms.md      (~20 lines)
  art/
    features.md           (~20 lines)
    milestone_mms.md      (~25 lines)
= 16 files, ~435 total lines
```

More files, but ~70% less total content (redundancy eliminated). Each file is 15-40 lines — scannable at a glance.

---

## Implementation Plan

Convert all 6 pods at once to avoid mixed-mode complexity in skills. Do Empire first, get user approval on the output, then convert the remaining 5 using the same pattern.

### Pre-requisites

Before starting, read these files for full context:
- `project-charter.md` — Architecture and file organization
- This document (`reference/pod_plan_structure_options.md`) — The target structure, format decisions, and rationale
- `planning/capacity.md` — Team roster (referenced by pod plans)
- `planning/ValidationPlan.md` — SHQ/BHQ definitions (referenced by validation files)

### Phase 1: Pilot — Empire (do first, get approval before continuing)

#### Step 1.1: Create the Empire folder structure

Create `planning/pods/empire/` with three files, extracting content from `planning/pods/Empire_Plan.md`.

**`planning/pods/empire/features.md`** — Extract from the "Feature Priorities" table. Convert to **Option B format** (numbered list with inline metadata):
- Each feature becomes a numbered item: `1. **Feature Name** — Milestone, estimate, STATUS → SHQ links`
- Sub-efforts (like World Map Experience's 3 sub-items) become indented lettered items
- Include a one-line description where the current plan has "Why this?" or "Notes"
- Include features from ALL milestones (M&Ms, M&C, and any future), not just current
- Add a header with `Last Updated` date and a note pointing to `planning/features/` for full specs
- Feature links to spec files (e.g., `[Governors](../../features/governors.md)`) should be preserved

Source sections from `Empire_Plan.md`:
- "Feature Priorities" table (lines ~76-92)

**`planning/pods/empire/milestone_mms.md`** — Extract from "Milestone Breakdown > M&Ms" section:
- Sprint allocation table (which features map to which sprints)
- Milestone goals (connected to SHQs)
- Capacity & constraints (key staffing facts for this milestone)
- Keep it concise — this is the "how do we get through this milestone" view

Source sections from `Empire_Plan.md`:
- "Milestone Breakdown > M&Ms" (lines ~152-168)
- Relevant parts of "Validation Focus" that are M&Ms-specific

If other milestones have meaningful content (M&C, Beta Prep), create `milestone_mc.md` etc. Only create milestone files for milestones with actual sprint allocation content — don't create files for `[TBD]` milestones.

**`planning/pods/empire/validation.md`** — Extract from "Validation Focus" section:
- BHQ table (which BHQs this pod contributes to, status, cross-pod flag)
- Active SHQ gaps
- Reference ValidationPlan.md by ID — don't duplicate SHQ definitions

Source sections from `Empire_Plan.md`:
- "Validation Focus" (lines ~52-70)

#### Step 1.2: Verify Empire output

Present all three files to the user for review. Confirm:
- [ ] No content was lost from the original `Empire_Plan.md`
- [ ] `features.md` uses Option B format correctly
- [ ] `milestone_mms.md` has the sprint allocation
- [ ] `validation.md` references BHQs/SHQs by ID without duplicating definitions
- [ ] The Sprint Plans section and Gantt from the original were intentionally dropped (sprint plans live in `generated/sprint_plans/`, Gantt lives in `generated/roadmap.md`)

**Do NOT proceed to Phase 2 until the user approves the Empire output.**

### Phase 2: Convert Remaining 5 Pods

After Empire approval, convert the remaining pods using the same pattern. Key pod-specific notes:

#### Metagame (`planning/pods/metagame/`)

Source: `planning/pods/Metagame_Plan.md`

- `features.md`: Convert the Feature Priorities table. Note the **dual pipeline structure** (Pipeline A: UI Foundation, Pipeline B: sequential features) — this is important context to preserve, either as a note at the top or inline on the relevant features.
- `milestone_mms.md`: Include the pipeline assignment table (Guilherme → Pipeline A, Tiago → Pipeline B) and the sprint allocation ASCII diagram. Convert the ASCII pipeline diagram to a simpler format if possible, or keep it if it's clearer than alternatives.
- `milestone_mc.md`: M&C has 9 defined features with pipeline assignments — create this file.
- `validation.md`: Extract the Validation Focus section (Battle, Empire, Monetisation SHQ tables).

#### Battle (`planning/pods/battle/`)

Source: `planning/pods/Battle_Plan.md`

- `features.md`: Convert the Feature Priorities table. Preserve the **capacity warning** (1 client engineer, features are sequential).
- `milestone_mms.md`: Include the capacity note and critical path risk. The milestone breakdown has a sprint allocation that should transfer.
- `validation.md`: Note that BHQ entries currently say `[TBD]` — still create the file but keep the TBD entries. The M&Ms SHQ table from the roadmap (SHQ4-1, SHQ4-2, SHQ3-24, SHQ3-26, SHQ3-27, SHQ3-28) should be included.

#### Social Dynamics (`planning/pods/social_dynamics/`)

Source: `planning/pods/SocialDynamics_Plan.md`

- `features.md`: This is the biggest win. Convert the **10 phase tables** (~87 lines) into Option B numbered list format (~45 lines). Use the Social Dynamics example from the [Priority List Formats](#social-dynamics-before--after) section as the template. Preserve the "Standalone Features" section (Ravager's Reef, Battlepass) as items 11-12. Include the "Strategy: Parallel Tracks" context (AI Prototype, Map Build-Up, Networking) as a brief note at the top — this pod's structure is fundamentally different from others.
- `milestone_mms.md`: Extract the M&Ms milestone breakdown. Include the three parallel tracks and the switchover goal.
- `validation.md`: Extract validation focus. Note that most SHQs are future-milestone (BHQ-M2, BHQ-M4).

#### Dozer (`planning/pods/dozer/`)

Source: `planning/pods/Dozer_Plan.md`

- `features.md`: Only 2 features — this will be a very short file. Use Option D (flat minimal) or Option B, either works for 2 items.
- `milestone_mms.md`: Extract M&Ms section. Keep it minimal — sprint allocation and capacity.
- `validation.md`: **Do not create** — Dozer has no validation alignment. This is fine per the "Validation Becomes Optional" paradigm shift.

#### Art (`planning/pods/art/`)

Source: `planning/pods/Art_Plan.md`

- `features.md`: Convert the Feature Priorities table. Art features are mostly ongoing/continuous — the list format handles this well.
- `milestone_mms.md`: Extract M&Ms art production tracks.
- `validation.md`: **Do not create** — Art's BHQ entries are all `[TBD]`. Create this file only when real validation alignment is defined.

### Phase 3: Update Skills

16 skills reference pod plan files. Update them to use the new folder structure.

#### How skills find pod data (new pattern)

Old pattern: Read `planning/pods/Empire_Plan.md`
New pattern: Read files from `planning/pods/empire/` folder

Skills should use this mapping:

```
Pod plan data needed          →  File to read
Feature priorities/backlog    →  planning/pods/{pod}/features.md
Milestone sprint allocation   →  planning/pods/{pod}/milestone_{ms}.md
Validation alignment          →  planning/pods/{pod}/validation.md
Sprint plans (current/next)   →  generated/sprint_plans/sprint_{N}_{name}.md
Consolidated roadmap Gantt    →  generated/roadmap.md
```

Pod folder names (lowercase, underscore-separated):
- `empire`, `metagame`, `battle`, `social_dynamics`, `dozer`, `art`

#### Skills to update (in priority order)

**Tier 1 — Hardcoded paths, will break without update (do these first):**

1. **`.claude/commands/sprint-plan.md`**
   - Lines 51-56: Replace 6 hardcoded `planning/pods/*_Plan.md` paths with the folder pattern
   - Lines 64-114: Remove the entire "Check Pod Plan Sprint Plans Sections" workflow — sprint plans no longer live in pod plan files
   - Lines 230-250: Remove "Update Pod Plan Sprint Plans Sections" step — `/sprint-plan` no longer writes to pod plan files
   - Update reading instructions: read `features.md` for priorities and `milestone_{ms}.md` for sprint allocation
   - This is the biggest skill change — it removes two entire sections

2. **`.claude/commands/roadmap-sheet.md`**
   - Lines 20-25: Replace 6 hardcoded paths with folder paths
   - Update to read `features.md` from each pod folder for feature data

3. **`.claude/commands/generate_ms_plan.md`**
   - Lines 32-37: Replace 6 hardcoded paths with folder paths
   - Update to read `features.md` + relevant `milestone_{ms}.md` from each pod folder

**Tier 2 — Path-dependent logic, will produce incomplete results without update:**

4. **`.claude/commands/roadmap-update.md`**
   - Lines 35-42: Update to read from pod folders
   - Lines 64-73: Remove writing to pod plan files. `/roadmap-update` should only write to `generated/roadmap.md`. If it needs to update feature statuses, it writes to `features.md` in the relevant pod folder.
   - Update the pod-level Gantt regeneration — this is eliminated. Only `generated/roadmap.md` Gantt remains.

5. **`.claude/commands/validation-review.md`**
   - Line 26: Change `planning/pods/*_Plan.md` to reading `validation.md` from each pod folder
   - Simpler — each pod has a dedicated validation file (or none, for Dozer/Art)

6. **`.claude/commands/roadmap-options.md`**
   - Line 14: Update to read `features.md` from each pod folder as baseline

7. **`.claude/commands/risk-evaluation.md`**
   - Line 35: Update to read `features.md` + `milestone_{ms}.md` from each pod folder

**Tier 3 — Context reads, will still work but should be updated:**

Update the pod plan path references in each of these skills. These skills read pod plans for context and will still function (they'll just fail to find the old file and potentially skip pod context). Low risk, but should be updated for completeness.

8. `.claude/commands/sprint-summary.md` (line 54)
9. `.claude/commands/sprint-risks.md` (line 22)
10. `.claude/commands/tech-debt.md` (line 20)
11. `.claude/commands/doc-author.md` (line 16)
12. `.claude/commands/feature-review-prep.md` (line 16)
13. `.claude/commands/spec-sync.md` (line 27)
14. `.claude/commands/queue-review.md` (line 27)
15. `.claude/commands/designer-quiz.md` (line 16)
16. `.claude/commands/channel-digest.md` (line 48)

For all Tier 3 skills, the update is the same pattern: replace references to `planning/pods/*_Plan.md` or `planning/pods/[PodName]_Plan.md` with instructions to read from the pod folder structure. Specifically:
- Where they say "read pod plan for feature priorities" → "read `planning/pods/{pod}/features.md`"
- Where they say "read pod plan for validation" → "read `planning/pods/{pod}/validation.md` if it exists"
- Where they say "read all pod plans" → "read `features.md` from each pod folder in `planning/pods/`"

**`.claude/commands/new-skill.md`** (line 25) — This is a meta-skill. Update the architecture guidance to reference the new folder structure.

### Phase 4: Update Documentation & Memory

1. **`project-charter.md`** — Update the "Three-Layer Architecture" section:
   - Change "Pod Plans (`planning/pods/*_Plan.md`)" to reference the folder structure
   - Update the description to mention `features.md`, `milestone_{ms}.md`, `validation.md`

2. **`MEMORY.md`** (in `.claude/projects/.../memory/`) — Update:
   - "Three-Layer Architecture" section: change Pod Plans description
   - "Folder Structure" section: update `planning/` description

3. **`README.md`** and **`QUICK_START.md`** — Update any references to pod plan files

4. **`planning/operating_cadence.md`** — Update staleness rules if they reference pod plan file paths

### Phase 5: Clean Up

1. **Delete the old pod plan files** after all pods are migrated and skills are updated:
   - `planning/pods/Empire_Plan.md`
   - `planning/pods/Metagame_Plan.md`
   - `planning/pods/Battle_Plan.md`
   - `planning/pods/SocialDynamics_Plan.md`
   - `planning/pods/Dozer_Plan.md`
   - `planning/pods/Art_Plan.md`

2. **Verify with a test run**: After cleanup, run `/sprint-plan` in Preview mode and `/risk-evaluation` to confirm skills read from the new structure correctly.

3. **Git commit** the full restructure as a single commit with a clear message explaining the change.

### Checklist Summary

```
Phase 1: Empire Pilot
  [ ] Create planning/pods/empire/features.md (Option B format)
  [ ] Create planning/pods/empire/milestone_mms.md
  [ ] Create planning/pods/empire/validation.md
  [ ] Get user approval

Phase 2: Remaining Pods
  [ ] Create planning/pods/metagame/ (features, milestone_mms, milestone_mc, validation)
  [ ] Create planning/pods/battle/ (features, milestone_mms, validation)
  [ ] Create planning/pods/social_dynamics/ (features, milestone_mms, validation)
  [ ] Create planning/pods/dozer/ (features, milestone_mms — no validation)
  [ ] Create planning/pods/art/ (features, milestone_mms — no validation)

Phase 3: Skill Updates (16 skills)
  [ ] sprint-plan.md — Remove Sprint Plans section read/write, update paths
  [ ] roadmap-sheet.md — Update hardcoded paths
  [ ] generate_ms_plan.md — Update hardcoded paths
  [ ] roadmap-update.md — Update paths, remove pod-level Gantt writes
  [ ] validation-review.md — Update to read validation.md files
  [ ] roadmap-options.md — Update baseline read paths
  [ ] risk-evaluation.md — Update read paths
  [ ] 9x Tier 3 skills — Update context read paths

Phase 4: Documentation
  [ ] Update project-charter.md
  [ ] Update MEMORY.md
  [ ] Update README.md / QUICK_START.md
  [ ] Update operating_cadence.md (if needed)

Phase 5: Cleanup
  [ ] Delete 6 old *_Plan.md files
  [ ] Test run: /sprint-plan Preview + /risk-evaluation
  [ ] Git commit
```
