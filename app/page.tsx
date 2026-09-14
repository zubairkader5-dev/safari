import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SafariForm } from "@/components/SafariForm";
import { Logo } from "@/components/Logo";
import { blogTopics, closingMessage, experiences, faqs, imagery, welcomeParagraph, whyChoose } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section intro-section">
        <div className="shell editorial-split">
          <div><p className="eyebrow">Welcome Paragraph</p><Logo stacked className="section-brand-mark" /></div>
          <div className="editorial-copy"><h2>Welcome to Wildpath Safaris and Tours Zambia Limited</h2><p className="lead-copy">{welcomeParagraph}</p></div>
        </div>
      </section>

      <section className="section experiences-section">
        <div className="shell">
          <div className="section-heading section-heading--split"><div><p className="eyebrow eyebrow--light">Homepage</p><h2>Featured Services</h2></div></div>
          <div className="experience-grid">
            {experiences.map((item) => <ExperienceCard key={item.title} number={item.number} title={item.title} image={item.image} alt={item.alt} />)}
          </div>
          <div className="section-footer-link"><Link href="/experiences" className="button button--light-outline experiences-view-all">View All <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section private-guide-section">
        <div className="shell private-guide-grid">
          <div className="image-stack"><div className="image-stack__large"><img src={imagery.leopardTree} alt="Leopard resting in a tree" /></div><div className="image-stack__small"><img src={imagery.leopardWalk} alt="Leopard walking through the bush" /></div></div>
          <div className="private-guide-copy"><p className="eyebrow">Why Choose Wildpath Safaris?</p><h2>Why Choose Wildpath Safaris?</h2><div className="benefit-list">{whyChoose.map(([title, description], index) => <div className="benefit" key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{description}</p></div></div>)}</div></div>
        </div>
      </section>

      <section className="guide-portrait-section">
        <div className="shell guide-portrait-grid">
          <div className="guide-photo-placeholder"><div className="guide-initials">MZ</div><div className="guide-photo-note">Professional Photo: TO BE PROVIDED</div></div>
          <div className="guide-story"><p className="eyebrow eyebrow--light">Team</p><h2>Masuzyo Zimba</h2><p className="guide-role">Director / Safari Guide</p><p>Masuzyo Zimba is a Zambian safari professional with a strong passion for wildlife, conservation and guiding. His approach to safari is centred on personal experiences, wildlife interpretation and helping guests develop a deeper appreciation of Zambia's natural heritage.</p><Link href="/about" className="button button--sand">About Us <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section gallery-preview-section">
        <div className="shell">
          <div className="section-heading section-heading--split"><div><p className="eyebrow">Gallery</p><h2>Gallery</h2></div><p>The website should contain approximately 10–25 high-quality photographs.</p></div>
          <div className="home-gallery-rail">
            {[imagery.lionGroup, imagery.elephantHerd, imagery.leopardRest, imagery.hyenaGroup, imagery.bird].map((src, i) => <div className="home-gallery-card" key={src}><img src={src} alt={["Lions", "Elephants", "Leopards", "Spotted hyenas", "Birds"][i]} /></div>)}
          </div>
          <div className="section-footer-link"><Link href="/gallery" className="button button--forest">Gallery <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section journal-preview">
        <div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">Blog</p><h2>First Three Blog Topics</h2></div><p>Full articles can be developed as a separate stage for the website.</p></div>
          <div className="journal-grid">{blogTopics.map((post, index) => <article className="journal-card journal-card--with-image" key={post.title}><div className="journal-card__image"><img src={post.image} alt={post.alt} /></div><div className="journal-card__content"><span className="journal-index">0{index + 1}</span><h3>{post.title}</h3></div></article>)}</div>
          <div className="section-footer-link"><Link href="/journal" className="button button--forest">Blog <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-layout"><div><p className="eyebrow">Frequently Asked Questions</p><h2>Frequently Asked Questions</h2></div><div className="faq-items">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="closing-band"><div className="shell closing-band__inner"><div><p className="eyebrow eyebrow--light">Wildpath Safaris and Tours Zambia Limited</p><h2>{closingMessage}</h2><p>Private guiding in Zambia's wild heart</p></div><Link href="/contact" className="button button--sand">Plan Your Safari <span>↗</span></Link></div></section>

      <section className="section enquiry-section"><div className="shell"><SafariForm /></div></section>
    </main>
  );
}
