import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ setSongs, isPlaying, audioRef, songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-Song">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
