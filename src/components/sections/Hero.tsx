import Image from "next/image";
import { business, phoneLinks, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Cta } from "@/components/ui/Cta";
import { WhatsAppIcon, PhoneIcon, ArrowRightIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-950 pt-24">
      <Image
        src="/images/hero-bg.svg"
        alt="Illustrated Indian landscape at dusk with mountains and a flight path"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            {business.name}
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{business.description}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={buildWhatsAppLink(whatsappMessages.general)} variant="whatsapp" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              WhatsApp Us
            </Cta>
            <Cta href={phoneLinks.primary.tel} variant="primary" size="lg" icon={<PhoneIcon className="h-5 w-5" />}>
              Call Now
            </Cta>
            <Cta href="#enquiry" variant="ghost" size="lg" icon={<ArrowRightIcon className="h-5 w-5" />}>
              Plan My Trip
            </Cta>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="font-medium text-white">Call us:</span>
            <a href={phoneLinks.primary.tel} className="font-semibold text-white hover:text-amber-400">
              {phoneLinks.primary.display}
            </a>
            <span className="text-white/30">|</span>
            <a href={phoneLinks.alternate.tel} className="font-semibold text-white hover:text-amber-400">
              {phoneLinks.alternate.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
