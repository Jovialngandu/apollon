import React from "react";
const MusicRow=(props)=>{

    const getMusic=()=> emitEvent('audio_change', { message: props.data });  

    return(
            < >
                    
                    <div onClick={getMusic} className={(props.pair)?"grid grid-cols-7 items-center px-4 py-2 hover:bg-blue-50 transition bg-gray-200":"grid grid-cols-7 items-center px-4 py-2 hover:bg-blue-50 transition "}  style={{cursor:'pointer'}}>
                    {/* <!-- Checkbox --> */}
                    {/* <div className="col-span-1 flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"/>
                    </div> */}
                    {/* <!-- Titre --> */}
                    <div className="col-span-2 flex items-center justify-between">
                    <p className="text-sm font-medium truncate">{props.data.file_name}</p>
                    {/* <!-- Play Button --> */}
                    <button className="p-1 text-gray-500 hover:text-blue-600 focus:outline-none" title="Lire">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3v18l15-9L5 3z" />
                        </svg>
                    </button>
                    </div>
                    {/* <!-- Album --> */}
                    <div className="col-span-1">
                    <p className="text-sm text-gray-600 truncate">{(props.data.album_name)?props.data.album_name:'Album inconnu'}</p>
                    </div>
                    {/* <!-- Artiste --> */}
                    <div className="col-span-1">
                    <p className="text-sm text-gray-600 truncate">&nbsp;&nbsp;&nbsp;{(props.data.artist_name)?JSON.parse(props.data.artist_name)[0]:'Artiste inconnu'}</p>
                    </div>
                    {/* <!-- Année --> */}
                    <div className="col-span-1">
                    <p className="text-sm text-gray-600 truncate">&nbsp;&nbsp;&nbsp;{(props.data.year)?props.data.year:''}</p>
                    </div>
                    {/* <!-- Genre --> */}
                    <div className="col-span-1 flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{(props.data.genre)?JSON.parse(props.data.genre)[0]:'Genre inconnu'}</p>
                    {/* <!-- Add to Playlist --> */}
                    <div className="text-sm ">
                         {Math.floor(props.data.duration/60)+':'+(Math.floor(((props.data.duration/60)%1)*60))} 
                    </div>
                   </div>
                </div>
            </>
    );
}
export default MusicRow;