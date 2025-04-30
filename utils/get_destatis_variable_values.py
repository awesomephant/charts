from urllib import parse
import requests

def get_destatis_variable_values(var: str, token: str):
	params = {
		"username": token,
		"name": var,
		"selection": "*",
		"area": "all",
		"searchcriterion":"code",
		"sortcriterion":"code",
		"language": "en",
		"pagelength": 25000 # The government forgot to implement a page parameter so we just ask for the max number of records and hope for the best
	}
	url = f"https://www-genesis.destatis.de/genesisWS/rest/2020/catalogue/values2variable?{parse.urlencode(params)}"
	print(f"Fetching {url}")
	res = requests.get(url)
	return res.text