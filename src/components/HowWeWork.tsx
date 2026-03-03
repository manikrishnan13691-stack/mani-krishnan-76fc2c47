import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, Layers, Rocket } from "lucide-react";
import howWeWorkImg from "@/assets/how-we-work.jpg";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your vision, audience, and goals through in-depth research and strategy sessions.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Concept & Design",
    description:
      "Ideas take shape through moodboards, wireframes, and iterative design explorations until we land on the perfect direction.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Refine & Build",
    description:
      "Every detail is polished—typography, color, motion—and assets are built to production-ready standards.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deliver final files, provide guidelines, and offer ongoing support to ensure a flawless rollout.",
    icon: Rocket,
  },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.04] blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-mono tracking-[0.3em] uppercase text-xs mb-5">
            Process
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            How We <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Split layout: Timeline left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <motion.div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            <div className="space-y-14 md:space-y-18">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    className="relative flex gap-8 md:gap-12 items-start"
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {/* Dot on timeline */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-border bg-background flex items-center justify-center"
                      whileInView={{
                        borderColor: "hsl(var(--primary))",
                      }}
                      viewport={{ once: true, margin: "-40%" }}
                      transition={{ duration: 0.4, delay: 0.2 * i + 0.3 }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <div className="pt-1 md:pt-3">
                      <span className="text-primary font-mono text-sm tracking-widest">
                        {step.number}
                      </span>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — Creative Image */}
          <motion.div
            className="relative sticky top-32 hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src={howWeWorkImg}
                alt="Creative design process illustration"
                className="w-full h-[500px] md:h-[600px] object-cover"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-transparent" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-3 -right-3 w-14 h-14 bg-primary/10 rounded-xl blur-sm"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -right-6 w-10 h-10 border border-primary/15 rounded-lg"
              animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
