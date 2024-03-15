.PHONY: all

all: ./output ./tmp ./tmp/ne_50m_admin_0_countries.shp ./tmp/eez_12nm_v4.shp ./tmp/eez_v12.shp ./tmp/australia_12nm_exterior.shp ./tmp/usa_12nm_exterior.geojson ./tmp/indonesia_land.shp ./tmp/papua_land.shp maps

maps: ./output/rarotonga-map.svg ./output/tlatelolco-map.svg ./output/bangkok-map.svg ./output/semipalatinsk-detail.svg ./output/semipalatinsk-overview.svg ./output/world-map.svg

./output:
	mkdir output

./tmp/ne_50m_admin_0_countries/:
	unzip -q -o -d ./tmp/ne_50m_admin_0_countries.zip

./tmp/World_12NM_v4_20231025/:
	unzip -q -o -d ./tmp/World_12NM_v4_20231025.zip

./tmp/World_EEZ_v12_20231025:
	unzip -q -o -d ./tmp/World_EEZ_v12_20231025.zip

./tmp:
	mkdir tmp

treaty-members:
	python parse_treaties.py

./tmp/usa_12nm_exterior.shp:
	mapshaper \
	-i "./tmp/World_12NM_v4_20231025/eez_12nm_v4.shp" \
	-filter 'GEONAME === "United States 12 NM"' \
	-drop holes \
	-clean \
	-o $@

./tmp/australia_12nm_exterior.shp:
	mapshaper \
	-i "./tmp/World_12NM_v4_20231025/eez_12nm_v4.shp" \
	-filter "GEONAME === 'Australian 12 NM'" \
	-drop holes \
	-erase bbox="142.0011,-9.5488,142.9038,-9.1336" \
	-filter-islands remove-empty min-area=100000km2 \
	-clean \
	-o $@

./tmp/indonesia_land.shp:
	mapshaper \
	-i "./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp" \
	-filter "SOV_A3 === 'IDN'" \
	-drop holes \
	-clean \
	-o $@

./tmp/papua_land.shp:
	mapshaper \
	-i "./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp" \
	-filter "SOV_A3 === 'PNG'" \
	-drop holes \
	-clean \
	-o $@

color_ratified=\#055fb5
color_signed=\#5c93c7
color_zone=\#aecde5
color_water=\#f9f9f9
label_size=15
label_stroke=3
label_font='Atlas Grotesk, sans-serif'

./output/rarotonga-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/rarotonga-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.3 \
	-clean target=countries \
	-join source=countries ./data/rarotonga_members.csv keys=ISO_A3_EH,code target=countries \
	-colorizer name=calcFill colors='${color_ratified}' categories='ratified' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width="1"  where="treaty_status === 'ratified'" target=countries \
	-snap target=extent \
	-dissolve2 target=extent \
	-style fill=${color_zone} stroke="black" target=extent \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="treaty_status === 'ratified'" target="country_labels" \
	-style label-text=ADMIN stroke="${color_water}" stroke-width=${label_stroke} font-size=${label_size} font-family="${label_font}" fill="black" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=${color_water} \
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6 \
	-proj +proj=natearth +lon_0=0 target=* \
	-o ./output/rarotonga-overview.svg format=svg target=polygon,extent,countries,graticule margin=20 \
	-proj +proj=merc +lon_0=180 target=* \
	-o ./output/rarotonga-detail.svg format=svg target=polygon,extent,countries,country_labels,graticule,scalebar fit-extent=extent margin=20 \


./output/semipalatinsk-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/semipalatinsk-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=.7 target=countries \
	-clean target=countries \
	-join source=countries ./data/semipalatinsk_members.csv keys=ISO_A3_EH,code target=countries \
	-colorizer name=calcFill colors='${color_ratified}' categories='ratification' nodata="white" \
	-filter target="countries" where="treaty_status==='ratification'" + name="members" \
	-innerlines target="members" + name="inner_lines" \
	-style target="inner_lines" stroke="black" stroke-width=1 \
	-style target="extent" stroke="black" stroke-width=1 \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="none"  where="treaty_status === 'ratification'" target=countries \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="treaty_status === 'ratification' || ['China','Russia','Mongolia', 'India','Iran','Afghanistan','Pakistan','Turkey','Armenia', 'Saudi Arabia', 'Egypt'].includes(ADMIN)" target="country_labels" \
	-style label-text=ADMIN stroke=white stroke-width=${label_stroke} fill="black" font-size=${label_size} css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=${color_water} \
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6 \
	-proj +proj=natearth target=* \
	-o ./output/semipalatinsk-detail.svg format=svg target=polygon,countries,inner_lines,extent,country_labels,scalebar fit-extent=extent margin=170 \
	-o ./output/semipalatinsk-overview.svg format=svg target=polygon,countries,inner_lines,extent margin=20 \


./output/tlatelolco-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/tlatelolco-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.2 target=countries \
	-clean target=countries \
	-join source=countries ./data/tlatelolco_members.csv keys=ISO_A3_EH,code target=countries \
	-colorizer name=calcFill colors='${color_ratified}' categories='ratified' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width="1"  where="treaty_status === 'ratified'" target=countries \
	-snap target=extent \
	-dissolve target=extent \
	-style fill=${color_zone} stroke="black" target=extent \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="['Brazil', 'Argentina', 'Mexico'].includes(ADMIN)" target="country_labels" \
	-style label-text=ADMIN stroke="#fafafa" stroke-width=${label_stroke} fill="black" font-family="${label_font}" font-size=${label_size} css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6 \
	-proj +proj=merc target=* \
	-o ./output/tlatelolco-detail.svg format=svg target=polygon,extent,countries,country_labels,graticule,scalebar fit-extent=extent margin=20 \
	-proj +proj=natearth target=* \
	-o ./output/tlatelolco-overview.svg format=svg target=polygon,extent,countries,graticule margin=20

./output/bangkok-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/bangkok-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.5 \
	-clean target=countries \
	-filter "true" target='extent' + name="extent_outline" \
	-join source=countries ./data/bangkok_members.csv keys=SOV_A3,code target=countries \
	-colorizer name=calcFill colors='${color_ratified}' categories='ratified' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width="1"  where="treaty_status === 'ratified'" target=countries \
	-style fill=${color_zone} target=extent \
	-style stroke=black stroke-width=1 target=extent_outline \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="treaty_status === 'ratified'" target="country_labels" \
	-style label-text=NAME stroke=white stroke-width=4 font-family="${labl_font}" fill="black" font-size=${label_size} css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="top-right" margin=60 label-position="top" style="b" label="1000 km" tic-length=6 \
	-proj +proj=merc target=* \
	-o ./output/bangkok-detail.svg format=svg target=polygon,extent,countries,extent_outline,country_labels,scalebar fit-extent=extent margin=80 \
	-proj +proj=natearth target=* \
	-o ./output/bangkok-overview.svg format=svg target=polygon,extent,countries,extent_outline margin=20

./output/middle-east-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/middle-east-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.5 \
	-clean target=countries \
	-filter "true" target='extent' + name="extent_outline" \
	-join source=countries ./data/middle_east_members.csv keys=SOV_A3,code target=countries \
	-colorizer name=calcFill colors='${color_signed}' categories='proposed' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width=".5"  where="treaty_status === 'proposed'" target=countries \
	-style fill=${color_zone} target=extent \
	-style stroke=black stroke-width=1.5 target=extent_outline \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="treaty_status === 'proposed'" target="country_labels" \
	-style label-text=ADMIN stroke=white stroke-width=3 font-family="${label_font}" fill="black" font-size=12 css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000 km" tic-length=6 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=polygon,extent,countries,extent_outline,country_labels,scalebar fit-extent=extent margin=80 \

./output/pelindaba-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/pelindaba-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.5 target=countries \
	-clean target=countries \
	-join source=countries ./data/pelindaba_members.csv keys=SOV_A3,code target=countries \
	-colorizer name=calcFill colors='${color_ratified},${color_ratified},${color_signed}' categories='ratification,accession,signature' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".3" target=countries \
	-style stroke="black" stroke-width=.5  where="treaty_status === 'ratification' || treaty_status === 'accession' || treaty_status === 'signature'" target=countries \
	-style fill=${color_zone} stroke="black" target=extent \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="treaty_status === 'ratification'" target="country_labels" \
	-style label-text=NAME stroke="${color_water}" stroke-width=${label_stroke} font-family="${label_font}" font-size=${label_size} fill="black"  css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="top-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6 \
	-proj +proj=natearth target=* \
	-o $@ format=svg target=polygon,extent,countries,country_labels,scalebar fit-extent=extent margin=20

./output/world-map.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/bangkok-extent.geojson ./tmp/rarotonga-extent.geojson ./tmp/tlatelolco-extent.geojson ./tmp/pelindaba-extent.geojson ./tmp/antarctica-extent.geojson combine-files \
	-rename-layers countries,bangkok_extent,rarotonga_extent,tlatelolco_extent,pelindaba_extent,antarctica_extent \
	-simplify visvalingam percentage=.15 keep-shapes \
	-filter-islands min-area=100km2 target=countries\
	-filter-slivers target=countries\
	-clean target=countries \
	-snap target=rarotonga_extent \
	-dissolve2 target=rarotonga_extent \
	-join source=countries ./data/bangkok_members.csv keys=ADM0_A3,code prefix="bangkok_" target=countries \
	-join source=countries ./data/rarotonga_members.csv keys=ADM0_A3,code prefix="rarotonga_" target=countries \
	-join source=countries ./data/tlatelolco_members.csv keys=ADM0_A3,code prefix="tlatelolco_" target=countries \
	-join source=countries ./data/pelindaba_members.csv keys=ADM0_A3,code prefix="pelindaba_" target=countries \
	-join source=countries ./data/semipalatinsk_members.csv keys=ADM0_A3,code prefix="semipalatinsk_" target=countries \
	-filter where="bangkok_treaty_status === 'ratified'" target='countries' + name="bangkok_countries" \
	-filter where="rarotonga_treaty_status === 'ratified'" target='countries' + name="rarotonga_countries" \
	-filter where="tlatelolco_treaty_status === 'ratified'" target='countries' + name="tlatelolco_countries" \
	-filter where="pelindaba_treaty_status === 'ratification' || pelindaba_treaty_status === 'accession' || pelindaba_treaty_status === 'signature'" target='countries' + name="pelindaba_countries" \
	-filter where="semipalatinsk_treaty_status === 'ratification'" target='countries' + name="semipalatinsk_countries" \
	-filter where="NAME === 'Antarctica' || NAME === 'Mongolia'" target='countries' + name="extra_countries" \
	-style fill="white" stroke="rgba(0,0,0,.35)" stroke-width=.5 target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5 target=bangkok_countries,rarotonga_countries,tlatelolco_countries,pelindaba_countries,semipalatinsk_countries,extra_countries \
	-style fill=${color_zone} stroke="black" stroke-width=.5 target=bangkok_extent,rarotonga_extent,tlatelolco_extent,pelindaba_extent,antarctica_extent \
	-proj +proj=natearth target=* \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-o ./output/world-bangkok.svg format=svg target=polygon,bangkok_extent,countries,bangkok_countries margin=20 \
	-o ./output/world-rarotonga.svg format=svg target=polygon,rarotonga_extent,countries,rarotonga_countries margin=20 \
	-o ./output/world-tlatelolco.svg format=svg target=polygon,tlatelolco_extent,countries,tlatelolco_countries margin=20 \
	-o ./output/world-pelindaba.svg format=svg target=polygon,countries,pelindaba_countries margin=20 \
	-o ./output/world-semipalatinsk.svg format=svg target=polygon,countries,semipalatinsk_countries margin=20 \
	-o $@ format=svg target=polygon,bangkok_extent,rarotonga_extent,tlatelolco_extent,antarctica_extent,countries,bangkok_countries,pelindaba_countries,rarotonga_countries,tlatelolco_countries,semipalatinsk_countries,extra_countries margin=20