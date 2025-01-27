<!--
  @component 
  Displays an interactive slippy map

  Required props:
  - **style** *object | string* An object with the map style definition or an url string pointing to it.
  - **initialLocation** *object {lng,lat,zoom | bounds | countryKey}* The object defining the initial map view by latitude, longitude of the map center and zoom level, a bounding box or the country key for a bounding box defined in js/constants.
  
  Optional props and bindings:
  - **id** *string (default: map)* The id which is assigned to the map wrapper.
  - **map** *object* The current map instance. Can be used to interact with the maplibre gl map api. Read-only normally.
  - **minzoom** *integer (default: 0)* The minimal map zoom. 
  - **maxzoom** *integer (default: 14)* The max map zoom. 
  - **options** *object* Further initial config the map should be created with. For all options see the maplibre gl doc.
  - **controls** *boolean (default: true)* If `true`, show control elements: Zoom, interactive and fullscreen buttons.
  - **interactive** *boolean (default: true)* If `true`, enable map interaction: Zooming, Panning, etc.
  - **attribution** *boolean (default: true)* If `true`, show attribution.
  - **allowFullscreen** *boolean (default: false)* If `true`, show fullscreen button.
  - **zoom** *float* The current map zoom.
  - **center** *object {lng,lat}* The current position of the map. Defined as center of currently visible map view.
  - **pitch** *float* The current camera pitch.
  - **bearing** *float* The current map bearing.
-->
<script>
	import maplibre from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { setContext, onMount, onDestroy } from 'svelte';

	export let map = undefined;
	export let id = 'map';
	export let initialLocation = {
		lng: 15,
		lat: 45,
		zoom: 1
	};
	export let style = {
		version: 8,
		sources: {},
		layers: [
			{
				id: 'background',
				type: 'background',
				paint: { 'background-color': 'pink' }
			}
		]
	};
	export let minzoom = 0;
	export let maxzoom = 14;
	export let options = {};
	export let controls = true;
	export let interactive = true;
	export let tabbable = false;
	export let allowRotation = false;
	export let allowFullscreen = false;

	export let zoom = null;
	export let center = null;
	export let pitch = null;
	export let bearing = null;

	let isLoading = true;

	let container;
	let _options = {};

	setContext('map', {
		getMap: () => map
	});

	function sleep(ms = 1000) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// Interpret initial Location
	if (initialLocation.bounds) {
		_options.bounds = initialLocation.bounds;
	} else if (initialLocation.lng && initialLocation.lat) {
		_options.center = [+initialLocation.lng, +initialLocation.lat];
		if (initialLocation.zoom) {
			_options.zoom = +initialLocation.zoom;
		}
		if (initialLocation.pitch) {
			_options.pitch = +initialLocation.pitch;
		}
		if (initialLocation.bearing) {
			_options.bearing = +initialLocation.bearing;
		}
	}

	_options = { ..._options, ...options }; // Combine core options + custom user options

	onMount(() => {
		map = new maplibre.Map({
			container,
			style,
			minZoom: minzoom,
			maxZoom: maxzoom,
			interactive,
			attributionControl: false,
			..._options
		});

		// prevent rotation
		if (!allowRotation) {
			map.touchZoomRotate.disableRotation();
		}

		// Enable attribution if attribution = true
		map = map.addControl(
			new maplibre.AttributionControl({
				compact: false
			})
		);

		if (controls && !Array.isArray(controls)) {
			map.addControl(new maplibre.NavigationControl({ showCompass: false }), 'bottom-right');
		} else if (Array.isArray(controls) && !controls.includes('locate')) {
			map.addControl(
				new maplibre.NavigationControl({
					showCompass: controls.includes('compass'),
					visualizePitch: controls.includes('pitch')
				}),
				'bottom-right'
			);
		}

		if (Array.isArray(controls) && controls.includes('locate')) {
			map.addControl(new maplibre.GeolocateControl({}));
		}

		map.on('load', (e) => {
			isLoading = false;
			zoom = map.getZoom();
			center = map.getCenter();
			pitch = map.getPitch();
			bearing = map.getBearing();
		});

		// Update zoom level and center if the view changes
		map.on('moveend', () => {
			zoom = map.getZoom();
			center = map.getCenter();
			pitch = map.getPitch();
			bearing = map.getBearing();
		});
	});

	onDestroy(async () => {
		await sleep(250);
		if (map) map.remove();
		map = null;
	});

	function setStyle(style) {
		if (map) map.setStyle(style);
	}
	$: setStyle(style);
</script>

<div bind:this={container} {id} class="container">
	{#if !isLoading}
		<slot />
	{/if}
</div>
<pre>
Zoom: {zoom}
Center: {center}
</pre>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		border: 1px solid red;
	}
</style>
