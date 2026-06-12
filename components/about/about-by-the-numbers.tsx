"use client";

import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { StatBlock } from "@/components/ui/stat-block";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { useSyncExternalStore } from "react";
import { ABOUT_BY_THE_NUMBERS } from "./about-content";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AboutByTheNumbers() {
  const { ref, revealed } = useSectionReveal();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );

  return (
    <section
      ref={ref}
      aria-labelledby="about-by-the-numbers-heading"
      className="border-y border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed} className="text-center lg:text-left">
          <SectionKicker id="about-by-the-numbers-heading">
            DHARWIN BY THE NUMBERS
          </SectionKicker>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-16 lg:grid-cols-4 lg:gap-x-6">
          {ABOUT_BY_THE_NUMBERS.map((stat, index) => (
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
      </div>
    </section>
  );
}
