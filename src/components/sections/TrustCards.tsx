import { trustCards } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TrustCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Travel With Confidence" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, index) => (
            <Reveal key={card.key} delay={index * 80}>
              <div className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                <span className="text-3xl" aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className="mt-3 font-semibold text-navy-950">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
