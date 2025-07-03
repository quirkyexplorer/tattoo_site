
import Carousel from "./components/Carousel"
import Hero from "./homeSections/Hero";
import { EmblaOptionsType } from 'embla-carousel'
import './css/carousel.css';
import ContactForm from "./homeSections/Contact";
import Example
 from "./components/Example";
export default function Home() {

  const Tattoos = [
  { id: "a1", name: "glowingDragon", image: "/glowingDragon.png" },
  { id: "b2", name: "perfectBlue", image: "/perfectBlue.png" },
  { id: "c3", name: "TomieKawakami", image: "/TomieKawakami.png" },
  { id: "d4", name: "spider", image: "/spider.png" },
  { id: "e5", name: "glowingLeon", image: "/glowingLeon.png" },
  { id: "f6", name: "Megumi", image: "/megumi.png" },
  { id: "g7", name: "butterflies", image: "/butterflies.png" },
  { id: "h8", name: "cherryblossom", image: "/cherryblossom.png" },
  { id: "i9", name: "colibri", image: "/colibri.png" },
  { id: "j10", name: "neonTiger", image: "/neonTiger.png" },
  { id: "k11", name: "cats", image: "/cats.png" },
  { id: "l12", name: "flowers", image: "/flowers.png" },
  { id: "m13", name: "littleRose", image: "/littleRose.png" },
];


  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = Tattoos.length;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div id="top" className="flex flex-col items-center justify-items-center">      
        <Hero/>
        <div className="pt-36 pb-36">
          <Carousel  tattoos={Tattoos} options={OPTIONS}/>
        </div>
        <div id="Contact">
          <ContactForm/>
          {/* <Example/> */}
        </div>
    </div>
  );
}
