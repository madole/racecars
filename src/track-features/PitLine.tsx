import React, { useEffect, VFC } from "react";
import { useMap } from "../MapContext";
import pitlaneGeojson from "./data/pitlane.json";

const PitLine: VFC = () => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    map.addSource("pitlane-source", {
      type: "geojson",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: pitlaneGeojson,
    });
    map.addLayer({
      id: "pitlane-line",
      type: "line",
      source: "pitlane-source",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#ccc",
        "line-width": 1,
      },
    });
  }, [map]);

  return null;
};

export default PitLine;
