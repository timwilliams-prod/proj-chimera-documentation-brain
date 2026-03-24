# Technical Debt Ledger

**Last Updated**: 2026-03-24
**Owner**: Engineering Leads
**Total Active Items**: 84
**Source**: [High-Level Technical Backlog (Notion)](https://www.notion.so/High-Level-Technical-Backlog-30d3f0b3b6ab80348052fe125dbcc3be)

---

## How to Use This File

- Engineering Leads maintain this file via the `/tech-debt` skill (Editor mode)
- Run `/tech-debt` in Report mode to see how debt interacts with planned features
- Items are never deleted — retired items stay for history
- IDs are sequential and never reused
- Severity mapped from Notion priority: `asap` -> Critical, `required for open beta` -> Critical, `high` -> High, `medium` -> Medium, `low` -> Low, untagged -> Medium

---

## Active Debt Items

<!-- ============================================ -->
<!-- ADDRESSABLES                                  -->
<!-- ============================================ -->

### TD-001: Background Download Support with Priority Queuing

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Implement background downloading to minimize load times. Downloads support a priority queue so critical assets load first while the game remains playable. Includes error recovery for interrupted/failed downloads, retry logic for flaky mobile connections, partial download resumption, and player-facing communication.
- **Affected Systems**: Asset pipeline, Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All content-heavy features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-002: Content Delivery Architecture

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Define asset delivery across three tiers: initial app install, first-launch download, and background during gameplay. Includes tagging conventions, size budgets per tier, first-launch download UX, and progression-based prioritization for background content. Must catch budget issues in the delivery pipeline.
- **Affected Systems**: Asset pipeline, Addressables, CDN
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Drives first-time player experience, storage footprint, and content availability speed.

### TD-003: Addressables Best Practices and Strategy

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Define overall Addressables strategy: bundle grouping, naming conventions, asset tagging, cache management, degradation strategy, storage constraints, error handling, and dependency management patterns. Document for team.
- **Affected Systems**: Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-004: Addressables Migration of Existing Assets

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Migrate existing assets into the new standardized Addressables structure so legacy content benefits from new organization patterns.
- **Affected Systems**: Addressables, Asset pipeline
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-003 (strategy definition).

### TD-005: LoadAssetManager Simplification

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Refactor LoadAssetManager to reduce complexity. Current implementation has unnecessary abstraction layers and overly broad responsibilities. Goal is a leaner API that's easier to use correctly and harder to misuse.
- **Affected Systems**: LoadAssetManager, Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-006: Platform-Specific Bundle Builds

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Ensure Addressables build pipeline produces platform-aware bundles for Android and iOS. Covers texture compression differences (ASTC, ETC2 fallback), platform-specific asset variants, and build profiles to avoid cross-platform bundle bloat.
- **Affected Systems**: Build pipeline, Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-007: Addressables Deployment Strategy

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: End-to-end deployment for Addressable content: catalog versioning aligned with client/server versions, CDN strategy coordinated with Central Tech (cache policies, regional distribution, rollback), and evaluation of Grace from Central Tech as versioning mechanism.
- **Affected Systems**: Addressables, CDN, Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-008: Addressables Diagnostics and Observability

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Build tooling for Addressable asset visibility at runtime and across builds. Covers device runtime diagnostics (loaded/pending/queue state), reference count leak detection, memory attribution by group/label, download diagnostics (progress, failures, retry history), and build-over-build diff reports for bundle size changes.
- **Affected Systems**: Addressables, Tooling
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Addresses gaps with Unity's built-in tooling.

### TD-009: Addressables CI/CD Size Tracking and Duplication Analysis

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Addressables
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Integrate automated tooling into the build pipeline for bundle size reports, size budget enforcement, and asset duplication/redundancy detection. Identifies shared dependencies duplicated across bundles and assets in multiple groups without justification.
- **Affected Systems**: CI/CD, Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- UI FRAMEWORK                                  -->
<!-- ============================================ -->

### TD-010: New UI Architecture (MVVM with Data Binding)

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Implement MVVM pattern as foundation for all UI work. Clear separation between UI logic and presentation with data binding support and view lifecycle management. Improves maintainability, testability, and load times.
- **Affected Systems**: UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap` in Notion.

### TD-011: In-Editor UI Preview Tool

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Editor preview system allowing UI/UX designers to visualize and iterate on layouts without running the full game. Includes saving changes to views when made while preview tool is running in Unity.
- **Affected Systems**: Unity Editor, UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`. Accelerates design iteration cycle significantly.

### TD-012: UI Standards Documentation

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Prefab hierarchy standards, naming conventions, asset organization, shared component usage. Developed with UI/UX team. Includes performance best practices: canvas splitting, overdraw reduction, texture/sprite atlas usage, and pooling strategies for scroll lists.
- **Affected Systems**: UI Framework, Documentation
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`.

### TD-013: Shared Component Prefabs

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Library of shared prefabs for common UI components. Reduces duplication, enforces visual consistency, and allows teams to bootstrap new features without recreating foundational elements.
- **Affected Systems**: UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`.

### TD-014: UI Accessibility

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Establish accessibility standards and infrastructure for UI framework. Integrate into shared component library so compliant behavior is the default.
- **Affected Systems**: UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-015: Input Handling (Replace Fortis Package)

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Build project-owned input handling layer to replace Fortis input handler package. Removes external dependency risk and gives full control over input behavior.
- **Affected Systems**: Input system, UI Framework
- **Affected Pods**: All
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-016: Localization

- **Severity**: High
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate and improve localization setup. Assess translation pipeline (including Gridly), font management for extended character sets (CJK, Arabic, Cyrillic), and dynamic text sizing for string length variation. Produce plan for launch-ready localization.
- **Affected Systems**: Localization, UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: Related to TD-074 (Deprecate/Remove Gridly).

### TD-017: Safe Area Support

- **Severity**: High
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Project-owned safe area solution to replace AlmostEngine dependency. Removes external dependency, gives full control over edge cases, and integrates with UI framework's layout and preview tooling.
- **Affected Systems**: UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-018: Legacy UI Migration Plan

- **Severity**: High
- **Status**: ACTIVE
- **Category**: UI Framework
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Define and document migration plan for transitioning legacy UI systems to new framework. Identify existing UI to convert, establish priority order, and provide guidance for teams.
- **Affected Systems**: UI Framework
- **Affected Pods**: All
- **Affected Features**: All UI-facing features
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-010 (new architecture).

<!-- ============================================ -->
<!-- PROJECT ORGANIZATION                          -->
<!-- ============================================ -->

### TD-019: Project Structure Guidelines

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Define clear folder hierarchies for all asset types (first-party and third-party). Covers where assets live, folder naming, and how ownership/purpose is conveyed through structure.
- **Affected Systems**: Unity project structure
- **Affected Pods**: All
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`.

### TD-020: Naming Convention Standards

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Standardized naming patterns with templates and examples for all asset types. Conventions encode purpose and ownership directly in the name.
- **Affected Systems**: Unity project structure
- **Affected Pods**: All
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`.

### TD-021: Editor Validation Tools (Naming/Structure)

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Editor tooling that validates assets against naming and structure standards at import time. Prevents organizational debt from accumulating automatically.
- **Affected Systems**: Unity Editor, Tooling
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-019 and TD-020.

### TD-022: Asset Migration to New Structure

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Reorganize existing assets into new structure. Bulk operations handled by AI or automated scripts where possible.
- **Affected Systems**: Unity project structure
- **Affected Pods**: All
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-019 and TD-020.

### TD-023: Assembly Definition Strategy

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate guidelines for assembly boundaries: when to create new assemblies, reference patterns, dependency direction rules. Impacts compile times, testability, and architectural clarity.
- **Affected Systems**: Unity project, Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-024: Third-Party SDK Integration Guidelines

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Standards for how third-party SDKs and plugins are integrated, updated, and organized. Prevents entanglement with first-party code and reduces update breakage risk.
- **Affected Systems**: Unity project, Dependencies
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-025: Dependency Audit

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Audit all third-party dependencies (Unity packages, Fortis Central Tech, NuGet, native SDKs) for version currency, deprecation risk, license compliance, and usage justification. Establish recurring review cadence.
- **Affected Systems**: Dependencies
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-026: Investigate Separate Unity Project for Dynamic Content

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate feasibility of splitting dynamic content assets into a separate Unity project. Assess impact on build times, asset management workflows, and team boundaries.
- **Affected Systems**: Unity project, Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: Map Content Pipeline, Battle Content Pipeline, Unit Content Pipeline
- **Estimated Paydown**: TBD
- **Notes**: Investigation only — produce recommendation.

<!-- ============================================ -->
<!-- PERFORMANCE                                   -->
<!-- ============================================ -->

### TD-027: Performance Targets by Device Tier

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Review and update tiered performance targets for low/mid/high devices. Cover frame time, memory usage, crash/ANR rates, app size, and load times. Serves as baseline for all profiling and validation.
- **Affected Systems**: Performance
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`. Baseline for TD-028.

### TD-028: Meet Performance Targets

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Bring game in line with target performance KPIs. Frame time targets at 65% or less of budget (~10.8ms for 60 FPS, ~21.6ms for 30 FPS) to prevent thermal throttling. Also includes memory ceilings, load time targets, crash/ANR rates aligned with app store thresholds, and install/on-device size budgets.
- **Affected Systems**: Performance, All systems
- **Affected Pods**: All
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Ongoing effort. Depends on TD-027 for targets.

### TD-029: GPU-Specific Budgets

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Rendering performance budgets in partnership with Tech Art: triangle count, shader instruction limits, texture memory ceilings per device tier. Gives artists and engineers concrete guardrails.
- **Affected Systems**: Rendering, Performance
- **Affected Pods**: Dozer, Battle, Empire
- **Affected Features**: All visual features
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`. Co-owned with Tech Art.

### TD-030: Performance Best Practices and Guidelines

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Document best practices for all performance domains: common pitfalls, Unity-specific patterns, heap allocation management, GC reduction (allocation-free hot paths, object pooling, avoiding per-frame allocations from Unity APIs, keeping GC pauses below perceptible thresholds).
- **Affected Systems**: Performance, Documentation
- **Affected Pods**: All
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-031: Profiling Workflow and Tooling

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Standardized profiling workflow: define tooling (Unity Profiler, Memory Profiler, Frame Debugger, Rendering Debugger, Xcode Instruments, Metal GPU Debugger, RenderDoc) and how on-device captures are performed and analyzed.
- **Affected Systems**: Performance, Tooling
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-032: Performance Telemetry

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Real-world performance data collection from player devices: frame rate distributions, memory pressure events, load time percentiles, thermal throttling frequency. Validates budgets and surfaces issues on device configs not covered internally.
- **Affected Systems**: Analytics, Performance
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-033: CI/CD Performance Validation

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Automated performance checks in build pipeline to catch regressions. Validates against device-tier budgets and flags builds exceeding thresholds.
- **Affected Systems**: CI/CD, Performance
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-027 for budget definitions.

### TD-034: Performance Evaluations (Bundle)

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Bundle of performance evaluations: Adaptive Performance package on Android, On Demand Rendering (drop frame rate when idle), Device Filtering in Unity 6 for auto quality settings, OpenGL vs Vulkan usage, shader warmup strategy to eliminate first-use compilation hitches.
- **Affected Systems**: Rendering, Performance
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Individual investigations, can be split into separate items as needed.

### TD-035: Performance Tooling and Validation (Bundle)

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Bundle of high-priority performance tooling: asset post-processors for standards enforcement (read/write on textures/meshes, PoT compliance), Project Auditor package for CI/CD, repeatable test scenes for performance testing.
- **Affected Systems**: Tooling, CI/CD, Performance
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-036: Load Testing

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Ensure expected player behaviors are performant in server infrastructure.
- **Affected Systems**: Server infrastructure
- **Affected Pods**: Dozer
- **Affected Features**: Multiplayer Map, Matchmaking
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- RENDERING AND GRAPHICS PIPELINE               -->
<!-- ============================================ -->

### TD-037: Rendering Pipeline Standards (Tech Art Partnership)

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Rendering
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Owned by Tech Art; engineering supports with performance validation tooling, CI/CD enforcement, and architectural alignment. Covers render pipeline settings, quality tier profiles, post-processing per tier, lighting strategy, mesh complexity, texture streaming/VRAM budgets, VFX/particle budgets, and shader management.
- **Affected Systems**: Rendering, Graphics pipeline
- **Affected Pods**: Dozer (support), all visual pods
- **Affected Features**: All visual features
- **Estimated Paydown**: TBD
- **Notes**: Engineering's role is support/tooling, not ownership.

<!-- ============================================ -->
<!-- AUDIO                                         -->
<!-- ============================================ -->

### TD-038: Sound Bank Management

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Audio
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Define Wwise sound bank strategy: startup vs on-demand loading, alignment with scene/Addressable loading, streaming vs in-memory per content type, and unloading policies to stay within audio memory budget.
- **Affected Systems**: Audio (Wwise), Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All audio-enabled features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-039: Audio Memory Budgets

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Audio
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Memory ceilings for audio per device tier, coordinated with broader performance budgets. Covers Wwise memory pool sizing and quality-vs-footprint tradeoffs.
- **Affected Systems**: Audio (Wwise), Performance
- **Affected Pods**: Dozer
- **Affected Features**: All audio-enabled features
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-027 for overall memory budget context.

### TD-040: Platform-Specific Audio Configuration

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Audio
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Address Android/iOS audio differences: audio session categories (interruptions, mixing, silent mode, focus management), platform-specific Wwise settings and workarounds.
- **Affected Systems**: Audio (Wwise)
- **Affected Pods**: Dozer
- **Affected Features**: All audio-enabled features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-041: Sound Bank Integration with Addressables

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Audio
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Integrate Wwise sound banks into Addressables strategy so audio assets follow the same delivery, size tracking, and validation pipeline as all other content.
- **Affected Systems**: Audio (Wwise), Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All audio-enabled features
- **Estimated Paydown**: TBD
- **Notes**: Depends on TD-003 (Addressables strategy).

### TD-042: Audio Tech Assessment

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Audio
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate existing audio architecture for alignment with project architectural goals and technical standards.
- **Affected Systems**: Audio (Wwise)
- **Affected Pods**: Dozer
- **Affected Features**: All audio-enabled features
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- BUILD, DEPLOYMENT, AND DISTRIBUTION           -->
<!-- ============================================ -->

### TD-043: Build Pipeline Evaluation and Cleanup

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Audit CI/CD workflows for redundancy, fragility, and clarity. Remove dead/unused steps, consolidate, improve error reporting, and ensure pipelines are documented and maintainable.
- **Affected Systems**: CI/CD
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-044: App Size Management

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Enforce app size budgets for initial install and on-device footprint. Tied to Addressables content delivery architecture and performance targets. Ensure builds are measured against size budgets, stripping/compression settings are optimized, and regressions are caught before submission.
- **Affected Systems**: Build pipeline, Addressables
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Related to TD-002 and TD-028.

### TD-045: OTA Update Strategy

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Strategy for over-the-air updates (data tuning and Addressable assets) without full app store submission. Covers versioning, client/OTA compatibility rules, rollback procedures, player-facing UX, and forced update flow (app close for update or reset for data/assets).
- **Affected Systems**: Build pipeline, Addressables, Server
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Related to TD-083 (break apart manifest for smoother OTA).

### TD-046: Symbol File Management

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Ensure debug symbols (iOS dSYMs, Android symbol files, IL2CPP mappings) are archived and automatically uploaded to correct destinations (App Store Connect, Google Play Console, BugSnag) as part of build pipeline.
- **Affected Systems**: Build pipeline, Crash reporting
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: Tagged `asap`.

### TD-047: Build and Compile Time Management

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Monitor and manage build/compile times as project grows. Track times using Unity's build report, identify slow points, and set targets to prevent degradation.
- **Affected Systems**: Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- SECURITY                                       -->
<!-- ============================================ -->

### TD-048: Bot Detection

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Security
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate and implement bot/automation detection to protect competitive integrity and prevent automated farming that degrades the experience.
- **Affected Systems**: Security, Server
- **Affected Pods**: Dozer
- **Affected Features**: Multiplayer Map, Matchmaking, Battlepass
- **Estimated Paydown**: TBD
- **Notes**: Complements existing server-authoritative game state.

### TD-049: Client-side Protection

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Security
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate tooling for obfuscation (harden client against reverse engineering), memory protection, and app integrity (Google Play Integrity API, Apple App Attest).
- **Affected Systems**: Security, Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- QUALITY ASSURANCE                              -->
<!-- ============================================ -->

### TD-050: Unit Testing Strategy

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Quality Assurance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate and update unit testing strategy. Review coverage, identify gaps, ensure tests are meaningful (not coverage for coverage's sake), and evaluate test duration.
- **Affected Systems**: Testing
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-051: Automated End-to-End Testing

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Quality Assurance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Testing pipeline for game validation without manual QA. Automated on-device testing via device farms covering critical paths, smoke tests, and performance testing.
- **Affected Systems**: Testing, CI/CD
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- DEVELOPMENT EXPERIENCE                        -->
<!-- ============================================ -->

### TD-052: Tuning Config Migration into Unity

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Development Experience
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Migrate tuning data config and schema files from external tuning-builder-data directory into Unity project. Currently live outside chimera-unity, so changes aren't detected by Unity's asset pipeline, cache invalidation requires manual intervention, and files are disconnected from editor workflows.
- **Affected Systems**: Tuning, Unity Editor
- **Affected Pods**: Dozer, Metagame
- **Affected Features**: All tunable features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-053: Improved Save State Debugging

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Development Experience
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Improve tooling for inspecting, exporting, and importing player save state during development.
- **Affected Systems**: Save system, Tooling
- **Affected Pods**: Dozer
- **Affected Features**: All progression features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-054: LUCI Console Integration

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Development Experience
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Integrate LUCI as runtime developer console, replacing Fortis DevConsole (com.fortis.devconsole). Reassess boundary between LUCI and Tweakables (com.fortis.tweakables) — current overlap creates ambiguity. Outcome: clear ownership model for debug functionality.
- **Affected Systems**: Dev tools, Console
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-055: Coding Standards and Automation

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Development Experience
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Formalize coding standards: code style, architectural patterns, naming conventions, anti-patterns. Evaluate automated formatting/linting (CSharpier, dotnet-format, Roslyn analyzers) for CI enforcement. Ensure AI-assisted contributions conform to same conventions.
- **Affected Systems**: Development workflow, CI/CD
- **Affected Pods**: All
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- AI ENABLEMENT                                  -->
<!-- ============================================ -->

### TD-056: AI Skills Library

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: AI Enablement
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Develop and maintain Claude Code skills tailored to project workflows.
- **Affected Systems**: AI tooling
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-057: Custom Tool Integrations (MCP)

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: AI Enablement
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate and integrate/build MCP servers and tool integrations giving AI agents access to project-specific systems (compile status, internal APIs, tuning manifest generation).
- **Affected Systems**: AI tooling, MCP
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-058: AI Context File Evaluation

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: AI Enablement
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate and improve CLAUDE.md, AGENTS.md, and .ai/ documentation. Assess accuracy, close gaps, remove outdated guidance, and ensure docs scale with project.
- **Affected Systems**: AI tooling, Documentation
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

<!-- ============================================ -->
<!-- INFRASTRUCTURE AND SERVICES                   -->
<!-- ============================================ -->

### TD-059: Jobs Scheduling (EventBridge/SQS)

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Leverage AWS EventBridge and SQS to schedule and route system commands at specific times or intervals. Primarily for multiplayer but applicable to other game systems.
- **Affected Systems**: Server, AWS
- **Affected Pods**: Dozer, Social Dynamics
- **Affected Features**: Multiplayer Map, Live Events
- **Estimated Paydown**: TBD
- **Notes**: See Chimera Server Multiplayer Notion page.

### TD-060: Persistence Upgrade (Redis to DynamoDB)

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Move multiplayer persistence from Redis (prototyping) to DynamoDB or Platform document API used by player data.
- **Affected Systems**: Server, Database
- **Affected Pods**: Dozer, Social Dynamics
- **Affected Features**: Multiplayer Map
- **Estimated Paydown**: TBD
- **Notes**: See Chimera Server Multiplayer Notion page.

### TD-061: Matchmaking Service

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Replace placeholder lobby implementation with automated matchmaking. Either use Platform API for realtime matchmaking or build a custom solution.
- **Affected Systems**: Server, Matchmaking
- **Affected Pods**: Dozer, Social Dynamics
- **Affected Features**: Matchmaking, Multiplayer Map
- **Estimated Paydown**: TBD
- **Notes**: See Chimera Server Multiplayer Notion page.

### TD-062: Leaderboard Migration

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Lotus has a leaderboard solution. Platform services is building their own with same feature set + additional APIs. Revisit their service when available and migrate if it means one less service to maintain.
- **Affected Systems**: Server, Leaderboard
- **Affected Pods**: Dozer
- **Affected Features**: Multiplayer Map, Battlepass
- **Estimated Paydown**: TBD
- **Notes**: Dependent on Platform services delivery.

### TD-063: User Generated Content Service

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Integration with Platform UGC service for player names and clan names. Integrate when Platform's service is available.
- **Affected Systems**: Server, UGC
- **Affected Pods**: Dozer, Social Dynamics
- **Affected Features**: Ravager's Reef, Clan and Friends
- **Estimated Paydown**: TBD
- **Notes**: Dependent on Platform services delivery. See Ravager's Reef Requirements Notion page.

### TD-064: Live Ops Tooling (Forge and Admin)

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: All tooling should be in Forge, but features that can't fit need a solution using Admin service and Server APIs.
- **Affected Systems**: Forge, Admin service, Server
- **Affected Pods**: Dozer
- **Affected Features**: Live Events, Timed PvE Live Ops Maps
- **Estimated Paydown**: TBD
- **Notes**: See Chimera Server Ravager's Reef Notion page.

### TD-065: Network Payload Optimization

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Currently using compressed JSON. Evaluate MessagePack, Protobuf, and other options to improve network performance.
- **Affected Systems**: Networking, Server
- **Affected Pods**: Dozer
- **Affected Features**: All networked features
- **Estimated Paydown**: TBD
- **Notes**: See Chimera Server 2025 Roadmap Notion page.

### TD-066: Clan and Friends SDK Integration

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Future integration with Platform services SDK for clans and friends functionality.
- **Affected Systems**: Server, SDK
- **Affected Pods**: Social Dynamics, Dozer
- **Affected Features**: Ravager's Reef
- **Estimated Paydown**: TBD
- **Notes**: Future work. Dependent on Platform services.

<!-- ============================================ -->
<!-- ADDITIONAL INITIATIVES                        -->
<!-- ============================================ -->

### TD-067: Compliance for Fortis-branded Launch

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Compliance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Full compliance for open beta: Privacy Policy and Terms of Service, OneTrust integration, proper age gating, and delete account functionality.
- **Affected Systems**: Legal, Account management
- **Affected Pods**: Dozer
- **Affected Features**: Initial Login Flow, Player Journey
- **Estimated Paydown**: TBD
- **Notes**: Required for open beta.

### TD-068: JSON Parser Investigation

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Investigate JSON parser built by Eric on Onyx for potential adoption.
- **Affected Systems**: Serialization, Performance
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-069: Player Saving Issues (Action Queue)

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Player saving issues when action queue is backed up.
- **Affected Systems**: Save system, Action queue
- **Affected Pods**: Dozer
- **Affected Features**: All progression features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-070: Analytics Event Governance

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Analytics
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Taxonomy, validation, and enforcement for analytics events.
- **Affected Systems**: Analytics
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-071: Analytics Architecture Evaluation

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Analytics
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate architecture for analytics system.
- **Affected Systems**: Analytics
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-072: Growthbook and Experiments Support

- **Severity**: Critical
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Updated Growthbook support with experiments and feature flags.
- **Affected Systems**: Feature flags, Experiments
- **Affected Pods**: Dozer
- **Affected Features**: Growthbook Integration
- **Estimated Paydown**: TBD
- **Notes**: Required for open beta. Related to feature_registry Growthbook Integration.

### TD-073: Player Model Migration Improvements

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Needs a spike. Required before blocking account resetting.
- **Affected Systems**: Player data, Migration
- **Affected Pods**: Dozer
- **Affected Features**: All progression features
- **Estimated Paydown**: TBD
- **Notes**: Blocker for removing account reset capability.

### TD-074: Deprecate/Remove Gridly

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Remove Gridly dependency from the project.
- **Affected Systems**: Localization
- **Affected Pods**: Dozer
- **Affected Features**: All localized features
- **Estimated Paydown**: TBD
- **Notes**: Related to TD-016 (Localization).

### TD-075: Multi-model Support

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Support for multiple player data models.
- **Affected Systems**: Player data
- **Affected Pods**: Dozer
- **Affected Features**: All progression features
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-076: Grace Content Pipeline Integration

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Investigate how to integrate and utilize the Grace content pipeline.
- **Affected Systems**: Content pipeline
- **Affected Pods**: Dozer
- **Affected Features**: Map Content Pipeline, Battle Content Pipeline, Unit Content Pipeline
- **Estimated Paydown**: TBD
- **Notes**: Also referenced in TD-007 (Addressables deployment).

### TD-077: Remote Push Notifications

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Infrastructure
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Implement remote push notification support.
- **Affected Systems**: Notifications, Server
- **Affected Pods**: Dozer
- **Affected Features**: Notifications
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-078: Unified Logging

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Development Experience
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Unify logging across the project, including stack trace logging settings in Player.
- **Affected Systems**: Logging
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-079: Investigate Separate DLLs vs Unity Packages

- **Severity**: Low
- **Status**: ACTIVE
- **Category**: Project Organization
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Investigate using separate solutions/DLLs rather than relying on Unity packages.
- **Affected Systems**: Project architecture
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-080: PlayerSettings and Build Config Audit

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Evaluate "Run in Background" setting and audit all PlayerSettings. Also evaluate and audit Build Config setups.
- **Affected Systems**: Unity PlayerSettings, Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: Combined from two separate items (PlayerSettings audit + Build Config audit).

### TD-081: Local Build Support

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Enable local build support for developers.
- **Affected Systems**: Build pipeline
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-082: Model Optimization and Project Diagnosis Tools

- **Severity**: Medium
- **Status**: ACTIVE
- **Category**: Performance
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Investigate Model Optimization Report Tool and Project Diagnosis from Townsfolk.
- **Affected Systems**: Tooling, Performance
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

### TD-083: Break Apart Manifest for OTA Updates

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Build & Deployment
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Break apart manifest into smaller pieces for smoother OTA updates.
- **Affected Systems**: Build pipeline, OTA
- **Affected Pods**: Dozer
- **Affected Features**: All
- **Estimated Paydown**: TBD
- **Notes**: Related to TD-045 (OTA Update Strategy).

### TD-084: SHA Pinning for GitHub Actions

- **Severity**: High
- **Status**: ACTIVE
- **Category**: Security
- **Logged**: 2026-03-24
- **Logged By**: Notion Backlog Import
- **Description**: Switch to SHA pinning for GitHub Actions (third-party only for now).
- **Affected Systems**: CI/CD, Security
- **Affected Pods**: Dozer
- **Affected Features**: None directly
- **Estimated Paydown**: TBD
- **Notes**: —

---

## Resolved Debt Items

[None yet.]

<!--
Template for resolved items:

### TD-XXX: [Title]

- **Severity**: [original severity]
- **Status**: RESOLVED
- **Logged**: [date]
- **Resolved**: [date]
- **Resolution**: [How it was fixed, or why it's no longer relevant]
-->
