<script lang='ts'>

    let field_names: string[] = ['Name', 'Portion', 'Calories', 'Carb', 'Protein', 'Fat'];
    let fields: string[] = $state(['', '', '', '', '', '']);

    const onAddFood = async () => {
        console.log('Adding food');
        const formData = new FormData();
        for (let i = 0; i < field_names.length; i++) {
            formData.append(field_names[i], fields[i]);
        }

        const response = await fetch('http://kazeserver.com:9500/flask/nutrition/add_food', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.log('Added food');
        } else {
            console.log('Failed to add food');
        }
    }

</script>

<ul class='w-44'>
    {#each fields as field, i}
    <li>
        <label class='form-control w-full max-w-xs'>
            <span class='label-text'>{field_names[i]}</span>
            <input class='input input-bordered' type='text' bind:value={fields[i]} placeholder={field}>
        </label>    
    </li>
{/each}
</ul>



<button class='btn' onclick={() => onAddFood()}>Add food</button>
