<!--
  @component
  Previous/next pagination control. Hidden when only one page.

  ```svelte
  <Pagination {page} {totalPages} onNavigate={(p) => (page = p)} />
  ```
-->
<script lang="ts">
  let {
    page,
    totalPages,
    onNavigate,
  }: {
    page: number;
    totalPages: number;
    onNavigate: (page: number) => void;
  } = $props();
</script>

{#if totalPages > 1}
  <nav class="pagination" aria-label="Pagination">
    <button
      class="page-btn"
      onclick={() => onNavigate(page - 1)}
      disabled={page <= 1}
      aria-label="Previous page"
    >
      Previous
    </button>
    <span class="page-info">Page {page} of {totalPages}</span>
    <button
      class="page-btn"
      onclick={() => onNavigate(page + 1)}
      disabled={page >= totalPages}
      aria-label="Next page"
    >
      Next
    </button>
  </nav>
{/if}

<style>
  .pagination {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) 0;
  }

  .page-btn {
    border: 1px solid var(--border);
    background: var(--bg-main);
    color: var(--fg-main);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius);
    cursor: pointer;
    font-size: var(--text-sm);
  }

  .page-btn:hover:not(:disabled) {
    background: var(--bg-dim);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .page-info {
    color: var(--fg-dim);
    font-size: var(--text-sm);
  }
</style>
