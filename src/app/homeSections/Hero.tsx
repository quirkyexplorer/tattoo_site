"use client";
import Image from "next/image";
import { motion } from "framer-motion"
      
export default function Hero({instaHandle}: { instaHandle: string }) {
    return (
        <div  className="w-full h-screen">
            <Image 
                src="/tattoo-hero.jpg"
                alt="tattoo artist drawing stencil"
                fill
                priority
                className="object-cover object-center"
                quality={100}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-300/35" />
            {/* Content Container */}
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-black">
                <Image
                    src="/logoText.png"
                    alt="logo"
                    width={900}
                    height={200}/>
                    <motion.div
                        animate={{
                            rotate: [0, -10, 10, -10, 10, 0],
                        }}
                        whileHover={{
                            rotate: [0, -10, 10, -10, 10, 0],
                            scale: 1.5,
                            transition: { duration: 0.5 },
                        }}
                        transition={{
                        // 👇 Separate transitions for each property
                            rotate: {
                            duration: 1.2,       // slower shake
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 5, // delay before starting the shake
                            },
                            scale: {
                            duration: 0.5,       // faster scale
                            ease: "easeInOut",
                            repeatType: "mirror", // scale up/down continuously
                            },
                        }}>
                        <a href={instaHandle} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={"/catLogo.png"}
                                alt="a happy face of a cat"
                                width={150}
                                height={200}
                            />
                        </a>
                    </motion.div>
                <p className="font-light text-4xl">by Miguel Rivas</p>
                  <p className="font-light text-2xl mb-4">Tattoo Artist</p>
            </div>
        </div>

    );
}