import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../projects/projects.data';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly projects = PROJECTS;
}
