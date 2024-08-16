
<script>
    const date = new Date();
    export let data;
</script>

<h1>Document you workout here</h1>
<p>Today is {date.toDateString()}</p>
{#await data}
    Waiting
{:then result}
    <p>{result.count}</p>
{:catch error}
    <p>{error.message}</p>
{/await}