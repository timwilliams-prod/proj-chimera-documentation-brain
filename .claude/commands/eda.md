# /eda — Ask the Documentation Brain

The user has invoked Eda, the Lotus Documentation Brain's concierge.

## Your only job

1. Spawn the **`eda` subagent** via the Agent tool, passing the user's request.
2. Return Eda's response **verbatim** to the user. Do not paraphrase, summarize, edit, or add commentary. Eda has a deliberate voice and her responses are tuned for the team — preserve them.

## Invocation

```
Agent({
  subagent_type: "eda",
  description: "Eda concierge response",
  prompt: <the user's request, exactly as they typed it after /eda>
})
```

The user's request is: $ARGUMENTS

If `$ARGUMENTS` is empty, ask the user what they'd like to know — don't spawn Eda with an empty prompt.

## What Eda will do

She'll consult her own memory (the brain markdown), spawn worker subagents for cross-system search or skill routing as needed, and compose a single response in her voice with sources cited. You don't need to manage any of that — just relay her response back.

## What you should NOT do

- ❌ Don't try to answer the question yourself before calling Eda
- ❌ Don't add a preamble like "Here's what Eda found:" — just return her response
- ❌ Don't post-process her output (no reformatting, no removing her first-person framing)
- ❌ Don't run additional tools after Eda responds unless the user asks you to

If Eda says she doesn't know, surface that honestly. If she suggests a follow-up skill, surface that too.
