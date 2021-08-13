import React, { useState } from "react";
import { LngLat } from "mapbox-gl";
import Car from "./Car";
import trackGeojson from "./track-features/data/mount-panorama.json";
import useInterval from "./hooks/useInterval";

const coords = trackGeojson.features[0].geometry.coordinates;
console.log(coords.length);

const CARS = [
  {
    number: 1,
    color: "red",
    location: 20,
  },
  {
    number: 2,
    color: "skyblue",
    location: 40,
  },
  {
    number: 3,
    color: "lightgreen",
    location: 60,
  },
  {
    number: 4,
    color: "hotpink",
    location: 100,
  },
  {
    number: 5,
    color: "yellow",
    location: 130,
  },
];

const Cars: React.FC = () => {
  const [cars, setCars] = useState<typeof CARS>(CARS);
  useInterval(() => {
    setCars((oldCars) =>
      oldCars.map((car) => ({
        ...car,
        location: car.location === coords.length - 1 ? 0 : car.location + 1,
      }))
    );
  }, 200);

  return (
    <>
      {cars.map((car) => (
        <Car
          key={car.number}
          number={car.number}
          color={car.color}
          location={
            new LngLat(coords[car.location][0], coords[car.location][1])
          }
        />
      ))}
    </>
  );
};

export default Cars;
