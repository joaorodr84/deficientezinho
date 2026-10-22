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
single paragraph), except DigiSpin's (DEF-17) and Sphinx's (DEF-11),
whose home cards instead link straight to each project's own pre-built
static microsite, under `public/projects/digispin/` and
`public/projects/sphinx/` (DEF-18, DEF-19) respectively. Bring the rest
up to a comparable shape: a mini-website per project, not just a
paragraph pulled from its README.

- `DEF-12` · [P2] Build out the Freecell Plus page into a DigiSpin-style
  mini site (overview, how it works, features) from the freecell-plus
  repo.
- `DEF-13` · [P2] Build out the Watchr page into a DigiSpin-style mini
  site (overview, how it works, features) from the watchr repo.

The remaining projects under `c:\Code` (crivo, nextup, numi,
pandora, sphinx-106, sphinx-category-covers, sphinx-crivo,
sphinx-words-images, tmdb-react-starter) were left off the launch set in
DEF-1; adding any of them as a page is its own task.
