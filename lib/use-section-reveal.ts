"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type UseSectionRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useSectionReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -64px 0px",
}: UseSectionRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
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

    const element = ref.current;
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
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold, rootMargin]);

  return { ref, revealed };
}
