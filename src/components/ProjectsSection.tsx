import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Application Mobile Santé",
    tools: "Figma · Protopie · User Testing",
    category: "UX/UI Design",
    color: "from-[hsl(270,60%,70%)] to-[hsl(190,70%,60%)]",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Dashboard Analytics IA",
    tools: "Figma · Spline · React",
    category: "Design System",
    color: "from-[hsl(190,70%,60%)] to-[hsl(50,70%,65%)]",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Plateforme E-learning",
    tools: "Figma · Midjourney · Framer",
    category: "Web Design",
    color: "from-[hsl(320,50%,65%)] to-[hsl(270,60%,70%)]",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Identité Visuelle Startup",
    tools: "Illustrator · Figma · Blender",
    category: "Branding",
    color: "from-[hsl(50,70%,60%)] to-[hsl(320,50%,65%)]",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Expérience 3D Interactive",
    tools: "Spline · Three.js · GSAP",
    category: "Creative Dev",
    color: "from-[hsl(270,70%,65%)] to-[hsl(190,80%,55%)]",
    size: "md:col-span-1 md:row-span-1",
  },
];

const ProjectsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projets" className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-4">Travaux</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16">
            Projets sélectionnés
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1} className={project.size}>
              <motion.div
                className={`relative rounded-2xl h-full overflow-hidden cursor-pointer bg-gradient-to-br ${project.color} group`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500" />

                {/* Content shown on hover */}
                <AnimatePresence>
                  {hoveredIdx === i && (
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-6 z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs text-primary-foreground/70 tracking-widest uppercase mb-1">{project.category}</span>
                      <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{project.title}</h3>
                      <p className="text-xs text-primary-foreground/60">{project.tools}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Default label */}
                <div className="absolute top-4 left-4 z-0">
                  <span className="text-xs font-medium text-primary-foreground/80 tracking-wide">{project.category}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
