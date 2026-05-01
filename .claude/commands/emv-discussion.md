# EMV Learning Skill

Analyzes Lotus EMV playtest results with **continuous learning** across conversations. Tracks patterns in test data, question patterns, and builds institutional knowledge over time.

> **Memory-Enhanced**: This skill learns from every analysis session. It remembers test trends, design correlations, recurring questions, and persistent issues. The more you use it, the more context it builds.

---

## Project Structure

### Authoritative Sources (Notion)
- **Test Findings Database** (`collection://2953f0b3-b6ab-80a9-a203-000baf15c219`) - Contains Lotus EMV test result pages with metrics tables
- **Tests Database** (`collection://cc6c3538-62f4-4ebe-8a03-77d9cfeacfec`) - Contains EMV test metadata (dates, status, goals, milestones)
- **Product Database** (`collection://1b63f0b3-b6ab-80cc-bfcc-000bfc01ca2a`) - Contains build change logs (filter by Tags = "Changelog")

### SHQ Source of Truth (ClickUp)
- **SHQ Tracker** (list `901324723345`) - Authoritative SHQ definitions for M&M's milestone
- Filter by custom field "🪷 Milestone (Lotus)" = 3 (Multiplayer & Meta)
- Cross-referenced with Notion M&M's Validation Plan and Google Sheets via `/shq-sync-check` skill
- **Why ClickUp**: Structured data, milestone filtering, consistent with sync check automation

### Memory System
- `/Users/holly/.claude/projects/-Users-holly-ClaudeWorkspace-proj-chimera-documentation-brain/memory/` - Stores learned patterns

### Related Context
- `planning/features/*.md` - Design approach for features being tested
- ClickUp tickets - Implementation changes between test dates (optional, change logs often sufficient)
- Notion design docs - Linked via test pages' design context sections

---

## Usage Patterns

### Thought Partner Mode (Default)

**How to invoke:**
- `/emv-discussion` - Opens conversation, I'll ask what you want to explore
- `/emv-discussion what's improving?` - Direct question
- `/emv-discussion compare #21 vs #18` - Specific comparison
- `/emv-discussion why did retention drop?` - Investigation
- `/emv-discussion are we hitting targets?` - Status check

**What happens:**
- Conversational, interactive analysis
- I hold all context (5 tests, SHQs, build changes, metrics, memory)
- You ask questions, I answer with data and insights
- Flexible format based on your question
- Great for: exploring data, verifying thinking, surfacing patterns

### Report Mode (Explicit)

**How to invoke:**
- `/emv-discussion report` - Full structured report on latest test
- `/emv-discussion report latest` - Same as above
- `/emv-discussion report #21` - Report on specific test
- `/emv-discussion generate summary` - Alternative trigger

**What happens:**
- Structured report output (see "Output Format" section)
- Includes: metrics, SHQ analysis, build changes, correlations, trends
- Report format is **DRAFT** - review and iterate
- Great for: milestone reviews, stakeholder updates, documentation

**Default:** If you don't specify "report", I default to **Thought Partner Mode**.

---

## Your Task

### 1. Check Memory for Context (ALWAYS FIRST)

Before querying Notion, check if memory has relevant context:
- Previous test analyses
- Known patterns or trends
- Recurring questions on this topic
- Historical insights

**When to access memory:**
- User asks a question → check if we've discussed this before
- User asks for trends → check if patterns are already identified
- User asks about a specific metric → check if we have historical context
- Before ANY analysis → check for prior insights to build on

### 2. Identify Latest Lotus EMV Tests (Always Fetch Last 5)

Query the Test Findings Database for Lotus entries (filter by "Game Team" = Lotus):
- Sort by "Last edited time" descending
- **Extract the most recent 5 tests** for full context window (e.g., Test #21, #20, #19, #18, #17)
- Note: Tests may have variants (e.g., "Iterative#21 External", "Iterative#21 Internal")
- **Why 5 tests:** Provides sufficient trend data (2 sprints worth), allows multi-test comparisons, fits well in context window

**Multi-Test Context:**
- User can compare ANY two tests in the window (e.g., "#21 vs #18", "#20 vs #17")
- User can ask for trends across all 5 (e.g., "what's trending?", "show progression")
- Memory accumulates insights across all 5 tests, not just latest vs previous

### 3. Extract Metrics from Test Pages

For each test result page, extract the core metrics table:
- **Appeal** (X/10)
- **Wanted to Stop Playing** (%)
- **Basics Understanding** (X/5)
- **Continue Playing** (X/5)
- **Average Extra Time Spent** (mm:ss)

Also capture:
- **Test number** (e.g., "Test #21")
- **Build name** (e.g., "Xenial Xeruses")
- **Test type** (External, Internal, Milestone marker)
- **Date** (from "Publish Date" or "Last edited time")
- **SHQ goals** being tested
- **Issues tracked** (from Issues Status table)
- **Player cohorts** (Strategic Collector, Epic Battler, Empire Builder) and their metrics

### 4. Cross-Reference SHQs (Surface Blind Spots in Validation)

The test team explicitly identifies SHQs they're targeting, but build changes and metric movements may touch additional SHQs they didn't realize. Surface these blind spots.

**Step 1: Fetch ALL M&M's SHQs from ClickUp (Authoritative List)**

Use `clickup_filter_tasks` on list 901324723345 filtered by Milestone = 3:
- Get complete list of M&M's SHQs (currently: SHQ 01-17, 26)
- Extract: SHQ number, full question text, task ID
- This is the universe of validation questions available for this milestone

**Step 2: Extract SHQs explicitly called out by test team**
- Look in test page's "SHQ goals" section, issues table, or design context
- Note which SHQs the team intentionally targeted (e.g., "SHQ 01", "SHQ 03")

**Step 3: Analyze which OTHER SHQs may have been touched**

Based on build changes (from change logs) and metric movements, suggest SHQs that were likely affected but not explicitly tracked:

**Correlation Logic:**

**Build change types → Potentially affected SHQs:**
- **Tutorial additions/changes** → SHQ 02 (HUD understanding), SHQ 03 (hero roles), SHQ 15 (map objectives grasp)
- **Hero VFX/animation polish** → SHQ 01 (clarity), SHQ 03 (hero understanding), SHQ 17 (hero attachment)
- **Auto-battle logic changes** → SHQ 02 (tactical response), SHQ 03 (hero role understanding)
- **Narrative updates** → SHQ 09 (narrative goals drive exploration)
- **Territory/map changes** → SHQ 06 (territory quality), SHQ 07 (map readability), SHQ 10 (world map goals)
- **Empire building features** → SHQ 11 (empire progression), SHQ 12 (resource tension)
- **Multiplayer/session features** → SHQ 08 (session hooks), SHQ 13 (multi-session motivation), SHQ 16 (multiplayer pacing)
- **Economy/progression tuning** → SHQ 12 (resource tension), SHQ 14 (economy depth)
- **Battle design/content** → SHQ 04 (unit pipeline), SHQ 05 (battle scalability)
- **Unit/troop additions** → SHQ 26 (hero/troop collection)

**Metric movements → Potentially affected SHQs:**
- **Appeal changed** → SHQ 01 (art clarity), SHQ 17 (hero attachment)
- **Wanted to Stop improved/declined** → SHQ 08 (session hooks), SHQ 09 (narrative motivation), SHQ 13 (multi-session retention)
- **Basics Understanding changed** → SHQ 02 (HUD clarity), SHQ 03 (hero understanding), SHQ 15 (objective grasp)
- **Continue Playing changed** → SHQ 10 (world map goals), SHQ 11 (empire progression), SHQ 12 (resource tension), SHQ 13 (multi-session)
- **Battle enjoyment metrics** → SHQ 01 (clarity in battle), SHQ 02 (HUD tactical response), SHQ 03 (hero role clarity)
- **Cohort-specific changes** (Empire Builder, Strategic Collector, Epic Battler) → Map to their respective SHQ strengths/weaknesses

**Step 4: Output analysis**

```
🎯 **SHQ Validation Analysis:**

**Team explicitly identified:**
- SHQ 01: Does our new art direction maintain the level of clarity necessary for fun-to-execute gameplay that the player can understand the impact of their in-game choices?
- SHQ 03: Can players understand the role and abilities of all six starter heroes, and do player metagame progression choices vary per hero in support of that role?

**Also likely touched (not explicitly tracked):**
- ✅ **SHQ 02** (HUD strategic/tactical understanding): Basics Understanding ↑ 3.8→4.5 + new Affinity/Dread tutorials added → HUD clarity likely improved
- ✅ **SHQ 08** (session hooks): Wanted to Stop ↓ 44%→28% with no explicit session hook features → suggests retention improved for other reasons, worth investigating
- ⚠️ **SHQ 09** (narrative motivation): T1-T4 narrative updated in build, but not explicitly validated → opportunity to check if narrative is driving exploration
- ❓ **SHQ 13** (multi-session motivation): Continue Playing at 3.92 - was this validated across multiple sessions? Test duration unclear

**Validation blind spots:**
These SHQs are assigned to M&M's milestone but haven't appeared in recent tests:
- SHQ 04, 05, 06 (production pipeline - internal validation, not player-facing)
- SHQ 10, 11, 12 (empire systems - may need deeper territory progression in build)
- SHQ 14, 15, 16 (economy, objectives, multiplayer - features not in build yet?)
```

**Why this matters:**
- Helps team realize they validated more than they thought
- Surfaces opportunities to extract more insight from existing test data
- Identifies gaps: SHQs assigned to milestone but never validated
- Prevents duplicate validation work if SHQ already touched

**Graceful degradation:**
- If ClickUp unavailable: use Notion M&M's Validation Plan as fallback (page 3533f0b3b6ab80c3b6eccad51cd2b09a)
- If no SHQs called out in test: note "No explicit SHQs tracked - analyzing all M&M's SHQs against test results"

### 5. Fetch Build Change Logs (for SHQ Correlation)

For each test's build name, fetch the corresponding change log from the Product Database (used to identify which SHQs were touched):

**Query Pattern:**
```sql
SELECT Page, url FROM "collection://1b63f0b3-b6ab-80cc-bfcc-000bfc01ca2a" 
WHERE Tags LIKE '%Changelog%' 
AND Page LIKE '%[Build Name]%'
```

**Example**: For Test #21 with "Xenial Xeruses" build → fetch "Changelog - Xenial Xeruses Build"

**Extract from change log:**
- **New Game Features**: Tutorials, major additions (e.g., "Auto-Battle tutorial moved to T3")
- **Updates**: Narrative, VFX, mechanics changes, content polish (e.g., "Improved Ability target prioritization")
- **SHQ confidence levels**: Which hypotheses were being validated in this build
- **Known Issues**: Bugs present in the build (with ClickUp links)
- **Bug Fixes**: What was resolved

**Graceful degradation:**
- If change log not found: note "Change log unavailable for [Build Name]"
- If tests use the same build: only fetch once, note "Same build as Test #X"
- If change log missing sections: use available data

**Why this matters:**
- Correlate metric changes with specific design changes
- Understand if improvement/decline is from new features, bug fixes, or content polish
- Identify if issues in change log's "Known Issues" correlate with test problems

### 6. Analyze Patterns Across All 5 Tests (With Memory Context)

Compare current question against memory:
- **If we've discussed this before**: Reference previous insights, update if data changed
- **If this is a new question**: Perform fresh analysis, note for future

**Multi-Test Metrics Analysis:**
Analyze trends across the full 5-test window, not just latest vs previous:

- Identify which metrics **improved** (↑ green) - recent improvement or sustained trend?
- Identify which metrics **declined** (↓ red) - recent decline or consistent downtrend?
- Identify which metrics stayed **flat** (→ yellow) - stagnant or oscillating?
- Flag **significant changes** (e.g., >10% swing, crossing target thresholds)
- **Track volatility**: Is metric stable (e.g., Appeal: 7.8-7.85 for 3 tests) or bouncing (e.g., Continue Playing: 3.4 → 3.7 → 4.2 → 3.92)?
- **Identify reversals**: Did a declining trend reverse? (e.g., Wanted to Stop: declining #19-20, then improved #20-21)
- **Compare against memory**: Has this pattern appeared before across multiple test cycles?

**Examples of Multi-Test Patterns:**
- "Appeal flatlined at ~7.8 across Tests #19, #20, #21 (3 consecutive)"
- "Wanted to Stop volatile: 39% → 40% → 44% → 28% (spiked at #20, then best ever at #21)"
- "Empire Builder hero understanding consistently lowest: 4.0 → 3.9 → 3.8 → 3.72 (declining trend)"

**Build Context:**
- Check if tests used the **same build** (same build = audience effect, not design change)
- If different builds, note what changed (correlate with ClickUp/design docs if needed)

**Target Tracking:**
- Compare metrics against stated targets (e.g., Appeal target: >8.00)
- Flag which metrics are above/below target
- **Memory check**: How long has this metric been below target?

**Meta-Pattern Recognition:**
- Track which questions get asked repeatedly
- If same question asked 2+ times → save to memory as "recurring concern"
- Surface this to user: "You've asked about Empire Builder hero understanding 3 times now - this seems to be a persistent issue"

### 7. Save Insights to Memory (CRITICAL)

**When to save memories:**

**Type: feedback**
- User indicates a pattern is important: "we need to watch this"
- User confirms or corrects an insight: "yes, that's the key issue"
- User asks the same question again (recurring concern signal)

**Type: project**
- Test results that represent a significant change (new milestone, major improvement/decline)
- Design decisions correlated with test changes (e.g., "tap-through dialogue fix improved retention")
- **Multi-test patterns** (e.g., "Appeal flatlined at 7.8 across Tests #19-21", "Wanted to Stop volatile over 5 tests")
- Persistent issues across multiple tests (e.g., "performance unresolved for 4 consecutive tests")
- Cohort-specific patterns (e.g., "Empire Builders consistently low on hero understanding across all 5 tests")
- **Trend reversals** (e.g., "Wanted to Stop spiked at #20 but then hit best-ever at #21")

**Memory format examples:**

```markdown
---
name: emv_appeal_flatlined
description: Appeal metric has plateaued at ~7.8 across Tests #19-21, not reaching >8.00 target
type: project
---

Appeal has remained flat at 7.8-7.85 across the last 3 external tests (Test #19, #20, #21), spanning March-April 2026. This is below the target of >8.00.

**Why:** Despite improvements in retention (Wanted to Stop: 44% → 28%) and battle enjoyment (3.92 → 4.30), overall appeal isn't breaking through. The test pages identify performance issues and AI art perception as potential suppressors.

**How to apply:** When analyzing future Appeal scores, check if these blockers have been addressed. If Appeal crosses 8.00, correlate with what changed (build, fixes).
```

```markdown
---
name: emv_retention_improvement_tutorial_correlation
description: Test #21 retention improvement correlates with new tutorials from Xenial Xeruses build
type: project
---

Wanted to Stop improved dramatically in Test #21 (44.4% → 28%, Test #20 to #21). This coincided with the Xenial Xeruses build which added Affinity Tutorial and Dread Engine Tutorial, plus moved Auto-Battle tutorial to T3.

**Why:** Change log shows tutorial additions and T1-T4 narrative updates in the same build. Basics Understanding also improved (3.8 → 4.5) in the same test, supporting tutorial correlation. Players who understand core concepts are less likely to want to stop.

**How to apply:** When future tests show retention changes, check if tutorials or onboarding changed. Retention and understanding metrics tend to move together. If retention declines despite good tutorials, look at other friction points (performance, bugs).
```

```markdown
---
name: emv_question_pattern_empire_builder_heroes
description: Recurring questions about Empire Builder hero understanding (asked 3 times)
type: feedback
---

User has asked about Empire Builder hero understanding scores being low on 3 separate occasions (tests #19, #20, #21). This indicates a persistent design concern.

**Why:** Empire Builders are the segment most invested in territory/kingdom building, but consistently score lowest on hero clarity (3.72/5 vs 4.52 for Strategic Collectors). The recurring questions suggest this is a known friction point that hasn't been resolved.

**How to apply:** When analyzing future EMV tests, proactively surface Empire Builder hero metrics even if not asked. This is a tracked concern.
```

### 8. Correlate with Design Changes (Using Change Logs + SHQ Mapping)

When comparing tests on **different builds**, use the change logs to identify what changed AND map changes to SHQs:

**Direct Correlation Examples:**
- **Basics Understanding** improved (3.8 → 4.5)? → Check change log for tutorial changes (e.g., "Affinity Tutorial added", "Auto-Battle tutorial moved to T3")
- **Wanted to Stop** improved (44% → 28%)? → Check for narrative updates, VFX improvements, or bug fixes that reduce friction
- **Battle enjoyment** improved (3.92 → 4.30)? → Check for battle tuning, ability prioritization changes, or hero polish
- **Empire Builder hero understanding** still low? → Check if change log addressed hero clarity features

**Pattern Recognition:**
- If metric improved but change log shows minimal changes → likely audience effect (if same build) or indirect factors
- If metric declined and change log shows "Known Issues" related to that area → likely correlation
- If SHQ confidence in change log is "On Track" but test results show decline → flag discrepancy for investigation

**What to surface:**
```
📝 **What Changed (from change log):**

Xenial Xeruses Build (#21) vs. Vibrant Vipers Build (#20):
- ✅ New: Affinity Tutorial, Dread Engine Tutorial
- ✅ Updated: Auto-Battle logic (A2/A3 usage), improved target prioritization
- ✅ Polish: Hero Gwen VFX and animations
- ✅ Narrative: T1-T4 updates
- ⚠️ Known Issues: Tap-too-fast tutorial lock, battle slow-motion bug

Likely Correlations:
- Basics Understanding ↑ (3.8 → 4.5) ← New tutorials explain core concepts better
- Battle enjoyment ↑ (3.92 → 4.30) ← Improved auto-battle logic, Gwen polish
- Wanted to Stop ↓ (44% → 28%) ← Narrative updates reduce friction, tutorial improvements
```

**Graceful degradation:**
- If change log unavailable: note "Change log not found, using test page design context instead"
- If same build: skip change log correlation, focus on audience/time effects

### 9. Answer User Questions

Provide interactive analysis based on user queries, **enhanced with memory and SHQ context**:

**Examples:**

**"What's the latest EMV test?"**
→ Show Test #21 summary
→ Check memory: Have we discussed this test before? Any prior insights?
→ Surface relevant patterns from memory

**"Compare #21 vs #20"** (adjacent tests)
→ Side-by-side comparison with trend indicators
→ Check memory: What did we learn last time about these tests?
→ Reference prior insights, update if new data

**"Compare #21 vs #18"** (skipping tests)
→ Wider comparison spanning 3 tests
→ Show what happened in between (#20, #19)
→ Identify cumulative changes across multiple builds
→ Check if trend was consistent or had reversals

**"What's improving?"** (trend across all 5)
→ List metrics trending up across the 5-test window
→ Check memory: Are these consistent trends or new?
→ Highlight if a declining trend reversed
→ Distinguish: "Appeal stable at 7.8" vs "Wanted to Stop improved dramatically"

**"What's the progression of [metric]?"** (specific metric across all 5)
→ Show full trajectory: e.g., "Appeal: 8.0 → 7.5 → 7.8 → 7.85 → 7.85"
→ Identify peak, trough, current state
→ Flag volatility vs stability
→ Correlate changes with builds from change logs

**"Why did 'Wanted to Stop' drop?"**
→ Show the change (44.4% → 28%)
→ Check memory: Have we investigated this before?
→ Note it's a different build, reference design context
→ Save insight about this improvement

**"Are we hitting targets?"**
→ Compare each metric against targets
→ Check memory: How many times have we checked targets? (pattern)
→ If asked repeatedly, note: "This is the 3rd time you've asked about targets - consistent concern?"

**"What are the current issues?"**
→ Extract Issues Status table
→ Check memory: Which issues have persisted across multiple tests?
→ Flag chronic issues vs new ones

**"Meta-question: What do we keep asking about?"**
→ Analyze memory for question patterns
→ Surface: "Most asked topics: Empire Builder hero understanding (3x), target achievement (4x), performance issues (2x)"
→ Interpret: "Empire Builder heroes and target anxiety seem to be persistent concerns"

### 10. Output Format

**For Thought Partner Mode:** Format is flexible based on the question. Use sections below as inspiration, not requirements.

**For Report Mode:** Use structured format below. Mark as **DRAFT for review**.

Present findings clearly, **with memory integration and SHQ analysis**:

**Latest Test Summary (with memory context):**
```
📊 Lotus EMV Test #21 (Milestone) - Xenial Xeruses Build
Date: April 30, 2026
Type: External PTC (n=60, Target Audience)

💭 **Memory Context:**
- You asked about this test on April 30 - here's what's changed since then
- Empire Builder hero understanding was a concern last time (still 3.72/5)
- Wanted to Stop showed major improvement - this is the best we've seen

Core Metrics vs. Test #20:
✅ Appeal: 7.85/10 (→ flat vs #20: 7.85/10) | Target: >8.00 🟡
   📝 Note: Flat for 3 tests now (see memory: emv_appeal_flatlined)
✅ Wanted to Stop: 28% (↓↓ from #20: 44.4%) | Target: <40% ✅
   🎯 Major win - best retention score in our tracking history
✅ Basics Understanding: 4.5/5 (↑ from #20: 3.8/5) | Target: >4.00 ✅
✅ Continue Playing: 3.92/5 (↓ from #20: 4.2/5) | Target: >4.00 🟡
⏱️ Extra Time: 8:05 (↓ from #20: 9:10)

🧠 **Pattern Recognition:**
- This is the 2nd time we've discussed Empire Builder metrics - persistent concern
- Performance issues flagged again (4th consecutive test)

📝 **What Changed (from Xenial Xeruses change log):**
- ✅ New: Affinity Tutorial, Dread Engine Tutorial  
- ✅ Updated: Auto-Battle logic, improved ability targeting
- ✅ Polish: Hero Gwen VFX/animations, T1-T4 narrative updates
- ⚠️ Known Issues: Tap-too-fast tutorial lock, performance/overheating

Likely Correlations:
- Basics Understanding ↑ (3.8 → 4.5) ← New tutorials explain core concepts better
- Wanted to Stop ↓ (44% → 28%) ← Narrative updates + tutorial improvements reduce friction
- Performance still flagged ← Known issue in change log, unresolved

🎯 **SHQ Validation Analysis:**

**Team explicitly tracked:**
- SHQ 01: Does our new art direction maintain the level of clarity necessary for fun-to-execute gameplay that the player can understand the impact of their in-game choices?
- SHQ 03: Can players understand the role and abilities of all six starter heroes, and do player metagame progression choices vary per hero in support of that role?

**Also likely touched (not explicitly tracked):**
- ✅ **SHQ 02** (HUD understanding): Basics Understanding ↑ 3.8→4.5 + new Affinity/Dread tutorials → HUD clarity likely improved
- ✅ **SHQ 08** (session hooks): Wanted to Stop ↓ 44%→28% - major retention improvement suggests better session motivation
- ✅ **SHQ 09** (narrative goals): T1-T4 narrative updated in build → narrative driving exploration (not explicitly validated)
- ⚠️ **SHQ 13** (multi-session): Continue Playing at 3.92/5 - multi-session motivation unclear without longer test duration

**Validation blind spots (assigned to M&M's but not tested recently):**
- SHQ 04, 05 (production pipelines - internal validation)
- SHQ 10, 11, 12 (empire systems - may need deeper territory content in build)
- SHQ 14, 15, 16 (economy, objectives, multiplayer - features not in build yet?)

🔍 **Meta-Insight:**
You've now asked about target achievement 2 times - monitoring for pattern.
```

**Trend View (memory-enhanced):**
```
Metric Progression (#21 ← #20 ← #19 ← #18 ← #17):

Appeal:              7.85 ← 7.85 ← 7.8 ← 7.5 ← 8.0
📝 Memory: Flatlined at ~7.8 for 3 tests, peaked at #17

Wanted to Stop:      28%  ← 44%  ← 40% ← 48% ← 39%
🎯 Major improvement in #21, best score tracked

Basics Understanding: 4.5  ← 3.8  ← 4.2 ← 4.3 ← 4.0
📈 Strong rebound after #20 dip

Continue Playing:    3.92 ← 4.2  ← 3.7 ← 3.4 ← 3.7
⚠️ Slight decline from #20

🧠 **Learned Pattern:**
Wanted to Stop is the most volatile metric but trending positive.
Appeal needs breakthrough - stuck below 8.0 despite other improvements.
```

### 11. Track Question Patterns (Meta-Analysis)

After each session, save question patterns to memory:

**After 2nd time asking similar question:**
- Note the pattern
- Surface to user: "You asked about X before - seems like a recurring topic"

**After 3rd time:**
- Explicitly flag as persistent concern
- Save to memory as feedback type
- Proactively surface in future analyses

**Example:**
```
User asks: "Why is Empire Builder hero understanding low?"

Check memory: Already asked this on April 15 and April 22
→ This is the 3rd time
→ Save memory: "Recurring question about Empire Builder hero understanding"
→ Response includes: "You've asked about Empire Builder hero understanding 3 times now (April 15, 22, May 1). This appears to be a persistent design concern that hasn't been resolved across Tests #19-21."
```

---

## Rules

### Memory Integration
- **ALWAYS check memory first** before analyzing
- **Save meaningful patterns** after every analysis
- **Track question patterns** - if same question asked 2+ times, flag it
- **Reference prior insights** in responses ("Last time we discussed this...")
- **Update stale memories** if data contradicts prior insights

### Memory Types to Save

**Type: project**
- Test result patterns (e.g., metric flatlined, trend reversed)
- Design change correlations (e.g., fix improved retention)
- Persistent issues (e.g., unresolved for N tests)
- Cohort-specific patterns (e.g., Empire Builders always low on X)
- Build context (e.g., same-build = audience effect)

**Type: feedback**
- User indicates importance ("we need to watch this")
- User confirms/corrects insights ("yes, that's the key")
- Recurring questions (asked 2+ times = signal)
- User preferences on analysis style

### SHQ Integration
- **Always fetch ALL M&M's SHQs from ClickUp** - authoritative list for the milestone
- **Note which SHQs team explicitly tracked** - shows intentional validation targets
- **Suggest additional SHQs touched** - surface blind spots based on build changes and metrics
- **Identify validation gaps** - SHQs assigned to milestone but never tested
- **Map build changes to SHQs** - correlate design changes with validation questions
- **Use /shq-sync-check as source of truth** - ClickUp SHQ Tracker is synchronized with Notion and Google Sheets

### 5-Test Context Window
- **Always fetch the last 5 tests** - provides 2 sprints of context, enables trend analysis
- **Support any comparison within the window** - user can ask for #21 vs #18, not just latest vs previous
- **Track patterns across all 5** - distinguish stable trends from volatile oscillations
- **Memory spans the full window** - patterns are identified across all 5 tests, not just latest pair
- **Update memory when window shifts** - when Test #22 comes out, oldest test (#17) drops off, update patterns accordingly

### Data Integrity
- **NEVER modify Notion test data** - read-only
- **Latest test is source of truth** - if Test #22 contradicts #21, trust #22
- **Preserve historical context** - show what changed and when
- **Same-build awareness** - audience/time effects vs design changes

### Metric Interpretation
- **Always cite test numbers** (e.g., "Test #21 shows...", not "latest test...")
- **Flag target gaps** - indicate when below targets
- **Highlight reversals** - call out trend changes
- **Cross-reference memory** - "This continues the pattern we identified..."

### Build Context
- **Check build names** before attributing to design
- **Same build = audience effect** - explicitly call out
- **Different build = design change** - suggest ClickUp correlation

### Graceful Degradation
- If Notion MCP not connected: inform user, suggest reconnecting
- If memory unavailable: proceed with fresh analysis, note limitation
- If test page missing metrics: note gap, continue with available data

---

## Notes

### When to Run This Skill
- **Analyzing new EMV test results** after documentation in Notion
- **Investigating metric changes** or trends
- **Preparing for design reviews** or milestone assessments
- **Meta-analysis**: "What questions do we keep asking?" → surface patterns

### Memory Evolution
- **First use**: Baseline analysis, start building context
- **2-3 uses**: Patterns emerge, question tracking begins
- **5+ uses**: Rich context, proactive insights, meta-patterns visible
- **Ongoing**: Institutional knowledge grows, smarter over time

### Related Skills
- `/validation-review` - Evaluates SHQ/BHQ validation roadmap (different focus)
- `/spec-sync` - Syncs design specs from Notion (not playtest data)
- `/roadmap-update` - Updates pod plans (not playtest analysis)

### Performance Notes
- First query: ~5-10 seconds (fetching 5 test pages from Notion)
- Subsequent queries in same session: faster (memory cached)
- Memory read/write: negligible overhead
- No persistent Notion cache - always fresh data

### Future Enhancements
- Automatic ClickUp ticket correlation based on date ranges
- Cohort-specific deep dives (SC, EB, Empire Builder analysis)
- SHQ validation status tracking across tests
- Predictive insights ("Appeal likely to stay flat unless performance fixed")
- Automated weekly summaries ("EMV #22 is out - here's what changed")
