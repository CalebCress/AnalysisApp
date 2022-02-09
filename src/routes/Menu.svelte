<script>
  import {data} from '../stores.js'
  let files
  $: {
    if (files && files.length > 0) {
      new Response(files[0]).json().then(json => {
        data.set(json)
      }, err => {
        console.log("not json")
      })
    }
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
        <input type="text" placeholder="localhost:4000"/>
      </nav>
    </div>
</main>