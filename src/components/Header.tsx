/**
 * Header.tsx - Navigation Header Component
 * 
 * A fixed navigation bar that stays at the top of the viewport.
 * Contains the brand logo, navigation links, and primary CTA button.
 * 
 * Features:
 * - Animated entrance on page load (slides down)
 * - Semi-transparent background with blur effect
 * - Responsive: hides nav links on mobile, shows on desktop
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

// External link for all CTAs - the main conversion destination
const CTA_LINK = "https://app.naviksha.co.in/auth";

const Header = () => {
  return (
    <motion.header
      // Entrance animation: slides down from top with fade
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Fixed positioning with high z-index to stay above content
      // Semi-transparent card color with backdrop blur for glass effect
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Logo Section */}
        <div className="flex items-center gap-2">
          {/* Logo icon - gradient background with sparkles */}
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          {/* Brand text */}
          <div>
            <h1 className="font-heading font-bold text-lg text-foreground">
              Career Compass
            </h1>
            <p className="text-xs text-muted-foreground">by Naviksha AI</p>
          </div>
        </div>

        {/* Desktop Navigation - hidden on mobile (md:flex) */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Smooth scroll links to page sections */}
          <a 
            href="#how-it-works" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </a>
          <a 
            href="#benefits" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
        </nav>

        {/* Primary CTA Button - links to auth page */}
        <Button variant="hero" size="lg" asChild>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
            Start Now
          </a>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
