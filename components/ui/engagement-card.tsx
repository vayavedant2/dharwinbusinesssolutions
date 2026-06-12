import Link from "next/link";

type EngagementCardProps = {
  title: string;
  cta: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

function CardCta({ cta }: { cta: string }) {
  return (
    <span className="group/link mt-8 flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 font-sans text-base font-semibold text-ink">
      <span className="relative min-w-0 break-words after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 group-hover/link:after:scale-x-100 motion-reduce:after:transition-none">
        {cta}
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0"
      >
        →
      </span>
    </span>
  );
}

export function EngagementCard({
  title,
  cta,
  href,
  onClick,
  className = "",
}: EngagementCardProps) {
  const cardClassName = `group flex h-full min-w-0 flex-col border border-rule bg-paper-elevated p-8 transition-[transform] duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`;

  const actionClassName =
    "mt-auto w-full min-w-0 max-w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember";

  if (href) {
    return (
      <article className={cardClassName}>
        <h3 className="font-display text-[1.625rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem]">
          {title}
        </h3>
        <Link href={href} className={actionClassName}>
          <CardCta cta={cta} />
        </Link>
      </article>
    );
  }

  return (
    <article className={cardClassName}>
      <h3 className="font-display text-[1.625rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem]">
        {title}
      </h3>
      <button
        type="button"
        onClick={onClick}
        className={actionClassName}
      >
        <CardCta cta={cta} />
      </button>
    </article>
  );
}
