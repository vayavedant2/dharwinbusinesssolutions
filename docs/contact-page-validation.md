# Contact Page Validation

Validated against:

- `docs/website-specification.md` (Designer Brief — primary source)
- `docs/content-reference.md` (no dedicated contact page copy; site-wide CTA only)
- `docs/design.md`

Generated: 2026-06-12

---

## ✓ Sections implemented

| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Hero | `HeroContact` → `HeroCentered` | Implemented |
| 2 | Three Engagement Paths | `EngagementPaths` | Implemented |
| 3 | Inquiry Form | `InquiryForm` | Implemented |
| 4 | Operating Presence | `OperatingPresence` | Implemented |
| 5 | Response-Time Commitment | `ResponseTimeCommitment` | Implemented |
| 6 | Inquiry Routing FAQ | `InquiryRoutingFaq` | Implemented |

**Universal Closing CTA:** Not included (correct per spec — Contact opts out).

---

## ✓ Matching section order

Page route: `/contact`

Section order in `app/contact/page.tsx`:

1. Hero
2. Three Engagement Paths
3. Inquiry Form
4. Operating Presence
5. Response-Time Commitment
6. Inquiry Routing FAQ

No additional sections added.

---

## ✓ Form field validation

| Field | Spec requirement | Implementation |
|-------|------------------|----------------|
| Name | Required | `FloatingLabelInput` — required, validated |
| Business Email | Required | Email type, pattern validation |
| Organization | Required | Validated |
| Role | Required | Validated |
| Service Area of Interest | Dropdown — 10 options | All 10 options from spec |
| Inquiry Detail | Textarea, 3–5 sentences | Required with hint text |
| Supporting Documentation | Optional, max 10 MB | `FileUploadField` with size check |
| Submit | Submit Inquiry → | Primary button with arrow |
| Below submit | Response-time messaging | Exact copy from spec |

**Dropdown options (all present):**

Software Development · ERP & CRM Implementation · Staffing Solutions · Lead Generation Services · Digital Marketing Services · Website Development · AI Agent Development · Dharwin OS · Careers · Other

**Form behavior:**

- Visible by default (no modal, accordion, or hidden state)
- Floating labels (no placeholder-as-label)
- Client-side validation with accessible error messages

---

## ✓ Responsive validation

| Breakpoint | Layout |
|------------|--------|
| Desktop (1280+) | Engagement cards: 3 columns; operating presence: 2 columns |
| Tablet (768–1279) | Engagement cards: 2 columns; form max-width 720px |
| Mobile (&lt;768) | Engagement cards: stacked; all sections full-width with mobile padding |

Grid follows existing 12-column / 1280px max-width pattern used on Home and About.

---

## ✓ Accessibility validation

| Requirement | Status |
|-------------|--------|
| Proper form labels | Floating labels + `sr-only` required markers |
| Keyboard navigation | Engagement cards (button/link), form fields, submit |
| Visible focus states | `focus-visible:outline-ember` on interactive elements |
| Accordion keyboard | Enter / Space toggles; `aria-expanded`, `aria-controls` |
| File upload | Labeled input with hint and error `aria-describedby` |
| Section landmarks | `aria-labelledby` on all sections |
| Hero | `aria-labelledby` on centered hero heading |
| Reduced motion | `motion-reduce:` classes; hero animations respect `prefers-reduced-motion` via existing CSS |

---

## ✓ Animation validation

| Pattern | Applied |
|---------|---------|
| Hero reveal | Word-by-word + fade-up (`hero-word-reveal`, `hero-fade-up`) |
| Section reveal on scroll | `useSectionReveal` + `SectionReveal` (600ms, 80ms stagger) |
| Card hover | `-translate-y-1` on engagement cards |
| Accordion expansion | `grid-template-rows` height transition (300ms) |
| Banned patterns | No parallax, scroll-jacking, cursor effects, or new animation libraries |

---

## ⚠ Missing client-provided data

| Item | Source note | Current handling |
|------|-------------|------------------|
| US headquarters phone | Spec: "phone TBD" | Placeholder: `[Phone number pending client confirmation]` |
| India operations phone | Spec: "Phone TBD" | Placeholder: `[Phone number pending client confirmation]` |
| FAQ full Q&A copy | Spec lists 6 topics only | Topic titles used as questions; answers marked pending (except partnerships@ email from spec) |
| Contact page in content-reference.md | Not provided | All copy sourced from website-specification.md |

---

## ⚠ Backend integrations required

| Integration | Spec reference | Current handling |
|-------------|----------------|------------------|
| Calendar booking (Calendly, Cal.com, HubSpot Meetings) | Opens calendar inline | Placeholder panel; set `NEXT_PUBLIC_CALENDAR_EMBED_URL` to enable iframe embed |
| Inquiry form submission backend | Form submission backend | Client-side validation + success message only; no API route |
| File upload storage | Supporting documentation | File validated client-side; not uploaded |
| Mailto | contact@dharwinbusinesssolutions.com | `mailto:` link on Direct Email card |
| Partnerships email | partnerships@ (FAQ topic) | Referenced in FAQ answer placeholder |

---

## ⚠ Deviations from source documents

| Item | Deviation | Rationale |
|------|-----------|-----------|
| FAQ question phrasing | Topic labels used as accordion titles (e.g. "Uncertain service category") | Full question copy not provided in source documents; topics used verbatim to avoid inventing copy |
| FAQ answers | Placeholder text for 5 of 6 entries | Source documents list topics only, not answer copy |
| Inquiry form success message | Generic acknowledgment added on submit | Required for form UX; backend persistence not yet available |
| Hero component | New `HeroCentered` variant | Spec calls for centred editorial hero; variant documented in `components.md` but not previously implemented |
| Response-time section body | Statement + supporting paragraph | Spec provides both headline statement and body paragraph; both rendered in editorial typography |

---

## Copy lock verification

### Hero

- **Headline:** Begin a Consultation With the Dharwin Team. ✓
- **Subhead:** Exact match from spec ✓
- **No CTA buttons** ✓
- **No images / statistics / cards** ✓

### Engagement paths

| Card | CTA | Behavior |
|------|-----|----------|
| Schedule a Consultation | Schedule a 30-Minute Consultation → | Reveals inline calendar panel |
| Submit a Project Brief | Submit a Project Brief → | Scrolls to `#inquiry-form` |
| Direct Email | contact@dharwinbusinesssolutions.com | `mailto:contact@dharwinbusinesssolutions.com` |

### Operating presence

- **Headline:** Headquartered in the United States. Operations Across the United States and India. ✓
- **US address:** 30 N Gould Street, Sheridan, Wyoming 82801 ✓
- **India:** Distributed delivery team; 9:30 AM – 6:30 PM IST ✓
- **No embedded maps** ✓

### Response-time commitment

- Statement and body match spec verbatim ✓
- Full-width band, light background, editorial typography ✓
- No cards, icons, illustrations, or CTAs ✓
