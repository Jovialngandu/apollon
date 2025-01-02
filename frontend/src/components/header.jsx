import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header=(props)=>{

    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
  
    useEffect(() => {
      setActiveLink(location.pathname);
      

    }, [location]);
   
    return(
        <>
            <header className="p-2 text-gray-800">
            
                <div className="container mx-auto py-4">
                    <h1 className="text-2xl ">Ma musique</h1>
                    <nav className="flex space-x-4 mt-4">
                     
                        <span  className={activeLink === '/Singles'||activeLink ==='/' ? "text-blue-900 font-bold " : "hover:text-gray-300"}> <Link to="/Singles">Morceaux</Link></span>
                        <span  className={activeLink === '/Artists' ? "text-blue-900 font-bold" : "hover:text-gray-300"}> <Link to="/Artists">Artistes</Link></span>
                        <span  className={activeLink === '/Albums' ? "text-blue-900 font-bold" : "hover:text-gray-300"}><Link to="/Albums">Albums</Link>  </span>
                    </nav>
                    <div className="mt-4">
                        <Outlet />
                    </div>
                </div>
            </header>

         
            
        </>
        
    );
}

export default Header;