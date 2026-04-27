<!--
  @component
  Page-level heading with an optional subtitle.

  ```svelte
  <PageHeader title="Projects" subtitle="All active projects" />
  ```
-->
<script lang="ts">
  let {
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  } = $props();
</script>

<div class="page-header">
  <h1 class="page-title">
    {title}
  </h1>
  {#if subtitle}
    <p class="page-subtitle">{subtitle}</p>
  {/if}
</div>

<style>
  .page-header {
    margin-bottom: var(--space-5);
  }

  .page-title {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--fg-main);
    margin: 0;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .page-subtitle {
    margin: var(--space-1) 0 0;
    font-size: var(--text-sm);
    color: var(--fg-dim);
  }
</style>
