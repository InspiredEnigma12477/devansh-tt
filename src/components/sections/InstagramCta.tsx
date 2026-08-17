import { business } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { ArrowRightIcon } from "@/components/ui/icons";

export function InstagramCta() {
  if (!business.social.instagram) return null;

  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading kicker="Instagram" title="📸 Follow Our Journeys" light />
        <p className="mt-4 text-white/70">Recent trips, vehicles, and travel moments — shared on Instagram.</p>
        <div className="mt-8 flex justify-center">
          <Cta href={business.social.instagram} variant="primary" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Follow @devansh_travel
          </Cta>
        </div>
      </div>
    </section>
  );
}
