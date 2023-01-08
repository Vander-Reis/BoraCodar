import { MusicControls } from './components/MusicControls';
import { ContainerCard, ContentInfo, ContainerImg, ContainerDuration } from './index';
import { useEffect, useRef, useState } from 'react';
import { musics } from './musics';
import * as Progress from '@radix-ui/react-progress';
export function App() {

  const [ trankIndex, setTrackIndex ] = useState(0);
  const [isPlaying, setIsPlaying ] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const isReady = useRef(false);
  const intervalRef = useRef<any>();

  const { name, band, imageSrc, musicSrc} = musics[trankIndex];
  const newLegnthMusic = musics.length - 1;

  const audioRef = useRef(new Audio(musicSrc));

  const { duration } = audioRef.current;
 
  function convertToMinutes(timer: any) {
    let minutes = Math.floor((timer % 3600) / 60 );
    let seconds = Math.floor(timer % 60);

    minutes = Number(minutes < 10 ? '0' + minutes : minutes);      
    seconds = Number(seconds < 10 ? '0' + seconds : seconds);

    return minutes + ":" + seconds
  }

  function handleStartMusic() {
    setIsPlaying(true);
  }

  function handlePausetMusic() {
    setIsPlaying(false);
  }

  function handleNextMusic() {

    if(trankIndex < newLegnthMusic) {
      setTrackIndex(trankIndex + 1);
      setIsPlaying(true);
      convertToMinutes(duration);
    }
    else {
      setTrackIndex(0)
      setIsPlaying(true);
    }
    
  }

  function handleBackMusic() {
    if(trankIndex > 0) {
      setTrackIndex(trankIndex - 1);  
      setIsPlaying(true);
    }
  }

  function startTimer() {
    clearInterval(intervalRef.current);

	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      handleNextMusic();
	    } else {
	      setTrackProgress(audioRef.current.currentTime);
	    }
	  }, 1000);
  };

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
      convertToMinutes(duration);

    }
  }, []);

  useEffect(() => {
    if(isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = (new Audio(musicSrc));
    setTrackProgress(audioRef.current.currentTime);

    if(isReady.current) {
      audioRef.current.play();
      startTimer();
      convertToMinutes(duration);
    } else {
      isReady.current = true;
    } 
    
  }, [trankIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setTrackProgress(trackProgress), 500);
    return () => clearTimeout(timer);
  }, [trackProgress])

  return (
    <ContainerCard>
      <ContentInfo>
        <ContainerImg>
          <img src={imageSrc} />
        </ContainerImg>
        <div className='info'>
          <h2>{name}</h2>
          <p>{band}</p>
        </div>
      </ContentInfo>

      <MusicControls
        play={handleStartMusic}
        isPlaying={isPlaying}
        pause={handlePausetMusic}
        next={handleNextMusic}
        back={handleBackMusic}
      />

      <Progress.Root className="ProgressRoot" value={trackProgress}>
        <Progress.Indicator
          className="ProgressIndicator"
          style={{ transform: `translateX(-${100 - (trackProgress / duration) * 100}%)` }}
        />
      </Progress.Root>

      <ContainerDuration>
        <span>{duration >= 0 ? convertToMinutes(duration) : '0'}</span>
        <span>{convertToMinutes(trackProgress)}</span>
      </ContainerDuration>
    </ContainerCard>
  )
}


