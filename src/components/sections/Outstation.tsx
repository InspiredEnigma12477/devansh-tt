import { outstationHighlights, whatsappMessages } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ShieldCheckIcon } from "@/components/ui/icons";

export function Outstation() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            kicker="Outstation Cabs"
            title="Outstation Travel From Pune"
            subtitle="One-way or round trip, a single family or a full group — we plan the vehicle and route around your travel needs."
          />

          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {outstationHighlights.map((item) => (
                  <li key={item.key} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-navy-950">
                    <ShieldCheckIcon className="h-4 w-4 shrink-0 text-amber-500" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <WhatsAppCTA message={whatsappMessages.outstation} size="lg" className="mt-6 w-full sm:w-auto">
                Get Outstation Quote
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
