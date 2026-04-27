<!--
  @component
  A navigation link or button. Renders as `<a>` when `href` is provided.

  When used inside NavDropdown, automatically adopts menu-item styling
  (full-width, slightly more vertical padding). On mobile this reverts to
  inline nav-link styling as the dropdown collapses.

  ```svelte
  <NavItem href="/files" active={path === "/files"}>Files</NavItem>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  let {
    href,
    active = false,
    onclick,
    children,
  }: {
    href?: string;
    active?: boolean;
    onclick?: (e: MouseEvent) => void;
    children: Snippet;
  } = $props();

  const inDropdown = getContext<boolean>("nav-dropdown") ?? false;
</script>

{#if href}
  <a {href} class="nav-item" class:active class:menu={inDropdown}>
    {@render children()}
  </a>
{:else}
  <button type="button" {onclick} class="nav-item" class:active class:menu={inDropdown}>
    {@render children()}
  </button>
{/if}

<style>
  .nav-item {
    display: inline-flex;
    align-items: center;
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius);
    font-size: var(--text-sm);
    line-height: 1;
    color: var(--fg-dim);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: color var(--transition-fast);
    white-space: nowrap;
  }

  .nav-item:hover {
    color: var(--fg-main);
  }

  .nav-item.active {
    color: var(--fg-main);
    font-weight: var(--font-weight-medium);
  }

  .nav-item.menu {
    display: flex;
    width: 100%;
    padding: var(--space-2) var(--space-3);
    border-radius: 0;
  }

  .nav-item.menu:hover {
    background: var(--bg-dim);
  }

  @media (max-width: 768px) {
    .nav-item.menu {
      display: inline-flex;
      width: auto;
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius);
    }

    .nav-item.menu:hover {
      background: transparent;
    }
  }
</style>
