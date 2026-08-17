import { whyChooseUs } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SlidersIcon, SuitcaseIcon, ChatIcon, CalendarIcon, ShieldCheckIcon } from "@/components/ui/icons";

const iconByKey: Record<string, typeof SlidersIcon> = {
  personalized: SlidersIcon,
  comfortable: SuitcaseIcon,
  support: ChatIcon,
  flexible: CalendarIcon,
  reliable: ShieldCheckIcon,
};

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Why Choose Us"
          title="Travel planning you can trust"
          subtitle="A dependable process built around clear communication and your comfort, from the first enquiry to the last mile."
          light
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, index) => {
            const Icon = iconByKey[item.key] ?? ShieldCheckIcon;
            return (
              <Reveal key={item.key} delay={index * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
