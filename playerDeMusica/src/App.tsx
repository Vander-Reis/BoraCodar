import { musics } from "./musics";
import { useState, useRef, useEffect } from 'react';


export function App() {

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  const { name, src } = musics[trackIndex];

  const audioRef = useRef( new Audio(src));

  function handleStart() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

useEffect(() => {
  if (isPlaying) {
    audioRef.current.play();
    console.log(audioRef.current.duration)
  } else {
    audioRef.current.pause();
  }
}, [isPlaying]);


  return (
    <div className="App">
      {isPlaying === false ? <button onClick={handleStart}>Começar tocar</button> :
      <button onClick={handlePause}>Pausar musica</button>}
    </div>
  )
}

