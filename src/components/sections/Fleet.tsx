import { fleet } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/ui/VehicleCard";

export function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our Travel Fleet"
          title="Vehicles built for comfortable travel"
          subtitle="Only the vehicles we actually operate, so you know exactly what to expect on your trip."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {fleet.map((vehicle, index) => (
            <Reveal key={vehicle.key} delay={index * 100}>
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
