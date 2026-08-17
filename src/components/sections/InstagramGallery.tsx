import Image from "next/image";
import { business, instagramGallery } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { ArrowRightIcon } from "@/components/ui/icons";

export function InstagramGallery() {
  if (!business.social.instagram) return null;

  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading kicker="@devansh_travel" title="📸 Follow Our Journeys" light />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {instagramGallery.map((tile) => (
            <a
              key={tile.key}
              href={business.social.instagram!}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={tile.image}
                alt={`Placeholder graphic for the ${tile.category} category — real photos from @devansh_travel to be added`}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-navy-950/0 p-2 transition-colors group-hover:bg-navy-950/40">
                <span className="text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {tile.category}
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/40">Placeholder graphics — replaced with real photos as they&apos;re supplied.</p>

        <div className="mt-8 flex justify-center">
          <Cta href={business.social.instagram} variant="primary" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Follow @devansh_travel
          </Cta>
        </div>
      </div>
    </section>
  );
}
