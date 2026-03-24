---
description: Marvella repo layout, root app, and dev workflow (lowercase folders, no nested repos).
---

# Marvella Project Setup Standard

## Rules

- All project folders must be lowercase (e.g. `f9hockey`, `crewrules`).
- All projects must live at the repository root (no nested layouts like `project/project`).
- `package.json` must be at the repository root.
- `npm run dev` must work when run from the root directory.
- Never initialize Next.js into a subfolder; always initialize into the current directory (`.`).

## Workflow

1. Clone the repo.
2. `cd <project>` (single top-level folder, lowercase name).
3. `npm install`
4. `npm run dev`

## Notes

- Avoids Windows nested-repo problems and duplicate `.git` folders.
- Keeps the same developer workflow across all Marvella products.

## Troubleshooting
- If Next.js dev server throws errors about missing modules, vendor-chunks, or `.next/server` files:
  1. Stop the dev server
  2. Delete the `.next` folder
  3. Restart with `npm run dev`
- If port issues occur:
  - Stop running Node processes (`taskkill /f /im node.exe` on Windows)
  - Restart `npm run dev`
