import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import { Project } from '../projects/project';
import { PROJECTS } from '../projects/projects.data';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
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
  // and link straight to its static microsite under public/projects/Sphinx.
  it('links a project with a microsite straight to it, not the internal project route', () => {
    const card = cardFor('Sphinx');

    expect(card.getAttribute('href')).toBe('/projects/Sphinx/index.html');
  });

  it('links a project without a microsite to its internal project route', () => {
    const card = cardFor('DigiSpin');

    expect(card.getAttribute('href')).toContain('/projects/digispin');
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
