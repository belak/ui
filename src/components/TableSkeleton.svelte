<!--
  @component
  Loading placeholder for table rows. Caller wraps in `<table><tbody>`.

  ```svelte
  <table>
    <tbody>
      <TableSkeleton rows={8} columns={[
        { width: "40%" },
        { align: "right" },
      ]} />
    </tbody>
  </table>
  ```
-->
<script lang="ts">
  import Skeleton from "./Skeleton.svelte";

  const WIDTH_CYCLE = ["60%", "85%", "70%", "90%", "75%", "55%", "80%", "65%"];

  let {
    rows = 8,
    columns,
    density = "regular",
  }: {
    rows?: number;
    columns: Array<{
      width?: string;
      align?: "left" | "right";
      class?: string;
    }>;
    density?: "regular" | "tall";
  } = $props();

  function cellWidth(colIndex: number, rowIndex: number): string {
    return (
      columns[colIndex]?.width ??
      WIDTH_CYCLE[(rowIndex + colIndex) % WIDTH_CYCLE.length]
    );
  }
</script>

{#each { length: rows } as _, rowIndex}
  <tr class="skeleton-row" class:tall={density === "tall"}>
    {#each columns as col, colIndex}
      <td class={col.class ?? ""} style:text-align={col.align ?? "left"}>
        <span
          class="bar-wrap"
          style:margin-left={col.align === "right" ? "auto" : undefined}
          style:width={cellWidth(colIndex, rowIndex)}
        >
          <Skeleton />
        </span>
      </td>
    {/each}
  </tr>
{/each}

<style>
  .skeleton-row td {
    padding: var(--space-3);
    border-bottom: 1px solid var(--border-light);
  }

  .skeleton-row.tall td {
    padding-block: calc(var(--space-3) + var(--space-2));
  }

  .skeleton-row:last-child td {
    border-bottom: none;
  }

  .bar-wrap {
    display: block;
  }
</style>
