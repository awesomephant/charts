import overpy
import geopandas as gp
from shapely.geometry import shape, Polygon,LineString, MultiPolygon
from shapely.ops import polygonize

def rel_to_multipolygon(data, rel):
	# Trandsforms single relation to  MultiPolygon
	lines = []

	for rel_way in list(filter(lambda x: isinstance(x, overpy.RelationWay),rel.members)):
		way = data.get_way(rel_way.ref)
		points = [(n.lon, n.lat) for n in way.get_nodes(resolve_missing=True)]
		lines.append(LineString(points))

	return MultiPolygon(polygonize(lines))