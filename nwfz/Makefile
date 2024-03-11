.PHONY: all

all: ./output ./tmp ./tmp/ne_50m_admin_0_countries.geojson ./tmp/australia_12nm_exterior.shp ./tmp/usa_12nm_exterior.geojson ./tmp/indonesia_land.shp ./tmp/papua_land.shp ./output/rarotonga-map.svg ./output/tlatelolco-map.svg ./output/bangkok-map.svg ./output/world-map.svg

maps: ./output/rarotonga-map.svg ./output/tlatelolco-map.svg ./output/bangkok-map.svg ./output/world-map.svg

./output:
	mkdir output

./tmp:
	mkdir tmp

treaty-members:
	python parse_treaties.py

./tmp/ne_50m_admin_0_countries.geojson:
	curl -L -k -o $@ "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson"

./tmp/usa_12nm_exterior.geojson:
	mapshaper \
	-i "./data/eez_12nm_v4.shp" \
	-filter 'GEONAME === "United States 12 NM"' \
	-drop holes \
	-clean \
	-o $@

./tmp/australia_12nm_exterior.shp:
	mapshaper \
	-i "./data/eez_12nm_v4.shp" \
	-filter "GEONAME === 'Australian 12 NM'"\
	-drop holes\
	-erase bbox="142.0011,-9.5488,142.9038,-9.1336" \
	-filter-islands remove-empty min-area=100000km2 \
	-clean \
	-o $@

./tmp/indonesia_land.shp:
	mapshaper \
	-i "./data/ne_50m_admin_0_countries.shp" \
	-filter "SOV_A3 === 'IDN'"\
	-drop holes\
	-clean \
	-o $@

./tmp/papua_land.shp:
	mapshaper \
	-i "./data/ne_50m_admin_0_countries.shp" \
	-filter "SOV_A3 === 'PNG'"\
	-drop holes\
	-clean \
	-o $@

color_ratified=\#055fb5
color_signed=\#4c83b7
color_zone=\#aecde5
color_water=\#fafafa

./output/rarotonga-map.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries.shp ./tmp/rarotonga-extent.shp combine-files\
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.4 target=countries\
	-clean target=countries\
	-join source=countries ./data/rarotonga_members.csv keys=ISO_A3_EH,code target=countries\
	-colorizer name=calcFill colors='${color_ratified}' categories='ratified' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="black" stroke-width=".5" target=countries\
	-style  stroke-width="1"  where="treaty_status === 'ratified'" target=countries\
	-snap target=extent \
	-dissolve target=extent \
	-style fill=${color_zone} stroke="black" target=extent \
	-points target=countries + name="country_labels" \
	-filter where="['Australia', 'Papua New Guinea', 'East Timor','New Zealand', 'Guam', 'Solomon Islands', 'Pitcairn Islands','Cook Islands','Malaysia', 'Niue'].includes(ADMIN)" target="country_labels" \
	-style label-text=ADMIN stroke="#fafafa" stroke-width=2 fill="black" font-size=12 css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;"\
	-graticule interval=30 \
	-style stroke="black" stroke-width=0.5 stroke-dasharray="1 2"\
	-graticule polygon \
	-style stroke=none fill=${color_water} \
	-clip bbox="100,-50,180,20" target=countries\
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6\
	-proj +proj=merc +lon_0=180 target=* \
	-o $@ format=svg target=polygon,extent,countries,country_labels,graticule,scalebar fit-extent=extent margin=20

./output/tlatelolco-map.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries.shp ./tmp/tlatelolco-extent.geojson combine-files \
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
	-points target=countries + name="country_labels" \
	-filter where="['Brazil', 'Mexico'].includes(ADMIN)" target="country_labels" \
	-style label-text=ADMIN stroke="#fafafa" stroke-width=2 fill="black" font-size=16 css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule interval=10 \
	-style stroke="rgba(0,0,0,.1)" stroke-width=0.5 \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6 \
	-proj +proj=merc +lon_0=180 target=* \
	-o $@ format=svg target=polygon,extent,countries,country_labels,graticule,scalebar fit-extent=extent margin=20

./output/bangkok-map.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries.shp ./tmp/bangkok-extent.geojson combine-files \
	-rename-layers countries,extent \
	-simplify visvalingam percentage=0.5 target=countries \
	-clean target=countries \
	-join source=countries ./data/bangkok_members.csv keys=SOV_A3,code target=countries \
	-colorizer name=calcFill colors='${color_ratified}' categories='ratified' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width="1"  where="treaty_status === 'ratified'" target=countries \
	-style fill=${color_zone} stroke="black" target=extent \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="['Brunei','Cambodia','Indonesia','Lao PDR','Malaysia','Myanmar','Philippines','Singapore','Thailand','Vietnam'].includes(ADMIN)" target="country_labels" \
	-style label-text=name stroke=white stroke-width=4 font-family="Atlas Grotesk" fill="black" font-size=14 css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="top-right" margin=60 label-position="top" style="b" label="1000 km" tic-length=6 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=polygon,extent,countries,country_labels,scalebar fit-extent=extent margin=80

./output/pelindaba-map.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries.geojson combine-files \
	-rename-layers countries \
	-simplify visvalingam percentage=0.5 target=countries \
	-clean target=countries \
	-join source=countries ./data/pelindaba_members.csv keys=sov_a3,code target=countries \
	-colorizer name=calcFill colors='${color_ratified},${color_signed}' categories='ratification,signature' nodata="white" \
	-style fill="calcFill(treaty_status)" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width="1"  where="treaty_status === 'ratification'" target=countries \
	-points target=countries + name="country_labels" \
	-filter where="[].includes(name)" target="country_labels" \
	-style label-text=name stroke="#fafafa" stroke-width=2 fill="black" font-size=15 css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="top-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=polygon,countries,country_labels,scalebar margin=20

./output/world-map.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries.geojson ./tmp/bangkok-extent.geojson ./tmp/rarotonga-extent.geojson ./tmp/tlatelolco-extent.geojson ./tmp/antarctica-extent.geojson combine-files \
	-rename-layers countries,bangkok_extent,rarotonga_extent,tlatelolco_extent,antarctica_extent \
	-simplify visvalingam percentage=.15 keep-shapes \
	-filter-islands min-area=100km2 target=countries\
	-filter-slivers target=countries\
	-clean target=countries \
	-snap target=rarotonga_extent \
	-dissolve2 target=rarotonga_extent \
	-join source=countries ./data/bangkok_members.csv keys=adm0_a3,code prefix="bangkok_" target=countries \
	-join source=countries ./data/rarotonga_members.csv keys=adm0_a3,code prefix="rarotonga_" target=countries \
	-join source=countries ./data/tlatelolco_members.csv keys=adm0_a3,code prefix="tlatelolco_" target=countries \
	-join source=countries ./data/pelindaba_members.csv keys=adm0_a3,code prefix="pelindaba_" target=countries \
	-join source=countries ./data/semipalatinsk_members.csv keys=adm0_a3,code prefix="semipalatinsk_" target=countries \
	-style fill="white" stroke="rgba(0,0,0,.35)" stroke-width=.5 target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="bangkok_treaty_status === 'ratified'" target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="rarotonga_treaty_status === 'ratified'" target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="tlatelolco_treaty_status === 'ratified'" target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="pelindaba_treaty_status === 'ratification'" target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="semipalatinsk_treaty_status === 'ratification'" target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="name === 'Antarctica'" target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5  where="name === 'Mongolia'" target=countries \
	-style fill=${color_signed} stroke="black" stroke-width=.5  where="pelindaba_treaty_status === 'signature'" target=countries \
	-style fill=${color_zone} stroke="black" stroke-width=.5 target=bangkok_extent,rarotonga_extent,tlatelolco_extent,antarctica_extent \
	-proj +proj=natearth target=* \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-o $@ format=svg target=polygon,bangkok_extent,rarotonga_extent,tlatelolco_extent,antarctica_extent,countries margin=10