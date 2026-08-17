"use client";

import { useState, type FormEvent } from "react";
import { vehicleOptions, whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/icons";

const inputClasses =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";
const errorClasses = "mt-1.5 text-xs font-medium text-red-600";

const INDIAN_MOBILE_PATTERN = /^[6-9]\d{9}$/;

type FormErrors = Partial<Record<"name" | "mobile" | "destination" | "travelDate" | "travelers", string>>;

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!INDIAN_MOBILE_PATTERN.test(mobile.trim())) nextErrors.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!destination.trim()) nextErrors.destination = "Please enter a destination.";
    if (!travelDate) nextErrors.travelDate = "Please select a travel date.";
    const travelersCount = Number(travelers);
    if (!travelers || !Number.isFinite(travelersCount) || travelersCount < 1) {
      nextErrors.travelers = "Enter the number of travelers.";
    }
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const link = buildWhatsAppLink(
      whatsappMessages.enquiryForm({ name, destination, travelDate, travelers, vehicle, message })
    );
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="enquiry" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            kicker="Featured Travel Experience"
            title="Tell Us Where You Want To Go. We'll Help You Get There."
            subtitle="Share a few details and we'll send your enquiry straight to our WhatsApp — no waiting on a callback."
          />

          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-navy-950">
                Name
                <input
                  type="text"
                  required
                  aria-invalid={Boolean(errors.name)}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {errors.name ? <p className={errorClasses}>{errors.name}</p> : null}
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Mobile Number
                <input
                  type="tel"
                  required
                  aria-invalid={Boolean(errors.mobile)}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className={inputClasses}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="tel"
                />
                {errors.mobile ? <p className={errorClasses}>{errors.mobile}</p> : null}
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Destination
                <input
                  type="text"
                  required
                  aria-invalid={Boolean(errors.destination)}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. Goa"
                />
                {errors.destination ? <p className={errorClasses}>{errors.destination}</p> : null}
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Travel Date
                <input
                  type="date"
                  required
                  aria-invalid={Boolean(errors.travelDate)}
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className={inputClasses}
                />
                {errors.travelDate ? <p className={errorClasses}>{errors.travelDate}</p> : null}
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Number of Travelers
                <input
                  type="number"
                  min={1}
                  required
                  aria-invalid={Boolean(errors.travelers)}
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. 4"
                />
                {errors.travelers ? <p className={errorClasses}>{errors.travelers}</p> : null}
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Vehicle Preference
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className={inputClasses}>
                  <option value="">Select a vehicle</option>
                  {vehicleOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-navy-950 sm:col-span-2">
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClasses}
                  rows={3}
                  placeholder="Anything else we should know?"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-colors hover:bg-[#1ebe5b] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get My Travel Plan
            </button>
            <p className="mt-3 text-xs text-slate-500">
              This opens WhatsApp with your details pre-filled so our team can respond quickly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
