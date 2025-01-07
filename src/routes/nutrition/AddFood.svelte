<script lang='ts'>
    let name: string = $state('Name');
    let portion: string = $state('Portion');
    let calories: string = $state('Calories');
    let carb: string = $state('Carb');
    let protein: string = $state('Protein');
    let fat: string = $state('Fat');

    const onAddFood = async () => {
        console.log('Adding food');
        console.log(name);
    }

</script>

<ul>
    <li class="py-2">
        <input class='input input-bordered' type='text' bind:value={name} placeholder='Name'>
    </li>
    <li class="pt-2">
        <input class='input input-bordered' type='text' bind:value={portion} placeholder='Portion'>
    </li>
    <li class="">
        <input class='input input-bordered' type='text' bind:value={calories} placeholder='Calories'>
    </li>
    <li class="">
        <input class='input input-bordered' type='text' bind:value={carb} placeholder='Carb'>
    </li>
    <li class="">
        <input class='input input-bordered' type='text' bind:value={protein} placeholder='Protein'>
    </li>
    <li class="">
        <input class='input input-bordered' type='text' bind:value={fat} placeholder='Fat'>
    </li>
</ul>

<button class='btn' onclick={() => onAddFood()}>Add food</button>
