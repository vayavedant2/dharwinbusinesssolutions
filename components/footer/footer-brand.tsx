import Link from "next/link";

export function FooterBrand() {
  return (
    <Link
      id="footer-wordmark"
      href="/"
      className="group inline-flex gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
      aria-label="Dharwin Business Solutions home"
    >
      <span
        className="mt-0.5 w-px shrink-0 self-stretch bg-ember"
        aria-hidden="true"
      />
      <span className="flex flex-col gap-1.5">
        <span className="font-display text-[1.375rem] leading-none font-medium tracking-[-0.02em] text-paper">
          Dharwin
        </span>
        <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-paper/50">
          Business Solutions
        </span>
      </span>
    </Link>
  );
}
