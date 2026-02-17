import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import whatweDoTeam from "@/assets/whatwedo-team.jpg";

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative shadow-2xl shadow-primary/20 rounded-2xl overflow-hidden shrink-0"
          >
            <img
              className="max-w-md w-full object-cover rounded-2xl"
              src={whatweDoTeam}
              alt="Team collaboration"
            />
            <div className="flex items-center gap-2 max-w-72 absolute bottom-8 left-8 bg-card p-4 rounded-xl border border-border">
              <div className="flex -space-x-3 shrink-0">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Team member" className="size-9 rounded-full border-2 border-card hover:-translate-y-1 transition z-[1]" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="Team member" className="size-9 rounded-full border-2 border-card hover:-translate-y-1 transition z-[2]" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="Team member" className="size-9 rounded-full border-2 border-card hover:-translate-y-1 transition z-[3]" />
                <div className="flex items-center justify-center text-xs text-primary-foreground size-9 rounded-full border-2 border-card bg-primary hover:-translate-y-1 transition z-[4] font-body">50+</div>
              </div>
              <p className="text-sm font-medium text-foreground font-body">Join our growing network</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg font-body"
          >
            <h2 className="text-2xl font-bold font-display text-foreground uppercase tracking-wide">What We Do</h2>
            <div className="w-24 h-[3px] rounded-full bg-gradient-violet mt-2" />
            <p className="mt-8">
              Royal Monarch Solutions helps you build faster by combining top-tier technology talent with intelligent automation and cloud solutions.
            </p>
            <p className="mt-4">
              Whether you're scaling your team, optimizing cloud costs, or automating workflows, we deliver solutions that drive real business outcomes — not just technical deliverables.
            </p>
            <p className="mt-4">
              From AI-powered automation to full-cycle recruiting, we empower businesses to operate smarter and scale effortlessly.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-violet py-3 px-8 rounded-full text-primary-foreground font-semibold"
            >
              <span>Read more</span>
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
