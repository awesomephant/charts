# Source: rick debbout / https://stackoverflow.com/a/70387141

import shapely as shp
import geopandas as gp

def remove_interiors(poly):
    if poly.interiors:
        return shp.geometry.Polygon(list(poly.exterior.coords))
    else:
        return poly

def pop_largest(gs):
    geoms = [g.area for g in gs]
    return gs.pop(geoms.index(max(geoms)))

def close_holes(geom):
    if isinstance(geom, shp.geometry.MultiPolygon):
        ser = gp.GeoSeries([remove_interiors(g) for g in geom.geoms])
        big = pop_largest(ser)
        outers = ser.loc[~ser.within(big)].tolist()
        if outers:
            return shp.geometry.MultiPolygon([big] + outers)
        return shp.geometry.Polygon(big)
    if isinstance(geom, shp.geometry.Polygon):
        return remove_interiors(geom)