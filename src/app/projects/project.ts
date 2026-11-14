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
  // Optional (DEF-11): a self-contained static site under public/, served
  // as-is rather than through the shared project-page template. When set,
  // the home card links straight here instead of the internal route.
  microsite?: string;
  // Optional (DEF-22): the project's own brand colour, one value per theme
  // because a colour dark enough to read on white is too dark on the dark
  // surface. Tints whatever renders the project (its page, its home card);
  // without it the site's own accent is used.
  accent?: { light: string; dark: string };
}
