# Reference / Ingested Data

This folder holds source data ingested from external tools.

## What Goes Here

- **Notion exports**: Markdown/CSV exports from design docs
- **ClickUp exports**: CSV exports from sprint views or task lists
- **Playtest data**: Survey results, analytics CSVs
- **Any source CSV/data** used to populate planning docs

## Example

```
reference/
├── README.md
├── Lotus Productionomicon - Validation Roadmap.csv
├── notion-exports/
│   └── alliance-system-design.md
└── clickup-exports/
    └── empire-sprint-23.csv
```

## How It's Used

- Source data is ingested into `planning/` docs (manually or via skills)
- These files are kept for reference and audit trail
- Planning docs are curated summaries; these are the raw source
