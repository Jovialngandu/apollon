import React from "react";
import MusicRow from "./musicRow";

const TableMusic=(props)=>{
    
    return(
        <div className="max-w-6xl mx-auto overflow-y-scroll " style={{height:'80%',paddingBottom:'20%'}}>
            {/*  Music Rows */}
            <div className="divide-y divide-gray-300 bg-white rounded-b-md shadow-md">
             {props.musics.map((e,index)=>{
                
                return <  MusicRow pair={((index % 2)==0)}  key={index} data={e}/>
                
                }
              )
            }

            
            </div>
      </div>
    )
}

export default TableMusic;