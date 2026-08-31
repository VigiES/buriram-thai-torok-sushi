import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? process.env.DEPLOY_PRIME_URL
  ?? process.env.URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111c16",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Buriram Thaï Food & Torok Sushi | Nogent-le-Rotrou",
  description: "Cuisine thaïlandaise authentique et sushi frais faits maison au cœur de Nogent-le-Rotrou.",
  openGraph: {
    title: "Buriram Thaï Food & Torok Sushi",
    description: "Saveurs thaïlandaises traditionnelles et sushi préparés avec soin.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/images/buriram-hero.png", width: 1536, height: 1024, alt: "Plats thaïlandais et sushi frais" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Buriram Thaï Food & Torok Sushi",
    description: "Plats thaïlandais authentiques faits maison et sushi frais préparés artisanalement.",
    telephone: "+33763130999",
    address: { "@type": "PostalAddress", streetAddress: "10 Place du Général Saint-Pol", postalCode: "28400", addressLocality: "Nogent-le-Rotrou", addressCountry: "FR" },
    servesCuisine: ["Thai", "Japanese", "Sushi"],
    priceRange: "€€",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "30" }
  };
  return <html lang="fr"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} /></body></html>;
}
