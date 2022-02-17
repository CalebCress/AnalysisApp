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

    function calcScore(teamData) {
        let score = 0
        score += teamData.autoHighTotal*4
        score += teamData.autoLowTotal*2
        score += teamData.teleHighTotal*2
        score += teamData.teleLowTotal
        return score
    }

    function sort() {
        console.log(rankBy)
        if (rankBy === "number") {
            teamsInfo.sort((team1, team2) => {
                return team1.number - team2.number
            })
        }
        else{
            teamsInfo.sort((team1, team2) => {
                if ($teams[team2.number].matchTotal === 0) {
                    return -1
                }
                else if ($teams[team1.number].matchTotal === 0) {
                    return 1
                }
                if (rankBy === "defense") {
                    return ($teams[team1.number].defense/$teams[team1.number].matchTotal - $teams[team2.number].defense/$teams[team2.number].matchTotal)
                } else if (rankBy === "teleHigh") {
                    return ($teams[team1.number].teleHighTotal/$teams[team1.number].matchTotal - $teams[team2.number].teleHighTotal/$teams[team2.number].matchTotal)
                } else if (rankBy === "shootingScore") {
                    return(calcScore($teams[team1.number])/$teams[team1.number].matchTotal - calcScore($teams[team2.number])/$teams[team2.number].matchTotal)
                }
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
                    <option value="teleHigh">Teleop High Port</option>
                    <option value="shootingScore">Shooting Score Average</option>
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