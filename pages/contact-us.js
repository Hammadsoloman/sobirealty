import Hero from "@/components/buy/Hero";
import ContactForm from "@/components/contactus/ContactForm";
import { NextSeo } from "next-seo";

export default function ContactUs() {
  return (
    <>    
      <NextSeo
        title="Contact Us | SOBIREALTY"
        description="Contact Us | SOBIREALTY"
      />
      <Hero />
      <ContactForm />
    </>
  );
}
