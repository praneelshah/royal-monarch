import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Target, Eye, Shield, Zap, Users, TrendingUp, Award, Globe, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import aboutHero from "@/assets/about-hero.jpg";
import teamImg from "@/assets/about-team.jpg";

// Animated counter component (21st.dev inspired)
function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, value, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

// Spotlight card component (21st.dev inspired)
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
      className={`relative overflow-hidden rounded-2xl border border-border bg-card ${className}`}
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

const values = [
  { icon: Target, title: "Business Outcomes", description: "We focus on real results — not just technical delivery. Every solution maps to measurable business impact.", color: "from-violet/20 to-primary/10" },
  { icon: Eye, title: "Future-Focused", description: "We help businesses modernize and stay ahead of the curve with cutting-edge technology adoption.", color: "from-primary/20 to-deep-blue/10" },
  { icon: Shield, title: "Trust & Reliability", description: "Direct engagement, transparent processes, and consistent quality across every interaction.", color: "from-deep-blue/20 to-violet/10" },
  { icon: Zap, title: "Efficiency First", description: "Cost reduction and operational efficiency are at our core. We optimize everything we touch.", color: "from-accent/20 to-primary/10" },
];

const stats = [
  { icon: Users, value: 200, suffix: "+", label: "Clients Served", description: "Across 15+ countries" },
  { icon: TrendingUp, value: 50, suffix: "%", label: "Avg Cost Reduction", description: "On cloud spend" },
  { icon: Award, value: 98, suffix: "%", label: "Client Retention", description: "Year over year" },
  { icon: Globe, value: 15, suffix: "+", label: "Countries", description: "Global reach" },
];

const timeline = [
  { year: "2016", title: "Founded", description: "Royal Monarch Solutions was established with a vision to bridge talent and technology." },
  { year: "2018", title: "AI Division", description: "Launched our AI & automation practice to help businesses reduce manual effort." },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to 15+ countries with remote-first delivery." },
  { year: "2024", title: "500+ Projects", description: "Reached the milestone of 500+ successfully delivered projects worldwide." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Immersive hero with particles effect */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="About Royal Monarch" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[80px]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-6"
            >
              <Sparkles className="size-4" />
              Our Story
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold font-display text-foreground mb-6">
              About <span className="text-gradient-violet">Royal Monarch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-8">
              A future-focused technology and talent solutions company helping businesses scale, optimize, and modernize.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity"
              >
                Work With Us <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 text-foreground font-body hover:bg-primary/5 transition-colors"
              >
                Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated stats with counters */}
      <section className="py-16 bg-card/80 backdrop-blur-sm border-y border-border relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.02]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="size-6 text-primary" />
                </div>
                <p className="text-4xl font-bold font-display text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-medium text-foreground font-body mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground font-body">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision section with floating card overlay */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-violet">
                <img src={teamImg} alt="Our team" className="w-full h-auto object-cover aspect-square" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-violet"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Award className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-display text-foreground">500+</p>
                    <p className="text-xs text-muted-foreground font-body">Projects Delivered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-body mb-4">
                <Eye className="size-3" /> Our Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                More Than a <span className="text-gradient-violet">Vendor</span>
              </h2>
              <div className="w-20 h-[3px] rounded-full bg-gradient-violet mb-6" />
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                We are not just a staffing firm or a tech consultancy. We position ourselves as a long-term solution partner for modern businesses — combining talent, technology, and AI under one roof.
              </p>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Our core promise is simple: we help businesses run smarter, faster, and more cost-effectively. Every solution we deliver is designed to drive measurable business outcomes.
              </p>
              <div className="space-y-3">
                {["Long-term partnership approach", "Measurable business outcomes", "Talent + Technology + AI under one roof"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <p className="text-sm font-medium text-foreground font-body">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              How We <span className="text-gradient-violet">Got Here</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-violet">
                    <p className="text-primary font-display font-bold text-lg mb-1">{item.year}</p>
                    <h3 className="text-foreground font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary border-4 border-background z-10" />
                <div className="flex-1 hidden md:block" />
                {/* Mobile version */}
                <div className="md:hidden ml-16 bg-card border border-border rounded-2xl p-6">
                  <p className="text-primary font-display font-bold text-lg mb-1">{item.year}</p>
                  <h3 className="text-foreground font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values with spotlight cards */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
                Why Clients <span className="text-gradient-violet">Trust Us</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-lg mx-auto">
                Built on principles that drive lasting partnerships and real business value.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <SpotlightCard className="p-8 hover:border-primary/30 transition-all hover:shadow-violet group h-full">
                    <div className={`size-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <v.icon className="size-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-3">{v.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.description}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}