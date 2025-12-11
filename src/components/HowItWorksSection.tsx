/**
 * HowItWorksSection.tsx - Process Steps
 * 
 * Explains the 4-step process for implementing the assessment.
 * Uses numbered cards with icons and a connecting line on desktop.
 * 
 * Steps:
 * 1. Schedule - Coordinate with team
 * 2. Test - 15-minute OMR assessment
 * 3. AI Analysis - Process responses
 * 4. Reports - Deliver insights
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, FileText, Cpu, BarChart3, ArrowRight } from "lucide-react";

// Process steps with icon, title, description, and color theme
const STEPS = [
  {
    icon: Calendar,
    title: "Schedule",
    description: "Coordinate with our team to schedule a session at your school.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileText,
    title: "Test (15 Minutes)",
    description: "Students complete the offline OMR-based assessment in class.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our Naviksha AI engine processes responses and generates insights.",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description: "Receive detailed student and school-level career readiness reports.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, structured, and <span className="text-gradient">seamless</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No digital infrastructure required. Our trained team facilitates the entire process inside classrooms.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Horizontal connecting line - desktop only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />

          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10"
            >
              {/* Step Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Step Number Badge - positioned above card */}
                <div className="absolute -top-3 left-8 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Step Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-5`}>
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Step Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1">
                  {step.description}
                </p>

                {/* Arrow indicator for mobile - shows flow between steps */}
                {index < STEPS.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/50 rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
