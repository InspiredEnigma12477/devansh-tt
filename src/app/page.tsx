import { Hero } from "@/components/sections/Hero";
import { TrustCards } from "@/components/sections/TrustCards";
import { About } from "@/components/sections/About";
import { Fleet } from "@/components/sections/Fleet";
import { PopularTrips } from "@/components/sections/PopularTrips";
import { Destinations } from "@/components/sections/Destinations";
import { Outstation } from "@/components/sections/Outstation";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { GoogleMapsSection } from "@/components/sections/GoogleMapsSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustCards />
      <About />
      <Fleet />
      <PopularTrips />
      <Destinations />
      <Outstation />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <EnquiryForm />
      <Reviews />
      <InstagramGallery />
      <GoogleMapsSection />
      <Contact />
    </>
  );
}
