import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PROJECTS } from './projects/projects.data';
import { ThemeToggle } from './theme-toggle/theme-toggle';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ThemeToggle],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly projects = PROJECTS;
  protected readonly year = new Date().getFullYear();
}
