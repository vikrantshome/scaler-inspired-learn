import { type CSSProperties } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
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
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import creatorLabsCertificate from "@/assets/creator-labs-certificate.jpg";
import creatorLabsCover from "@/assets/creator-labs-cover.jpg";
import creatorLabsGoldTexture from "@/assets/creator-labs-gold-texture.jpg";
import vikrantShomeImage from "@/assets/vikrant-shome.jpg";

const CONTACT_EMAIL = "mailto:ainaviksha@gmail.com";
const CONTACT_PHONE = "tel:+917044685101";

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
  "--section-surface":
    "linear-gradient(180deg, hsl(37 38% 97%) 0%, hsl(33 34% 94%) 100%)",
  "--soft-shadow": "0 26px 70px -36px hsl(18 44% 18% / 0.32)",
} as CSSProperties;

const heroSignals = [
  {
    value: "200+",
    label: "Student-led channels",
    description: "Visible creator outcomes that a school can point to publicly.",
  },
  {
    value: "5-year",
    label: "Creator track",
    description: "A structured journey from fundamentals to monetisation.",
  },
  {
    value: "Minimal",
    label: "School-side effort",
    description: "Creator Labs handles setup, delivery, and ongoing support.",
  },
];

const opportunityProblem = [
  "Students consume content daily but never learn to create it.",
  "Schools miss a chance to build visible student outcomes.",
  "Most programmes deliver no real parent-facing value.",
];

const opportunityWins = [
  "Students learn real skills that AI cannot take away.",
  "Schools get brand visibility through student content.",
  "Imagine a student making INR 10 lakhs before passing out.",
];

const capabilityGroups = [
  {
    title: "Filming stack",
    description: "Professional camera setup and studio-grade lighting for interviews, demos, and shoots.",
    icon: Camera,
    items: ["Professional camera setup", "Studio-grade lighting"],
  },
  {
    title: "Audio booth",
    description: "A microphone-ready setup for podcasts, narration, voiceovers, and creator storytelling.",
    icon: Mic,
    items: ["Podcast and voiceover ready", "Creator storytelling"],
  },
  {
    title: "Edit suite",
    description: "Students learn to cut, polish, and package content inside a dedicated post-production workflow.",
    icon: Film,
    items: ["Editing station", "Content packaging"],
  },
  {
    title: "Publish engine",
    description: "Short-form creation and platform-native publishing with a plug-and-play model for schools.",
    icon: Video,
    items: ["Short-form content creation", "Plug-and-play for schools"],
  },
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
  {
    title: "Learn",
    description: "Content creation fundamentals",
    icon: GraduationCap,
  },
  {
    title: "Create",
    description: "Film, edit, and produce",
    icon: Clapperboard,
  },
  {
    title: "Publish",
    description: "Go live on real platforms",
    icon: PlayCircle,
  },
  {
    title: "Grow",
    description: "Build a real audience",
    icon: TrendingUp,
  },
  {
    title: "Monetise",
    description: "Earn from their content",
    icon: Rocket,
  },
];

const journeyTracks = [
  "Content Creation",
  "Influencer Basics",
  "Personal Branding",
  "Brand Collaboration",
  "Storytelling",
  "Monetisation",
  "Audience Building",
  "Creator Mindset",
];

const rolloutSteps = [
  {
    title: "Studio setup",
    description: "Creator Labs installs the full equipment setup on your campus.",
  },
  {
    title: "Course launch",
    description: "Students get a structured digital curriculum delivered by Creator Labs educators.",
  },
  {
    title: "Students create",
    description: "Guided content production, channel building, and publishing begin inside the lab.",
  },
  {
    title: "Outcomes delivered",
    description: "The school receives portfolios, live channels, school-brand content, and visible results.",
  },
];

const rolloutRibbonSteps = ["Setup", "Launch", "Create", "Outcomes"];

const certificateHighlights = [
  "Co-certified by WLDD and LiT School, with celebrity-backed credibility including Gauri Khan.",
  "Shareable across LinkedIn, Instagram, and student portfolios.",
  "Strengthens internship applications, college admissions, and brand collaboration opportunities.",
];

const schoolValueMetrics = [
  {
    value: "200+",
    title: "YouTube Channels",
    description: "Real UGC content, live and growing.",
  },
  {
    value: "10x",
    title: "Admission Marketing",
    description: "Students become your strongest proof of school culture and outcomes.",
  },
  {
    value: "#1",
    title: "School Differentiation",
    description: "A first-of-its-kind visible outcome for your institution.",
  },
];

const schoolValueBenefits = [
  {
    title: "Better Student Engagement",
    description: "Hands-on, purpose-driven learning that feels modern and meaningful.",
  },
  {
    title: "Stronger Parent Perception",
    description: "Real skills, real channels, and visible earning potential build trust with families.",
  },
  {
    title: "Institutional Brand Lift",
    description: "Your school becomes known for producing creators, not just graduates.",
  },
];

const founderMetrics = [
  {
    value: "10",
    label: "Years in education",
  },
  {
    value: "700+",
    label: "Schools reached",
  },
  {
    value: "100K+",
    label: "Students counselled",
  },
  {
    value: "20+",
    label: "Expert educators",
  },
];

const founderHighlights = [
  "Serial founder, NIT and IIM alumnus.",
  "Built programs at Scaler, Physics Wallah, Vedantu, and LiT.",
  "Personally counselled more than 100,000 students across India.",
];

const educatorNetwork = [
  "Scaler Academy",
  "LiT School",
  "WLDD",
  "Tymes Marketing",
  "Havas Media",
  "Red Chillies Ent.",
  "OpenAI - ChatGPT",
  "Google",
  "Microsoft",
  "Emergent",
];

const sectionHeaderBadgeClassName =
  "mb-2.5 border-primary/20 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:mb-3.5 sm:px-4 sm:text-[11px]";

const heroGridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "34px 34px",
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

const createFadeUp = (shouldReduceMotion: boolean): Variants => ({
  hidden: {
    opacity: shouldReduceMotion ? 1 : 0,
    y: shouldReduceMotion ? 0 : 22,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          duration: 0.55,
          delay,
          ease: motionEase,
        },
  }),
});

const createStagger = (shouldReduceMotion: boolean, delayChildren = 0): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          staggerChildren: 0.09,
          delayChildren,
        },
  },
});

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <Badge variant="outline" className={sectionHeaderBadgeClassName}>
      {eyebrow}
    </Badge>
    <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">{title}</h2>
    {description ? (
      <p className="mt-3 text-base leading-7 text-muted-foreground md:mt-4 md:text-lg md:leading-8">
        {description}
      </p>
    ) : null}
  </div>
);

const OpportunityLoopGraphic = () => (
  <div className="grid gap-3 md:grid-cols-[1.06fr_0.94fr]">
    <div className="rounded-[24px] border border-[#ead4ae]/85 bg-white/82 p-4 shadow-[0_24px_50px_-38px_rgba(87,54,9,0.28)] backdrop-blur">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
        Creator loop
      </p>
      <div className="mt-4 flex h-20 items-end gap-1.5 sm:h-24">
        {[26, 42, 34, 58, 46, 72, 60, 82].map((height, index) => (
          <div
            key={`${height}-${index}`}
            className="flex-1 rounded-t-full bg-[linear-gradient(180deg,#f7dfb2_0%,#eb7a2d_100%)]"
            style={{ height }}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Learn", "Create", "Publish", "Grow"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-primary/12 bg-[#fcf6e8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/85"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="rounded-[24px] border border-white/10 bg-[#140f0d] p-4 text-white shadow-[0_24px_50px_-38px_rgba(0,0,0,0.35)]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72">
        Visible output
      </p>
      <div className="mt-4 grid gap-3">
        {[
          { icon: PlayCircle, label: "Student channels" },
          { icon: Clapperboard, label: "Published content" },
          { icon: TrendingUp, label: "School visibility" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-[18px] border border-white/12 bg-white/[0.07] px-3.5 py-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/18 text-primary-foreground">
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium text-white/88">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StudioPreviewGraphic = () => (
  <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#090606] shadow-[var(--soft-shadow)] sm:min-h-[300px]">
    <img
      src={creatorLabsCover}
      alt="Creator Labs studio preview"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.52)_44%,rgba(0,0,0,0.84)_100%)]" />
    <div className="absolute inset-[12px] rounded-[22px] border border-white/16" />

    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      Live lab preview
    </div>
    <div className="absolute right-4 top-4 rounded-full border border-white/14 bg-black/24 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur">
      REC
    </div>

    <div className="absolute bottom-4 left-4 right-4 grid gap-2.5">
      <div className="rounded-[20px] border border-white/12 bg-black/34 p-4 text-white backdrop-blur">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">Outcome</p>
        <p className="mt-2 text-base font-semibold leading-7 text-white/92">
          Plug-and-play creator studio, inside your campus.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {["Shoot", "Record", "Publish"].map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/16 bg-black/52 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fff0cf] shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] backdrop-blur"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OutcomesProofGraphic = () => (
  <div className="rounded-[24px] border border-[#e6d3b4]/90 bg-white/82 p-4 shadow-[0_24px_50px_-36px_rgba(87,54,9,0.34)] backdrop-blur">
    <div className="flex items-center justify-between gap-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">Proof wall</p>
      <span className="rounded-full border border-primary/12 bg-[#fcf6e8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/80">
        Admissions ready
      </span>
    </div>

    <div className="mt-4 grid grid-cols-3 gap-2">
      {[
        { label: "Channels", value: "200+" },
        { label: "Visibility", value: "10x" },
        { label: "Differentiation", value: "#1" },
      ].map(({ label, value }) => (
        <div key={label} className="rounded-[16px] border border-[#ead7b4] bg-[#fffaf1] px-3 py-3 text-center">
          <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">{value}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {label}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-4 rounded-[20px] border border-white/10 bg-[#140f0d] p-4 text-white">
      <div className="flex h-20 items-end gap-2 sm:h-24">
        {[24, 34, 46, 40, 56, 64, 76].map((height, index) => (
          <div key={`${height}-${index}`} className="flex-1 rounded-t-2xl bg-[linear-gradient(180deg,#f7dfb2_0%,#eb7a2d_100%)]" style={{ height }} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
        <span>Portfolio</span>
        <span>Channels</span>
        <span>Parent trust</span>
      </div>
    </div>
  </div>
);

const JourneyProgressGraphic = () => (
  <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
    <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#090606] shadow-[var(--soft-shadow)]">
      <img
        src={creatorLabsCover}
        alt="Creator Labs student journey preview"
        className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.5)_38%,rgba(0,0,0,0.84)_100%)]" />
      <div className="absolute inset-[12px] rounded-[22px] border border-white/14" />

      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        Creator track
      </div>

      <div className="absolute bottom-4 left-4 right-4 grid gap-2.5">
        <div className="rounded-[20px] border border-white/12 bg-black/36 p-4 text-white backdrop-blur">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/68">
            Journey focus
          </p>
          <p className="mt-2 text-base font-semibold leading-7 text-white/92">
            From first video to audience, portfolio, and monetisation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["Learn", "Publish", "Monetise"].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/16 bg-black/46 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fff0cf] backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="rounded-[28px] border border-white/12 bg-white/[0.08] p-4 sm:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
        Progress rail
      </p>
      <div className="mt-4 space-y-3.5">
        {journeyStages.map(({ title, description }, index) => {
          const progress = [24, 42, 62, 82, 100][index];

          return (
            <div key={title} className="grid gap-2 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] text-sm font-bold text-white">
                0{index + 1}
              </div>
              <div>
                <p className="text-base font-semibold text-white">{title}</p>
                <p className="text-sm text-white/74">{description}</p>
              </div>
              <div className="h-2.5 rounded-full bg-white/10 sm:w-28">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#f7dfb2_0%,#eb7a2d_100%)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {journeyTracks.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SchoolVisibilityGraphic = () => (
  <div className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-white/10 bg-[#090606] shadow-[var(--soft-shadow)] sm:min-h-[420px]">
    <img
      src={creatorLabsCover}
      alt="Creator Labs school visibility preview"
      className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.42)_35%,rgba(0,0,0,0.84)_100%)]" />
    <div className="absolute inset-[12px] rounded-[22px] border border-white/14" />

    <div className="relative z-10 flex min-h-[380px] flex-col justify-between p-4 sm:min-h-[420px] sm:p-5">
      <div className="rounded-[18px] border border-white/12 bg-black/32 p-3 text-white backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/76">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Visibility proof
          </div>
          <div className="inline-flex items-center rounded-full border border-white/14 bg-black/24 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#fff0cf]">
            Channels live
          </div>
        </div>
        <p className="mt-2 text-sm font-medium leading-6 text-white/84">
          Student work becomes public-facing proof for parents, admissions, and school branding.
        </p>
      </div>

      <div className="grid gap-2.5">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { label: "School reels", icon: Clapperboard },
            { label: "Student portfolios", icon: Users2 },
            { label: "Admissions proof", icon: School },
            { label: "Brand lift", icon: TrendingUp },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-[16px] border border-white/12 bg-black/38 px-3 py-3 backdrop-blur"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white/10 text-[#fff0cf]">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fff0cf] sm:text-[11px] sm:tracking-[0.18em]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[20px] border border-white/12 bg-black/40 p-4 text-white backdrop-blur">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/68">
            Public-facing outcome
          </p>
          <p className="mt-2 text-base font-semibold leading-7 text-white/92">
            Students become visible proof of school culture and outcomes.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const RolloutProcessGraphic = () => (
  <div className="rounded-[24px] border border-border/70 bg-secondary/55 p-4 sm:p-5">
    <div className="grid gap-3 sm:grid-cols-4">
      {rolloutRibbonSteps.map((step, index) => (
        <div key={step} className="relative rounded-[18px] border border-white/70 bg-white/82 px-3 py-3 text-center shadow-[0_12px_28px_-24px_rgba(0,0,0,0.22)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            0{index + 1}
          </p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">{step}</p>
          {index < rolloutRibbonSteps.length - 1 ? (
            <ArrowRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-primary/55 sm:block" />
          ) : null}
        </div>
      ))}
    </div>
  </div>
);

const CreatorLabs = () => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = createFadeUp(shouldReduceMotion);
  const stagger = createStagger(shouldReduceMotion);
  const staggerDelayed = createStagger(shouldReduceMotion, 0.08);
  const revealViewport = { once: true, amount: 0.18 };
  const chipHover = shouldReduceMotion
    ? undefined
    : {
        y: -3,
        scale: 1.02,
        transition: { duration: 0.22, ease: motionEase },
      };
  const cardHover = shouldReduceMotion
    ? undefined
    : {
        y: -5,
        transition: { duration: 0.24, ease: motionEase },
      };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground" style={creatorLabsThemeStyles}>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#100c0c]/82 backdrop-blur-xl">
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 md:gap-4 md:px-6 md:py-4">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--soft-shadow)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white">CREATOR LABS</p>
              <p className="text-sm text-white/78">by Naviksha AI</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Naviksha
              </Link>
            </Button>
            <Button size="sm" className="hidden bg-primary hover:bg-primary/90 md:inline-flex" asChild>
              <a href={CONTACT_EMAIL}>Contact Us</a>
            </Button>
          </div>
        </div>
      </nav>

      <main>
        
        <section className="relative isolate overflow-hidden pb-12 pt-28 sm:pb-14 sm:pt-32 md:px-6 md:pb-20 md:pt-36">
          <motion.img
            src={creatorLabsCover}
            alt=""
            className="absolute inset-0 object-cover object-center w-full h-full"
            initial={false}
            animate={
              shouldReduceMotion
                ? undefined
                : { scale: [1.01, 1.04, 1.01], x: [0, 8, 0], y: [0, -6, 0] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 18, repeat: Infinity, ease: "easeInOut" }
            }
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(12,10,11,0.96)_10%,rgba(12,10,11,0.84)_46%,rgba(12,10,11,0.58)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(8,6,6,0.78)_0%,rgba(8,6,6,0.58)_38%,rgba(8,6,6,0.18)_72%,transparent_100%)] lg:w-[58%]" />
          <div className="absolute inset-0 opacity-20" style={heroGridStyle} />
          <div className="absolute w-40 h-40 rounded-full -left-16 top-20 bg-primary/30 blur-3xl" />
          <motion.div
            className="absolute hidden right-0 w-56 h-56 rounded-full top-12 bg-white/5 blur-3xl lg:block"
            initial={false}
            animate={
              shouldReduceMotion
                ? undefined
                : { x: [0, -14, 0], y: [0, 10, 0], scale: [1, 1.08, 1] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 14, repeat: Infinity, ease: "easeInOut" }
            }
          />

          <div className="container relative mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <motion.div
                className="max-w-4xl rounded-[32px] border border-white/10 bg-black/18 p-5 shadow-[0_28px_80px_-44px_rgba(0,0,0,0.9)] backdrop-blur-[3px] sm:p-6 md:p-8"
                variants={staggerDelayed}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur"
                  variants={fadeUp}
                  custom={0.02}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                  Creator studio for schools
                </motion.div>

                <motion.h1
                  className="mt-6 text-4xl font-bold tracking-[-0.06em] text-white [text-shadow:0_6px_24px_rgba(0,0,0,0.55)] sm:text-5xl md:text-7xl lg:text-[5.5rem]"
                  variants={fadeUp}
                  custom={0.1}
                >
                  Creator Labs
                </motion.h1>

                <motion.p
                  className="mt-5 max-w-3xl opacity-80 rounded-[24px] border border-white/8 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),rgba(0,0,0,0.18))] px-4 py-4 text-lg leading-7 text-[#fbf3e4] shadow-[0_18px_40px_-32px_rgba(0,0,0,0.72)] backdrop-blur-[2px] sm:px-5 sm:py-5 sm:text-xl md:mt-6 md:text-2xl md:leading-8"
                  variants={fadeUp}
                  custom={0.16}
                >
                  Build creators, influencers, and entrepreneurs inside schools with a plug-and-play
                  studio, a guided curriculum, and visible student outcomes.
                </motion.p>

                <motion.div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3" variants={stagger} custom={0.22}>
                  {["Orange economy skills", "5-year creator journey", "Minimal school effort"].map((item) => (
                    <motion.div
                      key={item}
                      className="rounded-full border border-white/18 bg-white/16 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] backdrop-blur sm:px-4 sm:py-2 sm:text-sm"
                      variants={fadeUp}
                      whileHover={chipHover}
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full max-w-xl justify-self-end rounded-[32px] border border-white/16 bg-black/48 p-5 text-white shadow-[0_30px_90px_-40px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-6"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.26}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Studio mode
                  </div>
                  <div className="rounded-full border border-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                    REC live
                  </div>
                </div>

                <motion.div className="grid gap-3 mt-6" variants={stagger}>
                  {heroSignals.map(({ value, label, description }) => (
                    <motion.div
                      key={label}
                      className="grid gap-2 rounded-[24px] border border-white/12 bg-white/[0.1] p-4 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-4"
                      variants={fadeUp}
                    >
                      <p className="text-3xl font-bold tracking-tight text-white">{value}</p>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                          {label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/84">{description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 rounded-[26px] border border-primary/20 bg-primary/10 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">The shift</p>
                  <p className="mt-3 text-base leading-7 text-white/86">
                    From passive content consumption to school-visible creator portfolios, live channels,
                    and modern student ambition.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="The Orange Economy"
                  title="Opportunity missed out!"
                  description="Schools already sit on student attention, creativity, and community. Creator Labs turns that into future-proof skill-building and parent-visible outcomes."
                />
              </motion.div>

              <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
              <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[32px] border border-[#2f2420] bg-[#120d0b] p-4 text-white shadow-[var(--soft-shadow)] sm:p-5 md:p-6">
                <div className="absolute inset-0 opacity-20" style={darkGridStyle} />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-2xl bg-white/10">
                      <School className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                        The problem
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight">Consumption without creation</h3>
                    </div>
                  </div>

                  <motion.div className="mt-5 space-y-4.5" variants={stagger}>
                    {opportunityProblem.map((item, index) => (
                      <motion.div key={item} className="pl-4 border-l border-white/12" variants={fadeUp}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/56">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-lg leading-8 text-white/92">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-[32px] border border-primary/15 p-4 shadow-[var(--soft-shadow)] sm:p-5 md:p-6"
                style={goldTextureSurfaceStyle}
                variants={fadeUp}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_38%)]" />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                    The opportunity
                  </p>
                  <h3 className="mt-3 max-w-3xl text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
                    Skills that stay relevant
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-foreground/80 md:text-lg md:leading-8">
                    Creator Labs turns daily attention into real-world production, publishing, and
                    school-visible proof that students are building future-fit capabilities.
                  </p>

                  <motion.div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4" variants={stagger}>
                    {opportunityWins.map((item) => (
                      <motion.div
                        key={item}
                        className="rounded-[24px] border border-[#ead4ae]/85 bg-white/80 p-4 backdrop-blur sm:p-5"
                        variants={fadeUp}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                          Why it matters
                        </p>
                        <p className="mt-3 text-lg font-semibold leading-8 text-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-5 md:mt-6">
                    <OpportunityLoopGraphic />
                  </div>
                </div>
              </motion.div>
            </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="Set Up Inside Your School"
                  title="India's first Creator Lab"
                  description="Professional camera setup, studio-grade lighting, microphones, editing, and short-form publishing - installed inside the school."
                />
              </motion.div>

            <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 lg:grid-cols-[0.98fr_1.02fr] lg:gap-6">
              <motion.div
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#15100f] p-4 text-white shadow-[var(--soft-shadow)] sm:p-5"
                variants={fadeUp}
              >
                <div className="absolute inset-0 opacity-20" style={darkGridStyle} />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                      Studio capability board
                    </p>
                    <div className="rounded-full border border-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      On campus
                    </div>
                  </div>

                  <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
                    {capabilityGroups.map(({ title, icon: Icon, items }) => (
                      <motion.div
                        key={title}
                        className="rounded-[24px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur"
                        variants={fadeUp}
                        whileHover={cardHover}
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/18 text-primary-foreground">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">{title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/82"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="grid gap-3 sm:grid-cols-2" variants={stagger}>
                <motion.div className="sm:col-span-2" variants={fadeUp} whileHover={cardHover}>
                  <StudioPreviewGraphic />
                </motion.div>

                <motion.div
                  className="rounded-[28px] border border-primary/15 p-4 shadow-[var(--soft-shadow)] sm:p-5"
                  style={goldTextureSurfaceStyle}
                  variants={fadeUp}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                    Plug-and-play setup
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-[-0.04em] text-foreground sm:text-2xl">
                    The school provides the space. Creator Labs sets up the lab.
                  </h3>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {["Space", "Studio setup", "Course launch", "Support"].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-primary/12 bg-white/78 px-4 py-3 text-sm font-semibold text-foreground"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                          0{index + 1}
                        </p>
                        <p className="mt-2">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="rounded-[28px] border border-border/70 bg-white p-4 shadow-[var(--soft-shadow)] sm:p-5" variants={fadeUp}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                    Installed inside the lab
                  </p>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {labInstallFeatures.map(({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-[18px] border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-secondary text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="Student Journey"
                  title="What students learn and do across 5 years"
                  description="A structured creator track from learning content creation to publishing, growth, and monetisation."
                />
              </motion.div>

            <motion.div className="mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#120d0b] p-4 text-white shadow-[var(--soft-shadow)] sm:p-5 md:mt-8 md:p-6" variants={fadeUp}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                  5-year creator journey
                </p>
                <p className="text-sm text-white/74">
                  From foundational learning to audience growth and monetisation.
                </p>
              </div>

              <div className="relative mt-6">
                <div className="absolute hidden h-px left-6 right-6 top-6 bg-white/15 lg:block" />
                <motion.div className="grid gap-3 lg:grid-cols-5" variants={stagger}>
                  {journeyStages.map(({ title, description, icon: Icon }, index) => (
                    <motion.div
                      key={title}
                      className="relative rounded-[24px] border border-white/12 bg-white/[0.08] p-4 backdrop-blur sm:p-5"
                      variants={fadeUp}
                      whileHover={cardHover}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/52">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-white sm:text-xl">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/80">{description}</p>
                      {index < journeyStages.length - 1 ? (
                        <ArrowRight className="absolute hidden w-5 h-5 -right-3 top-10 text-primary/60 lg:block" />
                      ) : null}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div className="mt-6" variants={fadeUp}>
                <JourneyProgressGraphic />
              </motion.div>
            </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="Simple 4-Step Rollout"
                  title="How it works"
                  description="Creator Labs is structured to stay low-lift for the school while still producing visible student and brand outcomes."
                />
              </motion.div>

            <motion.div className="mt-6 overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[var(--soft-shadow)] md:mt-8" variants={fadeUp}>
              <div className="border-b border-border/70 px-4 py-4 sm:px-5">
                <RolloutProcessGraphic />
              </div>
              <div className="grid gap-px bg-border/60 md:grid-cols-2 xl:grid-cols-4">
                <motion.div className="contents" variants={stagger}>
                {rolloutSteps.map(({ title, description }, index) => (
                  <motion.div key={title} className="relative bg-background/95 p-4 sm:p-5 md:p-6" variants={fadeUp}>
                    <p className="absolute right-5 top-5 text-6xl font-bold tracking-[-0.08em] text-primary/10">
                      0{index + 1}
                    </p>
                    <div className="relative">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center justify-center w-12 h-12 text-base font-bold rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        {index < rolloutSteps.length - 1 ? (
                          <ArrowRight className="w-5 h-5 text-primary/60" />
                        ) : null}
                      </div>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground sm:text-xl">{title}</h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">{description}</p>
                    </div>
                  </motion.div>
                ))}
                </motion.div>
              </div>

              <motion.div className="border-t border-border/70 px-4 py-4 sm:px-5 md:px-6" style={goldTextureSurfaceStyle} variants={fadeUp}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Low-lift for the school
                </p>
                <p className="max-w-4xl mt-3 text-base leading-7 text-foreground">
                  School input stays minimal. Creator Labs handles setup, delivery, and ongoing
                  support so your staff can stay focused on teaching and school operations.
                </p>
              </motion.div>
            </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
              className="overflow-hidden rounded-[34px] border border-[#e6d3b4] bg-white shadow-[var(--soft-shadow)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
                <motion.div className="relative p-4 sm:p-5 lg:p-6" style={goldTextureSurfaceStyle} variants={fadeUp}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.74),transparent_40%)]" />
                  <div className="relative rounded-[28px] border border-[#d9c79c]/80 bg-[#fcfaf5] p-3 shadow-[0_36px_80px_-40px_rgba(87,54,9,0.45)] sm:p-4">
                    <img
                      src={creatorLabsCertificate}
                      alt="Creator Labs certificate of completion"
                      className="w-full rounded-[26px] object-cover"
                    />
                  </div>

                  <div className="relative mt-4 flex items-start gap-3 rounded-[24px] border border-[#d9c79c]/70 bg-white/74 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d3b77d]/80 bg-[#efe1bc] text-[#8f6a23]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <p className="text-sm leading-6 text-foreground">
                      Co-certified by Naviksha, WLDD, and LiT School, with Gauri Khan signature
                      presence on the credential.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="relative bg-white p-4 sm:p-5 md:p-6 lg:p-8" variants={fadeUp}>
                  <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[#f3e4c0] via-primary/25 to-transparent lg:block" />

                  <Badge variant="outline" className={sectionHeaderBadgeClassName}>
                    Recognised. Shareable. Prestigious.
                  </Badge>

                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:mt-5 md:text-5xl">
                    A certificate that stands out
                  </h2>

                  <p className="mt-4 text-base leading-7 text-muted-foreground md:mt-5 md:text-lg md:leading-8">
                    The program ends with a credential students can carry into internships, college
                    applications, creator portfolios, and public profiles.
                  </p>

                  <motion.div className="mt-6 space-y-3 md:space-y-3.5" variants={stagger}>
                    {certificateHighlights.map((item) => (
                      <motion.div
                        key={item}
                        className="flex items-start gap-4 rounded-[24px] border border-border/70 bg-background/75 p-4 sm:p-5"
                        variants={fadeUp}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-primary text-primary-foreground">
                          <Check className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-base leading-7 text-muted-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {["LinkedIn", "Instagram", "Portfolios", "College applications"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/12 bg-accent/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="School Value"
                  title="Imagine these benefits for your school"
                  description="Public-facing creator outcomes that students, parents, and admissions teams can all see."
                />
              </motion.div>

            <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
              <motion.div className="rounded-[32px] border border-white/10 bg-[#120d0b] p-4 text-white shadow-[var(--soft-shadow)] sm:p-5 md:p-6" variants={fadeUp}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                    Outcome board
                  </p>
                  <div className="rounded-full border border-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                    Public proof
                  </div>
                </div>

                <motion.div className="mt-5 space-y-4" variants={stagger}>
                  {schoolValueMetrics.map(({ value, title, description }) => (
                    <motion.div
                      key={title}
                      className="pb-5 border-b border-white/10 last:border-b-0 last:pb-0"
                      variants={fadeUp}
                    >
                      <div className="flex items-end justify-between gap-4">
                        <p className="text-4xl font-bold tracking-[-0.05em] text-primary sm:text-5xl">
                          {value}
                        </p>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
                          Signal
                        </p>
                      </div>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/82">{description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div className="grid gap-3 md:grid-cols-2 md:gap-4" variants={stagger}>
                <motion.div
                  className="md:col-span-2 rounded-[28px] border border-primary/15 p-4 shadow-[var(--soft-shadow)] sm:p-5"
                  style={goldTextureSurfaceStyle}
                  variants={fadeUp}
                >
                  <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                        Most visible shift
                      </p>
                      <p className="mt-3 text-2xl font-bold tracking-[-0.04em] text-foreground sm:text-3xl">
                        Students become your strongest proof of school culture and outcomes.
                      </p>
                    </div>
                    <OutcomesProofGraphic />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} whileHover={cardHover}>
                  <SchoolVisibilityGraphic />
                </motion.div>

                <motion.div className="rounded-[28px] border border-white/10 bg-[#120d0b] p-4 text-white shadow-[var(--soft-shadow)] sm:p-5" variants={fadeUp}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                    Institutional outcomes
                  </p>
                  <div className="mt-4 space-y-3">
                    {schoolValueBenefits.map(({ title, description }, index) => (
                      <div key={title} className="rounded-[20px] border border-white/12 bg-white/[0.06] p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/58">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/80">{description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:px-6 md:py-16 lg:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeader
                  eyebrow="The Team Behind Creator Labs"
                  title="Built by educators who know scale"
                  description="Creator Labs is led by Vikrant Shome and an educator network spanning media, technology, and modern education brands."
                />
              </motion.div>

            <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:gap-6">
              <motion.div className="overflow-hidden rounded-[34px] border border-border/70 bg-white shadow-[var(--soft-shadow)]" variants={fadeUp}>
                <div className="grid gap-0 md:grid-cols-[0.78fr_1.22fr]">
                  <div className="relative min-h-[360px] bg-[#080506] md:min-h-full">
                    <img
                      src={vikrantShomeImage}
                      alt="Vikrant Shome"
                      className="absolute inset-0 object-cover object-top w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.68))]" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/12 bg-black/35 p-4 text-white backdrop-blur">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
                        Founder
                      </p>
                      <p className="mt-2 text-2xl font-bold tracking-tight">Vikrant Shome</p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary text-primary-foreground">
                        <Users2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                          Built by educators who know scale
                        </p>
                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                          Operator credibility
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
                      {founderHighlights.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>

                    <motion.div className="grid gap-3 mt-6 sm:grid-cols-2" variants={stagger}>
                      {founderMetrics.map(({ value, label }) => (
                        <motion.div
                          key={label}
                          className="rounded-[24px] border border-border/70 bg-background/75 p-4"
                          variants={fadeUp}
                        >
                          <p className="text-3xl font-bold tracking-tight text-primary">{value}</p>
                          <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="rounded-[32px] border border-white/10 bg-[#120d0b] p-4 text-white shadow-[var(--soft-shadow)] sm:p-5 md:p-6" variants={fadeUp}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">
                  Educator network
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white">
                  Operators from education, media, and technology.
                </h3>
                <p className="mt-4 text-base leading-7 text-white/82">
                  20+ educators from respected organizations across media, technology, and education.
                </p>

                <motion.div className="grid gap-3 mt-6 sm:grid-cols-2" variants={stagger}>
                  {educatorNetwork.map((name) => (
                    <motion.div
                      key={name}
                      className="rounded-[20px] border border-white/12 bg-white/[0.08] px-4 py-3 text-sm font-medium text-white/90"
                      variants={fadeUp}
                      whileHover={cardHover}
                    >
                      {name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#120d0b] px-4 py-7 text-white md:px-6 md:py-9">
        <div className="container flex flex-col gap-5 mx-auto max-w-7xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight text-white">Creator Labs by Naviksha AI</p>
            <p className="mt-1 text-sm text-white/72">
              School-ready creator infrastructure, curriculum, and visible student outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="text-white border-white/15 bg-white/5 hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={CONTACT_EMAIL}>Email Naviksha</a>
            </Button>
            <Button
              variant="ghost"
              className="text-white/88 hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={CONTACT_PHONE}>Call +91-7044685101</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorLabs;
