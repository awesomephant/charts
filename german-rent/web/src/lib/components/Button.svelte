<script>
	let {
		priority = 'primary',
		size = 'medium',
		display = 'block',
		onClick,
		label = null,
		hideLabel = false,
		disabled = false,
		children = false
	} = $props();
</script>

<button
	onclick={onClick}
	class:hideLabel
	class={`container priority-${priority} size-${size} display-${display}`}
	{disabled}
>
	{#if label}
		<span class="label">
			{label}
		</span>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</button>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25em;
		font-family: inherit;
		border-radius: var(--br-small);
		border: 1px solid black;
		font-weight: 400;
		white-space: nowrap;
		cursor: pointer;
		transition: opacity var(--fast);
		:global(svg) {
			height: 0.9em;
			width: auto;
		}
	}
	button[disabled] {
		opacity: 0.35;
		pointer-events: none;
		cursor: default;
	}
	.hideLabel {
		font-size: 0;
		.label {
			position: absolute;
			left: -9999px;
		}
	}
	.container:hover,
	.container:focus-visible {
		text-decoration: underline;
	}
	.priority-primary {
		background: var(--violet-dark-5);
		color: white;
	}
	.priority-secondary {
		background: white;
		color: black;
	}
	.size-medium {
		font-size: var(--fs-base);
		height: 2.5em;
		padding: 0 1em;
	}
	.size-small {
		font-size: var(--fs-small-2);
		height: 1.75em;
		padding: 0 0.5em;
	}
	.display-block {
		width: 100%;
	}
</style>
