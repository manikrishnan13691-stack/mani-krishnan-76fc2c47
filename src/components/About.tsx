import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutAvatar from "@/assets/about-avatar.jpg";
import { Palette, PenTool, Layout, Camera, Film, Figma } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "12", label: "Awards Won" },
  ];

  const skills = [
    { icon: Palette, name: "Brand Identity", level: 95, tools: "Logo, Color Systems, Guidelines" },
    { icon: PenTool, name: "Illustration", level: 88, tools: "Digital Art, Vector, Icons" },
    { icon: Layout, name: "UI/UX Design", level: 92, tools: "Web, Mobile, Prototyping" },
    { icon: Camera, name: "Photo Editing", level: 85, tools: "Retouching, Compositing, Color" },
    { icon: Film, name: "Motion Graphics", level: 80, tools: "Animation, Video, After Effects" },
    { icon: Figma, name: "Design Systems", level: 90, tools: "Components, Tokens, Documentation" },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <img
                src={aboutAvatar}
                alt="SK - Graphic Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Turning Vision Into{" "}
              <span className="text-gradient">Visual Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate graphic designer based in Chennai, specializing in 
              brand identity, digital design, and creative direction. With over 4 years 
              of experience, I help businesses tell their stories through compelling 
              visual narratives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              My approach combines strategic thinking with artistic creativity, ensuring 
              every design not only looks beautiful but also achieves its intended purpose. 
              I believe in the power of design to transform brands and connect with audiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="font-display font-bold text-3xl md:text-4xl text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="lg:col-span-2 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Expertise
            </p>
            <h3 className="font-display font-bold text-3xl md:text-4xl">
              My <span className="text-gradient">Skills</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                data-cursor="pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground">{skill.name}</h4>
                      <p className="text-muted-foreground text-xs">{skill.tools}</p>
                    </div>
                  </div>
                  <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-end mt-1.5">
                    <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
