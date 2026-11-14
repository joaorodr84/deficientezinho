# Changelog

All notable changes to Deficientezinho are recorded here, newest first.

## [Unreleased]

See [TODO.md](TODO.md) for what's planned next.

## 2026-11-14

### Changed

- DigiSpin's mini site is now the full multi-page site (how to play with
  a playable puzzle, features, levels, accessibility, what's new, privacy
  policy and support) with a light/dark/system theme switch, replacing
  the single page it had before. It is hosted here from now on.
- The whole site now shares DigiSpin's look: the same type, layout, nav
  bar and footer on the home page and on the Freecell Plus and Watchr
  pages, which also got a proper hero, numbered steps and feature cards
  in each project's own colour.
- Rewrote the home page. Each project card now wears its project's own
  colour and logo mark, shows its status and the technologies it is
  built with, and comes alive on hover (DigiSpin's wheel spins). Cards
  stay still for visitors who ask their device for reduced motion.
- The home page has a new slogan: "Just a crip. Writing code with his
  mouth. Or telling AI to do it."
- The Watchr page's "Why it exists" now says why: it replaces TV Time,
  which shut down after Joao had used it for almost ten years.
- DigiSpin, Freecell Plus and Watchr are now labelled "live" instead of
  "in development", since all three are published. Sphinx keeps its
  "in development" label until it ships.

### Added

- A light / dark / follow-the-device switch on every page. The choice is
  remembered and carries across the home page and every project's mini
  site.
- Each mini site's footer links back to Deficientezinho.
- Cangupa, a tile-hopping puzzle game with a kangaroo, joins the home
  page as a fifth project, with its own mini site: how to play, features
  and the ten level packs.
- Crivo, a command-line tool that finds one picture for each word in a
  list, joins the home page with its own mini site: how it works, its
  options, and what to know about Pixabay and image licences.
- "Um passeio do cara***", the Deficientezinho wheelchair platformer,
  joins the home page with its own mini site: how to play, and how the
  whole game works one key at a time. It links to the playable game.

### Fixed

- The theme switch no longer covers the last link in the DigiSpin and
  Sphinx nav bars on mid-width screens.

## 2026-10-22

### Added

- The Sphinx home page card now links straight to Sphinx's own marketing
  microsite (its published static pages) instead of the internal project
  page.
- The DigiSpin home page card links straight to DigiSpin's own marketing
  microsite the same way, replacing the overview, how-it-works and
  features sections written for its project page.

## 2026-10-20

### Changed

- Refreshed DigiSpin's project page copy (tagline, description, overview,
  how-it-works and feature list) to match what's actually shipped and the
  wording of its marketing site draft.

## 2026-10-07

### Added

- Project pages can now show extra overview, how-it-works and features
  sections when a project's data provides them, instead of only a tagline
  and one-paragraph description.
- Filled in DigiSpin's project page with full overview, how-it-works and
  features content, replacing its brief launch description.

### Changed

- The Watchr project page now links to its public website (watchr.pt)
  instead of its private GitHub repo, which visitors couldn't see anyway.
- Replaced Angular's default favicon with a full icon set generated from
  the site logo (favicon, Apple touch icon, and Android home-screen icons),
  plus a web manifest for installing the site to a home screen.
