.PHONY: all
all: ./output ./tmp ./tmp/strategies_pivoted.csv ./tmp/ne_50m_admin_0_countries.geojson maps

./output:
    mkdir output

./tmp:
    mkdir tmp

./tmp/ne_50m_admin_0_countries.geojson:
	curl -L -k -o $@ https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson

./tmp/strategies_pivoted.csv:
	python pivot_strategies.py

color_released=\#055fb5
color_in_development=\#a1b5c9
color_base=\#fefefe
color_water=\#f7f7f7

maps:
	for year in 2017 2018 2019 2020 2021 2022 ; do \
		printf "\n Generating map for $$year...\n"; \
		mapshaper ./tmp/ne_50m_admin_0_countries.geojson name=base\
		    -filter-fields name,adm0_a3, \
    		-snap \
    		-clean rewind \
    		-simplify visvalingam percentage=0.1 weighting=0.7 stats \
			-join source=base ./tmp/strategies-pivoted.csv keys=adm0_a3,Code  \
    		-colorizer name=calcFill colors=${color_released},${color_in_development},${color_base} categories='Released,In development,Not released'\
    		-style fill="calcFill(status_$$year)" stroke="black" stroke-width=".5" target=base\
			-style fill="none" stroke="gray" stroke-width=0.25 where="name === 'Antarctica'" target=base\
    		-dissolve target=base + name=coastline\
    		-clip bbox="-180,-90,180,90" target=*\
    		-proj +proj=natearth\
    		-graticule polygon \
    		-style fill=${color_water} \
    		-o ./output/ai_strategies_$$year.svg format=svg target=polygon,graticule,base ;\
	done