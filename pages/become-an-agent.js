import dynamic from 'next/dynamic';
import Hero from "@/components/joinus/Hero";
import LeftImage from "@/components/joinus/LeftImage";
import ParallaxVideo from "@/components/joinus/ParallaxVideo";
import Ready from "@/components/joinus/Ready";
import RightImage from "@/components/joinus/RightImage";
import StickyImage from "@/components/joinus/StickyImage";
import SubHero from "@/components/joinus/SubHero";

//const Hero = dynamic(() => import('@/components/joinus/Hero'), {
//  ssr: false,
//});

export default function JoinUsPage() {
  return (
    <>
      <Hero />
      <SubHero />
      <StickyImage />
      <ParallaxVideo />
      <RightImage />
      <LeftImage />
      <Ready/>
    </>
  );
}
