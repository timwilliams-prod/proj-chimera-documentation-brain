// generated/dashboard_v2/data/priorities_data.js
// Per-pod summaries for the Priorities section.
// SOURCED FROM: planning/pods/{pod}/features.md and planning/pods/{pod}/milestone_mms.md
// EDIT FLOW (v2 prototype): edits are saved to localStorage. In a future session
// these will be wired through Cloudflare Pages Functions to commit back to the
// underlying .md files via the GitHub App. See WALKTHROUGH.md.
//
// To regenerate: read each pod's features.md (top of file, ranked list with status)
// and milestone_mms.md (Checkpoint Goals + Sprint Allocation). Keep summaries short
// and human-readable — these are the at-a-glance views for leadership.

const PRIORITIES_DATA = {
  generated_at: "2026-05-04",
  current_milestone: "Multiplayer & Meta (M&Ms)",
  current_milestone_end: "2026-06-23",
  current_sprint: "Abra 28",

  pods: [
    {
      id: "empire",
      name: "Empire",
      color_var: "--pod-empire",
      pod_lead: "Diana Vasilescu",
      producer: "Brann Livesay",
      eng_lead: "Dan Dupuis",
      source_features: "planning/pods/empire/features.md",
      source_milestone: "planning/pods/empire/milestone_mms.md",
      milestone_summary: "Empire is mid-flight on World Map Experience (3-sprint sub-feature ladder S28-S30) with Henrique as sole client engineer. Tutorial Node Migration is parked entirely as of S28 — pending revisit at next milestone planning. Territory Map VS deferred to S31. UX continuity is the top risk: Yura goes on maternity leave 5/11; Diana absorbs UX for WME #2b and #2c.",
      milestone_status: "in_progress",
      checkpoints: [
        { name: "M&M CP1 (ends 4/27)", status: "complete", note: "WME UX exploration complete; Tutorial Migration parked (de-risked)" },
        { name: "M&M CP2 (4/28-5/25)", status: "in_progress", note: "WME #2a & #2b eng kickoff; Yura UX handoff before 5/11" },
        { name: "M&M CP3 (5/26-6/22)", status: "not_started", note: "WME complete; Territory Map eng underway" }
      ],
      features: [
        { rank: 1, name: "Narrative and Tutorial Tooling", milestone: "M&Ms", sprints: "S26-S27", status: "parked", note: "Tutorial Node Migration parked entirely as of S28 — revisit at next milestone planning" },
        { rank: 2, name: "World Map Experience", milestone: "M&Ms", sprints: "S28-S30", status: "in_progress", note: "Eng kickoff S28 (WME multiple WM nodes per territory). SHQ4-3, SHQ4-4." },
        { rank: 3, name: "Territory Map Vertical Slice", milestone: "M&Ms", sprints: "S31-S32", status: "not_started", note: "Two map layers feel connected; deferred to S31. SHQ3-1, SHQ3-2." },
        { rank: 4, name: "Governors", milestone: "M&C", sprints: "3", status: "in_progress", note: "Long-term goal vector within Empire. SHQ3-7." },
        { rank: 5, name: "WM Building Upgrades", milestone: "M&C", sprints: "1", status: "not_started", note: "World map supports empire investment visibility" },
        { rank: 6, name: "World Map Vertical Slice", milestone: "M&C", sprints: "~1", status: "not_started", note: "Lighter due to previous WME work" },
        { rank: 8, name: "Conquest Guide Full Screen", milestone: "M&C", sprints: "2", status: "not_started", note: "Supporting conquest territory/world maps & live ops maps" },
        { rank: 9, name: "Experience Iterations", milestone: "M&C", sprints: "1", status: "not_started", note: "Barrier & story shard experience iterations" }
      ]
    },

    {
      id: "metagame",
      name: "Metagame",
      color_var: "--pod-metagame",
      pod_lead: "Leonard Perez",
      producer: "Tim Williams",
      eng_lead: "Dan Dupuis",
      source_features: "planning/pods/metagame/features.md",
      source_milestone: "planning/pods/metagame/milestone_mms.md",
      milestone_summary: "Metagame is heads-down on UI Foundation (must-have) running across the milestone. Active sprint also covers the dungeon QA verify and a zero crit chance bug. M&C lookahead is dense (9 small features) — early scoping conversations now will keep the M&C ramp from turning chaotic.",
      milestone_status: "in_progress",
      checkpoints: [
        { name: "M&M CP1", status: "complete", note: "UI Foundation kickoff" },
        { name: "M&M CP2", status: "in_progress", note: "Active in S28: dungeon QA + crit chance fix" },
        { name: "M&M CP3", status: "not_started", note: "UI Foundation polish" }
      ],
      features: [
        { rank: 1, name: "UI Foundation", milestone: "M&Ms", sprints: "—", status: "in_progress", note: "Must-have for milestone" },
        { rank: 2, name: "Crit Chance Bug Fix (CHI-36765)", milestone: "M&Ms", sprints: "S28", status: "in_progress", note: "Active in Abra 28" },
        { rank: 3, name: "Dungeon QA Verify (CHI-36652)", milestone: "M&Ms", sprints: "S28", status: "in_progress", note: "QA verification in flight" }
      ]
    },

    {
      id: "battle",
      name: "Battle",
      color_var: "--pod-battle",
      pod_lead: "Lincoln Li",
      producer: "Thorben Novais",
      eng_lead: "Jota Oliveira",
      source_features: "planning/pods/battle/features.md",
      source_milestone: "planning/pods/battle/milestone_mms.md",
      milestone_summary: "Battle HUD Beta Overhaul is the gating must-have — Sprint 1 needs ClickUp scaffolding (currently 0 tasks in S28). 6 Starter Heroes track is in-flight on art side, design needs to keep pace. Battle pod absorbed several artists post-Art-Pod closure (Vinod, Ben, Felipe, Tony, Vini + 2 VFX); cross-pod art direction continues under Kevin Griffith.",
      milestone_status: "in_progress",
      checkpoints: [
        { name: "M&M CP1", status: "complete", note: "Battle HUD design exploration" },
        { name: "M&M CP2", status: "in_progress", note: "Battle HUD Sprint 1 — needs ClickUp scaffolding" },
        { name: "M&M CP3", status: "not_started", note: "Battle HUD Sprint 2 + heroes pipeline review" }
      ],
      features: [
        { rank: 1, name: "Battle HUD Beta Overhaul", milestone: "M&Ms", sprints: "—", status: "in_progress", note: "Must-have. SHQ4-1." },
        { rank: 2, name: "6 Starter Heroes — Designed and Arted", milestone: "M&Ms", sprints: "—", status: "in_progress", note: "Must-have (re-podded from Art Pod 2026-04-13)" }
      ]
    },

    {
      id: "social-dynamics",
      name: "Social Dynamics",
      color_var: "--pod-social",
      pod_lead: "Paul Flores",
      producer: "Tim Williams",
      eng_lead: "Derek Gallant",
      source_features: "planning/pods/social_dynamics/features.md",
      source_milestone: "planning/pods/social_dynamics/milestone_mms.md",
      milestone_summary: "Multiplayer Foundation is the must-have — MM2 Sprint A needs ClickUp scaffolding. Social Dynamics has the cleanest must-have/sprint-plan alignment but execution will hinge on whether MM2 work can land before Beta Launch Prep window opens 6/24.",
      milestone_status: "in_progress",
      checkpoints: [
        { name: "M&M CP1", status: "complete", note: "MM2 design alignment" },
        { name: "M&M CP2", status: "in_progress", note: "MM2 Sprint A — needs ClickUp scaffolding" },
        { name: "M&M CP3", status: "not_started", note: "MM2 Sprint B + playtest readiness" }
      ],
      features: [
        { rank: 1, name: "Multiplayer Foundation Complete", milestone: "M&Ms", sprints: "—", status: "in_progress", note: "Must-have" }
      ]
    },

    {
      id: "dozer",
      name: "Dozer",
      color_var: "--pod-dozer",
      pod_lead: "—",
      producer: "—",
      eng_lead: "Derek Gallant",
      source_features: "planning/pods/dozer/features.md",
      source_milestone: "planning/pods/dozer/milestone_mms.md",
      milestone_summary: "Dozer is balancing two must-haves: Optimisation in Prep for Beta and Audio Tooling Foundation. Both are dependency-rich and span the milestone. Tech Debt backlog is owned here (Engineering Leads) — see backlog below.",
      milestone_status: "in_progress",
      checkpoints: [
        { name: "M&M CP1", status: "complete", note: "Optimisation profile baseline" },
        { name: "M&M CP2", status: "in_progress", note: "Audio Tooling kickoff; Optimisation continues" },
        { name: "M&M CP3", status: "not_started", note: "Beta-readiness optimisation pass" }
      ],
      features: [
        { rank: 1, name: "Optimisation in Preparation for Beta", milestone: "M&Ms", sprints: "—", status: "in_progress", note: "Must-have" },
        { rank: 2, name: "Audio Tooling Foundation", milestone: "M&Ms", sprints: "—", status: "not_started", note: "Must-have" }
      ],
      tech_debt: {
        source: "planning/TechnicalDebt.md",
        note: "Tech Debt Backlog lives here as part of Dozer's planning. Items are managed via /tech-debt skill.",
        items: [
          // PLACEHOLDER — regenerate from planning/TechnicalDebt.md on next dashboard refresh
          { id: "TD-PLACEHOLDER", title: "Populate from planning/TechnicalDebt.md", status: "pending", note: "Run /tech-debt report to refresh" }
        ]
      }
    }
  ]
};
