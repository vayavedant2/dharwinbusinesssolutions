"use client";

import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { ProductSpotlightVisual } from "./product-spotlight-visual";

const HEADLINE =
  "Our Proprietary Operating Platform — Now Available to Select Clients.";

const BODY =
  "Dharwin OS is the integrated business operations platform on which our own organization operates across software, growth, and talent engagements — now extended to a curated group of enterprise clients. The platform unifies CRM, AI-powered conversational agents, workflow automation, and integrated operational reporting.";

export function ProductSpotlight() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="product-spotlight-heading"
      className="bg-ink-90 text-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 text-center md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <SectionKicker className="text-paper/55">
            INTRODUCING DHARWIN OS
          </SectionKicker>
          <h2
            id="product-spotlight-heading"
            className="mx-auto mt-6 max-w-[48rem] font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-paper md:text-[2.5rem] md:leading-[1.12] lg:text-[3.5rem] lg:leading-[1.08]"
          >
            {HEADLINE}
          </h2>
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={80}>
          <p className="mx-auto mt-6 max-w-[42rem] font-sans text-lg leading-[1.65] text-paper/75 md:mt-8 md:text-xl">
            {BODY}
          </p>
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={160}>
          <ProductSpotlightVisual />
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:gap-8 md:mt-12">
            <PrimaryButton href="/product#early-access">
              Join the Waitlist
            </PrimaryButton>
            <SecondaryButton href="/product" className="text-paper">
              Learn More About the Product
            </SecondaryButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
