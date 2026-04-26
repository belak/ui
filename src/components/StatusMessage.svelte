<script lang="ts">
  let {
    variant = "info",
    message,
  }: {
    variant?: "info" | "error";
    message: string;
  } = $props();
</script>

<p class="status status-{variant}" role={variant === "error" ? "alert" : undefined}>
  {message}
</p>

<style>
  .status {
    padding: var(--space-4) var(--space-5);
    color: var(--fg-dim);
    font-size: var(--text-sm);
  }

  .status-error {
    color: var(--red);
  }
</style>
