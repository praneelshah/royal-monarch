import { motion } from "framer-motion";
import { Zap, Palette, Puzzle, BookOpen, Box, Brain } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Solutions engineered for speed — minimal overhead, maximum output.",
  },
  {
    icon: Palette,
    title: "AI & Automation",
    description: "Intelligent systems that reduce manual effort and lower costs.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Plug into your existing tech stack with zero disruption.",
  },
  {
    icon: BookOpen,
    title: "Clear & Transparent",
    description: "No hidden costs, no jargon — just straightforward solutions.",
  },
  {
    icon: Box,
    title: "Fully Scalable",
    description: "Adapt and grow your solutions as your business evolves.",
  },
  {
    icon: Brain,
    title: "Future-Ready Tech",
    description: "Built with tomorrow's challenges in mind, ready for what's next.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Why Choose <span className="text-gradient-gold">Royal Monarch</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
            We deliver the right mix of talent, technology, and AI to transform your business operations.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          <div className="absolute w-[520px] h-[520px] -top-60 left-1/2 -translate-x-1/2 rounded-full blur-[300px] -z-10 bg-primary/5" />
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="size-10 p-2 bg-primary/5 border border-primary/20 rounded flex items-center justify-center">
                <feature.icon className="size-5 text-primary" />
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-base font-medium text-foreground font-body">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
