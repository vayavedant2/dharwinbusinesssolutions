"use client";

import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { CTA_HREF } from "@/components/header/navigation";
import { useSectionReveal } from "@/lib/use-section-reveal";

const HEADLINE = "Discuss Your Business Requirements with Our Team.";

const SUBHEAD =
  "Schedule a complimentary 30-minute consultation. Our team will provide an honest assessment of engagement fit and, where applicable, recommend alternative resources to support your strategic objectives.";

export function ClosingCtaBanner() {
  const { ref, revealed } = useSectionReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      aria-labelledby="closing-cta-heading"
      className="bg-ink-90 text-paper"
    >
      <div
        className={`mx-auto max-w-[960px] px-5 text-center transition-[opacity,transform] duration-[600ms] motion-reduce:transition-none md:px-10 max-lg:py-16 md:max-lg:py-24 ${
          revealed
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        <h2
          id="closing-cta-heading"
          className="font-display text-[2.25rem] leading-[1.15] font-medium tracking-[-0.02em] text-paper md:text-[3rem] md:leading-[1.12] lg:text-[4rem] lg:leading-[1.08]"
        >
          {HEADLINE}
        </h2>

        <p className="mx-auto mt-6 max-w-[42rem] font-sans text-lg leading-[1.6] text-paper/75 md:mt-8 md:text-xl">
          {SUBHEAD}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:gap-8 md:mt-12">
          <PrimaryButton href={CTA_HREF}>Schedule a Consultation</PrimaryButton>
          <SecondaryButton href="/contact" className="text-paper">
            Submit a Project Brief
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
