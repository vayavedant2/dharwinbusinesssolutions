type PlaceholderLogoProps = {
  label: string;
  className?: string;
};

function PlaceholderLogo({ label, className = "" }: PlaceholderLogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 opacity-40 transition-opacity duration-200 hover:opacity-100 ${className}`}
    >
      <svg
        viewBox="0 0 160 32"
        role="img"
        aria-label={label}
        className="h-8 w-auto text-ink"
      >
        <text
          x="0"
          y="22"
          fill="currentColor"
          className="font-sans text-[15px] font-semibold tracking-[0.08em]"
        >
          {label}
        </text>
      </svg>
    </span>
  );
}

export const PLACEHOLDER_LOGOS = [
  "Meridian",
  "Northgate",
  "Summit",
  "Atlas Group",
  "Pinnacle",
  "Horizon",
  "Sterling",
  "Vantage",
  "Crestline",
  "Axiom",
  "Beacon",
  "Fortis",
] as const;

export function PlaceholderLogoSet({ className = "" }: { className?: string }) {
  return (
    <>
      {PLACEHOLDER_LOGOS.map((label) => (
        <PlaceholderLogo key={label} label={label} className={className} />
      ))}
    </>
  );
}
