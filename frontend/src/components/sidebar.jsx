import React, { useState } from "react";

const Sidebar=(props)=>{

    const [State,setState]=useState(true);
    
    let style=(State)?"25%":"4%"

    const changeState=async()=>{
        
        setState(state=>{
            return !state
        });
       
    }
   
    return(
        <>
            <div style={{width:style}} className={(State)?"bg-gray-200 text-gray-100 flex flex-col h-full ":"bg-gray-200 text-gray-100 flex flex-col h-full   items-center"} >
                
            <div className="flex flex-grow">
                        <button href="#" className="flex items-center w-12 pt-2 pl-2 pr-2 pb-1 hover:bg-gray-300">
                        <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                        </svg>

                        </button>
                        <div className={(State)?" pt-2 pl-2 pr-2 pb-1 text-sm label_btn_side pl-3 ":"hidden"}>Apollon musique</div> 
                    </div>
                    <div>
                        <button href="#" className="inline-flex items-center w-12 pt-2 pl-2 pr-2 pb-1 hover:bg-gray-300 rounded-md" onClick={changeState}>
                            <svg className="w-7 h-7 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                            </svg>

                        </button>
                    </div>
                    

                    
                    <div className={(State)?"flex items-center p-2 hidden ":" hidden flex items-center"} >
                     <input className={(State)?" h-8 w-full text-gray-900 border-gray-200 rounded":"hidden"}  type="search" />
                     <button href="#" className={(State)?"hidden":"flex items-center p-2 hover:bg-gray-300 rounded"}>
                        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>

                    </button>
                    </div>
                <nav className={(State)?"flex flex-col space-y-2 overflow-y-scroll ":"flex flex-col space-y-2 "}>
                    
                    <button href="#" className="flex items-center p-2 hover:bg-gray-300 rounded-md">
                        <svg className="w-6 h-6 text-gray-400 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 15.5V5s3 1 3 4m-7-3H4m9 4H4m4 4H4m13 2.4c0 1.326-1.343 2.4-3 2.4s-3-1.075-3-2.4 1.343-2.4 3-2.4 3 1.075 3 2.4Z"/>
                        </svg>

                        <div className={(State)?"label_btn_side pl-3":"hidden"} >Ma Musique</div>   
                    </button>
                    <a href="#" className="flex items-center p-2 hover:bg-gray-300 rounded-md">
                    <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>

                    <div className={(State)?"label_btn_side pl-3":"hidden"}>Lectures récentes</div>
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-gray-300 rounded-md">
                        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"/>
                        </svg>

                        <div className={(State)?"label_btn_side pl-3":"hidden"}>Lecture en cours</div>  
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-gray-300 rounded-md">
                    <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>


                        <div className={(State)?"label_btn_side pl-3":"hidden"}>Parametres</div>  
                    </a>
                    <div className=" text-lg font-semibold border-b border-gray-500"></div>
                    <div className={(State)?"flex":"f"}>
                        <div className=" w-full p-2 hover:bg-gray-300">
                            <a href="#" className="flex items-center  rounded">
                            <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z"/>
                            </svg>

                                 <div className={(State)?"label_btn_side pl-3":"hidden"}>Playlists</div>  
                            </a>
                        </div>
                        <div className="flex items-center p-2 hover:bg-gray-300 rounded p-2">   
                            <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                            </svg>

                        </div>
                      
                    </div>
                    <div className={(State)?"playlist":"hidden"}>
                        <a href="#" className="flex items-center p-2 hover:bg-gray-300 rounded-md">
                        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                        </svg>

                            <div className={(State)?"label_btn_side pl-3":"hidden"}>Apollon musique</div>  
                        </a>
                        
                        
                    </div>
                  
                    
                </nav>
      
            
            </div>
           
        </>
    )
}

export default Sidebar;