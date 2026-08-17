import { googleReviews, googleMaps } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { StarIcon, QuoteIcon } from "@/components/ui/icons";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < rating ? "" : "opacity-20"}`} />
      ))}
    </div>
  );
}

export function Reviews() {
  const hasReviews = googleReviews.length > 0;

  return (
    <section id="reviews" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Google Reviews" title="⭐ What Our Customers Say" />

        {hasReviews ? (
          <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {googleReviews.map((review, index) => (
              <div key={`${review.name}-${index}`} className="min-w-[85%] shrink-0 snap-start sm:min-w-0 sm:shrink">
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <StarRow rating={review.rating} />
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Google Review</span>
                  </div>
                  <QuoteIcon className="mt-3 h-6 w-6 text-amber-500" />
                  <p className="mt-2 text-sm leading-relaxed text-navy-950">&ldquo;{review.text}&rdquo;</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-semibold text-navy-950">{review.name}</span>
                    {review.date ? <span className="text-slate-400">{review.date}</span> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-xl text-center text-slate-600">
            Read verified customer reviews for {googleMaps.placeName} directly on Google.
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <Cta href={googleMaps.shareUrl} variant="secondary" icon={<StarIcon className="h-4 w-4 text-amber-500" />}>
            See All Google Reviews →
          </Cta>
        </div>
      </div>
    </section>
  );
}
