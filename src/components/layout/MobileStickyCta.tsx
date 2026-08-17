import Link from "next/link";
import { phoneLinks, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-navy-950 sm:hidden">
      <a
        href={buildWhatsAppLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
      >
        <span aria-hidden="true">💬</span> WhatsApp
      </a>
      <a href={phoneLinks.primary.tel} className="flex items-center justify-center gap-1.5 py-3.5 text-sm font-semibold text-white">
        <span aria-hidden="true">📞</span> Call
      </a>
      <Link href="#enquiry" className="flex items-center justify-center gap-1.5 bg-amber-500 py-3.5 text-sm font-semibold text-navy-950">
        <span aria-hidden="true">📝</span> Enquire
      </Link>
    </div>
  );
}
