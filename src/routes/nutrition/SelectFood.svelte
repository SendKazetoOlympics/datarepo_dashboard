<script lang="ts">

    type foodItem = {
        name: string,
        portion: number,
        calories: number,
        protein: number,
        carbs: number,
        fat: number
    }

    // Create a list for the user to choose, pagniate it with a group of 5.

    const get_food_list = async () => {
        const response = await fetch('http://kazeserver.com:9500/flask/nutrition/get_food_list')
        const data = await response.json()
        let result: foodItem[] = []
        for (let i = 0; i < data['foods'].length; i++) {
            let food = data['foods'][i]
            let foodItem: foodItem = {
                name: food.name,
                portion: food.portion,
                calories: food.calories,
                protein: food.protein,
                carbs: food.carbs,
                fat: food.fat
            }
            result.push(foodItem)
        }
        return result
    }

    let foodItems: foodItem[] = []

    get_food_list().then((data) => {
        foodItems = data
    })

    let currentPage = 0

    let paginate = (array: any[], page_size: number, page_number: number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size)
    }

    let nextPage = () => {
        currentPage += 1
        if (currentPage > foodItems.length / 5) {
            currentPage = Math.floor(foodItems.length / 5)
        }
    }

    let prevPage = () => {
        currentPage -= 1
        if (currentPage < 0) {
            currentPage = 0
        }
    }

    let addFood = (food: foodItem) => {
        foodItems = [...foodItems, food]
    }

</script>

<h1>Track nutrition and metrics here</h1>

{#each paginate(foodItems, 5, currentPage) as food}
    <div class="card-compact">
        <div class="card-body">
            <h2>{food.name}</h2>
         </div>
    </div>
{/each}
<button class="btn" on:click={prevPage}>Previous</button>
<!-- <button class="btn" on:click={() => addFood(food)}>Add food</button> -->
<button class="btn" on:click={nextPage}>Next</button>
