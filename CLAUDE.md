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
