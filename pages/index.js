import Hero from "@/components/home/Hero";
import Regions from "@/components/home/Regions";
import Properties from "@/components/home/Properties";
import JoinUs from "@/components/home/JoinUs";
import Stats from "@/components/home/Stats";
import Marquees from "@/components/home/Marquee";
import ContactUs from "@/components/home/ContactUs";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="Home | SOBIREALTY" description="Home | SOBIREALTY" />
      <Hero />
      {/*      <RightImage/>
      <Services/>*/}
      <Regions />
      <Properties />
      <JoinUs />
      <Marquees />
      <Stats />
      <ContactUs />
    </>
  );
}
