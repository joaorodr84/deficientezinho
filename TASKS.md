# Deficientezinho task ledger

Every task carries an ID of the form `DEF-<n>`. IDs are assigned once,
never reused, and never renumbered.

**Next ID to assign: `DEF-47`**

If this file and history ever disagree, history wins:

```sh
git log --oneline | grep -oE 'DEF-[0-9]+' | sort -t- -k2 -n | tail -1
```

## Open

| ID | Task | Status | Commit |
| --- | --- | --- | --- |
| DEF-38 | Translate Freecell Plus's page content | open | — |
| DEF-40 | Translate the DigiSpin microsite | open | — |
| DEF-41 | Translate the Sphinx microsite | open | — |
| DEF-42 | Translate the Cangupa microsite | open | — |
| DEF-43 | Translate the Crivo microsite | open | — |
| DEF-44 | Translate the def-platform microsite/game UI text | open | — |
| DEF-45 | Translate the Arrumador microsite/game UI text | open | — |
| DEF-46 | Translate the Damas microsite/game UI text | open | — |

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
| DEF-19 | Use lowercase directory names for every project microsite under `public/projects/`, renaming the existing `Sphinx` directory to match | done | 2026-10-22 | — |
| DEF-16 | Periodically audit CHANGELOG.md, TODO.md and TASKS.md against each other and against history | done | 2026-10-22 | — |
| DEF-20 | Fix the Sphinx microsite logo mark, accent/pass colors and hero logo size to match the current/correct logo | done | 2026-10-23 | — |
| DEF-13 | Build the Watchr page into a DigiSpin-style mini site from the watchr repo | done | 2026-10-23 | — |
| DEF-12 | Build the Freecell Plus page into a DigiSpin-style mini site from the freecell-plus repo | done | 2026-10-24 | — |
| DEF-21 | Replace the one-page DigiSpin microsite with the multi-page site from the `digispin-site` repo (home, how to play, features, levels, accessibility, changelog, privacy policy, support), now hosted here | done | 2026-11-14 | — |
| DEF-22 | Make the DigiSpin mini site's design the site-wide template: its tokens, type, nav/footer and light/dark/system toggle in the Angular shell and shared project page, one theme choice shared with every mini site, and a per-project accent colour | done | 2026-11-14 | — |
| DEF-23 | Rewrite the home page with livelier project cards: each tinted in its project's colour, with its logo mark or monogram, status pill, stack chips, call to action and hover/entry motion | done | 2026-11-14 | — |
| DEF-24 | Make "Just a crip. Writing code with his mouth. Or telling AI to do it." the home page slogan | done | 2026-11-14 | — |
| DEF-25 | Open the Watchr page's "Why it exists" with why it was built: almost ten years on TV Time, which then shut down | done | 2026-11-14 | — |
| DEF-26 | Label DigiSpin, Freecell Plus and Watchr as live now that they are published; Sphinx stays in development | done | 2026-11-14 | — |
| DEF-27 | Add Cangupa as a fifth project: a home card with its own icon and teal accent, linking to a DigiSpin-style mini site under `public/projects/cangupa/` (home, how to play, features, levels) | done | 2026-11-14 | — |
| DEF-28 | Add Crivo as a project: a home card and a DigiSpin-style mini site under `public/projects/crivo/` (home, how it works, options, Pixabay and licences) | done | 2026-11-14 | — |
| DEF-29 | Add the wheelchair platformer "Um passeio do cara***" (def-platform) as a project: a home card wearing the site logo and a DigiSpin-style mini site under `public/projects/def-platform/` (home, how to play, one key at a time) | done | 2026-11-14 | — |
| DEF-30 | Add Arrumador, the crate-pushing warehouse puzzle, as a project: a home card and a DigiSpin-style mini site under `public/projects/arrumador/` (home, how to play, levels) | done | 2026-11-14 | — |
| DEF-31 | Add Damas, the Portuguese-rules checkers game, as a project: a home card and a DigiSpin-style mini site under `public/projects/damas/` (home, rules, online play, settings) | done | 2026-11-14 | — |
| DEF-32 | Move Watchr's home card to the first position, and give it its own mark (the double-checkmark from its logo) instead of a monogram | done | 2026-11-14 | — |
| DEF-33 | Give Watchr's project page its own hero mark (the same double-checkmark logo as its home card), instead of the plain text-only hero every project shares | done | 2026-11-14 | — |
| DEF-34 | Give Watchr its own project-specific header/nav instead of the shared app shell's all-projects nav | done | 2026-11-14 | — |
| DEF-35 | Same fix for Freecell Plus | done | 2026-11-14 | — |
| DEF-39 | Design and build the shared lightweight translation mechanism for static microsites, and document it in CLAUDE.md | done | 2026-11-14 | — |
| DEF-36 | Add Transloco to the Angular app (en-GB, pt-PT), a nav language switcher, and translate the home page | done | 2026-11-14 | — |
| DEF-37 | Translate Watchr's page content | done | 2026-11-14 | — |
