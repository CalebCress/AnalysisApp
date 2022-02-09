<script>
    import Team from '../components/Team.svelte'
    import { data } from '../stores'

    let selected

</script>
<main>
    <div class="select">
        <select bind:value={selected}>
            <option value={0}>All</option>
            {#each $data.events as event}
                <option value={event.id}>{event.name}</option>
            {/each}
        </select>
      </div>
    {#each $data.teams as team}
        <Team teamData={team}/>
    {/each}
</main>