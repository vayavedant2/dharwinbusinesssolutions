"use client";

import { useCountUp } from "@/lib/use-count-up";

type StatBlockProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  caption: string;
  active: boolean;
  prefersReducedMotion?: boolean;
};

export function StatBlock({
  value,
  suffix = "",
  prefix = "",
  caption,
  active,
  prefersReducedMotion = false,
}: StatBlockProps) {
  const count = useCountUp(value, active, 1200, prefersReducedMotion);

  return (
    <div className="text-center lg:text-left">
      <p
        className="font-display text-[4.5rem] leading-none font-normal tracking-[-0.02em] text-ember md:text-[6rem] lg:text-[8rem]"
        aria-label={`${prefix}${value}${suffix}`}
      >
        <span aria-hidden="true">
          {prefix}
          {count}
          {suffix}
        </span>
      </p>
      <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
        {caption}
      </p>
    </div>
  );
}
