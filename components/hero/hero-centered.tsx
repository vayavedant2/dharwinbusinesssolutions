"use client";

const WORD_STAGGER_MS = 60;
const WORD_ANIMATION_MS = 500;

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

type HeroCenteredProps = {
  id: string;
  headline: string;
  subhead: string;
  eyebrow?: string;
};

export function HeroCentered({
  id,
  headline,
  subhead,
  eyebrow,
}: HeroCenteredProps) {
  const headlineWords = headline.split(" ");
  const bodyDelayMs =
    headlineWords.length * WORD_STAGGER_MS + WORD_ANIMATION_MS;

  return (
    <section aria-labelledby={id} className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:pt-20 lg:pb-8">
        <div className="mx-auto max-w-[720px] text-center">
          {eyebrow ? (
            <p
              className="hero-fade-up mb-6 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted"
              style={{ animationDelay: "0ms" }}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            id={id}
            className="font-display text-[2.625rem] leading-[1.12] font-medium tracking-[-0.025em] text-ink sm:text-[3.5rem] md:leading-[1.1] lg:text-[4rem] xl:text-[5rem] xl:leading-[1.08]"
          >
            {headlineWords.map((word, index) => (
              <WordReveal key={`${word}-${index}`} word={word} index={index} />
            ))}
          </h1>

          <p
            className="hero-fade-up mx-auto mt-8 max-w-[650px] font-sans text-xl leading-[1.65] text-muted lg:mt-10 lg:text-2xl lg:leading-[1.55]"
            style={{ animationDelay: `${bodyDelayMs}ms` }}
          >
            {subhead}
          </p>
        </div>
      </div>
    </section>
  );
}
