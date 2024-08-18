<script lang='ts'>

    let start_date: string;
    let end_date: string;

    export let data;
    const handleSelectVideo = async (start_date: string, end_date: string) => {
        const formData = new FormData();
        formData.append('start_date', start_date);
        formData.append('end_date', end_date);
        const response = await fetch('/api/database/select_video', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            return result;
        } else {
            throw new Error('Failed to fetch data');
        }
        
    }

</script>

<h1>Show analytics here</h1>

<input bind:value={start_date} type="date" placeholder="Start Date">
<input bind:value={end_date} type="date" placeholder="End Date">

<button on:click={() => handleSelectVideo(start_date, end_date)}>Select</button>

{#await data}
    Waiting
{:then result}
    {#each result.tables as table}
        <p>{table.table_name}</p>
    {/each}
    {#each result.buckets as bucket}
        <p>{bucket.name}</p>
    {/each}
{:catch error}
    <p>{error.message}</p>
{/await}