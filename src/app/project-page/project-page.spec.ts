import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { ProjectPage } from './project-page';

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
});
