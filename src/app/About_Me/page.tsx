import { Image } from "@imagekit/next";
export default function AboutMePage() {
    const url = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-800
    flex flex-col items-center 
    md:flex-row gap-12 justify-center px-4 pt-14
     ">
        <Image
            urlEndpoint={url} // New prop
            src="/Hero_Images/aboutMe.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-2xl"
        />
      <section className="w-full 
      md:max-w-2xl w-1/2 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-black font-gothic">
          About
        </h1> 
        <p className="text-gray-700 leading-relaxed">
            Miguel is a tattoo artist born and raised in Arizona, 🏜️ with early childhood roots 
            in Mexico that 
            shaped his appreciation for culture, symbolism, and storytelling.
            Those influences continue to inform his work, blending personal 
            history with artistic intention.
        </p>

        <p className="text-gray-700 leading-relaxed">
            With years of professional tattooing experience, 
            Miguel is known for his methodical approach, high attention to detail,
            and unwavering commitment to client experience. He values clear communication, collaboration,
                and precision, ensuring each tattoo is created with care,
            respect, and professionalism from consultation to completion.🎨
        </p>

        <p className="text-gray-700 leading-relaxed">
            Outside the studio, Miguel shares his life with his cat Leo 🐱—
            whom he adores and often dresses up — along with two dogs🐶 that keep him active and grounded.
            His extroverted, welcoming personality carries into his work, 
            creating an environment where clients feel comfortable, confident, and heard.
        </p>


      </section>
    </main>
  );
}
