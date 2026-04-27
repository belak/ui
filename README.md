# @belak/ui

Shared styles, Svelte 5 components, and small utilities for personal
projects. Opinionated. Defaults reflect how I build apps and aren't
configurable.

## Installation

```
npm install github:belak/ui
```

The package ships raw TypeScript and Svelte source. Your app handles
compilation (SvelteKit does this automatically).

Peer dependencies: `svelte ^5`, `@lucide/svelte ^1` (icons used by
`Modal`, `ActionMenu`, `Breadcrumb`).

## CSS

```js
import "@belak/ui/css";     // tokens + reset (recommended)
import "@belak/ui/tokens";  // design tokens only
import "@belak/ui/reset";   // reset only
```

Tokens cover colors, spacing, type scale, shadows, and layout values.
Light and dark themes are handled automatically via `prefers-color-scheme`.

## Components

```ts
import { Button, Card, Modal, Toast, showToast, ... } from "@belak/ui";
```

Each component is documented inline. Hover over the import in your
editor to see props and usage examples.

Components: `ActionItem` `ActionMenu` `Badge` `Breadcrumb` `Button`
`Card` `ConfirmModal` `Container` `EmptyState` `GridSkeleton` `Modal`
`Nav` `NavDropdown` `NavItem` `PageHeader` `Pagination` `Shell`
`Skeleton` `StatusMessage` `TableSkeleton` `Theme` `Toast`

## Utilities

```ts
import { formatSize, useDelayedLoading } from "@belak/ui/util";
```

- `formatSize(bytes)` returns binary file sizes ("1.5 MB", 1024-step).
- `useDelayedLoading(getSource, delayMs?)` returns a reactive boolean
  that flips true only after the source stays truthy for `delayMs`.
  Prevents flash-of-spinner on fast loads.
