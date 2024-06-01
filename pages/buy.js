import Hero from "@/components/buy/hero";
import ContactUs from "@/components/home/ContactUs";
import Properties from "@/components/home/Properties";
import Regions from "@/components/home/Regions";
import React from "react";

export default function BuyPage() {
  return (
    <>
      <Hero />
      <Regions />
      <Properties />
      <ContactUs />
    </>
  );
}
