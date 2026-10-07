import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { ProjectPage } from './project-page';
import { Project } from '../projects/project';
import { PROJECTS } from '../projects/projects.data';

async function createFixture(slug: string): Promise<ComponentFixture<ProjectPage>> {
  TestBed.resetTestingModule();
  await TestBed.configureTestingModule({
    imports: [ProjectPage],
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

  // DEF-9: the richer sections are optional, so a project with none of them
  // must render the page it had before, with no empty "How it works"/
  // "Features" headings left behind.
  it('omits the overview, how-it-works and features sections for a project without them', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).not.toContain('How it works');
    expect(text).not.toContain('Features');
  });

  it('renders the overview, how-it-works and features sections for a project that has them', async () => {
    // A transient entry rather than a mutation of a real project: it's
    // pushed onto PROJECTS for this test only and popped off straight
    // after, so it can't leak into other tests or depend on DEF-10..13's
    // real content ever matching this shape.
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
      const richFixture = await createFixture('rich-test-project');
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
});
