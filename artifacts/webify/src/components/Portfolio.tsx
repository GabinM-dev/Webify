import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aero Logbook",
    category: "Flight Tracking App",
    image: "/images/aero-logbook.png",
    github: "https://github.com/GabinM-dev/Aero-Logbook",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-background relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Our Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore some of our latest digital projects and
              creative builds.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>

                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>

                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}