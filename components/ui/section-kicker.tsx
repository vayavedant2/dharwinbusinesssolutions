type SectionKickerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionKicker({
  children,
  className = "",
  id,
}: SectionKickerProps) {
  return (
    <p
      id={id}
      className={`font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}
