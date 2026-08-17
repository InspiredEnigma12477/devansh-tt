import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Destinations } from "@/components/sections/Destinations";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Destinations />
      <Services />
      <WhyChooseUs />
      <EnquiryForm />
      <Testimonials />
      <Contact />
    </>
  );
}
