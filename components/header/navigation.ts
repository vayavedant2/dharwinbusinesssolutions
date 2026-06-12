export type NavItem = {
  label: string;
  href: string;
};

export type SolutionItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Product", href: "/product" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOLUTION_ITEMS: readonly SolutionItem[] = [
  { label: "Software Development", href: "/solutions/software-development" },
  {
    label: "ERP & CRM Implementation",
    href: "/solutions/erp-crm-implementation",
  },
  { label: "Staffing Solutions", href: "/solutions/staffing-solutions" },
  {
    label: "Lead Generation Services",
    href: "/solutions/lead-generation",
  },
  {
    label: "Digital Marketing Services",
    href: "/solutions/digital-marketing",
  },
  { label: "Website Development", href: "/solutions/website-development" },
  {
    label: "AI Agent Development",
    href: "/solutions/ai-agent-development",
  },
] as const;

export const CTA_LABEL = "Schedule a Consultation";
export const CTA_HREF = "/contact";

export const FEATURED_SOLUTION = {
  tag: "Featured",
  title: "AI Agent Development",
  description:
    "Deploy intelligent agents that automate workflows, support teams, and scale operations with enterprise-grade reliability.",
  href: "/solutions/ai-agent-development",
  cta: "Explore AI Agents",
} as const;
