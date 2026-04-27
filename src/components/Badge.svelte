<!--
  @component
  Pill-shaped label for status or category.

  ```svelte
  <Badge variant="success">Active</Badge>
  ```

  Variants: `neutral` `info` `success` `warning` `danger`
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  type Variant = "neutral" | "info" | "success" | "warning" | "danger";

  let {
    variant = "neutral",
    children,
  }: {
    variant?: Variant;
    children: Snippet;
  } = $props();
</script>

<span class="badge badge-{variant}">
  {@render children()}
</span>

<style>
  .badge {
    display: inline-block;
    padding: 1px var(--space-2);
    border-radius: 9999px;
    font-size: var(--text-xs);
    font-weight: var(--font-weight-regular);
  }

  .badge-neutral {
    background: var(--bg-dim);
    color: var(--fg-dim);
  }

  .badge-info {
    background: var(--bg-blue-subtle);
    color: var(--blue);
    font-weight: var(--font-weight-medium);
  }

  .badge-success {
    background: var(--bg-green-subtle);
    color: var(--green);
    font-weight: var(--font-weight-medium);
  }

  .badge-warning {
    background: var(--bg-yellow-subtle);
    color: var(--yellow);
    font-weight: var(--font-weight-medium);
  }

  .badge-danger {
    background: var(--bg-red-subtle);
    color: var(--red);
    font-weight: var(--font-weight-medium);
  }
</style>
