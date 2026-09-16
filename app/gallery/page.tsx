import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { galleryImages, imagery } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery", description: "Wildlife photography from Wildpath Safaris in Zambia, including leopards, lions, elephants, hyenas, birds and buffalo." };

export default function GalleryPage() {
  return <main className="subpage">
    <PageHero title="Gallery" image={imagery.leopardRest} alt="Leopard resting in the bush" />
    <section className="section gallery-page-section"><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">Gallery</p><h2>Gallery</h2></div><p>Moments from Zambia's wild places, shaped by patient guiding, careful observation and time in the field.</p></div><div className="gallery-grid">{galleryImages.map((item) => <figure className="gallery-grid__item" key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption>{item.label}</figcaption></figure>)}</div></div></section>
  </main>;
}
