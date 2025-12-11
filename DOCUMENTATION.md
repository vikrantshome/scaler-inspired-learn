# Career Compass - Project Documentation

> **Version:** 1.0.0  
> **Last Updated:** December 2024  
> **Author:** Naviksha AI Team

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Assets Directory](#assets-directory)
5. [Components Guide](#components-guide)
6. [Design System](#design-system)
7. [External Links](#external-links)

---

## Project Overview

Career Compass is a single-page marketing website for Naviksha AI's career counselling assessment platform. The website showcases the AI-powered career assessment tool designed for students in Grades 6-12.

### Key Features
- AI-powered career assessment in 15 minutes
- Personalized career reports with top 3 career matches
- Trusted by 700+ schools across 17+ cities in India
- Research-aligned psychometric framework

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Utility-first Styling |
| **Framer Motion** | Animations |
| **shadcn/ui** | UI Component Library |
| **Lucide React** | Icon Library |

---

## Project Structure

```
src/
├── assets/                    # Static assets
│   └── logos/                 # School partner logos
│       ├── cambridge-logo.png
│       ├── devin-logo.png
│       ├── dps-logo.png
│       ├── gd-goenka-logo.png
│       ├── kv-logo.png
│       └── rustomjee-logo.png
│
├── components/                # React components
│   ├── ui/                    # Reusable UI components (shadcn)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   └── ... (other UI components)
│   │
│   ├── Header.tsx             # Navigation header
│   ├── HeroSection.tsx        # Main hero banner
│   ├── StatsSection.tsx       # Statistics & school logos
│   ├── HowItWorksSection.tsx  # Process steps
│   ├── BenefitsSection.tsx    # Benefits/features
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── FAQSection.tsx         # Frequently asked questions
│   ├── CTASection.tsx         # Call-to-action
│   └── Footer.tsx             # Site footer
│
├── hooks/                     # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/                       # Utility functions
│   └── utils.ts
│
├── pages/                     # Page components
│   ├── Index.tsx              # Main landing page
│   └── NotFound.tsx           # 404 page
│
├── App.tsx                    # Root application component
├── main.tsx                   # Application entry point
└── index.css                  # Global styles & design tokens
```

---

## Assets Directory

### School Logos (`src/assets/logos/`)

| File | School | Usage |
|------|--------|-------|
| `dps-logo.png` | Delhi Public School | Stats section |
| `kv-logo.png` | Kendriya Vidyalaya | Stats section |
| `gd-goenka-logo.png` | GD Goenka | Stats section |
| `cambridge-logo.png` | Cambridge Schools | Stats section |
| `rustomjee-logo.png` | Rustomjee International | Stats section |
| `devin-logo.png` | Devin Academy | Stats section |

**Note:** All logos are displayed with grayscale filter and become colored on hover.

---

## Components Guide

### 1. Header (`Header.tsx`)
**Purpose:** Fixed navigation bar with logo and CTA button  
**Features:**
- Animated entrance on page load
- Backdrop blur effect
- Responsive navigation links
- "Start Now" CTA button

### 2. HeroSection (`HeroSection.tsx`)
**Purpose:** Main landing section with primary messaging  
**Features:**
- Animated badge showing initiative name
- Gradient text headline
- Feature badges (time, careers, AI, schools)
- Primary CTA button
- Trust indicators

### 3. StatsSection (`StatsSection.tsx`)
**Purpose:** Display credibility metrics and partner logos  
**Features:**
- School partner logos with hover effects
- 4 key statistics (schools, cities, insights, time)
- Scroll-triggered animations

### 4. HowItWorksSection (`HowItWorksSection.tsx`)
**Purpose:** Explain the 4-step process  
**Steps:**
1. Schedule - Coordinate session
2. Test - 15-minute OMR assessment
3. AI Analysis - Generate insights
4. Reports - Deliver results

### 5. BenefitsSection (`BenefitsSection.tsx`)
**Purpose:** Highlight what participants receive  
**Items:**
- Career Compass Report
- Participation Certificate (IIT co-endorsed)
- Career Booklet

### 6. TestimonialsSection (`TestimonialsSection.tsx`)
**Purpose:** Display educator testimonials  
**Features:**
- 3 testimonial cards
- Star ratings
- Quote styling
- Hover animations

### 7. FAQSection (`FAQSection.tsx`)
**Purpose:** Answer common questions  
**Features:**
- Expandable accordion items
- 6 frequently asked questions
- Smooth open/close animations

### 8. CTASection (`CTASection.tsx`)
**Purpose:** Final call-to-action before footer  
**Features:**
- Gradient background card
- Exam dates banner
- Primary CTA button

### 9. Footer (`Footer.tsx`)
**Purpose:** Site footer with links and contact  
**Sections:**
- Brand information
- Quick navigation links
- Contact details (email, phone)
- Copyright notice

---

## Design System

### Colors (HSL Values)

| Token | Light Mode | Purpose |
|-------|------------|---------|
| `--primary` | `221 83% 53%` | Main brand blue |
| `--accent` | `24 95% 53%` | Orange highlight |
| `--background` | `210 40% 98%` | Page background |
| `--foreground` | `222 47% 11%` | Primary text |
| `--muted-foreground` | `215 16% 47%` | Secondary text |
| `--card` | `0 0% 100%` | Card backgrounds |
| `--border` | `214 32% 91%` | Border color |

### Custom Gradients

| Class | Usage |
|-------|-------|
| `.bg-gradient-primary` | Primary CTA buttons, icons |
| `.bg-gradient-hero` | Hero section background |
| `.text-gradient` | Gradient text effect |

### Shadows

| Class | Usage |
|-------|-------|
| `.shadow-card` | Default card shadow |
| `.shadow-elevated` | Hover state shadow |
| `.shadow-soft` | Subtle shadows |

### Typography

| Font | Usage |
|------|-------|
| **Plus Jakarta Sans** | Headings |
| **DM Sans** | Body text |

---

## External Links

All CTAs link to: `https://app.naviksha.co.in/auth`

### Contact Information
- **Email:** ainaviksha@gmail.com
- **Phone:** +91-9674255951
- **Founder:** Vikrant Shome

---

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

*© 2024 Naviksha AI. Part of The National Career Counselling Initiative (NCCi)*
