<!--
  @component
  A dropdown menu in the navigation bar. On mobile, the trigger is hidden
  and items render inline alongside other nav links.

  `open` is bindable if you need to close the dropdown externally (e.g. on
  route change).

  ```svelte
  <NavDropdown label="Admin" active={isActive("/admin")}>
    <NavItem href="/admin/users">Users</NavItem>
    <NavItem href="/admin/shares">All Shares</NavItem>
  </NavDropdown>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  let {
    label,
    active = false,
    open = $bindable(false),
    children,
  }: {
    label: string;
    active?: boolean;
    open?: boolean;
    children: Snippet;
  } = $props();

  setContext("nav-dropdown", true);

  let el = $state<HTMLElement | null>(null);

  function toggle() {
    open = !open;
  }

  function handleWindowClick(e: MouseEvent) {
    if (open && el && !el.contains(e.target as Node)) open = false;
  }

  function handleWindowKey(e: KeyboardEvent) {
    if (open && e.key === "Escape") open = false;
  }
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKey} />

<span class="dropdown" bind:this={el}>
  <button
    type="button"
    class="trigger"
    class:active
    aria-haspopup="menu"
    aria-expanded={open}
    onclick={toggle}
  >
    {label}
    <svg
      class="chev"
      class:open
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M2 4l4 4 4-4" />
    </svg>
  </button>
  <div class="menu" class:open role="menu">
    {@render children()}
  </div>
</span>

<style>
  .dropdown {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius);
    font-size: var(--text-sm);
    line-height: 1;
    color: var(--fg-dim);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: color var(--transition-fast);
    white-space: nowrap;
  }

  .trigger:hover {
    color: var(--fg-main);
  }

  .trigger.active {
    color: var(--fg-main);
    font-weight: var(--font-weight-medium);
  }

  .chev {
    transition: transform var(--transition-slow);
  }

  .chev.open {
    transform: rotate(180deg);
  }

  .menu {
    display: none;
    position: absolute;
    top: calc(100% + var(--space-1));
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-main);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-overlay);
    flex-direction: column;
    min-width: 10rem;
    overflow: hidden;
    z-index: 100;
  }

  .menu.open {
    display: flex;
  }

  @media (max-width: 768px) {
    .dropdown {
      display: contents;
    }

    .trigger {
      display: none;
    }

    .menu,
    .menu.open {
      display: contents;
    }
  }
</style>
