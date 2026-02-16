import { motion } from "framer-motion";
import { Users, Bot, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    icon: Users,
    title: "Talent Solutions",
    description:
      "We don't just send resumes. We deliver the right people for the right requirement.",
    features: [
      "Direct client staffing",
      "Contract & full-time placements",
      "Remote teams & staff augmentation",
      "Full-cycle recruiting",
    ],
    gradient: "from-violet-500/20 via-primary/10 to-transparent",
    iconBg: "bg-violet-500/20",
    borderHover: "hover:border-violet-400/40",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Run with less manual effort, lower cost, and higher efficiency using AI.",
    features: [
      "AI-powered customer support",
      "Business process automation",
      "Workflow optimization",
      "Custom AI solutions",
    ],
    gradient: "from-primary/20 via-violet-light/10 to-transparent",
    iconBg: "bg-primary/20",
    borderHover: "hover:border-primary/40",
  },
  {
    icon: Cloud,
    title: "Technology & Cloud",
    description:
      "Get more performance and value from your technology while reducing costs.",
    features: [
      "Custom software development",
      "Cloud architecture & migration",
      "DevOps & infrastructure",
      "Cloud cost optimization",
    ],
    gradient: "from-deep-blue/30 via-primary/10 to-transparent",
    iconBg: "bg-deep-blue/30",
    borderHover: "hover:border-deep-blue/50",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 ${service.borderHover}`}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Animated top border glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className={`size-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <service.icon className="size-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold font-display text-foreground mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground font-body mb-8 leading-relaxed">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-8 flex-1">
          {service.features.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.08 }}
              className="text-sm text-secondary-foreground/80 font-body flex items-center gap-3"
            >
              <span className="size-1.5 rounded-full bg-primary shrink-0" />
              {f}
            </motion.li>
          ))}
        </ul>

        {/* CTA link */}
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary font-body group/link"
        >
          Learn more
          <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="solutions" className="py-28 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-body mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
            Our <span className="text-gradient-violet">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body text-lg">
            Three powerful pillars designed to scale your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-violet text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity"
          >
            Explore All Solutions
            <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
