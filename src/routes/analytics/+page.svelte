<script>
    export let data;
</script>

<h1>Show analytics here</h1>

{#await data}
    Waiting
{:then result}
    {#each result.tables as table}
        <p>{table.table_name}</p>
    {/each}
{:catch error}
    <p>{error.message}</p>
{/await}