# Creator Labs Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the `/creator-labs` landing page to match the "Premium Editorial" aesthetic and specific content of the new PDF, removing the dark mode and complex custom graphics.

**Architecture:** We will rewrite `src/pages/CreatorLabs.tsx`. We will remove the custom SVG graphic components (`OpportunityLoopGraphic`, `StudioPreviewGraphic`, etc.) and the `creatorLabsThemeStyles` object. We will build the new sections using standard Tailwind utility classes directly in the JSX, relying on the project's existing UI components where appropriate, but styling them for a light, high-contrast, magazine-like feel.

**Tech Stack:** React, Tailwind CSS, Framer Motion, Lucide React.

---

### Task 1: Cleanup and Setup

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Remove existing dark theme and custom graphics**

```tsx
// Remove creatorLabsThemeStyles, darkGridStyle, heroGridStyle, goldTextureSurfaceStyle
// Remove OpportunityLoopGraphic, StudioPreviewGraphic, OutcomesProofGraphic, JourneyProgressGraphic, SchoolVisibilityGraphic, RolloutProcessGraphic

// Update main wrapper to remove style prop and set light background
// From: <div className="min-h-screen overflow-x-hidden bg-background text-foreground" style={creatorLabsThemeStyles}>
// To: <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 font-sans">
```

- [ ] **Step 2: Update Navigation Bar**

```tsx
// Update nav to be light and crisp
// From: <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#100c0c]/82 backdrop-blur-xl">
// To: <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl">

// Update text colors inside nav to gray-900/gray-600
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "refactor: remove dark theme and custom graphics from creator labs"
```

---

### Task 2: Implement Hero Section

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build Light Hero Section**

```tsx
// Replace the first <section> in <main>
<section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
  <div className="absolute inset-0 bg-[#fdfbf7] -z-10" /> {/* Soft cream background */}
  <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={staggerDelayed}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <Badge variant="outline" className="border-primary text-primary bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Creator Studio For Schools
          </Badge>
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 font-heading">
          Creator Labs
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
          Build creators, influencers, and entrepreneurs inside schools.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-[#d69f52] hover:bg-[#c48d42] text-white rounded-full px-8 py-6 text-lg shadow-lg">
            <a href={CONTACT_EMAIL}>Partner With Us</a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative">
        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
           <img src={creatorLabsCover} alt="Students creating content" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement light hero section for creator labs"
```

---

### Task 3: Implement Problem vs Opportunity

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build Problem vs Opportunity Section**

```tsx
// Replace the second <section>
<section className="py-20 md:py-32 bg-white">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading">
        The Orange Economy <span className="text-[#d69f52]">Opportunity missed out!</span>
      </motion.h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {/* The Problem */}
      <motion.div variants={fadeUp} className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading">The Problem</h3>
        <ul className="space-y-6">
          {[
            "Students consume content daily but never learn to create it.",
            "Schools miss a chance to build visible student outcomes.",
            "Most programmes deliver no real parent-facing value."
          ].map((text, i) => (
            <li key={i} className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-gray-400 mt-2.5 shrink-0" />
              <p className="text-lg text-gray-600 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* The Opportunity */}
      <motion.div variants={fadeUp} className="bg-[#fdfbf7] rounded-[2rem] p-8 md:p-12 border border-[#f3e4c0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d69f52]/5 rounded-full blur-3xl" />
        <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading relative z-10">The Opportunity</h3>
        <ul className="space-y-6 relative z-10">
          {[
            "Students learn real skills that AI cannot take away!",
            "Schools get brand visibility through student content."
          ].map((text, i) => (
            <li key={i} className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-[#d69f52] mt-2.5 shrink-0" />
              <p className="text-lg text-gray-800 leading-relaxed font-medium">{text}</p>
            </li>
          ))}
          <li className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
             <div className="w-2 h-2 rounded-full bg-[#d69f52] mt-2.5 shrink-0" />
             <p className="text-xl text-gray-900 font-bold leading-relaxed">
               Imagine a student making <span className="text-[#d69f52] text-2xl block mt-1">₹10 Lakhs before passing!</span>
             </p>
          </li>
        </ul>
      </motion.div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement problem vs opportunity section"
```

---

### Task 4: Implement Lab Setup (Hardware)

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build Lab Setup Section**

```tsx
// Define new hardware items
const hardwareItems = [
  { title: "Camera", desc: "Professional filming setup", icon: Camera },
  { title: "Ring Light", desc: "Studio-grade lighting", icon: Sparkles },
  { title: "Microphone", desc: "Podcast & voiceover ready", icon: Mic },
  { title: "Editing Station", desc: "Full post-production tools", icon: Film },
  { title: "Content Corner", desc: "Short-form & reels creation", icon: Video },
  { title: "Plug & Play", desc: "Minimal school effort required", icon: Rocket },
];

// Replace the third <section>
<section className="py-20 md:py-32 bg-[#fafaf9]">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
      <motion.p variants={fadeUp} className="text-sm font-bold text-[#d69f52] uppercase tracking-widest mb-4">Set up inside your school</motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading">
        India's First Creator Lab!
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      {hardwareItems.map((item, i) => (
        <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-full bg-[#fdfbf7] border border-[#f3e4c0] flex items-center justify-center mb-6 text-[#d69f52]">
            <item.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={fadeUp} className="bg-gray-100 rounded-2xl p-6 text-center max-w-3xl mx-auto flex items-center justify-center gap-4">
       <Check className="w-5 h-5 text-gray-500 shrink-0" />
       <p className="text-gray-700 font-medium">We handle setup, delivery, and support. Your school just provides the space.</p>
    </motion.div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement lab setup hardware section"
```

---

### Task 5: Implement 5-Year Journey

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build 5-Year Journey Section**

```tsx
// Replace the fourth <section>
<section className="py-20 md:py-32 bg-white border-y border-gray-100">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="text-center max-w-3xl mx-auto mb-20">
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading">
        What Students Learn & Do Across 5 years!
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="max-w-5xl mx-auto">
      {/* Top Row */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {journeyStages.slice(0, 3).map((stage, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-[#f3e4c0] shadow-sm text-center relative">
            <div className="w-12 h-12 rounded-full bg-[#d69f52] text-white flex items-center justify-center mx-auto mb-4">
              <stage.icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{stage.title}</h3>
            <p className="text-gray-600 text-sm">{stage.description}</p>
          </motion.div>
        ))}
      </div>
      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        {journeyStages.slice(3, 5).map((stage, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-[#f3e4c0] shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#d69f52] text-white flex items-center justify-center mx-auto mb-4">
              <stage.icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{stage.title}</h3>
            <p className="text-gray-600 text-sm">{stage.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Tracks Pills */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
        {journeyTracks.map((track, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2 shadow-sm">
            <Check className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 font-medium text-sm">{track}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement 5 year journey timeline"
```

---

### Task 6: Implement Rollout Process

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build Rollout Process Section**

```tsx
// Replace the fifth <section>
<section className="py-20 md:py-32 bg-[#fafaf9]">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="mb-16">
      <motion.p variants={fadeUp} className="text-sm font-bold text-[#d69f52] uppercase tracking-widest mb-4">Simple 4-Step Rollout</motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading">
        How It Works
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="grid md:grid-cols-2 gap-x-12 gap-y-10">
      {rolloutSteps.map((step, i) => (
        <motion.div key={i} variants={fadeUp} className="flex gap-6 border-b border-gray-200 pb-10">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
             <span className="text-gray-400 font-bold">{i + 1}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">{step.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
    
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={fadeUp} className="bg-[#fdfbf7] border border-[#f3e4c0] rounded-2xl p-8 mt-12 flex items-start gap-4 max-w-4xl">
       <div className="w-6 h-6 rounded bg-[#d69f52] shrink-0 mt-1" />
       <p className="text-gray-800 text-lg font-medium">School input stays minimal. We handle setup, delivery, and ongoing support — so your staff focuses on what they do best.</p>
    </motion.div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement 4 step rollout section"
```

---

### Task 7: Implement Certificate & School Value

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build Certificate & School Value Sections**

```tsx
// Replace Certificate and School Value sections
<section className="py-20 md:py-32 bg-white">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
         <motion.p variants={fadeUp} className="text-sm font-bold text-[#d69f52] uppercase tracking-widest mb-4">Recognised. Shareable. Prestigious.</motion.p>
         <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-10">A Certificate That Stands Out</motion.h2>
         <div className="space-y-8">
            {certificateHighlights.map((text, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-[#d69f52]">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-gray-700 text-lg">{text}</p>
              </motion.div>
            ))}
         </div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={fadeUp} className="relative">
         <div className="absolute inset-0 bg-[#fdfbf7] rounded-[3rem] -rotate-3 border border-[#f3e4c0] shadow-xl" />
         <img src={creatorLabsCertificate} alt="Certificate" className="relative z-10 rounded-2xl shadow-2xl w-full" />
      </motion.div>
    </div>

    {/* School Value */}
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="bg-[#fafaf9] rounded-[3rem] p-8 md:p-16 border border-gray-100">
       <motion.p variants={fadeUp} className="text-sm font-bold text-[#d69f52] uppercase tracking-widest mb-4">School Value</motion.p>
       <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-16">Imagine these benefits for your school!</motion.h2>
       
       <div className="grid md:grid-cols-3 gap-12 mb-16 border-b border-gray-200 pb-16">
          <motion.div variants={fadeUp}>
             <p className="text-6xl font-bold text-gray-900 font-heading mb-4">200+</p>
             <h3 className="text-2xl font-bold text-gray-800 mb-2">YouTube Channels</h3>
             <p className="text-gray-600">Real UGC content, live and growing</p>
          </motion.div>
          <motion.div variants={fadeUp}>
             <p className="text-6xl font-bold text-gray-900 font-heading mb-4">₹0</p>
             <h3 className="text-2xl font-bold text-gray-800 mb-2">Admission Marketing</h3>
             <p className="text-gray-600">Students become your best marketing</p>
          </motion.div>
          <motion.div variants={fadeUp}>
             <p className="text-6xl font-bold text-gray-900 font-heading mb-4">#1</p>
             <h3 className="text-2xl font-bold text-gray-800 mb-2">School Differentiation</h3>
             <p className="text-gray-600">First-of-its-kind visible outcome</p>
          </motion.div>
       </div>

       <div className="grid md:grid-cols-3 gap-6">
          {schoolValueBenefits.map((benefit, i) => (
             <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
             </motion.div>
          ))}
       </div>
    </motion.div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement certificate and school value sections"
```

---

### Task 8: Implement Team Section & Final Polish

**Files:**
- Modify: `src/pages/CreatorLabs.tsx`

- [ ] **Step 1: Build Team Section**

```tsx
// Replace Team section
<section className="py-20 md:py-32 bg-white">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="mb-16">
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading border-b border-gray-200 pb-6 inline-block">
        The Team Behind Creator Labs
      </motion.h2>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16">
      {/* Founder */}
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8 font-heading">Vikrant Shome — Founder</motion.h3>
        <div className="grid grid-cols-2 gap-8 mb-10">
           {founderMetrics.map((metric, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                 <div className="w-24 h-24 mx-auto rounded-full border-4 border-[#d69f52]/30 flex items-center justify-center mb-4">
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                 </div>
                 <p className="text-sm font-medium text-gray-600">{metric.label}</p>
              </motion.div>
           ))}
        </div>
        <motion.ul variants={fadeUp} className="space-y-4">
           {founderHighlights.map((highlight, i) => (
             <li key={i} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                <p className="text-gray-700 italic">{highlight}</p>
             </li>
           ))}
        </motion.ul>
      </motion.div>

      {/* Network */}
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger} className="bg-[#111827] text-white rounded-[3rem] p-10 md:p-14">
        <motion.h3 variants={fadeUp} className="text-2xl font-bold mb-6 font-heading">Our Educator Network</motion.h3>
        <motion.p variants={fadeUp} className="text-gray-400 mb-10 text-lg">
          20+ educators from India's most respected organisations in media, tech, and education.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
           {educatorNetwork.map((name, i) => (
             <div key={i} className="border border-[#d69f52]/40 text-[#d69f52] px-6 py-3 rounded text-sm font-bold uppercase tracking-wider">
               {name}
             </div>
           ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Remove Unused Imports**
Ensure all unused icons, unused graphics components, and the `creatorLabsThemeStyles` object are deleted from the top of the file to fix any ESLint warnings.

- [ ] **Step 3: Test and Verify**
Run the development server and verify the page looks correct and matches the new light, premium aesthetic.

- [ ] **Step 4: Commit**

```bash
git add src/pages/CreatorLabs.tsx
git commit -m "feat: implement team section and finalize light theme"
```