"use client"
import Image from "next/image";

export default function Nav () {
    return (
            <div className="flex flex-row gap-48 items-center justify-center fixed top-0 left-0 w-full shadow-md z-50 p-4">
                <a href="">designs</a>

                <a href="">Policy</a>

               
                <a href="#Contact">Contact</a>

                <a href="">About me</a>
            </div>
    );
}