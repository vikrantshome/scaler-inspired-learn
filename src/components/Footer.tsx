/**
 * Footer.tsx - Site Footer
 * 
 * Contains brand information, navigation links, and contact details.
 * Uses dark background (foreground color) with light text.
 * 
 * Sections:
 * 1. Brand - Logo and description
 * 2. Quick Links - Navigation to page sections
 * 3. Contact - Email and phone
 * 4. Bottom Bar - Copyright and initiative info
 */

import { Mail, Phone } from "lucide-react";

// External link for CTA
const CTA_LINK = "https://app.naviksha.co.in/auth";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container px-4 mx-auto">
        {/* Three Column Grid */}
        <div className="grid gap-12 mb-12 md:grid-cols-3">
          
          {/* Column 1: Brand Information */}
          <div>
            {/* Logo and brand name */}
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Career Compass Logo" 
                className="object-contain w-10 h-10 rounded-xl"
              />
              <div>
                <h3 className="text-lg font-bold font-heading">Career Compass</h3>
                <p className="text-xs text-primary-foreground/60">by Naviksha AI</p>
              </div>
            </div>
            {/* Brand description */}
            <p className="max-w-xs text-sm text-primary-foreground/70">
              A National Career Counselling Initiative supported by leading educators and institutions.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <h4 className="mb-4 font-bold font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href={CTA_LINK}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground"
                >
                  Take the Test
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="mb-4 font-bold font-heading">Contact Us</h4>
            <div className="space-y-3">
              {/* Email link */}
              <a 
                href="mailto:ainaviksha@gmail.com" 
                className="flex items-center gap-3 text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground"
              >
                <Mail className="w-4 h-4" />
                ainaviksha@gmail.com
              </a>
              {/* Phone link */}
              <a 
                href="tel:+917044685101" 
                className="flex items-center gap-3 text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4" />
                +91-7044685101
              </a>
            </div>
            {/* Founder info */}
            <p className="mt-4 text-xs text-primary-foreground/50">
              {/* Vikrant Shome, Founder, Naviksha AI */}
            </p>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Initiative */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-primary-foreground/10 md:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © 2024 Naviksha AI. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Part of The National Career Counselling Initiative (NCCi)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
