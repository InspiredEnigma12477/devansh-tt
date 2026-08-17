import { whyChooseUs } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

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
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.key} delay={index * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
