<script lang='ts'>
    import UserInput from './UserInput.svelte';
    const date = new Date();
    export let data;

    let selected: Number[] = [];
</script>


<h1>Document you workout here</h1>
<p>Today is {date.toDateString()}</p>
<UserInput />



<p>Choose a project to upload this video to</p>
<form>
    <select 
    bind:value={selected}
    name="project"
    id="project"
    multiple>
        {#await data}
            Waiting
        {:then result}
            {#each result.projects.results as project}
                <option value={project.id}>{project.title}</option>
                <p>{project.title}</p>
                <p>{project.description}</p>
            {/each}
        {:catch error}
            <p>{error.message}</p>
        {/await}
    </select>
</form>

<p>
    selected projects: {selected ? selected: '[waiting]'}
</p>