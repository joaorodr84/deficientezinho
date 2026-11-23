import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { App } from './app';
import { routes } from './app.routes';

// The language switcher (DEF-36) needs a TranslocoService, so every test
// here provides one. The nav's own section links reuse project-page.html's
// projectPage.* chrome keys (DEF-37) -- mirrors public/i18n/en-GB.json,
// same convention theme-toggle.spec.ts uses for its own hardcoded labels.
function translocoTesting() {
  const projectPage = {
    whyItExists: 'Why it exists',
    howItWorksHeading: 'How it works',
    featuresHeading: 'Features',
    detailsHeading: 'Details',
  };
  return TranslocoTestingModule.forRoot({
    langs: { 'en-GB': { projectPage }, 'pt-PT': {} },
    translocoConfig: { availableLangs: ['en-GB', 'pt-PT'], defaultLang: 'en-GB' },
  });
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, translocoTesting()],
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

  it('renders the theme toggle on every page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('app-theme-toggle button').length).toBe(3);
  });

  it('renders the language switcher on every page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('app-language-switcher button').length).toBe(2);
  });

  // DEF-34, DEF-35: Watchr and Freecell Plus render through the shared
  // ProjectPage, inside this shell's nav, so the shell must swap the
  // all-projects list for that project's own section links there instead.
  describe('on a project page rendered through the shared template', () => {
    async function navigateTo(slug: string): Promise<HTMLElement> {
      await TestBed.resetTestingModule()
        .configureTestingModule({
          imports: [App, translocoTesting()],
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
