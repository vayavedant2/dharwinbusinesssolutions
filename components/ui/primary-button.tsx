import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-ember px-8 text-base font-semibold text-paper transition-[transform,box-shadow] duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      >
        →
      </span>
    </Link>
  );
}
