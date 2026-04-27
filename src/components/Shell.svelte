<!--
  @component
  Full-page layout shell. Renders a flex column with optional nav and footer
  snippets. Main content is centered and capped at `--layout-max-width`.

  ```svelte
  <Shell>
    {#snippet nav()}<Nav />{/snippet}
    <p>Content goes here.</p>
    {#snippet footer()}<p>© 2026</p>{/snippet}
  </Shell>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    nav,
    footer,
    children,
  }: {
    nav?: Snippet;
    footer?: Snippet;
    children: Snippet;
  } = $props();
</script>

<div class="shell">
  {#if nav}{@render nav()}{/if}
  <main class="content">
    {@render children()}
  </main>
  {#if footer}
    <footer class="footer">
      {@render footer()}
    </footer>
  {/if}
</div>

<style>
  .shell {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--bg-dim);
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--layout-max-width);
    margin: 0 auto;
    padding: var(--space-6);
    overflow: auto;
    min-height: 0;
  }

  .footer {
    text-align: center;
    padding: var(--space-3);
    font-size: var(--text-xs);
    color: var(--fg-dim);
    background: var(--bg-main);
    border-top: 1px solid var(--border-light);
  }

  @media (max-width: 768px) {
    .content {
      padding: var(--space-3);
    }
  }
</style>
