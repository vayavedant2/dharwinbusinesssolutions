"use client";

type SectionRevealProps = {
  revealed: boolean;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({
  revealed,
  delay = 0,
  children,
  className = "",
}: SectionRevealProps) {
  return (
    <div
      className={`transition-[opacity,transform] duration-[600ms] motion-reduce:transition-none ${
        revealed
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
