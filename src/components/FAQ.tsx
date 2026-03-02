import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import faqImg from "@/assets/faq-illustration.jpg";

const faqs = [
  {
    question: "What is your design process like?",
    answer:
      "My process starts with understanding your brand, audience, and goals. I then move through research, concept development, design iterations, and final delivery—keeping you involved at every stage.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A logo or brand identity usually takes 2–3 weeks, while a full website design can take 4–6 weeks. I'll provide a clear timeline before we begin.",
  },
  {
    question: "What tools and software do you use?",
    answer:
      "I primarily work with Adobe Photoshop, Illustrator, After Effects, Figma, and Premiere Pro—depending on the project's needs.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Absolutely. Every project includes revision rounds so we can refine the design until it's exactly right. I believe great work comes from collaboration.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "Yes! I work with clients worldwide. We stay connected through video calls, emails, and project management tools to ensure a smooth workflow.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "I typically require a 50% deposit upfront, with the remaining balance due upon project completion. Payment plans can be arranged for larger projects.",
  },
];

const FAQItem = ({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="border-b border-border"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="font-display font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
          {faq.question}
        </span>
        <motion.span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.span>
      </button>
      <motion.div
        className="overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5 md:pb-6 pr-12">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[140px]" />
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
            FAQ
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-4">
            Find Answers <span className="text-gradient">Here</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mt-5">
            Whether you're curious about the design process, need guidance on project
            timelines, or want to know more—I've got you covered.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Image */}
          <motion.div
            className="relative sticky top-32"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src={faqImg}
                alt="FAQ illustration"
                className="w-full h-[350px] md:h-[480px] object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-14 h-14 bg-primary/10 rounded-xl blur-sm"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right — FAQ Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
