# @belak/ui

Shared styles and Svelte 5 components for personal projects.

## Installation

```
npm install github:belak/ui
```

The package ships raw TypeScript and Svelte source. Your app handles
compilation (SvelteKit does this automatically).

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

Each component is documented inline — hover over the import in your editor
to see props and usage examples.

Components: `Badge` `Button` `Card` `Container` `EmptyState` `Modal` `Nav`
`NavDropdown` `NavItem` `PageHeader` `Shell` `StatusMessage` `Theme` `Toast`
