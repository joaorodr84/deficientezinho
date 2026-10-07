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
