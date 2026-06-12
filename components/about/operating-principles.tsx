"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { OPERATING_PRINCIPLES } from "./about-content";

const HEADLINE = "Three Principles That Govern Every Engagement.";

export function OperatingPrinciples() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="operating-principles-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <h2
            id="operating-principles-heading"
            className="max-w-[48rem] font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
          >
            {HEADLINE}
          </h2>
        </SectionReveal>

        <ol className="m-0 mt-12 list-none space-y-0 p-0 md:mt-16">
          {OPERATING_PRINCIPLES.map((principle, index) => (
            <li
              key={principle.number}
              className={`grid grid-cols-1 gap-6 border-t border-rule py-12 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-x-12 md:py-16 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-x-16 ${
                index === OPERATING_PRINCIPLES.length - 1 ? "border-b" : ""
              }`}
            >
              <SectionReveal revealed={revealed} delay={80 + index * 80}>
                <span
                  aria-hidden="true"
                  className="font-display text-[6rem] leading-none tracking-[-0.02em] text-ember md:text-[8rem] lg:text-[12.5rem]"
                >
                  {principle.number}
                </span>
              </SectionReveal>

              <SectionReveal revealed={revealed} delay={120 + index * 80}>
                <div className="min-w-0 lg:pt-4">
                  <h3 className="font-display text-[1.5rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem] lg:text-[2rem]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-[36rem] font-sans text-lg leading-[1.6] text-muted">
                    {principle.description}
                  </p>
                </div>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
