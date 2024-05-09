import geopandas as gp
import pandas as pd
import random
import math
import copy
from shapely import STRtree
from shapely.geometry import Point, Polygon
from PIL import ImageFont
from collections import namedtuple

LabelPosition = namedtuple("LabelPosition", "x y cost")

label_positions = [
	LabelPosition("top", "right", 0),
	LabelPosition("top", "left", 1),
	LabelPosition("middle", "right", 1),
	LabelPosition("middle", "left", 1),
	LabelPosition("bottom", "right", 1),
	LabelPosition("bottom", "left", 2),
	LabelPosition("top", "center", 3),
	LabelPosition("bottom", "center", 4),
]

label_margin = .5;

def pop_to_font_size(pop: int):
	size = 1.2;
	if (pop > 10000):
		size = 1.5
	if (pop > 45000):
		size = 1.85
	return size

def rect_to_points(bounds):
	x1,y1,x2,y2 = bounds
	return (
		(x1,y1),
		(x2,y1),
		(x2,y2),
		(x1,y2),
		(x1,y1),
	)

def get_label_coords(point, label_text: str, label_pos: int, font_size: float):
	# Given a point, text, font, and label_position, return [x1,y1,x2,y2]
	x1,y1,x2,y2 = (0,)*4

	label_vertical = label_positions[label_pos].x
	label_horizontal = label_positions[label_pos].y
	
	# font = ImageFont.truetype("../fonts/Merriweather/Merriweather-Regular.ttf", size=font_size)
	# bbox = font.getbbox(label_text)
	# width = font.getlength(label_text)
	width = len(label_text) * 2
	bbox = (0,0,5,width)

	height = (bbox[3]) * .9

	if (label_horizontal == "left"):
		x1 = point[0] - label_margin - width
		x2 = x1 + width		
	if (label_horizontal == "right"):
		x1 = point[0] + label_margin
		x2 = x1 + width
	if (label_horizontal == "center"):
		x1 = point[0] - width / 2
		x2 = x1 + width
	if (label_vertical == "top"):
		y1 = point[1] + label_margin
		y2 = y1 + height
	if (label_vertical == "middle"):
		y1 = point[1] - height / 2
		y2 = y1 + height
	if (label_vertical == "bottom"):
		y1 = point[1] - label_margin - height
		y2 = y1 + height

	return (x1,y1,x2,y2) 

def get_temperature(t):
	# Given t, return the current temperatue in the annealing schedule (exponential decay)
	return (.99 ** t) * 1e7

def label_align_to_text_align(label_align: str):
	if (label_align == "left"):
		return "right"
	if (label_align == "right"):
		return "left"
	if (label_align == "center"):
		return "center"
	return False

def get_neighbour(s):
	# Returns a neighbouring state by moving a single label
	state = copy.deepcopy(s)

	i = random.randrange(0, len(state))
	label_choices = [pos for pos in list(range(len(label_positions))) if pos != state[i]["label_pos"]]
	label_pos = random.choice(label_choices)

	state[i]["label_pos"] = label_pos
	state[i]["label_pos_v"] = label_positions[label_pos].x
	state[i]["label_pos_h"] = label_positions[label_pos].y
	
	state[i]["label_coords"] = get_label_coords(
		state[i]["feature_coords"],
		state[i]["label_text"],
		state[i]["label_pos"],
		state[i]["font_size"])

	return state

def get_energy(state) -> float:
	# Compute the energy of a given state
	e = 0;
	geoms = [Polygon(rect_to_points(point["label_coords"])).buffer(1) for point in state]
	tree = STRtree(geoms)

	for i, point in enumerate(state):
		geom = Polygon(rect_to_points(point["label_coords"]))
		lp = label_positions[point["label_pos"]]
		# Label positions cost
		e += lp.cost
		# Overlap cost
		e += len(tree.query(geom, predicate="intersects")) * 10 - 10
	return e

def get_acceptance_prob(e, e_new, temperature) -> float:
	if (e_new < e):
		return 1
	else:
		return math.e ** (-1 * (e_new - e) / temperature)

def place_labels(
		gdf: gp.GeoDataFrame,
		name_field: str = "name",
		population_field : str = "population",
		feature_class_field : str = "featurecla",
		time_limit: int = 3000) -> gp.GeoDataFrame:

	# Generate random initial state
	state = []
	for i, obj in gdf.iterrows():
		label_text = obj[name_field]
		font_size = pop_to_font_size(obj[population_field])
		label_pos = random.randrange(len(label_positions))
		feature_coords = (obj.geometry.x, obj.geometry.y)

		state.append({
		"feature_coords": feature_coords,
		"feature_class": obj[feature_class_field],
		"label_text": label_text,
		"font_size": font_size,
		"label_pos": label_pos,
		"label_pos_v": label_positions[label_pos][0],
		"label_pos_h": label_positions[label_pos][1],
		"text_align": "left",
		"label_coords": get_label_coords(
			feature_coords,
			label_text,
			label_pos,
			font_size
		)})
	t = 0

	# Anneal
	while t < time_limit:
		temperature = get_temperature(t)
		state_new = get_neighbour(state)
		e = get_energy(state)
		e_new = get_energy(state_new)
		if (get_acceptance_prob(e, e_new, temperature) > random.uniform(0,1)):
			state = state_new
		if (t % 500 == 0):
			print(f"step: {t}/{time_limit} t: {temperature} e: {e}")
		t += 1;
	
	# Cull overlapping labels
 	# Build output GDF
	output_gdf = gp.GeoDataFrame(
		data={
			"font_size": [l["font_size"] for l in state],
			"label_text": [l["label_text"] for l in state],
			"label_position_horizontal": [l["label_pos_h"] for l in state],
			"label_position_vertical": [l["label_pos_v"] for l in state],
			"text_align_horizontal": [l["text_align"] for l in state],
			"feature_class": [l["feature_class"] for l in state],
			# "geometry": [Polygon(rect_to_points(l["label_coords"])) for l in state]
			"geometry": [Point(l["feature_coords"]) for l in state]
		},
		geometry="geometry",
		crs='EPSG:4326'
	)

	return output_gdf

bounding_box = (88,7,105,30)
populated_places_raw = gp.read_file('../regions/tmp/ne_10m_populated_places_simple/ne_10m_populated_places_simple.shp')
populated_places = populated_places_raw.set_crs(epsg=4326)

capitals = populated_places.loc[
    (populated_places["min_zoom"] < 5)
    & (populated_places["geometry"].x > bounding_box[0])
    & (populated_places["geometry"].x < bounding_box[2])
    & (populated_places["geometry"].y > bounding_box[1])
    & (populated_places["geometry"].y < bounding_box[3])
    ].copy()

label_points = place_labels(capitals, population_field="pop_max", time_limit=1000)