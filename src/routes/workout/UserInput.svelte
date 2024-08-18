<script lang="ts">
    let files: FileList;

    const handleUpload = async (files: FileList) =>{
        Array.from(files).forEach(async file => {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch('/api/minio', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Files uploaded successfully');
            } else {
                alert('Failed to upload files');
            }
        });
    }
</script>

<form id="uploadForm" method="post" enctype="multipart/form-data">
    <input bind:files={files} type="file" name="files" id="files" multiple accept="video/*">
</form>

{#if files}
    <ul>
        {#each Array.from(files) as file}
            <li>{file.name} ({file.size} bytes)</li>
        {/each}
    </ul>
{/if}

<button on:click={() => handleUpload(files)}>Upload</button>