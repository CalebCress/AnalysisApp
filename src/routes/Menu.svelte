<script>
  import {data, teams} from '../stores.js'
  let files
  let apiUrl
  function updateTeams() {
    let teamsData = {}
    $data.teams.forEach((team) => {
      teamsData = Object.assign(teamsData, {
        [team.number]: {
          autoHighTotal: 0,
          autoLowTotal: 0,
          teleHighTotal: 0,
          teleLowTotal: 0,
          defense: 0,
          matchTotal: 0
        }
      })
    })

    $data.data.forEach((scoutInfo) => {
      let data = scoutInfo.data
      if (scoutInfo.teamNumber in teamsData) {
        teamsData[data.teamNumber].autoHighTotal += data.autoUpperScore
        teamsData[data.teamNumber].autoLowTotal += data.autoLowerScore
        teamsData[data.teamNumber].teleHighTotal += data.teleUpperScore
        teamsData[data.teamNumber].teleLowTotal += data.teleLowerScore
        if (data.defended) {
          teamsData[data.teamNumber].defense ++
        }
        teamsData[data.teamNumber].matchTotal ++
      }
    })

    teams.set(teamsData)
  }

  $: {
    if (files && files.length > 0) {
      new Response(files[0]).json().then(json => {
        data.set(json)
        updateTeams()
      }, err => {
        console.log("not json")
      })
    }
  }
  function loadRemote() {
    fetch(`http://${apiUrl}/all`)
    .then(response => response.json())
    .then(json => {
      data.set(json)
      updateTeams()
    })
  }
</script>

<main>
    <div class="box">
      <h1 class="title">Load Data</h1>
      <nav class="level">
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" bind:files >
            <span class="file-cta">
              <span class="file-icon">
                  <i class="gg-file"></i>
              </span>
              <span class="file-label">
               Data JSON
              </span>
            </span>
          </label>
        </div>
        <div>
          <input type="text" placeholder="localhost:5000" bind:value={apiUrl}/>
          <button class="button is-primary" on:click={loadRemote}>Load</button>
        </div>
      </nav>
    </div>
</main>