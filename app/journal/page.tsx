import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { blogCategories, blogTopics, imagery } from "@/lib/data";

export const metadata: Metadata = { title: "Blog", description: "Private guiding in Zambia’s wild heart" };

export default function JournalPage() {
  return <main className="subpage">
    <PageHero title="Blog" image={imagery.bird} alt="Bird perched on a branch" />
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Suggested Blog Categories</p><h2>Suggested Blog Categories</h2></div><div className="journal-categories">{blogCategories.map((cat) => <span key={cat}>{cat}</span>)}</div><div className="section-heading journal-topic-heading"><p className="eyebrow">First Three Blog Topics</p><h2>First Three Blog Topics</h2></div><div className="journal-grid journal-grid--large">{blogTopics.map((post, index) => <article className="journal-card journal-card--large journal-card--with-image" key={post.title}><div className="journal-card__image"><img src={post.image} alt={post.alt} /></div><div className="journal-card__content"><span className="journal-index">0{index+1}</span><h2>{post.title}</h2></div></article>)}</div><div className="editorial-placeholder"><p>Full articles can be developed as a separate stage for the website.</p></div></div></section>
  </main>;
}
