import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { filter, map } from 'rxjs';
import { LanguageSwitcher } from './language-switcher/language-switcher';
import { Project } from './projects/project';
import { PROJECTS } from './projects/projects.data';
import { ThemeToggle } from './theme-toggle/theme-toggle';

@Component({
  imports: [LanguageSwitcher, RouterLink, RouterLinkActive, RouterOutlet, ThemeToggle, TranslocoPipe],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);

  protected readonly projects = PROJECTS;
  protected readonly year = new Date().getFullYear();

  // Projects without a microsite (Watchr, Freecell Plus) render through
  // ProjectPage inside this shell, so the shell swaps the all-projects nav
  // for that project's own section links instead (DEF-34, DEF-35).
  protected readonly activeProject = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.projectForUrl(this.router.url)),
    ),
    { initialValue: this.projectForUrl(this.router.url) },
  );

  private projectForUrl(url: string): Project | undefined {
    const slug = /^\/projects\/([^/?#]+)/.exec(url)?.[1];
    return slug ? PROJECTS.find((project) => project.slug === slug && !project.microsite) : undefined;
  }
}
