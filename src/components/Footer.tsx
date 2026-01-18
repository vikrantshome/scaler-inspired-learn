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
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Information */}
          <div>
            {/* Logo and brand name */}
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Career Compass Logo" 
                className="w-10 h-10 rounded-xl object-contain"
              />
              <div>
                <h3 className="font-heading font-bold text-lg">Career Compass</h3>
                <p className="text-xs text-primary-foreground/60">by Naviksha AI</p>
              </div>
            </div>
            {/* Brand description */}
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              A National Career Counselling Initiative supported by leading educators and institutions.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href={CTA_LINK}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Take the Test
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              {/* Email link */}
              <a 
                href="mailto:ainaviksha@gmail.com" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                ainaviksha@gmail.com
              </a>
              {/* Phone link */}
              <a 
                href="tel:+919674255951" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91-9674255951
              </a>
            </div>
            {/* Founder info */}
            <p className="mt-4 text-primary-foreground/50 text-xs">
              Vikrant Shome, Founder, Naviksha AI
            </p>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Initiative */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Naviksha AI. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Part of The National Career Counselling Initiative (NCCi)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
