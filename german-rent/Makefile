.PHONY: all

all: ./analysis/data ./analysis/tmp ./analysis/data/Zensus2022_Durchschn_Nettokaltmiete.zip ./analysis/data/Zensus2022_Durchschn_Nettokaltmiete ./analysis/data/ne_110m_admin_0_countries.zip

./analysis/data:
	mkdir -p ./analysis/data

./analysis/tmp:
	mkdir -p ./analysis/tmp

./analysis/data/Zensus2022_Durchschn_Nettokaltmiete.zip:
	curl -C - --retry 5 -L -k -o $@ https://www.zensus2022.de/static/Zensus_Veroeffentlichung/Zensus2022_Durchschn_Nettokaltmiete.zip

./analysis/data/ne_110m_admin_0_countries.zip:
	curl -e 'https://www.naturalearthdata.com/downloads/110m-cultural-vectors/' -C - --retry 5 -L -k -o $@ https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/ne_110m_admin_0_countries.zip