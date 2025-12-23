
import Carousel from "./components/Carousel"
import Hero from "./homeSections/Hero";
import { EmblaOptionsType } from 'embla-carousel'
import './css/carousel.css';
import ContactForm from "./homeSections/Contact";
import Example
 from "./components/Example";

export default function Home() {

  const Tattoos = [
  { id: "a1", name: "glowingDragon", image: "/tattoo/glowingDragon.png" },
  { id: "b2", name: "perfectBlue", image: "/tattoo/perfectBlue.png" },
  { id: "c3", name: "TomieKawakami", image: "/tattoo/TomieKawakami.png" },
  { id: "d4", name: "spider", image: "/tattoo/spider.png" },
  { id: "e5", name: "glowingLeon", image: "/glowingLeon.png" },
  { id: "f6", name: "Megumi", image: "/tattoo/megumi.png" },
  { id: "g7", name: "butterflies", image: "/tattoo/butterflies.png" },
  { id: "h8", name: "cherryblossom", image: "/tattoo/cherryblossom.png" },
  { id: "i9", name: "colibri", image: "/tattoo/colibri.png" },
  { id: "j10", name: "neonTiger", image: "/tattoo/neonTiger.png" },
  { id: "k11", name: "cats", image: "/tattoo/cats.png" },
  { id: "l12", name: "flowers", image: "/tattoo/flowers.png" },
  { id: "m13", name: "littleRose", image: "/tattoo/littleRose.png" },
];

  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const instaHandle:string = "https://www.instagram.com/mr.tattooz_";

  // console.log("ImageKit endpoint:", urlEndpoint)

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = Tattoos.length;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div id="top">
      <div  className="flex flex-col items-center justify-items-center">      
          <Hero instaHandle={instaHandle} />
          <div className="pt-36 pb-36" >
            <Carousel  tattoos={Tattoos} options={OPTIONS} url={urlEndpoint} />
          </div>
          hello
          <div id="Contact" className="w-full">
            <ContactForm/>
          </div>
      </div>
    </div>


  );
}
