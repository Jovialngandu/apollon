import React,{useState,useEffect} from "react";
import Filter from "../filter";
import Openadder from "../openadder";
import TableMusic from "../tableMusic";

    const Singles=()=>{
    const [musics,setMusics]=useState({result:[]})
    const loadMusic= async()=>{

         const songs=await window.api.invoke('Music:findAll')
         setMusics(songs)
         
        
    };

    useEffect(() => {
        loadMusic()
      }, []);
        
    return(
        <>
        
           <Filter 
           context={
                {
                    name:'singles',
                    number:musics.result.length,
                    filter_by:{
                        date:'Date d\'ajout ',
                        alphabet:'A à Z',
                        artist:'artiste',
                        album:'album'
                        },
                    genders:['pop','rock','jazz']

                }
            }
            />

             <Openadder/>
             <div className="h-screen">
                <div className="h-full">
                        <TableMusic musics={musics.result}/>
                </div>
             
                
             </div>
             
    </>
    )
}

export default Singles;