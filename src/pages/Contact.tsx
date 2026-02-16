import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import contactHero from "@/assets/contact-hero.jpg";

// Spotlight card (21st.dev inspired)
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

const contactMethods = [
  { icon: Mail, title: "Email Us", detail: "contact@royalmonarch.com", action: "mailto:contact@royalmonarch.com" },
  { icon: Clock, title: "Response Time", detail: "Within 24 hours", action: null },
  { icon: MapPin, title: "Location", detail: "United States", action: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with glassmorphism overlay */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHero} alt="Contact us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />
        </div>
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-accent/10 blur-[80px]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-6"
            >
              <Sparkles className="size-4" /> Let's Connect
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold font-display text-foreground mb-6">
              Get In <span className="text-gradient-violet">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
              Ready to reduce costs, hire better talent, or automate your operations? Let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick info cards with spotlight */}
      <section className="py-12 bg-card/80 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard className="rounded-xl border border-border bg-card hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4 p-5">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground font-body">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form with glassmorphism */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-body mb-4">
                <MessageSquare className="size-3" /> Reach Out
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">How Can We Help?</h2>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Whether you need talent, technology, AI automation, or cost optimization — we're here to deliver real results for your business.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Phone", detail: "+1 (555) 000-0000" },
                  { icon: MessageSquare, title: "Live Chat", detail: "Available Mon–Fri, 9am–6pm EST" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground font-body">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <SpotlightCard className="rounded-2xl border border-border bg-card">
                  <div className="p-6">
                    <p className="text-sm font-medium text-foreground font-body mb-4">Why reach out?</p>
                    <div className="space-y-3">
                      {["Free initial consultation", "No obligation cost audit", "Custom solution proposals", "Response within 24 hours"].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 text-sm text-muted-foreground font-body"
                        >
                          <CheckCircle2 className="size-4 text-primary shrink-0" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center shadow-violet">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="size-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <Send className="size-10 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground font-body mb-6">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-primary font-body font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <SpotlightCard className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-violet">
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="p-8 space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground font-body block mb-1.5">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground font-body block mb-1.5">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground font-body block mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground font-body block mb-1.5">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground font-body block mb-1.5">How can we help?</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all">
                        <option>Talent Solutions</option>
                        <option>AI & Automation</option>
                        <option>Cloud Solutions</option>
                        <option>Cost Optimization</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground font-body block mb-1.5">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Send Message <ArrowRight className="size-4" />
                    </button>
                  </form>
                </SpotlightCard>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}