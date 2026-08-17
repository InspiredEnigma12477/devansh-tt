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
  description:
    "Devansh Tours & Travel plans comfortable, memorable journeys across India — family trips, group tours, corporate travel, and fully customized itineraries.",
  phone: {
    primary: "9022162450",
    alternate: "9022402332",
  },
  // Placeholders — fill in once available, components already read from here.
  email: null as string | null,
  address: null as string | null,
  googleMapsEmbedUrl: null as string | null,
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
} as const;

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
  general:
    "Hi Devansh Tours & Travel, I'm interested in planning a trip. Please help me with the details.",
  destination: (destinationName: string) =>
    `Hi Devansh Tours & Travel, I'm interested in a trip to ${destinationName}. Please share the details and available packages.`,
  quote: (destinationName: string) =>
    `Hi Devansh Tours & Travel, could you please share a quote for a trip to ${destinationName}?`,
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

export const destinations: Destination[] = [
  {
    slug: "maharashtra",
    name: "Maharashtra",
    description: "Forts, hill stations, and vibrant city escapes close to home.",
    image: "/images/destinations/maharashtra.svg",
  },
  {
    slug: "goa",
    name: "Goa",
    description: "Sun-soaked beaches, laid-back vibes, and coastal charm.",
    image: "/images/destinations/goa.svg",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    description: "Majestic forts, royal palaces, and golden desert landscapes.",
    image: "/images/destinations/rajasthan.svg",
  },
  {
    slug: "kerala",
    name: "Kerala",
    description: "Serene backwaters, tea gardens, and lush tropical greenery.",
    image: "/images/destinations/kerala.svg",
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    description: "Snow-capped peaks, pine valleys, and peaceful hill towns.",
    image: "/images/destinations/himachal-pradesh.svg",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    description: "Alpine lakes, houseboats, and breathtaking valley views.",
    image: "/images/destinations/kashmir.svg",
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    description: "The white desert of Kutch, heritage cities, and vibrant culture.",
    image: "/images/destinations/gujarat.svg",
  },
  {
    slug: "south-india",
    name: "South India",
    description: "Ancient temples, hill stations, and timeless coastal towns.",
    image: "/images/destinations/south-india.svg",
  },
];

export type ServiceItem = {
  key: string;
  name: string;
  description: string;
};

export const services: ServiceItem[] = [
  { key: "tour-packages", name: "Tour Packages", description: "Curated itineraries for popular destinations across India." },
  { key: "customized-tours", name: "Customized Tours", description: "Personalized travel plans built around what you want to see." },
  { key: "family-trips", name: "Family Trips", description: "Comfortable, well-paced journeys suited for all ages." },
  { key: "group-tours", name: "Group Tours", description: "Coordinated travel for friends, communities, and larger groups." },
  { key: "corporate-travel", name: "Corporate Travel", description: "Reliable travel arrangements for business trips and offsites." },
  { key: "hotel-booking", name: "Hotel Booking", description: "Comfortable stays booked to match your budget and preferences." },
  { key: "transportation", name: "Transportation", description: "Well-maintained vehicles for city travel and long routes." },
  { key: "airport-railway-transfers", name: "Airport / Railway Transfers", description: "Timely pickups and drops so you never miss a connection." },
  { key: "honeymoon-trips", name: "Honeymoon Trips", description: "Thoughtfully planned getaways for newly married couples." },
  { key: "weekend-getaways", name: "Weekend Getaways", description: "Quick, refreshing short trips for a well-deserved break." },
];

export type WhyChooseUsItem = {
  key: string;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  { key: "personalized", title: "Personalized Trip Planning", description: "Every itinerary is planned around your preferences, pace, and budget." },
  { key: "comfortable", title: "Comfortable Travel", description: "Well-planned journeys with a focus on comfort at every step." },
  { key: "support", title: "Quick Customer Support", description: "Responsive assistance before, during, and after your trip." },
  { key: "flexible", title: "Flexible Packages", description: "Packages that adapt to your group size, dates, and interests." },
  { key: "reliable", title: "Reliable Service", description: "Consistent, dependable travel arrangements you can count on." },
];

/** Clearly-marked placeholder testimonials — replace with genuine customer reviews. */
export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  isPlaceholder: true;
};

export const testimonials: Testimonial[] = [
  {
    name: "Placeholder Customer",
    location: "Pune",
    quote: "Sample testimonial — replace with a genuine customer review. The trip was well organized and comfortable from start to finish.",
    isPlaceholder: true,
  },
  {
    name: "Placeholder Customer",
    location: "Mumbai",
    quote: "Sample testimonial — replace with a genuine customer review. Great communication throughout and a smooth, hassle-free experience.",
    isPlaceholder: true,
  },
  {
    name: "Placeholder Customer",
    location: "Nashik",
    quote: "Sample testimonial — replace with a genuine customer review. Our family trip was planned exactly the way we wanted it.",
    isPlaceholder: true,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Tours & Packages", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
] as const;
