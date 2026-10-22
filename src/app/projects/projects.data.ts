import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    slug: 'digispin',
    name: 'DigiSpin',
    tagline: 'Spin the digits, find the fits.',
    description:
      'Drag, rotate and reason your way through 250+ boards — some solved in a minute, some worth sitting with.',
    stack: 'React Native + Expo',
    status: 'in development',
    repo: 'https://github.com/joaorodr84/digispin',
    overview:
      'DigiSpin’s ten pieces are shaped like the digits 0 to 9, built from bars that sit on the lines between cells, the way a seven-segment display works. Place all ten on the board, rotating each one to fit, so that no two pieces ever overlap — and no two ever cross straight through the same corner. Inspired by SmartGames’ physical board game IQ Digits, it keeps the box-art colors so every digit stays recognizable at a glance, in a clean digital interface rather than a skeuomorphic one.',
    howItWorks: [
      'Drag a piece from the tray onto the board, or drag a placed piece to move it; tap it in the tray to turn it a quarter turn.',
      'A clash — two pieces wanting the same bar — is refused outright: the shared bar turns red and a message names the other piece using it.',
      'Some boards start with pieces already placed and locked as clues; the rest is up to you.',
      'Undo steps back one move at a time; Clear sends every movable piece back to the tray.',
    ],
    features: [
      '250+ boards across ten colour-named level packs, with progress and a Mastered star tracked per level and per pack.',
      'A first-time interactive tutorial, plus an always-reachable "How to play" reference screen.',
      'Hints that place one correct digit from the solution, with a limited count shown on the button.',
      'Some levels have more than one valid layout — every solution you find for a level can be replayed from the Levels screen.',
      'A daily puzzle with its own streak counter.',
      'Stats and achievements, saved on the device.',
      'Light and dark themes, with colour-blind-friendly and high-contrast digit palettes.',
      'Translated into Portuguese, Spanish, French and German.',
      'Runs entirely offline — no accounts, no network calls, no analytics.',
    ],
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
    microsite: '/Sphinx/index.html',
  },
  {
    slug: 'freecell-plus',
    name: 'Freecell Plus',
    tagline: 'A small userscript upgrade for FreeCell on Solitaire Bliss.',
    description:
      'A Tampermonkey userscript that improves the FreeCell experience on Solitaire Bliss, built with the same branching and task-ID discipline as the rest of this brand.',
    stack: 'Tampermonkey userscript',
    status: 'in development',
    repo: 'https://github.com/joaorodr84/freecell-plus',
  },
  {
    slug: 'watchr',
    name: 'Watchr',
    tagline: 'Track every show and film you watch, with the people you watch them with.',
    description:
      'A personal TV and film tracking app with multi-user support, advanced watch history management, calendar views, statistics, badges, and import from IMDb, Trakt.tv and Netflix.',
    stack: 'Web app + backend',
    status: 'in development',
    website: 'https://watchr.pt',
  },
];
