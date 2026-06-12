type TagChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function TagChip({ children, className = "" }: TagChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-ember-soft px-3.5 py-2.5 font-sans text-xs font-semibold tracking-[0.04em] text-ink ${className}`}
    >
      {children}
    </span>
  );
}
