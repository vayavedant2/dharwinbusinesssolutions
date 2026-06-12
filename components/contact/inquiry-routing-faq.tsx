"use client";

import { Accordion } from "@/components/ui/accordion";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { INQUIRY_ROUTING_FAQ } from "./contact-content";

export function InquiryRoutingFaq() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="inquiry-faq-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <SectionKicker id="inquiry-faq-heading">
            INQUIRY ROUTING FAQ
          </SectionKicker>
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={80}>
          <div className="mx-auto mt-10 max-w-[900px]">
            <Accordion
              headingId="inquiry-faq-heading"
              items={INQUIRY_ROUTING_FAQ.map((item) => ({
                id: item.id,
                question: item.question,
                answer: item.answer,
              }))}
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
