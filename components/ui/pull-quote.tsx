type PullQuoteProps = {
  quote: string;
  attribution: string;
  role: string;
  className?: string;
};

export function PullQuote({
  quote,
  attribution,
  role,
  className = "",
}: PullQuoteProps) {
  return (
    <figure className={`mx-auto max-w-[800px] text-center ${className}`}>
      <span
        aria-hidden="true"
        className="font-display text-[3rem] leading-none text-ember md:text-[3.5rem]"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 font-display text-[1.625rem] leading-[1.45] font-medium tracking-[-0.015em] text-ink md:text-[2rem] md:leading-[1.4] lg:text-[2.5rem]">
        {quote}
      </blockquote>
      <figcaption className="mt-8 font-sans text-sm leading-relaxed text-muted">
        <span className="text-ink">{attribution}</span>
        <span className="text-muted"> · {role}</span>
      </figcaption>
    </figure>
  );
}
