<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    title,
    message,
    children,
  }: { title: string; message?: string; children?: Snippet } = $props();
</script>

<div class="empty-state">
  <h2 class="title">{title}</h2>
  {#if message}
    <p class="message">{message}</p>
  {/if}
  {#if children}
    <div class="action">{@render children()}</div>
  {/if}
</div>

<style>
  .empty-state {
    padding: var(--space-8) var(--space-5);
    text-align: center;
  }

  /* Voice moment — serif italic per .impeccable.md. */
  .title {
    font-family: var(--font-voice);
    font-style: italic;
    font-weight: var(--font-weight-medium);
    font-size: var(--text-xl);
    line-height: 1.2;
    letter-spacing: -0.005em;
    color: var(--fg-main);
    margin: 0 0 var(--space-2);
  }

  .message {
    margin: 0;
    color: var(--fg-dim);
    font-size: var(--text-sm);
    max-width: 36ch;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }

  .action {
    margin-top: var(--space-4);
  }
</style>
