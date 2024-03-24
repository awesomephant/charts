.PHONY: all

all: maps

maps: ./output ./output/beirut-metro.svg

./output:
	mkdir output

./output/beirut-metro.svg:
	mapshaper \
	-i ./tmp/beirut_bounds.geojson ./tmp/beirut_streets.geojson combine-files \
	-rename-layers bounds,streets \
	-simplify visvalingam percentage=.9 \
	-clean target=* \
	-style fill='lightgray' target="bounds" \
	-colorizer name=calcFill colors='3,3,2,1,.5' categories='motorway,primary,secondary,residential,unclassified' nodata=".5" \
	-style stroke-width='calcFill(highway)' target='streets' \
	-scalebar position="bottom-right" margin=20 label-position="top" style="a" label="1km" tic-length=6 \
	-proj +proj=natearth target=* \
	-o $@ format=svg target=bounds,streets,scalebar fit-extent=streets margin=20
