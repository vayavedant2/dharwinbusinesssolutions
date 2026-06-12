"use client";

import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { APPROACH_STEPS } from "./home-content";

const HEADLINE = "One Operating Cadence, Four Stages, Every Engagement.";

export function DharwinApproach() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="dharwin-approach-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-4 gap-x-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-4 lg:self-start lg:sticky lg:top-28">
            <SectionReveal revealed={revealed}>
              <SectionKicker>THE DHARWIN APPROACH</SectionKicker>
              <h2
                id="dharwin-approach-heading"
                className="mt-6 font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
              >
                {HEADLINE}
              </h2>
            </SectionReveal>
          </div>

          <div className="col-span-4 mt-12 md:col-span-8 md:mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ol className="m-0 list-none space-y-0 p-0">
              {APPROACH_STEPS.map((step, index) => (
                <li
                  key={step.number}
                  className={`grid grid-cols-[4.5rem_1fr] gap-x-6 border-t border-rule py-10 md:grid-cols-[6rem_1fr] md:gap-x-10 md:py-12 ${
                    index === APPROACH_STEPS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <SectionReveal revealed={revealed} delay={80 + index * 80}>
                    <span
                      aria-hidden="true"
                      className="font-display text-[4rem] leading-none tracking-[-0.02em] text-ink md:text-[6rem]"
                    >
                      {step.number}
                    </span>
                  </SectionReveal>
                  <SectionReveal revealed={revealed} delay={120 + index * 80}>
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.5rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 font-sans text-lg leading-[1.6] text-muted">
                        {step.description}
                      </p>
                    </div>
                  </SectionReveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
