<!--
  @component
  Inline status text. Uses `role="alert"` for error and warning variants.

  ```svelte
  <StatusMessage variant="error" message="Invalid email address." />
  ```

  Variants: `info` `success` `warning` `error`
-->
<script lang="ts">
  let {
    variant = "info",
    message,
  }: {
    variant?: "info" | "success" | "warning" | "error";
    message: string;
  } = $props();

  const isAlert = variant === "error" || variant === "warning";
</script>

<p class="status status-{variant}" role={isAlert ? "alert" : undefined}>
  {message}
</p>

<style>
  .status {
    padding: var(--space-4) var(--space-5);
    color: var(--fg-dim);
    font-size: var(--text-sm);
  }

  .status-success {
    color: var(--green);
  }

  .status-warning {
    color: var(--yellow);
  }

  .status-error {
    color: var(--red);
  }
</style>
