<script lang="ts" module>
  type ToastType = "success" | "error" | "warning";

  interface Toast {
    id: number;
    type: ToastType;
    text: string;
  }

  let toasts = $state<Toast[]>([]);
  let nextId = 0;

  export function show(type: ToastType, text: string, duration = 4000) {
    const id = nextId++;
    toasts = [...toasts, { id, type, text }];
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
    }, duration);
  }
</script>

{#if toasts.length > 0}
  <div class="toast-container" aria-live="polite">
    {#each toasts as toast (toast.id)}
      <div class="toast toast--{toast.type}">
        <span class="msg">{toast.text}</span>
      </div>
    {/each}
  </div>
{/if}

<style>
  .toast-container {
    position: fixed;
    top: var(--space-4);
    right: var(--space-4);
    z-index: 2000;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    max-width: 22rem;
  }

  .toast {
    padding: var(--space-2) var(--space-4);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    background: var(--bg-main);
    color: var(--fg-main);
    box-shadow: var(--shadow-overlay);
  }

  .toast--success {
    background: var(--bg-green-nuanced);
  }

  .toast--error {
    background: var(--bg-red-nuanced);
  }

  .toast--warning {
    background: var(--bg-yellow-nuanced);
  }

  /* Voice moment — dry, italic, serif. */
  .msg {
    font-family: var(--font-voice);
    font-style: italic;
    font-size: var(--text-base);
    color: var(--fg-main);
  }
</style>
