import React from "react";
import Filter from "../filter";
import Openadder from "../openadder";
import TableMusic from "../tableMusic";

const Singles=()=>{

    return(
        <>
        
           <Filter 
           context={
                {
                    name:'singles',
                    number:12,
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
                        <TableMusic/>
                </div>
             
                
             </div>
             
    </>
    )
}

export default Singles;