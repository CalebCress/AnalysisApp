<script>
    import { data, teams } from '../stores'
    export let params
    let number = Number(params.number)
    let name
    console.log(number)
    let team = $teams[number]
    $data.teams.every(teamFrom => {
        console.log(teamFrom)
        if (number === teamFrom.number) {
            name = teamFrom.name
            console.log(name)
            return false
        }
        return true
    })

</script>
<main>
    <nav class="level">
        <h1 class="title">{name}</h1>
        <p>{number}</p>
    </nav>
    <div class="box">
        <nav class="level">
            <h1 class="subtitle">Auto</h1>
            <p>High Score Average: {team.autoHighTotal/team.matchTotal}</p>
            <p>Low Score Average: {team.autoLowTotal/team.matchTotal}</p>
        </nav>
        <nav class="level">
            <h1 class="subtitle">Teleop</h1>
            <p>High Score Average: {team.teleHighTotal/team.matchTotal}</p>
            <p>Low Score Average: {team.teleLowTotal/team.matchTotal}</p>
        </nav>
        <nav class="level">
            <h1 class="subtitle">Defense</h1>
            <p>Defense % {100*team.defense/team.matchTotal}</p>
        </nav>
    </div>
</main>