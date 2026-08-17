import type { ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Cta } from "@/components/ui/Cta";
import { WhatsAppIcon } from "@/components/ui/icons";

type WhatsAppCTAProps = {
  message: string;
  children: ReactNode;
  variant?: "whatsapp" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

/** Pre-wired WhatsApp CTA — builds the deep link from a message and renders the shared Cta button. */
export function WhatsAppCTA({ message, children, variant = "whatsapp", size = "md", className }: WhatsAppCTAProps) {
  return (
    <Cta href={buildWhatsAppLink(message)} variant={variant} size={size} icon={<WhatsAppIcon className="h-5 w-5" />} className={className}>
      {children}
    </Cta>
  );
}
