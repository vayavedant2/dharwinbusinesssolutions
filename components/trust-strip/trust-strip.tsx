import { LogoMarquee } from "@/components/logo-marquee";

const KICKER = "TRUSTED BY ORGANIZATIONS WORLDWIDE";

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-strip-heading" className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 lg:px-20 lg:py-16">
        <p
          id="trust-strip-heading"
          className="mb-8 text-center font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted md:mb-10"
        >
          {KICKER}
        </p>
      </div>

      <LogoMarquee />
    </section>
  );
}
