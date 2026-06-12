"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type RefObject,
} from "react";
import { Logo } from "./logo";
import {
  CTA_HREF,
  CTA_LABEL,
  FEATURED_SOLUTION,
  NAV_ITEMS,
  SOLUTION_ITEMS,
} from "./navigation";
import { NavLink } from "./nav-link";

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
        expanded ? "rotate-180" : ""
      }`}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileMenu({
  id,
  open,
  onClose,
  menuButtonRef,
}: MobileMenuProps) {
  const titleId = useId();
  const solutionsPanelId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const closeMenu = useCallback(() => {
    setSolutionsOpen(false);
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (!open) {
      setSolutionsOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const header = document.querySelector("header");
    const main = document.querySelector("main");
    header?.setAttribute("inert", "");
    main?.setAttribute("inert", "");

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const getFocusableElements = () => {
      if (!menuRef.current) {
        return [];
      }

      return Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter(
        (element) =>
          !element.hasAttribute("disabled") &&
          element.getAttribute("aria-hidden") !== "true",
      );
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      header?.removeAttribute("inert");
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open, closeMenu, menuButtonRef]);

  return (
    <div
      ref={menuRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-hidden={!open}
      inert={!open ? true : undefined}
      className={`fixed inset-0 z-[60] flex flex-col bg-paper transition-[opacity,visibility] duration-300 motion-reduce:transition-none lg:hidden ${
        open
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`flex items-center justify-between border-b border-rule px-5 py-5 transition-transform duration-300 motion-reduce:transition-none md:px-10 ${
          open ? "translate-y-0" : "-translate-y-2"
        }`}
      >
        <Logo />
        <button
          ref={closeButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink transition-colors duration-200 hover:bg-paper-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        >
          <CloseIcon />
        </button>
      </div>

      <nav
        className={`flex flex-1 flex-col overflow-y-auto px-5 py-8 transition-[opacity,transform] delay-75 duration-300 motion-reduce:transition-none md:px-10 ${
          open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
        aria-label="Main navigation"
      >
        <p id={titleId} className="sr-only">
          Site navigation
        </p>

        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {NAV_ITEMS.map((item) => {
            if (item.label !== "Solutions") {
              return (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    className="block py-3 text-lg"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-lg font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
                  aria-expanded={solutionsOpen}
                  aria-controls={solutionsPanelId}
                  onClick={() => setSolutionsOpen((current) => !current)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape" && solutionsOpen) {
                      event.preventDefault();
                      setSolutionsOpen(false);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronIcon expanded={solutionsOpen} />
                </button>
                <div
                  id={solutionsPanelId}
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${
                    solutionsOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="m-0 min-h-0 list-none space-y-1 overflow-hidden p-0 pb-4 pl-3">
                    {SOLUTION_ITEMS.map((solution) => (
                      <li key={solution.href}>
                        <Link
                          href={solution.href}
                          className="block py-2 text-base text-muted transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                          onClick={closeMenu}
                        >
                          {solution.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 border border-rule bg-ember-soft/40 p-6">
          <span className="inline-flex rounded-full bg-ember-soft px-3.5 py-2.5 text-xs font-semibold tracking-wide text-ink uppercase">
            {FEATURED_SOLUTION.tag}
          </span>
          <h3 className="font-display mt-4 text-xl font-semibold text-ink">
            {FEATURED_SOLUTION.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {FEATURED_SOLUTION.description}
          </p>
        </div>
      </nav>

      <div
        className={`border-t border-rule px-5 py-6 transition-[opacity,transform] delay-150 duration-300 motion-reduce:transition-none md:px-10 ${
          open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <Link
          href={CTA_HREF}
          className="group inline-flex items-center gap-2 text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
          onClick={closeMenu}
        >
          <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none">
            {CTA_LABEL}
          </span>
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
