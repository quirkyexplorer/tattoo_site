"use client";
import { Image } from "@imagekit/next";

export default function Example() {
      const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
            urlEndpoint={urlEndpoint} // New prop
            src="/glowingDragon.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
    </div>
  );
}