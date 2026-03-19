# Global Rules

Last Updated: 2026-03-18

## Purpose
Cross-project constraints, standards, and principles that apply to all pods and features.

## Pods

| Pod | Prefix | Focus |
|-----|--------|-------|
| Empire | EMP | [TBD - e.g., base building, resource management] |
| Metagame | META | [TBD - e.g., progression, economy, meta-loop] |
| Battle | BAT | [TBD - e.g., combat, PvP, PvE encounters] |
| Social Dynamics | SOC | [TBD - e.g., alliances, social features, trading] |
| Dozer | DOZ | [TBD - e.g., infrastructure, tooling, analytics] |

## Technical Standards

### Code Quality
- **Test Coverage**: Minimum 70% for new features
- **Code Review**: Required for all PRs, minimum 1 approval
- **Documentation**: All public APIs must have inline docs

### Architecture Principles
- **Modularity**: Features should be pod-isolated where possible
- **Performance**: Target 60fps on minimum spec hardware
- **Scalability**: Design for 10x current user load

### Security
- **Authentication**: All API endpoints must validate auth tokens
- **Data Privacy**: PII must be encrypted at rest
- **Audit Logging**: All state changes logged with user/timestamp

## Process Standards

### Development Workflow
- **Branch Strategy**: feature/POD-XXX from main
- **Commit Messages**: Conventional commits format
- **Deployment**: Staging → QA approval → Production

### Communication
- **Standups**: Daily per pod, async updates in Slack
- **Planning**: Sprint planning every 2 weeks
- **Retros**: End of sprint, action items tracked

### Validation Process
- **Winning Hypotheses**: 4x top-level product hypotheses (see `planning/ValidationRoadmap.md`)
- **BHQs**: Broken down into testable Big Hairy Questions per hypothesis
- **SHQs**: 3-5 Small Hairy Questions defined per milestone
- **Sprint Evaluation**: Confidence levels reviewed every sprint via `/validation-review`
- **Milestone Review**: Full hypothesis assessment at each milestone boundary

## Business Constraints

### Timeline
- **Release Cadence**: Bi-weekly production deployments
- **Feature Freeze**: 3 days before release
- **Hotfix SLA**: Critical bugs fixed within 24h

### Budget
- **Cloud Costs**: Monthly budget $X per pod
- **Third-party Services**: Require approval for new services

## Dependencies & Integrations

### Required Services
- Notion (documentation source)
- ClickUp (task tracking)
- GitHub (version control)
- AWS (infrastructure)

### Integration Points
- All pods must expose health check endpoints
- Events published to central message bus
- Shared authentication service

---

## Notes
- Update this file when cross-project decisions are made
- Pod-specific rules go in pod plan files (`planning/pods/*_Plan.md`)
- Exceptions require architecture team approval
