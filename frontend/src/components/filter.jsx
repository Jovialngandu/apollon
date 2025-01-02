import React from "react";

const Filter =(props)=>{

    const context=props.context

    // context.filter_by
    return(
        <>
            <div class="flex  bg-gray-200 w-full">
                <div class="w-1/3 ">
                <button className="flex p-2 text-sm ">
                    <svg class="w-5 h-5 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"/>
                    </svg>
                    <span> Tout lire en aleatoire &nbsp;({context.number})</span>
                   
                </button>

                </div>
                <div class={(context.name=='artists')?" w-1/3 p-2 text-sm hidden":" w-1/3 p-2 text-sm "} >
                  <div className="flex">

                  <label for="select_by"> Trier par&nbsp;: &nbsp;</label>
                    <select name="select_by" id="underline_select" class="p-0 flex text-sm text-blue-900 bg-transparent border-0 font-semibold dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        {
                            Object.keys(context.filter_by)
                                  .map((filter,index)=>{
                                           index++;
                                           return (<option value={filter}>{context.filter_by[filter]}</option>)
                            })
                        }

                    </select>
                   </div>
                  
                </div>
                <div class=" w-1/3 p-2 text-sm ">
                  <div className="flex">

                  <label for="gender "> Genre: &nbsp;</label>
                    <select name="gender" id="underline_select" class="p-0 flex text-sm text-blue-900 bg-transparent border-0 font-semibold dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        {
                            context.genders.map(gender=>(<option value={gender}>{gender}</option>))
                        }

                    </select>
                   </div>
                  
                </div>
            </div>
        </>
    )
}

export default Filter