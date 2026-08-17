import { buildWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/data/business";
import { WhatsAppIcon } from "@/components/ui/icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Devansh Tours & Travel on WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 motion-safe:animate-ping" />
    </a>
  );
}
