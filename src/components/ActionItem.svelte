<!--
  @component
  Menu item for `ActionMenu`. Optional leading lucide icon.

  ```svelte
  <ActionItem icon={Pencil} onclick={rename}>Rename</ActionItem>
  <ActionItem icon={Trash2} destructive onclick={remove}>Delete</ActionItem>
  ```
-->
<script lang="ts">
  import type { Component, Snippet } from "svelte";

  let {
    onclick,
    icon,
    destructive = false,
    children,
  }: {
    onclick: () => void;
    icon?: Component;
    destructive?: boolean;
    children: Snippet;
  } = $props();

  const Icon = $derived(icon);
</script>

<button type="button" role="menuitem" class="item" class:destructive {onclick}>
  {#if Icon}<Icon size={15} aria-hidden="true" />{/if}
  <span>{@render children()}</span>
</button>

<style>
  .item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    width: 100%;
    padding: var(--space-2) var(--space-3);
    background: transparent;
    border: none;
    border-radius: var(--radius);
    color: var(--fg-main);
    font-size: var(--text-sm);
    text-align: left;
    cursor: pointer;
  }

  .item:hover,
  .item:focus-visible {
    background: var(--bg-dim);
    outline: none;
  }

  .item.destructive {
    color: var(--red);
  }

  .item.destructive:hover,
  .item.destructive:focus-visible {
    background: var(--bg-dim);
  }
</style>
