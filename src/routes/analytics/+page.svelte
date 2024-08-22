<script lang='ts'>

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
            for (let video of result) {
                selected_videos.push(video.name);
                // let url = await getMinioUrl(video.name);

                // let task = await createLSTask(6, url, video.name);
                // console.log(task);
            }
            console.log(selected_videos);
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