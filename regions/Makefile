.PHONY: all

all: ./tmp vectors

vectors: ./output ./output/north-korea.svg ./output/eu-nukes.svg

./output:
	mkdir -p output

./tmp:
	mkdir -p output

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
color_blue_50=\#4D8ECB
color_blue_10=\#F2F5F7
color_yellow_40=\#F2D75F
color_yellow_30=\#EFDC8F
color_yellow_20=\#F7ECBA


./output/north-korea.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/ne_10m_admin_1_states_provinces/ne_10m_admin_1_states_provinces.shp ./tmp/ne_10m_rivers_lake_centerlines_scale_rank/ne_10m_rivers_lake_centerlines_scale_rank.shp ./tmp/ne_10m_lakes/ne_10m_lakes.shp ./tmp/ne_10m_urban_areas/ne_10m_urban_areas.shp ./tmp/north-korea-labels.geojson ./tmp/north-korea-extent.geojson combine-files \
	-rename-layers countries,provinces,rivers,lakes,urban,places,me \
	-clip source=me target=countries \
	-clip source=me target=provinces \
	-clip source=me target=rivers \
	-clip source=me target=lakes \
	-clip source=me target=urban \
	-clip source=me target=places \
	-filter-islands min-area=100km2 target=countries \
	-filter target=countries where='ADM0_A3==="PRK"' + name=prk \
	-filter target=places where="feature_class === 'Admin-0 capital'" + name=places_capitals \
	-filter target=places where="feature_class !== 'Admin-0 capital'" + name=places_towns \
	-filter target=places_capitals where="true" + name=capitals_labels \
	-filter target=places_towns where="true" + name=towns_labels \
	-simplify visvalingam percentage=.065 \
	-clean \
	-innerlines target=provinces \
	-style fill='${color_land}' stroke-width=1 stroke='${color_land_outline}' target="countries" \
	-style where="ADM0_A3 === 'PRK'" fill='white' opacity=1 target="countries" \
	-style fill='none' stroke='${color_blue_90}' stroke-width=1.5 target="prk" \
	-style fill=${color_urban} target='urban' \
	-style stroke=${color_river} stroke-width=1 target=rivers \
	-style stroke=${color_river} stroke-width=1 fill="${color_river}" target=lakes \
	-style stroke=${color_blue_90} opacity=.15 css='mix-blend-mode: multiply' target=provinces \
	-style fill=${color_blue_10} target=me \
	-symbols target=places_capitals type=square fill='${color_blue_90}' radius=6 \
	-symbols target=places_towns type=circle fill='${color_blue_90}' radius=2 \
	-style dy=-10 target=capitals_labels label-text=label_text stroke="${color_land}" stroke-width=${label_stroke} font-size=${label_size} font-family="${label_font}" fill="${color_blue_90}" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-style dy=-7 target=towns_labels label-text=label_text stroke="${color_land}" stroke-width=${label_stroke} font-size=${label_size_town} font-family="${label_font}" fill="${color_blue_90}" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-scalebar position="bottom-left" margin=30 label-position="top" style="a" label="200km" bar-width=2 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,countries,urban,rivers,lakes,provinces,prk,places_towns,places_capitals,towns_labels,capitals_labels,scalebar fit-extent=me

./output/eu-nukes.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp ./tmp/ne_10m_rivers_lake_centerlines_scale_rank/ne_10m_rivers_lake_centerlines_scale_rank.shp ./tmp/ne_10m_lakes/ne_10m_lakes.shp ./tmp/ne_10m_urban_areas/ne_10m_urban_areas.shp ./tmp/eu-nukes-sites.geojson ./tmp/eu-nukes-extent.geojson combine-files \
	-rename-layers countries,rivers,lakes,urban,sites,me \
	-clip source=me target=countries \
	-clip source=me target=rivers \
	-clip source=me target=lakes \
	-clip source=me target=urban \
	-filter-islands min-area=100km2 target=countries \
	-filter target=countries where="['BEL', 'DEU', 'NLD', 'ITA', 'TUR'].includes(ADM0_A3)" + name=hosts \
	-simplify visvalingam percentage=.3 \
	-clean \
	-style fill='${color_land}' stroke-width=1 stroke='${color_land_outline}' target="countries" \
	-style where="['BEL', 'DEU', 'NLD', 'ITA', 'TUR'].includes(ADM0_A3)" fill='${color_yellow_30}' opacity=1 target="countries" \
	-style target='urban' fill=${color_urban} css='mix-blend-mode: multiply' \
	-style stroke=${color_blue_10} stroke-width=1 target=rivers \
	-style stroke=${color_blue_10} stroke-width=1 fill="${color_blue_10}" target=lakes \
	-style fill=none stroke='${color_blue_90}' stroke-width=1.2 target=hosts \
	-style fill=${color_blue_10} target=me \
	-symbols target=sites type=circle fill='${color_yellow_40}' stroke="black" stroke-width=1 radius=4 \
	-scalebar position="bottom-left" margin=30 label-position="top" style="a" label="500km" bar-width=1 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,countries,hosts,sites fit-extent=me

./output/arms-embargos.svg:
	mapshaper \
	-i ./tmp/ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp combine-files \
	-rename-layers countries \
	-join source=countries ./data/arms-embargos.csv keys=ADM0_A3,iso3  \
	-filter-islands min-area=100km2 target=countries \
	-filter target=countries where="ADM0_A3 !== 'ATA'" \
	-filter target=countries where="embargo !== null" + name=countries_outline \
	-simplify visvalingam percentage=.2 \
	-clean \
	-points target=countries_outline x=LABEL_X y=LABEL_Y + name="country_labels" \
	-style label-text=NAME font-family="${label_font}" font-size=${label_size} fill="black" \
	-colorizer name=calcFill colors=\#f06842,\#336899,\#dc3609 nodata="rgb(230,230,230)" categories="United Nations embargo,EU embargo without UN counterpart,EU embargo with broader scope than UN embargos on the same target" \
	-style fill="calcFill(embargo)" target=countries \
	-style stroke="black" stroke-width=".75" target=countries_outline \
	-proj +proj=natearth target=* \
	-o $@ format=svg target=countries,countries_outline,country_labels fit-extent=countries margin=10