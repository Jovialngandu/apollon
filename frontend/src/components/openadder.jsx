import React  from 'react'
import { useState } from 'react';


const Openadder=()=>{


    const [visible,setVisible]=useState(true);

    const closeAdder=()=>{
        setVisible(false)
    }
    const toggleModal=()=>{
        emitEvent('openmodalAdd', { message: 'Hello from MyComponent!' });
    }
     
    return(
        <>
         <div  className={(visible)?'flex text-sm border-0 border-b-2 border-gray-200 p-2':'hidden'} >

                <div   style={{width:"98%"}}>
                        <div >
                            <div >
                            <svg className="w-6 h-6 inline-block text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
                            </svg>&nbsp;
                            Vous ne trouvez pas tout ? <br/>
                            </div>
                        </div>
                        <p className="text-blue-900" style={{marginLeft:'34px',cursor:'pointer'}}   onClick={toggleModal}>Indiquer l'emplacement de recherche de la musique</p>
                </div>
                <div style={{cursor:'pointer'}}>
                    <button className="inline-flex items-center p-1   rounded" onClick={closeAdder}>
                                <svg className="w-8 h-8 p-2  text-gray-500 hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                    </svg>
                    </button>
                </div>

        </div>
        </>
    )
}

export default  Openadder