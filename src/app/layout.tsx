import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { business, googleMaps, siteUrl } from "@/data/business";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${business.name} | Tours & Outstation Travel in Pune`;
const description =
  "Devansh Tours & Travel offers outstation travel, customized tours, family trips, group travel and comfortable travel services from Pune. Call or WhatsApp for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description,
  keywords: [
    "Tours and Travels in Pune",
    "Travel Agency in Pune",
    "Outstation Cab Pune",
    "Outstation Taxi Pune",
    "Pune to Goa Cab",
    "Pune to Mahabaleshwar Cab",
    "Pune to Mumbai Cab",
    "Pune Tour Packages",
    "Family Trips From Pune",
    "Ertiga Travel Pune",
    "Kia Carens Travel Pune",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: business.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1226",
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: business.name,
  description: business.description,
  telephone: `+91${business.phone.primary}`,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: googleMaps.latitude,
    longitude: googleMaps.longitude,
  },
  hasMap: googleMaps.shareUrl,
  areaServed: {
    "@type": "City",
    name: business.city,
  },
  sameAs: business.social.instagram ? [business.social.instagram] : [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: business.name,
  url: siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCta />
      </body>
    </html>
  );
}
