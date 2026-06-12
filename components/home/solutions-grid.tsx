"use client";

import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ServiceCard } from "@/components/ui/service-card";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { SOLUTIONS_GRID } from "./home-content";

const GRID_SPANS = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
] as const;

export function SolutionsGrid() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="solutions-grid-heading"
      className="border-t border-rule bg-paper py-16 md:py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <SectionKicker id="solutions-grid-kicker">OUR SOLUTIONS</SectionKicker>
          <h2
            id="solutions-grid-heading"
            className="mt-6 max-w-[48rem] font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3.5rem] lg:leading-[1.08]"
          >
            Comprehensive Capabilities Across Seven Service Lines
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-4 gap-6 md:grid-cols-8 md:mt-16 lg:grid-cols-12 lg:gap-6">
          {SOLUTIONS_GRID.map((solution, index) => (
            <SectionReveal
              key={solution.title}
              revealed={revealed}
              delay={80 + index * 80}
              className={`col-span-4 md:col-span-4 ${GRID_SPANS[index]}`}
            >
              <ServiceCard
                number={solution.number}
                label={solution.label}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                isNew={"isNew" in solution ? solution.isNew : false}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
