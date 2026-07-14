# Contributing to Pulseer Dashboard

Thank you for contributing! This project uses **GrantFox** for grant management. All contributions are tracked and eligible for rewards through the GrantFox platform.

We follow standard Next.js and TypeScript coding conventions.

## Local Setup

1. `npm install`
2. `npm run dev`

## Coding Standards

- Use **TypeScript** with strict typing.
- Use **Tailwind CSS** for styling.
- Follow the **shadcn/ui** component patterns.
- Keep business logic in hooks or separate library files, not in UI components.
- Document components with descriptive names and comments where logic is non-trivial.

## Testing Expectations

- Include **Vitest** unit tests for new utility logic or complex hooks.
- Include **Playwright** e2e tests for new pages or critical user flows.
- Ensure `npm run lint` and `npm run typecheck` pass before submitting a PR.

## PR Guidelines

- Provide a clear description of the change.
- Include screenshots for UI changes.
- Update documentation in `docs/` if architecture or features change.
