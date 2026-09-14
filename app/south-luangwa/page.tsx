import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { experiences, galleryImages, imagery } from "@/lib/data";

export const metadata: Metadata = { title: "South Luangwa Safari Experiences", description: experiences[2].paragraphs[0] };

export default function SouthLuangwaPage() {
  const experience = experiences[2];
  const wildlife = galleryImages.filter((item) => ["Lions", "Leopards", "Elephants", "Spotted hyenas", "Birds"].includes(item.label)).slice(0, 6);
  return <main className="subpage">
    <PageHero title="South Luangwa Safari Experiences" description={experience.paragraphs[0]} image={imagery.lionRiver} alt="Lion beside a river in the wilderness" ctaHref="/contact" ctaLabel="Plan Your Safari" />
    <section className="section"><div className="shell editorial-split"><div><p className="eyebrow">South Luangwa Safari Experiences</p><div className="editorial-rule" /></div><div className="editorial-copy">{experience.paragraphs.map((p) => <p className={p === experience.paragraphs[0] ? "lead-copy" : ""} key={p}>{p}</p>)}<h3>Benefits</h3><ul className="exact-list">{experience.benefits.map((item) => <li key={item}>{item}</li>)}</ul><p><strong>Pricing: {experience.pricing}</strong></p></div></div></section>
    <section className="section gallery-page-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Gallery</p><h2>South Luangwa landscapes</h2></div><div className="south-gallery-grid">{wildlife.map((item) => <figure className="south-gallery-card" key={item.src}><img src={item.src} alt={item.alt} /><figcaption>{item.label}</figcaption></figure>)}</div><div className="section-footer-link"><Link href="/gallery" className="button button--forest">Gallery <span>↗</span></Link></div></div></section>
  </main>;
}
