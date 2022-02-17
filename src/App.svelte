<script>
  import Router from 'svelte-spa-router'
  import { pop } from 'svelte-spa-router'
  import Menu from './routes/Menu.svelte'
  import Teams from './routes/Teams.svelte'
  import Team from './routes/Team.svelte'

  const dir = __dirname;

  const routes = {
    '/': Menu,
    '/teams': Teams,
    '/teams/:number': Team
  }
</script>

<style>
  .breadcrumb {
    position: static;
  }
</style>

<main>
  <nav class="level">
    <button class="button" on:click={()=>{pop()}}><i class="gg-chevron-left"></i></button>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#/">Menu</a></li>
        <li><a href="#/teams">Teams</a></li>
      </ul>
    </nav>
  </nav>
  <Router {routes}/>
</main>
