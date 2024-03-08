.PHONY: all
all: ./output ./tmp ./tmp/australia_12nm_exterior.shp ./tmp/indonesia_land.shp ./tmp/papua_land.shp ./output/rarotonga-map.svg

./output:
    mkdir output

./tmp:
    mkdir tmp

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
color_zone=\#aecde5

./output/rarotonga-map.svg:
	mapshaper \
    -i ./tmp/ne_50m_admin_0_countries.shp ./tmp/rarotonga-extent.shp combine-files\
    -rename-layers countries,extent \
    -filter-fields ADMIN,ISO_A3_EH target=countries \
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
    -style stroke=none fill=#fafafa \
    -clip bbox="100,-50,180,20" target=countries\
    -scalebar position="bottom-right" margin=60 label-position="top" style="b" label="1000km" tic-length=6\
    -proj +proj=merc +lon_0=180 target=* \
	-o $@ format=svg target=polygon,extent,countries,country_labels,graticule,scalebar fit-extent=extent margin=20


