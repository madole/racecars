import React, { FC, useEffect, useState } from "react";
import mapbox, { LngLat } from "mapbox-gl";
import "./TrackMap.css";
import { MapContext } from "./MapContext";
import "mapbox-gl/dist/mapbox-gl.css";
import { addTerrainToMap } from "./utils/addTerrainToMap";

const CENTER_OF_MOUNT_PANORAMA_TRACK = new LngLat(149.554, -33.44802);
const STARTING_ZOOM_LEVEL = 15;
const STARTING_MAP_ROTATION = -85;

mapbox.accessToken =
  "pk.eyJ1IjoibWFkb2xlIiwiYSI6ImNrczlxaWN2NDB3N24yd25vd2x2NTcxZGgifQ.JO_eEG0AiDURPN3ApMyauQ";

interface Props {
  showTerrain: boolean;
}

const TrackMap: FC<Props> = (props) => {
  const { children, showTerrain = false } = props;
  const [map, setMap] = useState<mapbox.Map>();

  useEffect(() => {
    const mapboxMap = new mapbox.Map({
      container: "map",
      style: {
        version: 8,
        layers: [
          {
            id: "test",
            type: "background",
            paint: {
              "background-color": "#001728",
            },
          },
        ],
        sources: {},
      },
      center: CENTER_OF_MOUNT_PANORAMA_TRACK, // starting position [lng, lat]
      zoom: STARTING_ZOOM_LEVEL,
      bearing: STARTING_MAP_ROTATION,
      pitch: showTerrain ? 60 : 0,
    });

    mapboxMap.on("style.load", () => {
      setMap(mapboxMap);
      if (showTerrain) {
        addTerrainToMap(mapboxMap);
      }
    });

    return () => {
      setMap(undefined);
    };
  }, [showTerrain]);

  return (
    <MapContext.Provider value={map}>
      <div id="map">{children}</div>;
    </MapContext.Provider>
  );
};

export default TrackMap;
