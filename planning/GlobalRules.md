# Global Rules

Last Updated: 2026-03-19

## Purpose
Cross-project constraints, standards, and principles that apply to all pods and features.

## Pods

| Pod | Prefix | Focus |
|-----|--------|-------|
| Empire | EMP | Maps and Map Content |
| Metagame | META | Meta-loop, progression & economy |
| Battle | BAT | Battles & Units |
| Social Dynamics | SOC | Multiplayer & Social features |
| Dozer | DOZ | Technical Efforts |

## Technical Standards

### Code Quality
- **Code Review**: Required for all PRs, minimum 1 approval
- **Documentation**: All public APIs must have inline docs

### Architecture Principles
- **Modularity**: Features should be pod-isolated where possible
- **Performance**: Performs acceptably on minimum device specs
- **Scalability**: Design for 10x current user load

### Privacy
- **Data Privacy**: PII must be encrypted at rest; GDPR compliance required

## Process Standards

### Development Workflow
- **Branch Strategy**: Features worked on in master, disabled with feature flags
- **Deployment**: Staging → QA approval → Production

### Communication
- **Standups**: Daily per pod, async updates in Slack
- **Planning**: Sprint planning every 2 weeks

### Validation Process
- **Winning Hypotheses**: 4x top-level product hypotheses (see `planning/ValidationRoadmap.md`)
- **BHQs**: Broken down into testable Big Hairy Questions per hypothesis
- **SHQs**: 3-5 Small Hairy Questions defined per milestone
- **Sprint Evaluation**: Confidence levels reviewed every sprint via `/validation-review`
- **Milestone Review**: Full hypothesis assessment at each milestone boundary

## Business Constraints

### Timeline
- **Code Freeze**: Friday before sprint end, noon PST

### Budget
- **Third-party Services**: Require approval for new services
- **Usage-Sensitive Features**: Features that could bloat costs based on usage must be estimated and approved by production/financial

---

## Notes
- Update this file when cross-project decisions are made
- Pod-specific rules go in pod plan files (`planning/pods/*_Plan.md`)
- Exceptions require architecture team approval
