import React, { useEffect, VFC } from "react";
import { useMap } from "../MapContext";
import trackGeojson from "./data/mount-panorama.json";

const TrackLine: VFC = () => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    map.addSource("track", {
      type: "geojson",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: trackGeojson,
    });
    map.addLayer({
      id: "track-line",
      type: "line",
      source: "track",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#ccc",
        "line-width": 3,
      },
    });
  }, [map]);

  return null;
};

export default TrackLine;
