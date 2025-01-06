<script lang="ts">

type foodItem = {
    name: string,
    portion: number,
    calories: number,
    protein: number,
    carbs: number,
    fat: number
}

let foodItems: foodItem[] = []

// Create a list for the user to choose, pagniate it with a group of 5.

let foodList = [
    {
        name: "Apple",
        portion: 1,
        calories: 95,
        protein: 0.5,
        carbs: 25,
        fat: 0.3
    },
    {
        name: "Banana",
        portion: 1,
        calories: 105,
        protein: 1.3,
        carbs: 27,
        fat: 0.4
    },
    {
        name: "Orange",
        portion: 1,
        calories: 62,
        protein: 1.2,
        carbs: 15,
        fat: 0.2
    },
    {
        name: "Grapes",
        portion: 1,
        calories: 69,
        protein: 0.7,
        carbs: 18,
        fat: 0.2
    },
    {
        name: "Strawberries",
        portion: 1,
        calories: 49,
        protein: 1,
        carbs: 11,
        fat: 0.4
    },
    {
        name: "Blueberries",
        portion: 1,
        calories: 57,
        protein: 0.7,
        carbs: 14,
        fat: 0.3
    },
    {
        name: "Raspberries",
        portion: 1,
        calories: 64,
        protein: 1.5,
        carbs: 15,
        fat: 0.8
    },
    {
        name: "Blackberries",
        portion: 1,
        calories: 43,
        protein: 2,
        carbs: 10,
        fat: 0.5
    },
    {
        name: "Pineapple",
        portion: 1,
        calories: 83,
        protein: 0.5,
        carbs: 22,
        fat: 0.1
    },
    {
        name: "Watermelon",
        portion: 1,
        calories: 46,
        protein: 0.9,
        carbs: 11,
        fat: 0.2
    },
    {
        name: "Cantaloupe",
        portion: 1,
        calories: 53,
        protein: 1.3,
        carbs: 13,
        fat: 0.3
    },

]

let currentPage = 0

let paginate = (array: any[], page_size: number, page_number: number) => {
    return array.slice(page_number * page_size, (page_number + 1) * page_size)
}

let nextPage = () => {
    currentPage += 1
}

let prevPage = () => {
    currentPage -= 1
}

let addFood = (food: foodItem) => {
    foodItems = [...foodItems, food]
}

</script>

<h1>Track nutrition and metrics here</h1>

{#each paginate(foodList, 5, currentPage) as food}
    <div class="card">
        <div class="card-body">
            <h2>{food.name}</h2>
         </div>
    </div>

{/each}
<button class="btn" on:click={prevPage}>Previous</button>
<button class="btn" on:click={() => addFood(food)}>Add food</button>
<button class="btn" on:click={nextPage}>Next</button>
