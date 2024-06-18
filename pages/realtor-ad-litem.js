import ContactUs from "@/components/home/ContactUs";
import AboutMe from "@/components/realtor/AboutMe";
import Content from "@/components/realtor/Content";
import Hero from "@/components/realtor/Hero";
import Services from "@/components/realtor/Services";

import React from "react";

export default function RealtorAdLitem() {
  return (
    <>
      <Hero />
      <Services />
      <AboutMe />
      <ContactUs />
    </>
  );
}
