/**
 * Reactive boolean that flips true only after `delayMs` of the source
 * being truthy. Prevents flash-of-spinner on fast loads.
 *
 *   let showSpinner = $derived(useDelayedLoading(() => loading)());
 */
export function useDelayedLoading(
  getSource: () => boolean,
  delayMs = 250,
): () => boolean {
  let visible = $state(false);
  let timer: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    const active = getSource();
    if (active) {
      if (timer === null) {
        timer = setTimeout(() => {
          visible = true;
          timer = null;
        }, delayMs);
      }
    } else {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      visible = false;
    }
  });

  return () => visible;
}
