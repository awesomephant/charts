<script>
	let { children } = $props();
</script>

<pre>
{@render children()}
</pre>

<style lang="scss">
	@use 'mixins';
	pre {
		font-family: 'MD IO', monospace;
		font-size: 12px;
		left: 1rem;
		width: 40%;
		bottom: 0;
		max-height: 30%;
		z-index: 10;
		margin: 1em 0;
		color: darkred;
		overflow: scroll;
		border-top: 1px solid currentColor;
		@include mixins.bp(mixins.$tablet) {
			position: fixed;
			width: auto;
		}
	}
</style>
