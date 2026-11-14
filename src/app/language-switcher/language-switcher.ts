import { Component, DOCUMENT, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

export type Locale = 'en-GB' | 'pt-PT';

// The same key, and the same two locale codes, that CLAUDE.md's "site-wide
// template" documents for the static mini sites' own switcher (DEF-39), so
// the choice is already readable across both layers even though nothing
// shares it yet -- no mini site has wired that mechanism in.
export const LANG_STORAGE_KEY = 'deficientezinho-lang';

// Read once at bootstrap (see app.config.ts), so the very first translation
// request is for the right locale instead of always starting in English
// and re-rendering once storage/the browser's language is checked.
export function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en-GB' || saved === 'pt-PT') {
      return saved;
    }
  } catch {}
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt-PT' : 'en-GB';
}

@Component({
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.scss',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  private readonly document = inject(DOCUMENT);
  private readonly transloco = inject(TranslocoService);

  // Autonyms, not translated: a language's own name is conventionally
  // shown in that language, not in whichever one is currently active.
  protected readonly options: { locale: Locale; code: string; label: string }[] = [
    { locale: 'en-GB', code: 'EN', label: 'English' },
    { locale: 'pt-PT', code: 'PT', label: 'Português' },
  ];

  protected readonly active = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  protected choose(locale: Locale): void {
    this.transloco.setActiveLang(locale);
    // Storage throws in some private windows and when site data is
    // blocked; the choice then simply lasts for this page view.
    try {
      this.document.defaultView?.localStorage.setItem(LANG_STORAGE_KEY, locale);
    } catch {}
  }
}
