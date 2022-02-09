<script>
    import Team from '../components/Team.svelte'
    import { data } from '../stores'

    let teams = [{
        name: "flaming chickens",
        number: 1540
    },
    {
        name: "another team",
        number: 1
    }]

    let selected

</script>
<main>
    <div class="select">
        <select bind:value={selected}>
            {#each $data.events as event}
                <option value={event.id}>{event.name}</option>
            {/each}
        </select>
      </div>
    {#each teams as team}
        <Team teamData={team}/>
    {/each}
</main>