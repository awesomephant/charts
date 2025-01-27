<script>
	let { children } = $props();
</script>

<div class="container">
	<div class="embed">
		{@render children()}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		max-width: 682px;
		margin: 0 auto;
	}
	.embed {
		width: 100%;
	}
</style>
