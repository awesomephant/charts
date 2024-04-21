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
color_zone=\#afcee6
color_water=\#f9f9f9

label_size=16
label_size_town=14
label_stroke=3
label_font='sans-serif'
color_land=\#fafafa
color_urban=\#F7ECBA
color_land_outline=\#999999
color_river=\#82A7C9
color_lake=\#CDD9E4
color_line=\#e64100


color_blue_90=\#080A0C
color_blue_70=\#274868
color_blue_60=\#336899
color_blue_50=\#3486D3
color_blue_40=\#82A7C9
color_blue_30=\#ACC0D2
color_blue_20=\#CDD9E4
color_blue_10=\#F2F5F7
color_yellow_40=\#F2D75F
color_yellow_30=\#EFDC8F
color_yellow_20=\#F7ECBA

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
	-style label-text=NAME stroke=white stroke-width=${label_stroke} font-family="${label_font}" fill="black" font-size=${label_size} css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="top-right" margin=60 label-position="top" style="b" label="1000 km" tic-length=6 \
	-proj +proj=merc target=* \
	-o ./output/bangkok-detail.svg format=svg target=polygon,extent,countries,extent_outline,scalebar fit-extent=extent margin=80 \
	-proj +proj=natearth target=* \
	-o ./output/bangkok-overview.svg format=svg target=polygon,extent,countries,extent_outline margin=20

./output/bangkok-detail-2.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/ne_50m_urban_areas/ne_50m_urban_areas.shp ./tmp/ne_50m_lakes/ne_50m_lakes.shp ./tmp/ne_50m_rivers_lake_centerlines/ne_50m_rivers_lake_centerlines.shp ./tmp/ne_50m_populated_places_simple/ne_50m_populated_places_simple.shp ./tmp/bangkok-extent.geojson ./tmp/bangkok-map-extent.geojson combine-files \
	-rename-layers countries,urban,lakes,rivers,places,extent,me \
	-clip source=me target=countries \
	-clip source=me target=rivers \
	-clip source=me target=lakes \
	-clip source=me target=urban \
	-clip source=me target=places \
	-simplify visvalingam percentage=0.75 \
	-clean \
	-filter target=places where="featurecla === 'Admin-0 capital'" + name=places_capitals \
	-filter target=places where="featurecla !== 'Admin-0 capital'" + name=places_towns \
	-filter target=places_capitals where="true" + name=capitals_labels \
	-filter target=places_towns where="true" + name=towns_labels \
	-filter "true" target='extent' + name="extent_outline" \
	-join source=countries ./data/bangkok_members.csv keys=SOV_A3,code target=countries \
	-filter where="treaty_status === 'ratified'" target="countries" + name="members" \
	-style fill="${color_land}" stroke="${color_land_outline}" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width="1.2" fill="${color_blue_50}" css="mix-blend-mode:multiply" target=members \
	-style fill=${color_blue_20} target=extent \
	-style stroke=black stroke-width=1.2 target=extent_outline \
	-points target=members x=LABEL_X y=LABEL_Y + name="members_labels" \
	-style target=members_labels label-text=NAME font-family="${label_font}" fill="rgba(0,0,0,.95)" stroke=none font-size=${label_size} css="text-transform:uppercase;letter-spacing:1px" \
	-style target=me stroke=none fill=${color_blue_10} \
	-style target=lakes fill="${color_blue_20}" stroke="${color_blue_20}" \
	-style target=rivers stroke="${color_blue_20}" \
	-style target=urban fill="${color_yellow_20}" \
	-symbols target=places_capitals type=square fill='${color_blue_90}' radius=4 \
	-symbols target=places_towns type=circle fill='${color_blue_90}' radius=2 \
	-style dy=-7 target=capitals_labels label-text=name stroke="${color_land}" stroke-width=${label_stroke} font-size=12 font-family="${label_font}" fill="${color_blue_90}" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-scalebar position="top-right" margin=60 label-position="top" style="b" label="1000 km" tic-length=6 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,extent,countries,rivers,lakes,urban,members,extent_outline,members_labels,scalebar fit-extent=me \

./output/middle-east-detail.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/middle-east-extent.geojson ./tmp/middle-east-map-extent.geojson combine-files \
	-rename-layers countries,extent,map_extent \
	-simplify visvalingam percentage=0.5 \
	-clean target=countries \
	-filter "true" target='extent' + name="extent_outline" \
	-join source=countries ./data/middle_east_members.csv keys=ADM0_A3,code target=countries \
	-filter where="treaty_status === 'proposed'" target='countries' + name="treaty_countries" \
	-style fill="none" stroke="gray" stroke-width=".5" target=countries \
	-style stroke="black" stroke-width=".5"  target=treaty_countries \
	-style fill="${color_signed}" stroke=black stroke-width=1.5 target=extent_outline \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-filter where="treaty_status === 'proposed'" target="country_labels" \
	-style label-text=ADMIN stroke=white stroke-width=3 font-family="${label_font}" fill="black" font-size=12 css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000 km" tic-length=6 \
	-proj +proj=natearth target=* \
	-clip map_extent target=countries \
	-o $@ format=svg target=countries,treaty_countries,extent_outline,scalebar fit-extent=map_extent

./tmp/gray-world-proj.tif:
	gdalwarp \
    -co "TFW=YES" \
    -s_srs ./tmp/GRAY_LR_SR_W/GRAY_LR_SR_W.prj \
    -t_srs "ESRI:53077" \
	-overwrite \
    ./tmp/GRAY_LR_SR_W/GRAY_LR_SR_W.tif \
    $@

./tmp/middle-east-raster.tif:
	gdalwarp \
	-cutline ./tmp/middle-east-map-extent.geojson \
    -crop_to_cutline \
    -dstalpha \
	-overwrite \
    ./tmp/gray-world-proj.tif \
    $@

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
	-filter where="pelindaba_treaty_status === 'ratification' || pelindaba_treaty_status === 'accession'" target='countries' + name="pelindaba_ratified" \
	-filter where="pelindaba_treaty_status === 'signature'" target='countries' + name="pelindaba_signed" \
	-filter where="semipalatinsk_treaty_status === 'ratification'" target='countries' + name="semipalatinsk_countries" \
	-filter where="NAME === 'Antarctica' || NAME === 'Mongolia'" target='countries' + name="extra_countries" \
	-style fill="white" stroke="rgba(0,0,0,.35)" stroke-width=.5 target=countries \
	-style fill=${color_ratified} stroke="black" stroke-width=.5 target=bangkok_countries,rarotonga_countries,tlatelolco_countries,pelindaba_ratified,semipalatinsk_countries,extra_countries \
	-style fill=${color_signed} stroke="black" stroke-width=.5 target=pelindaba_signed \
	-style fill=${color_zone} stroke="black" stroke-width=.5 target=bangkok_extent,rarotonga_extent,tlatelolco_extent,pelindaba_extent,antarctica_extent \
	-proj +proj=natearth target=* \
	-graticule polygon \
	-style stroke=none fill=#fafafa \
	-o ./output/world-bangkok.svg format=svg target=polygon,bangkok_extent,countries,bangkok_countries margin=20 \
	-o ./output/world-rarotonga.svg format=svg target=polygon,rarotonga_extent,countries,rarotonga_countries margin=20 \
	-o ./output/world-tlatelolco.svg format=svg target=polygon,tlatelolco_extent,countries,tlatelolco_countries margin=20 \
	-o ./output/world-pelindaba.svg format=svg target=polygon,countries,pelindaba_ratified,pelindaba_signed margin=20 \
	-o ./output/world-semipalatinsk.svg format=svg target=polygon,countries,semipalatinsk_countries margin=20 \
	-o $@ format=svg target=polygon,bangkok_extent,rarotonga_extent,tlatelolco_extent,antarctica_extent,countries,bangkok_countries,pelindaba_ratified,pelindaba_signed,rarotonga_countries,tlatelolco_countries,semipalatinsk_countries,extra_countries margin=20