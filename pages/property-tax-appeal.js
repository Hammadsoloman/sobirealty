import Hero from "@/components/tax/Hero";
import FAQs from "@/components/tax/FAQs";
import HowItWorks from "@/components/tax/HowItWorks";
import Script from "next/script";

export default function PropertyTaxAppeal() {
  return (
    <>
   
      <Hero />
      <HowItWorks/>
    {/*  <Steps/>*/}
      <FAQs/>
    </>
  );
}
