import { PlaceholderLogoSet } from "./placeholder-logos";

export function LogoMarquee() {
  return (
    <div
      className="relative overflow-hidden"
      aria-label="Trusted organizations"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent md:w-24" />

      <div className="logo-marquee-track flex w-max items-center">
        <div className="logo-marquee-group flex items-center gap-16 pr-16 md:gap-20 md:pr-20">
          <PlaceholderLogoSet />
        </div>
        <div
          className="logo-marquee-group flex items-center gap-16 pr-16 md:gap-20 md:pr-20"
          aria-hidden="true"
        >
          <PlaceholderLogoSet />
        </div>
      </div>
    </div>
  );
}
