<!--
  @component
  Button or link. Renders an `<a>` when `href` is provided.

  ```svelte
  <Button variant="solid" color="primary" onclick={save}>Save</Button>
  <Button variant="solid" color="danger" onclick={del}>Delete</Button>
  <Button variant="ghost" color="danger" ariaLabel="Delete" title="Delete"><Trash2 /></Button>
  <Button href="/settings">Settings</Button>
  ```

  `variant`: `outline` (default) | `solid` | `ghost`
  `color`: `default` (default) | `primary` | `danger` | `warning`
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  type Variant = "outline" | "solid" | "ghost";
  type Color = "default" | "primary" | "danger" | "warning";

  let {
    variant = "outline",
    color = "default",
    type = "button",
    href,
    disabled = false,
    download,
    onclick,
    ariaLabel,
    title,
    children,
  }: {
    variant?: Variant;
    color?: Color;
    type?: "button" | "submit" | "reset";
    href?: string;
    disabled?: boolean;
    download?: string | boolean;
    onclick?: (e: MouseEvent) => void;
    ariaLabel?: string;
    title?: string;
    children: Snippet;
  } = $props();
</script>

{#if href}
  <a
    {href}
    download={download === true ? "" : download}
    class="btn btn-{variant} btn-{color}"
    aria-label={ariaLabel}
    {title}
  >
    {@render children()}
  </a>
{:else}
  <button
    {type}
    {disabled}
    {onclick}
    class="btn btn-{variant} btn-{color}"
    aria-label={ariaLabel}
    {title}
  >
    {@render children()}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-2) var(--space-3);
    border: 1px solid transparent;
    border-radius: var(--radius);
    font-size: var(--text-sm);
    font-family: var(--font-body);
    cursor: pointer;
    text-decoration: none;
    line-height: 1.3;
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Color tokens — consumed by variant rules below */
  .btn-default {
    --_accent: var(--fg-main);
    --_border: var(--border);
    --_solid-bg: var(--bg-inactive);
    --_solid-fg: var(--fg-main);
  }

  .btn-primary {
    --_accent: var(--blue-warmer);
    --_border: var(--blue);
    --_solid-bg: var(--blue);
    --_solid-fg: var(--bg-main);
  }

  .btn-danger {
    --_accent: var(--red);
    --_border: var(--red);
    --_solid-bg: var(--red);
    --_solid-fg: var(--bg-main);
  }

  .btn-warning {
    --_accent: var(--yellow);
    --_border: var(--yellow);
    --_solid-bg: var(--yellow);
    --_solid-fg: var(--fg-main);
  }

  /* Outline variant */
  .btn-outline {
    background: var(--bg-main);
    color: var(--fg-main);
    border-color: var(--_border);
  }

  .btn-outline:hover:not(:disabled) {
    background: var(--bg-dim);
  }

  /* Solid variant */
  .btn-solid {
    background: var(--_solid-bg);
    color: var(--_solid-fg);
    border-color: var(--_solid-bg);
  }

  .btn-solid:hover:not(:disabled) {
    opacity: 0.9;
  }

  /* Ghost variant — compact square padding, icon-friendly */
  .btn-ghost {
    background: none;
    border-color: transparent;
    color: var(--fg-dim);
    padding: var(--space-2);
  }

  .btn-ghost:hover:not(:disabled) {
    color: var(--_accent);
    background: var(--bg-dim);
  }
</style>
