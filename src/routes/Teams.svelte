<script>
    import Team from '../components/ListTeam.svelte'
    import { data, teams } from '../stores'

    let event
    let rankBy = "number"
    let teamsInfo = $data.teams

    function updateTeams() {
        if (event != undefined){
            teamsInfo = []
            if (event === 0) {
                teamsInfo = $data.teams
            } else {
                let teamNumbers
                $data.events.every(eventObj => {
                    if (eventObj.id === event) {
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
                    teamsInfo.push(team)
                })
            }
            sort()
        }
    }

    function sort() {
        console.log(rankBy)
        if (rankBy === "number") {
            teamsInfo.sort((team1, team2) => {
                return team1.number - team2.number
            })
        }
        else if (rankBy === "defense") {
            teamsInfo.sort((team1, team2) => {
                if ($teams[team2.number].matchTotal === 0) {
                    return -1
                }
                else if ($teams[team1.number].matchTotal === 0) {
                    return 1
                }
                return ($teams[team1.number].defense/$teams[team1.number].matchTotal - $teams[team2.number].defense/$teams[team2.number].matchTotal)
            })
        }
        teamsInfo = teamsInfo //Svelte doesnt react to .sort() need to cause variable assignment for reactivity
    }
    sort()
</script>
<main>
    <nav class="level">
        <div>
            <p>Event: </p>
            <div class="select">
                <select bind:value={event} on:change={updateTeams}>
                    <option value={0}>All</option>
                    {#each $data.events as event}
                        <option value={event.id}>{event.name}</option>
                    {/each}
                </select>
            </div>
        </div>
        <div>
            <p>Rank By:</p>
            <div class="select">
                <select bind:value={rankBy} on:change={sort}>
                    <option value="number">Number</option>
                    <option value="defense">Defense %</option>
                </select>
            </div>
        </div>
    </nav>
    {#if teamsInfo}
        {#each teamsInfo as team}
            <Team teamData={team}/>
        {/each}
    {/if}
</main>