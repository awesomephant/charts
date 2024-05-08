.PHONY: all

all: ./tmp/gray-world-proj.tif ./tmp/gray-world-crop.tif rasters vectors

rasters: ./tmp/kushan-hillshade-cropped.tif
vectors: ./output ./output/kushan-sites.svg

./output:
	mkdir -p output

./tmp:
	mkdir -p output

./tmp/kushan-hillshade-cropped.tif:
	gdalwarp \
	-s_srs ./tmp/kushan-hillshade.prj \
    -t_srs "EPSG:3857" \
	-cutline ./tmp/map_extent.geojson \
    -crop_to_cutline \
    -dstalpha \
	-overwrite \
    ./tmp/kushan-hillshade.tiff \
    $@

label_size=12
label_stroke=3
label_font='sans-serif'
color_land=\#f0f1f2
color_land_outline=\#ececec
color_water=\#e6f6ff
color_bound=\#cfcfcf
color_line=\#e64100

./output/kushan-sites.svg:
	mapshaper \
	-i ./tmp/ne_10m_admin_0_countries/ne_10m_admin_0_countries.shp ./tmp/ne_10m_rivers_lake_centerlines/ne_10m_rivers_lake_centerlines.shp ./tmp/ne_10m_lakes/ne_10m_lakes.shp ./tmp/ne_10m_urban_areas/ne_10m_urban_areas.shp ./data/greco-bactrian-kingdom.geojson ./data/kushan-empire.geojson ./data/hotan.geojson ./data/kushan-script-sites.geojson ./tmp/map_extent.geojson combine-files \
	-rename-layers countries,rivers,lakes,urban,gbk,kushan,hotan,sites,me \
	-clip source=me target=countries \
	-clip source=me target=rivers \
	-clip source=me target=lakes \
	-clip source=me target=urban \
	-clip source=me target=sites \
	-clip source=me target=gbk \
	-clip source=me target=kushan \
	-clip source=me target=hotan \
	-simplify visvalingam percentage=.95 \
	-clean \
	-points target=countries x=LABEL_X y=LABEL_Y + name="country_labels" \
	-clip source=me target=country_labels \
	-innerlines target=countries \
	-filter where="type === 'confirmed'" target=sites + name="sites_confirmed" \
	-filter where="type === 'potential'" target=sites + name="sites_potential" \
	-filter where="true" target=sites + name="sites_labels" \
	-style label-text=name font-family="${label_font}" font-size=${label_size} fill="black" \
	-style fill='none' stroke='black' opacity=.2 stroke-width=.5 css='mix-blend-mode: multiply' target="countries" \
	-symbols target=sites_confirmed radius=3 type=circle fill='#ff6200' \
	-symbols target=sites_potential radius=3 type=circle fill='blue' \
	-style fill='black' opacity=.1 css='mix-blend-mode: multiply' target='urban' \
	-style stroke=${color_water} stroke-width=1 target=rivers \
	-style stroke=${color_water} stroke-width=1 fill="${color_water}" target=lakes \
	-style target="country_labels" label-text=ADMIN font-size=${label_size} font-family="${label_font}" fill="black" \
	-style target="sites_labels" label-text=name font-size=${label_size} font-family="${label_font}" fill="black" \
	-style fill="#ffe17d" opacity=.5 css='mix-blend-mode: multiply' target=gbk \
	-style fill="#ffe17d" opacity=.5 css='mix-blend-mode: multiply' target=kushan \
	-style fill="#ffe17d" opacity=.5 css='mix-blend-mode: multiply' target=hotan \
	-scalebar position="bottom-right" margin=30 label-position="top" style="a" label="200km" \
	-proj +proj=merc target=* \
	-o $@ format=svg target=gbk,kushan,hotan,rivers,lakes,countries,sites_confirmed,sites_potential,country_labels,scalebar fit-extent=me

./output/kushan-locator.svg:
	mapshaper \
	-i ./tmp/ne_110m_land/ne_110m_land.shp ./tmp/map_extent.geojson combine-files \
	-rename-layers land,me \
	-simplify visvalingam percentage=.95 \
	-clean \
	-graticule polygon \
	-style stroke=black stroke-width=5 \
	-style target="land" fill="lightgray" stroke="black" stroke-width=1 \
	-style target="me" fill="none" stroke="black" stroke-width=5 \
	-proj +proj=nsper +h=1000000000 +lon_0=60 +lat_0=20 target=* densify \
	-o $@ format=svg target=land,polygon,me fit-extent=land