<script lang='ts'>

    import { handleSelectVideo } from './actions';

    let start_date: string;
    let end_date: string;

    let selected_videos:string[] = [];

    export let data;

    const createLSTask = async (project_id: Number, url: string, file_name: string) => {
        const formData = new FormData();
        formData.append('project_id', project_id.toString());
        formData.append('url', url);
        formData.append('file_name', file_name);
        const response = await fetch('/api/labelstudio/create_task', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw new Error('Failed to create task');
        }
    }

    const getMinioUrl = async (objectName: string) => {
        const formData = new FormData();
        formData.append('objectName', objectName);
        const response = await fetch('/api/minio/get_video_url', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            return result.url;
        } else {
            throw new Error('Failed to fetch data');
        }
    }

    async function handleClick(start_date: string, end_date: string) {
        selected_videos = await handleSelectVideo(start_date, end_date);
    }

</script>

<h1>Show analytics here</h1>

<input bind:value={start_date} type="date" placeholder="Start Date">
<input bind:value={end_date} type="date" placeholder="End Date">

<button on:click={() => handleClick(start_date, end_date)}>Select</button>

{#await selected_videos}
    <p>Fetching data...</p>
{:then videos}
    <ul>
        {#each videos as video}
            <li>{video}</li>
        {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}