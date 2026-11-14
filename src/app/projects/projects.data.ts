import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    slug: 'digispin',
    name: 'DigiSpin',
    tagline: 'Spin the digits, find the fits.',
    description:
      'Drag, rotate and reason your way through 250 boards — some solved in a minute, some worth sitting with.',
    stack: 'React Native + Expo',
    status: 'live',
    repo: 'https://github.com/joaorodr84/digispin',
    microsite: '/projects/digispin/index.html',
    // The mini site's own --accent pair.
    accent: { light: '#b82c36', dark: '#d6505a' },
  },
  {
    slug: 'sphinx',
    name: 'Sphinx',
    tagline: 'A Mystery appears. Correct or Pass, against the clock.',
    description:
      'A party game app: a Mystery appears, you swipe or tap Correct or Pass against a timer, and a results screen shows at the end.',
    stack: 'React Native + Expo',
    status: 'in development',
    repo: 'https://github.com/joaorodr84/sphinx',
    microsite: '/projects/sphinx/index.html',
    // The mini site's own --accent pair.
    accent: { light: '#1f9d55', dark: '#34d399' },
  },
  {
    slug: 'freecell-plus',
    name: 'Freecell Plus',
    tagline: 'A small userscript upgrade for FreeCell on Solitaire Bliss.',
    description:
      'Adds a one-click way to jump to the next unplayed numbered game, tracks every win’s time, score and moves, and surfaces completion stats and personal bests — all saved locally and exportable as a backup.',
    stack: 'Tampermonkey userscript',
    status: 'live',
    repo: 'https://github.com/joaorodr84/freecell-plus',
    // No brand of its own yet; amber keeps it apart from the others.
    accent: { light: '#a35f00', dark: '#f0a93b' },
    overview:
      'Solitaire Bliss’s FreeCell numbers each game (`?number=`), but leaves finding the next one you haven’t played up to you. Freecell Plus adds a NEXT button built into the site’s own topbar — styled and sized to match the native controls — that jumps straight to the first unplayed number in the sequence instead of just the next one.',
    howItWorks: [
      'A NEXT button sits in the game’s own topbar, inert until you win, then jumps to the first game you haven’t won yet — not just the next number, so replays don’t jam up the sequence.',
      'Every win is recorded with its game number, time, score and moves, detected from the site’s own end-game dialog rather than a timer guess.',
      'A tracker next to NEXT shows the last game won; a second line in the status bar shows completion count, best score and fastest time across your whole history.',
      'Export and Import buttons back up or restore that history as a JSON file, since localStorage doesn’t follow you to another browser or machine.',
    ],
    features: [
      'NEXT button styled and sized to match Solitaire Bliss’s own topbar buttons, with keyboard support (Enter/Space) and an icon.',
      'Jumps to the next unplayed game in sequence, not just current+1 — skips over games you’ve already won.',
      'Win history tracks game number, timestamp, time, score and moves; replaying a game adds its own entry instead of overwriting the last one.',
      'Completion stats — games won, best score, fastest time — each naming which game it came from.',
      'Export/Import to a JSON file, merging on import rather than overwriting.',
      'Warns in the console if Solitaire Bliss’s own markup changes enough to break how a button or tracker mounts.',
      'Runs entirely in the browser via Tampermonkey — no accounts, no server, no analytics.',
    ],
  },
  {
    slug: 'watchr',
    name: 'Watchr',
    tagline: 'Track every show and film you watch, with the people you watch them with.',
    description:
      'A personal TV and film tracking app with multi-user support, advanced watch history management, calendar views, statistics, badges, and import from IMDb, Trakt.tv, Netflix and TV Time.',
    stack: 'Angular + NestJS + PostgreSQL',
    status: 'live',
    website: 'https://watchr.pt',
    // Watchr's own --accent, light and dark themes.
    accent: { light: '#0369a1', dark: '#38bdf8' },
    // Leads with the origin story: the section is headed "Why it exists",
    // and before this it only described what Watchr does, not why it was
    // built. First person because the reason is Joao's own.
    overview:
      'I tracked everything I watched in TV Time for almost ten years. Then it shut down, and my brain couldn’t keep what I still had to watch organised on its own — so I built Watchr to do it for me. Each invited user gets their own library, watch history and privacy settings, so one shared Watchr instance still feels personal. Shows and films are tracked with metadata pulled live from TMDb, and a show’s status — Plan to Watch, Watching, On Hold, Up to Date, Completed — updates itself overnight and the moment you mark an episode watched, so My Shows never falls out of sync with what actually aired.',
    howItWorks: [
      'Find something to watch on Discover, then press its "+ Track" button to add it to your library.',
      'Everything you track shows up on My Shows, grouped by status, recomputed automatically as episodes air and get watched.',
      'Already have history elsewhere? Import it from IMDb, Trakt.tv, Netflix or TV Time — every import previews what it would change before anything is written.',
      'Calendar, Stats and Badges turn that history into week/month views, watch-time and genre breakdowns, and milestones as you log episodes.',
    ],
    features: [
      'Real-time metadata from TMDb, with show text auto-translated across 40+ languages.',
      'Watch history with precise date assignment and bulk editing.',
      'Calendar view with weekly and monthly zoom levels.',
      'Stats: time watched, episodes by month and weekday, top genres, most-watched shows, longest streak.',
      'Badges to celebrate milestones and streaks.',
      'Import previews from IMDb, Trakt.tv, Netflix and TV Time — nothing is written until you confirm it.',
      'Multi-user support, invite-only: separate libraries, watch history and privacy settings per user.',
      'Two-factor authentication, plus a full data export and account deletion under Profile → Account.',
    ],
  },
  {
    slug: 'cangupa',
    name: 'Cangupa',
    tagline: 'Hop on every tile. Leave none behind.',
    description:
      'A kangaroo, a board of tiles and one rule: land on every tile before you run out of moves. Step one tile or jump two, and each tile drops away behind you.',
    // The Expo app is the one being built on; the plain HTML/JS original
    // (apps/web-classic) is where the rules were first worked out.
    stack: 'React Native + Expo',
    // No repo link: the repo is private. Not in the App Store or on Google
    // Play yet, which is why this one is not 'live'.
    status: 'in development',
    microsite: '/projects/cangupa/index.html',
    // The teal of the three matching tiles in Cangupa's icon, and the mini
    // site's own --accent pair. The light value is that teal darkened until
    // it reads on white; the icon's gold was rejected because Freecell Plus
    // already wears amber.
    accent: { light: '#0e7c88', dark: '#29c5d6' },
  },
  {
    slug: 'crivo',
    name: 'Crivo',
    tagline: 'A hundred words in. One picture for each, out.',
    description:
      'Give it a list of keywords. It searches Pixabay for each one, shows you the candidates in your browser so you can pick, then hands your picks back resized to one size in a zip.',
    stack: 'Python + Pillow',
    // On PyPI (pipx install crivo), so anyone can get it today.
    status: 'live',
    repo: 'https://github.com/joaorodr84/crivo',
    microsite: '/projects/crivo/index.html',
    // No brand of its own. Violet is the mini site's --accent pair, chosen
    // because Crivo's own selection page is blue and Watchr already has blue.
    accent: { light: '#6a3fc0', dark: '#a78bfa' },
  },
];
