import React from "react";

const Frame=()=>{

    const close=()=>{
        window.api.invoke('closeWindow')
    }
    const maxim=()=>{
        // window.api.invoke('maxWindow')
    }

    const min=()=>{
        window.api.invoke('minWindow')
    }
    return(
        <div className="flex items-center justify-between  text-white  mt-0">
                <div ></div>
                <div className="flex space-x-2">
                    <button className="inline-flex items-center p-1  hover:bg-gray-300 rounded" onClick={min}>
                        <svg className="w-8 h-8 p-2 text-gray-500 hover:text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
                            </svg>
                    </button>
                       
                    <button className=" inline-flex items-center p-1  hover:bg-gray-300 rounded" onClick={maxim}>
                        <svg className="w-8 h-8 p-2  text-gray-500 hover:text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1"/>
                            </svg>
                    </button>
                    <button className="inline-flex items-center p-1  hover:bg-red-800  rounded" onClick={close}>
                        <svg className="w-8 h-8 p-2  text-gray-500 hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>
                    </button>

                </div>
         </div>
    )
}

export default Frame;