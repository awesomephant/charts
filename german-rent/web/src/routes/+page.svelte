<script>
	import ChartList from '$lib/components/ChartList.svelte';
	const baseURL = 'https://static.datenhub.net/apps/p103_btw_quiz/main';
	const charts = [{ title: 'Map 1', slug: 'map-1' }];
</script>

<ChartList {baseURL} {charts} project="Slippy Maps" />
