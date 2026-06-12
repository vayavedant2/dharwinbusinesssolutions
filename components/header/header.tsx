"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavButton, NavLink } from "./nav-link";
import { CTA_HREF, CTA_LABEL, NAV_ITEMS } from "./navigation";
import { SolutionsDropdown } from "./solutions-dropdown";

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={`ml-1 transition-transform duration-200 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
      <span className="block h-px w-full bg-ink" />
      <span className="block h-px w-full bg-ink" />
      <span className="block h-px w-full bg-ink" />
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsMenuId = useId();
  const mobileMenuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const firstSolutionLinkRef = useRef<HTMLAnchorElement>(null);
  const solutionsCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const openSolutions = useCallback(() => {
    if (solutionsCloseTimerRef.current) {
      clearTimeout(solutionsCloseTimerRef.current);
      solutionsCloseTimerRef.current = null;
    }
    setSolutionsOpen(true);
  }, []);

  const scheduleCloseSolutions = useCallback(() => {
    if (solutionsCloseTimerRef.current) {
      clearTimeout(solutionsCloseTimerRef.current);
    }

    solutionsCloseTimerRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      solutionsCloseTimerRef.current = null;
    }, 120);
  }, []);

  const closeSolutions = useCallback(() => {
    if (solutionsCloseTimerRef.current) {
      clearTimeout(solutionsCloseTimerRef.current);
      solutionsCloseTimerRef.current = null;
    }
    setSolutionsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleSolutionsKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSolutionsOpen(true);
      requestAnimationFrame(() => {
        firstSolutionLinkRef.current?.focus();
      });
      return;
    }

    if (event.key === "Escape" && solutionsOpen) {
      event.preventDefault();
      setSolutionsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
          scrolled
            ? "border-b border-rule bg-paper-elevated shadow-[0_1px_0_rgba(11,16,32,0.04)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-[4.5rem] max-w-[1280px] items-center px-5 md:px-10 xl:px-20">
          <div className="flex min-w-0 flex-1 items-center lg:flex-none">
            <Logo />
          </div>

          <nav
            className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            aria-label="Main navigation"
          >
            <ul className="m-0 flex list-none items-center gap-8 p-0">
              {NAV_ITEMS.map((item) => {
                if (item.label === "Solutions") {
                  return (
                    <li key={item.href} className="relative">
                      <NavButton
                        ref={solutionsButtonRef}
                        aria-haspopup="true"
                        aria-expanded={solutionsOpen}
                        aria-controls={solutionsMenuId}
                        onMouseEnter={openSolutions}
                        onMouseLeave={scheduleCloseSolutions}
                        onKeyDown={handleSolutionsKeyDown}
                        onClick={() =>
                          setSolutionsOpen((current) => !current)
                        }
                      >
                        {item.label}
                        <ChevronDownIcon open={solutionsOpen} />
                      </NavButton>
                      <SolutionsDropdown
                        id={solutionsMenuId}
                        open={solutionsOpen}
                        onOpenChange={setSolutionsOpen}
                        onMouseEnter={openSolutions}
                        onMouseLeave={closeSolutions}
                        triggerRef={solutionsButtonRef}
                        firstLinkRef={firstSolutionLinkRef}
                      />
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link
              href={CTA_HREF}
              className="group hidden items-center gap-2 text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember lg:inline-flex"
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

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink transition-colors duration-200 hover:bg-paper-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={mobileMenuId}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMenuOpen((current) => !current)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        id={mobileMenuId}
        open={menuOpen}
        onClose={closeMobileMenu}
        menuButtonRef={menuButtonRef}
      />
    </>
  );
}
