<script lang="ts">
    let files: FileList;

    const handleUpload = async (files: FileList) =>{
        Array.from(files).forEach(async file => {
            const minio_formData = new FormData();
            minio_formData.append('file', file);
            const minio_response = await fetch('/api/minio/upload_video', {
                method: 'POST',
                body: minio_formData
            });

            if (minio_response.ok) {
                alert('Files uploaded successfully');
            } else {
                
                alert('Failed to upload files');
            }
            const database_formData = new FormData();
            database_formData.append('name', file.name);
            database_formData.append('start_time', String(file.lastModified));
            const database_response = await fetch('/api/database/upload_video', {
                method: 'POST',
                body: database_formData
            });

            if (database_response.ok) {
                alert('Added entry to database');
            } else {
                alert('Failed to add entry to database');
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