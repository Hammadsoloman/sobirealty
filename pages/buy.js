import Hero from "@/components/buy/Hero";
import ContactUs from "@/components/home/ContactUs";
import AllProperties from "@/components/buy/AllProperties";
import Regions from "@/components/home/Regions";
import React from "react";

export default function BuyPage() {
  return (
    <>
      <Hero />
      <Regions />
      <AllProperties />
      <ContactUs />
    </>
  );
}
