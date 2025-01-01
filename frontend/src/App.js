import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Frame from './components/frame';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albums from './components/myMusicPages/albums' 
import Artists from './components/myMusicPages/artists';
import Singles from './components/myMusicPages/singles';
function App() {
  return (

    <div className="flex flex-col h-screen App z-20">
    {/* <!-- Section principale en haut  */}
    <div className="flex flex-1 "style={{overflow:"hidden"}}>
      {/* <!-- Premier élément --> */}
      <Sidebar  className="bg-gray-200 "/>  
      {/* <!-- Deuxième élément --> */}
      <div  style={{width:"96%"}}>
       <Frame/>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Singles />} />
              <Route path="Singles" element={<Singles />} />
              <Route path="Artists" element={<Artists/>} />
              <Route path="Albums" element={<Albums />} />
            </Route>
          </Routes>
    </BrowserRouter>
      </div>
    </div>
  
    {/* <!-- Barre fixe en bas --> */}
    <div className="h-24 bg-gray-800 text-white py-3 px-6">
      <h3 className="text-center">Élément 3 (Fixe en bas)</h3>
    </div>
  </div>
  );
}

export default App;
