import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { LANG_STORAGE_KEY, LanguageSwitcher, initialLocale } from './language-switcher';

describe('LanguageSwitcher', () => {
  async function createFixture(): Promise<ComponentFixture<LanguageSwitcher>> {
    await TestBed.configureTestingModule({
      imports: [
        LanguageSwitcher,
        TranslocoTestingModule.forRoot({
          langs: { 'en-GB': {}, 'pt-PT': {} },
          translocoConfig: { availableLangs: ['en-GB', 'pt-PT'], defaultLang: 'en-GB' },
        }),
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(LanguageSwitcher);
    await fixture.whenStable();
    return fixture;
  }

  function button(fixture: ComponentFixture<LanguageSwitcher>, label: string): HTMLButtonElement {
    const found = fixture.nativeElement.querySelector(`button[aria-label="${label}"]`);
    if (!found) {
      throw new Error(`No ${label} button`);
    }
    return found;
  }

  // The stored choice is page-global, so each test has to start from, and
  // leave behind, the "nothing chosen" state.
  beforeEach(() => {
    localStorage.removeItem(LANG_STORAGE_KEY);
  });
  afterEach(() => {
    localStorage.removeItem(LANG_STORAGE_KEY);
  });

  it('marks English active by the configured default language', async () => {
    const fixture = await createFixture();

    expect(button(fixture, 'English').getAttribute('aria-pressed')).toBe('true');
    expect(button(fixture, 'Português').getAttribute('aria-pressed')).toBe('false');
  });

  it('switches and remembers the chosen language', async () => {
    const fixture = await createFixture();

    button(fixture, 'Português').click();
    await fixture.whenStable();

    expect(localStorage.getItem(LANG_STORAGE_KEY)).toBe('pt-PT');
    expect(button(fixture, 'Português').getAttribute('aria-pressed')).toBe('true');
    expect(button(fixture, 'English').getAttribute('aria-pressed')).toBe('false');
  });

  it('still switches the language when storage is unavailable', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });

    try {
      const fixture = await createFixture();
      button(fixture, 'Português').click();
      await fixture.whenStable();

      expect(button(fixture, 'Português').getAttribute('aria-pressed')).toBe('true');
    } finally {
      setItem.mockRestore();
    }
  });

  describe('initialLocale', () => {
    beforeEach(() => {
      localStorage.removeItem(LANG_STORAGE_KEY);
    });

    it('uses the saved locale when one is stored', () => {
      localStorage.setItem(LANG_STORAGE_KEY, 'pt-PT');

      expect(initialLocale()).toBe('pt-PT');
    });

    it('falls back to the browser language when nothing is stored', () => {
      const lang = vi.spyOn(navigator, 'language', 'get').mockReturnValue('pt-BR');

      try {
        expect(initialLocale()).toBe('pt-PT');
      } finally {
        lang.mockRestore();
      }
    });

    it('defaults to English when neither storage nor the browser language is Portuguese', () => {
      const lang = vi.spyOn(navigator, 'language', 'get').mockReturnValue('fr-FR');

      try {
        expect(initialLocale()).toBe('en-GB');
      } finally {
        lang.mockRestore();
      }
    });
  });
});
