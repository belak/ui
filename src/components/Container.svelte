<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    padded = true,
    children,
  }: {
    padded?: boolean;
    children: Snippet;
  } = $props();
</script>

<div class="container" class:padded>
  {@render children()}
</div>

<style>
  .container {
    width: 100%;
    max-width: var(--layout-max-width);
    margin: 0 auto;
  }

  .padded {
    padding: var(--space-6) var(--space-6);
  }

  @media (max-width: 768px) {
    .padded {
      padding: var(--space-3);
    }
  }
</style>
