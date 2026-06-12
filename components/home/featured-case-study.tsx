"use client";

import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { CaseStudyVisual } from "./case-study-visual";
import { CASE_STUDY_STATS } from "./home-content";

const TITLE =
  "Transforming Quote-to-Cash Operations for a Leading Logistics Provider.";

const BODY =
  "Atlas Logistics, a Chennai-based logistics operator, sought to address significant inefficiencies in their quote-to-cash workflow. Manual request handling, inconsistent pricing approvals, and fragmented customer delivery extended cycle times and constrained sales velocity across the organization. Dharwin engineered and deployed a custom internal application within eight weeks, automating request ingestion, dynamic pricing, multi-stage approval routing, and customer-facing quote delivery.";

export function FeaturedCaseStudy() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="case-study-heading"
      className="border-t border-rule bg-paper py-16 md:py-24 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-x-6 gap-y-10 px-5 md:grid-cols-8 md:px-10 lg:grid-cols-12 lg:gap-y-0 lg:px-20">
        <SectionReveal
          revealed={revealed}
          className="col-span-4 lg:col-span-5"
        >
          <CaseStudyVisual />
        </SectionReveal>

        <div className="col-span-4 flex flex-col justify-center lg:col-span-7 lg:pl-6 xl:pl-12">
          <SectionReveal revealed={revealed} delay={80}>
            <SectionKicker>CLIENT SUCCESS STORY · LOGISTICS · CHENNAI, 2026</SectionKicker>
            <h2
              id="case-study-heading"
              className="mt-6 font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
            >
              {TITLE}
            </h2>
          </SectionReveal>

          <SectionReveal revealed={revealed} delay={160}>
            <p className="mt-6 font-sans text-lg leading-[1.65] text-muted md:mt-8">
              {BODY}
            </p>
          </SectionReveal>

          <SectionReveal revealed={revealed} delay={240}>
            <dl className="mt-10 grid gap-8 border-t border-rule pt-10 sm:grid-cols-3 md:mt-12">
              {CASE_STUDY_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-[2.5rem] leading-none tracking-[-0.02em] text-ember md:text-[3rem]">
                    {stat.value}
                  </dt>
                  <dd className="mt-3 font-sans text-sm leading-relaxed text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionReveal>

          <SectionReveal revealed={revealed} delay={320}>
            <div className="mt-10 md:mt-12">
              <SecondaryButton href="/resources/case-studies">
                Read the Full Case Study
              </SecondaryButton>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
