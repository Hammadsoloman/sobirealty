import ContactUs from "@/components/home/ContactUs";
import AboutMe from "@/components/realtor/AboutMe";

import Hero from "@/components/realtor/Hero";
import Services from "@/components/realtor/Services";

import { NextSeo } from "next-seo";

export default function RealtorAdLitem() {
  return (
    <>
      <NextSeo
        title="Realtor Ad Litem | SOBIREALTY"
        description="Realtor Ad Litem | SOBIREALTY"
      />
      <Hero />
      <Services />
      <AboutMe />
      <ContactUs />
    </>
  );
}
