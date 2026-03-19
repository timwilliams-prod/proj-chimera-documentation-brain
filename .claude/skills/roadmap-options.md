# Roadmap Options Skill

You are helping the team explore **alternative roadmap scenarios** - generating multiple options to compare before committing to one.

> **This is NOT for updating the canonical roadmap.** Use `/roadmap-update` for that.
> This skill generates throwaway planning artifacts for discussion. Once a direction is chosen, use `/roadmap-update` to make it official.

---

## Project Structure

Read these to understand current constraints:
- `planning/product_targets.md` - Milestone must-haves and success criteria
- `planning/pods/*_Plan.md` - Current pod priorities (the baseline)
- `planning/features/*.md` - Feature estimates, discipline needs, dependencies
- `planning/capacity.md` - Staffing by discipline and milestone
- `planning/dependency_map.md` - What blocks what
- `planning/ValidationRoadmap.md` - Which SHQs need feature work
- `generated/roadmap.md` - Current canonical roadmap (the starting point)

---

## Your Task

### 1. Read Current State
- Read ALL pod plans to understand the baseline
- Read `planning/product_targets.md` for constraints (must-haves are non-negotiable unless user says otherwise)
- Read `planning/capacity.md` for staffing constraints
- Read `planning/dependency_map.md` for sequencing constraints
- Read relevant `planning/features/*.md` for estimates

### 2. Understand the Question
Ask the user what they're trying to explore. Common scenarios:

- **Priority reordering**: "What if Empire does Territory Map before Governors?"
- **Capacity reallocation**: "What if we move an engineer from Empire to Battle?"
- **Scope trade-offs**: "What if we cut feature X to fit feature Y?"
- **Timeline exploration**: "Can we hit Beta Prep with these features?"
- **Pod restructuring**: "What if Social Dynamics features move to Metagame?"
- **Open-ended**: "Give me 3 options for how M&Ms could go" (you propose the variations)

Clarify:
- How many options? (default: 3)
- What's fixed vs flexible? (must-haves from product_targets.md are fixed by default)
- Any specific constraints or preferences?

### 3. Generate Options

For each option, produce:

#### a. Option Summary (2-4 sentences)
What's the core idea? What trade-off does this option make? Why would you pick this one?

#### b. Pod Feature Tables
Show what each pod builds in the next milestone under this option. Only include pods that differ from baseline, plus a note for unchanged pods.

#### c. High-Level Gantt
A Mermaid Gantt showing the option's timeline. Keep it focused on the milestone(s) being explored - don't repeat the full multi-year roadmap unless relevant.

#### d. Trade-offs
- What do you gain?
- What do you lose or risk?
- Capacity impact (over/under allocation)
- Validation impact (which SHQs are helped/hurt)
- Target impact (does this still hit product_targets.md must-haves?)

### 4. Comparison Summary

After all options, provide a side-by-side comparison:

```markdown
## Option Comparison

| Dimension | Option 1: [Name] | Option 2: [Name] | Option 3: [Name] |
|-----------|------------------|------------------|------------------|
| Core idea | [1 sentence] | [1 sentence] | [1 sentence] |
| Key win | [What you gain] | [What you gain] | [What you gain] |
| Key risk | [What you lose] | [What you lose] | [What you lose] |
| Capacity fit | [Over/under/fits] | [Over/under/fits] | [Over/under/fits] |
| Hits must-haves? | Yes / No: [gap] | Yes / No: [gap] | Yes / No: [gap] |
| Validation coverage | [SHQs covered] | [SHQs covered] | [SHQs covered] |
| Recommendation | [When to pick this] | [When to pick this] | [When to pick this] |
```

### 5. Output Location

Write options to `generated/roadmap_options.md`. This file is **disposable** - it gets overwritten each time this skill runs.

Include a header noting:
```markdown
> **These are draft options for discussion.** None of these are the active roadmap.
> Once a direction is chosen, apply it with `/roadmap-update`.
> Generated: [date]
```

### 6. Next Steps

After presenting options, ask:
- "Want to go with one of these? I can apply it via `/roadmap-update`."
- "Want me to tweak any option?"
- "Want to explore a different axis entirely?"

---

## Output Format

The generated file should follow this structure:

```markdown
# Roadmap Options

> **These are draft options for discussion.** None of these are the active roadmap.
> Once a direction is chosen, apply it with `/roadmap-update`.
> Generated: [date]

## Context

[1-2 sentences on what question we're exploring and why]

**Fixed constraints**:
- [Must-haves from product_targets.md]
- [Capacity limits]
- [Hard dependencies]

---

## Option 1: [Descriptive Name]

**Summary**: [2-4 sentences]

### Features by Pod (M&Ms)

| Pod | Feature | Estimate | Notes |
|-----|---------|----------|-------|
| ... | ... | ... | ... |

### Timeline

[Mermaid Gantt - focused on the milestone(s) in question]

### Trade-offs

| Dimension | Assessment |
|-----------|------------|
| Gains | [What you get] |
| Risks | [What you lose] |
| Capacity | [Fits / X sprints over / X sprints slack] |
| Validation | [SHQs covered / gaps] |
| Must-haves | [All covered / MISSING: X] |

---

## Option 2: [Descriptive Name]
[Same structure]

---

## Option 3: [Descriptive Name]
[Same structure]

---

## Comparison

[Side-by-side table]

## Recommendation

[Which option and why, or "depends on X priority"]
```

---

## Rules

### Keep Options Meaningfully Different
Don't generate 3 options that are trivially similar. Each option should represent a genuinely different strategic choice — different priorities, different trade-offs, different bets.

### Respect Hard Constraints (Unless Asked Not To)
- `planning/product_targets.md` must-haves are non-negotiable by default
- Capacity in `planning/capacity.md` is a hard ceiling (people can't be cloned)
- Dependencies in `planning/dependency_map.md` can't be ignored
- If an option violates a constraint, flag it clearly

### Stay Practical
- Use real estimates from feature docs, not guesses
- If you need an estimate that doesn't exist, say so and use a range
- Account for staffing risks from `planning/capacity.md` (e.g., Randy/Garrett split)

### Gantt Charts Should Be Scannable
- One Gantt per option, focused on the milestone(s) being explored
- Use the same Mermaid syntax and ID conventions as `/roadmap-update`
- Keep each Gantt to ~15 bars max for readability

### This File Is Disposable
`generated/roadmap_options.md` gets overwritten every time. It's not a historical record.
If the user wants to save a specific set of options, they should rename or copy the file.
