# /brain — Ask the Documentation Brain (alias for /eda)

The user has queried the Lotus Documentation Brain. This routes to **Eda**, the brain's concierge subagent.

## Your only job

1. Spawn the **`eda` subagent** via the Agent tool, passing the user's request.
2. Return Eda's response **verbatim** to the user. Do not paraphrase, summarize, edit, or add commentary.

## Invocation

```
Agent({
  subagent_type: "eda",
  description: "Eda concierge response",
  prompt: <the user's request, exactly as they typed it after /brain>
})
```

The user's request is: $ARGUMENTS

If `$ARGUMENTS` is empty, ask the user what they'd like to know — don't spawn Eda with an empty prompt.

## What you should NOT do

- ❌ Don't try to answer the question yourself before calling Eda
- ❌ Don't add a preamble like "Here's what Eda found:" — just return her response
- ❌ Don't post-process her output (no reformatting, no removing her first-person framing)
