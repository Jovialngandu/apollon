import React from "react";
import MusicRow from "./musicRow";

const TableMusic=(props)=>{
    let table = [];
    for (let i = 1; i <= 15; i++) {
        table.push(i);
    }

    return(
        <div class="max-w-6xl mx-auto overflow-y-scroll " style={{height:'80%',paddingBottom:'20%'}}>
            {/*  Music Rows */}
            <div class="divide-y divide-gray-300 bg-white rounded-b-md shadow-md">
             {table.map((e,index)=>{
                
                return <  MusicRow pair={((index % 2)==0)} />
                
                
                }
                )
                }

            
            </div>
      </div>
    )
}

export default TableMusic;