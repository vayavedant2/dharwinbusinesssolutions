import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

// Source is a 200×200 square; the horizontal mark sits in the center (~30% tall, ~75% wide).
const LOGO_MARK_HEIGHT = 46;
const LOGO_MARK_WIDTH = 150;
const LOGO_SOURCE_SIZE = Math.round(LOGO_MARK_HEIGHT / 0.3);

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember ${className}`}
      aria-label="Dharwin Business Solutions home"
    >
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{
          width: LOGO_MARK_WIDTH,
          height: LOGO_MARK_HEIGHT,
        }}
        aria-hidden="true"
      >
        <Image
          src="/assets/brand/dharwinbs-logo.png"
          alt=""
          width={200}
          height={200}
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          style={{
            width: LOGO_SOURCE_SIZE,
            height: LOGO_SOURCE_SIZE,
          }}
          priority
        />
      </span>
    </Link>
  );
}
