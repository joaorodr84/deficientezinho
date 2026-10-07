export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string;
  status: 'live' | 'in development';
  // Optional: omitted for projects whose repo is private, so the page has
  // nothing to link to.
  repo?: string;
  // Optional: only set for projects with a public site to point visitors at.
  website?: string;
  // Optional richer sections (DEF-9): omitted projects fall back to the
  // tagline/description-only page they had before.
  overview?: string;
  howItWorks?: string[];
  features?: string[];
}
