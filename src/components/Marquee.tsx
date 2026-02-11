import { motion } from "framer-motion";

const Marquee = () => {
  const services = [
    { text: "Brand Identity", outline: false },
    { text: "Logo Design", outline: true },
    { text: "UI/UX Design", outline: false },
    { text: "Motion Graphics", outline: true },
    { text: "Print Design", outline: false },
    { text: "Social Media", outline: true },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-accent/8 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Top row - scrolls left */}
      <div className="relative mb-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
        >
          {[...services, ...services].map((item, index) => (
            <span
              key={`top-${index}`}
              className={`font-display font-bold text-5xl md:text-7xl lg:text-8xl mx-4 md:mx-8 transition-all duration-300 ${
                item.outline
                  ? "text-transparent [-webkit-text-stroke:1.5px_hsl(var(--primary))] hover:text-primary hover:[-webkit-text-stroke:0px]"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              {item.text}
            </span>
          ))}
          {[...services, ...services].map((item, index) => (
            <span
              key={`top-dup-${index}`}
              className={`font-display font-bold text-5xl md:text-7xl lg:text-8xl mx-4 md:mx-8 transition-all duration-300 ${
                item.outline
                  ? "text-transparent [-webkit-text-stroke:1.5px_hsl(var(--primary))] hover:text-primary hover:[-webkit-text-stroke:0px]"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 my-6">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Bottom row - scrolls right */}
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", 0] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {[...services, ...services].map((item, index) => (
            <span
              key={`bot-${index}`}
              className={`font-display font-bold text-5xl md:text-7xl lg:text-8xl mx-4 md:mx-8 transition-all duration-300 ${
                !item.outline
                  ? "text-transparent [-webkit-text-stroke:1.5px_hsl(var(--muted-foreground))] hover:text-primary hover:[-webkit-text-stroke:0px]"
                  : "text-muted-foreground/50 hover:text-primary"
              }`}
            >
              {item.text}
            </span>
          ))}
          {[...services, ...services].map((item, index) => (
            <span
              key={`bot-dup-${index}`}
              className={`font-display font-bold text-5xl md:text-7xl lg:text-8xl mx-4 md:mx-8 transition-all duration-300 ${
                !item.outline
                  ? "text-transparent [-webkit-text-stroke:1.5px_hsl(var(--muted-foreground))] hover:text-primary hover:[-webkit-text-stroke:0px]"
                  : "text-muted-foreground/50 hover:text-primary"
              }`}
            >
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
