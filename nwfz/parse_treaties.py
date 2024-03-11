import pandas as pd

def get_participant_state(events):
	return events[-1]["type"]

treaties = pd.read_json("./data/treaties.json")
tr = treaties.loc[treaties["name"].isin(["pelindaba"])]

for index, t in tr.iterrows():
	participants = pd.DataFrame(t.participants)
	participants["state"] = participants["events"].apply(func=lambda x: get_participant_state(x))
	result = participants[["country", "state"]].rename(columns={"country": "code", "state": "treaty_status"})
	result.to_csv("./data/" + t["name"] + "_members.csv", index=False)
