<script>
    let file = null;
    let preview = '';
  </script>

<form id="uploadForm"method="post" enctype="multipart/form-data">
    <input type="file" name="files" id="files" multiple accept="video/*">
</form>

<div class="preview-container">
    {#if file}
        <img class="preview-image" src={preview} alt="Preview of uploaded file" />
    {:else}
        <p class="no-file">Please upload a file to preview it.</p>
    {/if}
</div>


<style>
    .preview-container {
    margin-top: 1rem;
  }
    .preview-image {
    max-width: 100%;
    max-height: 300px;
  }
</style>