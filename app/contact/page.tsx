import type { Metadata } from "next";
import { SafariForm } from "@/components/SafariForm";
import { contact, imagery } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = { title: "Contact Us", description: contact.tagline };

export default function ContactPage() {
  return <main className="subpage">
    <PageHero title="Contact Us" description={contact.tagline} image={imagery.lionPortrait} alt="Male lion portrait" ctaHref={contact.whatsapp} ctaLabel="Enquire Now" />
    <section id="enquiry" className="section contact-page-section"><div className="shell contact-page-grid"><aside className="contact-aside"><Logo className="contact-brand-lockup" /><p className="eyebrow">Business Information / Contact Us</p><div className="contact-block"><span>Business Name</span><strong>{contact.business}</strong></div><div className="contact-block"><span>Tagline</span><strong>{contact.tagline}</strong></div><div className="contact-block"><span>Contact Person</span><strong>{contact.director}</strong></div><div className="contact-block"><span>Phone Number</span><a href={contact.phoneHref}>{contact.phone}</a></div><div className="contact-block"><span>Email Address</span><a href={contact.emailHref}>{contact.email}</a></div><div className="contact-block"><span>Physical Address</span><strong>{contact.physicalAddress}</strong></div><div className="contact-block"><span>Postal Address</span><strong>{contact.postalAddress}</strong></div><div className="contact-block"><span>Business Hours</span><strong>{contact.hours}</strong></div><a href={contact.whatsapp} className="button button--forest" target="_blank" rel="noreferrer">Enquire Now <span>&#8599;</span></a></aside><SafariForm /></div></section>
  </main>;
}
