const CURRENT_YEAR = new Date().getFullYear();

export function HeroEditorialMetadata({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`flex gap-6 lg:gap-8 ${className}`}
      aria-label="Firm overview"
    >
      <div
        className="flex shrink-0 flex-col items-center gap-4 pt-0.5"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="w-px min-h-[10.5rem] flex-1 bg-rule lg:min-h-[14rem]" />
      </div>

      <div className="flex flex-col gap-8 pt-1 lg:gap-10 lg:pt-2">
        <p className="font-mono text-base tracking-[0.06em] text-muted lg:text-lg">
          {CURRENT_YEAR}
        </p>
        <p className="font-sans text-base font-medium leading-snug tracking-[0.01em] text-ink lg:text-lg lg:leading-[1.35]">
          Integrated Services Firm
        </p>
        <p className="font-sans text-sm leading-relaxed tracking-[0.01em] text-muted lg:text-base">
          United States + India
        </p>
      </div>
    </aside>
  );
}
