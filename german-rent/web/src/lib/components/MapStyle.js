const style = {
	version: 8,
	id: 'swrdata-light',
	name: 'SWR Data Light',
	metadata: {
		'maputnik:renderer': 'mbgljs',
		license: 'https://creativecommons.org/publicdomain/zero/1.0/'
	},
	glyphs: 'https://tiles.datenhub.net/assets/fonts/{fontstack}/{range}.pbf',
	sources: {
		'versatiles-shortbread': {
			tilejson: '3.0.0',
			type: 'vector',
			scheme: 'xyz',
			bounds: [-180, -85.0511287798066, 180, 85.0511287798066],
			minzoom: 0,
			maxzoom: 14,
			maxZoom: 14,
			vector_layers: [
				{
					id: 'place_labels',
					fields: {
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						population: 'Number'
					},
					minzoom: 3,
					maxzoom: 14
				},
				{
					id: 'boundaries',
					fields: {
						admin_level: 'Number',
						coastline: 'Boolean',
						disputed: 'Boolean',
						maritime: 'Boolean'
					},
					minzoom: 0,
					maxzoom: 14
				},
				{
					id: 'boundary_labels',
					fields: {
						admin_level: 'Number',
						land_area: 'Number',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						name_single: 'String',
						way_area: 'Number'
					},
					minzoom: 2,
					maxzoom: 14
				},
				{
					id: 'addresses',
					fields: { housename: 'String', housenumber: 'String' },
					minzoom: 14,
					maxzoom: 14
				},
				{
					id: 'water_lines',
					fields: {
						bridge: 'Boolean',
						kind: 'String',
						tunnel: 'Boolean'
					},
					minzoom: 4,
					maxzoom: 14
				},
				{
					id: 'water_lines_labels',
					fields: {
						bridge: 'Boolean',
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						tunnel: 'Boolean'
					},
					minzoom: 4,
					maxzoom: 14
				},
				{
					id: 'dam_lines',
					fields: { kind: 'String' },
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'dam_polygons',
					fields: { kind: 'String' },
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'pier_lines',
					fields: { kind: 'String' },
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'pier_polygons',
					fields: { kind: 'String' },
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'bridges',
					fields: { kind: 'String' },
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'street_polygons',
					fields: {
						bridge: 'Boolean',
						kind: 'String',
						rail: 'Boolean',
						service: 'String',
						surface: 'String',
						tunnel: 'Boolean'
					},
					minzoom: 11,
					maxzoom: 14
				},
				{
					id: 'streets_polygons_labels',
					fields: {
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String'
					},
					minzoom: 14,
					maxzoom: 14
				},
				{
					id: 'ferries',
					fields: {
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String'
					},
					minzoom: 8,
					maxzoom: 14
				},
				{
					id: 'streets',
					fields: {
						bicycle: 'String',
						bridge: 'Boolean',
						horse: 'String',
						kind: 'String',
						link: 'Boolean',
						oneway: 'Boolean',
						oneway_reverse: 'Boolean',
						rail: 'Boolean',
						service: 'String',
						surface: 'String',
						tracktype: 'String',
						tunnel: 'Boolean'
					},
					minzoom: 14,
					maxzoom: 14
				},
				{
					id: 'street_labels',
					fields: {
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						ref: 'String',
						ref_cols: 'Number',
						ref_rows: 'Number',
						tunnel: 'Boolean'
					},
					minzoom: 10,
					maxzoom: 14
				},
				{
					id: 'street_labels_points',
					fields: {
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						ref: 'String'
					},
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'aerialways',
					fields: { kind: 'String' },
					minzoom: 12,
					maxzoom: 14
				},
				{
					id: 'public_transport',
					fields: {
						iata: 'String',
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						station: 'String'
					},
					minzoom: 11,
					maxzoom: 14
				},
				{
					id: 'buildings',
					fields: {
						amenity: 'String',
						dummy: 'Number',
						name: 'String',
						name_de: 'String',
						name_en: 'String'
					},
					minzoom: 14,
					maxzoom: 14
				},
				{
					id: 'water_polygons',
					fields: { kind: 'String', way_area: 'Number' },
					minzoom: 4,
					maxzoom: 14
				},
				{
					id: 'ocean',
					fields: { x: 'Number', y: 'Number' },
					minzoom: 8,
					maxzoom: 14
				},
				{
					id: 'water_polygons_labels',
					fields: {
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						way_area: 'Number'
					},
					minzoom: 14,
					maxzoom: 14
				},
				{
					id: 'land',
					fields: { kind: 'String' },
					minzoom: 7,
					maxzoom: 14
				},
				{
					id: 'sites',
					fields: {
						amenity: 'String',
						kind: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String'
					},
					minzoom: 14,
					maxzoom: 14
				},
				{
					id: 'pois',
					fields: {
						amenity: 'String',
						atm: 'Boolean',
						cuisine: 'String',
						denomination: 'String',
						emergency: 'String',
						highway: 'String',
						historic: 'String',
						information: 'String',
						leisure: 'String',
						man_made: 'String',
						name: 'String',
						name_de: 'String',
						name_en: 'String',
						'recycling:clothes': 'Boolean',
						'recycling:glass_bottles': 'Boolean',
						'recycling:paper': 'Boolean',
						'recycling:scrap_metal': 'Boolean',
						religion: 'String',
						shop: 'String',
						sport: 'String',
						tourism: 'String',
						'tower:type': 'String',
						vending: 'String'
					},
					minzoom: 14,
					maxzoom: 14
				}
			],
			attribution: '<a href="https://www.openstreetmap.org/copyright/de">© OpenStreetMap</a>',
			tiles: ['https://tiles.datenhub.net/tiles/osm/{z}/{x}/{y}']
		}
	},
	layers: [
		{
			id: 'background',
			type: 'background',
			paint: { 'background-color': '#f9f9f9' }
		},
		{
			id: 'water-ocean',
			type: 'fill',
			paint: { 'fill-color': '#e1e2e2' },
			'source-layer': 'ocean',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-area',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'water']],
			paint: {
				'fill-color': '#d6d6d6',
				'fill-opacity': {
					stops: [
						[6, 0],
						[7, 1]
					]
				}
			},
			'source-layer': 'water_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-area-river',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'river']],
			paint: {
				'fill-color': '#d6d6d6',
				'fill-opacity': {
					stops: [
						[6, 0],
						[7, 1]
					]
				}
			},
			'source-layer': 'water_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-area-small',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'reservoir', 'basin', 'dock']],
			paint: {
				'fill-color': '#d6d6d6',
				'fill-opacity': {
					stops: [
						[6, 0],
						[7, 1]
					]
				}
			},
			'source-layer': 'water_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-dam-area',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'dam']],
			paint: {
				'fill-color': '#f5f5f5',
				'fill-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			'source-layer': 'dam_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-dam',
			type: 'line',
			filter: ['all', ['==', 'kind', 'dam']],
			paint: { 'line-color': '#d6d6d6' },
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'dam_lines',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-pier-area',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'pier', 'breakwater', 'groyne']],
			paint: {
				'fill-color': '#f5f5f5',
				'fill-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			'source-layer': 'pier_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-pier',
			type: 'line',
			filter: ['all', ['in', 'kind', 'pier', 'breakwater', 'groyne']],
			paint: { 'line-color': '#d6d6d6' },
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'pier_lines',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-glacier',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'glacier']],
			paint: { 'fill-color': '#ffffff' },
			'source-layer': 'water_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-commercial',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'commercial', 'retail']],
			paint: {
				'fill-color': 'rgba(231,231,231,0.251)',
				'fill-opacity': {
					stops: [
						[10, 0],
						[11, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-industrial',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'industrial', 'quarry', 'railway']],
			paint: {
				'fill-color': 'rgba(242,242,242,0.333)',
				'fill-opacity': {
					stops: [
						[10, 0],
						[11, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-residential',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'garages', 'residential']],
			paint: {
				'fill-color': 'rgba(231,231,231,0.200)',
				'fill-opacity': {
					stops: [
						[10, 0],
						[11, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-agriculture',
			type: 'fill',
			filter: [
				'all',
				[
					'in',
					'kind',
					'brownfield',
					'farmland',
					'farmyard',
					'greenfield',
					'greenhouse_horticulture',
					'orchard',
					'plant_nursery',
					'vineyard'
				]
			],
			paint: {
				'fill-color': '#e7e7e7',
				'fill-opacity': {
					stops: [
						[10, 0],
						[11, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-waste',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'landfill']],
			paint: {
				'fill-color': '#d5d5d5',
				'fill-opacity': {
					stops: [
						[10, 0],
						[11, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-park',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'park', 'village_green', 'recreation_ground']],
			paint: {
				'fill-color': '#d3d3d3',
				'fill-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-garden',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'allotments', 'garden']],
			paint: {
				'fill-color': '#d3d3d3',
				'fill-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-burial',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'cemetery', 'grave_yard']],
			paint: {
				'fill-color': '#dadada',
				'fill-opacity': {
					stops: [
						[13, 0],
						[14, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-leisure',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'miniature_golf', 'playground', 'golf_course']],
			paint: { 'fill-color': '#e9e9e9' },
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-rock',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'bare_rock', 'scree', 'shingle']],
			paint: { 'fill-color': '#e3e3e3' },
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-forest',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'forest']],
			paint: {
				'fill-color': '#8a8a8a',
				'fill-opacity': {
					stops: [
						[7, 0],
						[8, 0.1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-grass',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'grass', 'grassland', 'meadow', 'wet_meadow']],
			paint: {
				'fill-color': '#e0e0e0',
				'fill-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-vegetation',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'heath', 'scrub']],
			paint: {
				'fill-color': '#d3d3d3',
				'fill-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-sand',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'beach', 'sand']],
			paint: { 'fill-color': '#f9f9f9' },
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'land-wetland',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'bog', 'marsh', 'string_bog', 'swamp']],
			paint: { 'fill-color': '#dfdfdf' },
			'source-layer': 'land',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-river',
			type: 'line',
			filter: ['all', ['in', 'kind', 'river'], ['!=', 'tunnel', true], ['!=', 'bridge', true]],
			paint: {
				'line-color': '#d6d6d6',
				'line-width': {
					stops: [
						[9, 0],
						[10, 3],
						[15, 5],
						[17, 9],
						[18, 20],
						[20, 60]
					]
				}
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'water_lines',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-canal',
			type: 'line',
			filter: ['all', ['in', 'kind', 'canal'], ['!=', 'tunnel', true], ['!=', 'bridge', true]],
			paint: {
				'line-color': '#d6d6d6',
				'line-width': {
					stops: [
						[9, 0],
						[10, 2],
						[15, 4],
						[17, 8],
						[18, 17],
						[20, 50]
					]
				}
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'water_lines',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-stream',
			type: 'line',
			filter: ['all', ['in', 'kind', 'stream'], ['!=', 'tunnel', true], ['!=', 'bridge', true]],
			paint: {
				'line-color': '#d6d6d6',
				'line-width': {
					stops: [
						[13, 0],
						[14, 1],
						[15, 2],
						[17, 6],
						[18, 12],
						[20, 30]
					]
				}
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'water_lines',
			source: 'versatiles-shortbread'
		},
		{
			id: 'water-ditch',
			type: 'line',
			filter: ['all', ['in', 'kind', 'ditch'], ['!=', 'tunnel', true], ['!=', 'bridge', true]],
			paint: {
				'line-color': '#d6d6d6',
				'line-width': {
					stops: [
						[14, 0],
						[15, 1],
						[17, 4],
						[18, 8],
						[20, 20]
					]
				}
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'water_lines',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-dangerarea',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'danger_area']],
			paint: {
				'fill-outline-color': '#4c4c4c',
				'fill-color': '#4c4c4c',
				'fill-pattern': 'pattern-dark-warning-12',
				'fill-opacity': 0.3
			},
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-university',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'university']],
			paint: { 'fill-color': '#f1f1f1', 'fill-opacity': 0.1 },
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-college',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'college']],
			paint: { 'fill-color': '#f1f1f1', 'fill-opacity': 0.1 },
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-school',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'school']],
			paint: { 'fill-color': '#f1f1f1', 'fill-opacity': 0.1 },
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-hospital',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'hospital']],
			paint: { 'fill-color': '#949494', 'fill-opacity': 0.1 },
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-prison',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'prison']],
			paint: {
				'fill-color': '#f6f6f6',
				'fill-pattern': 'pattern-dark-striped-12',
				'fill-opacity': 0.1
			},
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-parking',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'parking']],
			paint: { 'fill-color': '#e9e9e9' },
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-bicycleparking',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'bicycle_parking']],
			paint: { 'fill-color': '#e9e9e9' },
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'site-construction',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'construction']],
			paint: {
				'fill-color': '#a9a9a9',
				'fill-pattern': 'pattern-dark-hatched-thin-12',
				'fill-opacity': 0.1
			},
			'source-layer': 'sites',
			source: 'versatiles-shortbread'
		},
		{
			id: 'airport-area',
			type: 'fill',
			filter: ['all', ['in', 'kind', 'runway', 'taxiway']],
			paint: { 'fill-color': '#ffffff', 'fill-opacity': 0.5 },
			'source-layer': 'street_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'airport-taxiway:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'taxiway']],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[13, 0],
						[14, 2],
						[15, 10],
						[16, 14],
						[18, 20],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'airport-runway:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'runway']],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[11, 0],
						[12, 6],
						[13, 9],
						[14, 16],
						[15, 24],
						[16, 40],
						[17, 100],
						[18, 160],
						[20, 300]
					]
				}
			},
			layout: { 'line-join': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'airport-taxiway',
			type: 'line',
			filter: ['all', ['==', 'kind', 'taxiway']],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[13, 0],
						[14, 1],
						[15, 8],
						[16, 12],
						[18, 18],
						[20, 36]
					]
				},
				'line-opacity': {
					stops: [
						[13, 0],
						[14, 1]
					]
				}
			},
			layout: { 'line-join': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'airport-runway',
			type: 'line',
			filter: ['all', ['==', 'kind', 'runway']],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[11, 0],
						[12, 5],
						[13, 8],
						[14, 14],
						[15, 22],
						[16, 38],
						[17, 98],
						[18, 158],
						[20, 298]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'building:outline',
			type: 'fill',
			filter: ['all'],
			paint: {
				'fill-color': '#dcdcdc',
				'fill-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'buildings',
			source: 'versatiles-shortbread'
		},
		{
			id: 'building',
			type: 'fill',
			filter: ['all'],
			paint: {
				'fill-translate': [-2, -2],
				'fill-color': '#ebebeb',
				'fill-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'buildings',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-pedestrian-zone',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['==', 'tunnel', true]],
			paint: {
				'fill-color': '#f7f7f7',
				'fill-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			'source-layer': 'street_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-footway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'footway'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d7d7d7'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-steps:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'steps'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d7d7d7'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-path:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'path'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d7d7d7'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-cycleway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'cycleway'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#dedede'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-track:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'track'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[14, 2],
						[16, 4],
						[18, 18],
						[19, 48],
						[20, 96]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-pedestrian:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-service:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'tunnel', true],
				['!=', 'service', 'driveway']
			],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[14, 2],
						[16, 4],
						[18, 18],
						[19, 48],
						[20, 96]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-livingstreet:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'living_street'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-residential:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'residential'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-unclassified:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'unclassified'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-tertiary-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-secondary-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-primary-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-trunk-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-motorway-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 12,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-tertiary:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#dedede',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-secondary:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[11, 2],
						[14, 5],
						[16, 8],
						[18, 30],
						[19, 68],
						[20, 138]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-primary:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[8, 0],
						[9, 1],
						[10, 4],
						[14, 6],
						[16, 12],
						[18, 36],
						[19, 74],
						[20, 144]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-trunk:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[7, 0],
						[8, 2],
						[10, 4],
						[14, 6],
						[16, 12],
						[18, 36],
						[19, 74],
						[20, 144]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-motorway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#c0c0c0',
				'line-dasharray': [1, 0.3],
				'line-width': {
					stops: [
						[5, 0],
						[6, 2],
						[10, 5],
						[14, 5],
						[16, 14],
						[18, 38],
						[19, 84],
						[20, 168]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-footway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'footway'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-dasharray': [1, 0.2],
				'line-color': '#eeeeee'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-steps',
			type: 'line',
			filter: ['all', ['in', 'kind', 'steps'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-dasharray': [1, 0.2],
				'line-color': '#eeeeee'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-path',
			type: 'line',
			filter: ['all', ['in', 'kind', 'path'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-dasharray': [1, 0.2],
				'line-color': '#eeeeee'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-way-cycleway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'cycleway'], ['==', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-dasharray': [1, 0.2],
				'line-color': '#f2f2f2'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-track',
			type: 'line',
			filter: ['all', ['==', 'kind', 'track'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[14, 1],
						[16, 3],
						[18, 16],
						[19, 44],
						[20, 88]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-pedestrian',
			type: 'line',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-service',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'tunnel', true],
				['!=', 'service', 'driveway']
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[14, 1],
						[16, 3],
						[18, 16],
						[19, 44],
						[20, 88]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-livingstreet',
			type: 'line',
			filter: ['all', ['==', 'kind', 'living_street'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-residential',
			type: 'line',
			filter: ['all', ['==', 'kind', 'residential'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-unclassified',
			type: 'line',
			filter: ['all', ['==', 'kind', 'unclassified'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-track-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'track'],
				['==', 'bicycle', 'designated'],
				['==', 'tunnel', true]
			],
			paint: { 'line-color': '#f7f7f7' },
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-pedestrian-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'pedestrian'],
				['==', 'bicycle', 'designated'],
				['==', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-service-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'bicycle', 'designated'],
				['==', 'tunnel', true],
				['!=', 'service', 'driveway']
			],
			paint: { 'line-color': '#f7f7f7' },
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-livingstreet-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'living_street'],
				['==', 'bicycle', 'designated'],
				['==', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-residential-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'residential'],
				['==', 'bicycle', 'designated'],
				['==', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-unclassified-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'unclassified'],
				['==', 'bicycle', 'designated'],
				['==', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-tertiary-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-secondary-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f5f5f5',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-primary-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f5f5f5',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-trunk-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f5f5f5',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-motorway-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['==', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#e2e2e2',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 12,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-tertiary',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-secondary',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f5f5f5',
				'line-width': {
					stops: [
						[11, 1],
						[14, 4],
						[16, 6],
						[18, 28],
						[19, 64],
						[20, 130]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-primary',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f5f5f5',
				'line-width': {
					stops: [
						[8, 0],
						[9, 2],
						[10, 3],
						[14, 5],
						[16, 10],
						[18, 34],
						[19, 70],
						[20, 140]
					]
				},
				'line-opacity': {
					stops: [
						[8, 0],
						[9, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-trunk',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#f5f5f5',
				'line-width': {
					stops: [
						[7, 0],
						[8, 1],
						[10, 3],
						[14, 5],
						[16, 10],
						[18, 34],
						[19, 70],
						[20, 140]
					]
				},
				'line-opacity': {
					stops: [
						[7, 0],
						[8, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-street-motorway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['!=', 'link', true], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#e2e2e2',
				'line-width': {
					stops: [
						[5, 0],
						[6, 1],
						[10, 4],
						[14, 4],
						[16, 12],
						[18, 36],
						[19, 80],
						[20, 160]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0],
						[6, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-monorail:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'monorail'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-funicular:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'funicular'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-tram:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tram'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-narrowgauge:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'narrow_gauge'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-subway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'subway'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b4b4b4',
				'line-width': {
					stops: [
						[11, 0],
						[12, 1],
						[15, 3],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 0.5]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-lightrail:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'light_rail'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 3],
						[16, 4],
						[18, 8],
						[19, 11],
						[20, 14]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 0.5]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-rail:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'rail'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 3],
						[16, 4],
						[18, 8],
						[19, 11],
						[20, 14]
					]
				},
				'line-opacity': {
					stops: [
						[8, 0],
						[9, 0.3]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-monorail',
			type: 'line',
			filter: ['all', ['in', 'kind', 'monorail'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-funicular',
			type: 'line',
			filter: ['all', ['in', 'kind', 'funicular'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-tram',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tram'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-narrowgauge',
			type: 'line',
			filter: ['all', ['in', 'kind', 'narrow_gauge'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-subway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'subway'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e3e3e3',
				'line-width': {
					stops: [
						[11, 0],
						[12, 1],
						[15, 2],
						[16, 2],
						[18, 5],
						[19, 6],
						[20, 8]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-lightrail',
			type: 'line',
			filter: ['all', ['in', 'kind', 'light_rail'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e8e8e8',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 2],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'tunnel-transport-rail',
			type: 'line',
			filter: ['all', ['in', 'kind', 'rail'], ['!has', 'service'], ['==', 'tunnel', true]],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e8e8e8',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 2],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 0.3]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-pedestrian-zone',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'fill-color': 'rgba(249,249,249,0.753)',
				'fill-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'street_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-footway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'footway'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d2d2d2'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-steps:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'steps'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d2d2d2'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-path:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'path'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d2d2d2'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-cycleway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'cycleway'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#dddddd'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-track:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'track'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[14, 2],
						[16, 4],
						[18, 18],
						[19, 48],
						[20, 96]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-pedestrian:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-service:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true],
				['!=', 'service', 'driveway']
			],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[14, 2],
						[16, 4],
						[18, 18],
						[19, 48],
						[20, 96]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-livingstreet:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'living_street'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-residential:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'residential'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-unclassified:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'unclassified'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-tertiary-link:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'tertiary'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-secondary-link:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'secondary'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-primary-link:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'primary'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-trunk-link:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'trunk'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-motorway-link:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'motorway'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 12,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-tertiary:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'tertiary'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#cdcdcd',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-secondary:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'secondary'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[11, 2],
						[14, 5],
						[16, 8],
						[18, 30],
						[19, 68],
						[20, 138]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-primary:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'primary'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[8, 0],
						[9, 1],
						[10, 4],
						[14, 6],
						[16, 12],
						[18, 36],
						[19, 74],
						[20, 144]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-trunk:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'trunk'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[7, 0],
						[8, 2],
						[10, 4],
						[14, 6],
						[16, 12],
						[18, 36],
						[19, 74],
						[20, 144]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-motorway:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'motorway'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[6, 0],
						[7, 1],
						[10, 5],
						[14, 5],
						[16, 14],
						[18, 38],
						[19, 84],
						[20, 168]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-footway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'footway'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f9f9f9'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-steps',
			type: 'line',
			filter: ['all', ['in', 'kind', 'steps'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f9f9f9'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-path',
			type: 'line',
			filter: ['all', ['in', 'kind', 'path'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f9f9f9'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'way-cycleway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'cycleway'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f7f7f7'
			},
			layout: { 'line-cap': 'round' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-track',
			type: 'line',
			filter: ['all', ['==', 'kind', 'track'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[14, 1],
						[16, 3],
						[18, 16],
						[19, 44],
						[20, 88]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-pedestrian',
			type: 'line',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['!=', 'bridge', true], ['!=', 'tunnel', true]],
			paint: {
				'line-color': '#f2f2f2',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[13, 0],
						[14, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-service',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true],
				['!=', 'service', 'driveway']
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[14, 1],
						[16, 3],
						[18, 16],
						[19, 44],
						[20, 88]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-livingstreet',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'living_street'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-residential',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'residential'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-unclassified',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'unclassified'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-track-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'track'],
				['==', 'bicycle', 'designated'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: { 'line-color': '#ffffff' },
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-pedestrian-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'pedestrian'],
				['==', 'bicycle', 'designated'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-service-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'bicycle', 'designated'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true],
				['!=', 'service', 'driveway']
			],
			paint: { 'line-color': '#ffffff' },
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-livingstreet-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'living_street'],
				['==', 'bicycle', 'designated'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-residential-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'residential'],
				['==', 'bicycle', 'designated'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-unclassified-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'unclassified'],
				['==', 'bicycle', 'designated'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-tertiary-link',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'tertiary'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-secondary-link',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'secondary'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-primary-link',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'primary'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-trunk-link',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'trunk'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-motorway-link',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'motorway'],
				['==', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#d3d3d3',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			minzoom: 12,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-tertiary',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'tertiary'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-secondary',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'secondary'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[11, 1],
						[14, 4],
						[16, 6],
						[18, 28],
						[19, 64],
						[20, 130]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-primary',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'primary'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[8, 0],
						[9, 2],
						[10, 3],
						[14, 5],
						[16, 10],
						[18, 34],
						[19, 70],
						[20, 140]
					]
				},
				'line-opacity': {
					stops: [
						[8, 0],
						[9, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-trunk',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'trunk'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[7, 0],
						[8, 1],
						[10, 3],
						[14, 5],
						[16, 10],
						[18, 34],
						[19, 70],
						[20, 140]
					]
				},
				'line-opacity': {
					stops: [
						[7, 0],
						[8, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'street-motorway',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'motorway'],
				['!=', 'link', true],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#e6e6e6',
				'line-width': {
					stops: [
						[5, 0],
						[6, 1],
						[10, 3],
						[14, 4],
						[16, 12],
						[18, 36],
						[19, 80],
						[20, 160]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0],
						[6, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'round' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-monorail:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'monorail'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-funicular:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'funicular'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-tram:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'tram'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-narrowgauge:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'narrow_gauge'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-subway:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'subway'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b4b4b4',
				'line-width': {
					stops: [
						[11, 0],
						[12, 1],
						[15, 3],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-lightrail:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'light_rail'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 3],
						[16, 4],
						[18, 8],
						[19, 11],
						[20, 14]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-rail:outline',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'rail'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 3],
						[16, 4],
						[18, 8],
						[19, 11],
						[20, 14]
					]
				},
				'line-opacity': {
					stops: [
						[8, 0],
						[9, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-monorail',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'monorail'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-funicular',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'funicular'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-tram',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'tram'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-narrowgauge',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'narrow_gauge'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-subway',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'subway'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e3e3e3',
				'line-width': {
					stops: [
						[11, 0],
						[12, 1],
						[15, 2],
						[16, 2],
						[18, 5],
						[19, 6],
						[20, 8]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-lightrail',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'light_rail'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e8e8e8',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 2],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-rail',
			type: 'line',
			filter: [
				'all',
				['in', 'kind', 'rail'],
				['!has', 'service'],
				['!=', 'bridge', true],
				['!=', 'tunnel', true]
			],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e8e8e8',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 2],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'transport-ferry',
			type: 'line',
			filter: ['all'],
			paint: {
				'line-dasharray': [1, 1],
				'line-color': '#bfbfbf',
				'line-width': {
					stops: [
						[10, 1],
						[13, 2],
						[14, 3],
						[16, 4],
						[17, 6]
					]
				},
				'line-opacity': {
					stops: [
						[10, 0],
						[11, 1]
					]
				}
			},
			minzoom: 10,
			'source-layer': 'ferries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge',
			type: 'fill',
			filter: ['all'],
			paint: {
				'fill-antialias': true,
				'fill-color': '#f0f0f0',
				'fill-opacity': 0.8
			},
			'source-layer': 'bridges',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-pedestrian-zone',
			type: 'fill',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['==', 'bridge', true]],
			paint: {
				'fill-color': '#ffffff',
				'fill-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			'source-layer': 'street_polygons',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-footway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'footway'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d2d2d2'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-steps:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'steps'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d2d2d2'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-path:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'path'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#d2d2d2'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-cycleway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'cycleway'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[19, 12],
						[20, 22]
					]
				},
				'line-color': '#dddddd'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-track:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'track'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[14, 2],
						[16, 4],
						[18, 18],
						[19, 48],
						[20, 96]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-pedestrian:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-service:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'bridge', true],
				['!=', 'service', 'driveway']
			],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[14, 2],
						[16, 4],
						[18, 18],
						[19, 48],
						[20, 96]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-livingstreet:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'living_street'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-residential:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'residential'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-unclassified:outline',
			type: 'line',
			filter: ['all', ['==', 'kind', 'unclassified'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-tertiary-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-secondary-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-primary-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-trunk-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-motorway-link:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 7],
						[18, 14],
						[20, 40]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 12,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-tertiary:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d9d9d9',
				'line-width': {
					stops: [
						[12, 2],
						[14, 3],
						[16, 6],
						[18, 26],
						[19, 64],
						[20, 128]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-secondary:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[11, 2],
						[14, 5],
						[16, 8],
						[18, 30],
						[19, 68],
						[20, 138]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-primary:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[8, 0],
						[9, 1],
						[10, 4],
						[14, 6],
						[16, 12],
						[18, 36],
						[19, 74],
						[20, 144]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-trunk:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[7, 0],
						[8, 2],
						[10, 4],
						[14, 6],
						[16, 12],
						[18, 36],
						[19, 74],
						[20, 144]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-motorway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b8b8b8',
				'line-width': {
					stops: [
						[5, 0],
						[6, 2],
						[10, 5],
						[14, 5],
						[16, 14],
						[18, 38],
						[19, 84],
						[20, 168]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-footway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'footway'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f9f9f9'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-steps',
			type: 'line',
			filter: ['all', ['in', 'kind', 'steps'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f9f9f9'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-path',
			type: 'line',
			filter: ['all', ['in', 'kind', 'path'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f9f9f9'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-way-cycleway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'cycleway'], ['==', 'bridge', true]],
			paint: {
				'line-width': {
					stops: [
						[15, 0],
						[16, 4],
						[18, 6],
						[19, 10],
						[20, 20]
					]
				},
				'line-color': '#f7f7f7'
			},
			layout: { 'line-cap': 'butt' },
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-track',
			type: 'line',
			filter: ['all', ['==', 'kind', 'track'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[14, 1],
						[16, 3],
						[18, 16],
						[19, 44],
						[20, 88]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-pedestrian',
			type: 'line',
			filter: ['all', ['==', 'kind', 'pedestrian'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-service',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'bridge', true],
				['!=', 'service', 'driveway']
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[14, 1],
						[16, 3],
						[18, 16],
						[19, 44],
						[20, 88]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-livingstreet',
			type: 'line',
			filter: ['all', ['==', 'kind', 'living_street'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-residential',
			type: 'line',
			filter: ['all', ['==', 'kind', 'residential'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-unclassified',
			type: 'line',
			filter: ['all', ['==', 'kind', 'unclassified'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-track-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'track'],
				['==', 'bicycle', 'designated'],
				['==', 'bridge', true]
			],
			paint: { 'line-color': '#ffffff' },
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-pedestrian-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'pedestrian'],
				['==', 'bicycle', 'designated'],
				['==', 'bridge', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-service-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'service'],
				['==', 'bicycle', 'designated'],
				['==', 'bridge', true],
				['!=', 'service', 'driveway']
			],
			paint: { 'line-color': '#ffffff' },
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-livingstreet-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'living_street'],
				['==', 'bicycle', 'designated'],
				['==', 'bridge', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-residential-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'residential'],
				['==', 'bicycle', 'designated'],
				['==', 'bridge', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-unclassified-bicycle',
			type: 'line',
			filter: [
				'all',
				['==', 'kind', 'unclassified'],
				['==', 'bicycle', 'designated'],
				['==', 'bridge', true]
			],
			paint: {
				'line-color': '#f7f7f7',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-tertiary-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-secondary-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-primary-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-trunk-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-motorway-link',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['==', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d3d3d3',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 12],
						[20, 38]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			minzoom: 12,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-tertiary',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tertiary'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[12, 1],
						[14, 2],
						[16, 5],
						[18, 24],
						[19, 60],
						[20, 120]
					]
				},
				'line-opacity': {
					stops: [
						[12, 0],
						[13, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-secondary',
			type: 'line',
			filter: ['all', ['in', 'kind', 'secondary'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[11, 1],
						[14, 4],
						[16, 6],
						[18, 28],
						[19, 64],
						[20, 130]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-primary',
			type: 'line',
			filter: ['all', ['in', 'kind', 'primary'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[8, 0],
						[9, 2],
						[10, 3],
						[14, 5],
						[16, 10],
						[18, 34],
						[19, 70],
						[20, 140]
					]
				},
				'line-opacity': {
					stops: [
						[8, 0],
						[9, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-trunk',
			type: 'line',
			filter: ['all', ['in', 'kind', 'trunk'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#ebebeb',
				'line-width': {
					stops: [
						[7, 0],
						[8, 1],
						[10, 3],
						[14, 5],
						[16, 10],
						[18, 34],
						[19, 70],
						[20, 140]
					]
				},
				'line-opacity': {
					stops: [
						[7, 0],
						[8, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-street-motorway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'motorway'], ['!=', 'link', true], ['==', 'bridge', true]],
			paint: {
				'line-color': '#d3d3d3',
				'line-width': {
					stops: [
						[5, 0],
						[6, 1],
						[10, 4],
						[14, 4],
						[16, 12],
						[18, 36],
						[19, 80],
						[20, 160]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0],
						[6, 1]
					]
				}
			},
			layout: { 'line-join': 'round', 'line-cap': 'butt' },
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-monorail:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'monorail'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-funicular:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'funicular'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-tram:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tram'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-narrowgauge:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'narrow_gauge'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [0.1, 0.5],
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[15, 0],
						[16, 5],
						[18, 7],
						[20, 20]
					]
				}
			},
			minzoom: 15,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-subway:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'subway'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b4b4b4',
				'line-width': {
					stops: [
						[11, 0],
						[12, 1],
						[15, 3],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-lightrail:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'light_rail'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 3],
						[16, 4],
						[18, 8],
						[19, 11],
						[20, 14]
					]
				},
				'line-opacity': {
					stops: [
						[11, 0],
						[12, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-rail:outline',
			type: 'line',
			filter: ['all', ['in', 'kind', 'rail'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 3],
						[16, 4],
						[18, 8],
						[19, 11],
						[20, 14]
					]
				},
				'line-opacity': {
					stops: [
						[8, 0],
						[9, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-monorail',
			type: 'line',
			filter: ['all', ['in', 'kind', 'monorail'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-funicular',
			type: 'line',
			filter: ['all', ['in', 'kind', 'funicular'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-tram',
			type: 'line',
			filter: ['all', ['in', 'kind', 'tram'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-narrowgauge',
			type: 'line',
			filter: ['all', ['in', 'kind', 'narrow_gauge'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-color': '#b9b9b9',
				'line-width': {
					stops: [
						[13, 0],
						[16, 1],
						[17, 2],
						[18, 3],
						[20, 5]
					]
				}
			},
			minzoom: 13,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-subway',
			type: 'line',
			filter: ['all', ['in', 'kind', 'subway'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e3e3e3',
				'line-width': {
					stops: [
						[11, 0],
						[12, 1],
						[15, 2],
						[16, 2],
						[18, 5],
						[19, 6],
						[20, 8]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-lightrail',
			type: 'line',
			filter: ['all', ['in', 'kind', 'light_rail'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e8e8e8',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 2],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'bridge-transport-rail',
			type: 'line',
			filter: ['all', ['in', 'kind', 'rail'], ['!has', 'service'], ['==', 'bridge', true]],
			paint: {
				'line-dasharray': [2, 2],
				'line-color': '#e8e8e8',
				'line-width': {
					stops: [
						[8, 1],
						[13, 1],
						[15, 2],
						[16, 3],
						[18, 6],
						[19, 8],
						[20, 10]
					]
				},
				'line-opacity': {
					stops: [
						[14, 0],
						[15, 1]
					]
				}
			},
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-amenity',
			type: 'symbol',
			filter: ['all', ['!=', 'amenity', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{amenity}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-leisure',
			type: 'symbol',
			filter: ['all', ['!=', 'leisure', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{leisure}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-tourism',
			type: 'symbol',
			filter: ['all', ['!=', 'tourism', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{tourism}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-shop',
			type: 'symbol',
			filter: ['all', ['!=', 'shop', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{shop}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-man_made',
			type: 'symbol',
			filter: ['all', ['!=', 'man_made', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{man_made}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-historic',
			type: 'symbol',
			filter: ['all', ['!=', 'historic', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{historic}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-emergency',
			type: 'symbol',
			filter: ['all', ['!=', 'emergency', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{emergency}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-highway',
			type: 'symbol',
			filter: ['all', ['!=', 'highway', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular']
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'poi-office',
			type: 'symbol',
			filter: ['all', ['!=', 'office', '']],
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.4]
					]
				}
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[19, 0.5],
						[20, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-optional': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-{office}-22'
			},
			minzoom: 16,
			'source-layer': 'pois',
			source: 'versatiles-shortbread'
		},
		{
			id: 'boundary-country:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'admin_level', 2],
				['!=', 'maritime', true],
				['!=', 'disputed', true],
				['!=', 'coastline', true]
			],
			paint: {
				'line-blur': 1,
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[2, 0],
						[3, 2],
						[10, 8]
					]
				},
				'line-opacity': 0.75
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'boundaries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'boundary-country-disputed:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'admin_level', 2],
				['==', 'disputed', true],
				['!=', 'maritime', true],
				['!=', 'coastline', true]
			],
			paint: {
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[2, 0],
						[3, 2],
						[10, 8]
					]
				},
				'line-opacity': 0.75
			},
			'source-layer': 'boundaries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'boundary-state:outline',
			type: 'line',
			filter: [
				'all',
				['==', 'admin_level', 4],
				['!=', 'maritime', true],
				['!=', 'disputed', true],
				['!=', 'coastline', true]
			],
			paint: {
				'line-blur': 1,
				'line-color': '#ffffff',
				'line-width': {
					stops: [
						[7, 0],
						[8, 2],
						[10, 4]
					]
				},
				'line-opacity': 0.75
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'boundaries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'boundary-country',
			type: 'line',
			filter: [
				'all',
				['==', 'admin_level', 2],
				['!=', 'maritime', true],
				['!=', 'disputed', true],
				['!=', 'coastline', true]
			],
			paint: {
				'line-color': {
					stops: [
						[1, '#9a9a9a'],
						[10, '#efefef']
					]
				},
				'line-width': {
					stops: [
						[2, 0],
						[3, 0.5],
						[10, 4]
					]
				}
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'boundaries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'boundary-country-disputed',
			type: 'line',
			filter: [
				'all',
				['==', 'admin_level', 2],
				['==', 'disputed', true],
				['!=', 'maritime', true],
				['!=', 'coastline', true]
			],
			paint: {
				'line-width': {
					stops: [
						[2, 0],
						[3, 1],
						[10, 4]
					]
				},
				'line-dasharray': [2, 1],
				'line-color': '#bfbfbf'
			},
			layout: { 'line-cap': 'square' },
			'source-layer': 'boundaries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'boundary-state',
			type: 'line',
			filter: [
				'all',
				['==', 'admin_level', 4],
				['!=', 'maritime', true],
				['!=', 'disputed', true],
				['!=', 'coastline', true]
			],
			paint: {
				'line-color': '#000000',
				'line-opacity': 0.4,
				'line-width': {
					stops: [
						[7, 0],
						[8, 1],
						[10, 2]
					]
				}
			},
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			'source-layer': 'boundaries',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-address-housenumber',
			type: 'symbol',
			filter: ['all', ['has', 'housenumber']],
			layout: {
				'text-field': '{housenumber}',
				'symbol-placement': 'point',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[17, 8],
						[19, 10]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': '#f6f6f6',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#aaaaaa'
			},
			minzoom: 17,
			'source-layer': 'addresses',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-motorway-shield',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'motorway']],
			layout: {
				'text-field': '{ref}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[14, 10],
						[18, 12],
						[20, 16]
					]
				},
				'text-font': ['noto_sans_bold']
			},
			paint: {
				'text-halo-color': '#d3d3d3',
				'text-halo-width': 0.1,
				'text-halo-blur': 1,
				'text-color': '#ffffff'
			},
			minzoom: 14,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-pedestrian',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'pedestrian']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-livingstreet',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'living_street']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-residential',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'residential']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-unclassified',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'unclassified']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-tertiary',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'tertiary']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-secondary',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'secondary']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-primary',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'primary']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-street-trunk',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'trunk']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'line',
				'text-anchor': 'center',
				'text-size': {
					stops: [
						[12, 10],
						[15, 13]
					]
				},
				'text-font': ['noto_sans_regular']
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#353535'
			},
			minzoom: 12,
			'source-layer': 'street_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-neighbourhood',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'neighbourhood']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-transform': 'uppercase',
				'text-size': { stops: [[14, 12]] }
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#3c3c3c'
			},
			minzoom: 14,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-quarter',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'quarter']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-transform': 'uppercase',
				'text-size': { stops: [[13, 13]] }
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#393939'
			},
			minzoom: 13,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-suburb',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'suburb']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-transform': 'uppercase',
				'text-size': {
					stops: [
						[11, 11],
						[13, 14]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#363636'
			},
			minzoom: 11,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-hamlet',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'hamlet']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-size': {
					stops: [
						[10, 11],
						[12, 14]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#303030'
			},
			minzoom: 13,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-village',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'village']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-size': {
					stops: [
						[9, 11],
						[12, 14]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#303030'
			},
			minzoom: 11,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-town',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'town']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-size': {
					stops: [
						[8, 11],
						[12, 14]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#303030'
			},
			minzoom: 9,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-boundary-state',
			type: 'symbol',
			filter: ['all', ['in', 'admin_level', 4, '4']],
			layout: {
				'text-field': '{name}',
				'text-transform': 'uppercase',
				'text-anchor': 'bottom',
				'text-font': ['noto_sans_bold'],
				'text-size': {
					stops: [
						[5, 8],
						[8, 12]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#383838'
			},
			minzoom: 5,
			'source-layer': 'boundary_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-city',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'city']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-size': {
					stops: [
						[7, 11],
						[10, 14]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.900)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#303030'
			},
			minzoom: 7,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-statecapital',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'state_capital']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-size': {
					stops: [
						[6, 11],
						[10, 15]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#303030'
			},
			minzoom: 6,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		{
			id: 'label-place-capital',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'capital']],
			layout: {
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'text-size': {
					stops: [
						[5, 12],
						[10, 16]
					]
				}
			},
			paint: {
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#303030'
			},
			minzoom: 5,
			'source-layer': 'place_labels',
			source: 'versatiles-shortbread'
		},
		// {
		//   id: "label-boundary-country-small:en",
		//   type: "symbol",
		//   filter: [
		//     "all",
		//     ["in", "admin_level", 2, "2"],
		//     ["<=", "way_area", 10000000],
		//   ],
		//   layout: {
		//     "text-field": "{name_en}",
		//     "text-transform": "uppercase",
		//     "text-anchor": "top",
		//     "text-offset": [0, 0.2],
		//     "text-padding": 0,
		//     "text-optional": true,
		//     "text-font": ["noto_sans_regular"],
		//     "text-size": {
		//       stops: [
		//         [4, 8],
		//         [5, 11],
		//       ],
		//     },
		//   },
		//   paint: {
		//     "text-halo-color": "rgba(255,255,255,0.800)",
		//     "text-halo-width": 2,
		//     "text-halo-blur": 1,
		//     "text-color": "#353535",
		//   },
		//   minzoom: 4,
		//   "source-layer": "boundary_labels",
		//   source: "versatiles-shortbread",
		// },
		// {
		//   id: "label-boundary-country-medium:en",
		//   type: "symbol",
		//   filter: [
		//     "all",
		//     ["in", "admin_level", 2, "2"],
		//     ["<", "way_area", 90000000],
		//     [">", "way_area", 10000000],
		//   ],
		//   layout: {
		//     "text-field": "{name_en}",
		//     "text-transform": "uppercase",
		//     "text-anchor": "top",
		//     "text-offset": [0, 0.2],
		//     "text-padding": 0,
		//     "text-optional": true,
		//     "text-font": ["noto_sans_regular"],
		//     "text-size": {
		//       stops: [
		//         [3, 8],
		//         [5, 12],
		//       ],
		//     },
		//   },
		//   paint: {
		//     "text-halo-color": "rgba(255,255,255,0.800)",
		//     "text-halo-width": 2,
		//     "text-halo-blur": 1,
		//     "text-color": "#353535",
		//   },
		//   minzoom: 3,
		//   "source-layer": "boundary_labels",
		//   source: "versatiles-shortbread",
		// },
		// {
		//   "id": "label-boundary-country-large:en",
		//   "type": "symbol",
		//   "filter": [
		//     "all",
		//     ["in", "admin_level", 2, "2"],
		//     [">=", "way_area", 90000000]
		//   ],
		//   "layout": {
		//     "text-field": "{name_en}",
		//     "text-transform": "uppercase",
		//     "text-anchor": "top",
		//     "text-offset": [0, 0.2],
		//     "text-padding": 0,
		//     "text-optional": true,
		//     "text-font": ["noto_sans_regular"],
		//     "text-size": {
		//       "stops": [
		//         [2, 8],
		//         [5, 13]
		//       ]
		//     }
		//   },
		//   "paint": {
		//     "text-halo-color": "rgba(255,255,255,0.800)",
		//     "text-halo-width": 2,
		//     "text-halo-blur": 1,
		//     "text-color": "#353535"
		//   },
		//   "minzoom": 2,
		//   "source-layer": "boundary_labels",
		//   "source": "versatiles-shortbread"
		// },
		// {
		//   id: "label-boundary-country-small",
		//   type: "symbol",
		//   filter: [
		//     "all",
		//     ["in", "admin_level", 2, "2"],
		//     ["<=", "way_area", 10000000],
		//   ],
		//   layout: {
		//     "text-field": "{name}",
		//     "text-transform": "uppercase",
		//     "text-anchor": "bottom",
		//     "text-font": ["noto_sans_bold"],
		//     "text-size": {
		//       stops: [
		//         [4, 11],
		//         [5, 14],
		//       ],
		//     },
		//   },
		//   paint: {
		//     "text-halo-color": "rgba(255,255,255,0.800)",
		//     "text-halo-width": 2,
		//     "text-halo-blur": 1,
		//     "text-color": "#353535",
		//   },
		//   minzoom: 4,
		//   "source-layer": "boundary_labels",
		//   source: "versatiles-shortbread",
		// },
		// {
		//   id: "label-boundary-country-medium",
		//   type: "symbol",
		//   filter: [
		//     "all",
		//     ["in", "admin_level", 2, "2"],
		//     ["<", "way_area", 90000000],
		//     [">", "way_area", 10000000],
		//   ],
		//   layout: {
		//     "text-field": "{name}",
		//     "text-transform": "uppercase",
		//     "text-anchor": "bottom",
		//     "text-font": ["noto_sans_bold"],
		//     "text-size": {
		//       stops: [
		//         [3, 11],
		//         [5, 15],
		//       ],
		//     },
		//   },
		//   paint: {
		//     "text-halo-color": "rgba(255,255,255,0.800)",
		//     "text-halo-width": 2,
		//     "text-halo-blur": 1,
		//     "text-color": "#353535",
		//   },
		//   minzoom: 3,
		//   "source-layer": "boundary_labels",
		//   source: "versatiles-shortbread",
		// },
		// {
		//   id: "label-boundary-country-large",
		//   type: "symbol",
		//   filter: [
		//     "all",
		//     ["in", "admin_level", 2, "2"],
		//     [">=", "way_area", 90000000],
		//   ],
		//   layout: {
		//     "text-field": "{name}",
		//     "text-transform": "uppercase",
		//     "text-anchor": "bottom",
		//     "text-font": ["noto_sans_bold"],
		//     "text-size": {
		//       stops: [
		//         [2, 11],
		//         [5, 16],
		//       ],
		//     },
		//   },
		//   paint: {
		//     "text-halo-color": "rgba(255,255,255,0.800)",
		//     "text-halo-width": 2,
		//     "text-halo-blur": 1,
		//     "text-color": "#353535",
		//   },
		//   minzoom: 2,
		//   "source-layer": "boundary_labels",
		//   source: "versatiles-shortbread",
		// },
		{
			id: 'marking-oneway',
			type: 'symbol',
			filter: [
				'all',
				['==', 'oneway', true],
				[
					'in',
					'kind',
					'trunk',
					'primary',
					'secondary',
					'tertiary',
					'unclassified',
					'residential',
					'living_street'
				]
			],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 175,
				'icon-rotate': 90,
				'icon-rotation-alignment': 'map',
				'icon-padding': 5,
				'symbol-avoid-edges': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'marking-dark-arrow-15'
			},
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.7]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.7]
					]
				}
			},
			minzoom: 16,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'marking-oneway-reverse',
			type: 'symbol',
			filter: [
				'all',
				['==', 'oneway_reverse', true],
				[
					'in',
					'kind',
					'trunk',
					'primary',
					'secondary',
					'tertiary',
					'unclassified',
					'residential',
					'living_street'
				]
			],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 75,
				'icon-rotate': -90,
				'icon-rotation-alignment': 'map',
				'icon-padding': 5,
				'symbol-avoid-edges': true,
				'text-font': ['noto_sans_regular'],
				'icon-image': 'marking-dark-arrow-15'
			},
			paint: {
				'icon-opacity': {
					stops: [
						[16, 0],
						[17, 0.7]
					]
				},
				'text-opacity': {
					stops: [
						[16, 0],
						[17, 0.7]
					]
				}
			},
			minzoom: 16,
			'source-layer': 'streets',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-bus',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'bus_stop']],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[16, 0.5],
						[18, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-bus-22'
			},
			minzoom: 16,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-tram',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'tram_stop']],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[15, 0.5],
						[17, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'transport-dark-tram-22'
			},
			minzoom: 15,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-subway',
			type: 'symbol',
			filter: ['all', ['in', 'kind', 'station', 'halt'], ['==', 'station', 'subway']],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[14, 0.5],
						[16, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-rail-metro-22'
			},
			minzoom: 14,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-lightrail',
			type: 'symbol',
			filter: ['all', ['in', 'kind', 'station', 'halt'], ['==', 'station', 'light_rail']],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[14, 0.5],
						[16, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-rail-light-22'
			},
			minzoom: 14,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-station',
			type: 'symbol',
			filter: [
				'all',
				['in', 'kind', 'station', 'halt'],
				['!in', 'station', 'light_rail', 'subway']
			],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[13, 0.5],
						[15, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-rail-22'
			},
			minzoom: 13,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-airfield',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'aerodrome'], ['!has', 'iata']],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[13, 0.5],
						[15, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-airfield-22'
			},
			minzoom: 13,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		},
		{
			id: 'symbol-transit-airport',
			type: 'symbol',
			filter: ['all', ['==', 'kind', 'aerodrome'], ['has', 'iata']],
			paint: {
				'icon-opacity': 0.7,
				'text-halo-color': 'rgba(255,255,255,0.800)',
				'text-halo-width': 2,
				'text-halo-blur': 1,
				'text-color': '#646464'
			},
			layout: {
				'icon-size': {
					stops: [
						[12, 0.5],
						[14, 1]
					]
				},
				'symbol-placement': 'point',
				'icon-keep-upright': true,
				'icon-anchor': 'bottom',
				'text-anchor': 'top',
				'text-size': 10,
				'text-field': '{name}',
				'text-font': ['noto_sans_regular'],
				'icon-image': 'icon-dark-airport-22'
			},
			minzoom: 12,
			'source-layer': 'public_transport',
			source: 'versatiles-shortbread'
		}
	]
};

export default style;
