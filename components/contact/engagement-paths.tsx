"use client";

import { EngagementCard } from "@/components/ui/engagement-card";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { useCallback, useRef, useState } from "react";
import {
  CALENDAR_EMBED_URL,
  ENGAGEMENT_PATHS,
} from "./contact-content";

function scrollToElement(element: HTMLElement | null) {
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EngagementPaths() {
  const { ref, revealed } = useSectionReveal();
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const openCalendar = useCallback(() => {
    setCalendarVisible(true);

    requestAnimationFrame(() => {
      scrollToElement(calendarRef.current);
    });
  }, []);

  const scrollToForm = useCallback(() => {
    const form = document.getElementById("inquiry-form");
    scrollToElement(form);
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="engagement-paths-heading"
      className="border-t border-rule bg-paper max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <h2 id="engagement-paths-heading" className="sr-only">
            Engagement paths
          </h2>
        </SectionReveal>

        <div className="grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {ENGAGEMENT_PATHS.map((path, index) => (
            <SectionReveal
              key={path.id}
              revealed={revealed}
              delay={80 + index * 80}
              className="min-w-0"
            >
              {path.action === "calendar" ? (
                <EngagementCard
                  title={path.title}
                  cta={path.cta}
                  onClick={openCalendar}
                />
              ) : null}
              {path.action === "scroll-form" ? (
                <EngagementCard
                  title={path.title}
                  cta={path.cta}
                  onClick={scrollToForm}
                />
              ) : null}
              {path.action === "mailto" && "href" in path ? (
                <EngagementCard
                  title={path.title}
                  cta={path.cta}
                  href={path.href}
                />
              ) : null}
            </SectionReveal>
          ))}
        </div>

        <div
          ref={calendarRef}
          id="consultation-booking"
          className={`scroll-mt-24 transition-[opacity,transform] duration-[600ms] motion-reduce:transition-none ${
            calendarVisible
              ? "mt-12 translate-y-0 opacity-100 md:mt-16"
              : "pointer-events-none mt-0 h-0 overflow-hidden opacity-0 motion-reduce:opacity-100"
          }`}
          aria-hidden={!calendarVisible}
        >
          {calendarVisible ? (
            <SectionReveal revealed={revealed} delay={240}>
              <div className="border border-rule bg-paper-elevated p-6 md:p-8">
                <h3 className="font-display text-[1.5rem] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem]">
                  Schedule a 30-Minute Consultation
                </h3>
                {CALENDAR_EMBED_URL ? (
                  <iframe
                    title="Consultation booking calendar"
                    src={CALENDAR_EMBED_URL}
                    className="mt-6 h-[630px] w-full rounded-lg border border-rule"
                  />
                ) : (
                  <p className="mt-4 font-sans text-lg leading-[1.65] text-muted">
                    {/* Backend integration pending — calendar tooling not yet configured (website-specification.md § Backend Integrations) */}
                    Consultation booking calendar pending client configuration.
                    Set{" "}
                    <code className="font-mono text-sm text-ink">
                      NEXT_PUBLIC_CALENDAR_EMBED_URL
                    </code>{" "}
                    to enable inline scheduling (Calendly, Cal.com, HubSpot
                    Meetings, or equivalent).
                  </p>
                )}
              </div>
            </SectionReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
