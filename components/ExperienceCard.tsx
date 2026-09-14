import Link from "next/link";

export function ExperienceCard({ number, title, image, alt }: { number: string; title: string; image: string; alt: string }) {
  return (
    <article className="experience-card">
      <img src={image} alt={alt} loading="lazy" />
      <div className="experience-card__shade" />
      <div className="experience-card__top"><span>{number}</span></div>
      <div className="experience-card__body">
        <h3>{title}</h3>
        <Link href="/contact">Enquire Now <span>↗</span></Link>
      </div>
    </article>
  );
}
