.PHONY: all

all: maps

maps: ./output ./output/beirut-metro.svg

./output:
	mkdir output


label_size=15
label_stroke=3
label_font='sans-serif'
color_land="rgb(242,242,241)"
color_water="rgb(210,228,239)"

./output/beirut-metro.svg:
	mapshaper \
	-i ./tmp/beirut_bounds.geojson ./tmp/beirut_streets.geojson ./tmp/beirut_built_area.geojson ./tmp/beirut_water.geojson ./data/beirut-trams.geojson ./data/trams-stops.geojson combine-files \
	-rename-layers bounds,streets,built_area,water,trams,stops \
	-simplify visvalingam percentage=.85 \
	-clean target=streets \
	-filter target=bounds where="true" + name="land"  \
	-clean target=land \
	-dissolve2 target=built_area \
	-dissolve target=land \
	-filter target=land where="true" + name="land_outline"  \
	-style fill=${color_land} target="land" \
	-style fill="rgb(240,240,240)" stroke="none" target="built_area" \
	-style fill="none" stroke="gray" stroke-width=1 target="land_outline" \
	-style fill='none' stroke='rgba(0,0,0,.075)' target="bounds" \
	-colorizer name=calcStrokeWidth colors='3,2,1,0,0' categories='motorway,primary,secondary,residential,unclassified' nodata=".5" \
	-style stroke-width='calcStrokeWidth(highway)' stroke="white" target='streets' \
	-colorizer name=calcLineColor colors='red,green' categories='line-1,line-2' nodata="black" \
	-style stroke-width=2.5 stroke="calcLineColor(name)" target='trams' \
	-style where="name === 'abandoned'" stroke-dasharray="2 2" target=trams \
	-graticule polygon \
	-style fill=${color_water} target=polygon \
	-style stroke=${color_water} stroke-width=5 target=water \
	-points target=bounds  + name="bounds_labels" \
	-style where='type === "stop"' target=stops stroke="calcLineColor(line)" stroke-width=2.5 fill=white r=4 \
	-style where='type === "depot"' target=stops fill="calcLineColor(line)" r=3 \
	-style label-text=name stroke=${color_land} stroke-width=${label_stroke} font-size=${label_size}  fill="black" css="paint-order: stroke;stroke-linecap: butt;stroke-linejoin: miter;" target=bounds_labels \
	-scalebar position="bottom-right" margin=20 label-position="top" style="a" label="1km" \
	-proj +proj=merc target=* \
	-o $@ format=svg target=polygon,land,streets,water,trams,bounds,stops,land_outline,scalebar fit-extent=trams margin=150
