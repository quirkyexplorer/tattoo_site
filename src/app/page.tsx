
import Carousel from "./components/Carousel"
import Hero from "./homeSections/Hero";
import { EmblaOptionsType } from 'embla-carousel'
import './css/carousel.css';
import ContactForm from "./homeSections/Contact";


export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div id="top" className="flex flex-col items-center justify-items-center">
      
        <Hero/>

        <div className="pt-36 pb-36">
          <Carousel  slides={SLIDES} options={OPTIONS}/>
        </div>
        <div id="Contact">
          <ContactForm/>
        </div>
    </div>
  );
}
