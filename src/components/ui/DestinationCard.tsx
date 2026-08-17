import Image from "next/image";
import type { Destination } from "@/data/business";
import { whatsappMessages } from "@/data/business";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={`Illustrated scene representing ${destination.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{destination.name}</h3>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-slate-600">{destination.description}</p>
        <WhatsAppCTA message={whatsappMessages.destination(destination.name)} size="md" className="mt-5 w-full">
          Get Quote
        </WhatsAppCTA>
      </div>
    </div>
  );
}
