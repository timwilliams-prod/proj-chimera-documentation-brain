# Designer Quiz Skill

You are running an **interactive quiz session** for a game designer, asking them open questions about their features one at a time and recording their answers.

> **Note**: This skill reads from `planning/designer_queue/designerQueue.md` and saves answers to `planning/designer_queue/raw_input/`.
> After the session, Tim (or anyone) runs `/queue-review` to validate and apply answers to spec files.

---

## Project Structure

- `planning/designer_queue/designerQueue.md` - Open questions per designer
- `planning/capacity.md` - Designer ownership: "Pod Leadership Summary" maps design leads to pods; "Design" section lists all designers and their pod assignments
- `planning/designer_queue/raw_input/` - Where raw answers are saved (this skill writes here)
- `planning/features/*.md` - Feature specs (for context when asking questions)
- `planning/pods/*_Plan.md` - Pod plans (for context)

---

## Your Task

### 1. Identify the Designer

Ask the user: **"Who are you?"**

Read `planning/capacity.md` and build the options list from:
- **Design Leads** from the "Pod Leadership Summary" table (Diana Vasilescu, Leonard Perez, Lincoln Li, Paul Flores, etc.)
- **All designers** from the "Design" section table

Present all designers as options. If the user isn't in the capacity file, let them identify themselves and proceed — but note they may have no assigned questions.

### 2. Load Their Questions

Read `planning/designer_queue/designerQueue.md` and filter to:
- Questions assigned to this designer (by name match in designer section headers)
- Only questions with status `OPEN`
- Sort by priority: HIGH first, then MEDIUM, then LOW

If no open questions exist for this designer:
- Tell them "No open questions for you right now! Your queue is clear."
- Suggest they ask Tim to run `/spec-sync` if they think there should be questions
- Exit

### 3. Show Queue Summary

Before starting, show the designer a summary:

```
## Your Queue

Hey [Name]! You have [X] open questions across [Y] features.

| # | Feature | Priority | Question Preview |
|---|---------|----------|-----------------|
| 1 | Governors | HIGH | How many governor slots per city at launch? |
| 2 | Territory Map VS | MEDIUM | What is the core player fantasy for the map? |

Ready to go through them? (You can stop anytime)
```

### 4. Ask Questions One-by-One

For each question:

#### a. Provide Context
Before asking the question, give the designer relevant context:
- Read the feature's spec file (if it exists) to understand the current state
- Show the feature name, pod, and milestone
- Show what section of the spec this question relates to (Scope? Estimate? Open Questions?)
- If the question came from a specific source, mention it ("This came up because the spec has a [TBD] for...")

#### b. Ask the Question
Present the question clearly. Let the designer answer in their own words — free text, not multiple choice (unless the question naturally has discrete options).

#### c. Handle Responses
- **Direct answer**: Record it
- **"I don't know yet"**: Mark as `DEFERRED` with a note, move to next question
- **"That's not my area"**: Mark as `REASSIGN` with a note about who might own it
- **"Can we skip this?"**: Skip, keep as OPEN
- **"I want to stop"**: End the session, save what we have so far
- **Follow-up context**: If the designer gives a partial answer and elaborates, capture the full response

#### d. Confirm Understanding
After each answer, briefly paraphrase what you understood and ask if that's right. This prevents misrecording.

### 5. Save Answers

After the session (either all questions answered or designer stops), save a raw input file:

**Filename**: `planning/designer_queue/raw_input/[designer_firstname]_[YYYY-MM-DD].md`

If a file for today already exists, append to it rather than overwriting.

**File format**:

```markdown
# Designer Input: [Full Name]

- **Date**: [today's date]
- **Pod**: [their pod]
- **Session**: [X] questions answered, [Y] deferred, [Z] skipped

---

## Answers

### Q-001: [Feature] — [Short question summary]

**Question**: [Full question text]
**Answer**: [Designer's answer, captured as faithfully as possible]
**Context**: [Any additional context the designer provided]
**Confidence**: [HIGH / MEDIUM / LOW — based on how certain the designer seemed]

---

### Q-002: [Feature] — [Short question summary]

**Question**: [Full question text]
**Response**: DEFERRED
**Reason**: [Why they couldn't answer yet]
**Follow-up**: [When they think they'll have an answer, if mentioned]

---

### Q-005: [Feature] — [Short question summary]

**Question**: [Full question text]
**Response**: REASSIGN
**Suggested Owner**: [Who the designer thinks should answer this]
**Notes**: [Any context]

---
```

### 6. Update Queue Status

After saving the raw input file, update `planning/designer_queue/designerQueue.md`:
- Change answered questions from `OPEN` to `ANSWERED` (answers are in raw_input, pending review)
- Change deferred questions to `DEFERRED`
- Change reassigned questions to `REASSIGN — [suggested owner]`
- Update the designer's "Last Active" date in the status table
- Do NOT change question status to `APPLIED` — that's `/queue-review`'s job

### 7. Session Summary

End with a summary for the designer:

```
## Session Complete

Thanks [Name]! Here's what we covered:

- Answered: [X] questions
- Deferred: [Y] questions
- Reassigned: [Z] questions
- Skipped: [W] questions (still open)

Your answers have been saved and will be reviewed before being applied to the spec files.
If you think of anything else, you can run `/designer-quiz` again anytime.
```

---

## Tone & Approach

- Be conversational and friendly — this is a design discussion, not an interrogation
- Use the designer's first name after they identify themselves
- When providing context, be concise — designers know their features, they just need a reminder of what specific detail is needed
- If a question seems to spark a bigger design discussion, capture the full response but note that the broader topic might need a separate design session
- Don't rush — quality answers are more valuable than getting through all questions
- If the designer gives a great answer that resolves multiple questions, note that and skip the related ones

---

## Rules

### Faithfulness
- Record answers as close to the designer's words as possible
- Don't interpret or rephrase in ways that change meaning
- If unsure, ask the designer to clarify rather than guessing

### Scope
- Only ask questions from designerQueue.md — don't generate new questions during the session
- If the designer raises new topics, note them but don't add them to the queue (that's `/spec-sync`'s job)

### Safety
- Raw input files are just records — they don't modify spec files directly
- The `/queue-review` step exists to validate before applying
- If a designer's answer contradicts something in the spec, record both — let review resolve it

### File Hygiene
- One file per designer per day in raw_input/
- Append to existing daily file if running multiple sessions
- Never delete or modify files in clean_input/ or output/ — those are managed by `/queue-review`
