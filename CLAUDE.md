# Deficientezinho

A brand site for Joao's other projects: a home page listing each one, and a
subpage per project with its tagline, description, stack and repo link. Built
with Angular (standalone components, TypeScript), independent of the stacks
the linked projects themselves use.

## Branch before you work

Create the branch before the first edit, not after. When a request will
change files here (code, tests, `TODO.md`, docs), the first action is
`git checkout -b <name>` off `develop` — checking out and pulling `develop`
first if `HEAD` isn't already there — so no work lands in the working tree
while `HEAD` is on `develop` or `main`.

- `<name>` is a plain `kebab-case-summary` of the change, prefixed with the
  task ID: `def-2-add-nextup-page`. Never a TODO priority prefix (`p1-`,
  `p2-`) — priority is a fact about the backlog at one moment, not about
  the change.
- Already on a branch other than `develop` or `main`: stay on it, don't
  branch off a branch.
- Skip branching for read-only work: answering questions, reading code,
  running tests or `ng serve`, investigating a bug without fixing it.
- Don't ask permission — this rule *is* the standing authorization.

`develop` and `main` are the two long-lived branches. `develop` is where
everything in progress lands; `main` only moves on a deliberate release
(see "Releases" below), never as a side effect of closing an ordinary
task. The `commit` agent ([.claude/agents/commit.md](.claude/agents/commit.md))
picks up from a feature branch: commit → land on `develop` (fast-forward
or squash) → delete the branch.

## Releases

`main` tracks what's actually published. Deficientezinho isn't live at a
real domain yet (see **Versions**), so this section is dormant for now —
there is nothing on `main` beyond what `develop` already has — but the
shape, once there's somewhere to publish to, matches the one Sphinx,
DigiSpin and Watchr already use:

1. Bump `package.json`'s `version` if this release hasn't already been
   bumped on `develop`.
2. Fast-forward `main` to `develop`: `git checkout main && git pull --ff-only
   origin main && git merge --ff-only develop`, then push it. If `main`
   can't fast-forward, stop and ask — don't force or rebase `main` to make
   it fit.
3. Tag the release (`vX.Y.Z`, matching `package.json`'s `version`) and push
   the tag.
4. `develop` keeps going unchanged; it's never reset or rebased onto `main`.

This is a deliberate, owner-requested action ("release", "ship", "publish")
— unlike the rest of this file, it is not standing authorization to merge
to `main` on your own judgment.

## Task completion workflow

1. **Make code changes** and commit them, with the task ID in the subject.
2. **Do bookkeeping in the same commit** — move the task to Done in
   `TASKS.md` (status `done`, today's date) and delete its `TODO.md` entry.
3. **Then provide the summary** — the task is finished only when that commit
   exists.

## Task IDs

Every task carries an ID `DEF-<n>`, registered in [TASKS.md](TASKS.md),
which holds the next free number at the top — take it and increment it in
the same commit that uses it.

**Claim the ID when the task is written down, not when it ships.** A new
`TODO.md` entry gets one immediately; the commit that closes it reuses that
same ID. One ID per *task*.

- Commit subject: `feat: Add the Watchr project page (DEF-2)`.
- Branch name: `def-2-add-watchr-page`.
- Bookkeeping (typo fixes, formatting, `TODO.md` tidying) may go unnumbered.
- Never renumber, never reuse, never rewrite an ID into an existing commit.

If `TASKS.md` and history disagree, history wins:

```sh
git log --oneline | grep -oE 'DEF-[0-9]+' | sort -t- -k2 -n | tail -1
```

## Commit messages

Deficientezinho follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

```text
<type>[optional scope][!]: <description> (DEF-<n>)

[body]

[footers]
```

- **Type** is required and lowercase. `feat` and `fix` first; `docs`,
  `refactor`, `perf`, `test`, `build`, `ci`, `chore` for changes that ship no
  behaviour.
- **Scope** names the area of the site (`feat(home):`), never the task. Leave
  it off when the change is broad.
- **Description**: plain-language imperative, capitalised, no trailing full
  stop.
- **Body** says what was wrong or missing, why this approach, what was
  rejected, and how it was verified. Not a one-line commit.
- `Co-Authored-By:` is a footer like any other.

## Adding a project page

Each project lives as one entry in
[src/app/projects/projects.data.ts](src/app/projects/projects.data.ts) (slug,
name, tagline, description, stack, status, repo). The `projects/:slug` route
and its page template are shared by every project — adding a project is
adding a data entry, not a new component, unless a project needs a page
layout the shared template can't express.

An entry's optional `accent` (`{ light, dark }`) is the project's own
colour; its page and home card are tinted with it.

A project with `overview`/`howItWorks`/`features` set also needs a
matching `projects.<slug>.{overview,howItWorks,features}` entry in
`public/i18n/en-GB.json` (see "Translating an Angular page" below) —
without it, that section shows the raw translation key instead of
text. `tagline`/`description` need no dictionary entry; the hero shows
those two fields as-is, untranslated, same as the home card.

## The site-wide template

The DigiSpin mini site set the design every page follows: the token names
(`--bg`, `--surface`, `--surface-2`, `--fg`, `--muted`, `--rule`,
`--accent`, `--accent-ink`, `--mono-accent`), Sora / IBM Plex Sans / IBM
Plex Mono, the `.wrap` / `.hero` / `.eyebrow` / `.section-head` / `.lede`
layout classes, the nav bar and footer, and the fixed light / dark /
follow-the-device toggle. [src/styles.scss](src/styles.scss) holds it for
the Angular pages; each static mini site under `public/projects/<slug>/`
carries its own copy inline, with its own palette.

A new mini site starts from DigiSpin's pages and changes the palette and
content. Four things must stay as they are for it to fit in:

- **The theme key.** Every page reads and writes `localStorage`'s
  `deficientezinho-theme` (`light`, `dark` or `system`), so one choice
  holds across the home page and all mini sites.
- **The nav's clearance for the toggle** (`.site-nav-inner`'s
  `padding-right` under 1180px), or the toggle covers the last link.
- **The footer link back** to `/`.
- **The language key.** `deficientezinho-lang`, holding `en-GB` or
  `pt-PT`. The Angular pages read and write it through Transloco (see
  below); a static mini site will too, once one is translated (DEF-40
  onward) — none is yet.

### Translating an Angular page (DEF-36)

[@jsverse/transloco](https://github.com/jsverse/transloco) runs the
Angular pages (home, Watchr, Freecell Plus). The pieces:

- **Dictionaries**: `public/i18n/en-GB.json` and `public/i18n/pt-PT.json`,
  fetched at runtime (not bundled) via
  [src/app/transloco-http-loader.ts](src/app/transloco-http-loader.ts) —
  same reasoning as the favicons and project logos already living in
  `public/`. Keys are nested one level per component (`home.tagline1`,
  `home.toExplore`), both locales carrying the same keys.
- **Wiring**: [src/app/app.config.ts](src/app/app.config.ts) calls
  `provideTransloco`, with `defaultLang` resolved once at bootstrap by
  [`initialLocale()`](src/app/language-switcher/language-switcher.ts)
  (the `deficientezinho-lang` key, falling back to the browser's own
  language, same shape as the theme toggle's `currentChoice()`).
- **Usage in a template**: `{{ 'home.tagline1' | transloco }}`, or with
  params, `{{ 'home.toExplore' | transloco: { count: n } }}`. A
  component using the pipe adds `TranslocoPipe` to its own `imports`.
- **The switcher**: [`LanguageSwitcher`](src/app/language-switcher/)
  (`<app-language-switcher />`), same button-group shape as
  [`ThemeToggle`](src/app/theme-toggle/), sharing its fixed top-right
  position via `.site-toolbar` in `app.html`/`app.scss` rather than each
  component positioning itself — the two buttons' own labels (`EN`/`PT`,
  `English`/`Português`) are autonyms, not translated.
- **Tests**: a component under test that pulls in `TranslocoPipe` or a
  child that injects `TranslocoService` (transitively, `App` does, via
  `LanguageSwitcher`) needs `TranslocoTestingModule.forRoot({ langs,
  translocoConfig })` in its `TestBed` imports — see `home.spec.ts` and
  `app.spec.ts`. Dictionary content used in assertions is duplicated
  into the spec file rather than imported, the same convention
  `theme-toggle.spec.ts` already uses for its own hardcoded labels; keep
  it in sync with the real JSON by hand.

`tagline`/`description`/`stack`/`status` in `PROJECTS`
([src/app/projects/projects.data.ts](src/app/projects/projects.data.ts))
stay untranslated everywhere they're shown (the home card, the project
page's hero) — translating them only on the project page would leave
the same project disagreeing with itself depending on which page a
visitor is on. `overview`/`howItWorks`/`features` (DEF-9's optional
richer sections, which only exist on the project page) are translated,
under `projects.<slug>.*` in the dictionary (DEF-37, DEF-38) — e.g.
`projects.watchr.overview`, `projects.watchr.howItWorks`.

Transloco flattens a nested dictionary into dotted keys at load time,
but **arrays are a leaf, not expanded per index** — `howItWorks` becomes
one flat key holding the whole array, never `howItWorks.0`,
`howItWorks.1`, and so on. So `project-page.html` looks the array up
*once* and iterates the pipe's own result, not the other way round:

```html
@for (point of (('projects.' + project.slug + '.howItWorks') | transloco); track $index) {
  <p>{{ point }}</p>
}
```

not `@for (point of project.howItWorks; ...) { ... | transloco: ... + i ... }`,
which silently renders the untranslated key string for every item.

### Translating a static mini site (DEF-39)

The Angular pages get Transloco; a static mini site under
`public/projects/<slug>/` has no runtime to hand that to, so it carries
its own translation the same way it already carries its own theme
toggle: duplicated inline, per page, no build step, no shared file. This
is the mechanism every mini-site translation task (DEF-40 onward) wires
in; DEF-39 itself only establishes and documents it; no mini site is
translated yet.

Locales are the same two the Angular side starts with: `en-GB` and
`pt-PT`. Each page carries both, keyed exactly like that (not `en`/`pt`)
so a future shared "last language picked" could read the same value on
either side without translating codes — not built yet, just left
possible.

1. **A dictionary per page**, inline, right after the theme-toggle
   scripts — one `<script type="application/json">` holding every
   string that page uses, both locales at once:

   ```html
   <script type="application/json" id="i18n-strings">
     {
       "en-GB": { "tagline": "A hundred words in. <b>One picture for each, out.</b>" },
       "pt-PT": { "tagline": "Cem palavras à entrada. <b>Uma imagem por cada, à saída.</b>" }
     }
   </script>
   ```

   A `type="application/json"` script never executes and never renders,
   so it sits safely among the visible markup. Values may contain the
   same inline tags (`<b>`, `<code>`) the English copy already uses —
   they're applied with `innerHTML`, not `textContent`, because several
   existing strings (e.g. Crivo's tagline) depend on that.

2. **Mark translatable markup in place**, no separate copy of the
   template per locale:
   - Text content: `data-i18n="tagline"` on the element whose
     `innerHTML` that key replaces.
   - An attribute (`aria-label`, `title`, `alt`, `placeholder`, …):
     `data-i18n-attr-aria-label="theme-label"` — `data-i18n-attr-<name>`
     sets attribute `<name>` from that key. An element can carry more
     than one `data-i18n-attr-*`.
   - CLI snippets (`<pre><code>`) and other non-prose stay untranslated
     unless the task says otherwise.

3. **One switcher, next to the theme toggle** — same fixed-position
   cluster, same button-group shape, two choices instead of three:

   ```html
   <div class="lang-toggle" role="group" aria-label="Language">
     <button type="button" data-lang-choice="en-GB">EN</button>
     <button type="button" data-lang-choice="pt-PT">PT</button>
   </div>
   ```

4. **One inline script**, appended alongside the theme-toggle's own two
   scripts, applying the same shape (an IIFE, a `KEY` constant, a
   `try`/`catch` around every `localStorage` call, an `apply()` that
   both runs on load and on click):

   ```html
   <script>
     (function () {
       var KEY = 'deficientezinho-lang';
       var dict = JSON.parse(document.getElementById('i18n-strings').textContent);
       var buttons = document.querySelectorAll('[data-lang-choice]');

       function defaultLocale() {
         return (navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt-PT' : 'en-GB';
       }
       function currentLocale() {
         try {
           var saved = localStorage.getItem(KEY);
           if (saved && dict[saved]) return saved;
         } catch (e) {}
         return dict[defaultLocale()] ? defaultLocale() : 'en-GB';
       }
       function apply(locale) {
         var strings = dict[locale] || dict['en-GB'];
         document.documentElement.lang = locale.slice(0, 2);
         document.querySelectorAll('[data-i18n]').forEach(function (el) {
           var key = el.getAttribute('data-i18n');
           if (strings[key] != null) el.innerHTML = strings[key];
         });
         document.querySelectorAll('[data-i18n-attr-aria-label], [data-i18n-attr-title]').forEach(function (el) {
           // One branch per data-i18n-attr-<name> the page actually uses.
           ['aria-label', 'title', 'alt', 'placeholder'].forEach(function (attr) {
             var key = el.getAttribute('data-i18n-attr-' + attr);
             if (key && strings[key] != null) el.setAttribute(attr, strings[key]);
           });
         });
         buttons.forEach(function (btn) {
           btn.classList.toggle('active', btn.getAttribute('data-lang-choice') === locale);
         });
       }

       buttons.forEach(function (btn) {
         btn.addEventListener('click', function () {
           var locale = btn.getAttribute('data-lang-choice');
           apply(locale);
           try { localStorage.setItem(KEY, locale); } catch (e) {}
         });
       });
       apply(currentLocale());
     })();
   </script>
   ```

A mini-site translation task (DEF-40 onward) adds the dictionary,
tags the existing markup with `data-i18n`/`data-i18n-attr-*`, pastes in
the switcher and script once per page, and writes the `pt-PT` copy —
the English strings move into the dictionary's `en-GB` entry unchanged,
so the page's visible English output doesn't change.

## Versions

`package.json`'s `version` is the real version. Deficientezinho starts at
`0.1.0` and stays `0.x` until the site is live at its real domain.

## Tests

| Suite | Command | What it is |
| --- | --- | --- |
| Unit | `npm test` | Vitest, via the Angular CLI's built-in test runner, colocated with the code (`foo.spec.ts` beside `foo.ts`) |

What a change owes them:

- **A component with logic gets a test** — data lookups, routing decisions,
  anything beyond a static template.
- **A bug fix gets the test that would have caught it**, failing against the
  unfixed code and passing after.
- **A flaky test is a bug in the test.** Fix the race; don't retry it away.
- **A UI change is also looked at in a browser** (`npm start`) before it
  lands.

## Comments

Comments here record *why*, name the alternative that was rejected, and
carry the reasoning behind the decision — not a restatement of the line
below them. Put them above the constant, the check or the guard they
explain.

## Where decisions live

Commit bodies and code comments. `TODO.md`, `TASKS.md` and `CHANGELOG.md` are
the exceptions: what is planned, which ID names it, and what shipped.
