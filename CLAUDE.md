# Deficientezinho

A brand site for Joao's other projects: a home page listing each one, and a
subpage per project with its tagline, description, stack and repo link. Built
with Angular (standalone components, TypeScript), independent of the stacks
the linked projects themselves use.

## Branch before you work

Create the branch before the first edit, not after. When a request will
change files here (code, tests, `TODO.md`, docs), the first action is
`git checkout -b <name>` off `main`, so no work lands in the working tree
while `HEAD` is on `main`.

- `<name>` is a plain `kebab-case-summary` of the change, prefixed with the
  task ID: `def-2-add-nextup-page`.
- Already on a non-`main` branch: stay on it, don't branch off a branch.
- Skip branching for read-only work: answering questions, reading code,
  running tests or `ng serve`, investigating a bug without fixing it.
- Don't ask permission — this rule *is* the standing authorization.

`main` is the only long-lived branch. The `commit` agent
([.claude/agents/commit.md](.claude/agents/commit.md)) picks up from a
feature branch: commit → land on `main` (fast-forward or squash) → delete
the branch.

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
