.PHONY: all

all: maps

maps: ./output ./output/beirut-metro.svg ./output/beirut_locator.svg

./output:
	mkdir -p output

./tmp:
	mkdir -p output

label_size=15
label_stroke=3
label_font='sans-serif'
color_land=\#f0f1f2
color_land_outline=\#a8b8cf
color_water="rgb(220,228,240)"
color_bound=\#cfcfcf
color_line=\#e64100

./output/beirut-metro.svg:
	mapshaper \
	-i ./tmp/beirut_bounds.geojson ./tmp/beirut_streets.geojson ./tmp/beirut_built_area.geojson ./tmp/beirut_water.geojson ./data/beirut-trams.geojson ./data/trams-stops.geojson ./tmp/beirut_map_extent.geojson combine-files \
	-rename-layers bounds,streets,built_area,water,trams,stops,me \
	-simplify visvalingam percentage=.85 \
	-clean target=streets \
	-filter target=bounds where="true" + name="land"  \
	-filter target=trams where="name == 'abandoned'" + name=trams_abandoned  \
	-filter target=trams where="type !== 'ramp' && name !== 'abandoned'"  \
	-clean target=land \
	-dissolve2 target=built_area \
	-dissolve target=land \
	-filter target=land where="true" + name="land_outline"  \
	-style fill=${color_land} target="land" \
	-style fill="none" stroke="${color_land_outline}" stroke-width=1 target="land_outline" \
	-style fill='none' stroke='${color_bound}' target="bounds" \
	-colorizer name=calcStrokeWidth colors='3,2,1,0,0' categories='motorway,primary,secondary,residential,unclassified' nodata=".5" \
	-style stroke-width='calcStrokeWidth(highway)' stroke="white" target='streets' \
	-colorizer name=calcLineColor colors='${color_line},${color_line},rgb(150,150,150)' categories='line-1,line-2,abandoned' nodata="black" \
	-style stroke-width=4 stroke="calcLineColor(name)" target='trams,trams_abandoned' \
	-style stroke-width=3 target=trams_abandoned \
	-graticule polygon \
	-style fill=${color_water} target=polygon \
	-style stroke=${color_water} stroke-width=5 target=water \
	-points target=bounds  + name="bounds_labels" \
	-style where='type === "stop"' target=stops fill="calcLineColor(line)" r=5 \
	-style where='type === "depot"' target=stops fill="calcLineColor(line)" r=3 \
	-style where='line === "abandoned"' target=stops stroke="calcLineColor(line)" fill='${color_land}' r=3 \
	-style label-text=name stroke=${color_land} stroke-width=${label_stroke} font-size=${label_size}  fill="black" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" target=bounds_labels \
	-scalebar position="bottom-right" margin=30 label-position="top" style="a" label="1km" \
	-clip source=me target=polygon \
	-clip source=me target=land \
	-clip source=me target=land_outline \
	-clip source=me target=streets \
	-clip source=me target=water \
	-clip source=me target=trams \
	-clip source=me target=bounds \
	-proj +proj=merc target=* \
	-o $@ format=svg target=polygon,land,streets,water,bounds,trams_abandoned,trams,stops,land_outline,scalebar fit-extent=me

./output/beirut_locator.svg:
	mapshaper \
	-i ./tmp/beirut_region.geojson ./tmp/beirut_map_extent.geojson combine-files \
	-rename-layers countries,me \
	-simplify visvalingam percentage=.85 \
	-clean \
	-filter target="countries" where="ADM0_A3 === 'LBN'" + name="lebanon" \
	-style target='countries' stroke='gray' fill='rgb(250,250,250)' \
	-style target='lebanon' fill='white' stroke='black' \
	-style target='me' stroke='red' stroke-width=2 fill="none" \
	-graticule polygon \
	-style fill=${color_water} target=polygon \
	-proj +proj=merc target=* \
	-o $@ format=svg width=300 target=countries,lebanon,me fit-extent=lebanon margin=20