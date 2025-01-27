<script>
	import { getContext, setContext, createEventDispatcher, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const dispatch = createEventDispatcher();

	export let id;
	export let type;
	export let filter = null;
	export let layout = {};
	export let paint = {};
	export let colorData = null;
	export let colorKey = 'color';
	export let nameKey = null;
	export let valueKey = null;
	export let idKey = 'id';
	export let select = false;
	export let clickIgnore = false;
	export let clickCenter = false;
	export let clickFocus = false;
	export let selected = null;
	export let hover = false;
	export let hovered = null;
	export let highlight = false;
	export let highlightKey = 'highlighted';
	export let highlighted = [];
	export let maxzoom = null;
	export let minzoom = null;
	export let sourceLayer = null;
	export let visible = true;
	export let placeBelow = 'highway_motorway';
	export let renderAfter = [];

	const { source, layer, promoteId } = getContext('source');
	const { getMap } = getContext('map');
	const map = getMap();

	setContext('layer', {
		layer: id
	});

	const hoverObj = writable({
		id: null,
		feature: null,
		event: null
	});
	setContext('hover', hoverObj);

	idKey = idKey ? idKey : promoteId;
	sourceLayer = sourceLayer ? sourceLayer : layer;

	let selectedPrev = null;
	let hoveredPrev = null;
	let highlightedPrev = [];

	layout.visibility = visible ? 'visible' : 'none';

	let options = {
		id: id,
		type: type,
		source: source,
		paint: paint,
		layout: layout
	};

	if (filter) {
		options['filter'] = filter;
	}

	if (sourceLayer) {
		options['source-layer'] = sourceLayer;
	}
	if (maxzoom) {
		options['maxzoom'] = maxzoom;
	}
	if (minzoom) {
		options['minzoom'] = minzoom;
	}

	if (map.getLayer(id)) {
		map.removeLayer(id);
	}

	$: if (shouldBeRendered) {
		// add layer below place labels by default
		let layers = map.getStyle().layers;
		let firstSymbolId;
		for (let i = 0; i < layers.length; i++) {
			if (layers[i].id.includes(placeBelow)) {
				firstSymbolId = layers[i].id;
				break;
			}
		}

		if (!firstSymbolId && placeBelow) {
			console.warn(
				`${id} should be rendered below a layer including ${placeBelow} in its id. Such a layer does not exist at the moment.`
			);
		}
		map.addLayer(options, firstSymbolId);
	}

	// Updates "color" feature states for all geo codes in data array
	// Assumes that each data point has the colours defined on the colorCode key
	function updateColors(colorData, colorKey = colorKey) {
		console.log('updating colors...');
		for (const d of colorData) {
			map.setFeatureState(
				{
					source: source,
					id: d.id,
					...(sourceLayer && { sourceLayer: sourceLayer })
				},
				{
					color: colorKey ? d[colorKey] : null,
					name: nameKey ? d[nameKey] : null,
					value: valueKey ? d[valueKey] : null
				}
			);
		}
	}
	$: colorData && updateColors(colorData, colorKey);

	// Function to update layer filter
	function setFilter(filter) {
		if (map.getLayer(id)) map.setFilter(id, filter);
	}
	$: setFilter(filter);

	// Function to update paint properties
	function setPaint(paint) {
		if (map.getLayer(id)) {
			for (const key in paint) {
				map.setPaintProperty(id, key, paint[key]);
			}
		}
	}
	$: setPaint(paint);

	// Function to toggle layer visibility based on "visible" prop
	function toggleVisibility(visible) {
		if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', visible ? 'visible' : 'none');
	}
	$: toggleVisibility(visible);

	// Updates the "highlighted" feature state as geo codes are added to/removed from the highlighted array
	$: if (highlight && highlighted != highlightedPrev) {
		if (highlightedPrev[0]) {
			for (const id of highlightedPrev) {
				let state = {};
				state[highlightKey] = false;
				map.setFeatureState({ source, sourceLayer, id }, state);
			}
		}
		highlightedPrev = highlighted;
		if (highlighted[0]) {
			for (const id of highlighted) {
				let state = {};
				state[highlightKey] = true;
				map.setFeatureState({ source, sourceLayer, id }, state);
			}
		}
	}

	// Adds a click event to change the selected geo code (if select === true for map layer)
	if (select) {
		map.on('click', id, (e) => {
			if (e.features.length > 0 && !clickIgnore) {
				let feature = e.features[0];
				selected = feature.properties[idKey];

				dispatch('select', {
					id: selected,
					feature: feature,
					event: e
				});

				if (selectedPrev) {
					map.setFeatureState(
						{ source: source, sourceLayer: sourceLayer, id: selectedPrev },
						{ selected: false }
					);
				}

				map.setFeatureState(
					{ source: source, sourceLayer: sourceLayer, id: selected },
					{ selected: true }
				);

				selectedPrev = selected;
			}
		});
	}

	// Updates the selected geo code if it is changed elsewhere in the app (outside of this component)
	$: if (selected != selectedPrev) {
		if (selectedPrev) {
			map.setFeatureState(
				{ source: source, sourceLayer: sourceLayer, id: selectedPrev },
				{ selected: false }
			);
		}
		if (selected) {
			map.setFeatureState(
				{ source: source, sourceLayer: sourceLayer, id: selected },
				{ selected: true }
			);
		}
		selectedPrev = selected;
	}

	// Adds an event to update the hovered geo code when the mouse is moved over the map
	if (hover) {
		map.on('mousemove', id, (e) => {
			if (e.features.length > 0) {
				if (hovered) {
					map.setFeatureState(
						{ source: source, sourceLayer: sourceLayer, id: hovered },
						{ hovered: false }
					);
				}
				let feature = e.features[0];
				hovered = hoveredPrev = feature.properties[idKey];

				hoverObj.set({
					id: hovered,
					feature: feature,
					event: e
				});

				dispatch('hover', $hoverObj);

				map.setFeatureState(
					{ source: source, sourceLayer: sourceLayer, id: hovered },
					{ hovered: true }
				);

				// Change the cursor style as a UI indicator.
				map.getCanvas().style.cursor = 'pointer';
			}
		});

		map.on('mouseleave', id, (e) => {
			if (hovered) {
				map.setFeatureState(
					{ source: source, sourceLayer: sourceLayer, id: hovered },
					{ hovered: false }
				);
			}
			hovered = hoveredPrev = null;

			hoverObj.set({
				id: null,
				feature: null,
				event: e
			});

			dispatch('hover', $hoverObj);

			// Reset cursor and remove popup
			map.getCanvas().style.cursor = '';
		});
	}

	// Updates the hovered geo code if it is changed elsewhere in the app (outside of this component)
	$: if (hover && hovered != hoveredPrev) {
		if (hoveredPrev) {
			map.setFeatureState(
				{ source: source, sourceLayer: sourceLayer, id: hoveredPrev },
				{ hovered: false }
			);
		}
		if (hovered) {
			map.setFeatureState(
				{ source: source, sourceLayer: sourceLayer, id: hovered },
				{ hovered: true }
			);
		}
		hoveredPrev = hovered;
	}

	onDestroy(async () => {
		console.log('destroy layer');
		if (map && map.getLayer(id)) map.removeLayer(id);
	});
</script>

<slot {hovered} />
