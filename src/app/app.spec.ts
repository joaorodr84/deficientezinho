import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the brand link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.site-nav-brand')?.textContent).toContain('Deficientezinho');
  });

  function navLink(root: HTMLElement, name: string): HTMLAnchorElement {
    const links: HTMLAnchorElement[] = Array.from(root.querySelectorAll('.site-nav-links a'));
    const link = links.find((el) => el.textContent?.trim() === name);
    if (!link) {
      throw new Error(`No nav link for ${name}`);
    }
    return link;
  }

  // DEF-22: the nav follows the same rule as the home cards (DEF-11). A
  // project with a static mini site is a full page load to it; the others
  // stay inside the app on the shared project route.
  it('links each project in the nav to its mini site, or to its project route without one', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(navLink(compiled, 'DigiSpin').getAttribute('href')).toBe(
      '/projects/digispin/index.html',
    );
    expect(navLink(compiled, 'Watchr').getAttribute('href')).toBe('/projects/watchr');
  });

  it('renders the theme toggle on every page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('app-theme-toggle button').length).toBe(3);
  });

  // DEF-34, DEF-35: Watchr and Freecell Plus render through the shared
  // ProjectPage, inside this shell's nav, so the shell must swap the
  // all-projects list for that project's own section links there instead.
  describe('on a project page rendered through the shared template', () => {
    async function navigateTo(slug: string): Promise<HTMLElement> {
      await TestBed.resetTestingModule()
        .configureTestingModule({
          imports: [App],
          providers: [provideRouter(routes)],
        })
        .compileComponents();

      const fixture = TestBed.createComponent(App);
      const router = TestBed.inject(Router);
      await router.navigateByUrl(`/projects/${slug}`);
      fixture.detectChanges();
      await fixture.whenStable();
      return fixture.nativeElement as HTMLElement;
    }

    it("shows Watchr's own sections instead of the all-projects list", async () => {
      const compiled = await navigateTo('watchr');

      expect(compiled.querySelector('.site-nav-brand')?.textContent).toContain('Watchr');
      const links = Array.from(compiled.querySelectorAll('.site-nav-links a')).map((a) =>
        a.textContent?.trim(),
      );
      expect(links).toEqual(['Why it exists', 'How it works', 'Features', 'Details']);
    });

    it("shows Freecell Plus's own sections instead of the all-projects list", async () => {
      const compiled = await navigateTo('freecell-plus');

      expect(compiled.querySelector('.site-nav-brand')?.textContent).toContain('Freecell Plus');
      const links = Array.from(compiled.querySelectorAll('.site-nav-links a')).map((a) =>
        a.textContent?.trim(),
      );
      expect(links).toEqual(['Why it exists', 'How it works', 'Features', 'Details']);
    });

    it('falls back to the all-projects nav on a project with a microsite', async () => {
      const compiled = await navigateTo('digispin');

      expect(compiled.querySelector('.site-nav-brand')?.textContent).toContain('Deficientezinho');
    });
  });
});
