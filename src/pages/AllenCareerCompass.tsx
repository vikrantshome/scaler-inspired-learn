import { useEffect, useState, type CSSProperties } from "react";
import {
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Map,
  Stethoscope,
  Target,
  Trophy,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ALLEN_APP_URL = "https://acadspace-pathfinder-allen.vercel.app/auth";
const ALLEN_SITE_URL = "https://allen.in/classes-6-10";

const allenThemeStyles = {
  "--background": "0 0% 100%",
  "--foreground": "220 13% 20%",
  "--card": "0 0% 100%",
  "--card-foreground": "220 13% 20%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "220 13% 20%",
  "--primary": "217 91% 60%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "214 32% 91%",
  "--secondary-foreground": "220 13% 20%",
  "--muted": "210 40% 96%",
  "--muted-foreground": "220 9% 46%",
  "--accent": "217 91% 95%",
  "--accent-foreground": "217 91% 60%",
  "--destructive": "0 84% 60%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "214 32% 91%",
  "--input": "214 32% 91%",
  "--ring": "217 91% 60%",
  "--radius": "0.75rem",
  "--hero-gradient":
    "linear-gradient(135deg, hsl(217 91% 60% / 0.05) 0%, hsl(217 91% 60% / 0.02) 100%)",
  "--section-bg": "hsl(217 91% 98%)",
} as CSSProperties;

const StartButton = ({ className = "" }: { className?: string }) => (
  <Button size="lg" className={className} asChild>
    <a href={ALLEN_APP_URL} target="_blank" rel="noopener noreferrer">
      Start Now • Get Report
    </a>
  </Button>
);

const AllenCareerCompass = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" style={allenThemeStyles}>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a
            href={ALLEN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold tracking-tight text-foreground md:text-2xl"
          >
            ALLEN <span className="text-primary">Online</span>
          </a>

          <div className="flex items-center gap-2 rounded-full border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-primary/10 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-primary text-white">
              AI
            </div>
            <div className="text-sm">
              <span className="hidden text-muted-foreground sm:inline">Powered by </span>
              <span className="bg-gradient-to-r from-purple-600 to-primary bg-clip-text font-bold text-transparent">
                Naviksha AI
              </span>
            </div>
          </div>
        </div>
      </nav>

      {showStickyCta ? (
        <>
          <div className="fixed right-6 top-20 z-40 hidden md:block">
            <StartButton className="rounded-full shadow-lg" />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Clarity • Confidence • Direction
            </p>
          </div>

          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-4 backdrop-blur-md md:hidden">
            <StartButton className="w-full" />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Clarity • Confidence • Direction
            </p>
          </div>
        </>
      ) : null}

      <section className="px-6 pb-20 pt-32" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Career Compass
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
            Discover the career path that fits your unique strengths.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "15 minutes",
              "Top 3 career matches",
              "Instant report",
              "Trusted by 20L+ students",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-4 flex flex-col items-center gap-4">
            <StartButton className="w-full px-8 text-lg sm:w-auto" />
          </div>

          <p className="text-sm text-muted-foreground">No payment required. Works on any device.</p>
        </div>
      </section>

      <section className="bg-section-bg px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground md:text-5xl">
            37 years of student-first excellence.
          </h2>
          <p className="mx-auto mb-16 max-w-4xl text-center text-lg text-muted-foreground">
            ALLEN has shaped millions of success stories. Now, with ALLEN Online,
            that legacy meets technology, combining expert mentorship, smart
            insights, and personalised learning to help every student find their
            path.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["20L+", "students trust ALLEN Online"],
              ["4000+", "Selections in IIT-JEE & NEET-UG"],
              ["2000+", "qualifications in Olympiads"],
            ].map(([value, label]) => (
              <Card key={value}>
                <CardContent className="pt-8 text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">{value}</div>
                  <p className="text-muted-foreground">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground md:text-5xl">
            Discover what you're made for.
          </h2>
          <p className="mx-auto mb-16 max-w-4xl text-center text-lg text-muted-foreground">
            The Career Compass Test brought to you by Allen Online helps you
            explore your interests, strengths, and learning preferences through a
            professionally curated, AI-enabled assessment. Get instant insights
            into careers aligned with your natural strengths.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Know your strengths",
                description:
                  "Understand your natural abilities and preferences.",
                icon: Trophy,
              },
              {
                title: "Explore careers that fit you",
                description: "Discover paths aligned with your profile.",
                icon: Target,
              },
              {
                title: "See your learning roadmap",
                description: "Get a personalized path to success.",
                icon: Map,
              },
            ].map(({ title, description, icon: Icon }) => (
              <Card key={title} className="border-2 transition-colors hover:border-primary">
                <CardContent className="pt-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <StartButton className="mb-2 px-8 text-lg" />
            <p className="text-sm text-muted-foreground">Clarity • Confidence • Direction</p>
          </div>
        </div>
      </section>

      <section className="bg-section-bg px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground md:text-5xl">
            Your journey to career clarity, simplified.
          </h2>

          <div className="mb-12 mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Take the test at your school or online (15 mins).",
              "Our curated AI analyses your responses instantly.",
              "Get your personalised report with strengths & fit scores.",
              "Explore Allen Online Courses for your chosen path.",
            ].map((description, index) => (
              <Card key={description}>
                <CardContent className="pt-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <StartButton className="mb-2 px-8 text-lg" />
            <p className="text-sm text-muted-foreground">Clarity • Confidence • Direction</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground md:text-5xl">
            Your career clarity in one view.
          </h2>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative h-64 w-64">
                <svg viewBox="0 0 100 100" className="-rotate-90 transform">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="12"
                    strokeDasharray="196"
                    strokeDashoffset="49"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">78%</div>
                    <div className="text-sm text-muted-foreground">fit</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                ["Data Science", 81, "78–85%"],
                ["Computer Engineering", 73, "70–76%"],
                ["Biomedical", 63, "60–66%"],
              ].map(([title, value, label]) => (
                <Card key={title}>
                  <CardContent className="pt-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-foreground">{title}</h3>
                      <span className="text-sm text-muted-foreground">{label}</span>
                    </div>
                    <Progress value={Number(value)} className="h-2" />
                  </CardContent>
                </Card>
              ))}

              <p className="pt-4 text-center text-sm text-muted-foreground">
                Your top 3 matched careers with fit scores
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-bg px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground md:text-5xl">
            Turn your career clarity into academic success.
          </h2>
          <p className="mx-auto mb-16 max-w-4xl text-center text-lg text-muted-foreground">
            Whatever your goal, science, medicine, or technology, ALLEN Online
            offers structured learning paths to support your chosen direction.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Classes 6–10",
                href: "https://allen.in/classes-6-10",
                label: "Explore Foundation",
                icon: GraduationCap,
              },
              {
                title: "JEE",
                href: "https://allen.in/jee",
                label: "Explore JEE",
                icon: FlaskConical,
              },
              {
                title: "NEET",
                href: "https://allen.in/neet",
                label: "Explore NEET",
                icon: Stethoscope,
              },
            ].map(({ title, href, label, icon: Icon }) => (
              <Card key={title} className="transition-colors hover:border-primary">
                <CardContent className="pt-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {label}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-bg px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Everything you need to know about the Career Compass Test
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is the Career Compass Test?
              </AccordionTrigger>
              <AccordionContent>
                The Career Compass Test is a comprehensive, AI-enabled career
                assessment designed to help students discover career paths that
                align with their unique strengths, interests, and learning
                preferences. It takes just 15 minutes to complete and provides
                instant, personalized results with your top 3 career matches.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How can I take the Career Compass Test?
              </AccordionTrigger>
              <AccordionContent>
                You can take the Career Compass Test at your school under
                teacher guidance, and online through this ALLEN Online portal{" "}
                <a
                  href={ALLEN_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  here
                </a>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How do I access my Career Compass Test report?
              </AccordionTrigger>
              <AccordionContent>
                Once you complete the Career Compass Test, you'll receive your
                personalized report instantly. The report includes your top 3
                career matches with fit scores, detailed strengths analysis, and
                a customized learning roadmap. If you have already taken the
                test, you can access the report{" "}
                <a
                  href={ALLEN_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  here
                </a>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How accurate is the Career Compass Test?
              </AccordionTrigger>
              <AccordionContent>
                ALLEN Online has partnered with Naviksha AI, an advanced
                artificial intelligence engine trained on thousands of career
                profiles and student data to bring you a carefully curated
                report. Sophisticated algorithms are used to match your
                responses with suitable career paths. The testing framework,
                questions, and career mapping have been developed and validated
                by ALLEN Online's team of expert psychologists and educators.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What will I learn from my Career Compass Test results?
              </AccordionTrigger>
              <AccordionContent>
                Your results provide a comprehensive view of your career
                potential, including your work personality and natural
                strengths, top 3 career matches with fit percentages, detailed
                analysis of why each career suits you, recommended subjects and
                skills to develop, and a personalized learning roadmap aligned
                to your goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Is the Career Compass Test free?
              </AccordionTrigger>
              <AccordionContent>
                Yes. The Career Compass Test is completely free to take. There
                are no hidden costs or payment requirements. Simply start the
                test and receive your personalized career report instantly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <WandSparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-enabled. Student-first. Actionable.</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Your future deserves better clarity.
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Get your personalised career matches and roadmap today.
          </p>
          <StartButton className="mb-2 px-12 text-lg" />
          <p className="text-sm text-muted-foreground">Clarity • Confidence • Direction</p>
        </div>
      </section>

      <footer className="border-t border-border bg-section-bg px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="https://allen.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  About ALLEN
                </a>
                <a
                  href="https://allen.in/classes-6-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  ALLEN Online Courses
                </a>
                <a
                  href="https://allen.in/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  News
                </a>
                <a
                  href="https://allen.in/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">Contact</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="mailto:ainaviksha@gmail.com" className="transition-colors hover:text-primary">
                  Email: ainaviksha@gmail.com
                </a>
                <a href="tel:9674255951" className="transition-colors hover:text-primary">
                  Phone: 9674255951
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            © 2025 ALLEN Online. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllenCareerCompass;
