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

Project pages currently render one short description each (tagline +
single paragraph), except DigiSpin's (DEF-10/DEF-14), which already uses
the richer template from DEF-9 — overview, how-it-works, features — to
read as a small marketing site for the app rather than a repo blurb, and
Sphinx's (DEF-11), whose home card instead links straight to the
project's own pre-built static microsite under `public/Sphinx/`. Bring
the rest up to a comparable shape: a mini-website per project, not just a
paragraph pulled from its README.

- `DEF-12` · [P2] Build out the Freecell Plus page into a DigiSpin-style
  mini site (overview, how it works, features) from the freecell-plus
  repo.
- `DEF-13` · [P2] Build out the Watchr page into a DigiSpin-style mini
  site (overview, how it works, features) from the watchr repo.
- `DEF-17` · [P2] Bring in the DigiSpin marketing microsite (its
  published HTML pages) from the digispin repo under
  `public/projects/digispin/`, and link the home card straight to it —
  the same Sphinx-style (DEF-11) treatment, replacing the
  richer-template content from DEF-10/DEF-14. Target path assumes
  DEF-18 has already landed.
- `DEF-18` · [P2] Group all project microsites under a
  `public/projects/` directory — one subdirectory per project — instead
  of scattered directly under `public/`; move the existing
  `public/Sphinx/` there and update its `microsite` path.
- `DEF-19` · [P3] Use lowercase directory names for every project
  microsite under `public/projects/` (`sphinx`, `digispin`, …),
  renaming the existing `Sphinx` directory to match.

The remaining projects under `c:\Code` (crivo, nextup, numi,
pandora, sphinx-106, sphinx-category-covers, sphinx-crivo,
sphinx-words-images, tmdb-react-starter) were left off the launch set in
DEF-1; adding any of them as a page is its own task.

## Housekeeping

- `DEF-16` · [P3] Periodically audit `CHANGELOG.md`, `TODO.md` and
  `TASKS.md` against each other and against `git log` — entries that
  moved on one but not the other, IDs that don't match a real commit,
  rows stuck open after the work already shipped. No fixed cadence;
  do it whenever one of those files is touched for an unrelated reason
  and something looks off, or when asked directly.
