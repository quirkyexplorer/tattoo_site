import Image from "next/image";
      
export default function Hero() {

    return (

        <div className="relative w-full h-screen">
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
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-black">
                {/* <h1 className="font-marker text-8xl mb-4">MIGNUGS ART</h1> */}
                <Image
                    src="/logoText.png"
                    alt="logo"
                    width={900}
                    height={200}
                />
                <a href="">
                    <Image
                        src={"/catLogo.png"}
                        alt="a happy face of a cat"
                        width={150}
                        height={200}
                    />
                </a>
                <p className="font-light text-4xl">by Miguel Rivas</p>
                  <p className="font-light text-2xl mb-4">Tattoo Artist</p>
            </div>
        </div>

    );
}