import React, { useState, useRef,useEffect} from "react";

const Audio_play =(props)=>{

    const[source,setSource]=useState("C:/Users/DELL/music/tets/Pray for Me (sped up+reverb) tiktok version_128.mp3");
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    document.addEventListener('audio_change',async(new_audio)=>{

        const filePath='file:///'+new_audio.detail.message.file_path.replace(/\\/g,'/')
        setSource(filePath)
        handlePlayPause()
        
    })

    useEffect(() => {
        if (audioRef.current) {
           
          if (isPlaying) {
            audioRef.current.load();
            audioRef.current.play();
           
       
          } else {
            audioRef.current.currentTime = 0
            audioRef.current.play();
           
          }
          audioRef.current.volume=0.1;
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
            src={source}
        />
        </div>
    );
}

export default Audio_play;