import Link from "next/link";
import Image from "next/image";

export function ExperienceCard({ number, title, image, alt }: { number: string; title: string; image: string; alt: string }) {
  return (
    <article className="experience-card">
      <Image src={image} alt={alt} fill sizes="(max-width: 560px) 50vw, (max-width: 1080px) 72vw, 33vw" />
      <div className="experience-card__shade" />
      <div className="experience-card__top"><span>{number}</span></div>
      <div className="experience-card__body">
        <h3>{title}</h3>
        <Link href="/contact">Enquire Now <span>↗</span></Link>
      </div>
    </article>
  );
}
