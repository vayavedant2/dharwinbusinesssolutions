# Website Specification

Source documents:
- Dharwin — Website Designer Brief (Internal · Designer Handoff · 2026-06-02)
- Dharwin Business Solutions Website Content & Brand Messaging

Status: Copy locked. Design system locked. Awaiting design.

---

# Brand Overview

**Engagement:** Dharwin Business Solutions — website rewrite

**Live site:** dharwinbusinesssolutions.com

**Current platform:** GoDaddy Website Builder

**Scope:** 12 pages · 7 service lines + Product, Careers, Contact

**Voice direction:** Traditional services-firm corporate

**Reference set:** Cognizant · Mphasis · TCS · Infosys

**Owner:** The Odin (Ronak)

**Prepared by:** The Odin · Internal handoff document · Do not distribute externally.

Dharwin Business Solutions is a global AI-driven technology company delivering intelligent software solutions, recruitment technology, IT consulting, staffing support, and digital transformation services for businesses across the USA, UK, Canada, UAE, and international markets.

Dharwin Business Solutions was founded in 2022 to address a structural inefficiency observed across mid-market organizations: the requirement to engage and coordinate multiple specialist firms — for software, growth, and talent — when a single accountable team can deliver equivalent or superior outcomes.

---

# Brand Positioning

**Voice direction:** traditional services-firm corporate. Third-person, formal cadence, institutional vocabulary, complete sentences.

**Reference set:** Cognizant, Mphasis, Mindtree, Tata Consultancy, Infosys.

**Strategic positioning (AI Agent Development):** This is the most ambitious page on the site. Length, depth, and live demonstration capability are deliberately greater than peer service pages.

**Product positioning (Dharwin OS):** Dharwin OS is the integrated business operations platform developed by Dharwin Business Solutions for internal use across software, growth, and talent engagements. Unifies CRM, AI-powered conversational agents, workflow automation, and integrated operational reporting — now made available to a curated group of enterprise clients.

**Manifesto line (footer):** The integrated operating partner for businesses that require software, growth, and talent functions delivered under a single accountable engagement.

**Our Vision (from brand messaging):** To become a globally trusted technology ecosystem that empowers businesses through AI automation, software innovation, workforce transformation, and digital infrastructure modernization.

We believe modern organizations should operate faster, smarter, and more efficiently through connected systems powered by technology, automation, and intelligent operational workflows.

---

# Brand Voice

## Voice Attributes — locked

| Attribute | Application in copy |
|-----------|---------------------|
| Corporate | Third-person throughout. Complete sentences, formal cadence, institutional pronouns. |
| Polished | Measured, considered, never breathless. Sentences resolve cleanly. Adjectives chosen for precision. |
| Authoritative | Speaks from a position of established expertise. Claims supported by quantified evidence. |

## DO

- Write in third person. Dharwin Business Solutions delivers... Our team partners with... Our clients receive...
- Use complete, formal sentences. Avoid fragments and conversational shorthand.
- Capitalize Dharwin's service lines and proprietary frameworks: Software Development, ERP & CRM Implementation, The Dharwin Approach, Dharwin OS.
- Use institutional vocabulary: clients, organizations, enterprises, engagements, capabilities, outcomes.
- Quantify claims with specific figures: within eight-to-twelve-week development cycles, five business days to shortlist, thirty-day deployment framework.
- Anchor every service description in the structural mechanic — what is delivered, on what timeline, with what model.

## DO NOT

- Address the reader in second person on the live site. You get... and Tell us what you're trying to build — both banned.
- Use sentence fragments for rhythm. Operators, not consultants. — rewrite as a complete sentence.
- Use contractions in formal copy. Don't → Do not. We've → We have. Acceptable in testimonials only.
- Stack adjectives without purpose. Comprehensive, robust, end-to-end, scalable solutions — pick the most accurate term.
- Make unsupported emotional claims. World-class, best-in-class, industry-leading — only when external recognition exists.

## Banned Terms

Leverage · synergy · cutting-edge · innovative (standalone) · one-stop shop · paradigm shift · holistic · touch base · circle back · low-hanging fruit · next-generation (without specificity) · disruptive.

---

# Messaging Rules

- Every page that is not `/contact` ends with the same closing pattern (Universal Closing CTA). Consistency on this section is the most important UX move on the site.
- Contact is the only page that opts out of the universal closing CTA — the entire page IS the conversion infrastructure.
- Page-specific closing CTA overrides:
  - **AI Agent Development:** secondary CTA swaps to Engage a Live Demonstration Agent →
  - **Digital Marketing:** secondary CTA may swap to Request the Complimentary Audit →
  - **Product (Dharwin OS):** product-specific closing CTA — see Product Page Specification
  - **Careers:** candidate-focused closing CTA — see Careers Page (not in primary spec sections but documented in brief)

**Why Businesses Choose Dharwin Business Solutions (brand messaging):**

- AI-First Operational Thinking
- Global Service Delivery
- Scalable Enterprise Solutions
- End-to-End Technology Support
- Modern Recruitment Technology
- Automation-Focused Infrastructure
- Business-Centric Innovation
- Long-Term Digital Growth Strategy

---

# Design Principles

- Color and typography are the design system's two highest-leverage decisions. Everything below is locked. Build Figma styles from these tokens before laying out any page.
- Dark sections use `--ink-90` background, `--paper` text, `--ember` accent. One to two per page maximum. The Product (Dharwin OS) page hero uses a full-bleed dark treatment.
- Hero numerals (stats, years, counts) — Fraunces 96–160px, weight 400, ember accent. Big numbers are the brand.
- Headlines may break the column grid on hero sections (deliberate magazine-layout move).
- Build components once in Figma. Pages compose them.
- Sign-off path: Each page goes designer → Odin internal review → Dharwin review. Lock the design system (colour, type, components) before laying out page 3+ — changes to system tokens propagate; changes to bespoke layouts do not.

---

# Typography System

| Family | Use |
|--------|-----|
| Fraunces (display) | H1, H2, hero numerals, pull quotes. Variable, Google Fonts. |
| Inter (body) | All body, buttons, captions, navigation. Variable, Google Fonts. |
| JetBrains Mono | Inline code, technical specs, footer metadata. Google Fonts. |

| Token | Family | Size | Wt | Line height | Tracking |
|-------|--------|------|-----|-------------|----------|
| display/hero | Fraunces | 80–96px desktop · 48 mobile | 400 | 1.02 | -2% |
| display/h2 | Fraunces | 56–64px desktop · 36 mobile | 400 | 1.08 | -1.5% |
| display/h3 | Fraunces | 32–40px desktop · 26 mobile | 500 | 1.15 | -1% |
| body/large | Inter | 20–24px | 400 | 1.55 | 0 |
| body/base | Inter | 17–18px | 400 | 1.6 | 0 |
| body/small | Inter | 14–15px | 400 | 1.5 | 0 |
| label/kicker | Inter | 12px | 600 | 1.2 | +12% uppercase |
| mono/caption | JetBrains Mono | 12–13px | 400 | 1.4 | 0 |

**Header logo:** Custom wordmark in Fraunces — Dharwin, italic, weight 400. Drop "Business Solutions" lockup from header to save space; keep in footer.

**Nav items:** Inter 15/500. Active item gets a 1px ember underline.

**CTA/Primary:** Inter 16/600

**Pull quote attribution:** Inter 14px

**Footer closing line:** JetBrains Mono (footer metadata context)

---

# Color System

| Token | Hex | Use |
|-------|-----|-----|
| --ink | #0B1020 | All body text, headlines, primary UI |
| --paper | #FAF8F4 | Page background — warm off-white |
| --paper-elevated | #FFFFFF | Cards, modals, the rare elevated surface |
| --ember (accent) | #C2410C | CTAs, hover underlines, one editorial accent per page |
| --ember-soft | #FCE7D8 | Tag chips, NEW pills, subtle highlights |
| --muted | #5C627A | Secondary text, captions, labels |
| --rule | #E5E2D9 | Dividers, table borders, faint outlines |
| --ink-90 | #1A1F36 | Footer and dark-section background |

Dark sections use `--ink-90` background, `--paper` text, `--ember` accent. One to two per page maximum.

---

# Spacing System

**Base unit = 8px.** All vertical rhythm is multiples of 8. Section padding never less than 96px desktop / 64px mobile, often 160px on hero sections.

| Token | Value |
|-------|-------|
| space/1 | 8px |
| space/2 | 16px |
| space/3 | 24px |
| space/4 | 32px |
| space/5 | 48px |
| space/6 | 64px |
| space/7 | 96px |
| space/8 | 128px |
| space/9 | 160px |
| space/10 | 200px |

---

# Layout System

## Grid

- **Desktop:** 12 columns · 1280px max content width · 80px outer gutter · 24px column gap.
- **Tablet:** 8 columns · 64px outer gutter · 16px column gap.
- **Mobile:** 4 columns · 24px outer gutter · 16px column gap.
- Headlines may break the column grid on hero sections (deliberate magazine-layout move).

## Breakpoints (Responsive)

- Desktop: 1280+
- Tablet: 768–1279
- Mobile: under 768

Test on iPhone 13, Pixel 7, iPad Mini portrait.

---

# Animation Rules

| Pattern | Duration | Easing | Where |
|---------|----------|--------|-------|
| Page transition | 400ms | cubic-bezier(0.16,1,0.3,1) | Route changes — fade + 8px lift |
| Section reveal on scroll | 600ms · 80ms stagger | (same) | Each section as it enters viewport |
| Hero text reveal | 800ms · 60ms / word | (same) | Hero only, runs once |
| Hover (links + CTAs) | 200ms | ease-out | Color shift + underline draw |
| Marquee | continuous 40s loop | linear | Logo strips only |
| Number count-up | 1.2s | ease-out | Stat blocks on view |

**Banned:** parallax beyond 5%, scroll-jacking, kinetic typography that animates per character on every paragraph, mouse-cursor trails, anything that delays content from being readable.

**Motion accessibility:** Motion respects `prefers-reduced-motion`. Disable reveals and marquees for users who request it.

**Solutions dropdown:** Opens on hover (300ms delay). On click, navigates to first item.

---

# Component Library

Build these once in Figma. Pages compose them. Component build order: (1) Foundations — colour, type, spacing, grid · (2) Header + Footer · (3) CTA Primary / Secondary / Banner · (4) Hero variants (Editorial / Split / Centred) · (5) Card variants (Service / Case study / Person) · (6) Stat block · (7) Process steps · (8) Pull quote · (9) Form components · (10) Accordion / FAQ · (11) Logo strip · (12) Pricing card.

| Component | Description |
|-----------|-------------|
| Header (sticky) | Transparent over light hero, opaque after 80px scroll. Logo-left, nav-centre, CTA-right. Mobile: hamburger → full-screen overlay nav. |
| Footer | Multi-column, --ink-90 background, large brand mark, manifesto line, links, address, response-time pledge. |
| Hero/Editorial | Asymmetric — H1 spans 8 cols, subhead spans 5 cols, CTA below. Optional eyebrow kicker above. |
| Hero/Split | 50/50 — copy left, visual right. Visual can be image, video, or product UI mock. |
| CTA/Primary | Ember background, paper text, 56px height, Inter 16/600, 8px radius. Arrow trails text — animates +4px right on hover. |
| CTA/Secondary | Ink text on transparent, ember-coloured underline-on-hover, no fill. |
| CTA/Banner | Full-bleed dark section. H2 + body + primary CTA + secondary CTA. Appears as closing element on most pages. |
| Card/Service | Paper-elevated background, 32px padding, label kicker top, H3 title, body, Learn More → link bottom. Hover: 4px lift + ember underline draw. |
| Card/Case study | Magazine-style — large image top (16:9 or 4:5), eyebrow kicker, big H3, 2-line description, customer name + role at bottom. |
| Card/Person | 3:4 portrait, name, role one line below, two-line bio on hover. |
| Logo strip / marquee | Single row of customer logos at 32px height, slow scroll. Logos muted, full opacity on hover. |
| Stat block | Big Fraunces numeral + one-line caption. Typically used in trios. |
| Process steps | Numbered (01, 02, 03...) editorial numerals. Vertical for narrative, horizontal for short series. |
| Pull quote | Fraunces 48px, ember opening quote glyph, attribution in Inter 14px below. |
| Accordion / FAQ | Single border-top, big tap target, plus-to-minus icon, smooth height transition. |
| Form/Inline | Single input + CTA inline, OR stacked block. Floating labels — no placeholder-as-label. |
| Tag chip | --ember-soft background, ink text, 10×14px padding, 999px radius. |
| Code spec | JetBrains Mono small caps, --ink-90 tile, --paper text — for technical pages (Software Dev, AI Agent Dev). |
| Section divider | Single 1px --rule hairline at top of each section, OR kicker-only divider (uppercase label, rule, label, rule). |

---

# Header Specification

**Structure:**

```
[ Dharwin ] Home About Solutions ■ Product Careers Contact [Schedule a Consultation →]
```

- Logo is a custom wordmark in Fraunces — Dharwin, italic, weight 400. Drop "Business Solutions" lockup from header to save space; keep in footer.
- Nav items in Inter 15/500. Active item gets a 1px ember underline.
- Solutions dropdown opens on hover (300ms delay). On click, navigates to first item. Inside dropdown: 2-column layout — 7 services left, small illustrated promo block right (New: AI Agent Development →).
- CTA stays ember on light hero, becomes outlined ember on dark sections.
- Mobile: full-screen overlay with same structure, animated reveal.
- Mobile tweaks: header collapses to logo + hamburger + CTA.

**Navigation items:** Home · About · Solutions (dropdown) · Product · Careers · Contact

**Primary CTA:** Schedule a Consultation →

---

# Footer Specification

```
[ Dharwin ] [Manifesto line] [Newsletter inline]

SOLUTIONS          COMPANY        RESOURCES      LEGAL          CONNECT
Software Dev       About          Case studies   Privacy        LinkedIn
ERP & CRM          Product        Insights       Terms          X / Twitter
Staffing           Careers        Newsletter     Cookies        Instagram
Lead Gen           Contact
Digital Marketing
Website Dev
AI Agent Dev

—— hairline rule ——

© 2026 Dharwin Business Solutions · Sheridan, WY · Response within one business day
```

**Manifesto line:** The integrated operating partner for businesses that require software, growth, and talent functions delivered under a single accountable engagement.

**Background:** --ink-90

---

# Homepage Specification

**URL:** `/`

**Sections:** 11

**Voice:** Corporate

**Page job:** Convince a qualified visitor — in under 30 seconds — that Dharwin is the operating partner they were looking for, then route them into one of seven solutions or the closing CTA.

**Meta title:** Dharwin Business Solutions | Integrated IT, Growth & Talent

**Section order:** Hero · Trust strip · Positioning paragraph · Solutions grid · Featured case study · The Dharwin Approach · Product spotlight · By the numbers · Testimonial · Headquarters & operations · Closing CTA.

## 1 — Hero

**Headline:** Empowering Businesses with Integrated IT, Growth, and Talent Solutions.

**Eyebrow:** INTEGRATED IT · GROWTH · TALENT SOLUTIONS

**Subhead:** Dharwin Business Solutions partners with SMBs and scaling enterprises across the United States and India, delivering software development, business growth, and workforce capabilities through a single, accountable engagement model.

**CTAs:** Schedule a Consultation → · Explore Our Capabilities →

**Layout:** Editorial hero. H1 spans 9 cols, subhead 5 cols. Eyebrow kicker above. Right-third reserved for editorial rest (1px rule, ember dot, date).

**Motion:** Headline reveals word-by-word, 60ms stagger, runs once.

## 2 — Trust Strip

**Kicker:** TRUSTED BY ORGANIZATIONS WORLDWIDE

**Layout:** Full-bleed marquee. 10–12 client logos at 32px height, 40s slow loop, 40% opacity / 100% on hover.

**Asset:** 10–12 client logos (Dharwin to provide).

## 3 — Positioning Paragraph

Modern enterprises face an increasingly complex challenge: managing technology development, growth strategy, and talent acquisition while maintaining focus on core operations. Dharwin Business Solutions addresses this challenge through a unified service model that delivers integrated software, growth, and staffing capabilities under a single accountable engagement.

**Layout:** Single column, 720px max-width, centred. Fraunces 40px, leading 1.2, 160px top/bottom padding. No CTA.

## 4 — Solutions Grid

**Kicker:** OUR SOLUTIONS

**Section heading:** Comprehensive Capabilities Across Seven Service Lines.

| # | Service | Value proposition |
|---|---------|-------------------|
| 01 | Software Development | Custom enterprise applications, internal tools, and APIs engineered within 8–12-week development cycles. |
| 02 | ERP & CRM Implementation | Zoho, Salesforce, and HubSpot implementations executed on a 30-day deployment framework. |
| 03 | Staffing Solutions | Specialized IT and non-IT talent acquisition — qualified shortlists within five business days. |
| 04 | Lead Generation Services | Strategic outbound campaigns engineered for qualified sales meetings, without in-house SDR overhead. |
| 05 | Digital Marketing Services | Performance-driven engagements led by industry practitioners, with a complimentary growth audit. |
| 06 | Website Development | Conversion-optimized websites within 4–6-week cycles, on the platform that fits client capability. |
| 07 | AI Agent Development · NEW | Production-grade voice and conversational agents for qualification, scheduling, and CRM integration. |

**Layout:** Asymmetric 3+2+2 magazine grid. Card: mono label (01 / SOFTWARE), Fraunces H3, Inter 18 value prop, Learn More →. AI Agent card gets a NEW ember pill, top-right.

## 5 — Featured Case Study

**Headline:** Transforming Quote-to-Cash Operations for a Leading Logistics Provider.

**Kicker:** CLIENT SUCCESS STORY · LOGISTICS · CHENNAI, 2026

**Body (~85 words):** Atlas Logistics, a Chennai-based logistics operator, sought to address significant inefficiencies in their quote-to-cash workflow… Dharwin engineered and deployed a custom internal application within eight weeks, automating request ingestion, dynamic pricing, multi-stage approval routing, and customer-facing quote delivery.

**Stat row:** 92% Reduction in Quote-to-Cash Cycle · 4× Sales Team Productivity Gain · 8 Weeks Total Project Duration.

**CTAs:** Read the Full Case Study →

**Layout:** Magazine split. Left 5 cols 4:5 image, right 7 cols copy.

**Asset:** Anonymized dashboard screenshot from Chennai engagement.

## 6 — The Dharwin Approach

**Headline:** One Operating Cadence, Four Stages, Every Engagement.

**Kicker:** THE DHARWIN APPROACH

- **01 Discovery** — 45-min consultation, candid assessment of fit.
- **02 Scoping** — Written scope within 72 hours.
- **03 Execution** — Two-week sprints, weekly sync, in client systems.
- **04 Transition** — Full handover: documentation, access, source.

**Layout:** Vertical narrative — numerals 01–04 left in Fraunces 96px, copy right in Inter 18. Sticky kicker on left as visitor scrolls.

## 7 — Product Spotlight (dark section)

**Headline:** Our Proprietary Operating Platform — Now Available to Select Clients.

**Background:** --ink-90, paper text.

**Kicker:** INTRODUCING DHARWIN OS

**Subhead:** Dharwin OS is the integrated business operations platform on which our own organization operates… now extended to a curated group of enterprise clients.

**CTAs:** Join the Waitlist → · Learn More About the Product →

**Layout:** Dark section, full-width. Centred H2 + body + product UI mock + CTAs.

**Asset:** Dharwin OS dashboard mock (Figma export).

## 8 — By the Numbers

**Kicker:** DHARWIN BY THE NUMBERS

**Stats (Fraunces 128px digits in ember; Inter 14 captions in muted):** 120+ Projects Delivered · 48 Professionals Across Two Geographies · 4 Years Operating · 1 Unified Engagement Model.

**Caption:** Metrics current as of 2026, updated quarterly.

**Layout:** Single row of four stat blocks. Mobile: 2×2. Hairlines above and below.

## 9 — Client Testimonial

"Dharwin replaced the need for three separate vendor relationships within our organization. They deliver the technology, source the talent, and manage outbound business development — consolidating what previously required multiple weekly stakeholder meetings into a single integrated engagement."

— Priya M., Founder, Atlas Logistics

**Layout:** Single column, max 800px, centred. Fraunces 40px body, Inter 14 attribution, ember opening quote glyph.

## 10 — Headquarters & Operations

Two columns.

- **US Headquarters** — 30 N Gould Street, Sheridan, Wyoming 82801.
- **India Operations** — distributed delivery team (no registered office); operating hours 9:30 AM – 6:30 PM IST.

**Layout:** Two-column. No embedded map. India column intentionally describes operational presence without a registered office address.

**Asset:** Confirmed phone numbers for US HQ and India operations.

## 11 — Closing CTA (universal pattern)

See Universal Closing CTA in Footer Specification section.

**Layout:** Background --ink-90. Schedule a Consultation → / Submit a Project Brief →.

---

# About Page Specification

**URL:** `/about`

**Sections:** 9

**Voice:** Corporate

**Page job:** Establish institutional credibility — origin, principles, leadership, operating scale — sufficient for a qualified prospect to advance to a consultation request.

**Section order:** Hero · Company origin · Operating principles · Leadership · Our practice · Operating cadence · By the numbers · Recognition & partnerships · Closing CTA.

## 1 — Hero

**Headline:** An Integrated Services Firm for SMBs and Scaling Enterprises.

**Eyebrow:** ABOUT DHARWIN BUSINESS SOLUTIONS

**Subhead (~75 words):** Dharwin Business Solutions was founded in 2022 to address a structural inefficiency observed across mid-market organizations: the requirement to engage and coordinate multiple specialist firms — for software, growth, and talent — when a single accountable team can deliver equivalent or superior outcomes.

**Layout:** Editorial hero. Right-third reserved for leadership portrait (4:5 crop). No CTA — the page is the trust pitch.

**Asset:** Leadership portrait (Dharwin to provide).

## 2 — Company Origin

**Headline:** Built to Address a Pattern Observed Across the Mid-Market.

**Body (~150 words):** Prior-firm pattern recognition; recurring three-vendor coordination overhead; Dharwin established to consolidate. Refined since 2022 across 32 client organizations across logistics, financial services, healthcare, education, real estate, consumer technology.

**Pull quote:** A single accountable engagement consistently outperforms coordinated multi-vendor delivery.

**Layout:** Single column, 720px max. Drop-cap on first letter (Fraunces, ember, 120px). Pull quote breaks the column mid-page.

## 3 — Operating Principles

**Headline:** Three Principles That Govern Every Engagement.

- **01 Production Delivery, Not Advisory Output.** Operational deliverables — code, campaigns, candidates, implementations.
- **02 Operators Lead Client Engagements.** Personnel with prior operational experience in the relevant function.
- **03 Engagements Earn Renewal.** Initial engagements at minimum scope; continued engagement reflects demonstrated value.

**Layout:** Three blocks stacked. Huge Fraunces numeral (200px, ember), H3 principle, three-line body. Hairlines between.

## 4 — Leadership

**Headline:** The Team Accountable for Client Engagements.

One large card per founder. 4:5 portrait, name, title, two-paragraph executive bio, operational responsibility line.

**Layout:** Section hidden on the live site until all leadership assets (names, titles, bios, 4:5 portraits) delivered.

**Asset:** Founder profile(s): name, title, bio (2 paragraphs), 4:5 portrait — Dharwin to provide.

## 5 — Our Practice (team grid)

**Kicker:** OUR PRACTICE · 48 PROFESSIONALS ACROSS TWO GEOGRAPHIES

**Headline:** A Distributed Team Organized Around Client Outcomes.

**Body:** Seven service lines, each led by a senior practitioner. Deployment based on functional fit, sector experience, availability.

**Layout:** 5×N grid of square portraits with name + role on hover. Maximum 30 portraits on screen; beyond that, closing tile reading + {N} additional team members.

**Asset:** Team portraits + names + roles (Dharwin to provide).

## 6 — Operating Cadence

**Headline:** Distributed Operations, Synchronous Decision-Making.

**Body (~80 words):** Asynchronous-by-default; weekly sync, daily standups in relevant time zone, biweekly sprint demos, quarterly leadership offsites.

**Layout:** Split — left 4 cols image (operational photography), right 6 cols copy.

**Asset:** Operational photography — workspace, team in working context. Not staged stock.

## 7 — By the Numbers

120+ Projects Delivered · 48 Professionals · 32 Active Client Engagements · 4 Years of Operation.

**Note:** 32 Active Client Engagements substitutes Home's 1 Unified Engagement Model. About is the surface for harder operational scale.

**Layout:** Single row of four stat blocks. Mobile 2×2. Hairlines above and below.

## 8 — Recognition & Partnerships

Static logo row (implementation partners — Zoho, Salesforce, HubSpot, etc.). Optional 3-card press grid.

**Layout:** Section hidden until at least three confirmed entries exist (partnerships or press, any combination).

**Asset:** Confirmed partnership tier + certifications, press mentions if any.

## 9 — Closing CTA (universal)

See Universal Closing CTA.

---

# Solutions Pages Specification

## Software Development

**URL:** `/software-development`

**Sections:** 10

**Page job:** Convert a technology buyer at an SMB or scaling enterprise into a scoped consultation request.

**Section order:** Hero · Capabilities · Technology stack · The Dharwin Approach · Engagement models · Industries served · Featured case study · Engagement economics · FAQ · Closing CTA.

### 1 — Hero

**Headline:** Production-Grade Software Engineering, Delivered on Defined Timelines.

**Eyebrow:** SOFTWARE DEVELOPMENT

**Subhead:** Dharwin Business Solutions delivers custom enterprise applications, internal tools, and APIs through structured eight-to-twelve-week development cycles. Engagements led by senior practicing engineers with prior product development experience. Clients retain full ownership of source code, IP, and infrastructure.

**CTAs:** Schedule a Consultation → · See Sample Work →

**Layout:** Split hero. Left 6 cols copy, right 6 cols anonymized product UI screenshot.

### 2 — Capabilities

Six categories: SaaS Platforms · Internal Tools · Web Applications · Mobile Applications · API Development · System Integrations.

**Layout:** 3-col card grid. Each card: small line-art icon (ember, 24px), Fraunces H3, Inter 18 body.

### 3 — Technology Stack

**Headline:** An Opinionated, Modern, Production-Proven Stack.

**Layers:** Frontend (Next.js · React · TypeScript · Tailwind) · Backend (Node · NestJS · Python · PostgreSQL · Redis) · Mobile (React Native · Expo · Swift · Kotlin) · Cloud (AWS · Vercel · Cloudflare) · Tooling (GitHub · Linear · Datadog · Sentry).

**Layout:** Logo grid grouped by category. Logos at 24px, muted, full opacity on hover.

### 4 — The Dharwin Approach (software engagements)

Reuses the four-stage methodology (Discovery / Scoping / Execution / Transition), scoped to software.

**Layout:** Vertical narrative — numerals left in Fraunces 96px, copy right.

### 5 — Engagement Models

Three structures:

- **Sprint** — bounded software engagements, 8–12 weeks, flat-fee. Discovery, scope, design, dev, deploy, 30-day support.
- **Studio** — continuous development under dedicated team, open-ended, 3-month minimum. Quarterly planning, biweekly demos.
- **Embedded** — senior Dharwin engineer in client's existing team. Monthly retainer.

**Layout:** Three columns side by side (mobile: stacked). Each card carries: Schedule a Consultation →.

### 6 — Industries Served

Chips: Financial Services · Logistics · Software-as-a-Service · Healthcare · Direct-to-Consumer · Real Estate · Education · Manufacturing.

Hover surfaces: {N} engagements delivered.

### 7 — Featured Case Study

**Headline:** Engineering a Production Lending Origination Platform for a Regional Financial Services Provider.

**Kicker:** CLIENT SUCCESS STORY · FINANCIAL SERVICES · MUMBAI, 2026

**Stat row:** 12 Weeks From Discovery to Deployment · 3 Legacy Systems Consolidated · 4× Origination Throughput vs. Legacy Environment.

### 8 — Engagement Economics

Sprint flat-fee, 30% commitment at signing. Studio/Embedded monthly retainer.

Indicative: MVP Sprint from ${X}; Production Launch Sprint from ${Y}.

**Asset:** Indicative starting figures (Dharwin to provide, or reframe to "Pricing on Request").

### 9 — Frequently Asked Questions

8 questions covering: IP/source ownership · personnel selection · departure contingency · NDA/DPA · direct hire conversion · work location (US/India) · out-of-scope categories · mid-engagement scope adjustments.

**Layout:** Accordion. Plus-to-minus icon. Smooth height transition.

### 10 — Closing CTA (universal)

See Universal Closing CTA.

---

## ERP & CRM Implementation

**URL:** `/erp-crm-implementation`

**Sections:** 10

**Page job:** Convert an operations leader — frequently with a prior unsuccessful implementation partner — into a scoping call.

**Section order:** Hero · The implementation challenge · Platforms implemented · Implementation scope · The 30-day rollout · Featured case study · Industries served · Engagement economics · FAQ · Closing CTA.

### 1 — Hero

**Headline:** Enterprise Implementations Delivered on a Thirty-Day Framework.

**Eyebrow:** ERP & CRM IMPLEMENTATION

**Subhead:** Zoho, Salesforce, HubSpot, and Microsoft Dynamics implementations for SMBs and mid-market organizations. Scoped, configured, integrated, migrated, and transitioned to live operations within a thirty-day deployment cycle.

**CTAs:** Schedule a Scoping Call → · Review the 30-Day Framework →

**Layout:** Centred editorial hero. No image. Headline carries the design weight.

### 2 — The Implementation Challenge

**Headline:** Enterprise Platform Implementations Frequently Underdeliver Against Expectations.

**Body (~140 words):** Pattern across SMBs and mid-market that have engaged previous implementation partners — six months later, multiple concurrent CRM invoices, continued spreadsheet workarounds, limited adoption. Diagnostic framing: configuration breadth over adoption depth, excess customization, deferred change management.

### 3 — Platforms Implemented

Logo row (48px): Zoho · Salesforce · HubSpot · Microsoft Dynamics · Odoo · NetSuite.

Hover surfaces: {N} clients · {N} implementations · {N} avg days to live.

### 4 — Implementation Scope (Included / Outside)

**Included:** Platform configuration · Data migration · Workflow automation · Training · 90-day post-launch support · Documentation.

**Outside:** Re-platforming · Custom development of unrelated tools · Functional scope outside agreed scope · Ongoing admin beyond 90 days · License procurement.

### 5 — The 30-Day Rollout

- **Week 1 Audit & Lock** — current-state audit, process mapping, scope lock.
- **Week 2 Build** — configuration, workflow automation, two priority integrations.
- **Week 3 Migrate & Integrate** — data migration, remaining integrations, UAT with named users.
- **Week 4 Train & Launch** — full training (live + recorded), go-live on Day 28, 60-day support window opens.

### 6 — Featured Case Study

**Headline:** Consolidating Customer Relationship Management Operations for a Regional Manufacturing Enterprise.

**Kicker:** CLIENT SUCCESS STORY · MANUFACTURING · PUNE, 2026

**Stat row:** 30 Days From Initiation to Live · 3 Legacy Systems Consolidated · 89% User Adoption Within 60 Days.

### 7 — Industries Served

Chips: Manufacturing · Financial Services · Healthcare · Real Estate · Logistics · D2C · Education · Professional Services.

### 8 — Engagement Economics

Flat-fee scoped against platform, modules, integrations, data complexity. 30% commitment at signing.

Indicative: Zoho from ${X}; Salesforce from ${Y}; HubSpot from ${Z}.

### 9 — Frequently Asked Questions

7 questions: adoption contingency · GDPR/DPA · operating alongside internal admin · scope of historical data migration · license procurement · 30-day timeline at risk · implementation vs ongoing managed services.

### 10 — Closing CTA (universal)

See Universal Closing CTA.

---

## Staffing Solutions

**URL:** `/staffing-solutions`

**Sections:** 9

**Page job:** Capture a live role specification from a hiring leader on the page itself. The role-submission form is the hero.

**Section order:** Hero (form-led) · Engagement models · Roles supported · Sourcing timeline · Candidate quality framework · Featured case study · Engagement economics · FAQ · Closing CTA.

### 1 — Hero (form-led)

**Headline:** Specialized Talent Acquisition With Five-Business-Day Shortlist Delivery.

**Subhead:** IT and non-IT functions. Average shortlist delivery five business days from receipt of role specification. Contract, dedicated, or contract-to-hire arrangements with full payroll administration through Dharwin's operating entities in the US and India.

**Form heading:** Submit a Role Specification.

**Fields:** Role Title · Seniority (dropdown) · Location/Remote · Required Start Date · Engagement Type (radio) · Company Email.

**Submit:** Submit the Specification →. Below submit: Or schedule a 15-minute consultation →.

**Layout:** Split hero. Left 6 cols copy, right 6 cols form. The form REPLACES the standard CTA button — it IS the CTA.

### 2 — Engagement Models

- **Contract** — burst capacity, time-boxed, hourly/monthly under Dharwin's payroll.
- **Dedicated** — full-time allocation, named seat. Compensation/benefits under monthly retainer.
- **Contract-to-Hire** — 3–6 month contract, client-side direct hire on mutual conversion terms.

### 3 — Roles Supported

**Kicker:** 100+ ROLES DELIVERED · 32 CLIENT ENGAGEMENTS · TWO GEOGRAPHIES

**IT:** Full-Stack · Frontend · Backend · DevOps · QA/SDET · Product Designer · Product Manager · Data Engineer · Mobile · Solution Architect.

**Business Ops:** SDR · CS Specialist · Operations Analyst · Virtual Assistant · Admin Coordinator · Bookkeeping · Marketing Coordinator.

### 4 — Sourcing Timeline

**Stat:** 5 BUSINESS DAYS · AVERAGE SHORTLIST DELIVERY

Day 0 Specification → Day 1–3 Sourcing → Day 3–5 Screening & Assessment → Day 5 Shortlist Delivery → Day 5–14 Client Interviews.

### 5 — Candidate Quality Framework

Four stages: 01 Source · 02 Screen · 03 Assess · 04 Shortlist. Each stage 60 words.

### 6 — Featured Case Study

**Headline:** Scaling an Engineering Organization Through a Structured Talent Acquisition Engagement.

**Kicker:** CLIENT SUCCESS STORY · SOFTWARE-AS-A-SERVICE · BENGALURU, 2026

**Stat row:** 22 Qualified Shortlists Delivered · 9 Permanent Placements · 4 Months Engagement Duration.

### 7 — Engagement Economics

Monthly retainer per seat (Contract / Dedicated) inclusive of payroll. Contract-to-Hire: standard retainer + conversion fee equal to one month of total candidate compensation. No fees for sourcing — commercial obligations begin at candidate placement and start date.

### 8 — FAQ

7 questions: payroll/statutory contributions entity · interview availability · replacement guarantee · time-zone allocation · executive search · minimum dedicated scope · NDA/IP for placed personnel.

### 9 — Closing CTA (universal)

See Universal Closing CTA.

---

## Lead Generation Services

**URL:** `/lead-generation-services`

**Sections:** 9

**Page job:** Convert a commercial leader — frequently with a prior unsuccessful outbound engagement — into a strategy call.

### 1 — Hero

**Headline:** Outbound Demand Generation Measured Against Qualified Sales Meetings.

**Subhead:** Structured outbound demand generation — ICP definition, prospect identification, multi-channel outreach, integrated meeting handoff. Measured against qualified meetings booked, not message volume. Operated by senior outbound practitioners.

**CTAs:** Schedule a Strategy Call → · Review the Engagement Framework →

### 2 — The Outbound Challenge

**Headline:** Outbound Lead Generation Engagements Frequently Optimize Against the Wrong Metric.

**Body (~140 words):** Diagnostic of the pattern — high message volume, limited qualified meetings, weak ICP fit. Internal SDR ramp issues. Dharwin's framework optimizes against qualified meetings booked.

### 3 — Engagement Framework

Six stages: 01 ICP Definition · 02 Prospect List Development · 03 Outreach Sequence Development · 04 Campaign Execution · 05 Meeting Qualification · 06 Handoff & Continuity.

### 4 — Channels Operated

Four channels with indicative qualified response rates:

Email (2–4%) · LinkedIn (5–8%) · Outbound Calling (3–6%) · WhatsApp Business · India operations (8–12%).

### 5 — The First 30 Days

Week 1 Strategy & ICP · Week 2 List & Sequence Development · Week 3 Campaign Launch · Week 4 Optimization & Initial Delivery. First qualified meetings typically delivered Week 3–4.

### 6 — Featured Case Study

**Headline:** Establishing a Qualified Sales Pipeline for a Business-to-Business Software Company.

**Kicker:** CLIENT SUCCESS STORY · B2B SOFTWARE · NEW YORK, 2026

**Stat row:** 87 Qualified Sales Meetings · 41% Conversion to Pipeline · 6 Months Engagement Duration.

### 7 — Engagement Economics

Monthly retainer scoped against channel selection, prospect list scale, qualified-meeting target. Indicative scale: monthly retainer commensurate with the loaded cost of a single internal SDR. Pay-per-qualified-meeting available after initial 3-month retainer.

### 8 — FAQ

7 questions: outreach copy ownership · sending infrastructure · deliverability (SPF/DKIM/DMARC) · GDPR/CAN-SPAM compliance · performance contingency · CRM dependency · qualified-meeting exclusion criteria.

### 9 — Closing CTA (universal)

See Universal Closing CTA.

---

## Digital Marketing Services

**URL:** `/digital-marketing-services`

**Sections:** 9

**Page job:** Convert a marketing leader into requesting the complimentary 48-hour operational audit. The audit is the offer.

### 1 — Hero (offer-led)

**Headline:** Performance Marketing Engagements Initiated With a Complimentary Operational Audit.

**Subhead:** Performance-driven engagements across paid acquisition, SEO, content development, and lifecycle marketing. Preceded by a complimentary 48-hour operational audit of the existing acquisition funnel — provided without commercial commitment.

**CTAs:** Request the Complimentary Audit → · Review a Sample Engagement →

### 2 — The Complimentary Audit

**Headline:** A Structured 48-Hour Operational Audit of the Existing Acquisition Funnel.

**What the audit includes:** Documented assessment of acquisition funnel · channel-by-channel benchmark · three specific optimization recommendations with expected impact · 30-minute review session with client leadership · written deliverable provided regardless of subsequent engagement.

### 3 — Channels Operated

Paid Acquisition · Search Engine Optimization · Content Development · Lifecycle Marketing · Marketing Operations.

### 4 — The Dharwin Approach (digital marketing)

Reuses the four-stage methodology, scoped to performance marketing engagements.

### 5 — Featured Case Study

**Headline:** Reducing Customer Acquisition Cost for a Direct-to-Consumer Consumer Goods Brand.

**Kicker:** CLIENT SUCCESS STORY · D2C · DELHI, 2026

**Stat row:** 52% Reduction in CAC · 38% Increase in Monthly New-Customer Volume · 6 Months Engagement Duration.

### 6 — Tools Operated

- **Paid Acquisition:** Google Ads · Meta · LinkedIn · TikTok.
- **Analytics & Attribution:** GA4 · Mixpanel · Amplitude · Segment.
- **Marketing Automation:** HubSpot · Marketo · Customer.io · Klaviyo.
- **Content Operations:** WordPress · Webflow · Contentful · Notion.
- **Measurement & Reporting:** Looker Studio · Tableau · Google Tag Manager · GA4.

### 7 — Engagement Economics

Monthly retainer scoped against channel allocation, campaign development scope, and performance targets. Paid media management fees separate from media spend (procured directly by client). 3-month commitment to start, month-to-month thereafter.

### 8 — FAQ

7 questions: retainer scope · media procurement · performance measurement · performance shortfall contingency · operating within existing stack · B2B/B2C support · standard engagement initiation timeline.

### 9 — Closing CTA

Universal pattern; secondary CTA may be substituted with Request the Complimentary Audit → to reinforce the audit offer.

---

## Website Development

**URL:** `/website-development`

**Sections:** 9

**Page job:** Convert a founder or marketing leader into a project enquiry, with platform recommendation as a discriminating capability.

### 1 — Hero

**Headline:** Conversion-Optimized Website Development on a Four-to-Six-Week Delivery Cycle.

**Subhead:** Marketing websites, landing page campaigns, eCommerce environments, and custom CMS implementations — on the platform best suited to client team capability, operational requirements, and long-term maintainability.

**CTAs:** Initiate a Project → · See Sample Engagements →

### 2 — Categories

Six categories: Marketing Websites · Landing Page Campaigns · eCommerce Platforms · Headless CMS · Membership & Portal Environments · Site Migrations.

### 3 — Platform Selection

Comparison table: Webflow ($$) · Framer ($$) · WordPress ($) · Shopify ($$) · Next.js custom ($$$) · Wix Studio ($$). Per platform: suitable for, ongoing maintenance ownership, order of magnitude monthly cost.

**Caption:** Dharwin remains commercially neutral on platform selection.

### 4 — Development Process

Five stages across 4–6 weeks: 01 Brief & Discovery (Week 1) · 02 Wireframing (Week 1–2) · 03 Design (Week 2–3) · 04 Build (Week 3–5) · 05 Launch (Week 5–6).

### 5 — Featured Engagement (before / after)

**Headline:** Relaunching a Corporate Marketing Surface for a B2B Technology Provider.

**Kicker:** CLIENT SUCCESS STORY · MARKETING WEBSITE RELAUNCH · AUSTIN, 2026

**Stat row:** 5 Weeks From Initiation to Launch · 87/100 Core Web Vitals Performance Score · 64% Reduction in Bounce Rate.

### 6 — Maintenance & Support

Three tiers:

- **Self-Serve ($):** Quarterly platform review · technical issue escalation · documentation access.
- **Managed ($$):** Monthly content updates · performance monitoring · SEO maintenance · quarterly review.
- **Embedded ($$$):** Dedicated development capacity · weekly status review · continuous improvement against roadmap.

### 7 — Engagement Economics

Flat-fee scoped against category, platform, page count, integration surface. 30% commitment at signing. Indicative: Marketing Website from $X · Landing Page from $Y · eCommerce from $Z · Site Migration from $A. Maintenance from $B/month (Self-Serve).

### 8 — FAQ

7 questions: content provision · design review cycles · CMS interface per platform · performance/accessibility (Core Web Vitals, WCAG 2.1 AA) · hosting/domain/SEO · minimum engagement scope · brand asset integration.

### 9 — Closing CTA (universal)

See Universal Closing CTA.

---

## AI Agent Development · HEADLINE SERVICE

**URL:** `/ai-agent-development`

**Sections:** 11

**Page job:** Convert an AI-curious commercial or operational leader into a demonstration walkthrough — supplemented by a live in-browser demonstration agent.

**Section order:** Hero (with live demo) · Agent capability framework · Three agent categories · Capabilities & technology stack · Live demonstration · Development process · Industry use cases · Security & compliance · Engagement economics · FAQ · Closing CTA.

### 1 — Hero (with live demo)

**Headline:** Production-Grade AI Agents for Customer Engagement and Operational Workflow Automation.

**Eyebrow:** AI AGENT DEVELOPMENT · NEW SERVICE

**Subhead:** Production-grade voice and conversational AI agents integrated with client CRM, knowledge bases, and operational tools. Engineered for qualification, scheduling, transaction execution, and structured workflow automation.

**CTAs:** Schedule a Demo Walkthrough → · Engage a Live Demonstration Agent →

**Layout:** Split hero. Left 5 cols copy, right 7 cols embedded live voice-agent demonstration — phone-style UI with Initiate Demonstration Call button. Browser WebRTC, 60-second sample conversation.

### 2 — Agent Capability Framework

**Headline:** A Functional Definition of the Modern AI Agent.

**Body (~130 words):** Definition of an AI agent as a system that conducts structured conversations, interprets stated/implied requirements, and executes operational actions. Three distinguishing characteristics: structured client-system access, contextual multi-turn reasoning, documented escalation behavior with human review.

### 3 — Three Agent Categories

- **01 Voice Agents** — voice-native telephony agents. Twilio/LiveKit/Plivo. Inbound support, qualification, scheduling, outbound campaigns.
- **02 Conversational Agents** — text-based on web/mobile/WhatsApp/Slack. Support deflection, lead capture, internal knowledge base.
- **03 Workflow Agents** — non-conversational, event-triggered. Invoice processing, contract review, data extraction.

### 4 — Capabilities & Technology Stack

**Capabilities:** streaming voice, multilingual, RAG, structured tool execution, human handoff, real-time analytics, multi-tenant.

**Stack:** Voice (Twilio · LiveKit · Plivo) · STT (Deepgram · Whisper) · LLM (OpenAI · Anthropic · Gemini) · TTS (ElevenLabs · Cartesia) · Vector (Postgres+pgvector · Pinecone) · Orchestration (LiveKit Agents · LangGraph · custom).

### 5 — Live Demonstration

**Headline:** Engage a Production Demonstration Agent in Your Browser.

**Body:** Live demonstration voice agent. Sample scripts across appointment scheduling, lead qualification, product information. Browser WebRTC. No installation, no account.

**Sample script chips:** Schedule an appointment · Inquire about service pricing · Request product information.

**CTAs:** Initiate Demonstration Call →

### 6 — Development Process

Five stages: 01 Conversation Mapping · 02 Tool Integration · 03 Knowledge Base Training · 04 Conversation Testing · 05 Production Deployment.

### 7 — Industry Use Cases (3×3 grid)

- **Logistics** — shipment status & rescheduling
- **Healthcare** — appointment scheduling & verification
- **Real Estate** — property inquiry & viewing
- **Financial Services** — loan inquiry & document collection
- **SaaS** — support deflection & ticket triage
- **D2C** — order status, returns, lifecycle
- **Education** — course inquiry & enrollment
- **Manufacturing** — order tracking & reorder
- **Professional Services** — engagement inquiry & consultation

### 8 — Security & Compliance

Six tiles: Data Residency (US/EU/India and others) · Encryption (in-transit + at-rest) · Recording Consent (jurisdictional frameworks) · Telephony Compliance (TCPA, TRAI, GDPR) · Audit Logging · Human Handoff Guarantee.

### 9 — Engagement Economics

Three components: Discovery & Agent Design (flat fee). Build (flat fee per agent — scoped against conversation surface complexity, tool integration count, knowledge base scale). Runtime (usage-based — per minute or per conversation — pass-through of AI vendor costs + Dharwin margin).

### 10 — Frequently Asked Questions

8 questions: conversation latency (sub-1.2s end-to-end) · runtime cost · language support · low-confidence escalation · deployment options (Dharwin-managed vs client environment) · vs standard chatbot · post-deployment monitoring · standard timeline (6–8 weeks single agent).

### 11 — Closing CTA (override)

Universal pattern, with secondary override: Engage a Live Demonstration Agent →.

---

# Product Page Specification

**URL:** `/product`

**Sections:** 9

**Page job:** Drive product interest into Early Access Program registration — or into a Dharwin product-team consultation.

**Section order:** Hero (full-bleed product mock) · The premise · Platform capabilities · Product walkthrough (scroll-pinned) · Intended users · Operational provenance · Early Access Program & pricing · Early access registration · Closing CTA (product-specific override).

## 1 — Hero (full-bleed product mock)

**Headline:** An Integrated Operating Platform for Modern Business Operations.

**Background:** --ink-90 full-bleed dark.

**Wordmark (Fraunces, large, paper):** Dharwin OS.

**Subhead:** Dharwin OS is the integrated business operations platform developed by Dharwin Business Solutions for internal use across software, growth, and talent engagements. Unifies CRM, AI-powered conversational agents, workflow automation, and integrated operational reporting — now made available to a curated group of enterprise clients.

**CTAs:** Join the Early Access Program →

## 2 — The Premise

**Headline:** A Platform Engineered From Operational Practice.

**Body (~150 words):** Four-year operational practice across services lines. Pattern of operational inefficiency exposed at scale. Two years ago Dharwin initiated platform development to address systematically. Currently supports the full operating surface of Dharwin Business Solutions; now extended via Early Access Program.

## 3 — Platform Capabilities

Three capability surfaces:

- **01 Unified Customer Engagement Timeline** — voice/email/messaging/tickets/transcripts in a single per-customer timeline, with AI summarization, classification, next-action recommendation.
- **02 Integrated AI Agent Capability** — voice and conversational agents pre-integrated with customer data, knowledge base, operational tools.
- **03 Consolidated Operational Visibility** — pipeline, project status, hiring, marketing in one dashboard.

## 4 — Product Walkthrough (scroll-pinned)

Three scenes across the working week:

- **01 Customer Engagement** — prospect engages voice agent, agent qualifies and books discovery call into sales rep's calendar.
- **02 Internal Continuity** — sales rep sees the full conversation, the new opportunity in pipeline, suggested next action.
- **03 Executive Visibility** — end-of-week, executive team reviews pipeline, project status, hiring, marketing in one dashboard.

**Layout:** Sticky-scroll. Product UI mock pinned right (or below on mobile). Three scenes scroll on the left; UI swaps to a different view per scene.

**Asset:** Three product UI mocks (Figma export), one per scene. Section hidden until all three mocks exist.

## 5 — Intended Users

**Built for:** SMBs operating 5–10 platforms across CRM/support/ops · founder-led organizations seeking unified operational visibility · organizations evaluating cumulative cost of specialized subscriptions.

**Not built for (current stage):** enterprises with deeply customized legacy stacks · organizations of 500+ requiring multi-tenant complexity · teams unwilling to migrate from incumbent CRM.

## 6 — Operational Provenance

**Headline:** Engineered From Four Years of Operating Practice.

**Body (~85 words):** Refined continuously since 2024 through Dharwin Business Solutions' own operational use — 120+ projects, 32 active client engagements, 48-person distributed team.

**Pull quote:** Early Access Program participants engage with a platform that has already absorbed four years of operational refinement.

**Stat row:** 4 Years of Continuous Refinement · 120+ Projects Operationally Supported · 32 Concurrent Client Engagements.

## 7 — Early Access Program & Pricing

Limited admission per quarter. Structured onboarding from product team; dedicated configuration support; direct product roadmap input.

**Tiers:** Foundation ($X) · Operations ($Y) · Enterprise ($Z / Pricing on Request). Early Access participants receive locked pricing for the initial 12 months of engagement.

## 8 — Early Access Registration

**Form fields:** Organization Name · Industry · Org Size · Current CRM Platform · Primary Use Case · Contact Name & Role · Business Email.

**Submit:** Submit for Early Access Review →.

Below submit: Submissions are reviewed within five business days. Selected organizations receive a structured onboarding consultation prior to program admission.

## 9 — Closing CTA (product-specific override)

**Headline:** Discuss Operational Requirements with the Dharwin Product Team.

**Background:** --ink-90.

**Subhead:** Schedule a 30-minute consultation to review your current operational stack, intended use cases, and Early Access Program fit. The Dharwin product team will provide an honest assessment of platform fit prior to any commitment.

**CTAs:** Schedule a Product Consultation → · Submit for Early Access Review →

---

# Contact Page Specification

**URL:** `/contact`

**Sections:** 6

**Page job:** Lower-friction inbound conversion. Visitors choose the path that matches their requirement — immediate consultation, written response, short query, or detailed inquiry.

**Section order:** Hero · Three engagement paths · Inquiry form · Operating presence · Response-time commitment · Inquiry routing FAQ.

**Closing CTA exemption:** Contact is the only page that opts out of the universal closing CTA — the entire page IS the conversion infrastructure.

## 1 — Hero

**Headline:** Begin a Consultation With the Dharwin Team.

**Subhead:** Dharwin Business Solutions responds to all inbound inquiries within one business day. Multiple engagement paths are provided below — select the path that aligns with your requirement.

**Layout:** Centred editorial. No CTA — the page itself is the CTA infrastructure.

## 2 — Three Engagement Paths

Three large cards:

- **Schedule a Consultation** — opens calendar inline. Schedule a 30-Minute Consultation →.
- **Submit a Project Brief** — opens multi-field form below. Submit a Project Brief →.
- **Direct Email** — mailto. contact@dharwinbusinesssolutions.com.

## 3 — Inquiry Form

**Fields:** Name · Business Email · Organization · Role · Service Area of Interest (dropdown — 7 services + Dharwin OS + Careers + Other) · Inquiry Detail (textarea, 3–5 sentences) · Supporting Documentation (file upload, optional, max 10 MB).

**Submit:** Submit Inquiry →. Below submit: Standard response time: one business day. Detailed inquiries with stakeholder review: substantive response within three business days.

## 4 — Operating Presence

**Headline:** Headquartered in the United States. Operations Across the United States and India.

**US Headquarters** — Dharwin Business Solutions · 30 N Gould Street · Sheridan, Wyoming 82801 · phone TBD · Response within one business day.

**India Operations** — Distributed delivery team across multiple time zones; continuous coverage. Phone TBD · Operating hours 9:30 AM – 6:30 PM IST.

**Layout:** Two-column. No embedded map.

## 5 — Response-Time Commitment

Dharwin Business Solutions responds to every inbound message within one business day during standard operating hours.

**Body:** Detailed inquiries requiring documentation review or stakeholder input receive an interim acknowledgment within one business day and a substantive response within three business days.

## 6 — Inquiry Routing FAQ

6 questions: uncertain service category · written proposal without consultation · international clients · employment application routing · vendor/partnership inquiries (partnerships@) · NDA availability.

---

# Universal Closing CTA

Every page that is not `/contact` ends with the same closing pattern.

**Section:** Let's talk

**Background:** --ink-90.

**Headline (Fraunces 64px, paper):** Discuss Your Business Requirements with Our Team.

**Subhead (Inter 20px, paper):** Schedule a complimentary 30-minute consultation. Our team will provide an honest assessment of engagement fit and, where applicable, recommend alternative resources to support your strategic objectives.

**Primary CTA:** Schedule a Consultation →

**Secondary CTA:** Submit a Project Brief →

**Page-specific overrides:**

- AI Agent Development: secondary swaps to Engage a Live Demonstration Agent →
- Digital Marketing: secondary may swap to Request the Complimentary Audit →
- Product (Dharwin OS): product-specific closing CTA (see Product Page Specification)
- Careers: candidate-focused closing CTA

---

# Responsive Rules

**Breakpoints:**

- Desktop: 1280+
- Tablet: 768–1279
- Mobile: under 768

**Test devices:** iPhone 13, Pixel 7, iPad Mini portrait.

**Mobile tweaks:**

- Header collapses to logo + hamburger + CTA
- Split heroes stack (copy first, visual second) except Staffing form-led hero where form stays at top
- Stat blocks become 2×2 grids
- Sticky-scroll narratives degrade to vertical sequence
- Mobile is primary surface for AI Agent Development live demo button (tap-to-talk > click-to-talk on phones)
- Engagement framework sections: horizontal scroll on desktop, vertical stack on mobile

---

# Accessibility Requirements

**Required, not optional.**

- All text colors must meet WCAG AA contrast ratios. Verify ember on paper, ember on ink-90, muted on paper in Figma with a contrast plugin before shipping.
- Every CTA has a visible focus ring (2px ember, 2px offset).
- All images need real alt text — write during copy review.
- Site must be fully keyboard-navigable. Dropdowns open on focus, accordions toggle on Enter / Space.
- Motion respects `prefers-reduced-motion`. Disable reveals and marquees for users who request it.
- Website Development FAQ references performance/accessibility (Core Web Vitals, WCAG 2.1 AA).

## Performance — non-negotiable

- Largest Contentful Paint target: under 1.8s on 4G.
- Total page weight: under 1MB on Home, under 800KB on service pages.
- Use Next/Image (or platform equivalent) for all images. WebP/AVIF.
- Web fonts: subset Fraunces and Inter. Preload the two display weights only.
- No third-party scripts above the fold. Analytics and chat in a deferred bundle.

---

# Asset Checklist (Reference)

| # | Asset | Needed for |
|---|-------|------------|
| A1 | Logo SVG (existing or commissioned) | Site-wide |
| A2 | 10–12 customer logos — SVG preferred | Home trust strip |
| A3 | Founder portrait — 4:5, 2400×3000px | About hero · Leadership |
| A4 | Team portraits — 1:1, 1200×1200px each (up to 30) | About practice grid |
| A5 | Operational photography (workspace, team, candid) | About operating cadence · Careers |
| A6 | 5–7 candid team photos (US + India contexts) | Careers operational environment |
| A7 | Anonymized dashboard screenshot — Chennai logistics | Home case study |
| A8 | Anonymized product screenshot — Mumbai FS lending | Software Dev case study |
| A9 | Post-implementation screenshot — Pune mfg CRM | ERP & CRM case study |
| A10 | Engagement imagery — Bengaluru SaaS | Staffing case study |
| A11 | Engagement imagery — NY B2B SaaS | Lead Gen case study |
| A12 | Engagement imagery — Delhi D2C | Digital Marketing case study |
| A13 | Before/after screenshots — Austin B2B technology | Website Dev relaunch slider |
| A14 | Primary Dharwin OS dashboard mock (Figma export) | Home product spotlight · Product page hero |
| A15 | Three card-sized Dharwin OS UI snippets | Product page — Platform Capabilities |
| A16 | Three scene-specific Dharwin OS UI mocks | Product page — Walkthrough |
| A17 | Production demonstration AI agent (WebRTC) | AI Agent Development hero + live demo |
| A18 | Fallback captioned 30-second agent video | AI Agent Development fallback if live demo not ready |
| A19 | Platform certification badges (Zoho, Salesforce, etc.) | ERP & CRM platforms section |
| A20 | Implementation partner logos (vector) | About recognition · ERP & CRM platforms |
| A21 | Industry use-case iconography (3×3 grid) | AI Agent Development use cases |
| A22 | Security & compliance tile iconography (6 tiles) | AI Agent Development security section |
| A23 | Service-line line-art icons (24px, ember) | Software Dev categories grid |
| A24 | Custom city marker — US headquarters | Home · Contact |

---

# Client Information Requests (Reference)

## Organizational Facts (blockers marked)

- Exact incorporation year and registered entity name(s) (US and India). Current page locks 2022 — confirm.
- Founder profile(s) — name, title, executive biography (two paragraphs each), area of operational responsibility, 4:5 portrait.
- Confirmed team headcount and US/India geographic split. Currently locked at 48.
- Confirmed count of active client engagements (currently 32) and projects delivered (currently 120+).
- Publishable list of client industries served.
- Confirmed phone numbers for US headquarters and India operations.
- Confirmed inbound email addresses — general, partnerships, careers.

## Case Study Confirmation

- Atlas Logistics — Chennai logistics quote-to-cash (Home featured case study).
- Mumbai financial services — lending origination platform (Software Dev case study).
- Pune manufacturing — Salesforce consolidation (ERP & CRM case study).
- Bengaluru SaaS — engineering scale through talent acquisition (Staffing case study).
- New York B2B software — outbound demand generation (Lead Gen case study).
- Delhi D2C — performance marketing CAC reduction (Digital Marketing case study).
- Austin B2B technology — marketing website relaunch (Website Dev case study).

## Pricing Decisions

All indicative figures currently use ${X}/${Y}/${Z} placeholders or "Pricing on Request" framing pending client confirmation.

## Backend Integrations

- Calendar tooling for inline consultation booking (Calendly, Cal.com, HubSpot Meetings, or equivalent).
- Form submission backend — inquiry form, project brief, role specification, audit request, early access registration.
- Mailto handlers for direct email and partnerships email paths.
- ATS integration for Careers Open Roles.
