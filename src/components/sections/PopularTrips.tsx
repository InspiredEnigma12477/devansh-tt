import { popularTrips } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PopularTripCard } from "@/components/ui/PopularTripCard";

export function PopularTrips() {
  return (
    <section id="destinations" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Popular Trips"
          title="Popular Trips From Pune"
          subtitle="The routes we're asked for most. Every trip is planned around your dates, group size, and budget — get a quote to see what's possible."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularTrips.map((trip, index) => (
            <Reveal key={trip.slug} delay={(index % 4) * 80}>
              <PopularTripCard trip={trip} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
