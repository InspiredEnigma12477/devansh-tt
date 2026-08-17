import { phoneLinks } from "@/data/business";

type PhoneKey = keyof typeof phoneLinks;

/** Builds a wa.me deep link with a pre-filled, URL-encoded message. */
export function buildWhatsAppLink(message: string, phone: PhoneKey = "primary") {
  const digits = phoneLinks[phone].whatsappDigits;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
