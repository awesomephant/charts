<script>
	import { dev } from '$app/environment';
	import DevContainer from '$lib/components/DevContainer.svelte';
	import App from '$lib/App.svelte';
</script>

{#if dev}
	<DevContainer>
		<App />
	</DevContainer>
{:else}
	<swrdata-slippy></swrdata-slippy>
{/if}
