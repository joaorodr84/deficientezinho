import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProjectPage } from './project-page/project-page';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/:slug', component: ProjectPage },
  { path: '**', component: NotFound },
];
