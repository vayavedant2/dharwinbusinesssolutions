"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";

const HEADLINE = "Built to Address a Pattern Observed Across the Mid-Market.";

const PULL_QUOTE =
  "A single accountable engagement consistently outperforms coordinated multi-vendor delivery.";

const BODY_BEFORE_QUOTE =
  "Weekly stakeholder meetings across vendors, fragmented accountability, and misaligned timelines produced outcomes that underperformed the sum of their parts.";

const BODY_AFTER_QUOTE =
  "Dharwin Business Solutions was established in 2022 to consolidate these functions under a single accountable engagement. The operating model has been refined continuously since inception across 32 client organizations in logistics, financial services, healthcare, education, real estate, and consumer technology.";

function EditorialPullQuote({ quote }: { quote: string }) {
  return (
    <figure className="my-10 border-y border-rule py-10 md:my-12 md:py-12">
      <span
        aria-hidden="true"
        className="font-display text-[2.5rem] leading-none text-ember md:text-[3rem]"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 font-display text-[1.5rem] leading-[1.35] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem] md:leading-[1.32] lg:text-[2rem] lg:leading-[1.3]">
        {quote}
      </blockquote>
    </figure>
  );
}

export function CompanyOrigin() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="company-origin-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <h2
            id="company-origin-heading"
            className="max-w-[720px] font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
          >
            {HEADLINE}
          </h2>
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={80} className="mt-10 md:mt-12">
          <div className="max-w-[720px]">
            <p className="font-sans text-lg leading-[1.65] text-muted md:text-xl md:leading-[1.6]">
              <span
                aria-hidden="true"
                className="float-left mr-3 mt-1 font-display text-[5rem] leading-[0.85] font-normal text-ember md:mr-4 md:text-[7.5rem]"
              >
                P
              </span>
              rior engagements across the founding team&apos;s prior firms
              revealed a consistent pattern: mid-market organizations
              repeatedly engaged three separate specialist vendors — for
              software development, growth marketing, and talent acquisition —
              and absorbed the coordination overhead as an implicit cost of
              delivery.
            </p>

            <p className="mt-6 font-sans text-lg leading-[1.65] text-muted md:mt-8 md:text-xl md:leading-[1.6]">
              {BODY_BEFORE_QUOTE}
            </p>

            <EditorialPullQuote quote={PULL_QUOTE} />

            <p className="font-sans text-lg leading-[1.65] text-muted md:text-xl md:leading-[1.6]">
              {BODY_AFTER_QUOTE}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
