<script>
    import Team from '../components/Team.svelte'
    let teams = [{
        name: "flaming chickens",
        number: 1540
    },
    {
        name: "another team",
        number: 1
    }
    ]
</script>
<main>
    {#each teams as team}
        <Team teamData={team}/>
    {/each}
</main>