import React, { useState, useRef } from "react";

const AudioPlayer = ({ audioData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>Audio Player</h1>

      <audio ref={audioRef} controls>
        <source src={`data:audio/mp3;base64,${audioData}`}/>
        Your browser does not support the audio tag.
      </audio>

      <button onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioPlayer;
