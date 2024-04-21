from shapely.geometry import Polygon

def bounds_to_polygon(bounds):
	x1,y1,x2,y2 = bounds
	return (
		Polygon((
			(x1,y1),
			(x2,y1),
			(x2,y2),
			(x1,y2),
			(x1,y1),
		))
	)