import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const clients = [
  { name: "Lumina Studios", industry: "Entertainment", year: "2024", logo: "LS" },
  { name: "Velocity Tech", industry: "Technology", year: "2023", logo: "VT" },
  { name: "Verde Organics", industry: "Lifestyle", year: "2024", logo: "VO" },
  { name: "Echo Events", industry: "Events", year: "2023", logo: "EE" },
  { name: "Apex Finance", industry: "Finance", year: "2022", logo: "AF" },
  { name: "Nova Creative", industry: "Agency", year: "2024", logo: "NC" },
  { name: "Zenith Labs", industry: "Healthcare", year: "2023", logo: "ZL" },
  { name: "Prism Media", industry: "Media", year: "2022", logo: "PM" },
];

const ClientCard = ({
  client,
  index,
  isInView,
}: {
  client: (typeof clients)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 40, rotate: isEven ? -2 : 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow backdrop */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-[hsl(35,95%,55%)] opacity-0 blur-md"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden h-full flex flex-col items-center text-center">
        {/* Animated corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-2xl"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Logo circle */}
        <motion.div
          className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-5 relative"
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered
              ? "0 0 30px hsl(15 90% 60% / 0.3)"
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <motion.span
            className="text-xl font-display font-bold text-gradient"
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {client.logo}
          </motion.span>

          {/* Orbiting dot */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-primary"
            animate={
              isHovered
                ? {
                    rotate: 360,
                    x: [0, 36, 0, -36, 0],
                    y: [-36, 0, 36, 0, -36],
                  }
                : { rotate: 0, x: 0, y: -36 }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </motion.div>

        {/* Name */}
        <h3 className="font-display font-bold text-lg text-foreground mb-1">
          {client.name}
        </h3>

        {/* Industry tag */}
        <motion.span
          className="inline-block text-xs font-medium tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-3"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {client.industry}
        </motion.span>

        {/* Year */}
        <p className="text-muted-foreground text-sm">Since {client.year}</p>

        {/* Bottom line accent */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "80%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Customers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="customers"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Customers
          </motion.p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Brands I've{" "}
            <span className="text-gradient">Worked With</span>
          </h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by ambitious brands across industries to deliver
            unforgettable creative experiences.
          </motion.p>
        </motion.div>

        {/* Staggered masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className={i % 3 === 1 ? "md:mt-8" : i % 3 === 2 ? "md:mt-4" : ""}
            >
              <ClientCard client={client} index={i} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "8+", label: "Industries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-gradient">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
