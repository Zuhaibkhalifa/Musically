import React, { useState } from "react";
// componentes are added here
import Player from "./components/player";
import Song from "./components/songs";
//Styles components
import "./styles/app.scss";

//utils
import data from "./util";

function App() {
  //State
  const [Songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(Songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <div>h1</div>
    </div>
  );
}

export default App;
