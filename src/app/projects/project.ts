export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string;
  status: 'live' | 'in development';
  repo: string;
}
