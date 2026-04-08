// generated/dashboard/files_data.js
// Auto-generated file tree for the Files viewer
// Regenerate when files are added/removed
// Generated: 2026-04-08

const FILES_DATA = {
  repo_base: "https://github.com/timwilliams-prod/proj-chimera-documentation-brain/blob/main",
  generated_at: "2026-04-08",

  sections: [
    // ── Planning (Core) ──
    {
      id: "planning",
      name: "Planning",
      desc: "Cross-project planning files — the strategic layer",
      files: [
        { path: "planning/product_targets.md", label: "Product Targets", desc: "Milestone definitions, must-haves, success criteria" },
        { path: "planning/capacity.md", label: "Team Capacity", desc: "Staffing by discipline, pod assignments, known risks" },
        { path: "planning/ValidationPlan.md", label: "Validation Plan", desc: "Winning Hypotheses, BHQs, SHQs — the validation model" },
        { path: "planning/dependency_map.md", label: "Dependency Map", desc: "Cross-pod dependencies and shared resources" },
        { path: "planning/feature_registry.md", label: "Feature Registry", desc: "Feature-to-Notion mapping, spec status tracking" },
        { path: "planning/GlobalRules.md", label: "Global Rules", desc: "Cross-project standards, pods, process" },
        { path: "planning/operating_cadence.md", label: "Operating Cadence", desc: "Sprint/monthly/milestone/quarterly rhythms, staleness rules" },
        { path: "planning/sprint_rules.md", label: "Sprint Rules", desc: "Task scaffolding, discipline flow, naming conventions" },
        { path: "planning/TechnicalDebt.md", label: "Technical Debt", desc: "Active debt ledger, owned by Engineering Leads" },
        { path: "planning/qvr/q1_2026_goals.md", label: "QVR Goals — Q1 2026", desc: "Quarterly goals for Jan-Mar 2026 (closed)" },
        { path: "planning/qvr/q2_2026_goals.md", label: "QVR Goals — Q2 2026", desc: "Quarterly goals for Apr-Jun 2026" }
      ]
    },

    // ── Pod Plans ──
    {
      id: "pods",
      name: "Pod Plans",
      desc: "Per-pod feature priorities, milestone allocations, and validation alignment",
      subsections: [
        {
          name: "Empire",
          pod: "Empire",
          files: [
            { path: "planning/pods/empire/features.md", label: "Features", desc: "Ranked feature backlog" },
            { path: "planning/pods/empire/milestone_mms.md", label: "M&Ms Sprint Plan", desc: "Sprint allocation for M&Ms milestone" },
            { path: "planning/pods/empire/milestone_mc.md", label: "M&C Sprint Plan", desc: "Sprint allocation for M&C milestone" },
            { path: "planning/pods/empire/validation.md", label: "Validation", desc: "BHQ/SHQ alignment" },
            { path: "planning/pods/Empire_Plan.md", label: "Empire Plan (legacy)", desc: "Original pod plan file" }
          ]
        },
        {
          name: "Metagame",
          pod: "Metagame",
          files: [
            { path: "planning/pods/metagame/features.md", label: "Features", desc: "Ranked feature backlog" },
            { path: "planning/pods/metagame/milestone_mms.md", label: "M&Ms Sprint Plan", desc: "Sprint allocation for M&Ms milestone" },
            { path: "planning/pods/metagame/milestone_mc.md", label: "M&C Sprint Plan", desc: "Sprint allocation for M&C milestone" },
            { path: "planning/pods/metagame/validation.md", label: "Validation", desc: "BHQ/SHQ alignment" },
            { path: "planning/pods/Metagame_Plan.md", label: "Metagame Plan (legacy)", desc: "Original pod plan file" }
          ]
        },
        {
          name: "Battle",
          pod: "Battle",
          files: [
            { path: "planning/pods/battle/features.md", label: "Features", desc: "Ranked feature backlog" },
            { path: "planning/pods/battle/milestone_mms.md", label: "M&Ms Sprint Plan", desc: "Sprint allocation for M&Ms milestone" },
            { path: "planning/pods/battle/validation.md", label: "Validation", desc: "BHQ/SHQ alignment" },
            { path: "planning/pods/Battle_Plan.md", label: "Battle Plan (legacy)", desc: "Original pod plan file" }
          ]
        },
        {
          name: "Social Dynamics",
          pod: "Social Dynamics",
          files: [
            { path: "planning/pods/social_dynamics/features.md", label: "Features", desc: "Ranked feature backlog" },
            { path: "planning/pods/social_dynamics/milestone_mms.md", label: "M&Ms Sprint Plan", desc: "Sprint allocation for M&Ms milestone" },
            { path: "planning/pods/social_dynamics/validation.md", label: "Validation", desc: "BHQ/SHQ alignment" },
            { path: "planning/pods/SocialDynamics_Plan.md", label: "Social Dynamics Plan (legacy)", desc: "Original pod plan file" }
          ]
        },
        {
          name: "Dozer",
          pod: "Dozer",
          files: [
            { path: "planning/pods/dozer/features.md", label: "Features", desc: "Ranked feature backlog" },
            { path: "planning/pods/dozer/milestone_mms.md", label: "M&Ms Sprint Plan", desc: "Sprint allocation for M&Ms milestone" },
            { path: "planning/pods/Dozer_Plan.md", label: "Dozer Plan (legacy)", desc: "Original pod plan file" }
          ]
        },
        {
          name: "Art",
          pod: "Art",
          files: [
            { path: "planning/pods/art/features.md", label: "Features", desc: "Ranked feature backlog" },
            { path: "planning/pods/art/milestone_mms.md", label: "M&Ms Sprint Plan", desc: "Sprint allocation for M&Ms milestone" },
            { path: "planning/pods/Art_Plan.md", label: "Art Plan (legacy)", desc: "Original pod plan file" }
          ]
        }
      ]
    },

    // ── Feature Specs ──
    {
      id: "features",
      name: "Feature Specs",
      desc: "Detailed feature specifications — 73 files",
      searchable: true,
      files: [
        { path: "planning/features/academies.md", label: "Academies" },
        { path: "planning/features/achievements.md", label: "Achievements" },
        { path: "planning/features/actor_system.md", label: "Actor System", pod: "Battle" },
        { path: "planning/features/ad_monetization.md", label: "Ad Monetization" },
        { path: "planning/features/barracks.md", label: "Barracks" },
        { path: "planning/features/barrier_story_shard.md", label: "Barrier Story Shard" },
        { path: "planning/features/barriers.md", label: "Barriers" },
        { path: "planning/features/battle_content_pipeline.md", label: "Battle Content Pipeline", pod: "Battle" },
        { path: "planning/features/battle_designing_tools.md", label: "Battle Designing Tools", pod: "Battle" },
        { path: "planning/features/battle_hud.md", label: "Battle HUD", pod: "Battle" },
        { path: "planning/features/battlepass.md", label: "Battle Pass" },
        { path: "planning/features/building_upgrades_wm.md", label: "Building Upgrades (WM)", pod: "Metagame" },
        { path: "planning/features/combat_system.md", label: "Combat System", pod: "Battle" },
        { path: "planning/features/conquest_guide_fs.md", label: "Conquest Guide (FS)" },
        { path: "planning/features/daily_quests.md", label: "Daily Quests" },
        { path: "planning/features/devops.md", label: "DevOps", pod: "Dozer" },
        { path: "planning/features/dungeons.md", label: "Dungeons" },
        { path: "planning/features/empire_summary.md", label: "Empire Summary", pod: "Empire" },
        { path: "planning/features/end_level_reward_screen.md", label: "End Level Reward Screen" },
        { path: "planning/features/gear.md", label: "Gear" },
        { path: "planning/features/governors.md", label: "Governors", pod: "Empire", desc: "Template example spec" },
        { path: "planning/features/growthbook_integration.md", label: "GrowthBook Integration", pod: "Dozer" },
        { path: "planning/features/hero_ability_leveling.md", label: "Hero Ability Leveling" },
        { path: "planning/features/hero_empowering.md", label: "Hero Empowering" },
        { path: "planning/features/hero_info.md", label: "Hero Info" },
        { path: "planning/features/hero_leveling.md", label: "Hero Leveling" },
        { path: "planning/features/hero_list.md", label: "Hero List" },
        { path: "planning/features/hero_ranking_up.md", label: "Hero Ranking Up" },
        { path: "planning/features/hero_summoning.md", label: "Hero Summoning" },
        { path: "planning/features/inbox_admin_comms.md", label: "Inbox / Admin Comms" },
        { path: "planning/features/interstitials.md", label: "Interstitials" },
        { path: "planning/features/live_events.md", label: "Live Events" },
        { path: "planning/features/login_flow_optimization.md", label: "Login Flow Optimization" },
        { path: "planning/features/map_content_final.md", label: "Map Content (Final)", pod: "Empire" },
        { path: "planning/features/map_content_pipeline.md", label: "Map Content Pipeline", pod: "Empire" },
        { path: "planning/features/map_editor.md", label: "Map Editor", pod: "Empire" },
        { path: "planning/features/matchmaking.md", label: "Matchmaking", pod: "Social Dynamics" },
        { path: "planning/features/mobile_extractors.md", label: "Mobile Extractors" },
        { path: "planning/features/multiplayer_map.md", label: "Multiplayer Map", pod: "Social Dynamics" },
        { path: "planning/features/narrative_events.md", label: "Narrative Events" },
        { path: "planning/features/notifications.md", label: "Notifications" },
        { path: "planning/features/objectives.md", label: "Objectives" },
        { path: "planning/features/obstacles.md", label: "Obstacles", pod: "Battle" },
        { path: "planning/features/passive_bonus_tiles.md", label: "Passive Bonus Tiles" },
        { path: "planning/features/pathfinding.md", label: "Pathfinding", pod: "Battle" },
        { path: "planning/features/performance_optimization.md", label: "Performance Optimization", pod: "Dozer" },
        { path: "planning/features/player_journey.md", label: "Player Journey" },
        { path: "planning/features/production_dashboard.md", label: "Production Dashboard", desc: "This dashboard's own spec" },
        { path: "planning/features/ravagers_reef.md", label: "Ravager's Reef" },
        { path: "planning/features/resource_generators.md", label: "Resource Generators" },
        { path: "planning/features/scripted_sequences.md", label: "Scripted Sequences" },
        { path: "planning/features/security.md", label: "Security", pod: "Dozer" },
        { path: "planning/features/shop.md", label: "Shop" },
        { path: "planning/features/story_shards.md", label: "Story Shards" },
        { path: "planning/features/territory_map_vs.md", label: "Territory Map VS", pod: "Empire" },
        { path: "planning/features/timed_objectives.md", label: "Timed Objectives" },
        { path: "planning/features/timed_pve_maps.md", label: "Timed PvE Maps" },
        { path: "planning/features/treasure_chests.md", label: "Treasure Chests" },
        { path: "planning/features/troop_recruiting.md", label: "Troop Recruiting" },
        { path: "planning/features/troop_upgrade_tree.md", label: "Troop Upgrade Tree" },
        { path: "planning/features/tutorial_expansion.md", label: "Tutorial Expansion", pod: "Empire" },
        { path: "planning/features/ui_stability_performance.md", label: "UI Stability & Performance", pod: "Dozer" },
        { path: "planning/features/unit_content_pipeline.md", label: "Unit Content Pipeline", pod: "Battle" },
        { path: "planning/features/unit_designing_tools.md", label: "Unit Designing Tools", pod: "Battle" },
        { path: "planning/features/wombo_combo.md", label: "Wombo Combo" },
        { path: "planning/features/world_map_vs.md", label: "World Map VS", pod: "Empire" },
        { path: "planning/features/world_map_zoom_lod.md", label: "World Map Zoom / LOD", pod: "Empire" },
        { path: "planning/features/zeppelin.md", label: "Zeppelin" }
      ]
    },

    // ── Generated ──
    {
      id: "generated",
      name: "Generated Output",
      desc: "Skill-generated views, reports, and plans",
      subsections: [
        {
          name: "Roadmap & Milestones",
          files: [
            { path: "generated/roadmap.md", label: "Feature Roadmap", desc: "Consolidated Gantt + per-pod sections" },
            { path: "generated/milestone_plans/MMs_MilestonePlan.md", label: "M&Ms Milestone Plan", desc: "Sprint-by-sprint milestone breakdown" }
          ]
        },
        {
          name: "Sprint Plans",
          files: [
            { path: "generated/sprint_plans/sprint_27_zany_zebras.md", label: "S27 Zany Zebras", desc: "Apr 14-28 (Preview)" },
            { path: "generated/sprint_plans/sprint_26_yodel_yaks.md", label: "S26 Yodel Yaks", desc: "Mar 31 - Apr 14 (Kickoff)" }
          ]
        },
        {
          name: "Reports",
          files: [
            { path: "generated/reports/risk_eval_2026-04-07.md", label: "Risk Evaluation (Apr 7)", desc: "Targets vs plans vs resources" },
            { path: "generated/reports/sprint_summary_xenial_xeruses.md", label: "Sprint Summary: Xenial Xeruses", desc: "S25 sprint summary" },
            { path: "generated/reports/channel_digest_2026-03-24.md", label: "Channel Digest (Mar 24)", desc: "Slack channel summary" },
            { path: "generated/reports/spec_sync_2026-03-24.md", label: "Spec Sync (Mar 24)", desc: "Feature registry sync report" }
          ]
        },
        {
          name: "Pulse Checks",
          files: []
        },
        {
          name: "QVR Reports",
          files: []
        }
      ]
    },

    // ── Project Docs ──
    {
      id: "docs",
      name: "Project Docs",
      desc: "Root-level project documentation",
      files: [
        { path: "project-charter.md", label: "Project Charter", desc: "Authoritative architecture doc — read first" },
        { path: "README.md", label: "README", desc: "Repo overview and setup" },
        { path: "QUICK_START.md", label: "Quick Start", desc: "Getting started guide" },
        { path: "EXAMPLES.md", label: "Examples", desc: "Usage examples" }
      ]
    }
  ]
};
