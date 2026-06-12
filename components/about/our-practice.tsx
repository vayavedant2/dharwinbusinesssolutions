"use client";

import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { TEAM_PLACEHOLDER_COUNT } from "./about-content";

const KICKER = "OUR PRACTICE · 48 PROFESSIONALS ACROSS TWO GEOGRAPHIES";

const HEADLINE = "A Distributed Team Organized Around Client Outcomes.";

const BODY =
  "Seven service lines, each led by a senior practitioner. Deployment based on functional fit, sector experience, availability.";

function TeamMemberPlaceholder({ index }: { index: number }) {
  return (
    <article className="group relative aspect-square overflow-hidden border border-rule bg-paper-elevated">
      <div
        className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-rule/30 to-transparent p-4"
        aria-hidden="true"
      >
        <div className="h-16 w-16 rounded-full border border-rule bg-rule/60 md:h-20 md:w-20" />
        <div className="mt-4 h-px w-2/3 bg-rule" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-ink/80 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:opacity-100">
        <p className="font-sans text-sm font-medium text-paper">
          Team Member {String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-1 font-sans text-xs text-paper/75">
          Senior Practitioner
        </p>
      </div>
    </article>
  );
}

function AdditionalMembersTile() {
  return (
    <article className="flex aspect-square flex-col items-center justify-center border border-rule bg-paper p-6 text-center">
      <p className="font-display text-[1.25rem] leading-[1.25] font-medium tracking-[-0.015em] text-ink md:text-[1.5rem]">
        Additional Team Members
      </p>
    </article>
  );
}

export function OurPractice() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="our-practice-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <SectionKicker id="our-practice-heading">{KICKER}</SectionKicker>
          <h2 className="mt-6 max-w-[48rem] font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]">
            {HEADLINE}
          </h2>
          <p className="mt-6 max-w-[42rem] font-sans text-lg leading-[1.65] text-muted md:mt-8 md:text-xl md:leading-[1.6]">
            {BODY}
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-16 md:gap-5 lg:grid-cols-5 lg:gap-6">
          {Array.from({ length: TEAM_PLACEHOLDER_COUNT }, (_, index) => (
            <SectionReveal
              key={`team-${index}`}
              revealed={revealed}
              delay={80 + index * 40}
            >
              <TeamMemberPlaceholder index={index} />
            </SectionReveal>
          ))}
          <SectionReveal
            revealed={revealed}
            delay={80 + TEAM_PLACEHOLDER_COUNT * 40}
          >
            <AdditionalMembersTile />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
