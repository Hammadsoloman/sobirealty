import Hero from "@/components/home/Hero";
import Regions from "@/components/home/Regions";
import Properties from "@/components/home/Properties";
import JoinUs from "@/components/home/JoinUs";
import Stats from "@/components/home/Stats";
import Marquees from "@/components/home/Marquee";
import ContactUs from "@/components/home/ContactUs";
import RightImage from "@/components/home/RightImage";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <RightImage/>
      <Services/>
     {/* <Regions/>
      <Properties/>*/}
      <JoinUs/>
      <Marquees/>
      <Stats/>
   
      <ContactUs/>
    </>
  );
}
