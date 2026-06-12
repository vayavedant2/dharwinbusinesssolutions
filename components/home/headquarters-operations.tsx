"use client";

import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";

const LOCATIONS = [
  {
    title: "US Headquarters",
    lines: [
      "Dharwin Business Solutions",
      "30 N Gould Street",
      "Sheridan, Wyoming 82801",
    ],
  },
  {
    title: "India Operations",
    lines: [
      "Distributed delivery team",
      "No registered office address",
      "Operating hours: 9:30 AM – 6:30 PM IST",
    ],
  },
] as const;

export function HeadquartersOperations() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="headquarters-heading"
      className="border-t border-rule bg-paper py-16 md:py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <SectionKicker id="headquarters-heading">
            HEADQUARTERS & OPERATIONS
          </SectionKicker>
        </SectionReveal>

        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-2 md:gap-6 lg:gap-12">
          {LOCATIONS.map((location, index) => (
            <SectionReveal
              key={location.title}
              revealed={revealed}
              delay={80 + index * 80}
            >
              <div className="border-t border-rule pt-8">
                <h3 className="font-display text-[1.5rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem]">
                  {location.title}
                </h3>
                <address className="mt-4 space-y-1 font-sans text-lg not-italic leading-[1.65] text-muted">
                  {location.lines.map((line) => (
                    <p key={line} className="m-0">
                      {line}
                    </p>
                  ))}
                </address>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
