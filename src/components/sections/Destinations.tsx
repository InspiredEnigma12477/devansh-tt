import { destinations } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/ui/DestinationCard";

export function Destinations() {
  return (
    <section id="destinations" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Tours & Packages"
          title="Popular Trips From Pune"
          subtitle="A glimpse of the journeys we help plan. Get in touch for an itinerary and quote tailored to your dates and group."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <Reveal key={destination.slug} delay={(index % 4) * 80}>
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
