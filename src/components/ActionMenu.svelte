<!--
  @component
  Popover dropdown anchored to a trigger button. Native popover API,
  flips up when low on space below.

  ```svelte
  <ActionMenu ariaLabel="Row actions">
    <ActionItem onclick={rename}>Rename</ActionItem>
    <ActionItem onclick={remove} destructive>Delete</ActionItem>
  </ActionMenu>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { MoreHorizontal } from "@lucide/svelte";

  let { ariaLabel, children }: { ariaLabel: string; children: Snippet } =
    $props();

  const popoverId = `action-menu-${Math.random().toString(36).slice(2)}`;
  let trigger = $state<HTMLButtonElement | null>(null);
  let popover = $state<HTMLDivElement | null>(null);

  function onToggle(e: ToggleEvent) {
    if (e.newState !== "open" || !trigger || !popover) return;
    const rect = trigger.getBoundingClientRect();
    const gap = 4;
    const popoverHeight = popover.offsetHeight;
    const spaceBelow = window.innerHeight - rect.bottom;
    const flipUp =
      spaceBelow < popoverHeight + gap && rect.top > popoverHeight + gap;
    popover.style.right = `${window.innerWidth - rect.right}px`;
    if (flipUp) {
      popover.style.bottom = `${window.innerHeight - rect.top + gap}px`;
      popover.style.top = "auto";
    } else {
      popover.style.top = `${rect.bottom + gap}px`;
      popover.style.bottom = "auto";
    }
  }

  function onPopoverClick() {
    popover?.hidePopover();
  }

  function onKey(e: KeyboardEvent) {
    if (!popover?.matches(":popover-open")) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const items = popover.querySelectorAll<HTMLElement>('[role="menuitem"]');
      if (items.length === 0) return;
      const current = document.activeElement as HTMLElement | null;
      const idx = Array.from(items).indexOf(current ?? items[0]);
      const next =
        e.key === "ArrowDown"
          ? items[(idx + 1) % items.length]
          : items[(idx - 1 + items.length) % items.length];
      next.focus();
    }
  }
</script>

<svelte:window onkeydown={onKey} />

<button
  type="button"
  class="trigger"
  aria-label={ariaLabel}
  bind:this={trigger}
  popovertarget={popoverId}
>
  <MoreHorizontal size={15} aria-hidden="true" />
</button>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  id={popoverId}
  popover="auto"
  class="popover"
  role="menu"
  tabindex="-1"
  bind:this={popover}
  ontoggle={onToggle}
  onclick={onPopoverClick}
>
  {@render children()}
</div>

<style>
  .trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2);
    color: var(--fg-dim);
    border: none;
    border-radius: var(--radius);
    background: transparent;
    cursor: pointer;
  }

  .trigger:hover {
    color: var(--fg-main);
    background: var(--bg-dim);
  }

  .popover {
    position: fixed;
    inset: auto;
    margin: 0;
    min-width: 10rem;
    background: var(--bg-main);
    color: var(--fg-main);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-overlay);
    padding: var(--space-1);
  }
</style>
