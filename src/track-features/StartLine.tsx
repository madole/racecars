import React, { useEffect, VFC } from "react";
import { useMap } from "../MapContext";
import startlineGeojson from "./data/start-line.json";

const Startline: VFC = () => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    map.addSource("startline-source", {
      type: "geojson",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: startlineGeojson,
    });
    map.addLayer({
      id: "startline-line",
      type: "line",
      source: "startline-source",
      layout: {
        "line-cap": "round",
      },
      paint: {
        "line-color": "#FFF",
        "line-width": 4,
        "line-dasharray": [2, 2],
      },
    });
  }, [map]);

  return null;
};

export default Startline;
