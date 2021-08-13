import React, { useEffect, useRef } from "react";
import { useMap } from "./MapContext";
import { LngLat, Marker } from "mapbox-gl";
import "./Car.css";

export interface CarProps {
  location: LngLat;
  color: string;
  number: number;
}

const Car: React.FC<CarProps> = (props) => {
  const { location, color, number } = props;
  const map = useMap();
  const carRef = useRef<Marker | null>(null);

  useEffect(() => {
    if (!map) return;
    if (carRef.current) {
      carRef.current.setLngLat(location);
    } else {
      const carDiv = document.createElement("div");
      carDiv.className = "car";
      carDiv.style.backgroundColor = color;
      carDiv.textContent = number.toString();
      carRef.current = new Marker(carDiv).setLngLat(location).addTo(map);
    }
  }, [map, location]);

  return null;
};

export default Car;
