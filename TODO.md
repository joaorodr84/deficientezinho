# Deficientezinho TODO

The active backlog. Every item carries a `DEF-<n>` ID registered in
[TASKS.md](TASKS.md). An item leaves this file in the commit that closes it.

## Priorities

Every item below carries a `[P1]`–`[P4]` tag:

- **P1 — do next.** A measured cost or a known-broken thing that is
  already diagnosed; the work is scoped and the payoff is immediate.
- **P2 — queued.** Real value or real risk, but needs a decision made
  or a self-contained chunk of work first.
- **P3 — wanted, not urgent.** Features and cleanups worth building
  when there's room; nothing else depends on them.
- **P4 — parked.** Latent, speculative, or large-and-unscoped. Revisit
  when something forces the question.

The priority changes as the backlog does; the ID never does. Grouping
items under a heading is optional — most of this backlog doesn't need it
yet, but a heading costs nothing once a topic grows past a couple of
entries (see the other Code projects' `TODO.md` for what that looks like
at scale).

## Project pages

Every launched project now has a mini-site shape: DigiSpin (DEF-17) and
Sphinx (DEF-11) link straight to their own pre-built static microsite
(`public/projects/digispin/`, `public/projects/sphinx/`; DEF-18,
DEF-19), and Freecell Plus (DEF-12) and Watchr (DEF-13) use the shared
template's richer sections (overview, how it works, features).

The remaining projects under `c:\Code` (nextup, numi, pandora, sphinx-106,
sphinx-category-covers, sphinx-crivo, sphinx-words-images,
tmdb-react-starter) were left off the launch set in DEF-1; adding any of
them as a page is its own task.

## Translation (i18n)

No project under `c:\Code` has any i18n setup yet — this is a first, not
a pattern to match. The site splits into two layers that need two
different mechanisms:

- The Angular-rendered pages (home, Watchr, Freecell Plus) use
  **Transloco** (`DEF-36`): runtime JSON dictionaries per locale, plus a
  language switcher in the nav alongside the theme toggle (same
  persisted-choice, browser-default pattern as `deficientezinho-theme`).
  The home page, the shared project-page template's own chrome, and
  both Watchr's and Freecell Plus's own overview/how-it-works/features
  content are translated (`DEF-37`, `DEF-38`) — every Angular-rendered
  page now has pt-PT copy.
- The static microsites (`public/projects/<slug>/`, one per project:
  digispin, sphinx, cangupa, crivo, def-platform, arrumador, damas) are
  plain HTML/CSS/JS mirrored in from each project's own repo — no Angular
  runtime reaches them. They carry their own lightweight mechanism
  instead: JSON dictionaries plus a small inline script, mirroring how
  the theme toggle is already duplicated inline across every static
  page. `CLAUDE.md`'s "site-wide template" section documents it
  (`DEF-39`) as the fourth thing, alongside the theme key, nav clearance
  and footer link, every mini site must carry to fit in. DigiSpin
  (`DEF-40`) and Sphinx (`DEF-41`) are wired up to it; the rest still
  aren't.

Locales to start with: English (UK) and Portuguese (Portugal), chosen so
more locales are just another JSON file. Joao reviews all drafted copy;
first-person/tone-sensitive text (e.g. Watchr's "why it exists") gets
extra care. No URL change for language — a toggle only, like the theme
toggle, not `/en/`-style routes.

- `DEF-42` [P3]: Translate the Cangupa microsite.
- `DEF-43` [P3]: Translate the Crivo microsite.
- `DEF-44` [P3]: Translate the def-platform microsite/game UI text.
- `DEF-45` [P3]: Translate the Arrumador microsite/game UI text.
- `DEF-46` [P3]: Translate the Damas microsite/game UI text.
