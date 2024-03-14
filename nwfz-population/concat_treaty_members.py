import pandas as pd

files = pd.DataFrame(
[
	{"in_force": 1967, "name": "tlatelolco", "file": "./tmp/tlatelolco_members.csv"},
	{"in_force": 1986, "name": "rarotonga", "file": "./tmp/rarotonga_members.csv"},
	{"in_force": 1997, "name": "bangkok", "file": "./tmp/bangkok_members.csv"},
	{"in_force": 2009, "name": "pelindaba", "file": "./tmp/pelindaba_members.csv"},
	{"in_force": 2009, "name": "semipalatinsk", "file": "./tmp/semipalatinsk_members.csv"},
]
)

tm = pd.DataFrame(columns=["iso3", "treaty", "in_force"])

for i, f in files.iterrows():
	treaty = pd.read_csv(f["file"]).rename(columns={"treaty_status": "status", "code": "iso3"})
	treaty["treaty"] = f["name"]
	treaty["in_force"] = f["in_force"]
	tm=pd.concat([tm, treaty[["iso3", "treaty", "in_force"]]])

tm.to_csv("./data/nwfz_states.csv", index=False)
