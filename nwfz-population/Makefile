.PHONY: all
all: ./output ./tmp ./tmp/WPP2022_TotalPopulationBySex.zip ./tmp/WPP2022_TotalPopulationBySex.csv

./output:
	mkdir output

./tmp:
	mkdir tmp

./tmp/WPP2022_TotalPopulationBySex.zip:
	curl -L -k -o $@ "https://population.un.org/wpp/Download/Files/1_Indicators%20(Standard)/CSV_FILES/WPP2022_TotalPopulationBySex.zip"

./tmp/WPP2022_TotalPopulationBySex.csv:
	unzip -q -o -d tmp ./tmp/WPP2022_TotalPopulationBySex.zip

./data/nwfz_states.csv:
	python concat_treaty_members.csv