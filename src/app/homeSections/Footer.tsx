"use client"
import Image from "next/image";



export default function Footer() {

    const instaHandle = "mr.tattooz_";

    return (

    <div className="flex flex-col gap-10 items-center justify-center w-full shadow-md z-50 p-4">
        <a href={`https://www.instagram.com/${instaHandle}`}>
            <Image
                src="/instagram.png"
                alt="instagram logo"
                width={50}  
                height={50}
            />
        </a>

        <a href="#top"> 
            
            <Image
                src="/upArrow.png"
                alt="up arrow"
                width={20}
                height={20}
            />
        </a>
    </div>
    );
}