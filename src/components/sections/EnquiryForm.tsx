"use client";

import { useState, type FormEvent } from "react";
import { whatsappMessages } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/icons";

const inputClasses =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const link = buildWhatsAppLink(
      whatsappMessages.enquiryForm({ name, mobile, destination, travelDate, travelers, message })
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Mobile Number
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className={inputClasses}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Destination
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. Kerala"
                />
              </label>

              <label className="block text-sm font-medium text-navy-950">
                Travel Date
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className={inputClasses}
                />
              </label>

              <label className="block text-sm font-medium text-navy-950 sm:col-span-2">
                Number of Travelers
                <input
                  type="number"
                  min={1}
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. 4"
                />
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
