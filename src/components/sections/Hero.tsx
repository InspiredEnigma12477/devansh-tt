import Image from "next/image";
import { business, phoneLinks, whatsappMessages } from "@/data/business";
import { Cta } from "@/components/ui/Cta";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { TrustStrip } from "@/components/sections/TrustStrip";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-950 pt-24">
      <div className="relative flex min-h-[86vh] items-center">
        <Image
          src="/images/hero-bg.svg"
          alt="Illustrated Indian landscape at dusk with mountains and a flight path"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tours &amp; Travel From Pune
            </h1>
            <p className="mt-3 text-2xl font-semibold text-amber-400 sm:text-3xl">{business.tagline}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Comfortable outstation travel, customized tours, family trips and group travel — planned around you.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Cta href={buildWhatsAppLink(whatsappMessages.general)} variant="whatsapp" size="lg">
                💬 WhatsApp Now
              </Cta>
              <Cta href={phoneLinks.primary.tel} variant="primary" size="lg">
                📞 Call Now
              </Cta>
              <Cta href="#enquiry" variant="ghost" size="lg">
                📝 Plan My Trip
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
      </div>

      <TrustStrip />
    </section>
  );
}
