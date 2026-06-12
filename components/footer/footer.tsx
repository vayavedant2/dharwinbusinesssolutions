"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FooterBrand } from "./footer-brand";
import { FOOTER_COLUMNS, MANIFESTO } from "./footer-data";
import { FooterLink } from "./footer-link";
import { NewsletterForm } from "./newsletter-form";

const columnHeadingClassName =
  "font-mono text-xs font-medium uppercase tracking-[0.14em] text-paper/55";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
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

    const element = footerRef.current;
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
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <footer
      ref={footerRef}
      className="bg-ink-90 text-paper"
      aria-labelledby="footer-wordmark"
    >
      <div
        className={`mx-auto max-w-[1280px] px-5 py-12 transition-[opacity,transform] duration-[600ms] motion-reduce:transition-none md:px-10 lg:py-28 xl:px-20 ${
          revealed
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10">
          <div className="order-3 lg:order-1 lg:col-span-2 lg:pt-1">
            <FooterBrand />
          </div>

          <div className="order-2 lg:order-2 lg:col-span-7">
            <p className="max-w-[38rem] font-display text-[1.375rem] leading-[1.4] font-medium text-paper md:text-2xl md:leading-[1.35] lg:text-[2rem] lg:leading-[1.3]">
              {MANIFESTO}
            </p>
          </div>

          <div className="order-1 lg:order-3 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:justify-self-end lg:pt-1">
            <NewsletterForm />
          </div>
        </div>

        <nav
          className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-6"
          aria-label="Footer navigation"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className={columnHeadingClassName}>{column.title}</h2>
              <ul className="m-0 mt-3 list-none space-y-2 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} external={link.external}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div
          className="mt-10 border-t border-rule/25 lg:mt-12"
          role="separator"
          aria-hidden="true"
        />

        <div className="mt-6 flex flex-col gap-3 font-sans text-sm leading-relaxed text-paper/60 lg:grid lg:grid-cols-3 lg:items-center lg:gap-6">
          <p className="m-0 lg:text-left">
            &copy; 2026 Dharwin Business Solutions
          </p>
          <p className="m-0 lg:text-center">Sheridan, WY</p>
          <p className="m-0 lg:text-right">
            Response within one business day
          </p>
        </div>
      </div>
    </footer>
  );
}
