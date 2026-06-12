"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import Image from "next/image";
import { FOUNDER_PROFILES, type FounderProfile } from "./about-content";

export const leadershipAssetsAvailable = false;

const HEADLINE = "The Team Accountable for Client Engagements.";

function FounderCard({
  name,
  title,
  bio,
  responsibility,
  portraitSrc,
  portraitAlt,
}: FounderProfile) {
  return (
    <article className="border border-rule bg-paper-elevated">
      <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-rule">
        <Image
          src={portraitSrc}
          alt={portraitAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-[1.75rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink">
          {name}
        </h3>
        <p className="mt-2 font-sans text-sm font-medium uppercase tracking-[0.12em] text-muted">
          {title}
        </p>
        {bio.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-4 font-sans text-lg leading-[1.65] text-muted"
          >
            {paragraph}
          </p>
        ))}
        <p className="mt-6 border-t border-rule pt-6 font-sans text-sm leading-relaxed text-muted">
          {responsibility}
        </p>
      </div>
    </article>
  );
}

export function Leadership() {
  const { ref, revealed } = useSectionReveal();

  if (!leadershipAssetsAvailable || FOUNDER_PROFILES.length === 0) {
    return null;
  }

  return (
    <section
      ref={ref}
      aria-labelledby="leadership-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <h2
            id="leadership-heading"
            className="max-w-[48rem] font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
          >
            {HEADLINE}
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          {FOUNDER_PROFILES.map((founder, index) => (
            <SectionReveal
              key={founder.name}
              revealed={revealed}
              delay={80 + index * 80}
            >
              <FounderCard {...founder} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
