<script>
    import UserInput from './UserInput.svelte';
    const date = new Date();
    export let data;

</script>



<h1>Document you workout here</h1>
<p>Today is {date.toDateString()}</p>
<UserInput />

<p>Choose a project to upload this video to</p>
<form >
    <select name="project" id="project">
        {#await data}
            Waiting
        {:then result}
            {#each result.results as project}
                <option value={project.id}>{project.title}</option>
                <!-- <p>{project.title}</p>
                <p>{project.description}</p> -->
            {/each}
        {:catch error}
            <p>{error.message}</p>
        {/await}
    </select>
</form>