import { business, googleMaps } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";

export function GoogleMapsSection() {
  const embedSrc = `https://www.google.com/maps?q=${googleMaps.latitude},${googleMaps.longitude}&z=14&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${googleMaps.latitude},${googleMaps.longitude}`;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="left" kicker="Location" title="📍 Find Devansh Tours & Travel" subtitle={`${business.city}, ${business.region}`} />

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-100">
          <iframe
            title={`Map location of ${googleMaps.placeName}`}
            src={embedSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Cta href={directionsUrl} variant="primary" icon={<MapPinIcon className="h-4 w-4" />}>
            Get Directions
          </Cta>
          <Cta href={googleMaps.shareUrl} variant="secondary" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Open Google Maps
          </Cta>
        </div>
      </div>
    </section>
  );
}
