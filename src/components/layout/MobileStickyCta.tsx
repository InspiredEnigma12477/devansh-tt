import Link from "next/link";
import { phoneLinks, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon, PhoneIcon, ChatIcon } from "@/components/ui/icons";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-navy-950 sm:hidden">
      <a
        href={buildWhatsAppLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 bg-[#25D366] py-3 text-xs font-semibold text-white"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <a href={phoneLinks.primary.tel} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-white">
        <PhoneIcon className="h-5 w-5 text-amber-400" />
        Call
      </a>
      <Link href="#enquiry" className="flex flex-col items-center gap-1 bg-amber-500 py-3 text-xs font-semibold text-navy-950">
        <ChatIcon className="h-5 w-5" />
        Enquire
      </Link>
    </div>
  );
}
