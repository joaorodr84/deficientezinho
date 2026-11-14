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

Watchr and Freecell Plus never got a header of their own: they render
through the shared Angular template, inside the site shell's global nav
(`app.html`'s `site-nav`, which lists every project). Every other project
is a standalone static microsite under `public/projects/<slug>/` with its
own project-specific header/nav to its own sections, per the site-wide
template in `CLAUDE.md`. Watchr's and Freecell Plus's headers should match
that shape — specific to the project, linking to its own sections — not
the cross-project nav.

- `DEF-34` [P2]: Give Watchr its own project-specific header/nav (its
  sections: Why it exists, How it works, Features, Details), instead of
  the shared app shell's all-projects nav.
- `DEF-35` [P2]: Same fix for Freecell Plus.

## Translation (i18n)

No project under `c:\Code` has any i18n setup yet — this is a first, not
a pattern to match. The site splits into two layers that need two
different mechanisms:

- The Angular-rendered pages (home, Watchr, Freecell Plus) get
  **Transloco**: runtime JSON dictionaries per locale, plus a language
  switcher in the nav alongside the theme toggle (same persisted-choice,
  browser-default pattern as `deficientezinho-theme`).
- The static microsites (`public/projects/<slug>/`, one per project:
  digispin, sphinx, cangupa, crivo, def-platform, arrumador, damas) are
  plain HTML/CSS/JS mirrored in from each project's own repo — no Angular
  runtime reaches them. They need their own lightweight mechanism: JSON
  dictionaries plus a small inline script, mirroring how the theme
  toggle is already duplicated inline across every static page per
  `CLAUDE.md`'s "site-wide template" section. Once designed, that
  mechanism becomes a fourth thing (alongside the theme key, nav
  clearance and footer link) every mini site must carry to fit in.

Locales to start with: English (UK) and Portuguese (Portugal), chosen so
more locales are just another JSON file. Joao reviews all drafted copy;
first-person/tone-sensitive text (e.g. Watchr's "why it exists") gets
extra care. No URL change for language — a toggle only, like the theme
toggle, not `/en/`-style routes.

- `DEF-36` [P2]: Add Transloco to the Angular app (en-GB, pt-PT), a
  language switcher in the nav, and translate the home page.
- `DEF-37` [P2]: Translate Watchr's page content (depends on `DEF-36`).
- `DEF-38` [P2]: Translate Freecell Plus's page content (depends on
  `DEF-36`).
- `DEF-39` [P2]: Design and build the shared lightweight translation
  mechanism for static microsites (JSON dictionaries + inline script +
  switcher), and document it in `CLAUDE.md` as a fourth must-keep piece
  of the site-wide template.
- `DEF-40` [P3]: Translate the DigiSpin microsite (depends on `DEF-39`).
- `DEF-41` [P3]: Translate the Sphinx microsite (depends on `DEF-39`).
- `DEF-42` [P3]: Translate the Cangupa microsite (depends on `DEF-39`).
- `DEF-43` [P3]: Translate the Crivo microsite (depends on `DEF-39`).
- `DEF-44` [P3]: Translate the def-platform microsite/game UI text
  (depends on `DEF-39`).
- `DEF-45` [P3]: Translate the Arrumador microsite/game UI text (depends
  on `DEF-39`).
- `DEF-46` [P3]: Translate the Damas microsite/game UI text (depends on
  `DEF-39`).
