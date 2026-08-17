import Image from "next/image";
import type { Vehicle } from "@/data/business";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-56 w-full bg-navy-950">
        <Image
          src={vehicle.image}
          alt={`Illustration of the ${vehicle.name}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-4"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-950">{vehicle.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{vehicle.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {vehicle.useCases.map((useCase) => (
            <li key={useCase} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {useCase}
            </li>
          ))}
        </ul>

        <WhatsAppCTA message={vehicle.whatsappMessage} className="mt-5">
          WhatsApp Quote
        </WhatsAppCTA>
      </div>
    </div>
  );
}
