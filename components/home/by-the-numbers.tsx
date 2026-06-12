"use client";

import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { StatBlock } from "@/components/ui/stat-block";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { useSyncExternalStore } from "react";
import { BY_THE_NUMBERS } from "./home-content";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ByTheNumbers() {
  const { ref, revealed } = useSectionReveal();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );

  return (
    <section
      ref={ref}
      aria-labelledby="by-the-numbers-heading"
      className="border-y border-rule bg-paper py-16 md:py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed} className="text-center lg:text-left">
          <SectionKicker id="by-the-numbers-heading">
            DHARWIN BY THE NUMBERS
          </SectionKicker>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-16 lg:grid-cols-4 lg:gap-x-6">
          {BY_THE_NUMBERS.map((stat, index) => (
            <SectionReveal
              key={stat.caption}
              revealed={revealed}
              delay={80 + index * 80}
            >
              <StatBlock
                value={stat.value}
                suffix={"suffix" in stat ? stat.suffix : ""}
                caption={stat.caption}
                active={revealed}
                prefersReducedMotion={prefersReducedMotion}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal revealed={revealed} delay={400}>
          <p className="mt-12 text-center font-sans text-sm text-muted lg:mt-16 lg:text-left">
            Metrics current as of 2026, updated quarterly.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
