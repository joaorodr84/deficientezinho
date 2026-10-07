import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projects/projects.data';

@Component({
  imports: [RouterLink],
  selector: 'app-project-page',
  styleUrl: './project-page.scss',
  templateUrl: './project-page.html',
})
export class ProjectPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly project = PROJECTS.find(
    (project) => project.slug === this.route.snapshot.paramMap.get('slug'),
  );
}
