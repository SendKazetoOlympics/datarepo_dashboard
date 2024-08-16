
<script>
    import UserInput from './UserInput.svelte';

    const date = new Date();
    export let data;
</script>



<h1>Document you workout here</h1>
<p>Today is {date.toDateString()}</p>
<UserInput />

{#await data}
    Waiting
{:then result}
    {#each result.results as project}
        <p>{project.id}</p>
        <p>{project.title}</p>
        <p>{project.description}</p>
    {/each}
{:catch error}
    <p>{error.message}</p>
{/await}
