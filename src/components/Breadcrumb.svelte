<!--
  @component
  Path-based breadcrumb. Splits `path` on `/`, each segment links to the
  cumulative path under `basePath`. The home root shows `homeIcon`.

  ```svelte
  <Breadcrumb path="docs/notes" basePath="/files" />
  ```
-->
<script lang="ts">
  import type { Component } from "svelte";
  import { House } from "@lucide/svelte";

  let {
    path,
    basePath = "/",
    homeLabel = "Home",
    homeIcon = House,
  }: {
    path: string;
    basePath?: string;
    homeLabel?: string;
    homeIcon?: Component;
  } = $props();

  const HomeIcon = $derived(homeIcon);
  let segments = $derived(path === "" || path === "." ? [] : path.split("/"));
</script>

<nav class="breadcrumb" aria-label="Breadcrumb">
  {#if segments.length === 0}
    <span class="crumb current">
      <HomeIcon size={14} />
      {homeLabel}
    </span>
  {:else}
    <a href={basePath} class="crumb">
      <HomeIcon size={14} />
      {homeLabel}
    </a>
  {/if}
  {#each segments as segment, i}
    <span class="sep">/</span>
    {#if i === segments.length - 1}
      <span class="crumb current">{segment}</span>
    {:else}
      <a href="{basePath}/{segments.slice(0, i + 1).join('/')}" class="crumb">
        {segment}
      </a>
    {/if}
  {/each}
</nav>

<style>
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-2);
    row-gap: var(--space-1);
    min-width: 0;
    font-size: var(--text-sm);
  }

  .crumb {
    color: var(--blue-warmer);
    text-decoration: none;
    white-space: nowrap;
  }

  .crumb :global(svg) {
    display: inline-block;
    vertical-align: -2px;
    margin-right: var(--space-1);
  }

  .crumb:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .crumb.current {
    color: var(--fg-main);
    font-weight: var(--font-weight-medium);
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .crumb.current:hover {
    text-decoration: none;
  }

  .sep {
    color: var(--fg-dim);
    opacity: 0.6;
    user-select: none;
  }
</style>
