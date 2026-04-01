# Working With LLMs: Practical Lessons From the Trenches

---

## Opening

**You're already behind if you're not experimenting.**

LLMs aren't "smart search." They're reasoning engines — and how you fuel them determines what you get out.

---

## 1. Not All Models Are Created Equal

Think speed/cost vs. intelligence:

- **Frontier** (Opus, GPT-4o, Gemini Ultra) — Deep reasoning, complex tasks. Expensive. Slow.
- **Mid-tier** (Sonnet, 4o-mini) — 80% of the capability at 20% of the cost. The workhorses.
- **Fast** (Haiku, Flash, small open-source) — Classification, extraction, summarization. Pennies.

**The mistake everyone makes:** Picking one model for everything. That's like using a forklift to commute. Summarizing a Slack channel? Use Haiku. Comparing a 15-feature roadmap against staffing capacity? You want a frontier model.

---

## 2. Context Is King

**The quality of output is directly proportional to the quality of context you give it.** People blame the model when the real problem is what they fed it.

- **Be explicit about authority.** "If documents conflict, product_targets.md wins."
- **Establish reading order.** Don't assume the model knows which file matters most.
- **Reference, don't duplicate.** Every duplicate is a potential contradiction.
- **Keep context fresh.** Stale context creates confident wrong answers.
- **Control the noise.** More context isn't always better — irrelevant context dilutes the signal.

---

## 3. The RAG Pattern: Bring Your Own Data

**Retrieval-Augmented Generation**: Fetch your data at query time and inject it into the prompt. Models don't know your internal docs, your team's decisions, or your project's current state. RAG bridges that gap.

The real power comes when you combine retrieved context with **structured instructions** — reusable prompts that tell the model exactly how to use the data.

**Tips:**
- Curate, don't dump. 20 organized markdown files beat 10,000 unstructured docs in a vector DB.
- Structure for LLMs: markdown with clear headers, tables, IDs. Not PDFs.
- Separate sources of truth from generated views. Human-authored = authoritative. AI-generated = disposable.

---

## 4. The Trade-offs: Speed, Cost, Intelligence

Pick two. The third suffers. Always.

**Don't ask "which model is best?" Ask: "What's the cheapest model that can do THIS task reliably?"** Then reserve your expensive budget for tasks that actually need it.

Smart systems route — a small model classifies the request, then sends simple questions to Haiku, code review to Sonnet, and complex analysis to Opus.

Hidden costs beyond token price: latency kills interactive workflows, cheap models fail on edge cases, and engineering around limitations costs developer time.

---

## 5. Future-Proofing: Agents and Tool Use

Models are becoming **agents** — not just answering questions, but taking actions. An LLM with tools goes from advisor to operator: it can query databases, call APIs, read and edit files, execute plans.

**Critical principle: Human-in-the-loop.** Agents should propose, not execute blindly.

**Future-proof checklist:**
- Separate data from prompts — models change, your knowledge base shouldn't be coupled to one
- Build skills, not monoliths — small composable prompts, each doing one thing well
- Version everything — prompts, data, outputs. Git is your friend
- Design for model-agnosticism — don't depend on one provider

---

## Closing

1. **The Landscape** — Match model to task. Don't use a forklift to commute.
2. **Context Is King** — Invest in context quality before blaming the model.
3. **RAG** — Your data + structured workflows = real leverage.
4. **Trade-offs** — Be intentional about speed/cost/intelligence. Route, don't default.
5. **Future-Proofing** — Build modular, versioned, model-agnostic systems.

**The meta-lesson:** The teams that win with AI aren't the ones with the most sophisticated models. They're the ones with the **best-organized data** and the **clearest processes**.

---

## Appendix: Glossary

| Term | Definition |
|------|-----------|
| **LLM** | Large Language Model — AI trained on text to generate/reason about text |
| **Token** | A chunk of text (~4 characters). Models charge per token. |
| **Context window** | Max text a model can "see" at once (128K-200K tokens for frontier models) |
| **RAG** | Retrieval-Augmented Generation — fetching relevant data to include in the prompt |
| **Agent** | An LLM that can plan, use tools, and take actions |
| **MCP** | Model Context Protocol — standardized way for AI to connect to external tools and data |
| **Hallucination** | When a model generates plausible but factually incorrect content |
