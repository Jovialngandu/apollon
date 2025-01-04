import React, { useState, useRef,useEffect } from "react";

const Audio_play = (props) => {
 
  
  const [source, setSource] = useState(["C:/Users/DELL/music/tets/Pray for Me (sped up+reverb) tiktok version_128.mp3"]);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const previousSource = useRef(null); // Pour stocker la source précédente

  // Combined event listener for audio_change and audio_pause
  const handleAudioEvent = async (event) => {
      if (event.type === 'audio_change') {
        const filePath = 'file:///' + event.detail.message.file_path.replace(/\\/g, '/');
        setSource([filePath]);
        props.audio.setAudio(true)
        handlePlayPause(); // Play or pause based on current state
      } else if (event.type === 'audio_pause') {
          if(audioRef.current.paused) {
            audioRef.current.play()
            props.audio.setAudio(true)
          }else{
            audioRef.current.pause();
            props.audio.setAudio(false)

          }
        
      
    };
  }
  useEffect(() => {
    document.addEventListener('audio_change', handleAudioEvent);
    document.addEventListener('audio_pause', handleAudioEvent);

    return () => {
      document.removeEventListener('audio_change', handleAudioEvent);
      document.removeEventListener('audio_pause', handleAudioEvent);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.load();
        audioRef.current.play();
      } else {
        audioRef.current.currentTime = 0; // Reset playback time when paused
      }
      audioRef.current.volume = 1;
    }
  }, [source, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hidden">
      <audio
        ref={audioRef}
        id="player_audio"
        controls
        src={source[0]}
      />
    </div>
  );
};
export default Audio_play;