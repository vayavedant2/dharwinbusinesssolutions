"use client";

import { PullQuote } from "@/components/ui/pull-quote";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";

const QUOTE =
  "Dharwin replaced the need for three separate vendor relationships within our organization. They deliver the technology, source the talent, and manage outbound business development — consolidating what previously required multiple weekly stakeholder meetings into a single integrated engagement.";

export function ClientTestimonial() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-label="Client testimonial"
      className="bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <PullQuote
            quote={QUOTE}
            attribution="Priya M."
            role="Founder, Atlas Logistics"
          />
        </SectionReveal>
      </div>
    </section>
  );
}
