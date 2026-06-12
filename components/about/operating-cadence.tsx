"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";

const HEADLINE = "Distributed Operations, Synchronous Decision-Making.";

const BODY =
  "Operations are asynchronous-by-default. Client engagements maintain a weekly sync, daily standups in the relevant time zone, biweekly sprint demos, and quarterly leadership offsites.";

function OperationalImageryPlaceholder() {
  return (
    <div
      className="flex aspect-[4/5] w-full flex-col border border-rule bg-paper-elevated p-6 md:aspect-[3/4] md:p-8"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
          Operations
        </p>
        <p className="font-mono text-[0.6875rem] text-muted">US + India</p>
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-4">
        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Weekly Sync
          </p>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full bg-rule" />
            <div className="h-2 w-5/6 bg-ink/10" />
          </div>
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Daily Standups
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-10 border border-rule" />
            <div className="h-10 border border-ink/15" />
            <div className="h-10 border border-rule" />
          </div>
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Sprint Demos
          </p>
          <div className="mt-4 flex gap-2">
            <div className="h-2 flex-1 bg-ember/20" />
            <div className="h-2 flex-1 bg-rule" />
            <div className="h-2 flex-1 bg-rule" />
          </div>
        </div>

        <div className="mt-auto border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Leadership Offsites
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-12 border border-rule" />
            <div className="h-12 border border-ink/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OperatingCadence() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="operating-cadence-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-x-6 gap-y-10 px-5 md:grid-cols-8 md:px-10 lg:grid-cols-12 lg:gap-y-0 lg:px-20">
        <SectionReveal
          revealed={revealed}
          className="col-span-4 lg:col-span-4"
        >
          <OperationalImageryPlaceholder />
        </SectionReveal>

        <div className="col-span-4 flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <SectionReveal revealed={revealed} delay={80}>
            <h2
              id="operating-cadence-heading"
              className="font-display text-[2rem] leading-[1.15] font-medium tracking-[-0.02em] text-ink md:text-[2.5rem] md:leading-[1.12] lg:text-[3rem] lg:leading-[1.1]"
            >
              {HEADLINE}
            </h2>
          </SectionReveal>

          <SectionReveal revealed={revealed} delay={160}>
            <p className="mt-6 font-sans text-lg leading-[1.65] text-muted md:mt-8 md:text-xl md:leading-[1.6]">
              {BODY}
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
