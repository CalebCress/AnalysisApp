<script>
    import { data } from '../stores'
    export let params
    let teamData = []
    let team
    let number = Number(params.number)
    console.log(number)
    $data.teams.every(teamFrom => {
        console.log(teamFrom)
        if (number === teamFrom.number) {
            team = teamFrom
            return false
        }
        return true
    })
    $data.data.forEach(data => {
        if (number === data.teamNumber) {
            teamData.push(data)
        }
    })

    let autoHighTotal = 0
    let autoLowTotal = 0
    let teleHighTotal = 0
    let teleLowTotal = 0
    let defense = 0
    let matchTotal = teamData.length
    teamData.forEach(scoutData => {
        let data = scoutData.data
        autoHighTotal += data.autoUpperScore
        autoLowTotal += data.autoLowerScore
        teleHighTotal += data.teleUpperScore
        teleLowTotal += data.teleLowerScore
        if (data.defended) {
            defense ++
        }
    })

</script>
<main>
    <nav class="level">
        <h1 class="title">{team.name}</h1>
        <p>{team.number}</p>
    </nav>
    <div class="box">
        <nav class="level">
            <h1 class="subtitle">Auto</h1>
            <p>High Score Average: {autoHighTotal/matchTotal}</p>
            <p>Low Score Average: {autoLowTotal/matchTotal}</p>
        </nav>
        <nav class="level">
            <h1 class="subtitle">Teleop</h1>
            <p>High Score Average: {teleHighTotal/matchTotal}</p>
            <p>Low Score Average: {teleLowTotal/matchTotal}</p>
        </nav>
        <nav class="level">
            <h1 class="subtitle">Defense</h1>
            <p>Defense % {100*defense/matchTotal}</p>
        </nav>
    </div>
</main>