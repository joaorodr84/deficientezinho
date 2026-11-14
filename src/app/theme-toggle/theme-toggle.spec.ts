import { ComponentFixture, TestBed } from '@angular/core/testing';
import { THEME_STORAGE_KEY, ThemeToggle } from './theme-toggle';

describe('ThemeToggle', () => {
  const root = document.documentElement;

  async function createFixture(): Promise<ComponentFixture<ThemeToggle>> {
    await TestBed.configureTestingModule({ imports: [ThemeToggle] }).compileComponents();
    const fixture = TestBed.createComponent(ThemeToggle);
    await fixture.whenStable();
    return fixture;
  }

  function button(fixture: ComponentFixture<ThemeToggle>, label: string): HTMLButtonElement {
    const found = fixture.nativeElement.querySelector(`button[aria-label="${label}"]`);
    if (!found) {
      throw new Error(`No ${label} button`);
    }
    return found;
  }

  function activeLabels(fixture: ComponentFixture<ThemeToggle>): (string | null)[] {
    const active: HTMLButtonElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('button.active'),
    );
    return active.map((el) => el.getAttribute('aria-label'));
  }

  // The attribute and the stored choice are page-global, so each test has
  // to start from, and leave behind, the "nothing chosen" state.
  beforeEach(() => {
    root.removeAttribute('data-theme');
    localStorage.removeItem(THEME_STORAGE_KEY);
  });
  afterEach(() => {
    root.removeAttribute('data-theme');
    localStorage.removeItem(THEME_STORAGE_KEY);
  });

  it('marks "follow the device" active when no theme is forced', async () => {
    const fixture = await createFixture();

    expect(activeLabels(fixture)).toEqual(['Follow the device']);
  });

  // The inline script in index.html applies the saved choice before
  // Angular boots; the toggle has to reflect that, not reset it.
  it('reflects a theme already forced on the page when it starts', async () => {
    root.setAttribute('data-theme', 'dark');

    const fixture = await createFixture();

    expect(activeLabels(fixture)).toEqual(['Dark']);
  });

  it('forces and remembers a theme when one is picked', async () => {
    const fixture = await createFixture();

    button(fixture, 'Dark').click();
    await fixture.whenStable();

    expect(root.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(activeLabels(fixture)).toEqual(['Dark']);
    expect(button(fixture, 'Dark').getAttribute('aria-pressed')).toBe('true');
    expect(button(fixture, 'Light').getAttribute('aria-pressed')).toBe('false');
  });

  // "system" must clear the attribute rather than store it there, or the
  // prefers-color-scheme rules would never apply again.
  it('goes back to following the device by removing the forced theme', async () => {
    root.setAttribute('data-theme', 'light');
    const fixture = await createFixture();

    button(fixture, 'Follow the device').click();
    await fixture.whenStable();

    expect(root.hasAttribute('data-theme')).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('system');
    expect(activeLabels(fixture)).toEqual(['Follow the device']);
  });

  it('still switches the theme when storage is unavailable', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });

    try {
      const fixture = await createFixture();
      button(fixture, 'Light').click();
      await fixture.whenStable();

      expect(root.getAttribute('data-theme')).toBe('light');
      expect(activeLabels(fixture)).toEqual(['Light']);
    } finally {
      setItem.mockRestore();
    }
  });
});
