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
    "Devansh Tours & Travel offers outstation travel, customized tours, family trips, group travel and comfortable travel services from Pune. Call or WhatsApp for a quote.",
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
  ertiga: "Hi Devansh Tours & Travel, I would like to enquire about booking an Ertiga for an outstation trip.",
  vehicle: (vehicleName: string) =>
    `Hi Devansh Tours & Travel, I would like to enquire about ${vehicleName} availability and pricing.`,
  destination: (destinationName: string) =>
    `Hi Devansh Tours & Travel, I am interested in a trip to ${destinationName}. Please share the available travel options.`,
  outstation: "Hi Devansh Tours & Travel, I would like a quote for an outstation trip. Please share the available options.",
  enquiryForm: (fields: {
    name?: string;
    destination?: string;
    travelDate?: string;
    travelers?: string;
    vehicle?: string;
    message?: string;
  }) => {
    const detailLines = [
      fields.name ? `Name: ${fields.name}` : null,
      fields.destination ? `Destination: ${fields.destination}` : null,
      fields.travelDate ? `Travel Date: ${fields.travelDate}` : null,
      fields.travelers ? `Travelers: ${fields.travelers}` : null,
      fields.vehicle ? `Vehicle: ${fields.vehicle}` : null,
      fields.message ? `Message: ${fields.message}` : null,
    ].filter(Boolean);

    return [
      "Hi Devansh Tours & Travel,",
      "",
      "I would like to plan a trip.",
      "",
      ...detailLines,
      "",
      "Please share the available options and quotation.",
    ].join("\n");
  },
};

export type Destination = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

/** The original state/region-level destination list. */
export const regionDestinations: Destination[] = [
  { slug: "maharashtra", name: "Maharashtra", description: "Forts, hill stations, and vibrant city escapes close to home.", image: "/images/destinations/maharashtra.svg" },
  { slug: "goa", name: "Goa", description: "Sun-soaked beaches and coastal charm, a comfortable drive from Pune.", image: "/images/destinations/goa.svg" },
  { slug: "rajasthan", name: "Rajasthan", description: "Majestic forts, royal palaces, and golden desert landscapes.", image: "/images/destinations/rajasthan.svg" },
  { slug: "kerala", name: "Kerala", description: "Serene backwaters, tea gardens, and lush tropical greenery.", image: "/images/destinations/kerala.svg" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", description: "Snow-capped peaks, pine valleys, and peaceful hill towns.", image: "/images/destinations/himachal-pradesh.svg" },
  { slug: "kashmir", name: "Kashmir", description: "Alpine lakes, houseboats, and breathtaking valley views.", image: "/images/destinations/kashmir.svg" },
  { slug: "gujarat", name: "Gujarat", description: "The white desert of Kutch, heritage cities, and vibrant culture.", image: "/images/destinations/gujarat.svg" },
  { slug: "south-india", name: "South India", description: "Ancient temples, hill stations, and timeless coastal towns.", image: "/images/destinations/south-india.svg" },
];

export type PopularTrip = {
  slug: string;
  route: string;
  destination: string;
  description: string;
  travelType: string;
  image: string;
};

/** Route-specific trips booked from Pune — no fixed prices unless supplied by the business. */
export const popularTrips: PopularTrip[] = [
  { slug: "goa", route: "Pune → Goa", destination: "Goa", description: "Sun-soaked beaches and coastal charm.", travelType: "Beach Holiday", image: "/images/destinations/goa.svg" },
  { slug: "mahabaleshwar", route: "Pune → Mahabaleshwar", destination: "Mahabaleshwar", description: "Cool hill-station air, viewpoints, and strawberry farms.", travelType: "Weekend Getaway", image: "/images/destinations/mahabaleshwar.svg" },
  { slug: "lonavala", route: "Pune → Lonavala", destination: "Lonavala", description: "Monsoon waterfalls, forts, and an easy weekend escape.", travelType: "Weekend Getaway", image: "/images/destinations/lonavala.svg" },
  { slug: "mumbai", route: "Pune → Mumbai", destination: "Mumbai", description: "City trips, airport runs, and business travel made simple.", travelType: "City / Business Trip", image: "/images/destinations/mumbai.svg" },
  { slug: "shirdi", route: "Pune → Shirdi", destination: "Shirdi", description: "Comfortable pilgrimage travel, planned around your schedule.", travelType: "Religious Trip", image: "/images/destinations/shirdi.svg" },
  { slug: "nashik", route: "Pune → Nashik", destination: "Nashik", description: "Vineyards, temples, and a relaxed short getaway.", travelType: "Short Getaway", image: "/images/destinations/nashik.svg" },
  { slug: "alibaug", route: "Pune → Alibaug", destination: "Alibaug", description: "Beach getaways and forts along the Konkan coast.", travelType: "Beach Holiday", image: "/images/destinations/alibaug.svg" },
  { slug: "kolhapur", route: "Pune → Kolhapur", destination: "Kolhapur", description: "Heritage sites, temples, and Kolhapuri culture.", travelType: "Heritage Trip", image: "/images/destinations/kolhapur.svg" },
  { slug: "ratnagiri", route: "Pune → Ratnagiri", destination: "Ratnagiri", description: "Konkan coastline, beaches, and quiet coastal towns.", travelType: "Coastal Trip", image: "/images/destinations/ratnagiri.svg" },
  { slug: "hyderabad", route: "Pune → Hyderabad", destination: "Hyderabad", description: "Historic city travel with comfortable long-distance drives.", travelType: "Long-Distance Trip", image: "/images/destinations/hyderabad.svg" },
  { slug: "rajasthan", route: "Pune → Rajasthan", destination: "Rajasthan", description: "Majestic forts, royal palaces, and golden desert landscapes.", travelType: "Multi-Day Tour", image: "/images/destinations/rajasthan.svg" },
  { slug: "kashmir", route: "Pune → Kashmir", destination: "Kashmir", description: "Alpine lakes, houseboats, and breathtaking valley views.", travelType: "Multi-Day Tour", image: "/images/destinations/kashmir.svg" },
];

export type Vehicle = {
  key: string;
  name: string;
  tagline: string;
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
    tagline: "Comfortable • Family Friendly • Outstation",
    description: "Comfortable family and outstation travel.",
    useCases: ["Family trips", "Outstation travel", "Airport transfers"],
    image: "/images/fleet/ertiga.svg",
    whatsappMessage: whatsappMessages.ertiga,
  },
  {
    key: "kia-carens",
    name: "Kia Carens",
    tagline: "Spacious • Premium • Family & Group Travel",
    description: "Spacious premium travel for families and groups.",
    useCases: ["Group travel", "Corporate travel", "Longer outstation trips"],
    image: "/images/fleet/kia-carens.svg",
    whatsappMessage: whatsappMessages.vehicle("Kia Carens"),
  },
];

/** Vehicle preference options offered in the enquiry form. */
export const vehicleOptions = ["Ertiga", "Kia Carens", "Not Sure", "Other"] as const;

export type ServiceItem = {
  key: string;
  name: string;
  description: string;
};

export const services: ServiceItem[] = [
  { key: "outstation-travel", name: "Outstation Travel", description: "One-way and round trips to destinations across and beyond Maharashtra." },
  { key: "tour-packages", name: "Tour Packages", description: "Curated itineraries for popular destinations from Pune." },
  { key: "customized-tours", name: "Customized Tours", description: "Personalized travel plans built around what you want to see." },
  { key: "family-trips", name: "Family Trips", description: "Comfortable, well-paced journeys suited for all ages." },
  { key: "group-tours", name: "Group Tours", description: "Coordinated travel for friends, communities, and larger groups." },
  { key: "corporate-travel", name: "Corporate Travel", description: "Reliable travel arrangements for business trips and offsites." },
  { key: "airport-transfers", name: "Airport Transfers", description: "Timely pickups and drops so you never miss a connection." },
  { key: "hotel-booking", name: "Hotel Booking", description: "Comfortable stays booked to match your budget and preferences." },
  { key: "wedding-travel", name: "Wedding Travel", description: "Guest transfers and outstation travel for wedding events." },
  { key: "weekend-getaways", name: "Weekend Getaways", description: "Quick, refreshing short trips for a well-deserved break." },
];

export type WhyChooseUsItem = {
  key: string;
  title: string;
  description: string;
  emoji: string;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  { key: "vehicles", emoji: "🚗", title: "Comfortable Vehicles", description: "Travel in suitable vehicles for your family or group." },
  { key: "booking", emoji: "📱", title: "Easy Booking", description: "Book quickly through WhatsApp or phone." },
  { key: "customized", emoji: "🗺️", title: "Customized Trips", description: "Plan the journey around your dates and route." },
  { key: "support", emoji: "🤝", title: "Direct Support", description: "Get help directly from the travel team." },
  { key: "enquiry", emoji: "💬", title: "Quick Enquiry", description: "Get travel information and quotes easily." },
];

/** Trust cards shown right below the hero — no invented ratings or counts. */
export type TrustCard = { key: string; emoji: string; title: string; description: string };

export const trustCards: TrustCard[] = [
  { key: "reviews", emoji: "⭐", title: "Google Reviews", description: "Real customer feedback." },
  { key: "vehicles", emoji: "🚗", title: "Comfortable Vehicles", description: "Suitable options for family and group travel." },
  { key: "location", emoji: "📍", title: "Pune Based", description: "Serving Pune and outstation destinations." },
  { key: "booking", emoji: "💬", title: "Easy Booking", description: "Quick booking through WhatsApp or phone." },
];

/** Compact strip shown inside the hero, below the CTA buttons. */
export const heroTrustStripItems = [
  { emoji: "🚗", label: "Comfortable Travel" },
  { emoji: "🗺️", label: "Customized Trips" },
  { emoji: "📍", label: "Pune Based" },
  { emoji: "💬", label: "Easy WhatsApp Booking" },
];

/**
 * Genuine, verified Google reviews only — add entries as they're supplied by the business.
 * The Reviews section reads this array directly; it renders no cards while it's empty.
 */
export type Review = {
  name: string;
  rating: number;
  text: string;
  date?: string;
  source: "Google";
};

export const googleReviews: Review[] = [];

export type OutstationHighlight = { key: string; label: string };

export const outstationSubtitle = "One-way • Round Trip • Multi-day Travel";

export const outstationHighlights: OutstationHighlight[] = [
  { key: "family", label: "Family Travel" },
  { key: "group", label: "Group Travel" },
  { key: "corporate", label: "Corporate Travel" },
  { key: "wedding", label: "Wedding Travel" },
  { key: "religious", label: "Religious Trips" },
  { key: "airport", label: "Airport Transfers" },
  { key: "weekend", label: "Weekend Trips" },
  { key: "long-distance", label: "Long-Distance Travel" },
];

export type HowItWorksStep = { step: string; title: string; description: string };

export const howItWorks: HowItWorksStep[] = [
  { step: "01", title: "Tell Us Your Plan", description: "Share destination, dates and number of travelers." },
  { step: "02", title: "Get Your Quote", description: "Receive suitable travel options and pricing." },
  { step: "03", title: "Start Your Journey", description: "Confirm your booking and travel comfortably." },
];

/**
 * Instagram gallery tiles — data-driven placeholder graphics (not real photos).
 * Swap `image` with real photos from @devansh_travel as they're supplied.
 */
export type InstagramTile = { key: string; category: string; image: string };

export const instagramGallery: InstagramTile[] = [
  { key: "vehicles", category: "Vehicles", image: "/images/fleet/ertiga.svg" },
  { key: "goa", category: "Goa", image: "/images/destinations/goa.svg" },
  { key: "mahabaleshwar", category: "Mahabaleshwar", image: "/images/destinations/mahabaleshwar.svg" },
  { key: "family-trips", category: "Family Trips", image: "/images/instagram/family-trip.svg" },
  { key: "group-travel", category: "Group Travel", image: "/images/instagram/group-travel.svg" },
  { key: "road-trips", category: "Road Trips", image: "/images/instagram/road-trip.svg" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tours", href: "#destinations" },
  { label: "Vehicles", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Tours", href: "#destinations" },
  { label: "Vehicles", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
