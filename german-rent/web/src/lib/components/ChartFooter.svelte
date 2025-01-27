<script>
	import Logotype from './logotype.svg.svelte';
	let { layout = 'one-up', children } = $props();
</script>

<footer class={`container ${layout}`}>
	{#if children}
		<div class="notes">
			{@render children()}
		</div>
	{/if}
	<Logotype />
</footer>

<style lang="scss">
	@use './mixins';

	.container {
		gap: 0.5rem;
	}
	.notes {
		width: 100%;
	}
	footer :global(*) {
		@extend %caption;
		margin-bottom: 0;
		color: rgb(100, 100, 100);
	}
	footer :global(a),
	footer :global(summary) {
		&:hover,
		&:focus-visible {
			color: rgb(50, 50, 50);
		}
	}

	.one-up {
		display: flex;
		flex-flow: column;
		align-items: flex-start;
	}
	.two-up {
		display: grid;
		grid-template-columns: 1fr;
		@include mixins.bp(mixins.$phone) {
			grid-template-columns: 2.5fr 1fr;
			align-items: last baseline;
			justify-items: flex-end;
		}
	}
</style>
