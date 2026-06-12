"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { FEATURED_SOLUTION, SOLUTION_ITEMS } from "./navigation";

type SolutionsDropdownProps = {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  firstLinkRef: RefObject<HTMLAnchorElement | null>;
};

export function SolutionsDropdown({
  id,
  open,
  onOpenChange,
  onMouseEnter,
  onMouseLeave,
  triggerRef,
  firstLinkRef,
}: SolutionsDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;
      if (
        containerRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      onOpenChange(false);
    };

    const handleScroll = () => {
      onOpenChange(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, onOpenChange, triggerRef]);

  const handleFirstLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      onOpenChange(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute top-full left-1/2 z-50 hidden w-screen -translate-x-1/2 pt-3 lg:block ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onMouseEnter={open ? onMouseEnter : undefined}
      onMouseLeave={open ? onMouseLeave : undefined}
      onBlur={(event) => {
        if (!open) {
          return;
        }

        if (!containerRef.current?.contains(event.relatedTarget as Node)) {
          onOpenChange(false);
        }
      }}
    >
      <div
        id={id}
        role="navigation"
        aria-label="Solutions"
        aria-hidden={!open}
        className={`border-b border-rule bg-paper-elevated shadow-[0_8px_24px_rgba(11,16,32,0.06)] transition-[opacity,transform] duration-300 motion-reduce:transition-none ${
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-10 xl:px-20">
          <div className="grid grid-cols-[1fr_280px] gap-8">
            <ul className="m-0 grid list-none gap-1 p-0">
              {SOLUTION_ITEMS.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className="group relative block rounded-sm px-3 py-2.5 text-base font-medium text-ink transition-colors duration-200 hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                    tabIndex={open ? 0 : -1}
                    onKeyDown={
                      index === 0 ? handleFirstLinkKeyDown : undefined
                    }
                  >
                    <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <aside className="flex flex-col justify-between border-l border-rule bg-ember-soft/40 p-6">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-ember-soft px-3.5 py-2.5 text-xs font-semibold tracking-wide text-ink uppercase">
                  {FEATURED_SOLUTION.tag}
                </span>
                <h3 className="font-display mt-4 text-2xl leading-tight font-semibold text-ink">
                  {FEATURED_SOLUTION.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {FEATURED_SOLUTION.description}
                </p>
              </div>
              <Link
                href={FEATURED_SOLUTION.href}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
                tabIndex={open ? 0 : -1}
              >
                <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none">
                  {FEATURED_SOLUTION.cta}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  →
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
