# Deficientezinho task ledger

Every task carries an ID of the form `DEF-<n>`. IDs are assigned once,
never reused, and never renumbered.

**Next ID to assign: `DEF-14`**

If this file and history ever disagree, history wins:

```sh
git log --oneline | grep -oE 'DEF-[0-9]+' | sort -t- -k2 -n | tail -1
```

## Open

| ID | Task | Status | Commit |
| --- | --- | --- | --- |
| DEF-9 | Extend `Project`/`project-page.html` with optional richer sections (overview, how-it-works, features) on the shared template | open | — |
| DEF-10 | Write the full DigiSpin page content from the digispin repo | open | — |
| DEF-11 | Write the full Sphinx page content from the sphinx repo | open | — |
| DEF-12 | Write the full Freecell Plus page content from the freecell-plus repo | open | — |
| DEF-13 | Write the full Watchr page content from the watchr repo | open | — |

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
