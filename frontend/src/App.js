import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Frame from './components/frame';
import Albums from './components/myMusicPages/albums' 
import Artists from './components/myMusicPages/artists';
import Singles from './components/myMusicPages/singles';
import Player from './components/player';
import AdderpathModal from './components/modal';
import Audio_play from './components/audio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [audio,setAudio]=useState({isplay:false})
  
  return (
    <>

       <Audio_play audio={{audio,setAudio}}/>
      <div className="flex flex-col h-screen App z-20">
         {/* <!-- Section principale en haut  */}
        <div className="flex flex-1 "style={{overflow:"hidden"}}>
          {/* <!-- Premier élément --> */}
          <Sidebar  className="bg-gray-200 "/>  
          {/* <!-- Deuxième élément --> */}
          <div  style={{width:"96%"}} className=''>
            <Frame/>
            
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Header/>}>
                    <Route index element={<Singles />} />
                    <Route path="Singles" element={<Singles audio={{audio,setAudio}}/>} />
                    <Route path="Artists" element={<Artists/>} />
                    <Route path="Albums" element={<Albums />} />
                  </Route>
                </Routes>
            </BrowserRouter>
        
          </div>
          
        </div>
      
        {/* <!-- Barre fixe en bas --> */}
        <div className="h-40 bg-gray-800 text-white py-3 px-6 border ">
          <Player audio={{audio,setAudio}}/>
        </div>
    </div>
    <AdderpathModal/>
  </>
  );
}

export default App;
