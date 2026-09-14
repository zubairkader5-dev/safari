import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  ctaHref,
  ctaLabel,
  imagePosition = "center 46%"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  ctaHref?: string;
  ctaLabel?: string;
  imagePosition?: string;
}) {
  return (
    <section className="page-photo-hero">
      <img className="page-photo-hero__image" src={image} alt={alt} style={{ objectPosition: imagePosition }} />
      <div className="page-photo-hero__shade" />
      <div className="shell page-photo-hero__content">
        {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
        {ctaHref && ctaLabel ? (
          <Link href={ctaHref} className="button button--sand page-photo-hero__cta">
            {ctaLabel} <span>↗</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
