import Hero from "@/components/buy/Hero";
import ContactUs from "@/components/home/ContactUs";
import AllProperties from "@/components/buy/AllProperties";
import Regions from "@/components/home/Regions";
import { NextSeo } from "next-seo";

export default function BuyPage() {
  return (
    <>
      <NextSeo
        title="Buy Property | SOBIREALTY"
        description="Buy Property | SOBIREALTY"
      />
      <Hero />
      <Regions />
      <AllProperties />
      <ContactUs defaultTopic="Buying" />
    </>
  );
}
