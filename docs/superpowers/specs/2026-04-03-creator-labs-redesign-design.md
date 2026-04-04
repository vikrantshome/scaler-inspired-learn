# Creator Labs Redesign - Design Specification

**Date:** 2026-04-03
**Status:** Draft

## 1. Goal & Context

**Goal:** Redesign the `/creator-labs` landing page to strictly align with the provided PDF ("Creator-Labs_Naviksha_vF.pdf"). 
**Context:** The current implementation (`src/pages/CreatorLabs.tsx`) was reviewed and found to be "generic", "doesn't stand out", and lacking the specific content from the PDF. It currently relies heavily on a dark-mode, tech-heavy aesthetic with complex custom SVG graphics.
**Strategy:** We are abandoning the dark SaaS look for a **"Premium Editorial / High-End Agency"** aesthetic. This means bright, crisp whites, soft creams, high-contrast dark typography, elegant lifestyle photography, and clean, typography-driven data visualization over complex graphics.

## 2. Visual Language & Theming

*   **Palette:**
    *   Background (Primary): White (`#ffffff`)
    *   Background (Secondary/Cards): Soft Cream/Off-White (`#fafaf9` or similar)
    *   Foreground (Text): Dark Charcoal (`#111827`)
    *   Accent: Gold/Orange matching the PDF (`#d69f52` or a close Tailwind equivalent like `orange-500` mixed with gold).
*   **Typography:**
    *   Headings: `Plus Jakarta Sans` (existing) - used large, bold, and tightly tracked for impact.
    *   Body: `DM Sans` (existing) - clean and highly readable.
*   **Aesthetic Rules:**
    *   **No dark mode sections.** All backgrounds must be light.
    *   **No complex custom graphics** (e.g., `OpportunityLoopGraphic`, `StudioPreviewGraphic`). Replace with clean typography, simple icons, and high-quality photography.
    *   **Subtle Animations:** Keep Framer Motion but use it for elegant fade-ups and gentle scale effects on hover, not glowing pulses or complex sequential drawings.

## 3. Section-by-Section Requirements

The new page will be structured exactly according to the PDF flow:

### 3.1 Hero
*   **Headline:** "Creator Labs"
*   **Subheadline:** "Build creators, influencers, and entrepreneurs inside schools"
*   **Visual:** A large, high-quality background or hero image showing students collaborating (e.g., `creator-labs-cover.jpg` with a light overlay).
*   **Action:** Primary CTA linking to the contact/auth flow.

### 3.2 Problem vs. Opportunity
*   **Headline:** "The Orange Economy Opportunity missed out!"
*   **Layout:** Two distinct columns or sections.
*   **The Problem (Gray/Muted background):** 3 bullet points (Consume daily, Visible outcomes missed, No parent value).
*   **The Opportunity (Cream/Gold background):** 3 bullet points (Real skills, Brand visibility, **"Imagine a student making ₹10 Lakhs before passing!"**). This specific stat must be massive and highly visible.

### 3.3 Lab Setup (Hardware)
*   **Headline:** "India's First Creator Lab!"
*   **Subheadline/Banner:** "We handle setup, delivery, and support. Your school just provides the space."
*   **Layout:** A 3x2 or 2x3 grid of 6 clean, light cards.
*   **Cards:** Camera, Ring Light, Microphone, Editing Station, Content Corner, Plug & Play. Each needs a simple icon and short description.

### 3.4 5-Year Journey
*   **Headline:** "What Students Learn & Do Across 5 years!"
*   **Layout:** A clean, visual roadmap or timeline.
*   **Stages:** Top row: Learn, Create, Publish. Bottom row: Grow, Monetise.
*   **Tracks:** A visually distinct cluster of 8 tags below the stages (Content Creation, Personal Branding, etc.).

### 3.5 Rollout Process
*   **Headline:** "How It Works"
*   **Layout:** A simple, elegant 4-step list or horizontal flow.
*   **Steps:** Studio Setup, Course Launch, Students Create, Outcomes Delivered.

### 3.6 Certificate
*   **Headline:** "A Certificate That Stands Out"
*   **Visual:** Large, high-resolution image of `creator-labs-certificate.jpg`.
*   **Content:** 3 specific bullet points (Co-certified by WLDD & LiT/Gauri Khan, Shareable, Strengthens applications).

### 3.7 School Value
*   **Headline:** "Imagine these benefits for your school!"
*   **Top Metrics (Giant Typography):** "200+ YouTube Channels", "**₹0** Admission Marketing" (MUST use ₹0, not 10x), "#1 School Differentiation".
*   **Bottom Cards:** 3 simple cards (Better Student Engagement, Stronger Parent Perception, Institutional Brand Lift).

### 3.8 The Team
*   **Headline:** "The Team Behind Creator Labs"
*   **Founder:** Image of `vikrant-shome.jpg`. 4 key stats (10 Years, 700+ Schools, 100K+ Students, 20+ Educators). 3 bullet points of bio.
*   **Educator Network:** A clean, typographical grid listing the 10+ brand names (Scaler, LiT, WLDD, Red Chillies, Google, OpenAI, etc.).

## 4. Technical Approach

*   **File:** Rewrite `src/pages/CreatorLabs.tsx`.
*   **Dependencies:** Remove unused custom graphics components. Retain `framer-motion` and `lucide-react`.
*   **Styling:** Remove `creatorLabsThemeStyles` object entirely. We will use standard Tailwind utility classes to enforce the light, premium theme directly on the elements, ensuring consistency and avoiding CSS variable conflicts with the main site theme.

## 5. Success Criteria

*   The dark theme is completely gone.
*   Every piece of text from the PDF is present verbatim (especially "₹10 Lakhs" and "₹0 Admission Marketing").
*   The page feels like a high-end educational program brochure, not a generic SaaS tool.
*   Animations are subtle, elegant, and performant.