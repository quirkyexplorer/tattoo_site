"use client"
import Link from "next/link";
import Image from "next/image";

export default function Footer({instaHandle}: { instaHandle: string }) {

    return (

    <div className="flex flex-col gap-10 items-center justify-center w-full shadow-md  p-4">
        <a href={instaHandle}>
            <Image
                src="/instagram.png"
                alt="instagram logo"
                width={50}  
                height={50}
            />
        </a>
        <Link href="/">
            <Image
                src="/upArrow.png"
                alt="up arrow"
                width={20}
                height={20}
            />
        </Link>

        <div className="justify-self-end  text-gray-500">© 2026 Daniel Segura. All rights reserved. </div>
    </div>
    );
}