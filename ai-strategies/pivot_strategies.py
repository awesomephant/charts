import pandas as pd

source = pd.read_csv("./data/national-strategies-on-artificial-intelligence.csv")
grouped = (
    source.pivot(index=["Entity", "Code"], columns=["Year"], values="Status")
    .add_prefix("status_")
    .reset_index()
)
grouped.to_csv("./tmp/strategies-pivoted.csv")
