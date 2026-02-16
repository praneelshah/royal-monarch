import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

import portfolioMango from "@/assets/portfolio-mango.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioDrinks from "@/assets/portfolio-drinks.png";
import portfolioDental from "@/assets/portfolio-dental.png";
import portfolioCursor from "@/assets/portfolio-cursor.png";
import portfolioAceternity from "@/assets/portfolio-aceternity.png";
import portfolioInterception from "@/assets/portfolio-interception.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";

// 8 unique images split across 2 rows, no repeats
const row1 = [
  { title: "AI Automation", link: "#", thumbnail: aiAutomation },
  { title: "Interception", link: "#", thumbnail: portfolioInterception },
  { title: "Dos Mezclas", link: "#", thumbnail: portfolioDrinks },
  { title: "Precision Smile", link: "#", thumbnail: portfolioDental },
];
const row2 = [
  { title: "Cursor", link: "#", thumbnail: portfolioCursor },
  { title: "Aceternity UI", link: "#", thumbnail: portfolioAceternity },
  { title: "Wedding RSVP", link: "#", thumbnail: portfolioWedding },
  { title: "Savani Farms", link: "#", thumbnail: portfolioMango },
];

function ProductCard({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-64 w-[28rem] relative flex-shrink-0 rounded-lg overflow-hidden"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl h-full w-full">
        <img
          src={product.thumbnail}
          className="object-cover object-center h-full w-full rounded-lg"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-background rounded-lg pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-foreground font-body">
        {product.title}
      </h2>
    </motion.div>
  );
}

export default function HeroParallax() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-400, 200]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[250vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-background"
    >
      <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
        <h2 className="text-2xl md:text-7xl font-bold text-foreground font-display">
          The Ultimate <br /> <span className="text-gradient-violet">Development Studio</span>
        </h2>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-muted-foreground font-body">
          We build exceptional products with the latest technologies and frameworks.
          Our team of passionate developers and designers delivers solutions that transform businesses.
        </p>
      </div>

      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-4">
          {row1.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-4 space-x-10">
          {row2.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
