import React from "react";
import Filter from "../filter";
import Openadder from "../openadder";

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
    </>
    )
}

export default Singles;