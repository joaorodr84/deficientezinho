import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    slug: 'digispin',
    name: 'DigiSpin',
    tagline: 'Ten rotatable digits, one tight board, zero shared slots.',
    description:
      'A single-player puzzle game: place ten rotatable digit pieces (0-9) on a 5x4 board of slots without any two bars sharing a slot. Inspired by SmartGames’ IQ Digits.',
    stack: 'React Native + Expo',
    status: 'in development',
    repo: 'https://github.com/joaorodr84/digispin',
    overview:
      'Inspired by SmartGames’ physical board game IQ Digits, DigiSpin keeps the box-art colors so every digit stays recognizable at a glance, in a clean digital interface rather than a skeuomorphic one.',
    howItWorks: [
      'The board is 5 columns x 4 rows of cells — 49 slots in total, lying on the edges between cells, not inside them.',
      'Pieces are seven-segment digits spanning one or two cells. Any piece can be rotated 0°, 90°, 180° or 270°.',
      'The one rule: two bars can never occupy the same slot, and two pieces can never cross straight through the same corner.',
      'The puzzle is solved once every piece is on the board and no slot is used twice.',
    ],
    features: [
      'Drag pieces from the tray, rotate and place them on the board, with illegal moves flagged at the clashing slot in real time.',
      'Undo, a move counter and a per-puzzle timer.',
      'A curated set of levels — from a hand-picked tier through a full outer set — shown as a grid that unlocks as you solve.',
      'Hints that place one correct digit from the level’s solution when you’re stuck.',
      'Stats and achievements, saved on the device.',
      'Replays: once a level is solved, its other valid layouts unlock to view.',
      'Light and dark themes, with a choice of digit color palettes in Settings.',
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
