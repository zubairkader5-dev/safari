import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { companyStory, coreValues, imagery, masuzyoBio, mission, vision } from "@/lib/data";

export const metadata: Metadata = { title: "About Us", description: companyStory[0] };

export default function AboutPage() {
  return <main className="subpage">
    <PageHero title="About Us" description={companyStory[0]} image={imagery.elephantHerd} alt="Elephant herd moving through the wilderness" imagePosition="center 50%" />
    <section className="section"><div className="shell story-layout"><div className="story-layout__media"><img src={imagery.elephantFamily} alt="Elephant family in the wilderness" /></div><div className="story-layout__copy"><p className="eyebrow">Company Story</p><h2>Company Story</h2>{companyStory.map((p) => <p key={p}>{p}</p>)}</div></div></section>
    <section className="mission-band"><div className="shell mission-grid"><div><p className="eyebrow eyebrow--light">Mission</p><p>{mission}</p></div><div><p className="eyebrow eyebrow--light">Vision</p><p>{vision}</p></div></div></section>
    <section className="section"><div className="shell guide-profile"><div className="guide-photo-placeholder guide-photo-placeholder--light"><div className="guide-initials">MZ</div><div className="guide-photo-note">Professional Photo: TO BE PROVIDED</div></div><div><p className="eyebrow">Team</p><h2>Masuzyo Zimba</h2><p><strong>Position: Director / Safari Guide</strong></p><p>{masuzyoBio}</p><p>Additional Team Members</p><ul className="exact-list"><li>Full name</li><li>Position</li><li>Approximately 50-word biography</li><li>Professional photograph</li></ul></div></div></section>
    <section className="section values-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Core Values</p><h2>Core Values</h2></div><div className="values-grid">{coreValues.map((value, i) => <div key={value}><span>0{i+1}</span><strong>{value}</strong></div>)}</div></div></section>
  </main>;
}
