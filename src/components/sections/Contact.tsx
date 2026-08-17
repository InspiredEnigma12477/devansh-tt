import { business, googleMaps, phoneLinks, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { WhatsAppIcon, PhoneIcon, ChatIcon, MapPinIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Contact" title={business.name} light />

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">Reach Us Directly</p>
          <dl className="mt-4 space-y-3 text-white/90">
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              <dt className="sr-only">Call</dt>
              <dd>
                Call: <a href={phoneLinks.primary.tel} className="font-semibold hover:text-amber-400">{phoneLinks.primary.display}</a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              <dt className="sr-only">Alternate</dt>
              <dd>
                Alternate: <a href={phoneLinks.alternate.tel} className="font-semibold hover:text-amber-400">{phoneLinks.alternate.display}</a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-4 w-4 text-amber-400" />
              <dd>{business.city}, {business.region}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Cta href={buildWhatsAppLink(whatsappMessages.general)} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
              WhatsApp Us
            </Cta>
            <Cta href={phoneLinks.primary.tel} variant="primary" icon={<PhoneIcon className="h-4 w-4" />}>
              Call {phoneLinks.primary.display}
            </Cta>
            <Cta href={phoneLinks.alternate.tel} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
              Call {phoneLinks.alternate.display}
            </Cta>
            <Cta href="#enquiry" variant="ghost" icon={<ChatIcon className="h-4 w-4" />}>
              Send Enquiry
            </Cta>
            <Cta href={googleMaps.shareUrl} variant="ghost" icon={<MapPinIcon className="h-4 w-4" />}>
              View on Google Maps
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
