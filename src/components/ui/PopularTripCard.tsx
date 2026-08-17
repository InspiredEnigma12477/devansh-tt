import Image from "next/image";
import Link from "next/link";
import type { PopularTrip } from "@/data/business";
import { whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";

export function PopularTripCard({ trip }: { trip: PopularTrip }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={trip.image}
          alt={`Illustrated scene representing a trip to ${trip.destination}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-navy-950/70 px-2.5 py-1 text-xs font-medium text-white">
          {trip.travelType}
        </span>
        <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white">{trip.route}</h3>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-slate-600">{trip.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <Link
            href="#enquiry"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 transition-colors hover:text-amber-600"
          >
            Get Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={buildWhatsAppLink(whatsappMessages.destination(trip.destination))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1ebe5b] transition-colors hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
