import { services } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  SuitcaseIcon,
  SlidersIcon,
  UsersIcon,
  ChatIcon,
  BuildingIcon,
  BedIcon,
  BusIcon,
  PlaneIcon,
  HeartIcon,
  CalendarIcon,
} from "@/components/ui/icons";

const iconByKey: Record<string, typeof SuitcaseIcon> = {
  "tour-packages": SuitcaseIcon,
  "customized-tours": SlidersIcon,
  "family-trips": UsersIcon,
  "group-tours": ChatIcon,
  "corporate-travel": BuildingIcon,
  "hotel-booking": BedIcon,
  transportation: BusIcon,
  "airport-railway-transfers": PlaneIcon,
  "honeymoon-trips": HeartIcon,
  "weekend-getaways": CalendarIcon,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Services"
          title="Everything you need for your trip"
          subtitle="From a single hotel booking to a fully planned group tour — we handle the details so you can focus on the journey."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = iconByKey[service.key] ?? SuitcaseIcon;
            return (
              <Reveal key={service.key} delay={(index % 5) * 70}>
                <div className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-amber-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-navy-950">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
