/**
 * Centralized business configuration.
 * Update phone numbers, links, and copy here — every component reads from this file.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://devansh-tours-travel.example.com";

export const business = {
  name: "Devansh Tours & Travel",
  shortName: "Devansh Tours",
  tagline: "Your Journey. Our Responsibility.",
  city: "Pune",
  region: "Maharashtra",
  description:
    "Devansh Tours & Travel plans comfortable outstation travel, customized tours, family trips and group travel from Pune — reliable vehicles, experienced drivers, and clear communication.",
  phone: {
    primary: "9022162450",
    alternate: "9022402332",
  },
  // Fill in once available — components already read from here, nothing to wire up later.
  email: null as string | null,
  address: null as string | null,
  social: {
    instagram: "https://www.instagram.com/devansh_travel/",
    facebook: null as string | null,
  },
} as const;

/** Resolved from the business-supplied Google Maps share link — used for the embed and LocalBusiness schema. */
export const googleMaps = {
  shareUrl: "https://maps.app.goo.gl/hWbhV9KWC8aVo6Uk8",
  placeName: "Devansh tours and travel",
  latitude: 18.5617368,
  longitude: 73.9137743,
};

/** Digits-only, India country code prefixed — used for tel:/wa.me links. */
function toIntlDigits(localNumber: string) {
  return `91${localNumber.replace(/\D/g, "")}`;
}

export const phoneLinks = {
  primary: {
    display: business.phone.primary,
    tel: `tel:+${toIntlDigits(business.phone.primary)}`,
    whatsappDigits: toIntlDigits(business.phone.primary),
  },
  alternate: {
    display: business.phone.alternate,
    tel: `tel:+${toIntlDigits(business.phone.alternate)}`,
    whatsappDigits: toIntlDigits(business.phone.alternate),
  },
};

export const whatsappMessages = {
  general: "Hi Devansh Tours & Travel, I would like to plan a trip. Please help me with the available options.",
  ertiga: "Hi, I would like to enquire about booking an Ertiga for an outstation trip.",
  kiaCarens: "Hi, I would like to enquire about Kia Carens availability and pricing.",
  destination: (destinationName: string) =>
    `Hi Devansh Tours & Travel, I am interested in a trip to ${destinationName}. Please share the available options.`,
  outstation: "Hi Devansh Tours & Travel, I would like a quote for an outstation trip. Please share the available options.",
  enquiryForm: (fields: {
    name?: string;
    mobile?: string;
    destination?: string;
    travelDate?: string;
    travelers?: string;
    message?: string;
  }) => {
    const lines = [
      "Hi Devansh Tours & Travel, I'd like to plan a trip.",
      fields.name ? `Name: ${fields.name}` : null,
      fields.mobile ? `Mobile: ${fields.mobile}` : null,
      fields.destination ? `Destination: ${fields.destination}` : null,
      fields.travelDate ? `Travel Date: ${fields.travelDate}` : null,
      fields.travelers ? `Number of Travelers: ${fields.travelers}` : null,
      fields.message ? `Message: ${fields.message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  },
};

export type Destination = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

/** Popular trips booked from Pune — no fixed prices unless supplied by the business. */
export const destinations: Destination[] = [
  { slug: "goa", name: "Goa", description: "Sun-soaked beaches and coastal charm, a comfortable drive from Pune.", image: "/images/destinations/goa.svg" },
  { slug: "mahabaleshwar", name: "Mahabaleshwar", description: "Cool hill-station air, viewpoints, and strawberry farms.", image: "/images/destinations/mahabaleshwar.svg" },
  { slug: "lonavala", name: "Lonavala", description: "Monsoon waterfalls, forts, and an easy weekend escape.", image: "/images/destinations/lonavala.svg" },
  { slug: "mumbai", name: "Mumbai", description: "City trips, airport runs, and business travel made simple.", image: "/images/destinations/mumbai.svg" },
  { slug: "nashik", name: "Nashik", description: "Vineyards, temples, and a relaxed short getaway.", image: "/images/destinations/nashik.svg" },
  { slug: "shirdi", name: "Shirdi", description: "Comfortable pilgrimage travel, planned around your schedule.", image: "/images/destinations/shirdi.svg" },
  { slug: "alibaug", name: "Alibaug", description: "Beach getaways and forts along the Konkan coast.", image: "/images/destinations/alibaug.svg" },
  { slug: "kolhapur", name: "Kolhapur", description: "Heritage sites, temples, and Kolhapuri culture.", image: "/images/destinations/kolhapur.svg" },
  { slug: "ratnagiri", name: "Ratnagiri", description: "Konkan coastline, beaches, and quiet coastal towns.", image: "/images/destinations/ratnagiri.svg" },
  { slug: "rajasthan", name: "Rajasthan", description: "Majestic forts, royal palaces, and golden desert landscapes.", image: "/images/destinations/rajasthan.svg" },
  { slug: "kashmir", name: "Kashmir", description: "Alpine lakes, houseboats, and breathtaking valley views.", image: "/images/destinations/kashmir.svg" },
  { slug: "kerala", name: "Kerala", description: "Serene backwaters, tea gardens, and lush tropical greenery.", image: "/images/destinations/kerala.svg" },
];

export type Vehicle = {
  key: string;
  name: string;
  description: string;
  useCases: string[];
  image: string;
  whatsappMessage: string;
};

/** Only vehicles actually available through Devansh Tours & Travel. */
export const fleet: Vehicle[] = [
  {
    key: "ertiga",
    name: "Maruti Suzuki Ertiga",
    description: "Comfortable family and outstation travel.",
    useCases: ["Family trips", "Outstation travel", "Airport transfers"],
    image: "/images/fleet/ertiga.svg",
    whatsappMessage: whatsappMessages.ertiga,
  },
  {
    key: "kia-carens",
    name: "Kia Carens",
    description: "Spacious premium travel for families and groups.",
    useCases: ["Group travel", "Corporate travel", "Longer outstation trips"],
    image: "/images/fleet/kia-carens.svg",
    whatsappMessage: whatsappMessages.kiaCarens,
  },
];

export type ServiceItem = {
  key: string;
  name: string;
  description: string;
};

export const services: ServiceItem[] = [
  { key: "tour-packages", name: "Tour Packages", description: "Curated itineraries for popular destinations from Pune." },
  { key: "customized-tours", name: "Customized Tours", description: "Personalized travel plans built around what you want to see." },
  { key: "family-trips", name: "Family Trips", description: "Comfortable, well-paced journeys suited for all ages." },
  { key: "group-tours", name: "Group Tours", description: "Coordinated travel for friends, communities, and larger groups." },
  { key: "corporate-travel", name: "Corporate Travel", description: "Reliable travel arrangements for business trips and offsites." },
  { key: "wedding-travel", name: "Wedding Travel", description: "Guest transfers and outstation travel for wedding events." },
  { key: "transportation", name: "Outstation Cabs", description: "Well-maintained vehicles for one-way and round outstation trips." },
  { key: "airport-railway-transfers", name: "Airport / Railway Transfers", description: "Timely pickups and drops so you never miss a connection." },
  { key: "religious-trips", name: "Religious Trips", description: "Comfortable pilgrimage travel planned around your schedule." },
  { key: "weekend-getaways", name: "Weekend Getaways", description: "Quick, refreshing short trips for a well-deserved break." },
];

export type WhyChooseUsItem = {
  key: string;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  { key: "personalized", title: "Personalized Trip Planning", description: "Every itinerary is planned around your preferences, pace, and budget." },
  { key: "comfortable", title: "Comfortable Travel", description: "Well-maintained vehicles with a focus on comfort at every step." },
  { key: "support", title: "Quick Customer Support", description: "Responsive assistance before, during, and after your trip." },
  { key: "flexible", title: "Flexible Packages", description: "Packages that adapt to your group size, dates, and interests." },
  { key: "reliable", title: "Reliable Service", description: "Consistent, dependable travel arrangements you can count on." },
];

export type GoogleReview = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  date?: string;
};

/**
 * Real, verified Google reviews only — add entries here as they're supplied by the business.
 * The Reviews section reads this array directly; it renders no cards while it's empty.
 */
export const googleReviews: GoogleReview[] = [];

export type OutstationHighlight = { key: string; label: string };

export const outstationHighlights: OutstationHighlight[] = [
  { key: "one-way", label: "One-way trips" },
  { key: "round-trip", label: "Round trips" },
  { key: "multi-day", label: "Multi-day travel" },
  { key: "family", label: "Family travel" },
  { key: "corporate", label: "Corporate travel" },
  { key: "wedding", label: "Wedding travel" },
  { key: "airport", label: "Airport transfers" },
  { key: "religious", label: "Religious trips" },
  { key: "weekend", label: "Weekend getaways" },
];

export type HowItWorksStep = { step: string; title: string; description: string };

export const howItWorks: HowItWorksStep[] = [
  { step: "01", title: "Tell Us Your Plan", description: "Destination, dates and number of travelers." },
  { step: "02", title: "Get Your Quote", description: "Receive suitable travel options and pricing." },
  { step: "03", title: "Start Your Journey", description: "Confirm your booking and travel comfortably." },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tours", href: "#destinations" },
  { label: "Vehicles", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
