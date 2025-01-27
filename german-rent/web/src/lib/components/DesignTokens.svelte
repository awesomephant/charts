<script>
	let { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style lang="scss">
	.container {
		--plum-base: #b600fb;
		--plum-light-1: #cb42ff;
		--apple-light-3: #b8ebad;
		--apple-light-2: #92e382;
		--apple-light-1: #42c128;
		--red-base: #e92f02;
		--red-light-1: #ff4d20;
		--red-light-2: #ff7957;
		--red-light-3: #ffad99;
		--red-light-5: hsl(14, 100%, 98%);
		--plum-light-5: hsl(283, 49%, 98%);
		--violet-base: #3b1c72;
		--violet-dark-1: #6631c4;
		--violet-dark-2: #5429a3;
		--violet-dark-3: #3b1c72;
		--violet-dark-4: #1f103c;
		--violet-dark-5: #150b28;
		--violet-light-5: hsl(261, 55%, 97%);
		--violet-light-4: #e2d8f3;
		--violet-light-3: #c4b0e8;

		--fast: 150ms;
		--slow: 300ms;

		/* Border radius from the website */
		--br-large: 8px;
		--br-small: 4px;

		/* Type styles from the website */
		--swr-sans: 'SWR-VAR-Sans', sans-serif;
		--swr-text: 'SWR-VAR-Text', sans-serif;
		--ratio: 1.15;
		--fs-small-3: calc(var(--fs-small-2) / var(--ratio));
		--fs-small-2: calc(var(--fs-small-1) / var(--ratio));
		--fs-small-1: calc(var(--fs-base) / var(--ratio));
		--fs-base: clamp(1rem, calc(1.5vw + 0.25rem), 1.125rem);
		--fs-large-1: calc(var(--fs-base) * var(--ratio));
		--fs-large-2: calc(var(--fs-large-1) * var(--ratio));
		--fs-large-3: calc(var(--fs-large-2) * var(--ratio) * 2);

		display: contents;
	}
</style>
