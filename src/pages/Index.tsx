/**
 * Index.tsx - Main Landing Page
 * 
 * This is the primary page component that assembles all sections
 * of the Career Compass website into a single scrollable page.
 * 
 * Page Structure (top to bottom):
 * 1. Header - Fixed navigation bar
 * 2. Hero - Main banner with CTA
 * 3. Stats - Credibility metrics & school logos
 * 4. How It Works - 4-step process explanation
 * 5. Benefits - What participants receive
 * 6. Testimonials - Educator reviews
 * 7. FAQ - Frequently asked questions
 * 8. CTA - Final call-to-action
 * 9. Footer - Contact & links
 */

// Import all section components
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Main page component
 * Uses min-h-screen to ensure full viewport height
 * overflow-x-hidden prevents horizontal scroll from animations
 */
const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Fixed navigation - always visible at top */}
      <Header />
      
      {/* Main content sections in order of importance */}
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      
      {/* Site footer with contact info */}
      <Footer />
    </main>
  );
};

export default Index;
