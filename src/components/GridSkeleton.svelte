<!--
  @component
  Loading placeholder for thumbnail/card grids. Caller controls grid layout.

  ```svelte
  <div class="grid">
    <GridSkeleton count={12} />
  </div>
  ```
-->
<script lang="ts">
  import Skeleton from "./Skeleton.svelte";

  let { count = 12 }: { count?: number } = $props();
</script>

{#each { length: count } as _}
  <div class="cell">
    <Skeleton aspectRatio="1" height="auto" />
    <div class="label">
      <Skeleton width="75%" height="0.875rem" delay={100} />
      <Skeleton width="40%" height="0.75rem" delay={200} />
    </div>
  </div>
{/each}

<style>
  .cell {
    padding: var(--space-2);
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: var(--space-1);
  }
</style>
