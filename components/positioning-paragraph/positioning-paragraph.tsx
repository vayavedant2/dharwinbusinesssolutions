"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const PARAGRAPHS = [
  "Modern enterprises face an increasingly complex challenge: managing technology development, growth strategy, and talent acquisition while maintaining focus on core operations.",
  "Dharwin Business Solutions addresses this challenge through a unified service model that delivers integrated software, growth, and staffing capabilities under a single accountable engagement.",
] as const;

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PositioningParagraph() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );
  const revealed = prefersReducedMotion || inView;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -64px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Positioning statement"
      className="bg-paper py-16 md:py-24 lg:py-40"
    >
      <div
        className={`mx-auto max-w-[720px] px-5 text-center transition-[opacity,transform] duration-[600ms] motion-reduce:transition-none md:px-10 ${
          revealed
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        {PARAGRAPHS.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`font-display text-[1.375rem] leading-[1.55] font-medium tracking-[-0.015em] text-ink md:text-[1.625rem] md:leading-[1.5] lg:text-[1.75rem] lg:leading-[1.48] ${
              index > 0 ? "mt-8 md:mt-10" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
