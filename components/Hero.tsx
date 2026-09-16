import Link from "next/link";
import Image from "next/image";
import { imagery } from "@/lib/data";

const heroSlides = [
  { src: imagery.lionRiver, position: "center 45%" },
  { src: imagery.leopardWalk, position: "center 43%" },
  { src: imagery.elephantHerd, position: "center 50%" },
  { src: imagery.elephantsRiver, position: "center 48%" }
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`hero-slide hero-slide--${index + 1}`}
            style={{ objectPosition: slide.position }}
          />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="shell hero-content">
        <div className="hero-copy-block">
          <h1>Private Guiding in Zambia's <em>Wild Heart</em></h1>
          <p className="hero-lead">Experience Zambia through personalised safari adventures, expert private guiding and authentic encounters with wildlife, wilderness and the remarkable landscapes of the country.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button--sand">Plan Your Safari <span>&#8599;</span></Link>
            <Link href="/contact" className="button button--glass">Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
