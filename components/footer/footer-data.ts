import { NAV_ITEMS, SOLUTION_ITEMS } from "@/components/header/navigation";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: readonly FooterLink[];
};

const companyLinks = NAV_ITEMS.filter((item) =>
  ["About", "Product", "Careers", "Contact"].includes(item.label),
).map(({ label, href }) => ({ label, href }));

export const MANIFESTO =
  "The integrated operating partner for businesses that require software, growth, and talent functions delivered under a single accountable engagement." as const;

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Solutions",
    links: SOLUTION_ITEMS.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Company",
    links: companyLinks,
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Newsletter", href: "#footer-newsletter" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "/connect/linkedin" },
      { label: "X / Twitter", href: "/connect/twitter" },
      { label: "Instagram", href: "/connect/instagram" },
    ],
  },
] as const;
