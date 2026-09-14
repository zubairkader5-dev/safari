import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { experiences, imagery } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Private guiding in Zambia's wild heart" };

export default function ExperiencesPage() {
  return <main className="subpage">
    <PageHero title="Services" description="Private guiding in Zambia’s wild heart" image={imagery.leopardTree} alt="Leopard resting in a tree" />
    <section className="section"><div className="shell experience-detail-list">{experiences.map((experience, index) => <article className={`experience-detail ${index % 2 ? "experience-detail--reverse" : ""}`} key={experience.title}><div className="experience-detail__media"><img src={experience.image} alt={experience.alt} /><span>{experience.number}</span></div><div className="experience-detail__copy"><p className="eyebrow">Service {experience.number}</p><h2>{experience.title}</h2>{experience.paragraphs.map((p) => <p key={p}>{p}</p>)}<h3>Benefits</h3><ul>{experience.benefits.map((item) => <li key={item}>{item}</li>)}</ul><div className="price-note">Pricing: {experience.pricing}</div></div></article>)}</div></section>
  </main>;
}
