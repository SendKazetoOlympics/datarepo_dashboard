<script lang='ts'>
	import "../app.css";
	let isDark: Boolean = false;
</script>

<nav>
	<a href="./">Home</a>
	<a href="./workout">Workout</a>
	<a href="./nutrition">Nutrition</a>
	<a href="./analytics">Analytics</a>
	<input type="checkbox" bind:value={isDark} class="toggle theme-controller" />
</nav>

<slot></slot>
