"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { OPERATING_PRESENCE } from "./contact-content";

const LOCATIONS = [
  OPERATING_PRESENCE.usHeadquarters,
  OPERATING_PRESENCE.indiaOperations,
] as const;

export function OperatingPresence() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="operating-presence-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <h2
            id="operating-presence-heading"
            className="max-w-[900px] font-display text-[1.75rem] leading-[1.2] font-medium tracking-[-0.02em] text-ink md:text-[2.25rem] lg:text-[2.5rem]"
          >
            {OPERATING_PRESENCE.headline}
          </h2>
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
                    <p
                      key={line}
                      className={`m-0 ${
                        line.startsWith("[Phone")
                          ? "font-mono text-sm tracking-wide text-muted"
                          : ""
                      }`}
                    >
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
