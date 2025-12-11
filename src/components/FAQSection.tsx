/**
 * FAQSection.tsx - Frequently Asked Questions
 * 
 * Expandable accordion with common questions about the assessment.
 * Uses shadcn Accordion component for smooth animations.
 * 
 * Questions cover:
 * - What the test is
 * - How to take it
 * - How to access reports
 * - Accuracy information
 * - What results include
 * - Pricing (free)
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data - question and answer pairs
const FAQS = [
  {
    question: "What is the Career Compass Test?",
    answer: "The Career Compass Test is a research-aligned, AI-powered assessment designed for students in Grades 6-12. It helps you discover your natural strengths, interests, and learning preferences to identify the top 3 career paths that best match your profile.",
  },
  {
    question: "How can I take the Career Compass Test?",
    answer: "You can take the test online through our platform or at your school during a scheduled session. Simply click 'Start Test' to begin. The test takes approximately 15 minutes to complete and works on any device.",
  },
  {
    question: "How do I access my Career Compass Test report?",
    answer: "After completing the test, your personalized Career Compass Report is generated instantly. You can access it immediately on the platform and download it for future reference. The report includes your strengths analysis, top 3 career matches, and a preparation roadmap.",
  },
  {
    question: "How accurate is the Career Compass Test?",
    answer: "The Career Compass Test is built on established psychometric frameworks and uses AI to analyze your responses. It provides research-backed insights into your aptitudes and interests, offering reliable career guidance that has helped thousands of students find their path.",
  },
  {
    question: "What will I learn from my Career Compass Test results?",
    answer: "Your results include: a detailed analysis of your core strengths and interest clusters, your top 3 matched careers with fit scores, preparation cues and roadmap for each career path, and actionable insights to guide your academic decisions.",
  },
  {
    question: "Is the Career Compass Test free?",
    answer: "Yes, the Career Compass Test is completely free to take. No payment is required to complete the assessment and receive your personalized Career Compass Report.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the Career Compass Test
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Single collapsible - only one open at a time */}
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                // Styled card with shadow change on open
                className="bg-card border border-border rounded-2xl px-6 shadow-card data-[state=open]:shadow-elevated transition-shadow"
              >
                {/* Question trigger - no underline on hover */}
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                {/* Answer content */}
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
