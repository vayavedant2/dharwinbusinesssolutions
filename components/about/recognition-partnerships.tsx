"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import Image from "next/image";
import { PARTNERSHIP_ENTRIES, type PartnershipEntry } from "./about-content";

export const partnershipAssetsAvailable = false;

function PartnershipLogo({
  name,
  logoSrc,
  logoAlt,
}: PartnershipEntry) {
  return (
    <div className="flex h-12 items-center justify-center px-4">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={120}
        height={32}
        className="h-8 w-auto object-contain opacity-60 transition-opacity duration-200 hover:opacity-100"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function RecognitionPartnerships() {
  const { ref, revealed } = useSectionReveal();

  if (!partnershipAssetsAvailable || PARTNERSHIP_ENTRIES.length < 3) {
    return null;
  }

  return (
    <section
      ref={ref}
      aria-labelledby="recognition-partnerships-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <h2
            id="recognition-partnerships-heading"
            className="font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
          >
            Recognition &amp; Partnerships
          </h2>
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={80}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-y border-rule py-10 md:mt-16 md:gap-12 md:py-12">
            {PARTNERSHIP_ENTRIES.map((entry) => (
              <PartnershipLogo key={entry.name} {...entry} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
