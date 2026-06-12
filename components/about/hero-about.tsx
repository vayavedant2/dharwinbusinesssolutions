"use client";

const EYEBROW = "ABOUT DHARWIN BUSINESS SOLUTIONS";

const HEADLINE =
  "An Integrated Services Firm for SMBs and Scaling Enterprises.";

const SUBHEADLINE =
  "Dharwin Business Solutions was founded in 2022 to address a structural inefficiency observed across mid-market organizations: the requirement to engage and coordinate multiple specialist firms — for software, growth, and talent — when a single accountable team can deliver equivalent or superior outcomes.";

const WORD_STAGGER_MS = 60;
const WORD_ANIMATION_MS = 500;
const HEADLINE_WORDS = HEADLINE.split(" ");
const BODY_DELAY_MS =
  HEADLINE_WORDS.length * WORD_STAGGER_MS + WORD_ANIMATION_MS;

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

function LeadershipPortraitPlaceholder() {
  return (
    <figure
      className="flex w-full max-w-[17.5rem] flex-col"
      aria-label="Leadership profile placeholder"
    >
      <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-end border border-rule bg-paper-elevated p-6">
        <div
          className="absolute inset-6 border border-rule bg-gradient-to-b from-rule/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-[28%] h-24 w-24 -translate-x-1/2 rounded-full border border-rule bg-rule/50"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-16 left-6 right-6 space-y-2"
          aria-hidden="true"
        >
          <div className="h-px w-full bg-rule" />
          <div className="h-px w-3/4 bg-rule" />
        </div>
        <figcaption className="relative z-10 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
          Leadership Profile
        </figcaption>
      </div>
    </figure>
  );
}

export function HeroAbout() {
  return (
    <section aria-labelledby="about-hero-heading" className="bg-paper">
      <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-x-6 px-5 py-12 md:grid-cols-8 md:px-10 md:py-16 lg:grid-cols-12 lg:gap-x-6 lg:px-20 lg:pt-20 lg:pb-8">
        <div className="col-span-4 lg:col-span-8">
          <p
            className="hero-fade-up mb-6 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted"
            style={{ animationDelay: "0ms" }}
          >
            {EYEBROW}
          </p>

          <h1
            id="about-hero-heading"
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
        </div>

        <div className="col-span-4 mt-12 flex justify-start md:col-span-4 md:mt-16 lg:col-span-4 lg:mt-0 lg:justify-end lg:pt-1">
          <LeadershipPortraitPlaceholder />
        </div>
      </div>
    </section>
  );
}
