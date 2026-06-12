# Dharwin Components Library

This file defines every reusable UI component used throughout the Dharwin Business Solutions website.

All pages must compose existing components before creating new layouts.

---

# Header

## Desktop

Structure:

[ Logo ] [ Navigation ] [ CTA ]

Navigation:
- Home
- About
- Solutions
- Product
- Careers
- Contact

CTA:
- Schedule a Consultation →

Behavior:
- Sticky header
- Transparent on page load
- Solid background after 80px scroll
- Smooth 300ms transition

Solutions Dropdown:
- Two-column layout
- Left side: 7 service links
- Right side: AI Agent Development promo card

Animation:
- Fade + translateY(8px)

Mobile:
- Hamburger menu
- Full-screen navigation overlay
- Animated reveal

---

# Footer

Background:
- var(--ink-90)

Structure:

Brand Block
Navigation Columns
Newsletter Form
Legal Information

Sections:

Solutions
Company
Resources
Legal
Connect

Bottom Bar:
- Copyright
- Location
- Response-time pledge

Manifesto:

The integrated operating partner for businesses that require software, growth, and talent functions delivered under a single accountable engagement.

---

# Hero Editorial

Purpose:
Homepage
About Page

Layout:
- Asymmetric editorial layout
- H1 spans 8–9 columns
- Subhead spans 4–5 columns
- CTA row below
- Optional right-side editorial panel

Elements:
- Eyebrow label
- H1
- Supporting paragraph
- CTA group

Spacing:
- 160px top
- 160px bottom

Animation:
- Word reveal
- 60ms stagger
- Run once

---

# Hero Split

Purpose:
Service pages

Layout:
50 / 50 split

Left:
- Eyebrow
- Heading
- Body
- CTA group

Right:
- Product image
- Dashboard
- Video
- Demo component

Mobile:
- Stack vertically
- Content first
- Visual second

---

# Hero Centered

Purpose:
ERP
Contact
Careers

Layout:
Centered content block

Max Width:
720px

Content:
- Eyebrow
- Heading
- Body
- CTA row

---

# Hero Form

Purpose:
Staffing Solutions

Layout:
50 / 50

Left:
Content

Right:
Lead form

Form replaces CTA button.

---

# Primary Button

Height:
56px

Radius:
8px

Background:
var(--ember)

Text:
var(--paper)

Typography:
Inter
16px
600

Hover:
- Slight lift
- Arrow translateX(4px)

Transition:
200ms

---

# Secondary Button

Background:
Transparent

Text:
var(--ink)

Underline:
Animated ember underline

Hover:
Underline draw animation

---

# Closing CTA Banner

Background:
var(--ink-90)

Content:
- Heading
- Supporting text
- Primary CTA
- Secondary CTA

Max Width:
960px

Alignment:
Centered

Used:
Every page except Contact

---

# Service Card

Purpose:
Homepage services
Capabilities grids

Structure:
- Label
- Title
- Description
- Learn More

Padding:
32px

Background:
var(--paper-elevated)

Hover:
- translateY(-4px)
- underline animation

Transition:
300ms

---

# Case Study Card

Structure:
- Image
- Eyebrow
- Title
- Description
- Statistics
- CTA

Image Ratio:
16:9 or 4:5

Layout:
Magazine style

---

# Person Card

Image:
3:4 portrait

Content:
- Name
- Role

Hover:
Reveal short bio

Used:
Leadership
Team grid

---

# Stat Block

Structure:
- Large number
- Caption

Number:
Fraunces

Size:
96–160px

Color:
var(--ember)

Caption:
Inter 14px

Animation:
Count up

Duration:
1.2s

---

# Process Timeline

Variants:

Vertical
Horizontal

Structure:
- Number
- Title
- Description

Number Style:
Fraunces
96px

Format:
01
02
03
04

---

# Pull Quote

Typography:
Fraunces

Size:
48px

Structure:
- Quote icon
- Quote
- Attribution

Quote Icon:
var(--ember)

Alignment:
Centered

---

# Industry Chip

Background:
var(--ember-soft)

Text:
var(--ink)

Radius:
999px

Padding:
10px 14px

Hover:
Background darkens slightly

---

# Tag Chip

Used:
NEW
Featured
Launch

Background:
var(--ember-soft)

Text:
var(--ink)

Radius:
999px

---

# Logo Marquee

Purpose:
Trust strip

Logo Height:
32px

Opacity:
40%

Hover:
100%

Animation:
Continuous scroll

Duration:
40s

Linear

---

# Accordion

Structure:
Question
Answer

Border:
Top hairline

Interaction:
Plus → Minus

Animation:
Smooth height transition

Duration:
300ms

Used:
FAQs

---

# Form Components

Input:
56px height

Textarea:
Minimum 140px

Radius:
8px

Border:
1px solid var(--rule)

Label:
Floating label

Never use placeholders as labels.

Focus:
2px ember ring

---

# Pricing Card

Structure:
- Plan Name
- Description
- Features
- CTA

Background:
var(--paper-elevated)

Padding:
32px

Hover:
Subtle elevation

Used:
Dharwin OS
Maintenance Plans
Future Pricing Sections

---

# Technology Stack Grid

Purpose:
Software Development
AI Agent Development

Structure:
Category
Logos

Logo Size:
24px

Default:
Muted

Hover:
Full opacity

---

# Comparison Table

Purpose:
Website Development

Columns:
Platform
Best For
Ownership
Monthly Cost

Style:
Editorial
Minimal borders

No heavy table styling

---

# Security Tile

Purpose:
AI Agent Development

Structure:
Icon
Title
Description

Layout:
3 columns desktop
1 column mobile

---

# Universal Animation Rules

Section Reveal:
600ms
80ms stagger

Hover:
200ms

Page Transition:
400ms

Number Count:
1.2s

Respect:
prefers-reduced-motion

Disable:
- Scroll jacking
- Cursor effects
- Heavy parallax
- Kinetic typography

---

# Component Creation Rule

Before creating a new component:

1. Check if an existing component can be reused.
2. Extend existing variants whenever possible.
3. Maintain spacing consistency.
4. Maintain typography consistency.
5. Follow design.md at all times.