<script>
    export let teamData
</script>
<a href="#/teams/{teamData.number}">
    <div class="box">
        <nav class="level">
            <p>{teamData.number}</p>
            <p>{teamData.name}</p>
        </nav>
    </div>
</a>