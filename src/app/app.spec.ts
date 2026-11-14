import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

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
});
