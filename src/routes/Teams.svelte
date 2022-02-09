<script>
    import Team from '../components/ListTeam.svelte'
    import { data } from '../stores'

    let selected
    let teams = $data.teams

    function updateTeams() {
        if (selected != undefined){
            teams = []
            if (selected === 0) {
                teams = $data.teams
            } else {
                let teamNumbers
                $data.events.every(eventObj => {
                    if (eventObj.id === selected) {
                        teamNumbers = eventObj.teams
                        return false
                    }
                    return true
                })
                teamNumbers.forEach(teamNum => {
                    let team
                    $data.teams.every((teamIn => {
                        if (teamIn.number === teamNum) {
                            team = teamIn
                            return false
                        }
                        return true
                    }))
                    teams.push(team)
                })
            }
        }
    }
</script>
<main>
    <div class="select">
        <select bind:value={selected} on:change={updateTeams}>
            <option value={0}>All</option>
            {#each $data.events as event}
                <option value={event.id}>{event.name}</option>
            {/each}
        </select>
      </div>
    {#if teams}
        {#each teams as team}
            <Team teamData={team}/>
        {/each}
    {/if}
</main>