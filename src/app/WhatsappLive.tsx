"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function WhatsappLive () {

    const whatsappNumber = "14802780928"
    const baseUrl = "https://api.whatsapp.com/send/";
    // const instaLink = "https://www.youtube.com"
    // const encodedMessage = `Hello, check out my insta: ${instaLink}`
    const encodedMessage = `Hello I'm interested in your tattoo designs `
    const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    useEffect( () => {
        const handleScroll = () => {
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            if(window.scrollY > 100) {
                whatsappLinkElement?.classList.add("visible");
            } else {
                whatsappLinkElement?.classList.remove("visible");
            }
        }

        const checkScrollVisibility = () => {
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            
            if (scrollHeight > clientHeight) {
                handleScroll();
                window.addEventListener("scroll", handleScroll);
            } else {
                whatsappLinkElement?.classList.add("visible");
            }
        };

        checkScrollVisibility();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
            <div>
                <a  
                    className="whatsapp-link relative"
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noreferrer nonopener">
                    <span className="absolute left-[7px] top-[7px] -z-50 size-10">
                        <span className="flex size-full items-end justify-center animate-ping rounded-full bg-green-500 opacity-75"> 
                        </span>
                    </span>
                    <Image 
                            src="/whatsAppIcon.png" 
                            alt="Whatsapp"  
                            width={40} 
                            height={40} 
                            className="whatsapp-icon z-50"/>
                </a>
            </div>
        ); 
}