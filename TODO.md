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

The remaining projects under `c:\Code` (crivo, nextup, numi,
pandora, sphinx-106, sphinx-category-covers, sphinx-crivo,
sphinx-words-images, tmdb-react-starter) were left off the launch set in
DEF-1; adding any of them as a page is its own task.
