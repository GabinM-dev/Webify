import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, Smartphone, PenTool, Layout, Wrench, LineChart } from "lucide-react";

const services = [
  {
    title: "Custom Website Design",
    description: "We create websites from the ground up that are built specifically around your brand, audience, and goals.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Mobile Optimization",
    description: "We ensure your website looks and works perfectly on all devices, from phones to tablets and desktops.",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: "Brand Identity",
    description: "We design the visual style of your brand so it looks consistent, professional, and instantly recognizable.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "UI/UX Design",
    description: "We design user-friendly interfaces that make your website easy to navigate and visually engaging.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Sales Tracking",
    description: "Coming Soon.",
    icon: <LineChart className="w-8 h-8" />,
  },
  {
    title: "AI Assistant",
    description: "Coming Soon.",
    icon: <Wrench className="w-8 h-8" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We design and build modern digital solutions to help businesses grow, improve their online presence, and create better user experiences.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}