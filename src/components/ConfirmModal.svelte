<!--
  @component
  Confirmation dialog wrapping `Modal` + `Button`.

  ```svelte
  <ConfirmModal
    {open}
    title="Delete file"
    message="This cannot be undone."
    confirmLabel="Delete"
    onConfirm={() => doDelete()}
    onClose={() => (open = false)}
  />
  ```
-->
<script lang="ts">
  import Button from "./Button.svelte";
  import Modal from "./Modal.svelte";

  let {
    open = false,
    title = "Confirm",
    message = "",
    confirmLabel = "Confirm",
    danger = true,
    onConfirm,
    onClose,
  }: {
    open: boolean;
    title?: string;
    message?: string;
    confirmLabel?: string;
    danger?: boolean;
    onConfirm: () => void;
    onClose: () => void;
  } = $props();
</script>

<Modal {open} {title} {onClose}>
  <div class="body">
    <p class="message">{message}</p>
    <div class="actions">
      <Button onclick={onClose}>Cancel</Button>
      <Button
        variant="solid"
        color={danger ? "danger" : "primary"}
        onclick={() => {
          onConfirm();
          onClose();
        }}
      >
        {confirmLabel}
      </Button>
    </div>
  </div>
</Modal>

<style>
  .body {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .message {
    margin: 0;
    color: var(--fg-main);
    font-size: var(--text-sm);
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
  }
</style>
