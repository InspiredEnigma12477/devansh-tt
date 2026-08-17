"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const active = testimonials[index];

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Testimonials" title="What travelers say" />

        <div
          className="relative mt-12 rounded-3xl border border-slate-100 bg-white p-8 sm:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span className="mb-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            Sample testimonial — to be replaced with a genuine review
          </span>

          <QuoteIcon className="h-8 w-8 text-amber-500" />
          <p className="mt-4 text-lg leading-relaxed text-navy-950" aria-live="polite">
            &ldquo;{active.quote}&rdquo;
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-navy-950">{active.name}</p>
              <p className="text-sm text-slate-500">{active.location}</p>
            </div>
            <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-navy-950 transition-colors hover:bg-slate-100"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name + i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-amber-500" : "bg-slate-200"}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-navy-950 transition-colors hover:bg-slate-100"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
