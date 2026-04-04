import { type CSSProperties, useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Clapperboard,
  Film,
  GraduationCap,
  Mic,
  PlayCircle,
  Rocket,
  School,
  Sparkles,
  TrendingUp,
  Users2,
  Video,
  ChevronDown,
  Star,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import creatorEquipment3d from "@/assets/creator-equipment-3d.png";
import creatorLabsCertificate from "@/assets/creator-labs-certificate.jpg";
import creatorLabsCover from "@/assets/creator-labs-cover.jpg";
import creatorLabsGoldTexture from "@/assets/creator-labs-gold-texture.jpg";
import heroEditorialGraphic from "@/assets/hero-editorial-graphic.png";
import orangeEconomyIllustration from "@/assets/orange-economy-illustration.png";
import statsPosterBg from "@/assets/stats-poster-bg.png";
import studio3dRender from "@/assets/studio-3d-render.png";
import vikrantShomeImage from "@/assets/vikrant-shome.jpg";
import journey3dGraphic from "@/assets/journey-3d-graphic.png";

const CONTACT_EMAIL = "mailto:ainaviksha@gmail.com";
const CONTACT_PHONE = "tel:+917044685101";

// ─── Design tokens ────────────────────────────────────────────────────────────
const creatorLabsThemeStyles = {
  "--background": "34 43% 97%",
  "--foreground": "18 20% 12%",
  "--card": "0 0% 100%",
  "--card-foreground": "18 20% 12%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "18 20% 12%",
  "--primary": "22 92% 55%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "31 34% 92%",
  "--secondary-foreground": "18 20% 12%",
  "--muted": "32 28% 94%",
  "--muted-foreground": "20 9% 39%",
  "--accent": "35 100% 92%",
  "--accent-foreground": "18 20% 12%",
  "--destructive": "0 72% 51%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "28 27% 84%",
  "--input": "28 27% 84%",
  "--ring": "22 92% 55%",
  "--radius": "1rem",
  "--section-surface": "linear-gradient(180deg, hsl(37 38% 97%) 0%, hsl(33 34% 94%) 100%)",
  "--soft-shadow": "0 26px 70px -36px hsl(18 44% 18% / 0.32)",
} as CSSProperties;

// ─── Content data ─────────────────────────────────────────────────────────────
const heroSignals = [
  { value: "Plug & Play", label: "Creator Studio", description: "Fully managed lighting, camera, and audio." },
  { value: "Guided", label: "Curriculum Integration", description: "A structured path from basics to monetisation." },
  { value: "Visible", label: "Real Outcomes", description: "Student-led channels that build your brand." },
];

const opportunityProblem = [
  "Students consume content daily but never learn to create it.",
  "Schools miss a chance to build visible student outcomes.",
  "Most programmes deliver no real parent-facing value.",
];

const opportunityWins = [
  "Students learn real skills that AI cannot take away.",
  "Schools get brand visibility through student content.",
  "Imagine a student making ₹10 Lakhs before passing out.",
];

const capabilityGroups = [
  { title: "Filming Stack", description: "Professional camera setup and studio-grade lighting.", icon: Camera, items: ["Professional camera setup", "Studio-grade lighting"] },
  { title: "Audio Booth", description: "Microphone-ready for podcasts, narration, and voiceovers.", icon: Mic, items: ["Podcast and voiceover ready", "Creator storytelling"] },
  { title: "Edit Suite", description: "Students cut, polish, and package inside a dedicated workflow.", icon: Film, items: ["Editing station", "Content packaging"] },
  { title: "Publish Engine", description: "Short-form creation and platform-native publishing.", icon: Video, items: ["Short-form creation", "Plug-and-play for schools"] },
];

const labInstallFeatures = [
  { label: "Camera setup", icon: Camera },
  { label: "Studio lighting", icon: Sparkles },
  { label: "Mic system", icon: Mic },
  { label: "Podcast ready", icon: PlayCircle },
  { label: "Edit station", icon: Film },
  { label: "Short-form creation", icon: Video },
];

const journeyStages = [
  { title: "Learn", description: "Content creation fundamentals", icon: GraduationCap },
  { title: "Create", description: "Film, edit, and produce", icon: Clapperboard },
  { title: "Publish", description: "Go live on real platforms", icon: PlayCircle },
  { title: "Grow", description: "Build a real audience", icon: TrendingUp },
  { title: "Monetise", description: "Earn from their content", icon: Rocket },
];

const journeyTracks = [
  "Content Creation",
  "Personal Branding",
  "Storytelling",
  "Audience Building",
  "Influencer Basics",
  "Brand Collaboration",
  "Monetisation",
  "Creator Mindset",
];

const rolloutSteps = [
  { title: "Studio setup", description: "Creator Labs installs the full equipment setup on your campus." },
  { title: "Course launch", description: "Students get a structured digital curriculum delivered by Creator Labs educators." },
  { title: "Students create", description: "Guided content production, channel building, and publishing begin inside the lab." },
  { title: "Outcomes delivered", description: "The school receives portfolios, live channels, school-brand content, and visible results." },
];

const certificateHighlights = [
  "Co-certified by WLDD and LiT School, with celebrity-backed credibility including Gauri Khan.",
  "Shareable across LinkedIn, Instagram, and student portfolios.",
  "Strengthens internship applications, college admissions, and brand collaboration opportunities.",
];

const schoolValueMetrics = [
  { value: "200+", title: "YouTube Channels", description: "Real UGC content, live and growing." },
  { value: "10x", title: "Admission Marketing", description: "Students become your strongest proof of school culture and outcomes." },
  { value: "#1", title: "School Differentiation", description: "A first-of-its-kind visible outcome for your institution." },
];

const schoolValueBenefits = [
  { title: "Better Student Engagement", description: "Hands-on, purpose-driven learning that feels modern and meaningful." },
  { title: "Stronger Parent Perception", description: "Real skills, real channels, and visible earning potential build trust with families." },
  { title: "Institutional Brand Lift", description: "Your school becomes known for producing creators, not just graduates." },
];

const founderMetrics = [
  { value: "10", label: "Years in education" },
  { value: "700+", label: "Schools reached" },
  { value: "100K+", label: "Students counselled" },
  { value: "20+", label: "Expert educators" },
];

const founderHighlights = [
  "Serial founder, NIT and IIM alumnus.",
  "Built programs at Scaler, Physics Wallah, Vedantu, and LiT.",
  "Personally counselled more than 100,000 students across India.",
];

const educatorNetwork = [
  "Scaler Academy", "LiT School", "WLDD", "Tymes Marketing",
  "Havas Media", "Red Chillies Ent.", "OpenAI - ChatGPT",
  "Google", "Microsoft", "Emergent",
];

// ─── Style helpers ─────────────────────────────────────────────────────────────
const sectionHeaderBadgeClassName =
  "mb-2.5 border-primary/20 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:mb-3.5 sm:px-4 sm:text-[11px]";

const heroGridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
} as CSSProperties;

const darkGridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "30px 30px",
} as CSSProperties;

const goldTextureSurfaceStyle = {
  backgroundImage: `linear-gradient(135deg, rgba(254, 250, 244, 0.985), rgba(255, 255, 255, 0.92)), url(${creatorLabsGoldTexture})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
} as CSSProperties;

const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Motion variants ──────────────────────────────────────────────────────────
const createFadeUp = (shouldReduceMotion: boolean): Variants => ({
  hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: motionEase },
  }),
});

const createFadeIn = (shouldReduceMotion: boolean): Variants => ({
  hidden: { opacity: shouldReduceMotion ? 1 : 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.7, delay, ease: "easeOut" },
  }),
});

const createStagger = (shouldReduceMotion: boolean, delayChildren = 0): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { staggerChildren: 0.09, delayChildren },
  },
});

// ─── Reusable section header ──────────────────────────────────────────────────
const SectionHeader = ({
  eyebrow, title, description, align = "left",
}: {
  eyebrow: string; title: string; description?: string; align?: "left" | "center";
}) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <Badge variant="outline" className={sectionHeaderBadgeClassName}>{eyebrow}</Badge>
    <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">{title}</h2>
    {description ? (
      <p className="mt-3 text-base leading-7 text-muted-foreground md:mt-4 md:text-lg md:leading-8">{description}</p>
    ) : null}
  </div>
);

// ─── Animated counter number ──────────────────────────────────────────────────
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-6xl font-black tracking-[-0.06em] text-white sm:text-7xl md:text-8xl"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: motionEase }}
        style={{ background: "linear-gradient(180deg, #fff 60%, #d69f52 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
      >
        {value}
      </motion.p>
      <motion.p
        className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/55"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.p>
    </div>
  );
};

// ─── Marquee ticker ───────────────────────────────────────────────────────────
const MarqueeTicker = ({ items }: { items: string[] }) => (
  <div className="overflow-hidden py-3">
    <motion.div
      className="flex gap-6 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80"
        >
          <Star className="h-3 w-3 text-primary/70" />
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

// ─── Pull quote graphic ────────────────────────────────────────────────────────
const PullQuoteGraphic = () => (
  <div className="relative h-full overflow-hidden rounded-[28px] border border-primary/20 bg-[#fcf9f2] p-6 shadow-[var(--soft-shadow)] sm:p-8 flex flex-col justify-center">
    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(235,122,45,0.15),transparent_50%)]" />
    <svg className="absolute right-6 top-6 h-14 w-14 text-orange-500/10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
    <div className="relative">
      <h3 className="font-serif text-2xl leading-snug tracking-tight text-[#4a2e1d] sm:text-[32px] sm:leading-[1.2]">
        "Imagine a student making <span className="text-primary font-bold">₹10 Lakhs</span> before passing out!"
      </h3>
      <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-[#7a5a45]">
        The creator economy isn't an extracurricular. It's the new mainstream career path.
      </p>
    </div>
  </div>
);

const JourneyProgressGraphic = () => (
  <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
    <div className="relative min-h-[240px] overflow-hidden rounded-[28px] border border-white/10 bg-[#090606]">
      <img src={journey3dGraphic} alt="Students creating content" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-[12px] rounded-[22px] border border-white/14" />
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Creator track
      </div>
    </div>
    <div className="rounded-[28px] border border-white/12 bg-white/[0.08] p-4 sm:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">Progress rail</p>
      <div className="mt-4 space-y-3.5">
        {journeyStages.map(({ title, description }, index) => {
          const progress = [24, 42, 62, 82, 100][index];
          return (
            <div key={title} className="grid gap-2 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] text-sm font-bold text-white">0{index + 1}</div>
              <div>
                <p className="text-base font-semibold text-white">{title}</p>
                <p className="text-sm text-white/74">{description}</p>
              </div>
              <div className="h-2.5 rounded-full bg-white/10 sm:w-28">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#f7dfb2_0%,#eb7a2d_100%)]" style={{ width: `${progress}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {journeyTracks.slice(0, 4).map((item) => (
          <span key={item} className="rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78">{item}</span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Main component ────────────────────────────────────────────────────────────
const CREATOR_LABS_TITLE = "Creator Labs — School-ready Creator Infrastructure | Naviksha AI";

const CreatorLabs = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = createFadeUp(shouldReduceMotion ?? false);
  const fadeIn = createFadeIn(shouldReduceMotion ?? false);
  const stagger = createStagger(shouldReduceMotion ?? false);
  const staggerDelayed = createStagger(shouldReduceMotion ?? false, 0.08);
  const revealViewport = { once: true, amount: 0.15 };
  const cardHover = shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.24, ease: motionEase } };

  // Per-route document title — restores original on unmount
  useEffect(() => {
    const prev = document.title;
    document.title = CREATOR_LABS_TITLE;
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground" style={creatorLabsThemeStyles}>

      {/* ── NAV ── */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0706]/88 backdrop-blur-xl">
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 md:gap-4 md:px-6 md:py-4">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-[var(--soft-shadow)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-white">CREATOR LABS</p>
              <p className="text-xs text-white/60">by Naviksha AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="sm" className="text-white/80 hover:bg-white/10 hover:text-white" asChild>
              <Link to="/"><ArrowLeft className="w-4 h-4 mr-1" />Back</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 font-semibold tracking-wide" asChild>
              <a href={CONTACT_EMAIL}>Contact Us</a>
            </Button>
          </div>
        </div>
      </nav>

      <main>
        {/* ══════════════════════════════════════════════════
            HERO — FULL EDITORIAL SPREAD
        ══════════════════════════════════════════════════ */}
        <section className="relative isolate min-h-screen overflow-hidden pb-16 pt-24 md:pt-28">
          {/* Background: Ken Burns cover photo */}
          <motion.img
            src={creatorLabsCover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={false}
            animate={shouldReduceMotion ? undefined : { scale: [1.02, 1.06, 1.02], x: [0, 6, 0], y: [0, -4, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Gradient overlays — mobile: heavy full-coverage veil transitioning to solid dark */}
          {/* Mobile: Start transparent at top, fade to heavy near bottom so image is seen but text rests on dark */}
          <div className="absolute inset-0 bg-[#0a0706]/70 lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[linear-gradient(180deg,transparent_0%,rgba(10,7,6,0.95)_40%,#0a0706_100%)] lg:hidden" />
          {/* Desktop: cinematic diagonal with right-side reveal */}
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(120deg,rgba(10,7,6,0.97)_0%,rgba(10,7,6,0.88)_42%,rgba(10,7,6,0.55)_100%)]" />
          {/* Left column scrim — all breakpoints so text column is always dark */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-[linear-gradient(90deg,rgba(6,4,3,0.95)_0%,rgba(6,4,3,0.85)_50%,transparent_100%)]" />
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-20" style={heroGridStyle} />
          {/* Ambient glows */}
          <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute right-12 bottom-20 h-48 w-48 rounded-full bg-[#d69f52]/15 blur-3xl" />

          <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

              {/* Left: headline + signals — mobile gets an explicit backdrop for worst-case images */}
              <motion.div variants={staggerDelayed} initial="hidden" animate="visible"
                className="relative rounded-[28px] px-0 py-0 lg:rounded-none"
              >
                {/* Mobile-only inner scrim — invisible on lg+ */}
                <div className="pointer-events-none absolute inset-0 -mx-3 -my-4 rounded-[28px] bg-[#0a0706]/50 backdrop-blur-[2px] lg:hidden" />
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="relative inline-flex items-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.32em] text-white/90 backdrop-blur"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                  Creator Studio for Schools
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={0.08}
                  className="relative mt-8 font-black tracking-[-0.05em] text-white leading-[0.92] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                  style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                >
                  CREATOR
                  <br />
                  <span style={{ background: "linear-gradient(135deg, #eb7a2d 0%, #d69f52 60%, #fff8e7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    LABS
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  custom={0.16}
                  className="relative mt-6 max-w-xl text-lg leading-7 text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,1)] sm:text-xl md:leading-8"
                >
                  Build creators, influencers, and entrepreneurs inside schools — with a plug-and-play studio, a guided curriculum, and visible student outcomes.
                </motion.p>

                <motion.div className="relative mt-8 flex flex-wrap gap-3" variants={stagger} custom={0.22}>
                  {["Orange economy skills", "Plug & Play Studio", "Real Portfolios"].map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      whileHover={cardHover}
                      className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} custom={0.3} className="relative mt-10 flex flex-wrap gap-3">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold tracking-wide px-8 shadow-[0_12px_40px_-10px_rgba(235,122,45,0.6)]" asChild>
                    <a href={CONTACT_EMAIL}>Partner with Creator Labs</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/8 text-white hover:bg-white/14 backdrop-blur" asChild>
                    <a href={CONTACT_PHONE}>Call Us</a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: editorial graphic + signal cards */}
              <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0.2} className="hidden lg:block">
                <div className="relative">
                  <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
                    <img src={heroEditorialGraphic} alt="Creator Labs editorial" className="w-full object-cover" />
                  </div>
                  {/* Floating stat pills */}
                  {heroSignals.map(({ value, label }, i) => (
                    <motion.div
                      key={label}
                      className="absolute rounded-[20px] border border-white/16 bg-black/55 px-4 py-3 backdrop-blur-xl text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
                      style={[
                        { top: "12%", left: "-14%" },
                        { bottom: "28%", left: "-18%" },
                        { bottom: "8%", right: "-6%" },
                      ][i]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease: motionEase }}
                    >
                      <p className="text-2xl font-black tracking-tight text-white">{value}</p>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">{label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
              animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</p>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ORANGE ECONOMY — PULL QUOTE + ILLUSTRATION
        ══════════════════════════════════════════════════ */}
        <section className="px-4 py-16 sm:py-20 md:px-6" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="The Orange Economy"
                  title="Opportunity missed out!"
                  description="Schools already sit on student attention, creativity, and community. Creator Labs turns that into future-proof skill-building."
                />
              </motion.div>

              <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
                {/* Pull quote card */}
                <motion.div variants={fadeUp} whileHover={cardHover}>
                  <PullQuoteGraphic />
                </motion.div>

                {/* Problem + Opportunity */}
                <div className="grid gap-4">
                  <motion.div
                    variants={fadeUp}
                    className="relative overflow-hidden rounded-[28px] border border-[#2f2420] bg-[#120d0b] p-5 text-white shadow-[var(--soft-shadow)]"
                  >
                    <div className="absolute inset-0 opacity-15" style={darkGridStyle} />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><School className="w-4 h-4" /></div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">The Problem</p>
                      </div>
                      <div className="space-y-3">
                        {opportunityProblem.map((item, i) => (
                          <div key={i} className="flex gap-3 rounded-[16px] border border-white/8 bg-white/[0.04] px-4 py-3">
                            <span className="text-[10px] font-bold text-primary/70 mt-0.5">0{i + 1}</span>
                            <p className="text-sm leading-6 text-white/80">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="relative overflow-hidden rounded-[28px] border border-primary/15 p-5 shadow-[var(--soft-shadow)]"
                    style={goldTextureSurfaceStyle}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">The Opportunity</p>
                    <div className="mt-4 space-y-3">
                      {opportunityWins.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                            <Check className="h-3 w-3" />
                          </div>
                          <p className="text-sm leading-6 text-foreground/85">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Illustration strip */}
              <motion.div variants={fadeUp} className="mt-5 overflow-hidden rounded-[28px] border border-white/10 shadow-[var(--soft-shadow)]">
                <img src={orangeEconomyIllustration} alt="Students creating content in a creator studio" className="w-full object-cover max-h-64 object-top" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            STUDIO CAPABILITY — BENTO GRID
        ══════════════════════════════════════════════════ */}
        <section className="px-4 py-16 sm:py-20 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="Set Up Inside Your School"
                  title="India's first Creator Lab"
                  description="Professional camera, studio lighting, mics, editing suite, and short-form publishing — installed inside the school."
                />
              </motion.div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Capability cards */}
                {capabilityGroups.map(({ title, icon: Icon, items, description }, i) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={i * 0.05}
                    whileHover={cardHover}
                    className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#120d0b] p-5 text-white shadow-[var(--soft-shadow)]"
                  >
                    <div className="absolute inset-0 opacity-10" style={darkGridStyle} />
                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold tracking-tight">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span key={item} className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">{item}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Studio preview — spans full width on last row */}
                <motion.div variants={fadeUp} whileHover={cardHover} className="relative md:col-span-2 lg:col-span-3 rounded-[28px] overflow-hidden border border-white/12 shadow-[var(--soft-shadow)] bg-[#120d0b]">
                   <img src={studio3dRender} alt="Creator Labs studio setup with dual monitors, camera, ring light, and podcast mic" className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover object-center opacity-90 transition-opacity hover:opacity-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a0706] via-[#0a0706]/40 to-transparent pointer-events-none" />
                   <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Full Installation Included</p>
                        </div>
                        <h3 className="text-2xl font-bold text-white lg:text-3xl">Professional Grade Equipment</h3>
                      </div>
                      <div className="hidden sm:block">
                        <Button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20 rounded-full px-6">Explore the inventory</Button>
                      </div>
                   </div>
                </motion.div>
              </div>

              {/* Lab install features row */}
              <motion.div variants={fadeUp} className="mt-4 rounded-[24px] border border-border/70 bg-white p-4 shadow-[var(--soft-shadow)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-4">Installed inside the lab</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
                  {labInstallFeatures.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-[16px] border border-border/70 bg-background/70 px-3 py-3 text-sm font-medium">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-4 w-4" /></div>
                      <span className="text-xs font-semibold text-foreground/80">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            STATS POSTER — FULL-BLEED DARK CANVAS
        ══════════════════════════════════════════════════ */}
        <section className="relative isolate overflow-hidden py-20 md:py-28">
          <img src={statsPosterBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(10,7,6,0.72)]" />
          <div className="absolute inset-0 opacity-20" style={darkGridStyle} />
          <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} className="text-center">
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-bold uppercase tracking-[0.36em] text-primary/80"
              >
                School Value — By the Numbers
              </motion.p>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <AnimatedStat value="200+" label="Student YouTube Channels" />
                <AnimatedStat value="10x" label="Admission Marketing Lift" />
                <AnimatedStat value="#1" label="School Differentiation" />
              </div>
              <div className="mt-12 flex justify-center">
                <div className="max-w-2xl rounded-[28px] border border-white/12 bg-white/[0.06] px-6 py-5 backdrop-blur">
                  <p className="text-lg font-semibold leading-7 text-white/85">
                    Students become your school's strongest proof of culture, ambition, and modern education.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            STUDENT JOURNEY — 5-YEAR TRACK
        ══════════════════════════════════════════════════ */}
        <section className="px-4 py-16 sm:py-20 md:px-6" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="Student Journey"
                  title="What students learn across 5 years"
                  description="A structured creator track from learning to publishing, audience growth, and real monetisation."
                />
              </motion.div>

              {/* Stage cards */}
              <motion.div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#120d0b] p-5 text-white shadow-[var(--soft-shadow)] md:p-6" variants={fadeUp}>
                <div className="grid gap-3 lg:grid-cols-5">
                  {journeyStages.map(({ title, description, icon: Icon }, index) => (
                    <motion.div
                      key={title}
                      variants={fadeUp}
                      custom={index * 0.05}
                      whileHover={cardHover}
                      className="relative rounded-[24px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur sm:p-5"
                    >
                      <div className="absolute right-4 top-4 text-5xl font-black tracking-[-0.06em] text-white/6">0{index + 1}</div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/72">{description}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="mt-5" variants={fadeUp}>
                  <JourneyProgressGraphic />
                </motion.div>

                {/* Tracks */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {journeyTracks.map((item) => (
                    <span key={item} className="rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">{item}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            HOW IT WORKS — 4-STEP ROLLOUT
        ══════════════════════════════════════════════════ */}
        <section className="px-4 py-16 sm:py-20 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="Simple 4-Step Rollout"
                  title="How it works"
                  description="Creator Labs stays low-lift for the school while producing visible student and brand outcomes."
                />
              </motion.div>

              <motion.div className="mt-10 overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[var(--soft-shadow)]" variants={fadeUp}>
                <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden border-b border-border/70">
                  <img src={creatorEquipment3d} alt="Smartphone on a tripod with a ring light in a dark studio" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-[12px] border border-white/20 bg-black/40 px-4 py-2 backdrop-blur">
                     <p className="text-xs font-bold uppercase tracking-widest text-white/90">Zero friction</p>
                  </div>
                </div>
                <div className="grid gap-px bg-border/60 md:grid-cols-2 xl:grid-cols-4">
                  {rolloutSteps.map(({ title, description }, index) => (
                    <div key={title} className="relative bg-background/95 p-5 md:p-6">
                      <p className="absolute right-5 top-5 text-6xl font-black tracking-[-0.08em] text-primary/8">0{index + 1}</p>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-base font-bold">{index + 1}</div>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground sm:text-xl">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border/70 px-5 py-4 md:px-6" style={goldTextureSurfaceStyle}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Low-lift for the school</p>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-foreground/80">
                    School input stays minimal. Creator Labs handles setup, delivery, and ongoing support so your staff can stay focused on teaching.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CERTIFICATE — EDITORIAL SPREAD
        ══════════════════════════════════════════════════ */}
        <section className="px-4 py-16 sm:py-20 md:px-6" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
              className="overflow-hidden rounded-[34px] border border-[#e6d3b4] bg-white shadow-[var(--soft-shadow)]"
            >
              <div className="grid lg:grid-cols-2">
                {/* Certificate image with tilt */}
                <motion.div className="relative p-5 sm:p-6 lg:p-8" style={goldTextureSurfaceStyle} variants={fadeUp}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.74),transparent_40%)]" />
                  <motion.div
                    className="relative rounded-[28px] border border-[#d9c79c]/80 bg-[#fcfaf5] p-3 shadow-[0_36px_80px_-40px_rgba(87,54,9,0.45)]"
                    whileHover={shouldReduceMotion ? undefined : { rotate: 0, transition: { duration: 0.4 } }}
                    style={{ rotate: -1.5 }}
                  >
                    <img src={creatorLabsCertificate} alt="Creator Labs Certificate of Completion" className="w-full rounded-[24px] object-cover" />
                  </motion.div>
                  <div className="relative mt-4 flex items-start gap-3 rounded-[22px] border border-[#d9c79c]/70 bg-white/74 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d3b77d]/80 bg-[#efe1bc] text-[#8f6a23]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-sm leading-6 text-foreground">
                      Co-certified by Naviksha, WLDD, and LiT School — with Gauri Khan's signature on the credential.
                    </p>
                  </div>
                </motion.div>

                {/* Certificate details */}
                <motion.div className="relative bg-white p-5 sm:p-6 md:p-8" variants={fadeUp}>
                  <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[#f3e4c0] via-primary/25 to-transparent lg:block" />
                  <Badge variant="outline" className={sectionHeaderBadgeClassName}>Recognised. Shareable. Prestigious.</Badge>
                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-foreground sm:text-4xl">A certificate that stands out</h2>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    The program ends with a credential students carry into internships, college applications, creator portfolios, and public profiles.
                  </p>
                  <div className="mt-6 space-y-3">
                    {certificateHighlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[20px] border border-border/70 bg-background/75 p-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white"><Check className="h-4 w-4" /></div>
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["LinkedIn", "Instagram", "Portfolios", "College applications"].map((item) => (
                      <span key={item} className="rounded-full border border-primary/12 bg-accent/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-foreground">{item}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TEAM — FOUNDER + NETWORK
        ══════════════════════════════════════════════════ */}
        <section className="px-4 py-16 sm:py-20 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="The Team Behind Creator Labs"
                  title="Built by educators who know scale"
                  description="Creator Labs is led by Vikrant Shome and an educator network spanning media, technology, and education."
                />
              </motion.div>

              <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                {/* Founder card */}
                <motion.div className="overflow-hidden rounded-[34px] border border-border/70 bg-white shadow-[var(--soft-shadow)]" variants={fadeUp}>
                  <div className="grid md:grid-cols-[0.75fr_1.25fr]">
                    <div className="relative min-h-[320px] bg-[#080506]">
                      <img src={vikrantShomeImage} alt="Vikrant Shome — Founder" className="absolute inset-0 h-full w-full object-cover object-top" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.7))]" />
                      <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-white/12 bg-black/38 p-4 text-white backdrop-blur">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/65">Founder</p>
                        <p className="mt-1.5 text-xl font-black tracking-tight">Vikrant Shome</p>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white"><Users2 className="w-5 h-5" /></div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">Operator credibility</p>
                          <h3 className="mt-1 text-2xl font-black tracking-tight text-foreground">Knows scale.</h3>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm leading-7 text-muted-foreground">
                        {founderHighlights.map((item) => (
                          <p key={item} className="flex gap-2"><Zap className="h-4 w-4 text-primary shrink-0 mt-1" />{item}</p>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-5">
                        {founderMetrics.map(({ value, label }) => (
                          <div key={label} className="rounded-[20px] border border-border/70 bg-background/75 p-4">
                            <p className="text-2xl font-black tracking-tight text-primary">{value}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Educator network */}
                <motion.div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#120d0b] p-5 text-white shadow-[var(--soft-shadow)] md:p-6" variants={fadeUp}>
                  <div className="absolute inset-0 opacity-10 rounded-[32px]" style={darkGridStyle} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Educator Network</p>
                  <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white leading-tight">
                    Operators from education, media & technology.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    20+ educators from respected organisations across India and globally.
                  </p>
                  <div className="mt-6 overflow-hidden">
                    <MarqueeTicker items={educatorNetwork} />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {educatorNetwork.slice(0, 6).map((name) => (
                      <motion.div
                        key={name}
                        whileHover={cardHover}
                        className="rounded-[18px] border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white/85"
                      >
                        {name}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CTA FOOTER BANNER
        ══════════════════════════════════════════════════ */}
        <section className="relative isolate overflow-hidden px-4 py-20 md:px-6 md:py-28">
          <img src={statsPosterBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(10,7,6,0.80)]" />
          <div className="absolute inset-0 opacity-15" style={darkGridStyle} />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="container relative mx-auto max-w-4xl text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={stagger}>
              <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.36em] text-primary/80">
                Ready to partner?
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={0.08}
                className="mt-6 font-black tracking-[-0.04em] text-white leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Bring Creator Labs
                <br />
                <span style={{ background: "linear-gradient(135deg, #eb7a2d 0%, #d69f52 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  to your school.
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.16} className="mt-6 text-lg text-white/65 max-w-xl mx-auto leading-7">
                Join the schools building India's next generation of creators, influencers, and digital entrepreneurs.
              </motion.p>
              <motion.div variants={fadeUp} custom={0.24} className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold tracking-wide px-10 shadow-[0_12px_40px_-10px_rgba(235,122,45,0.55)]" asChild>
                  <a href={CONTACT_EMAIL}>Email Naviksha</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/8 text-white hover:bg-white/14 backdrop-blur" asChild>
                  <a href={CONTACT_PHONE}>Call +91-7044685101</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#0a0706] px-4 py-7 text-white md:px-6 md:py-8">
        <div className="container flex flex-col gap-4 mx-auto max-w-7xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-bold tracking-tight text-white">Creator Labs by Naviksha AI</p>
            <p className="mt-1 text-xs text-white/55">School-ready creator infrastructure, curriculum, and visible student outcomes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="text-white/80 border-white/15 bg-white/5 hover:bg-white/10 hover:text-white" asChild>
              <a href={CONTACT_EMAIL}>Email Naviksha</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-white/70 hover:bg-white/10 hover:text-white" asChild>
              <a href={CONTACT_PHONE}>Call +91-7044685101</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorLabs;
