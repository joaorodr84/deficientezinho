import { Component, DOCUMENT, inject, signal } from '@angular/core';

export type ThemeChoice = 'light' | 'dark' | 'system';

// Shared with the inline script in src/index.html and with every static
// mini site under public/projects/, so a choice made on any of them holds
// on all the others. Per-site keys (what DigiSpin and Sphinx shipped with)
// were rejected once they were hosted together: a visitor who picked dark
// on the home page would land on a light mini site.
export const THEME_STORAGE_KEY = 'deficientezinho-theme';

@Component({
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.scss',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  private readonly document = inject(DOCUMENT);

  protected readonly options: { choice: ThemeChoice; label: string }[] = [
    { choice: 'light', label: 'Light' },
    { choice: 'dark', label: 'Dark' },
    { choice: 'system', label: 'Follow the device' },
  ];

  // Starts from the attribute rather than from storage: the inline script
  // in index.html has already applied the saved choice before Angular
  // boots, so the attribute is what the page is actually showing.
  protected readonly choice = signal<ThemeChoice>(this.currentChoice());

  protected choose(choice: ThemeChoice): void {
    const root = this.document.documentElement;
    // "system" is the absence of the attribute, not a third value: with no
    // attribute the prefers-color-scheme rules in styles.scss apply.
    if (choice === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', choice);
    }
    this.choice.set(choice);
    // Storage throws in some private windows and when site data is
    // blocked; the choice then simply lasts for this page view.
    try {
      this.document.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, choice);
    } catch {}
  }

  private currentChoice(): ThemeChoice {
    const attr = this.document.documentElement.getAttribute('data-theme');
    return attr === 'light' || attr === 'dark' ? attr : 'system';
  }
}
