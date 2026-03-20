# Use Cases & Exploration

This document tracks the ways the Documentation Brain can be leveraged, what's been explored, and learnings along the way. Each use case has a **Status**, **Notes**, and space for findings as we prototype.

---

## Status Key

| Status | Meaning |
|--------|---------|
| **Active** | Built and in use |
| **Prototyping** | Actively being explored |
| **Planned** | Defined, not yet started |
| **Idea** | Needs scoping before committing |

---

## 1. Data Ingestion & Sync

### 1a. Notion Ingestion
**Status:** Planned
**Goal:** Pull design docs from Notion into the brain as structured markdown, either as periodic snapshots (archival) or live-sync.

**Key Questions:**
- Archival (batch export + transform) vs live (API polling / webhook)?
- Which Notion databases matter most? Design docs? Meeting notes?
- How to handle Notion's nested block structure -> clean markdown?

**Learnings:**
_None yet._

### 1b. ClickUp Ingestion
**Status:** Planned
**Goal:** Pull task data, estimates, statuses, and sprint structures from ClickUp into the brain.

**Key Questions:**
- What granularity? Epics/features only, or individual tasks?
- How to map ClickUp hierarchy (Space > Folder > List > Task) to brain structure?
- Live sync vs nightly snapshot?
- Can we push back to ClickUp (e.g., updated estimates, flagged risks)?

**Learnings:**
_None yet._

### 1c. Slack Ingestion
**Status:** Idea
**Goal:** Capture decisions, context, and design discussions from Slack channels into the brain — either as searchable archive or distilled summaries.

**Key Questions:**
- Raw archive vs AI-summarized digests?
- Which channels? Design discussions, pod channels, decision logs?
- How to handle signal vs noise ratio?
- Privacy/sensitivity filtering?

**Learnings:**
_None yet._

---

## 2. AI-Assisted Documentation Authoring

**Status:** Planned
**Skill:** To be built as a Claude slash command
**Primary Users:** Designers

**Goal:** Designers describe what they want a doc to cover — goals, must-include topics, examples, rough ideas. Claude then:
1. Asks clarifying questions and surfaces logic conflicts
2. Conducts a structured interview to fill gaps
3. Generates polished documentation in the brain's format
4. Designer reviews and approves

**Key Questions:**
- What doc types? Feature specs, pod plans, design briefs?
- How opinionated should the interview be? (Surface contradictions with existing docs?)
- Should it cross-reference existing brain content automatically?
- Output format: new file, PR draft, or inline edit?

**Learnings:**
_None yet._

---

## 3. Change Log Generation

**Status:** Planned
**Goal:** Generate change logs at two levels of audience and detail.

### 3a. Internal Playtest Notes
- Audience: QA, devs, designers attending playtests
- Tone: Technical, detailed, includes known issues and test focus areas
- Source: Git commits, ClickUp sprint completions, design doc changes

### 3b. Player-Facing Patch Notes
- Audience: Players
- Tone: Exciting, clear, marketing-aware
- Source: Same data as internal, but filtered and rewritten
- Should flag anything that needs comms review

**Key Questions:**
- Can we auto-detect "notable" changes vs boilerplate?
- Integration with build/release pipeline?
- Template per audience type?

**Learnings:**
_None yet._

---

## 4. Custom Documentation Navigator (Web UI)

**Status:** Idea
**Goal:** A web interface (built with Claude) where any team member can query the brain conversationally.

**Example Queries:**
- "I'm working on gear — give me the latest"
- "What's the current state of alliance features?"
- "Show me everything related to monetization for M&C milestone"

**What It Returns:**
- Current implementation status (from ClickUp/eng data)
- Relevant design docs and feature specs
- Related/adjacent features and their states
- Engineering endpoints and API surfaces (pulled from codebase)
- Upcoming changes in the pipeline

**Key Questions:**
- Tech stack? (Lightweight web app + Claude API backend?)
- Does it need auth/access control?
- How to keep the engineering/codebase context fresh?
- Can it link directly to Notion pages, ClickUp tasks, source files?

**Learnings:**
_None yet._

---

## 5. Effort & Task Estimation

**Status:** Planned
**Goal:** Use brain context + historical data to improve estimation accuracy and catch dependency risks.

**Capabilities:**
- Compare ClickUp time estimates against actuals over time
- Flag systematic over/under-estimation by pod, discipline, or feature type
- Vet dependencies: "Feature X says 3 sprints, but it depends on Feature Y which isn't scheduled yet"
- Recommend estimate adjustments based on historical patterns
- Surface hidden work (integration, QA, cross-pod coordination)

**Key Questions:**
- What historical data do we have access to? (ClickUp time tracking?)
- How far back is useful for calibration?
- How to present recommendations without undermining team autonomy?

**Learnings:**
_None yet._

---

## 6. Risk & Gap Analysis _(Active)_

**Status:** Active
**Skill:** `/risk-evaluation`

**What It Does Today:**
- Compares product targets vs pod plans vs capacity
- Surfaces misalignments between what leadership wants and what's planned/staffed

**Expansion Ideas:**
- Incorporate estimation accuracy data (Use Case 5)
- Auto-run on pod plan changes
- Track risk trends over time

---

## 7. Validation Tracking _(Active)_

**Status:** Active
**Skill:** `/validation-review`

**What It Does Today:**
- Evaluates validation roadmap progress per sprint/milestone
- Tracks SHQ status and hypothesis confidence

---

## 8. Additional Use Cases to Explore

### 8a. Sprint Retrospective Analysis
**Status:** Idea
**Goal:** Ingest retro notes + sprint metrics to identify recurring themes, track whether action items actually get addressed, and surface patterns across pods.

### 8b. New Team Member Onboarding
**Status:** Idea
**Goal:** Generate role-specific onboarding packets. A new Battle pod designer gets a different brain dump than a new Metagame engineer. Pull relevant docs, current state, key contacts, and active work into a personalized guide.

### 8c. Cross-Pod Impact Analysis
**Status:** Idea
**Goal:** When a feature changes scope or timeline, automatically trace downstream effects across pods via the dependency map. "If Governors slips 2 sprints, what else moves?"

### 8d. Design Review Preparation
**Status:** Idea
**Goal:** Before a design review, auto-generate a briefing doc: the feature's current spec, open questions, validation alignment, related features, and potential conflicts with other in-flight work.

### 8e. Meeting Intelligence
**Status:** Idea
**Goal:** Ingest meeting notes/transcripts (from Slack, Notion, or recordings). Extract decisions, action items, and open questions. Track whether decisions get reflected in documentation and plans.

### 8f. Player Feedback Routing & Analysis
**Status:** Idea
**Goal:** Ingest player feedback (from Discord, surveys, playtest reports). Categorize by feature area, severity, and frequency. Route to relevant pods. Track whether high-frequency issues get addressed in upcoming sprints.

### 8g. Balance & Tuning Documentation
**Status:** Idea
**Goal:** Maintain a living document of game balance decisions — why values are set the way they are, what was tried before, what the design intent is. Prevents the "why is this number 7?" problem when the original designer is unavailable.

### 8h. Competitive Intelligence Tracking
**Status:** Idea
**Goal:** Maintain structured notes on competitor games' features, updates, and market moves. When designing a feature, surface what competitors have done in the same space.

### 8i. QA Test Case Generation
**Status:** Idea
**Goal:** From a feature spec, auto-generate test cases covering happy paths, edge cases, and cross-feature interactions. Particularly useful for features that touch multiple systems.

### 8j. Live Ops Event Planning
**Status:** Idea
**Goal:** Track event templates, past event performance, and content requirements. When planning a new event, surface what worked before, what content is available, and what needs to be created.

### 8k. Localization Readiness Tracking
**Status:** Idea
**Goal:** Flag new or changed player-facing strings across features. Track what needs translation, what's been sent out, and what's blocking release in specific regions.

### 8l. Technical Debt Visibility
**Status:** Idea
**Goal:** Ingest and track tech debt items alongside feature work. Surface when planned features will be complicated by known debt, and when debt paydown would unblock multiple features.

---

## How to Use This Document

- **Adding a new use case:** Add it under Section 8 as an Idea. Once scoped, promote it to its own numbered section.
- **Updating status:** Change the Status tag and add dated entries under Learnings.
- **After prototyping:** Record what worked, what didn't, and any architectural decisions made.
