import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheckIcon, SuitcaseIcon, SlidersIcon, ChatIcon, UsersIcon, HeartIcon } from "@/components/ui/icons";

const highlights = [
  { icon: ShieldCheckIcon, text: "Reliable travel service" },
  { icon: SuitcaseIcon, text: "Comfortable journeys" },
  { icon: SlidersIcon, text: "Customized trip planning" },
  { icon: ChatIcon, text: "Experienced support" },
  { icon: HeartIcon, text: "Transparent communication" },
  { icon: UsersIcon, text: "Family, group & corporate travel" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About Us"
          title="A travel partner focused on your comfort"
          subtitle="Devansh Tours & Travel helps customers plan comfortable and memorable journeys — from quick weekend getaways to well-coordinated group and corporate trips."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.text} delay={index * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-amber-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="font-medium text-navy-950">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
