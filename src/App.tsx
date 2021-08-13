import React, { FC, useState } from "react";
import "./App.css";
import TrackMap from "./TrackMap";
import TrackLine from "./track-features/TrackLine";
import PitLine from "./track-features/PitLine";
import StartLine from "./track-features/StartLine";
import Cars from "./Cars";

const App: FC = () => {
  const [showTerrain, setShowTerrain] = useState(true);
  return (
    <div className="App">
      <button
        className="show-terrain-button"
        onClick={() => setShowTerrain(!showTerrain)}
      >
        {showTerrain ? "2D" : "3D"} Mode
      </button>
      <TrackMap showTerrain={showTerrain} key={JSON.stringify(showTerrain)}>
        <PitLine />
        <TrackLine />
        <StartLine />
        <Cars />
      </TrackMap>
    </div>
  );
};

export default App;
