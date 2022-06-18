import React from "react";

const LibrarySong = ({
  isPlaying,
  audioRef,
  song,
  songs,
  setCurrentSong,
  active,
  id,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    // check if it is playing

    audioRef.current.play();
    if (isPlaying) {
      const PlayPromise = audioRef.current.play();
      if (PlayPromise !== undefined) {
        PlayPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
  };

  return (
    <div onClick={songSelectHandler} className="library-Songs">
      <img src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
