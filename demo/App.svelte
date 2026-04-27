<script lang="ts">
  import {
    Badge,
    Button,
    Card,
    EmptyState,
    Modal,
    Nav,
    NavDropdown,
    NavItem,
    PageHeader,
    Shell,
    StatusMessage,
    Theme,
    Toast,
    showToast,
  } from "@belak/ui";

  type ThemeValue = "light" | "dark" | "auto";

  let theme = $state<ThemeValue>("auto");
  let modalOpen = $state(false);
  let busyCard = $state(false);
  let navPath = $state("/");
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

        <span class="grid-label">disabled</span>
        <Button disabled>Outline</Button>
        <Button variant="solid" color="primary" disabled>Solid</Button>
        <Button variant="ghost" color="danger" disabled>Ghost</Button>
        <span></span>
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
              <tr><td>Alpha</td><td><Badge variant="success">Active</Badge></td></tr>
              <tr><td>Beta</td><td><Badge variant="warning">Pending</Badge></td></tr>
              <tr><td>Gamma</td><td><Badge variant="danger">Error</Badge></td></tr>
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
      <Button onclick={() => (modalOpen = true)}>Open modal</Button>
      <Modal bind:open={modalOpen} title="Confirm action">
        <p>Are you sure you want to do this?</p>
        <div class="modal-actions">
          <Button onclick={() => (modalOpen = false)}>Cancel</Button>
          <Button variant="solid" color="danger" onclick={() => (modalOpen = false)}>
            Delete
          </Button>
        </div>
      </Modal>
    </section>

    <section>
      <h2>Toast</h2>
      <div class="row">
        <Button onclick={() => showToast("success", "Changes saved.")}>Success</Button>
        <Button onclick={() => showToast("error", "Something went wrong.")}>Error</Button>
        <Button onclick={() => showToast("warning", "Disk usage is above 90%.")}>Warning</Button>
      </div>
    </section>

    <section>
      <h2>StatusMessage</h2>
      <StatusMessage variant="info" message="Your session expires in 30 minutes." />
      <StatusMessage variant="success" message="Changes saved successfully." />
      <StatusMessage variant="warning" message="This action cannot be undone." />
      <StatusMessage variant="error" message="Failed to load data." />
    </section>

    <section>
      <h2>EmptyState</h2>
      <Card>
        <EmptyState title="No results found" message="Try adjusting your filters.">
          <Button variant="solid" color="primary">Clear filters</Button>
        </EmptyState>
      </Card>
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
    grid-template-columns: 5rem repeat(4, auto);
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

  .variant-grid > :global(.grid-label:nth-child(-n+5)) {
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
</style>
