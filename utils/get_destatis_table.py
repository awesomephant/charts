from urllib import parse
import requests
import xmltodict
import time
import re

def get_destatis_table(token: str, password: str, tables: list[str], start_year: int, attributes: dict, end_year: int = None, silent: bool = False, skip_credential_validation: bool = False) -> str:

	if not end_year:
		end_year = start_year

	base_url = "https://www-genesis.destatis.de/genesisWS"

	# Ensure we have valid credentials
	if not skip_credential_validation:
		if not silent:
			print("Validating credentials... ", end="")
		res = requests.post(f"{base_url}/rest/2020/helloworld/logincheck",
			headers={"Content-Type": "application/x-www-form-urlencoded", "username": token, "password": password},
			json={"sprache": "en"}
		)
		d = res.json()
		if "Fehler" in d["Status"]:
			raise ValueError(d["Status"])
		if not silent:
			print("success")
	
	# Create job
	if not silent:
		print("Creating export job... ", end="")
	job = None
	params = {
		"method": "TabellenExport",
		"kennung": token,
		"passwort": password,
		"namen": ','.join(tables),
		"bereich": "Alle",
		"format": "datencsv",
		"strukturinformationen": "false",
		"komprimieren": "false",
		"transponieren": "false",
		"startjahr": start_year,
		"endjahr": end_year,
		"zeitscheiben": "",
		"regionalmerkmal": "",
		"regionalschluessel": "",
		"stand": "",
		"auftrag": "true",
		"sprache": "de",
	}

	keys = list(attributes.keys())
	for i in range(3):
		key = keys[i] if i < len(keys) else ""
		val = attributes[key] if key in keys else ""
		params[f"sachmerkmal{i + 1 if i > 0 else ""}"] = key
		params[f"sachschluessel{i + 1 if i > 0 else ""}"] = val
	
	url = f"{base_url}/web/ExportService_2010?{parse.urlencode(params)}"

	res = requests.get(url)
	d = xmltodict.parse(res.text)["soapenv:Envelope"]["soapenv:Body"]

	# Throw on error response
	if "soapenv:Fault" in d:
		raise ValueError(d["soapenv:Fault"]["faultcode"], d["soapenv:Fault"]["faultstring"])

	# Ensure tabellen.tabellen is a list
	if isinstance(d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"], dict):
		d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"] = [d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"]]
	
	# Sometimes this returns the result right away even though we
	# asked for a job, so we need to detect that and return early.
	if d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"][0]["returnInfo"]["code"] == "0":
		print("got result, done\n")
		return d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"][0]["tabellenDaten"]

	if d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"][0]["returnInfo"]["code"] == "99":
		job = re.search(f"{tables[0]}_.+$", d["TabellenExportResponse"]["TabellenExportReturn"]["tabellen"]["tabellen"][0]["returnInfo"]["inhalt"]).group(0)
		print(f"success (job: {job})")

	if not job:
		print(f"could not find job ID\n{d}")
		return
		
	# Poll to see if the job is done
	backoff = 30
	params = {
		"method": "ErgebnisExport",
		"kennung": token,
		"passwort": password,
		"name": job,
		"bereich": "Meine",
		"format": "datencsv",
		"komprimieren": "false",
		"sprache": "de",
	}

	url = f"{base_url}/web/ExportService_2010?{parse.urlencode(params)}"

	while True:
		time.sleep(backoff)
		backoff *= 2

		# The government's job list endpoint is broken so
		# we just poll for the result directly
		print("Polling for job results... ", end="")
		res = requests.get(url)
		d = xmltodict.parse(res.text)["soapenv:Envelope"]["soapenv:Body"]

		if d["ErgebnisExportResponse"]["ErgebnisExportReturn"]["returnInfo"]["code"] != "0":
			print(f"not done, retrying in {backoff}s")
			continue

		print("done")
		return d["ErgebnisExportResponse"]["ErgebnisExportReturn"]["tabelle"]["tabellenDaten"]
	

# d = get_destatis_table(
# 	token="43d8642e545a46658eb3ed4300aa5eed",
# 	password="X5yH_Hvgwr9bopmXwYYX",
# 	tables=["51000-0009"],
# 	start_year=2024,
# 	attributes={
# 		"STLAH": "STLAH400", # destination country code
# 		"WAM6": "WA010121,WA010129" # product code
# 		}
# 	)

# print(d)