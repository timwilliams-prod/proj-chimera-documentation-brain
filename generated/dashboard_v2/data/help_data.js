// generated/dashboard_v2/data/help_data.js
// Static content for the Help section: useful links, skills list, AI tips, glossary.
// Update by hand — these are intentionally human-curated, not auto-generated.

const HELP_DATA = {

  useful_links: {
    note: "PLACEHOLDER — fill these in with the real Fortis-internal AI repos / Notion pages.",
    groups: [
      {
        name: "Fortis AI repos (placeholder)",
        links: [
          { title: "[Replace] Fortis AI shared library", url: "https://github.com/fortis-org/REPLACE-ME", desc: "What it is, when to use it" },
          { title: "[Replace] Internal Claude tools", url: "https://github.com/fortis-org/REPLACE-ME", desc: "" },
          { title: "[Replace] Codex / Cursor templates", url: "https://github.com/fortis-org/REPLACE-ME", desc: "" }
        ]
      },
      {
        name: "Notion pages (placeholder)",
        links: [
          { title: "[Replace] Fortis AI hub", url: "https://www.notion.so/REPLACE-ME", desc: "" },
          { title: "[Replace] Prompting best practices", url: "https://www.notion.so/REPLACE-ME", desc: "" }
        ]
      },
      {
        name: "External (real)",
        links: [
          { title: "Anthropic — Claude Code docs", url: "https://docs.claude.com/en/docs/claude-code/overview", desc: "Official Claude Code documentation" },
          { title: "Anthropic — Claude API docs", url: "https://docs.claude.com/en/api/getting-started", desc: "API reference" },
          { title: "Anthropic — Prompt engineering", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview", desc: "Prompt design guidance" },
          { title: "Cloudflare Pages Functions", url: "https://developers.cloudflare.com/pages/functions/", desc: "Serverless backend for the portal (used for Save buttons)" }
        ]
      }
    ]
  },

  skills: {
    note: "All slash commands available in this brain. See .claude/commands/ for source.",
    groups: [
      {
        name: "Roadmap / Planning",
        items: [
          { cmd: "/roadmap-update", desc: "Update pod features and regenerate generated/roadmap.md", notes: "Run after pod plan changes." },
          { cmd: "/roadmap-options", desc: "Generate N alternative roadmap scenarios for comparison", notes: "Disposable output — overwritten on rerun." },
          { cmd: "/roadmap-sheet", desc: "Generate Apps Script for the Lotus Productionomicon Google Sheet", notes: "Paste output into Apps Script editor." },
          { cmd: "/risk-evaluation", desc: "Compare targets vs plans vs resources; flag gaps", notes: "Saves to generated/reports/." },
          { cmd: "/generate_ms_plan", desc: "Single-milestone focused plan (timeline, must-haves, SHQs, per-pod ops)", notes: "Output: generated/milestone_plans/." }
        ]
      },
      {
        name: "Sprint",
        items: [
          { cmd: "/sprint-plan", desc: "Sprint planning (Preview mid-sprint, Kickoff at sprint start)", notes: "Kickoff scaffolds ClickUp tasks." },
          { cmd: "/sprint-risks", desc: "Interactive sprint risk triage", notes: "Surfaces at-risk tasks; outputs copy/paste summary." },
          { cmd: "/sprint-summary", desc: "Categorize sprint tickets by milestone alignment", notes: "Saves to generated/reports/." }
        ]
      },
      {
        name: "Validation",
        items: [
          { cmd: "/validation-review", desc: "Sprint/milestone evaluation of the Validation Roadmap", notes: "Pulls SHQ statuses from ClickUp." }
        ]
      },
      {
        name: "Spec / Feature",
        items: [
          { cmd: "/spec-sync", desc: "Sync feature_registry + Notion to local feature specs", notes: "Populates designer queue with conflicts/gaps." },
          { cmd: "/doc-author", desc: "AI-assisted feature spec authoring (create or expand mode)", notes: "Interactive interview." },
          { cmd: "/designer-quiz", desc: "Interactive Q&A for designers (filtered by ownership)", notes: "Saves answers to designer_queue/raw_input/." },
          { cmd: "/queue-review", desc: "Validate raw designer answers and apply to spec files", notes: "Logs applied changes." },
          { cmd: "/feature-review-prep", desc: "Single-feature design review briefing", notes: "Output: generated/design_briefs/." }
        ]
      },
      {
        name: "Engineering",
        items: [
          { cmd: "/tech-debt", desc: "Two modes: Report (debt vs features) and Editor (add/update/retire items)", notes: "Owned by Engineering Leads." }
        ]
      },
      {
        name: "Reporting / Cadence",
        items: [
          { cmd: "/generatePulseCheckReport", desc: "Monthly Pulse Check (Holly/James audience)", notes: "Output: generated/reports/pulse_checks/." },
          { cmd: "/generate_qvr_report", desc: "End-of-quarter QVR with CRAPS decision and next quarter goal proposals", notes: "Output: generated/reports/qvr_reports/." },
          { cmd: "/channel-digest", desc: "Read Slack channels; generate exec summary + ClickUp action items + doc misalignments", notes: "Cross-references project docs." }
        ]
      },
      {
        name: "Production Dashboard",
        items: [
          { cmd: "/production-dashboard", desc: "Regenerate generated/dashboard/dashboard_data.js", notes: "Run when planning files or sprint state change." }
        ]
      },
      {
        name: "Meta",
        items: [
          { cmd: "/new-skill", desc: "Guide creation of new skills with architecture guardrails", notes: "Use this before authoring a new slash command." }
        ]
      }
    ]
  },

  ai_help: {
    note: "Practical tips for getting the most out of Claude Code, Codex, and AI workflows. Curate as you learn.",
    sections: [
      {
        title: "Claude Code basics",
        items: [
          "Use /clear between unrelated tasks — preserves context budget for the work that matters.",
          "Press / to see all available slash commands. Custom commands live in .claude/commands/.",
          "Settings live at .claude/settings.json (per-project) and ~/.claude/settings.json (user). Use the /update-config skill to make changes safely.",
          "Permissions: anything in deny[] never runs; anything in allow[] never asks. Build the allow list as you go."
        ]
      },
      {
        title: "Working with the brain",
        items: [
          "Always read project-charter.md first in a new session. It tells the LLM what's authoritative.",
          "Reference SHQs/features by ID (SHQ3-7, TD-001) instead of pasting full text — keeps prompts short.",
          "If a planning file is DRAFT or STALE, the LLM should caveat it. Promote to APPROVED only after owner review."
        ]
      },
      {
        title: "Picking the right model",
        items: [
          "Opus 4.7 — heavy reasoning, big refactors, complex spec authoring. Slower / more expensive.",
          "Sonnet 4.6 — most production work. Best speed/quality tradeoff.",
          "Haiku 4.5 — fast batch jobs, simple lookups, summarization at scale."
        ]
      },
      {
        title: "Prompting that works",
        items: [
          "State the goal AND the constraint. 'Refactor X to use Y, but don't touch the public API.'",
          "Show the LLM the expected output format with a tiny example — works far better than describing it.",
          "When debugging, paste the failing test output verbatim. Don't paraphrase.",
          "Tell the LLM what NOT to do as often as what TO do — saves a round trip when you've ruled something out."
        ]
      },
      {
        title: "Common pitfalls",
        items: [
          "Don't let the LLM invent file paths, function names, or APIs. Always verify with a Read or grep.",
          "Trust but verify: an agent's summary describes what it intended to do, not necessarily what it did.",
          "Watch token spend — repeated full-file reads in a long session add up. Use Grep/Glob to scope.",
          "Memory and prompt context drift over time. If a memory contradicts the code, trust the code."
        ]
      }
    ]
  },

  glossary: [
    { term: "WH",   def: "Winning Hypothesis. Top-level product bet (3 in Lotus: Battle, Empire, Monetization)." },
    { term: "BHQ",  def: "Big Hypothesis Question. Spans multiple pods/milestones; rolls up to a WH." },
    { term: "SHQ",  def: "Sub-Hypothesis Question. Specific, testable in a milestone via concrete features. Numbered SHQ[milestone]-[seq]." },
    { term: "M&Ms", def: "Multiplayer & Meta milestone. Ends Jun 23, 2026. ~7 sprints." },
    { term: "M&C",  def: "Monetization & Conversion milestone. Ends Oct 13, 2026. ~6 sprints." },
    { term: "WME",  def: "World Map Experience. Empire feature spanning S28-S30." },
    { term: "TMVS", def: "Territory Map Vertical Slice. Empire feature." },
    { term: "FTUE", def: "First-Time User Experience." },
    { term: "QVR",  def: "Quarterly Validation Review. End-of-quarter strategic check, drives CRAPS decisions." },
    { term: "CRAPS",def: "Continue / Reset / Advance / Pivot / Sunset — decision framework used at QVRs and Pulse Checks." },
    { term: "Pulse Check", def: "Monthly check-in between QVRs. Generated by /generatePulseCheckReport." },
    { term: "DRAFT / APPROVED / STALE", def: "Doc Status field on every planning/ file. LLMs caveat DRAFT and warn on STALE before citing." },
    { term: "MCP",  def: "Model Context Protocol. How Claude Code talks to external tools (Notion, ClickUp, Slack, Google Workspace)." }
  ]
};
