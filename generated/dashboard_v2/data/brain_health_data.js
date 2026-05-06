// generated/dashboard_v2/data/brain_health_data.js
// Brain Health checks: staleness, file size, consistency.
// Reuses artifact data from DASHBOARD_DATA. Adds size + consistency placeholders
// that should be filled in by an updated /production-dashboard skill.

const BRAIN_HEALTH_DATA = {
  generated_at: "2026-05-04",

  // Staleness comes straight from DASHBOARD_DATA.artifacts (rendered live in app.js).
  // No need to duplicate here.

  // File size warnings — LLMs handle smaller files better.
  // PLACEHOLDER: regenerate by walking planning/ and capturing line counts.
  // Threshold suggestions: WARN >500 lines, ALERT >1000 lines.
  size_warnings: [
    // { file: "planning/ValidationPlan.md", lines: 612, severity: "warn", note: "Approaching the size where LLM context becomes expensive to load." }
  ],

  // Consistency checks across the brain. These are what make the Brain Health
  // page genuinely useful beyond staleness alone.
  // PLACEHOLDER: needs a real cross-file check pass.
  consistency: {
    note: "These checks are scaffolded. Wire them up in /production-dashboard or a dedicated /brain-health skill.",
    checks: [
      { id: "registry_orphans",  label: "Features in pod plans not in feature_registry.md", status: "unchecked", count: null, items: [] },
      { id: "registry_missing",  label: "Features in feature_registry.md without specs",     status: "unchecked", count: null, items: [] },
      { id: "shqs_no_epic",      label: "SHQs without ClickUp Epics",                         status: "unchecked", count: null, items: [] },
      { id: "dead_links",        label: "Markdown links pointing to missing files",           status: "unchecked", count: null, items: [] },
      { id: "doc_status_breakdown", label: "Doc Status counts (APPROVED / DRAFT / STALE)",   status: "unchecked", count: null, items: [] }
    ]
  },

  // Useful aggregate counts — placeholder until a real check pass exists.
  totals: {
    planning_files: null,
    feature_specs: null,
    open_designer_questions: null,
    pods_with_stale_features: null
  }
};
