import Hero from "@/components/tax/Hero";
import FAQs from "@/components/tax/FAQs";
import HowItWorks from "@/components/tax/HowItWorks";
import { NextSeo } from "next-seo";

export default function PropertyTaxAppeal() {
  return (
    <>
      <NextSeo
        title="Property Tax Appeal | SOBIREALTY"
        description="Property Tax Appeal | SOBIREALTY"
      />
      <Hero />
      <HowItWorks />
      {/*  <Steps/>*/}
      <FAQs />
    </>
  );
}
