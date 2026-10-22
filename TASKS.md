# Deficientezinho task ledger

Every task carries an ID of the form `DEF-<n>`. IDs are assigned once,
never reused, and never renumbered.

**Next ID to assign: `DEF-20`**

If this file and history ever disagree, history wins:

```sh
git log --oneline | grep -oE 'DEF-[0-9]+' | sort -t- -k2 -n | tail -1
```

## Open

| ID | Task | Status | Commit |
| --- | --- | --- | --- |
| DEF-12 | Build the Freecell Plus page into a DigiSpin-style mini site from the freecell-plus repo | open | — |
| DEF-13 | Build the Watchr page into a DigiSpin-style mini site from the watchr repo | open | — |
| DEF-16 | Periodically audit CHANGELOG.md, TODO.md and TASKS.md against each other and against history | open | — |
| DEF-19 | Use lowercase directory names for every project microsite under `public/projects/`, renaming the existing `Sphinx` directory to match | open | — |

## Done

| ID | Task | Status | Date | Commit |
| --- | --- | --- | --- | --- |
| DEF-1 | Scaffold the Angular site: home page, a shared project-page route, and pages for DigiSpin, Sphinx, Freecell Plus and Watchr | done | 2026-10-07 | — |
| DEF-2 | Save the brand logo (`logo.png` transparent, `logo-original.png` whitish-bg) into `public/` | done | 2026-10-07 | — |
| DEF-3 | Add `start-services`/`stop-services` agents to run and stop the Angular dev server | done | 2026-10-07 | — |
| DEF-4 | Add a `changelog-updater` agent and the initial `CHANGELOG.md` skeleton it maintains | done | 2026-10-07 | — |
| DEF-5 | Add a `test-runner` agent to run the Vitest suite and report pass/fail | done | 2026-10-07 | — |
| DEF-6 | Point the Watchr page at its public website (watchr.pt) instead of its private repo | done | 2026-10-07 | — |
| DEF-7 | Replace the default Angular `favicon.ico` with one cropped from `logo.png` | done | 2026-10-07 | — |
| DEF-8 | Expand to a full favicon set (16/32px, apple-touch-icon, android-chrome icons, manifest) from an updated `logo.png` master | done | 2026-10-07 | — |
| DEF-9 | Extend `Project`/`project-page.html` with optional richer sections (overview, how-it-works, features) on the shared template | done | 2026-10-07 | — |
| DEF-10 | Write the full DigiSpin page content from the digispin repo | done | 2026-10-07 | — |
| DEF-14 | Refresh the DigiSpin page content from the app's current How to Play reference and its one-page marketing site draft | done | 2026-10-20 | — |
| DEF-15 | Adopt the develop-branch workflow (CLAUDE.md, commit agent) used by Sphinx, DigiSpin and Watchr, and give TODO.md priority levels and grouping | done | 2026-10-22 | — |
| DEF-11 | Bring in the Sphinx marketing microsite (its published HTML pages) under `public/Sphinx/`, and link the home card straight to it | done | 2026-10-22 | — |
| DEF-18 | Group all project microsites under a `public/projects/` directory (one subdirectory per project), instead of scattered straight under `public/` | done | 2026-10-22 | — |
| DEF-17 | Bring in the DigiSpin marketing microsite from the digispin repo under a `digispin` directory, and link the home card straight to it | done | 2026-10-22 | — |
