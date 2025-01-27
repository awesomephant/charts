<svelte:options customElement="swrdata-slippy" />

<script>
	import DesignTokens from './components/DesignTokens.svelte';
	import Debug from './components/Debug.svelte';
	import Map from './components/Map.svelte';
	import MapLayer from './components/MapLayer.svelte';
	import MapStyle from './components/MapStyle';
	import { browser, dev } from '$app/environment';
	import MapSource from './components/MapSource.svelte';
</script>

<DesignTokens>
	<div class="container">
		<Map initialLocation={{ lat: 51.2, lng: 10.35, zoom: 5.4 }} minzoom={5.4} style={MapStyle}>
			<MapSource type="vector">
				<MapLayer id="census-squares"></MapLayer>
			</MapSource>
		</Map>
	</div>
	© GeoBasis-DE / BKG 2018
</DesignTokens>
{#if dev}
	<Debug>kjh</Debug>
{/if}

<style lang="scss">
	@use 'components/mixins';

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: inherit;
	}

	.container {
		height: 800px;
		width: 100%;
	}
</style>
