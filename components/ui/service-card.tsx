import Link from "next/link";
import { TagChip } from "./tag-chip";

type ServiceCardProps = {
  number: string;
  label: string;
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
  className?: string;
};

export function ServiceCard({
  number,
  label,
  title,
  description,
  href,
  isNew = false,
  className = "",
}: ServiceCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col bg-paper-elevated p-8 transition-[transform] duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      {isNew ? (
        <TagChip className="absolute top-6 right-6">NEW</TagChip>
      ) : null}

      <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {number} / {label}
      </p>

      <h3 className="mt-4 font-display text-[1.625rem] leading-[1.2] font-medium tracking-[-0.015em] text-ink md:text-[1.75rem]">
        {title}
      </h3>

      <p className="mt-4 flex-1 font-sans text-lg leading-[1.6] text-muted">
        {description}
      </p>

      <Link
        href={href}
        className="group/link mt-8 inline-flex items-center gap-2 self-start font-sans text-base font-semibold text-ink"
      >
        <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 group-hover/link:after:scale-x-100 motion-reduce:after:transition-none">
          Learn More
        </span>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0"
        >
          →
        </span>
      </Link>
    </article>
  );
}
