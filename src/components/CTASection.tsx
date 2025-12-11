/**
 * CTASection.tsx - Final Call-to-Action
 * 
 * A prominent section near the end of the page to convert visitors.
 * Features a gradient card with exam dates and CTA button.
 * 
 * Design:
 * - Full-width gradient card
 * - Decorative blur effects
 * - Exam dates banner
 * - Primary CTA button
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// External link for CTA
const CTA_LINK = "https://app.naviksha.co.in/auth";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background blur effects for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          // Scale animation on scroll into view
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card - gradient background */}
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-center shadow-elevated relative overflow-hidden">
            {/* Decorative corner blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Exam Dates Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Live Exam Dates: 26 Nov - 20 Dec
              </div>

              {/* Main Headline */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Your future deserves better clarity
              </h2>

              {/* Supporting Text */}
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
                Get personalized career matches and a clear roadmap for your academic journey. 
                Join thousands of students discovering their path with Career Compass.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl" 
                  // Override colors for contrast on gradient background
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                  asChild
                >
                  <a 
                    href={CTA_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group"
                  >
                    Start Now • Get Report
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Tagline */}
              <p className="mt-6 text-sm text-primary-foreground/60">
                Clarity • Confidence • Direction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
