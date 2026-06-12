"use client";

import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { CTA_HREF } from "@/components/header/navigation";
import { HeroEditorialMetadata } from "./hero-editorial-metadata";

const EYEBROW = "INTEGRATED IT · GROWTH · TALENT SOLUTIONS";

const HEADLINE =
  "Empowering Businesses with Integrated IT, Growth, and Talent Solutions.";

const SUBHEADLINE =
  "Dharwin Business Solutions partners with SMBs and scaling enterprises across the United States and India, delivering software development, business growth, and workforce capabilities through a single, accountable engagement model.";

const WORD_STAGGER_MS = 60;
const WORD_ANIMATION_MS = 500;
const HEADLINE_WORDS = HEADLINE.split(" ");
const BODY_DELAY_MS =
  HEADLINE_WORDS.length * WORD_STAGGER_MS + WORD_ANIMATION_MS;
const CTA_DELAY_MS = BODY_DELAY_MS + 150;

function WordReveal({ word, index }: { word: string; index: number }) {
  return (
    <span className="mr-[0.28em] inline-block last:mr-0">
      <span
        className="hero-word-reveal inline-block"
        style={{ animationDelay: `${index * WORD_STAGGER_MS}ms` }}
      >
        {word}
      </span>
    </span>
  );
}

export function HeroEditorial() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="bg-paper"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-x-6 px-5 py-12 md:grid-cols-8 md:px-10 md:py-16 lg:grid-cols-12 lg:gap-x-6 lg:px-20 lg:py-20">
        <div className="col-span-4 lg:col-span-7">
          <p
            className="hero-fade-up mb-6 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted"
            style={{ animationDelay: "0ms" }}
          >
            {EYEBROW}
          </p>

          <h1
            id="home-hero-heading"
            className="max-w-[850px] font-display text-[2.625rem] leading-[1.12] font-medium tracking-[-0.025em] text-ink sm:text-[3.5rem] md:text-[3.5rem] md:leading-[1.1] lg:text-[4rem] xl:text-[5rem] xl:leading-[1.08]"
          >
            {HEADLINE_WORDS.map((word, index) => (
              <WordReveal key={`${word}-${index}`} word={word} index={index} />
            ))}
          </h1>

          <p
            className="hero-fade-up mt-8 max-w-[650px] font-sans text-xl leading-[1.65] text-muted lg:mt-10 lg:text-2xl lg:leading-[1.55]"
            style={{ animationDelay: `${BODY_DELAY_MS}ms` }}
          >
            {SUBHEADLINE}
          </p>

          <div
            className="hero-fade-up mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 lg:mt-12"
            style={{ animationDelay: `${CTA_DELAY_MS}ms` }}
          >
            <PrimaryButton href={CTA_HREF}>
              Schedule a Consultation
            </PrimaryButton>
            <SecondaryButton href="/solutions">
              Explore Our Capabilities
            </SecondaryButton>
          </div>

          <HeroEditorialMetadata className="mt-14 lg:hidden" />
        </div>

        <div className="hidden lg:col-span-5 lg:flex lg:items-start lg:justify-end lg:pt-1">
          <HeroEditorialMetadata className="w-full max-w-[17.5rem]" />
        </div>
      </div>
    </section>
  );
}
