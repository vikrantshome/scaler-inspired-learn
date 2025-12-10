import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, Award, BookOpen, Building2, Users, ClipboardList } from "lucide-react";

const studentBenefits = [
  {
    icon: FileCheck,
    title: "Career Compass Report",
    description: "Detailed analysis of strengths, interest clusters, and preparation cues for top 3 career matches.",
  },
  {
    icon: Award,
    title: "Participation Certificate",
    description: "IIT Bombay MoodI certified participation certificate for all participants.",
  },
  {
    icon: BookOpen,
    title: "Career Booklet",
    description: "Comprehensive booklet on New Age Careers to guide future decisions.",
  },
];

const schoolProvides = [
  { icon: Building2, text: "Class Slot" },
  { icon: Users, text: "Staff Access" },
  { icon: ClipboardList, text: "Teacher POC" },
];

const navikshaProvides = [
  { icon: Users, text: "Facilitation" },
  { icon: FileCheck, text: "AI Reports" },
  { icon: ClipboardList, text: "Insights Summary" },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What You Get
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything participants <span className="text-gradient">receive</span>
          </h2>
        </motion.div>

        {/* Student Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {studentBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* School & Naviksha Provides */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background rounded-2xl p-8 border border-border shadow-card"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              School Provides
            </h3>
            <div className="space-y-4">
              {schoolProvides.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-primary rounded-2xl p-8 shadow-elevated"
          >
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-6">
              Naviksha Provides
            </h3>
            <div className="space-y-4">
              {navikshaProvides.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
