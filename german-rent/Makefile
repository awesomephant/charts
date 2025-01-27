.PHONY: all

all: ./tiles ./analysis/data ./analysis/output ./analysis/data/Zensus2022_Durchschn_Nettokaltmiete.zip ./analysis/data/ne_110m_admin_0_countries.zip

tiles: ./tiles ./tiles/rent_10km.mbtiles ./tiles/rent_1km.mbtiles ./tiles/rent_100m.mbtiles ./tiles/rent_merged.mbtiles ./tiles/frontend.br.tar.gz

./analysis/data:
	mkdir -p ./analysis/data

./analysis/output:
	mkdir -p ./analysis/tmp

./analysis/data/Zensus2022_Durchschn_Nettokaltmiete.zip:
	curl -C - --retry 5 -L -k -o $@ https://www.zensus2022.de/static/Zensus_Veroeffentlichung/Zensus2022_Durchschn_Nettokaltmiete.zip

./analysis/data/ne_110m_admin_0_countries.zip:
	curl -e 'https://www.naturalearthdata.com/downloads/110m-cultural-vectors/' -C - --retry 5 -L -k -o $@ https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/ne_110m_admin_0_countries.zip

./tiles:
	mkdir -p ./tiles

./tiles/frontend-dev.br.tar.gz:
	curl -C - --retry 5 -L -k -o $@ "https://github.com/versatiles-org/versatiles-frontend/releases/latest/download/frontend-dev.br.tar.gz"

./tiles/countries.mbtiles:
	tippecanoe -n "Countries" -zg -f -o $@ ./analysis/output/countries.geojson

./tiles/rent_10km.mbtiles:
	tippecanoe -n "Avg Rent 10km" --maximum-zoom=6 -f -o $@ ./analysis/output/rent_10km.geojson

./tiles/rent_1km.mbtiles:
	tippecanoe -n "Avg Rent 1km" --minimum-zoom=7 --maximum-zoom=10 -f -o $@ ./analysis/output/rent_1km.geojson

./tiles/rent_100m.mbtiles:
	tippecanoe -n "Avg Rent 100m" --minimum-zoom=11 --maximum-zoom=14 -f -o $@ ./analysis/output/rent_100m.geojson

./tiles/rent_merged.mbtiles: ./tiles/rent_10km.mbtiles ./tiles/rent_1km.mbtiles ./tiles/rent_100m.mbtiles
	tile-join -f -o $@  ./tiles/rent_10km.mbtiles ./tiles/rent_1km.mbtiles ./tiles/rent_100m.mbtiles

./tiles/rent_merged.versatiles: ./tiles/rent_merged.mbtiles
	versatiles convert --compress=brotli ./tiles/rent_merged.mbtiles $@

./tiles/countries.versatiles: ./tiles/countries.mbtiles
	versatiles convert --compress=brotli ./tiles/countries.mbtiles $@