import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../projects/project';
import { PROJECTS } from '../projects/projects.data';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly projects = PROJECTS;

  // `stack` is one human-written string ("Angular + NestJS + PostgreSQL"),
  // which is how the project page prints it. The card shows each
  // technology as its own chip, so it is split here rather than making
  // every data entry carry the same list twice.
  protected stackParts(project: Project): string[] {
    return project.stack
      .split('+')
      .map((part) => part.trim())
      .filter((part) => part.length > 0);
  }
}
