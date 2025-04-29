def try_cache(cache_path: str, fetch_fn):
	try:
		with open(cache_path, "r") as f:
			print(f"Loaded cached data from {cache_path}")
			return f.read()
	except FileNotFoundError:	
		print(f"Cache miss, fetching...")
		text = fetch_fn()
		with open(cache_path, "w") as f:
			f.write(text)
		return text