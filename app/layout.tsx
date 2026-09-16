import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wildpath-safaris.netlify.app";
const siteDescription = "Private safari guiding in Zambia with Wildpath Safaris and Tours Zambia Limited. Plan flexible South Luangwa wildlife experiences, game drives and tailor-made safari journeys.";

export const metadata: Metadata = {
  title: {
    default: "Wildpath Safaris and Tours Zambia Limited | Private Safari Guiding in Zambia",
    template: "%s | Wildpath Safaris and Tours Zambia Limited"
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  keywords: ["Zambia safari", "South Luangwa safari", "private safari guide", "Wildpath Safaris", "wildlife safari Zambia", "private game drives"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Wildpath Safaris and Tours Zambia Limited",
    description: siteDescription,
    url: "/",
    siteName: "Wildpath Safaris and Tours Zambia Limited",
    images: [{ url: "/wildlife/1000195718.jpg", width: 1200, height: 800, alt: "Male lion beside the Luangwa River" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildpath Safaris and Tours Zambia Limited",
    description: siteDescription,
    images: ["/wildlife/1000195718.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <a className="whatsapp-float" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Wildpath on WhatsApp">
          <span>WA</span>
          <small>Enquire Now</small>
        </a>
      </body>
    </html>
  );
}
