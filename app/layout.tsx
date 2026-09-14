import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "Wildpath Safaris and Tours Zambia Limited | Private guiding in Zambia’s wild heart",
    template: "%s | Wildpath Safaris and Tours Zambia Limited"
  },
  description:
    "Experience Zambia through personalised safari adventures, expert private guiding and authentic encounters with wildlife, wilderness and the remarkable landscapes of the country.",
  metadataBase: new URL("https://wildpathsafaris.example"),
  openGraph: {
    title: "Wildpath Safaris and Tours Zambia Limited",
    description: contact.tagline,
    type: "website"
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
