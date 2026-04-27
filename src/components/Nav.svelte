<!--
  @component
  Top navigation bar. Three-column layout: brand left, links centered, right area.

  Pass `color` with a CSS color value to add a colored bottom border — useful
  for page-context signals like a destructive-zone indicator.

  Pass `banner` to render a full-width strip below the nav (e.g. impersonation
  or environment warnings).

  ```svelte
  <Nav color="var(--red)">
    {#snippet brand()}<a href="/">MyApp</a>{/snippet}
    {#snippet links()}
      <NavItem href="/home" active={true}>Home</NavItem>
    {/snippet}
    {#snippet right()}
      <Button onclick={logout}>Logout</Button>
    {/snippet}
  </Nav>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    brand,
    links,
    right,
    banner,
    color,
  }: {
    brand: Snippet;
    links?: Snippet;
    right?: Snippet;
    banner?: Snippet;
    color?: string;
  } = $props();
</script>

<nav
  class="nav"
  class:accented={!!color}
  style={color ? `--nav-accent: ${color}` : undefined}
  aria-label="Navigation"
>
  <div class="nav-inner">
    <div class="nav-brand">{@render brand()}</div>
    {#if links}
      <div class="nav-links">{@render links()}</div>
    {/if}
    {#if right}
      <div class="nav-right">{@render right()}</div>
    {/if}
  </div>
</nav>
{#if banner}
  <div class="nav-banner">{@render banner()}</div>
{/if}

<style>
  .nav {
    background: var(--bg-main);
    border-bottom: 1px solid var(--border-light);
    padding: 0 var(--space-5);
  }

  .nav.accented {
    border-bottom: 2px solid var(--nav-accent);
  }

  .nav-inner {
    display: grid;
    grid-template-areas: "brand links right";
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: var(--space-4);
    height: 3rem;
    max-width: var(--layout-max-width);
    margin: 0 auto;
  }

  .nav-brand {
    grid-area: brand;
    justify-self: start;
  }

  .nav-links {
    grid-area: links;
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .nav-right {
    grid-area: right;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    justify-self: end;
  }

  .nav-banner {
    /* Styled by the consumer. */
  }

  @media (max-width: 768px) {
    .nav {
      padding: 0 var(--space-3);
    }

    .nav-inner {
      grid-template-areas:
        "brand right"
        "links links";
      grid-template-columns: auto 1fr;
      row-gap: var(--space-2);
      height: auto;
      padding: var(--space-2) 0;
    }

    .nav-right {
      justify-self: end;
    }

    .nav-links {
      justify-self: stretch;
      justify-content: space-evenly;
      overflow-x: auto;
    }
  }
</style>
