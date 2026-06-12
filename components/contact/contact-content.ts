/**
 * Contact page copy — locked per website-specification.md (Designer Brief).
 * content-reference.md does not include a dedicated contact page.
 */

export const CONTACT_HERO = {
  headline: "Begin a Consultation With the Dharwin Team.",
  subhead:
    "Dharwin Business Solutions responds to all inbound inquiries within one business day. Multiple engagement paths are provided below — select the path that aligns with your requirement.",
} as const;

export const ENGAGEMENT_PATHS = [
  {
    id: "consultation",
    title: "Schedule a Consultation",
    cta: "Schedule a 30-Minute Consultation",
    action: "calendar" as const,
  },
  {
    id: "project-brief",
    title: "Submit a Project Brief",
    cta: "Submit a Project Brief",
    action: "scroll-form" as const,
  },
  {
    id: "direct-email",
    title: "Direct Email",
    cta: "contact@dharwinbusinesssolutions.com",
    action: "mailto" as const,
    href: "mailto:contact@dharwinbusinesssolutions.com",
  },
] as const;

export const SERVICE_AREA_OPTIONS = [
  "Software Development",
  "ERP & CRM Implementation",
  "Staffing Solutions",
  "Lead Generation Services",
  "Digital Marketing Services",
  "Website Development",
  "AI Agent Development",
  "Dharwin OS",
  "Careers",
  "Other",
] as const;

export const INQUIRY_FORM = {
  heading: "Inquiry Form",
  submitLabel: "Submit Inquiry",
  responseTime:
    "Standard response time: one business day. Detailed inquiries with stakeholder review: substantive response within three business days.",
  fileUpload: {
    label: "Supporting Documentation",
    hint: "Optional. Maximum 10 MB.",
    maxBytes: 10 * 1024 * 1024,
  },
} as const;

export const OPERATING_PRESENCE = {
  headline:
    "Headquartered in the United States. Operations Across the United States and India.",
  usHeadquarters: {
    title: "US Headquarters",
    lines: [
      "Dharwin Business Solutions",
      "30 N Gould Street",
      "Sheridan, Wyoming 82801",
      // Phone TBD — confirmed numbers pending client delivery (website-specification.md)
      "[Phone number pending client confirmation]",
      "Response within one business day",
    ],
  },
  indiaOperations: {
    title: "India Operations",
    lines: [
      "Distributed delivery team across multiple time zones; continuous coverage.",
      // Phone TBD — confirmed numbers pending client delivery (website-specification.md)
      "[Phone number pending client confirmation]",
      "Operating hours 9:30 AM – 6:30 PM IST",
    ],
  },
} as const;

export const RESPONSE_TIME_COMMITMENT = {
  statement:
    "Dharwin Business Solutions responds to every inbound message within one business day during standard operating hours.",
  body: "Detailed inquiries requiring documentation review or stakeholder input receive an interim acknowledgment within one business day and a substantive response within three business days.",
} as const;

/**
 * FAQ topics from website-specification.md § Contact Page § Inquiry Routing FAQ.
 * Full question-and-answer copy is not provided in source documents;
 * answers marked as pending client delivery.
 */
export const INQUIRY_ROUTING_FAQ = [
  {
    id: "uncertain-service-category",
    question: "Uncertain service category",
    answer:
      "[Answer pending client delivery — topic: uncertain service category]",
    answerPending: true,
  },
  {
    id: "written-proposal",
    question: "Written proposal before consultation",
    answer:
      "[Answer pending client delivery — topic: written proposal without consultation]",
    answerPending: true,
  },
  {
    id: "international-clients",
    question: "International clients",
    answer:
      "[Answer pending client delivery — topic: international clients]",
    answerPending: true,
  },
  {
    id: "employment-routing",
    question: "Employment application routing",
    answer:
      "[Answer pending client delivery — topic: employment application routing]",
    answerPending: true,
  },
  {
    id: "vendor-partnership",
    question: "Vendor / partnership inquiries",
    answer:
      "Vendor and partnership inquiries should be directed to partnerships@dharwinbusinesssolutions.com. [Additional answer copy pending client delivery.]",
    answerPending: true,
  },
  {
    id: "nda-availability",
    question: "NDA availability",
    answer: "[Answer pending client delivery — topic: NDA availability]",
    answerPending: true,
  },
] as const;

/** Calendar embed URL — set via NEXT_PUBLIC_CALENDAR_EMBED_URL when client provides tooling. */
export const CALENDAR_EMBED_URL =
  process.env.NEXT_PUBLIC_CALENDAR_EMBED_URL ?? "";
