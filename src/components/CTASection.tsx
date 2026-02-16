import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">
            A <span className="text-gradient-violet">Guilt-Free</span> Decision
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-10 max-w-xl mx-auto">
            Ready to reduce costs, hire better talent, and automate your operations? Let's talk about what Royal Monarch can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity text-lg"
            >
              Book a Consultation
              <ArrowRight className="size-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-primary/20 text-foreground font-body hover:bg-primary/5 transition-colors text-lg"
            >
              Get a Cost Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
