import Hero from "@/components/sell/Hero";
import Properties from "@/components/home/Properties";
import SubHero from "@/components/sell/SubHero";
import Stats from "@/components/sell/Stats";
import LeftImage from "@/components/sell/LeftImage";
import RightImage from "@/components/sell/RightImage";
import MiniStats from "@/components/sell/MiniStats";
export default function SellPage() {
  return (
    <>
      <Hero />
      <SubHero />
      <Stats />
      <LeftImage/>
      <RightImage/>
      <LeftImage/>
      <Properties />
      <MiniStats/>
    </>
  );
}
