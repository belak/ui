<!--
  @component
  Sets the color theme by applying `data-theme` to the document root.
  Place once in your root layout.

  ```svelte
  <Theme theme="dark" />
  ```

  Values: `light` `dark` `auto` (default — follows system preference)
-->
<script lang="ts">
  let {
    theme = "auto",
  }: {
    theme?: "light" | "dark" | "auto";
  } = $props();
</script>

<svelte:document data-theme={theme} />
