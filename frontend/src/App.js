import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';

function App() {
  return (

    <div className="flex flex-col h-screen App z-20">
    {/* <!-- Section principale en haut  */}
    <div className="flex flex-1 "style={{overflow:"hidden"}}>
      {/* <!-- Premier élément --> */}
       
      <Sidebar  className="bg-gray-200 "/>
      
  
      {/* <!-- Deuxième élément --> */}
      <div  style={{width:"96%"}}>
       <Header/>
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
