"use client"
import { useState, useEffect} from 'react';

export default function Nav () {
    //opens the nav bar when in mobile devices
    const [ hamburger, setHamburger] = useState(false);

    const handleOpenMenu = () => {
        setHamburger(hamburger ? false : true)
    }

    const handleClosedMenu = () => {
        setHamburger(false)
    }
    
    return (
            <div >
                <div className="md:hidden fixed top-0 left-0 w-full shadow-md z-50 ">
                    <button onClick={handleOpenMenu} className={`${hamburger ? "bg-black pr-4 " : "bg-inherit"}`}>
                      
                        <svg fill={`${hamburger ? "#FFFFFF" : "#000000"}`} width="40px" height="40px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z" id="XMLID_314_"/><path d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z" id="XMLID_315_"/><path d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z" id="XMLID_316_"/></svg>
                    </button>
                    { hamburger ? 
                    <>
                        <div className="flex flex-col gap-2 justify-center absolute top-0 left-12  z-50 pt-2 pb-4 px-4 font-gothic 
                            text-3xl text-white  bg-black rounded-e-lg rounded-b-lg">
                            <a href="#Designs" onClick={handleClosedMenu}>Designs</a>
                            <a href="#Policy" onClick={handleClosedMenu}>Policy</a>
                            <a href="#Contact" onClick={handleClosedMenu}>Contact</a>
                            <a href="#About_me" onClick={handleClosedMenu}>About me</a>
                        </div>
                        {/* the inset 0 and fixed allow for control of the listening */}
                        <div className="fixed inset-0 bg-black opacity-60 z-10 " onClick={handleClosedMenu}></div>
                    </>
                    : null
                }
                </div>
                {/* big screen menu */}
                <div className="md:flex flex-row gap-24 items-center justify-center absolute top-0 left-0 w-full shadow-md z-50 p-4 font-gothic text-3xl text-black
                @max-md: hidden">
                    <a href="#Designs" className="text-black" >Designs</a>
                    <a href="#Policy"  className="text-black">Policy</a>
                    <a href="#Contact"  className="text-black">Contact</a>
                    <a href="#About_me"  className="text-black">About me</a>
                </div>
        </div>
    );
} 