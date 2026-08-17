import Link from "next/link";
import { business, footerLinks, googleMaps, phoneLinks, services, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">
              {business.shortName} <span className="text-amber-400">&amp; Travel</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{business.description}</p>
            <a
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-amber-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.key}>{service.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={phoneLinks.primary.tel} className="transition-colors hover:text-amber-400">
                  {phoneLinks.primary.display}
                </a>
              </li>
              <li>
                <a href={phoneLinks.alternate.tel} className="transition-colors hover:text-amber-400">
                  {phoneLinks.alternate.display}
                </a>
              </li>
              <li>
                <span>{business.city}, {business.region}</span>
              </li>
              <li>
                <a href={googleMaps.shareUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-400">
                  View on Google Maps
                </a>
              </li>
            </ul>
            {business.social.instagram ? (
              <div className="mt-4">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                  @devansh_travel on Instagram
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
