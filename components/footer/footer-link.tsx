import Link from "next/link";
import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

const linkClassName =
  "group relative inline-flex py-1 font-sans text-[0.9375rem] leading-snug text-paper/75 transition-colors duration-200 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none";

export function FooterLink({
  href,
  children,
  external = false,
  className = "",
}: FooterLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        className={`${linkClassName} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={`${linkClassName} ${className}`}>
      {children}
    </Link>
  );
}
