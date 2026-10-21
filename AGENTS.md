# Project Instructions

## Git operations require explicit approval

- Do not run any Git command or perform any Git-related operation in this project without first asking the user and receiving explicit approval in the current conversation.
- This restriction includes read-only commands such as `git status`, `git diff`, `git log`, `git show`, and `git branch`, as well as any command or tool action that reads or changes Git state.
- Do not stage, commit, amend, switch branches, create branches or tags, merge, rebase, cherry-pick, stash, reset, restore, clean, fetch, pull, push, or open/update a pull request without that prior approval.
- Approval for a non-Git task does not imply approval for Git operations. State the exact Git operation or clearly bounded group of Git operations when requesting permission.

## Reusable UI components

- Before creating or changing UI components, read the Components section in `DESIGN.md` and inspect existing components under `src/components`.
- Reuse or extend an existing component when it fits the request instead of recreating its behavior or copying its implementation into another component.
- When adding or materially changing a reusable component, update its entry in `DESIGN.md` with its path, purpose, main props, and a short usage example. Verify the entry against the implementation.
- For animated CTAs with an expanding dot, check `src/components/InteractiveHoverButton/index.tsx` first.
