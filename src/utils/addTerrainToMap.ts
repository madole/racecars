import mapbox from "mapbox-gl";

export function addTerrainToMap(mapboxMap: mapbox.Map) {
  mapboxMap.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 20,
  });
  mapboxMap.addSource("hillshade-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 20,
  });
  // add the DEM source as a terrain layer with exaggerated height
  mapboxMap.setTerrain({ source: "mapbox-dem", exaggeration: 2 });
  mapboxMap.addLayer({
    id: "hillshading",
    source: "hillshade-dem",
    type: "hillshade",
    paint: {
      "hillshade-exaggeration": 1,
      "hillshade-highlight-color": "#FFF",
      "hillshade-illumination-anchor": "viewport",
    },
  });
}
