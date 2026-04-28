<script lang="ts">
  import {
    ActionItem,
    ActionMenu,
    Badge,
    Breadcrumb,
    Button,
    Card,
    ConfirmModal,
    EmptyState,
    GridSkeleton,
    Modal,
    Nav,
    NavDropdown,
    NavItem,
    PageHeader,
    Pagination,
    Shell,
    Skeleton,
    StatusMessage,
    TableSkeleton,
    Theme,
    Toast,
    showToast,
  } from "@belak/ui";
  import { formatSize, useDelayedLoading } from "@belak/ui/util";
  import { Pencil, Trash2 } from "@lucide/svelte";

  type ThemeValue = "light" | "dark" | "auto";

  let theme = $state<ThemeValue>("auto");
  let modalOpen = $state(false);
  let longModalOpen = $state(false);
  let confirmOpen = $state(false);
  let busyCard = $state(false);
  let navPath = $state("/");
  let page = $state(1);
  let loading = $state(false);
  const showSpinner = useDelayedLoading(() => loading, 250);

  const sizes = [0, 512, 4096, 1024 * 1024 * 2.5, 1024 * 1024 * 1024 * 3.7];
</script>

<Theme {theme} />
<Toast />

<Nav>
  {#snippet brand()}<span class="brand">@belak/ui</span>{/snippet}
  {#snippet links()}
    <NavItem href="#" active={true}>Components</NavItem>
    <NavDropdown label="More">
      <NavItem href="#">Tokens</NavItem>
      <NavItem href="#">Changelog</NavItem>
    </NavDropdown>
  {/snippet}
  {#snippet right()}
    <select bind:value={theme} class="theme-select">
      <option value="auto">Auto</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  {/snippet}
</Nav>

<Shell>
  <div class="demo">
    <PageHeader title="Component Demo" subtitle="@belak/ui kitchen sink" />

    <section>
      <h2>Badge</h2>
      <div class="row">
        <Badge>neutral</Badge>
        <Badge variant="info">info</Badge>
        <Badge variant="success">success</Badge>
        <Badge variant="warning">warning</Badge>
        <Badge variant="danger">danger</Badge>
      </div>
    </section>

    <section>
      <h2>Button</h2>
      <div class="variant-grid">
        <span></span>
        <span class="grid-label">default</span>
        <span class="grid-label">primary</span>
        <span class="grid-label">danger</span>
        <span class="grid-label">warning</span>

        <span class="grid-label">outline</span>
        <Button>Outline</Button>
        <Button color="primary">Outline</Button>
        <Button color="danger">Outline</Button>
        <Button color="warning">Outline</Button>

        <span class="grid-label">solid</span>
        <Button variant="solid">Solid</Button>
        <Button variant="solid" color="primary">Solid</Button>
        <Button variant="solid" color="danger">Solid</Button>
        <Button variant="solid" color="warning">Solid</Button>

        <span class="grid-label">ghost</span>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" color="primary">Ghost</Button>
        <Button variant="ghost" color="danger">Ghost</Button>
        <Button variant="ghost" color="warning">Ghost</Button>

        <span class="grid-label">outline disabled</span>
        <Button disabled>Outline</Button>
        <Button color="primary" disabled>Outline</Button>
        <Button color="danger" disabled>Outline</Button>
        <Button color="warning" disabled>Outline</Button>

        <span class="grid-label">solid disabled</span>
        <Button variant="solid" disabled>Solid</Button>
        <Button variant="solid" color="primary" disabled>Solid</Button>
        <Button variant="solid" color="danger" disabled>Solid</Button>
        <Button variant="solid" color="warning" disabled>Solid</Button>

        <span class="grid-label">ghost disabled</span>
        <Button variant="ghost" disabled>Ghost</Button>
        <Button variant="ghost" color="primary" disabled>Ghost</Button>
        <Button variant="ghost" color="danger" disabled>Ghost</Button>
        <Button variant="ghost" color="warning" disabled>Ghost</Button>
      </div>
    </section>

    <section>
      <h2>Card</h2>
      <div class="cards">
        <Card padding="sm"><p>padding="sm"</p></Card>
        <Card><p>padding="md" (default)</p></Card>
        <Card padding="lg"><p>padding="lg"</p></Card>
        <Card busy={busyCard} padding="none">
          {#snippet header()}
            <span>With header and footer</span>
            <Button onclick={() => (busyCard = !busyCard)}>
              {busyCard ? "Stop" : "Busy"}
            </Button>
          {/snippet}
          <table class="demo-table">
            <thead><tr><th>Name</th><th>Status</th></tr></thead>
            <tbody>
              <tr
                ><td>Alpha</td><td><Badge variant="success">Active</Badge></td
                ></tr
              >
              <tr
                ><td>Beta</td><td><Badge variant="warning">Pending</Badge></td
                ></tr
              >
              <tr
                ><td>Gamma</td><td><Badge variant="danger">Error</Badge></td
                ></tr
              >
            </tbody>
          </table>
          {#snippet footer()}
            <span></span>
            <Button variant="solid" color="primary">Save</Button>
          {/snippet}
        </Card>
      </div>
    </section>

    <section>
      <h2>Modal</h2>
      <div class="row">
        <Button onclick={() => (modalOpen = true)}>Open modal</Button>
        <Button onclick={() => (longModalOpen = true)}>Open long modal</Button>
      </div>
      <Modal bind:open={modalOpen} title="Confirm action">
        <p>Are you sure you want to do this?</p>
        <div class="modal-actions">
          <Button onclick={() => (modalOpen = false)}>Cancel</Button>
          <Button
            variant="solid"
            color="danger"
            onclick={() => (modalOpen = false)}
          >
            Delete
          </Button>
        </div>
      </Modal>
      <Modal bind:open={longModalOpen} title="Long content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <p>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore cum soluta nobis eligendi optio cumque
          nihil impedit.
        </p>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis.
        </p>
        <div class="modal-actions">
          <Button onclick={() => (longModalOpen = false)}>Close</Button>
        </div>
      </Modal>
    </section>

    <section>
      <h2>Toast</h2>
      <div class="row">
        <Button onclick={() => showToast("success", "Changes saved.")}
          >Success</Button
        >
        <Button onclick={() => showToast("error", "Something went wrong.")}
          >Error</Button
        >
        <Button onclick={() => showToast("warning", "Disk usage is above 90%.")}
          >Warning</Button
        >
      </div>
    </section>

    <section>
      <h2>StatusMessage</h2>
      <StatusMessage
        variant="info"
        message="Your session expires in 30 minutes."
      />
      <StatusMessage variant="success" message="Changes saved successfully." />
      <StatusMessage
        variant="warning"
        message="This action cannot be undone."
      />
      <StatusMessage variant="error" message="Failed to load data." />
    </section>

    <section>
      <h2>EmptyState</h2>
      <Card>
        <EmptyState
          title="No results found"
          message="Try adjusting your filters."
        >
          <Button variant="solid" color="primary">Clear filters</Button>
        </EmptyState>
      </Card>
    </section>

    <section>
      <h2>ConfirmModal</h2>
      <Button color="danger" onclick={() => (confirmOpen = true)}>
        Delete thing
      </Button>
      <ConfirmModal
        open={confirmOpen}
        title="Delete thing"
        message="This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={() => showToast("success", "Thing deleted.")}
        onClose={() => (confirmOpen = false)}
      />
    </section>

    <section>
      <h2>Breadcrumb</h2>
      <Breadcrumb path="" basePath="/files" />
      <Breadcrumb path="docs" basePath="/files" />
      <Breadcrumb path="docs/2026/notes" basePath="/files" />
    </section>

    <section>
      <h2>Pagination</h2>
      <Pagination {page} totalPages={5} onNavigate={(p) => (page = p)} />
    </section>

    <section>
      <h2>ActionMenu</h2>
      <div class="row">
        <ActionMenu ariaLabel="Row actions">
          <ActionItem
            icon={Pencil}
            onclick={() => showToast("success", "Renamed")}>Rename</ActionItem
          >
          <ActionItem
            icon={Trash2}
            destructive
            onclick={() => showToast("error", "Deleted")}>Delete</ActionItem
          >
        </ActionMenu>
        <ActionMenu ariaLabel="Row actions" variant="outline">
          <ActionItem
            icon={Pencil}
            onclick={() => showToast("success", "Renamed")}>Rename</ActionItem
          >
          <ActionItem
            icon={Trash2}
            destructive
            onclick={() => showToast("error", "Deleted")}>Delete</ActionItem
          >
        </ActionMenu>
        <ActionMenu ariaLabel="Row actions" variant="solid">
          <ActionItem
            icon={Pencil}
            onclick={() => showToast("success", "Renamed")}>Rename</ActionItem
          >
          <ActionItem
            icon={Trash2}
            destructive
            onclick={() => showToast("error", "Deleted")}>Delete</ActionItem
          >
        </ActionMenu>
      </div>
    </section>

    <section>
      <h2>Skeleton</h2>
      <Card>
        <div class="skel-row">
          <Skeleton width="40%" />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
        </div>
      </Card>
    </section>

    <section>
      <h2>TableSkeleton</h2>
      <Card padding="none">
        <table class="demo-table">
          <thead>
            <tr><th>Name</th><th>Size</th><th>Modified</th></tr>
          </thead>
          <tbody>
            <TableSkeleton
              rows={4}
              columns={[{}, { align: "right" }, { width: "30%" }]}
            />
          </tbody>
        </table>
      </Card>
    </section>

    <section>
      <h2>GridSkeleton</h2>
      <Card>
        <div class="grid-skel">
          <GridSkeleton count={6} />
        </div>
      </Card>
    </section>

    <section>
      <h2>util/format</h2>
      <ul class="kv">
        {#each sizes as bytes}
          <li><code>{bytes}</code> → <code>{formatSize(bytes)}</code></li>
        {/each}
      </ul>
    </section>

    <section>
      <h2>util/useDelayedLoading</h2>
      <div class="row">
        <Button onclick={() => (loading = !loading)}>
          {loading ? "Stop" : "Start"} load
        </Button>
        <span>raw: <code>{loading}</code></span>
        <span>delayed (250ms): <code>{showSpinner()}</code></span>
      </div>
    </section>
  </div>
</Shell>

<style>
  .brand {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--fg-main);
    letter-spacing: -0.005em;
  }

  .theme-select {
    font-size: var(--text-sm);
    font-family: var(--font-body);
    color: var(--fg-main);
    background: var(--bg-main);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--space-1) var(--space-2);
    cursor: pointer;
  }

  .demo {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  h2 {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--fg-dim);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid var(--border-light);
    padding-bottom: var(--space-2);
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .variant-grid {
    display: grid;
    grid-template-columns: 8rem repeat(4, auto);
    gap: var(--space-2) var(--space-3);
    align-items: center;
    justify-items: start;
  }

  .grid-label {
    font-size: var(--text-xs);
    color: var(--fg-dim);
    font-weight: var(--font-weight-medium);
    justify-self: end;
  }

  .variant-grid > :global(.grid-label:nth-child(-n + 5)) {
    justify-self: center;
    align-self: end;
  }

  .demo-table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--text-sm);
  }

  .demo-table th,
  .demo-table td {
    padding: var(--space-2) var(--space-4);
    text-align: left;
    border-bottom: 1px solid var(--border-light);
  }

  .demo-table th {
    font-weight: var(--font-weight-medium);
    color: var(--fg-dim);
    background: var(--bg-dim);
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
    margin-top: var(--space-4);
  }

  .grid-skel {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    gap: var(--space-2);
  }

  .skel-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .kv {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    font-size: var(--text-sm);
    color: var(--fg-dim);
  }
</style>
