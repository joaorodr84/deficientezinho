import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { Home } from './home';
import { Project } from '../projects/project';
import { PROJECTS } from '../projects/projects.data';

// Mirrors public/i18n/en-GB.json's home.*/projectStatus.* keys and the
// real projects it exercises below (same convention theme-toggle.spec.ts
// uses for its own hardcoded labels) -- keep in sync.
const EN_GB = {
  home: {
    tagline1: 'Just a crip.',
    tagline2: 'Writing code with his mouth.',
    tagline3: 'Or telling AI to do it.',
    pitch: 'Games, apps and small tools, all made by one person. Pick one to look around.',
    projectsEyebrow: 'Projects',
    toExplore: '{{count}} to explore',
    openMicrosite: 'Open the mini site',
    readMore: 'Read more',
  },
  projectStatus: {
    live: 'Live',
    inDevelopment: 'In development',
  },
  projects: {
    sphinx: {
      tagline: 'A Mystery appears. Correct or Pass, against the clock.',
      description:
        'A party game app: a Mystery appears, you swipe or tap Correct or Pass against a timer, and a results screen shows at the end.',
    },
    digispin: {
      tagline: 'Spin the digits, find the fits.',
      description:
        'Drag, rotate and reason your way through 250 boards — some solved in a minute, some worth sitting with.',
    },
    'freecell-plus': {
      tagline: 'A small userscript upgrade for FreeCell on Solitaire Bliss.',
      description:
        'Adds a one-click way to jump to the next unplayed numbered game, tracks every win\'s time, score and moves, and surfaces completion stats and personal bests — all saved locally and exportable as a backup.',
    },
    watchr: {
      tagline: 'Track every show and film you watch, with the people you watch them with.',
      description:
        'A personal TV and film tracking app with multi-user support, advanced watch history management, calendar views, statistics, badges, and import from IMDb, Trakt.tv, Netflix and TV Time.',
    },
  },
};

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Home,
        TranslocoTestingModule.forRoot({
          langs: { 'en-GB': EN_GB, 'pt-PT': {} },
          translocoConfig: { availableLangs: ['en-GB', 'pt-PT'], defaultLang: 'en-GB' },
        }),
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function cardFor(name: string): HTMLAnchorElement {
    const cards: HTMLAnchorElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('a.card'),
    );
    const card = cards.find((el) => el.textContent?.includes(name));
    if (!card) {
      throw new Error(`No card found for ${name}`);
    }
    return card;
  }

  // DEF-11: Sphinx's card must bypass the internal /projects/sphinx route
  // and link straight to its static microsite under public/projects/sphinx.
  it('links a project with a microsite straight to it, not the internal project route', () => {
    const card = cardFor('Sphinx');

    expect(card.getAttribute('href')).toBe('/projects/sphinx/index.html');
  });

  // DEF-17: same treatment as Sphinx, straight to the pre-built static page.
  it('links the DigiSpin card straight to its microsite', () => {
    const card = cardFor('DigiSpin');

    expect(card.getAttribute('href')).toBe('/projects/digispin/index.html');
  });

  it('links a project without a microsite to its internal project route', () => {
    const card = cardFor('Freecell Plus');

    expect(card.getAttribute('href')).toContain('/projects/freecell-plus');
  });

  // DEF-23: `stack` is one string in the data; the card shows one chip per
  // technology.
  it('shows each technology in a project stack as its own chip', () => {
    const chips: HTMLElement[] = Array.from(cardFor('Watchr').querySelectorAll('.stack li'));

    expect(chips.map((el) => el.textContent?.trim())).toEqual([
      'Angular',
      'NestJS',
      'PostgreSQL',
    ]);
  });

  // DEF-23: a card is tinted by its own project's colour pair, which the
  // global .project-accent rule turns into --accent for the active theme.
  it('tints a card with its project accent', () => {
    const card = cardFor('DigiSpin');

    expect(card.classList.contains('project-accent')).toBe(true);
    expect(card.style.getPropertyValue('--accent-light')).toBe('#b82c36');
    expect(card.style.getPropertyValue('--accent-dark')).toBe('#d6505a');
  });

  it('tells a mini site card apart from a project page card in its call to action', () => {
    expect(cardFor('Sphinx').querySelector('.cta')?.textContent).toContain('Open the mini site');
    expect(cardFor('Freecell Plus').querySelector('.cta')?.textContent).toContain('Read more');
  });

  // DEF-49: tagline, description and the status pill are looked up in the
  // dictionary (same keys the project page's hero reads), not read as-is
  // off the PROJECTS entry.
  it("translates a card's tagline, description and status pill", () => {
    const card = cardFor('Sphinx');

    expect(card.querySelector('.card-tagline')?.textContent).toBe(EN_GB.projects.sphinx.tagline);
    expect(card.querySelector('.card-description')?.textContent).toBe(
      EN_GB.projects.sphinx.description,
    );
    expect(card.querySelector('.status')?.textContent).toContain('In development');
  });

  // DEF-23: only projects with a logo mark of their own get one drawn; any
  // other project (including one added later with no accent) must still
  // render a complete card, with its initial standing in for the mark and
  // the site's own accent left in place.
  it('renders a card with a monogram and no tint for a project without a mark or accent', async () => {
    const plainProject: Project = {
      slug: 'plain-test-project',
      name: 'Plain Test Project',
      tagline: 'A tagline.',
      description: 'A description.',
      stack: 'A stack',
      status: 'in development',
    };
    PROJECTS.push(plainProject);

    try {
      const plainFixture = TestBed.createComponent(Home);
      await plainFixture.whenStable();
      const cards: HTMLAnchorElement[] = Array.from(
        plainFixture.nativeElement.querySelectorAll('a.card'),
      );
      const card = cards.find((el) => el.textContent?.includes('Plain Test Project'));

      expect(card?.querySelector('.monogram')?.textContent).toBe('P');
      expect(card?.classList.contains('project-accent')).toBe(false);
      expect(card?.querySelectorAll('.stack li').length).toBe(1);
    } finally {
      PROJECTS.pop();
    }
  });

  it('falls back to the internal project route once a microsite field is removed', async () => {
    const plainProject: Project = {
      slug: 'plain-test-project',
      name: 'Plain Test Project',
      tagline: 'A tagline.',
      description: 'A description.',
      stack: 'A stack',
      status: 'in development',
    };
    PROJECTS.push(plainProject);

    try {
      const plainFixture = TestBed.createComponent(Home);
      await plainFixture.whenStable();
      const cards: HTMLAnchorElement[] = Array.from(
        plainFixture.nativeElement.querySelectorAll('a.card'),
      );
      const card = cards.find((el) => el.textContent?.includes('Plain Test Project'));

      expect(card?.getAttribute('href')).toContain('/projects/plain-test-project');
    } finally {
      PROJECTS.pop();
    }
  });
});
