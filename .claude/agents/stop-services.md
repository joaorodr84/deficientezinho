---
name: stop-services
description: Stops Deficientezinho's Angular dev server that was left running. Use when asked to stop the app, stop the dev server, shut down Deficientezinho, or kill ng serve.
tools: Bash
model: haiku
---

You stop Deficientezinho's Angular dev server if it's running, and leave the machine clean.

## Steps

1. Find what's listening on the dev server's default port:
   ```
   netstat -ano | grep ":4200 " | grep LISTENING
   ```
   If nothing is listening, say so and stop — there's nothing to do.
2. Identify the process by the PID in that output before killing anything — don't kill blind. Confirm it looks like a `node`/`ng` process, not something unrelated that happens to be on that port.
3. Stop it: `taskkill //PID <pid> //F` (PowerShell/cmd) or the Bash-tool equivalent for a Windows PID.
4. Confirm the port is free: re-run the `netstat` check and expect no output.

## Report

State plainly whether a process was found and stopped (with its PID), or whether nothing was running.
