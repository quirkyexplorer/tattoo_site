"use client"
import Image from "next/image";
import { useState, useEffect} from 'react';

export default function Nav () {
    //opens the nav bar when in mobile devices
    const [ hamburger, setHamburger] = useState(false);
    return (
            <div >
                {/* need to add tailwind here, to render only on mobile screens   */}
                <div className="md:hidden fixed top-0 left-0 w-full shadow-md z-50 ">
                    <Image
                        src="/burger-menu-svgrepo-com.svg"
                        alt="Company Logo"
                        width={50}
                        height={30}
                    >
                    </Image>
                </div>
                <div className="md:flex flex-row gap-24 items-center justify-center fixed top-0 left-0 w-full shadow-md z-50 p-4 font-gothic 
                    text-3xl text-black
                    @max-md: hidden">
                    <a href="#Designs">Designs</a>
                    <a href="#Policy">Policy</a>
                    <a href="#Contact">Contact</a>
                    <a href="#About_me">About me</a>
                </div>
        </div>
    );
} 