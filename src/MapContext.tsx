import React, { useContext } from "react";
import mapboxgl from "mapbox-gl";

export const MapContext = React.createContext<mapboxgl.Map | undefined>(
  undefined
);

export const useMap = (): mapboxgl.Map | undefined => {
  return useContext(MapContext);
};
