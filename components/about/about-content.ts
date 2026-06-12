export const OPERATING_PRINCIPLES = [
  {
    number: "01",
    title: "Production Delivery, Not Advisory Output.",
    description:
      "Operational deliverables — code, campaigns, candidates, implementations.",
  },
  {
    number: "02",
    title: "Operators Lead Client Engagements.",
    description:
      "Personnel with prior operational experience in the relevant function.",
  },
  {
    number: "03",
    title: "Engagements Earn Renewal.",
    description:
      "Initial engagements at minimum scope; continued engagement reflects demonstrated value.",
  },
] as const;

export const ABOUT_BY_THE_NUMBERS = [
  {
    value: 120,
    suffix: "+",
    caption: "Projects Delivered",
  },
  {
    value: 48,
    caption: "Professionals",
  },
  {
    value: 32,
    caption: "Active Client Engagements",
  },
  {
    value: 4,
    caption: "Years of Operation",
  },
] as const;

export const TEAM_PLACEHOLDER_COUNT = 11;

export type FounderProfile = {
  name: string;
  title: string;
  bio: [string, string];
  responsibility: string;
  portraitSrc: string;
  portraitAlt: string;
};

export const FOUNDER_PROFILES: readonly FounderProfile[] = [];

export type PartnershipEntry = {
  name: string;
  logoSrc: string;
  logoAlt: string;
};

export const PARTNERSHIP_ENTRIES: readonly PartnershipEntry[] = [];
