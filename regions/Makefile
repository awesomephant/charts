.PHONY: all

all: ./tmp vectors

vectors: ./output ./output/north-korea.svg

./output:
	mkdir -p output

./tmp:
	mkdir -p output

label_size=12
label_stroke=3
label_font='sans-serif'
color_land=\#fafafa
color_land_outline=\#aaaaaa
color_river=\#82A7C9
color_lake=\#CDD9E4
color_line=\#e64100
color_blue_90=\#080A0C


./output/north-korea.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/ne_10m_admin_1_states_provinces/ne_10m_admin_1_states_provinces.shp ./tmp/ne_10m_rivers_lake_centerlines_scale_rank/ne_10m_rivers_lake_centerlines_scale_rank.shp ./tmp/ne_10m_lakes/ne_10m_lakes.shp ./tmp/ne_10m_urban_areas/ne_10m_urban_areas.shp ./tmp/map_extent.geojson combine-files \
	-rename-layers countries,provinces,rivers,lakes,urban,me \
	-clip source=me target=countries \
	-clip source=me target=provinces \
	-clip source=me target=rivers \
	-clip source=me target=lakes \
	-clip source=me target=urban \
	-filter-islands min-area=100km2 target=countries \
	-filter target=countries where='ADM0_A3==="PRK"' + name=prk \
	-simplify visvalingam percentage=.065 \
	-clean \
	-innerlines target=provinces \
	-style fill='${color_land}' stroke-width=1 stroke='${color_land_outline}' target="countries" \
	-style where="ADM0_A3 === 'PRK'" fill='white' opacity=1 target="countries" \
	-style  fill='none' stroke='${color_blue_90}' stroke-width=2 opacity=1 target="prk" \
	-style fill='black' opacity=.1 css='mix-blend-mode: multiply' target='urban' \
	-style stroke=${color_river} stroke-width=1 target=rivers \
	-style stroke=${color_river} stroke-width=1 fill="${color_lake}" target=lakes \
	-style stroke="black" opacity=.15 css='mix-blend-mode: multiply' target=provinces \
	-style fill=${color_lake} opacity=.5 target=me \
	-scalebar position="bottom-right" margin=30 label-position="top" style="a" label="200km" \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,countries,urban,rivers,lakes,provinces,prk,scalebar fit-extent=me