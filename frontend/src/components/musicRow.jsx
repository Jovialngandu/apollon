import React from "react";
const MusicRow=(props)=>{

    return(
            <>
                    
                    <div class={(props.pair)?"grid grid-cols-7 items-center px-4 py-2 hover:bg-blue-50 transition bg-gray-200":"grid grid-cols-7 items-center px-4 py-2 hover:bg-blue-50 transition "}  >
                    {/* <!-- Checkbox --> */}
                    <div class="col-span-1 flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"/>
                    </div>
                    {/* <!-- Titre --> */}
                    <div class="col-span-2 flex items-center justify-between">
                    <p class="text-sm font-medium truncate">Song Title 1</p>
                    {/* <!-- Play Button --> */}
                    <button class="p-1 text-gray-500 hover:text-blue-600 focus:outline-none" title="Lire">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3v18l15-9L5 3z" />
                        </svg>
                    </button>
                    </div>
                    {/* <!-- Album --> */}
                    <div class="col-span-1">
                    <p class="text-sm text-gray-600 truncate">Album A</p>
                    </div>
                    {/* <!-- Artiste --> */}
                    <div class="col-span-1">
                    <p class="text-sm text-gray-600 truncate">Artist X</p>
                    </div>
                    {/* <!-- Année --> */}
                    <div class="col-span-1">
                    <p class="text-sm text-gray-600 truncate">2023</p>
                    </div>
                    {/* <!-- Genre --> */}
                    <div class="col-span-1 flex items-center justify-between">
                    <p class="text-sm text-gray-600 truncate">Pop</p>
                    {/* <!-- Add to Playlist --> */}
                    <button class="p-1 text-gray-500 hover:text-green-600 focus:outline-none" title="Ajouter à une Playlist">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 12h12m0 0v6m0-6V6m6 6h-6" />
                        </svg>
                    </button>
                    </div>
                </div>
            </>
    );
}
export default MusicRow;