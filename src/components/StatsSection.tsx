import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "700+", label: "Schools Engaged" },
  { value: "17+", label: "Cities in India" },
  { value: "30-40%", label: "Better Insights" },
  { value: "15", label: "Min Assessment" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Backed by counselling learnings from{" "}
            <span className="text-gradient">700+ schools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Including DPS, Kendriya Vidyalaya, Rustomjee International, and Cambridge schools across major cities in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-background rounded-2xl p-6 md:p-8 text-center border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
