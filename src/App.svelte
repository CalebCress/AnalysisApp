<script>
  import Router from 'svelte-spa-router'
  import Menu from './routes/Menu.svelte'
  import Teams from './routes/Teams.svelte'

  const dir = __dirname;

  const routes = {
    '/': Menu,
    '/teams': Teams
  }
</script>

<style>
  .breadcrumb {
    position: static;
  }
</style>

<main>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="#/">Menu</a></li>
      <li><a href="#/teams">Teams</a></li>
      <li><a href="#/events">Events</a></li>
    </ul>
  </nav>
  <Router {routes}/>
</main>
