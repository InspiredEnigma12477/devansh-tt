import { howItWorks } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="How It Works" title="Planning your trip is simple" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {howItWorks.map((item, index) => (
            <Reveal key={item.step} delay={index * 100}>
              <div className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="text-4xl font-bold text-amber-500">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
