// generated/dashboard_v2/data/reports_data.js
// Index of generated reports for the Dashboard > Reports page.
// Cloudflare Pages doesn't auto-list directories, so this manifest must be regenerated
// when new reports land in generated/reports/. Easy follow-up: add to /production-dashboard.

const REPORTS_DATA = {
  generated_at: "2026-05-04",
  source_dir: "generated/reports/",

  groups: [
    {
      id: "pulse_checks",
      name: "Pulse Checks",
      desc: "Monthly executive check-ins between QVRs (Holly / James audience)",
      cadence: "Monthly",
      reports: [
        { date: "2026-04", title: "Pulse Check — April 2026", path: "../reports/pulse_checks/pulse_check_2026-04.md", html: "../reports/pulse_checks/index.html?report=2026-04" },
        { date: "2026-03", title: "Pulse Check — March 2026", path: "../reports/pulse_checks/pulse_check_2026-03.md", html: "../reports/pulse_checks/index.html?report=2026-03" }
      ]
    },
    {
      id: "qvr_reports",
      name: "QVR Reports",
      desc: "End-of-quarter Validation Reviews with CRAPS decisions",
      cadence: "Quarterly",
      reports: [
        // PLACEHOLDER — populate as quarters close
      ]
    },
    {
      id: "sprint_summaries",
      name: "Sprint Summaries",
      desc: "Sprint task categorization (directly supporting / supportive / not connected)",
      cadence: "Per sprint",
      reports: [
        { date: "2026-03", title: "Xenial Xeruses — Sprint Summary", path: "../reports/sprint_summary_xenial_xeruses.md" }
      ]
    },
    {
      id: "risk_evals",
      name: "Risk Evaluations",
      desc: "Targets vs plans vs resources analysis — gap detection across the brain",
      cadence: "Monthly / on-demand",
      reports: [
        { date: "2026-04-07", title: "Risk Evaluation — 2026-04-07", path: "../reports/risk_eval_2026-04-07.md" }
      ]
    },
    {
      id: "channel_digests",
      name: "Channel Digests",
      desc: "Slack channel summaries with action items + decisions captured",
      cadence: "On-demand",
      reports: [
        { date: "2026-03-24", title: "Channel Digest — 2026-03-24", path: "../reports/channel_digest_2026-03-24.md" }
      ]
    },
    {
      id: "spec_syncs",
      name: "Spec Syncs",
      desc: "Notion ↔ feature spec sync runs (gaps, conflicts, applied changes)",
      cadence: "On-demand",
      reports: [
        { date: "2026-03-24", title: "Spec Sync — 2026-03-24", path: "../reports/spec_sync_2026-03-24.md" }
      ]
    }
  ]
};
