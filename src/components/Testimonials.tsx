import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Lumina Studios",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Mani was an absolute game-changer. The brand identity he crafted elevated our entire presence and tripled our engagement.",
    accentColor: "from-primary to-[hsl(35,95%,55%)]",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, Velocity Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Incredible attention to detail. The UI/UX design exceeded every expectation and our users absolutely love the new experience.",
    accentColor: "from-[hsl(260,80%,65%)] to-[hsl(290,70%,55%)]",
  },
  {
    id: 3,
    name: "Emily Ross",
    role: "Marketing Director, Verde",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Mani transformed our packaging design from ordinary to extraordinary. Sales increased 40% within the first quarter after launch.",
    accentColor: "from-[hsl(170,70%,45%)] to-[hsl(140,60%,50%)]",
  },
  {
    id: 4,
    name: "James Parker",
    role: "Creative Lead, Echo Events",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The festival branding was phenomenal — bold, vibrant, and unforgettable. Mani has an unmatched eye for creating visual stories.",
    accentColor: "from-[hsl(330,80%,60%)] to-[hsl(350,90%,55%)]",
  },
];

const StarRating = ({ rating, delay }: { rating: number; delay: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, delay: delay + i * 0.08, type: "spring", stiffness: 260 }}
      >
        <Star
          className={`w-4 h-4 ${
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          }`}
        />
      </motion.div>
    ))}
  </div>
);

const TestimonialCard = ({
  testimonial,
  index,
  isInView,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border glow */}
      <motion.div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${testimonial.accentColor} opacity-0 blur-sm`}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border overflow-hidden h-full">
        {/* Quote icon */}
        <motion.div
          className="absolute top-4 right-4 text-muted-foreground/10"
          animate={{ rotate: isHovered ? 12 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Quote className="w-12 h-12" />
        </motion.div>

        {/* Stars */}
        {isInView && <StarRating rating={testimonial.rating} delay={0.15 * index + 0.3} />}

        {/* Review text */}
        <p className="text-muted-foreground mt-4 mb-6 leading-relaxed text-sm md:text-base relative z-10">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <motion.div
            className={`relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-transparent`}
            animate={{
              boxShadow: isHovered
                ? "0 0 0 2px hsl(var(--primary))"
                : "0 0 0 2px transparent",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm">
              {testimonial.name}
            </h4>
            <p className="text-muted-foreground text-xs">{testimonial.role}</p>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${testimonial.accentColor}`}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
