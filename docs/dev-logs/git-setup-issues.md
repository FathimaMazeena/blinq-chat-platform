# Git Commit Editor / Vim Issue Log

## Problem

While running:

git commit

Git opened Vim as the default editor instead of VS Code.

Encountered:
- Vim swap file warning
- `.COMMIT_EDITMSG.swp`
- `code --wait: command not found`

## Cause

VS Code was configured as Git editor before enabling the `code` shell command in PATH.

## Fixes Used

### Exit Vim Without Saving

:q!

### Remove Vim Swap File

rm .git/.COMMIT_EDITMSG.swp

### Configure VS Code As Git Editor

git config --global core.editor "code --wait"

### Enable VS Code CLI Command

Inside VS Code:

Cmd + Shift + P

Run:
Shell Command: Install 'code' command in PATH

### Verify

code --version

## Notes

Git opens the default terminal editor when running:

git commit

without the `-m` flag.

Using VS Code as the Git editor provides a cleaner workflow for writing detailed commit messages.