import React, { useState, useRef,useEffect } from "react";

const Audio_play = (props) => {
 
  
  const [source, setSource] = useState(["C:/Users/DELL/music/Telegram/Another Love - Tom Odell.mp3"]);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const previousSource = useRef(null); // Pour stocker la source précédente

  // Combined event listener for audio_change and audio_pause
  const handleAudioEvent = async (event) => {
   
      if (event.type === 'audio_change') {
        const filePath = 'file:///' + event.detail.message.file_path.replace(/\\/g, '/');
        setSource([filePath]);
        props.audio.setAudio((current)=>{
          return {...current,
                  duration:event.detail.message.duration,
                  volume:audioRef.current.volume,
                  isPlay:true
                
                }
        })
        handlePlayPause(); // Play or pause based on current state
      } else if (event.type === 'audio_pause') {
          if(audioRef.current.paused) {
            audioRef.current.play()
            props.audio.setAudio((current)=>{
              return {...current,
                      duration:audioRef.current.duration,
                      volume:audioRef.current.volume,
                      isPlay:true
                    
                    }
            })
          }else{
            audioRef.current.pause();
            props.audio.setAudio((current)=>{
              return {...current,
                      duration:audioRef.current.duration,
                      volume:audioRef.current.volume,
                      isPlay:false
                    
                    }
            })

          }
        
      
    }else if(event.type === 'change_time'){
       audioRef.current.currentTime = event.detail.message.time

    }else if(event.type ==='change_volume'){
      audioRef.current.volume = event.detail.message.volume/100
    }
  }
  useEffect(() => {
    document.addEventListener('audio_change', handleAudioEvent);
    document.addEventListener('audio_pause', handleAudioEvent);
    document.addEventListener('change_time',handleAudioEvent)
    document.addEventListener('change_volume',handleAudioEvent)

    return () => {
      document.removeEventListener('audio_change', handleAudioEvent);
      document.removeEventListener('audio_pause', handleAudioEvent);
      document.removeEventListener('change_time', handleAudioEvent);
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
      audioRef.current.volume = 0.5;
    }
  }, [source, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const ended=()=>{
    props.audio.setAudio((current)=>{
      return {...current,
              duration:audioRef.current.duration,
              isPlay:false
            
            }
    })
  }

const play=()=>setInterval(() => {

    if(props.audio.audio){
        props.audio.setAudio((current)=>{
          return {...current,
                  duration:audioRef.current.duration,
                  duration_played:audioRef.current.currentTime,
                 
                }
        })

    }
  
}, 1000);


const pause=()=>{
    clearInterval(play())
}


  return (
    <div className="hidden">
      <audio
        ref={audioRef}
        id="player_audio"
        controls
        src={source[0]}
        onPlay={play}
        onPause={pause}
        onEnded={ended}
        
      />
    </div>
  );
};
export default Audio_play;