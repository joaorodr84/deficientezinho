import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { TranslocoService, TranslocoTestingModule } from '@jsverse/transloco';
import { ProjectPage } from './project-page';
import { Project } from '../projects/project';
import { PROJECTS } from '../projects/projects.data';

// Mirrors public/i18n/en-GB.json's projectPage.*/projectStatus.* keys
// (same convention theme-toggle.spec.ts uses for its own hardcoded
// labels) -- keep in sync.
const PROJECT_PAGE_CHROME = {
  backLink: 'All projects',
  overviewEyebrow: 'Overview',
  whyItExists: 'Why it exists',
  stepByStepEyebrow: 'Step by step',
  howItWorksHeading: 'How it works',
  whatsInItEyebrow: "What's in it",
  featuresHeading: 'Features',
  aboutThisBuildEyebrow: 'About this build',
  detailsHeading: 'Details',
  stackLabel: 'Stack',
  statusLabel: 'Status',
  websiteLabel: 'Website',
  repositoryLabel: 'Repository',
  visitSite: 'Visit the site',
  sourceOnGithub: 'Source on GitHub',
  notFoundEyebrow: 'Not found',
  notFoundHeading: 'Project not found',
  backHome: 'Back home',
};

const PROJECT_STATUS = {
  live: 'Live',
  inDevelopment: 'In development',
};

// Optional per-test overrides for `projects.<slug>.*` -- only a project
// with an overview/howItWorks/features section touches those keys at all.
async function createFixture(
  slug: string,
  enProjectsDict: Record<string, unknown> = {},
  ptProjectsDict: Record<string, unknown> = {},
): Promise<ComponentFixture<ProjectPage>> {
  TestBed.resetTestingModule();
  await TestBed.configureTestingModule({
    imports: [
      ProjectPage,
      TranslocoTestingModule.forRoot({
        langs: {
          'en-GB': {
            projectPage: PROJECT_PAGE_CHROME,
            projectStatus: PROJECT_STATUS,
            projects: enProjectsDict,
          },
          'pt-PT': { projects: ptProjectsDict },
        },
        translocoConfig: {
          availableLangs: ['en-GB', 'pt-PT'],
          defaultLang: 'en-GB',
          // Needed to actually re-render after setActiveLang() below --
          // without it, a pipe only ever shows the first lang it resolved.
          reRenderOnLangChange: true,
        },
      }),
    ],
    providers: [
      provideRouter([]),
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { paramMap: convertToParamMap({ slug }) } },
      },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(ProjectPage);
  await fixture.whenStable();
  return fixture;
}

describe('ProjectPage', () => {
  let component: ProjectPage;
  let fixture: ComponentFixture<ProjectPage>;

  beforeEach(async () => {
    fixture = await createFixture('digispin');
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Watchr's repo is private, so the page must link only to its public
  // website and never render a Repository link pointing nowhere useful.
  it('links to the website and hides the repository link for a project without a public repo', async () => {
    const watchrFixture = await createFixture('watchr');
    const text = watchrFixture.nativeElement.textContent;

    expect(text).toContain('Website');
    expect(text).not.toContain('Repository');
  });

  it('links to the repository for a project that has one', async () => {
    const digispinFixture = await createFixture('digispin');
    const text = digispinFixture.nativeElement.textContent;

    expect(text).toContain('Repository');
  });

  // The hero looks tagline/description up in the dictionary, the same
  // projects.<slug>.* keys the home card reads (DEF-49), so the two never
  // disagree on the same project's copy.
  it("translates a project's tagline, description and status", async () => {
    const digispinFixture = await createFixture('digispin', {
      digispin: { tagline: 'Spin the digits, find the fits.', description: 'A digit puzzle.' },
    });
    const text = digispinFixture.nativeElement.textContent;

    expect(text).toContain('Spin the digits, find the fits.');
    expect(text).toContain('A digit puzzle.');
    expect(text).toContain('Live');
  });

  // DEF-9: the richer sections are optional, so a project with none of them
  // must render the page it had before, with no empty "How it works"/
  // "Features" headings left behind. Both this test and the one below use
  // a transient PROJECTS entry rather than a real slug, so neither depends
  // on which real projects DEF-10..13 happen to have given this content to.
  it('omits the overview, how-it-works and features sections for a project without them', async () => {
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
      const plainFixture = await createFixture('plain-test-project');
      const text = plainFixture.nativeElement.textContent;

      expect(text).not.toContain('How it works');
      expect(text).not.toContain('Features');
    } finally {
      PROJECTS.pop();
    }
  });

  it('renders the overview, how-it-works and features sections for a project that has them', async () => {
    const richProject: Project = {
      slug: 'rich-test-project',
      name: 'Rich Test Project',
      tagline: 'A tagline.',
      description: 'A description.',
      stack: 'A stack',
      status: 'in development',
      overview: 'A longer overview paragraph.',
      howItWorks: ['Place pieces on the board.'],
      features: ['Drag, rotate and place.'],
    };
    PROJECTS.push(richProject);

    try {
      const richFixture = await createFixture('rich-test-project', {
        'rich-test-project': {
          overview: 'A longer overview paragraph.',
          howItWorks: ['Place pieces on the board.'],
          features: ['Drag, rotate and place.'],
        },
      });
      const text = richFixture.nativeElement.textContent;

      expect(text).toContain('A longer overview paragraph.');
      expect(text).toContain('How it works');
      expect(text).toContain('Place pieces on the board.');
      expect(text).toContain('Features');
      expect(text).toContain('Drag, rotate and place.');
    } finally {
      PROJECTS.pop();
    }
  });

  // DEF-37: this is the thing that actually broke during development --
  // Transloco flattens dictionaries, so a per-array-index key
  // ("projects.<slug>.howItWorks.0") never resolves; the overview and
  // array-shaped sections have to be looked up and switched as a whole.
  it("updates the overview, how-it-works and features sections when the language switches", async () => {
    const fixture = await createFixture(
      'watchr',
      {
        watchr: {
          overview: 'English overview.',
          howItWorks: ['Step one.'],
          features: ['Feature one.'],
        },
      },
      {
        watchr: {
          overview: 'Visão em português.',
          howItWorks: ['Passo um.'],
          features: ['Funcionalidade um.'],
        },
      },
    );

    expect(fixture.nativeElement.textContent).toContain('English overview.');
    expect(fixture.nativeElement.textContent).toContain('Step one.');
    expect(fixture.nativeElement.textContent).toContain('Feature one.');

    TestBed.inject(TranslocoService).setActiveLang('pt-PT');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Visão em português.');
    expect(fixture.nativeElement.textContent).toContain('Passo um.');
    expect(fixture.nativeElement.textContent).toContain('Funcionalidade um.');
  });
});
