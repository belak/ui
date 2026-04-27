<!--
  @component
  Bordered surface with optional header and footer slots.
  Set `busy` to show an indeterminate progress bar along the top edge.
  Set `fill` to make the card flex-grow to fill its container.
  Set `padding` to control body padding: `md` (default), `sm`, `lg`, `none`.

  ```svelte
  <Card busy={loading} padding="none">
    {#snippet header()}Settings{/snippet}
    <table>...</table>
    {#snippet footer()}<Button>Save</Button>{/snippet}
  </Card>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  type Padding = "none" | "sm" | "md" | "lg";

  let {
    header,
    footer,
    fill = false,
    busy = false,
    padding = "md",
    children,
  }: {
    header?: Snippet;
    footer?: Snippet;
    fill?: boolean;
    busy?: boolean;
    padding?: Padding;
    children: Snippet;
  } = $props();
</script>

<div class="card" class:fill>
  {#if header}
    <div class="card-header">{@render header()}</div>
  {/if}
  <div class="card-body pad-{padding}">
    {#if busy}
      <div class="progress-bar" aria-hidden="true"></div>
    {/if}
    {@render children()}
  </div>
  {#if footer}
    <div class="card-footer">{@render footer()}</div>
  {/if}
</div>

<style>
  .card {
    background: var(--bg-main);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card.fill {
    flex: 1;
    min-height: 0;
  }

  .card.fill .card-body {
    flex: 1;
    min-height: 0;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-5);
    min-height: calc(
      2 * var(--space-3) + 2 * var(--space-2) + var(--text-sm) * 1.3
    );
    background: var(--bg-inactive);
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .pad-sm {
    padding: var(--space-3);
  }
  .pad-md {
    padding: var(--space-5);
  }
  .pad-lg {
    padding: var(--space-6);
  }
  .pad-none {
    padding: 0;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-5);
    background: var(--bg-inactive);
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
    background: var(--bg-inactive);
  }

  .progress-bar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40%;
    background: var(--blue-warmer);
    animation: indeterminate 1.4s ease-in-out infinite;
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 40%;
    }
    60% {
      left: 100%;
      width: 40%;
    }
    100% {
      left: 100%;
      width: 40%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar::after {
      animation: none;
      width: 100%;
      opacity: 0.4;
    }
  }

  @media (max-width: 768px) {
    .card-header {
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-2);
    }

    .card-footer {
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-2);
    }
  }
</style>
