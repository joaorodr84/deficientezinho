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
    microsite: '/projects/digispin/index.html',
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
      'A personal TV and film tracking app with multi-user support, advanced watch history management, calendar views, statistics, badges, and import from IMDb, Trakt.tv, Netflix and TV Time.',
    stack: 'Angular + NestJS + PostgreSQL',
    status: 'in development',
    website: 'https://watchr.pt',
    overview:
      'Each invited user gets their own library, watch history and privacy settings, so one shared Watchr instance still feels personal. Shows and films are tracked with metadata pulled live from TMDb, and a show’s status — Plan to Watch, Watching, On Hold, Up to Date, Completed — updates itself overnight and the moment you mark an episode watched, so My Shows never falls out of sync with what actually aired.',
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
];
