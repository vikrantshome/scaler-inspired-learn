/**
 * HeroSection.tsx - Main Hero Banner
 * 
 * The first section visitors see. Contains the primary value proposition,
 * key features, and the main call-to-action button.
 * 
 * Layout:
 * - Full viewport height section
 * - Centered content with max-width constraint
 * - Decorative background blurs for depth
 * - Staggered animations for visual interest
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Target, Zap, Users, ArrowRight, CheckCircle2 } from "lucide-react";

// External link for all CTAs
const CTA_LINK = "https://www.naviksha.co.in/auth";

// Feature badges data - key selling points displayed as pills
const FEATURES = [
  { icon: Clock, text: "15 minutes" },      // Quick assessment time
  { icon: Target, text: "Top 3 careers" },  // Clear outcome
  { icon: Zap, text: "AI-powered insights" }, // Technology differentiator
  { icon: Users, text: "700+ schools" },    // Social proof
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Decorations - Blurred circles for depth effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Initiative Badge - Pulsing indicator with label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-8"
          >
            {/* Animated pulse dot */}
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            National Career Counselling Initiative
          </motion.div>

          {/* Main Headline - Primary value proposition */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Discover the career path that{" "}
            {/* Gradient text for emphasis */}
            <span className="text-gradient">fits your strengths</span>
          </motion.h1>

          {/* Subheadline - Supporting details */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A research-aligned, AI-powered assessment for students in Grades 6-12. 
            Get personalized career insights in just 15 minutes.
          </motion.p>

          {/* Feature Badges - Key selling points as visual pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border shadow-card"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild className="group">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Start Test
                {/* Arrow animates on hover */}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicator - Reduces friction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            No payment required • Works on any device
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
