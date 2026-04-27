<!--
  @component
  Pulsing placeholder bar. Building block for table/grid skeletons.

  ```svelte
  <Skeleton width="60%" />
  <Skeleton aspectRatio="1" />
  ```
-->
<script lang="ts">
  let {
    width,
    height,
    aspectRatio,
    delay = 0,
  }: {
    width?: string;
    height?: string;
    aspectRatio?: string;
    delay?: number;
  } = $props();
</script>

<span
  class="skeleton"
  style:width
  style:height
  style:aspect-ratio={aspectRatio}
  style:animation-delay={delay ? `${delay}ms` : undefined}
></span>

<style>
  .skeleton {
    display: block;
    height: 1rem;
    border-radius: var(--radius);
    background: var(--bg-inactive);
    animation: skeleton-pulse 1.6s ease-in-out infinite;
  }

  @keyframes skeleton-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @media (prefers-reduced-motion: reduce) {
    .skeleton {
      animation: none;
    }
  }
</style>
