import react from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  libraryStatus,
  setSongs,
  isPlaying,
  audioRef,
  songs,
  setCurrentSong,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            id={song.id}
            key={song.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
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
