import Link from "next/link";
import { forwardRef, type ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const linkClassName =
  "relative inline-flex items-center py-1 text-[0.9375rem] font-medium text-ink transition-colors duration-200 hover:text-ink-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none";

export function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  return (
    <Link href={href} className={`${linkClassName} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}

export const NavButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function NavButton({ children, className = "", ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${linkClassName} cursor-pointer bg-transparent ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
