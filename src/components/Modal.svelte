<!--
  @component
  Dialog built on the native `<dialog>` element. Clicking the backdrop closes it.

  ```svelte
  <Modal bind:open={showModal} title="Confirm">
    <p>Are you sure?</p>
  </Modal>
  ```
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { X } from "@lucide/svelte";

  let {
    open = $bindable(false),
    title = "",
    onClose,
    children,
  }: {
    open: boolean;
    title?: string;
    onClose?: () => void;
    children: Snippet;
  } = $props();

  const titleId = `modal-title-${Math.random().toString(36).slice(2)}`;
  let dialog = $state<HTMLDialogElement | null>(null);

  $effect(() => {
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  });

  function close() {
    open = false;
    onClose?.();
  }

  function onDialogClose() {
    if (open) close();
  }

  function onBackdropClick(e: MouseEvent) {
    if (e.target === dialog) close();
  }
</script>

<dialog
  bind:this={dialog}
  aria-labelledby={title ? titleId : undefined}
  onclose={onDialogClose}
  onclick={onBackdropClick}
>
  <div class="box">
    {#if title}
      <div class="header">
        <h2 id={titleId}>{title}</h2>
        <button class="close-btn" onclick={close} aria-label="Close">
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    {/if}
    <div class="body">
      {@render children()}
    </div>
  </div>
</dialog>

<style>
  dialog {
    border: none;
    padding: 0;
    background: transparent;
    color: inherit;
    max-width: 32rem;
    width: calc(100% - var(--space-8));
    margin: 5vh auto;
    max-height: 90vh;
  }

  dialog::backdrop {
    background: var(--bg-scrim);
  }

  .box {
    display: flex;
    flex-direction: column;
    max-height: inherit;
    background: var(--bg-main);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-overlay);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3) var(--space-5);
    background: var(--bg-inactive);
    border-bottom: 1px solid var(--border);
  }

  .header h2 {
    margin: 0;
    font-family: var(--font-voice);
    font-style: italic;
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.2;
    letter-spacing: -0.005em;
    color: var(--fg-main);
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--fg-dim);
    line-height: 1;
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius);
  }

  .close-btn:hover {
    color: var(--fg-main);
    background: var(--bg-dim);
  }

  .body {
    padding: var(--space-4) var(--space-5);
    overflow-y: auto;
    flex: 1;
    min-height: 0;
  }

  @media (max-width: 768px) {
    dialog {
      margin-top: var(--space-4);
    }
  }
</style>
