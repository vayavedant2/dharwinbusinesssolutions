"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { RESPONSE_TIME_COMMITMENT } from "./contact-content";

export function ResponseTimeCommitment() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-label="Response-time commitment"
      className="border-t border-rule bg-paper-elevated max-lg:py-16 md:max-lg:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <div className="mx-auto max-w-[900px] text-center">
            <p className="font-display text-[1.5rem] leading-[1.35] font-medium tracking-[-0.02em] text-ink md:text-[2rem] md:leading-[1.3] lg:text-[2.5rem] lg:leading-[1.25]">
              {RESPONSE_TIME_COMMITMENT.statement}
            </p>
            <p className="mx-auto mt-8 max-w-[720px] font-sans text-lg leading-[1.65] text-muted md:mt-10 md:text-xl md:leading-[1.6]">
              {RESPONSE_TIME_COMMITMENT.body}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
