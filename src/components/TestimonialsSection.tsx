import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prerna Syal",
    role: "School Psychologist",
    content:
      "I'm glad to share that we had an amazing experience and found the psychometric test helpful for kids in understanding the future. It's always rewarding to know that such tools can make a positive impact on individuals' lives. Thank you so much for a wonderful experience.",
    rating: 5,
  },
  {
    name: "Nishtha Dhull",
    role: "School Psychologist",
    content:
      "I am really happy with the services. The psychometric test is really helpful for the students. All the parents and children are really happy with the results and they get a point of view of their career as well.",
    rating: 5,
  },
  {
    name: "School Principal",
    role: "DPS Network",
    content:
      "The structured data from the career report provides 30-40% more actionable insights to students, supports active career discussions at home, and brings greater uniformity to early counselling efforts in the school.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by educators <span className="text-gradient">nationwide</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from counsellors and educators who have implemented the Career Compass Assessment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
