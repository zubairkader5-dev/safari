import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { galleryImages, imagery } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery", description: "Private guiding in Zambia’s wild heart" };

export default function GalleryPage() {
  return <main className="subpage">
    <PageHero title="Gallery" image={imagery.leopardRest} alt="Leopard resting in the bush" />
    <section className="section gallery-page-section"><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">Gallery</p><h2>Gallery</h2></div><p>Important: Use only photographs owned by Wildpath or photographs for which the company has permission/licensing rights.</p></div><div className="gallery-grid">{galleryImages.map((item) => <figure className="gallery-grid__item" key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption>{item.label}</figcaption></figure>)}</div></div></section>
  </main>;
}
