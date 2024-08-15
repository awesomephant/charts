.PHONY: all

all: ./tmp vectors

vectors: ./output ./output/north-korea.svg ./output/eu-nukes.svg

prif_lu3: ./output ./output/yekaterinburg-locator.svg ./output/post-soviet-states.svg

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
color_land_shore=\#ebebeb
color_land_outline=\#424242
color_river=\#82A7C9
color_lake=\#CDD9E4
color_line=\#e64100

color_blue_90=\#080A0C
color_blue_70=\#274868
color_blue_50=\#4D8ECB
color_blue_40=\#82a7c9
color_blue_30=\#acc0d2
color_blue_20=\#aD8ECB
color_blue_10=\#F2F5F7

color_orange_40=\#ef7f60
color_orange_50=\#f06842
color_orange_50=\#dc3609

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
	-style stroke=${color_blue_90} css='mix-blend-mode: multiply' target=provinces \
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

./output/myanmar-control.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/myanmar-provinces.geojson ./tmp/ne_10m_rivers_lake_centerlines_scale_rank/ne_10m_rivers_lake_centerlines_scale_rank.shp ./tmp/ne_10m_lakes/ne_10m_lakes.shp ./tmp/ne_10m_urban_areas/ne_10m_urban_areas.shp ./tmp/myanmar-labels.geojson ./tmp/myanmar-conflict-me.geojson combine-files \
	-rename-layers countries,provinces,rivers,lakes,urban,places,me \
	-join target=provinces ./data/myanmar-control.csv keys=TS,region \
	-clip source=me target=countries \
	-clip source=me target=provinces \
	-clip source=me target=rivers \
	-clip source=me target=lakes \
	-clip source=me target=urban \
	-clip source=me target=places \
	-simplify visvalingam percentage=.05 \
	-filter-islands min-area=100km2 target=countries \
	-snap interval=.0005 fix-geometry target=provinces \
	-clean \
	-innerlines target="provinces" + name=provinces_lines \
	-dissolve2 target="provinces" + name=mmr \
	-filter target=countries where='ADM0_A3 !== "MMR"' \
	-filter target=provinces where='control === "junta"' + name=provinces-junta \
	-filter target=provinces where='control === "rebel"' + name=provinces-rebel \
	-filter target=provinces where='control === "disputed"' + name=provinces-disputed \
	-filter target=places where="feature_class === 'Admin-0 capital'" + name=places_capitals \
	-filter target=places where="feature_class !== 'Admin-0 capital'" + name=places_towns \
	-filter target=places_capitals where="true" + name=capitals_labels \
	-filter target=places_towns where="true" + name=towns_labels \
	-style fill='${color_land}' stroke-width=1 stroke='${color_land_outline}' target="countries" \
	-style where="ADM0_A3 === 'MMR'" fill='white' opacity=1 target="countries" \
	-style fill='none' stroke='${color_blue_90}' stroke-width=2 target="mmr" \
	-colorizer name=calcFill colors=red,${color_blue_20},gray nodata="transparent" categories="junta,rebel,disputed" \
	-style fill="calcFill(control)" target=provinces-junta,provinces-rebel,provinces-disputed \
	-style fill=${color_urban} target='urban' \
	-style stroke=${color_river} stroke-width=1 target=rivers \
	-style stroke=${color_river} stroke-width=1 fill="${color_river}" target=lakes \
	-style stroke=${color_blue_90} stroke-width=.5 opacity=1  css='mix-blend-mode: multiply' target=provinces_lines \
	-style fill=${color_blue_50} target=me \
	-symbols target=places_capitals type=square fill='${color_blue_90}' radius=6 \
	-symbols target=places_towns type=circle fill='${color_blue_90}' radius=2 \
	-style dy=-10 target=capitals_labels label-text=label_text font-size=${label_size} font-family="${label_font}" fill="${color_blue_90}" \
	-style dy=-7 target=towns_labels label-text=label_text font-size=${label_size_town} font-family="${label_font}" fill="${color_blue_90}" \
	-scalebar position="bottom-left" margin=30 label-position="top" style="a" label="200km" bar-width=2 \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,countries,provinces-junta,provinces-rebel,provinces-disputed,urban,rivers,lakes,provinces_lines,mmr,places_towns,places_capitals,towns_labels,capitals_labels,scalebar fit-extent=me

./output/myanmar-locator.svg:
	mapshaper \
	-i ./tmp/ne_110m_land/ne_110m_land.shp ./tmp/myanmar-conflict-me.geojson combine-files \
	-rename-layers land,me \
	-simplify visvalingam percentage=.95 \
	-clean \
	-graticule polygon \
	-style stroke=black stroke-width=5 \
	-style target="land" fill="lightgray" stroke="black" stroke-width=1 \
	-style target="me" fill="none" stroke="black" stroke-width=5 \
	-proj +proj=nsper +h=1000000000 +lon_0=95 +lat_0=10 target=* densify \
	-o $@ format=svg target=land,polygon,me fit-extent=land

./output/yekaterinburg-locator.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/ne_10m_admin_1_states_provinces/ne_10m_admin_1_states_provinces.shp ./tmp/russia-labels.geojson ./tmp/yekaterinburg.geojson ./tmp/yekaterinburg-me.geojson combine-files \
	-rename-layers countries,provinces,places,yb,me \
	-clip source=me target=countries \
	-clip source=me target=provinces \
	-clip source=me target=places \
	-filter-islands min-area=100km2 target=countries \
	-filter target=countries where='ADM0_A3==="RUS"' + name=russia \
	-filter target=countries where='true' + name=land \
	-filter target=countries where='true' + name=land_outline \
	-filter target=russia where='true' + name=russia_outline \
	-filter target=provinces where='iso_a2==="RU"' \
	-filter target=places where='feature_class === "Admin-0 capital" && min_zoom < 3' + name=places_capitals \
	-filter target=places_capitals where='true' + name=capitals_labels \
	-snap interval=.0005 fix-geometry target=provinces \
	-simplify visvalingam percentage=.065 \
	-innerlines target=provinces \
	-innerlines target=countries \
	-dissolve target='land' \
	-dissolve target='land_outline' \
	-clean \
	-style fill='${color_land}' target='land' \
	-style stroke-width=1 stroke='${color_land_outline}' target='land_outline' \
	-style stroke='${color_blue_90}' stroke-width=2 target="russia_outline" \
	-style fill="white" target="russia" \
	-style stroke=${color_blue_20} target=provinces \
	-style stroke=${color_blue_30} target=countries \
	-style fill=${color_blue_10} target=me \
	-symbols target=yb type=square fill="${color_blue_90}" radius=6 \
	-symbols target=places_capitals type=square fill='${color_blue_90}' radius=2 \
	-style dy=-10 target=capitals_labels label-text=label_text font-size=${label_size} font-family="${label_font}" fill="${color_blue_90}" \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,land,countries,russia,provinces,land_outline,russia_outline,yb,places_capitals,capitals_labels fit-extent=me

./output/post-soviet-states.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/russia-labels.geojson ./tmp/yekaterinburg-me.geojson combine-files \
	-rename-layers countries,places,me \
	-clip source=me target=countries \
	-clip source=me target=places \
	-filter target=countries where='true' + name=land \
	-filter target=countries where='true' + name=land_outline \
	-filter-islands min-area=100km2 target=countries \
	-filter target=countries where='["ARM", "AZE", "BLR", "EST", "GEO", "KAZ", "KGZ", "LVA", "LTU", "MDA", "RUS", "TJK", "TKM", "UKR", "UZB"].includes(ADM0_A3)' + name=soviet_states \
	-points target=soviet_states x=LABEL_X y=LABEL_Y + name="country_labels" \
	-style label-text=NAME font-family="${label_font}" fill="black" font-size=${label_size} \
	-filter target=places where="feature_class === 'Admin-0 capital' && min_zoom < 2" + name=places_capitals \
	-filter target=places_capitals where="true" + name=capitals_labels \
	-simplify visvalingam percentage=.065 \
	-innerlines target=countries \
	-dissolve target='land' \
	-dissolve target='land_outline' \
	-clean \
	-style fill='${color_land}' stroke-width=4 stroke='${color_land_shore}' target="land" \
	-style  stroke-width=.5 stroke='${color_land_outline}' target="land_outline" \
	-style fill='${color_blue_30}' stroke-width=1.5 stroke='${color_blue_90}' target="soviet_states" \
	-style fill=${color_blue_10} target=me \
	-symbols target=places_capitals type=square fill='${color_blue_90}' radius=3 \
	-style dy=-10 target=capitals_labels label-text=label_text stroke="${color_land}" stroke-width=${label_stroke} font-size=${label_size} font-family="${label_font}" fill="${color_blue_90}" \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,land,countries,soviet_states,land_outline,country_labels fit-extent=me

./output/genoa-kaffa.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/genoa-trade-routes.geojson ./tmp/genoa-places.geojson ./tmp/genoa-me.geojson combine-files \
	-rename-layers countries,routes,places,me \
	-clip source=me target=countries \
	-filter target=countries where='true' + name=land \
	-filter target=countries where='true' + name=land_outline \
	-clip source=me target=places \
	-filter-islands min-area=100km2 target=countries \
	-filter target=routes where="name === 'genoa-kaffa'" \
	-filter target=places where="true" + name=places_labels \
	-filter target=routes where="name === 'genoa-kaffa'" \
	-simplify visvalingam percentage=.065 \
	-innerlines target=countries \
	-dissolve target='land' \
	-dissolve target='land_outline' \
	-clean \
	-style stroke-width=2 stroke='${color_orange_50}' target="routes" \
	-style  fill='${color_land}' stroke-width=4 stroke='${color_land_shore}' target="land" \
	-style stroke-width=.5 stroke='${color_land_outline}' target="land_outline" \
	-style  stroke-width=.5 stroke='${color_land_outline}' target="countries" \
	-style fill=${color_blue_10} target=me \
	-symbols target=places type=square fill='${color_blue_90}' radius=3 \
	-style dy=-10 target=places_labels label-text=label_text stroke="${color_land}" stroke-width=${label_stroke} font-size=${label_size} font-family="${label_font}" fill="${color_blue_90}" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" \
	-proj +proj=merc target=* \
	-o $@ format=svg target=me,land,countries,land_outline,routes,places,places_labels fit-extent=me
