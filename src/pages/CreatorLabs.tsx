import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Camera,
  Clapperboard,
  Film,
  GraduationCap,
  Lightbulb,
  Mic,
  PlayCircle,
  Rocket,
  School,
  Sparkles,
  TrendingUp,
  Users2,
  Video,
  WandSparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import creatorLabsCertificate from "@/assets/creator-labs-certificate.jpg";
import vikrantShomeImage from "@/assets/vikrant-shome.jpg";

const CONTACT_EMAIL = "mailto:ainaviksha@gmail.com";
const CONTACT_PHONE = "tel:+917044685101";

const creatorLabsThemeStyles = {
  "--background": "32 33% 97%",
  "--foreground": "18 20% 13%",
  "--card": "0 0% 100%",
  "--card-foreground": "18 20% 13%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "18 20% 13%",
  "--primary": "22 90% 54%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "32 38% 92%",
  "--secondary-foreground": "18 20% 13%",
  "--muted": "30 24% 94%",
  "--muted-foreground": "22 9% 40%",
  "--accent": "37 100% 92%",
  "--accent-foreground": "18 20% 13%",
  "--destructive": "0 72% 51%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "25 27% 84%",
  "--input": "25 27% 84%",
  "--ring": "22 90% 54%",
  "--radius": "1rem",
  "--hero-gradient":
    "linear-gradient(180deg, hsl(31 60% 96%) 0%, hsl(35 74% 92%) 48%, hsl(34 100% 88%) 100%)",
  "--section-surface":
    "linear-gradient(180deg, hsl(32 36% 98%) 0%, hsl(34 33% 95%) 100%)",
  "--panel-gradient":
    "linear-gradient(135deg, hsl(20 90% 57%) 0%, hsl(33 100% 60%) 100%)",
  "--dark-panel":
    "linear-gradient(145deg, hsl(18 24% 15%) 0%, hsl(18 18% 10%) 100%)",
  "--soft-shadow": "0 20px 60px -28px hsl(20 55% 20% / 0.28)",
} as CSSProperties;

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

const labFeatures = [
  {
    title: "Professional camera setup",
    description: "A ready-to-shoot studio corner for filming, demos, and interviews.",
    icon: Camera,
  },
  {
    title: "Studio-grade lighting",
    description: "Ring lights and lighting support that make student content publish-ready.",
    icon: Lightbulb,
  },
  {
    title: "Podcast and voiceover ready",
    description: "A microphone setup built for podcasts, narration, and creator storytelling.",
    icon: Mic,
  },
  {
    title: "Editing station",
    description: "Full post-production tools for cutting, polishing, and packaging content.",
    icon: Film,
  },
  {
    title: "Short-form content creation",
    description: "A workflow made for reels, shorts, and platform-native storytelling.",
    icon: Video,
  },
  {
    title: "Plug-and-play for schools",
    description: "Creator Labs handles setup, delivery, and support. The school provides the space.",
    icon: Building2,
  },
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
    <Badge
      variant="outline"
      className="mb-3 border-primary/25 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:mb-4 sm:px-4 sm:text-[11px]"
    >
      {eyebrow}
    </Badge>
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-5xl">{title}</h2>
    {description ? (
      <p className="mt-4 text-base leading-7 text-muted-foreground md:mt-5 md:text-lg md:leading-8">
        {description}
      </p>
    ) : null}
  </div>
);

const CreatorLabs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground" style={creatorLabsThemeStyles}>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 md:gap-4 md:px-6 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--soft-shadow)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">CREATOR LABS</p>
              <p className="text-sm text-muted-foreground">by Naviksha AI</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Naviksha
              </Link>
            </Button>
            <Button size="sm" className="hidden md:inline-flex" asChild>
              <a href={CONTACT_EMAIL}>Contact Us</a>
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="relative overflow-hidden px-4 pb-14 pt-28 sm:pb-16 sm:pt-32 md:px-6 md:pb-24 md:pt-36"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.95),_transparent_55%)]" />
          <div className="container relative mx-auto grid max-w-7xl gap-8 md:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Badge className="mb-5 bg-primary/12 px-3 py-1.5 text-primary hover:bg-primary/12 sm:mb-6 sm:px-4">
                School-ready creator infrastructure
              </Badge>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
                Creator Labs
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-7 text-muted-foreground sm:text-xl md:mt-6 md:text-2xl md:leading-8">
                Build creators, influencers, and entrepreneurs inside schools with a plug-and-play studio, a
                guided curriculum, and visible student outcomes.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                {["Orange economy skills", "5-year creator journey", "Minimal school effort"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-[var(--soft-shadow)] sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-white/60 bg-white/85 shadow-[var(--soft-shadow)] backdrop-blur">
              <CardContent className="p-5 sm:p-6 lg:p-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  <WandSparkles className="h-4 w-4 text-primary" />
                  Built for schools
                </div>
                <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-secondary/70 p-4">
                    <p className="text-2xl font-bold text-foreground sm:text-3xl">200+</p>
                    <p className="mt-2 text-sm text-muted-foreground">Student-led channels and visible content outcomes.</p>
                  </div>
                  <div className="rounded-2xl bg-secondary/70 p-4">
                    <p className="text-2xl font-bold text-foreground sm:text-3xl">20+</p>
                    <p className="mt-2 text-sm text-muted-foreground">Expert educators across media, tech, and education.</p>
                  </div>
                </div>
                <div
                  className="mt-5 rounded-[28px] p-4 text-white sm:p-5"
                  style={{ background: "var(--dark-panel)" }}
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-white/70">What this page covers</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
                    <li>Why the creator economy matters for schools right now.</li>
                    <li>What the on-campus Creator Lab setup includes.</li>
                    <li>How students learn, publish, and build real portfolios over time.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="The Orange Economy"
              title="Opportunity missed out!"
              description="Schools already sit on student attention, creativity, and community. Creator Labs turns that into future-proof skill-building and parent-visible outcomes."
            />

            <div className="mt-8 grid gap-5 md:mt-12 md:gap-6 lg:grid-cols-2">
              <Card className="border-border/70 bg-white/90 shadow-[var(--soft-shadow)]">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                      <School className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The Problem</p>
                      <h3 className="text-2xl font-bold text-foreground">Consumption without creation</h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3 md:mt-7 md:space-y-4">
                    {opportunityProblem.map((item) => (
                      <div key={item} className="rounded-2xl border border-border/70 bg-background/80 p-4">
                        <p className="text-base leading-7 text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-white/90 shadow-[var(--soft-shadow)]">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The Opportunity</p>
                      <h3 className="text-2xl font-bold text-foreground">Skills that stay relevant</h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3 md:mt-7 md:space-y-4">
                    {opportunityWins.map((item) => (
                      <div key={item} className="rounded-2xl border border-primary/15 bg-accent/60 p-4">
                        <p className="text-base leading-7 text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Set Up Inside Your School"
              title="India's first Creator Lab"
              description="Creator Labs brings the full environment on campus, from studio infrastructure to operational support, so schools can launch quickly without building a media team from scratch."
            />

            <div className="mt-8 grid gap-4 md:mt-12 md:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {labFeatures.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="border-border/70 bg-white/90 shadow-[var(--soft-shadow)]">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground md:mt-5">{title}</h3>
                    <p className="mt-2.5 text-base leading-7 text-muted-foreground md:mt-3">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Student Journey"
              title="What students learn and do across 5 years"
              description="The program moves from fundamentals to monetisation, giving students repeated chances to learn, create, publish, grow, and build real-world creator confidence."
            />

            <div className="mt-8 grid gap-4 md:mt-12 md:gap-5 lg:grid-cols-5">
              {journeyStages.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="border-border/70 bg-white/90 shadow-[var(--soft-shadow)]">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground md:mt-5">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-7 rounded-[28px] border border-border/70 bg-white/90 p-5 shadow-[var(--soft-shadow)] sm:p-6 md:mt-10 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Program modules</p>
              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 xl:grid-cols-4">
                {journeyTracks.map((track) => (
                  <div key={track} className="rounded-2xl bg-secondary/70 px-4 py-3 text-sm font-medium text-foreground">
                    {track}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Simple 4-Step Rollout"
              title="How it works"
              description="Creator Labs is structured to stay low-lift for the school while still producing visible student and brand outcomes."
            />

            <div className="mt-8 grid gap-4 md:mt-12 md:gap-5 md:grid-cols-2 xl:grid-cols-4">
              {rolloutSteps.map(({ title, description }, index) => (
                <Card key={title} className="border-border/70 bg-white/90 shadow-[var(--soft-shadow)]">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground md:mt-5">{title}</h3>
                    <p className="mt-2.5 text-base leading-7 text-muted-foreground md:mt-3">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-7 rounded-[28px] border border-primary/15 bg-accent/70 p-5 text-base leading-7 text-foreground shadow-[var(--soft-shadow)] sm:p-6 md:mt-10">
              School input stays minimal. Creator Labs handles setup, delivery, and ongoing support so your staff can stay focused on teaching and school operations.
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <Card className="overflow-hidden border-primary/15 bg-white/95 shadow-[var(--soft-shadow)]">
              <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="bg-[linear-gradient(180deg,#f7f1e6_0%,#efe2c2_100%)] p-4 sm:p-5 lg:p-8">
                  <div className="rounded-[34px] border border-[#d9c79c]/80 bg-[#fcfaf5] p-3 shadow-[0_30px_70px_-32px_rgba(87,54,9,0.35)] sm:p-4">
                    <img
                      src={creatorLabsCertificate}
                      alt="Creator Labs certificate of completion"
                      className="w-full rounded-[26px] object-cover"
                    />
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                  <Badge
                    variant="outline"
                    className="border-primary/25 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:px-4 sm:text-[11px]"
                  >
                    Recognised. Shareable. Prestigious.
                  </Badge>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:mt-5 md:text-5xl">
                    A certificate that stands out
                  </h2>

                  <p className="mt-4 text-base leading-7 text-muted-foreground md:mt-5 md:text-lg md:leading-8">
                    The program ends with a credential students can carry into internships, college applications,
                    creator portfolios, and public profiles.
                  </p>

                  <div className="mt-6 space-y-3 md:mt-8 md:space-y-4">
                    {certificateHighlights.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[24px] border border-border/70 bg-background/80 p-4 sm:p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {index + 1}
                          </div>
                          <p className="pt-1 text-base leading-7 text-muted-foreground">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20">
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="School Value"
              title="Imagine these benefits for your school"
              description="Creator Labs is designed to create public-facing outcomes that students, parents, and admissions teams can all see."
            />

            <div className="mt-8 grid gap-4 md:mt-12 md:gap-5 lg:grid-cols-3">
              {schoolValueMetrics.map(({ value, title, description }) => (
                <Card key={title} className="border-border/70 bg-white/90 shadow-[var(--soft-shadow)]">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <p className="text-3xl font-bold text-primary sm:text-4xl">{value}</p>
                    <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 md:grid-cols-3">
              {schoolValueBenefits.map(({ title, description }) => (
                <div key={title} className="rounded-[28px] border border-border/70 bg-secondary/55 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-6 md:py-20" style={{ background: "var(--section-surface)" }}>
          <div className="container mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="The Team Behind Creator Labs"
              title="Built by educators who know scale"
              description="Creator Labs is led by Vikrant Shome and an educator network spanning media, technology, and modern education brands."
            />

            <div className="mt-8 grid gap-6 md:mt-12 md:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <Card className="border-border/70 bg-white/95 shadow-[var(--soft-shadow)]">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <div className="grid gap-5 md:grid-cols-[0.52fr_0.48fr] md:gap-6 md:items-start">
                    <div className="overflow-hidden rounded-[28px] bg-[#140f0d] shadow-[var(--soft-shadow)]">
                      <img
                        src={vikrantShomeImage}
                        alt="Vikrant Shome"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                          <Users2 className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Founder</p>
                          <h3 className="text-3xl font-bold text-foreground">Vikrant Shome</h3>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3 text-base leading-7 text-muted-foreground md:mt-6">
                        <p>Serial founder, NIT and IIM alumnus.</p>
                        <p>Built programs at Scaler, Physics Wallah, Vedantu, and LiT.</p>
                        <p>Personally counselled more than 100,000 students across India.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                  {founderMetrics.map(({ value, label }) => (
                    <Card key={label} className="border-border/70 bg-white/95 shadow-[var(--soft-shadow)]">
                      <CardContent className="p-5 sm:p-6 md:p-7">
                        <p className="text-3xl font-bold text-primary sm:text-4xl">{value}</p>
                        <p className="mt-2 text-base text-muted-foreground">{label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-border/70 bg-white/95 shadow-[var(--soft-shadow)]">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Educator network</p>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      20+ educators from respected organizations across media, technology, and education.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {educatorNetwork.map((name) => (
                        <Badge key={name} variant="outline" className="rounded-full border-primary/20 bg-accent/40 px-3 py-1 text-xs font-medium text-foreground">
                          {name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/80 bg-background px-4 py-8 md:px-6 md:py-10">
        <div className="container mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-foreground">Creator Labs by Naviksha AI</p>
            <p className="mt-1 text-sm text-muted-foreground">School-ready creator infrastructure, curriculum, and visible student outcomes.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <a href={CONTACT_EMAIL}>Email Naviksha</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={CONTACT_PHONE}>Call +91-7044685101</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorLabs;
