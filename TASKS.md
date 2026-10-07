# Deficientezinho task ledger

Every task carries an ID of the form `DEF-<n>`. IDs are assigned once,
never reused, and never renumbered.

**Next ID to assign: `DEF-2`**

If this file and history ever disagree, history wins:

```sh
git log --oneline | grep -oE 'DEF-[0-9]+' | sort -t- -k2 -n | tail -1
```

## Open

| ID | Task | Status | Commit |
| --- | --- | --- | --- |

## Done

| ID | Task | Status | Date | Commit |
| --- | --- | --- | --- | --- |
| DEF-1 | Scaffold the Angular site: home page, a shared project-page route, and pages for DigiSpin, Sphinx, Freecell Plus and Watchr | done | 2026-10-07 | — |
