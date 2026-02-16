import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Users, Bot, Cloud, DollarSign, ArrowRight, CheckCircle2, Sparkles, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import solutionsHero from "@/assets/solutions-hero.jpg";
import aiImg from "@/assets/ai-automation.jpg";
import serviceTalent from "@/assets/service-talent.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceCost from "@/assets/service-cost.jpg";

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

const solutions = [
  {
    icon: Users,
    title: "Talent Solutions",
    tagline: "The right people for the right requirement.",
    description: "We don't just send resumes. We deliver the right people for your business and technology needs through direct engagement.",
    image: serviceTalent,
    services: [
      "Direct client staffing",
      "Requirement-based recruiting",
      "Contract and full-time placements",
      "Remote teams and staff augmentation",
      "Full-cycle recruiting",
    ],
    gradient: "from-violet/20 to-primary/5",
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    tagline: "Less manual effort. Lower cost. Higher efficiency.",
    description: "We help businesses reduce manual work, improve efficiency, and lower operational costs with intelligent AI solutions.",
    image: serviceAi,
    services: [
      "AI-powered customer support agents",
      "AI front desk and virtual assistants",
      "Business process automation",
      "Workflow optimization",
      "Intelligent document and data processing",
      "Custom AI solutions for specific business problems",
    ],
    gradient: "from-primary/20 to-accent/5",
  },
  {
    icon: Cloud,
    title: "Technology & Cloud Solutions",
    tagline: "Build, modernize, and optimize your tech stack.",
    description: "Help businesses build, modernize, and optimize their technology stack for maximum performance and value.",
    image: serviceCloud,
    services: [
      "Custom software development",
      "Cloud architecture and migration",
      "DevOps and infrastructure automation",
      "Data and analytics solutions",
      "Digital transformation consulting",
    ],
    gradient: "from-deep-blue/20 to-primary/5",
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    tagline: "20–50% potential cost reduction.",
    description: "We audit, analyze, and optimize your cloud spending across AWS, Azure, or any cloud environment.",
    image: serviceCost,
    services: [
      "Cost audits and usage analysis",
      "Rightsizing and architecture optimization",
      "Eliminating unused or over-provisioned resources",
      "Multi-cloud cost strategies",
    ],
    gradient: "from-accent/20 to-violet/5",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We understand your business, challenges, and goals through deep consultation.", icon: Layers },
  { step: "02", title: "Strategy", description: "We design a tailored solution roadmap aligned with your objectives.", icon: Zap },
  { step: "03", title: "Execute", description: "Our expert teams deliver with precision, transparency, and speed.", icon: Sparkles },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Immersive split hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={solutionsHero} alt="Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[100px]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-6"
              >
                <Sparkles className="size-4" /> What We Offer
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 font-display">
                Our <span className="text-gradient-violet">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                Four powerful pillars designed to scale your business, reduce costs, and drive real outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity"
                >
                  Explore Solutions <ArrowRight className="size-5" />
                </Link>
                <a
                  href="#solutions-grid"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 text-foreground font-body hover:bg-primary/5 transition-colors"
                >
                  View All
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions cards with spotlight hover */}
      <section id="solutions-grid" className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {solutions.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <SpotlightCard className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all hover:shadow-violet`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto min-h-[320px] ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-card/50`} />
                      <div className="absolute top-6 left-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="size-14 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50"
                        >
                          <s.icon className="size-7 text-primary" />
                        </motion.div>
                      </div>
                      {/* Floating badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6 bg-background/70 backdrop-blur-md rounded-xl p-3 border border-border/50"
                      >
                        <p className="text-xs text-primary font-body font-semibold tracking-wide uppercase">{s.tagline}</p>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <div className={`inline-flex w-fit px-3 py-1 rounded-full bg-gradient-to-r ${s.gradient} border border-primary/10 text-primary text-xs font-body font-semibold mb-4`}>
                        {s.title}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">{s.title}</h2>
                      <p className="text-muted-foreground font-body mb-8 leading-relaxed">{s.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {s.services.map((svc, si) => (
                          <motion.div
                            key={svc}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * si }}
                            className="flex items-center gap-2.5 text-sm text-secondary-foreground/80 font-body"
                          >
                            <CheckCircle2 className="size-4 text-primary shrink-0" />
                            {svc}
                          </motion.div>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary font-body group/link w-fit"
                      >
                        Get Started <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
              Our <span className="text-gradient-violet">Process</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center group"
              >
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-primary/20">
                  <step.icon className="size-8 text-primary" />
                </div>
                <span className="text-5xl font-bold font-display text-primary/10 absolute -top-2 left-1/2 -translate-x-1/2">{step.step}</span>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI showcase section */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-body mb-4">
                <Bot className="size-3" /> AI Innovation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
                Powered by <span className="text-gradient-violet">AI Innovation</span>
              </h2>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Our AI solutions are not off-the-shelf. We build custom, intelligent systems tailored to your specific business challenges — from automating customer support to optimizing entire workflows.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Reduce operational costs by up to 50%", desc: "Through intelligent automation" },
                  { text: "24/7 AI-powered customer engagement", desc: "Never miss a customer inquiry" },
                  { text: "Seamless integration with existing systems", desc: "Zero disruption to your operations" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground font-body">{item.text}</p>
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
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-violet">
                <img src={aiImg} alt="AI Automation" className="w-full h-auto object-cover aspect-square" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-xl border border-border rounded-xl p-3 shadow-violet"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  <span className="text-xs font-body font-medium text-foreground">AI-Powered</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}