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
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-4 flex items-center justify-between gap-2">
        {/* Brand Logo Section */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Logo icon - using brand image */}
          <img 
            src="/logo.png" 
            alt="Career Compass Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl object-contain shrink-0"
          />
          {/* Brand text */}
          <div className="min-w-0">
            <h1 className="font-heading font-bold text-sm sm:text-lg text-foreground truncate leading-tight">
              Career Compass
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground truncate leading-tight">by Naviksha AI</p>
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
        <Button 
          variant="hero" 
          size="default" 
          asChild 
          className="h-8.5 sm:h-12 px-3 sm:px-7 text-xs sm:text-base font-semibold shrink-0 rounded-lg sm:rounded-xl"
        >
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
            <span className="hidden sm:inline">Start Test at just ₹99</span>
            <span className="sm:hidden">Start • ₹99</span>
          </a>
        </Button>
      </div>

    </motion.header>
  );
};

export default Header;
