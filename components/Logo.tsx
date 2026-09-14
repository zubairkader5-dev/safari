import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  inverse?: boolean;
  stacked?: boolean;
  className?: string;
};

export function Logo({ inverse = false, stacked = false, className = "" }: LogoProps) {
  const config = stacked
    ? { src: "/brand/wildpath-logo-stacked-dark.png", width: 2048, height: 1507 }
    : inverse
      ? { src: "/brand/wildpath-logo-light.png", width: 2048, height: 739 }
      : { src: "/brand/wildpath-logo-dark.png", width: 2047, height: 511 };

  return (
    <Link
      href="/"
      className={`logo logo--image ${stacked ? "logo--stacked" : ""} ${className}`.trim()}
      aria-label="Wildpath Safaris home"
    >
      <Image
        src={config.src}
        alt="Wildpath Safaris"
        width={config.width}
        height={config.height}
        priority={!stacked}
        className="logo__image"
      />
    </Link>
  );
}
