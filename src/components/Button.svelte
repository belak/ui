<!--
  @component
  Button or link. Renders an `<a>` when `href` is provided.

  ```svelte
  <Button variant="primary" onclick={save}>Save</Button>
  <Button href="/settings">Settings</Button>
  ```

  Variants: `default` `primary` `danger`
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  type Variant = "default" | "primary" | "danger";

  let {
    variant = "default",
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
    class="btn btn-{variant}"
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
    class="btn btn-{variant}"
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
    border: 1px solid var(--border);
    border-radius: var(--radius);
    font-size: var(--text-sm);
    font-family: var(--font-body);
    background: var(--bg-main);
    color: var(--fg-main);
    cursor: pointer;
    text-decoration: none;
    line-height: 1.3;
  }

  .btn:hover:not(:disabled) {
    background: var(--bg-dim);
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-primary {
    background: var(--blue);
    color: var(--bg-main);
    border-color: var(--blue);
  }

  .btn-primary:hover:not(:disabled) {
    background: var(--blue);
    opacity: 0.92;
  }

  .btn-danger {
    background: var(--red);
    color: var(--bg-main);
    border-color: var(--red);
  }

  .btn-danger:hover:not(:disabled) {
    background: var(--red);
    opacity: 0.92;
  }
</style>
