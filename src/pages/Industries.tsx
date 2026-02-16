import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Monitor, HeartPulse, Landmark, ShoppingCart, Truck, Briefcase, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import industriesHero from "@/assets/industries-hero.jpg";

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

const industries = [
  {
    icon: Monitor,
    title: "Technology",
    description: "Custom development, cloud solutions, and AI for tech-forward companies scaling rapidly.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    capabilities: ["Cloud migration", "AI integration", "DevOps automation"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-conscious solutions, automation for patient workflows, and talent for healthtech teams.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    capabilities: ["HIPAA compliance", "Patient automation", "HealthTech talent"],
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "Secure, compliant technology solutions and talent for fintech and financial services.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    capabilities: ["Secure infrastructure", "FinTech solutions", "Regulatory compliance"],
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    description: "Scalable platforms, AI-powered customer experiences, and operational automation.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    capabilities: ["eCommerce platforms", "AI personalization", "Order automation"],
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Supply chain optimization, fleet management tech, and intelligent process automation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    capabilities: ["Supply chain AI", "Fleet management", "Route optimization"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Workflow automation, cloud migration, and talent augmentation for consulting and services firms.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    capabilities: ["Workflow automation", "Cloud consulting", "Talent augmentation"],
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with floating elements */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={industriesHero} alt="Industries" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full bg-accent/10 blur-[80px]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-6"
            >
              <Sparkles className="size-4" /> Cross-Industry Expertise
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold font-display text-foreground mb-6">
              Industries We <span className="text-gradient-violet">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-8">
              Tailored solutions across sectors that demand innovation, efficiency, and growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industry cards with spotlight hover and capabilities */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-4">
              Sectors
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Deep <span className="text-gradient-violet">Expertise</span>
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
              We bring specialized knowledge to every industry we serve.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
              >
                <SpotlightCard className="bg-card border border-border rounded-2xl hover:border-primary/30 transition-all hover:shadow-violet group h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 left-4 size-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50"
                    >
                      <ind.icon className="size-6 text-primary" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display text-foreground mb-2">{ind.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{ind.description}</p>
                    {/* Capability tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ind.capabilities.map((cap) => (
                        <span key={cap} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-body border border-primary/10">
                          {cap}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-primary font-body font-medium hover:gap-2 transition-all group/link">
                      Learn More <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-industry benefits */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-body mb-4">
                <CheckCircle2 className="size-3" /> Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Cross-Industry <span className="text-gradient-violet">Advantage</span>
              </h2>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Our broad industry experience means we bring proven patterns and best practices from one sector to innovate in another.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Proven Patterns", desc: "Solutions battle-tested across multiple industries" },
                  { title: "Industry Talent", desc: "Specialists who understand your sector's nuances" },
                  { title: "Regulatory Awareness", desc: "Compliance-conscious approach to every project" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                  >
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground font-body">{item.title}</p>
                      <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "6+", label: "Industries" },
                { num: "200+", label: "Clients" },
                { num: "500+", label: "Projects" },
                { num: "98%", label: "Retention" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-violet transition-all group"
                >
                  <p className="text-3xl font-bold font-display text-primary group-hover:scale-110 transition-transform inline-block">{stat.num}</p>
                  <p className="text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-4">
              Don't see your industry?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
              Our solutions are adaptable. If your business needs talent, technology, or automation — we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity"
            >
              Talk to Us <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}