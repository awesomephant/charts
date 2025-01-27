<script>
	let { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		display: flex;
		flex-flow: column;
		gap: 0.5em;
	}
</style>
