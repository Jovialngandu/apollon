import React from "react";
import Filter from "../filter";

const Singles=()=>{

    return(
        <>
           <Filter context={
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
            }/>
        </>
    )
}

export default Singles;