import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, PenTool, Layout, Wrench, LineChart } from "lucide-react";

const services = [
  {
    title: "Custom Website Design",
    description: "Tailored websites built from scratch to perfectly match your brand and business goals.",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mobile Optimization",
    description: "Responsive designs ensuring your site looks flawless and functions perfectly on every device.",
    icon: <Smartphone className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Brand Identity",
    description: "Cohesive visual systems including logo design, color palettes, and typography.",
    icon: <PenTool className="w-8 h-8 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive user interfaces and seamless experiences that keep your customers engaged.",
    icon: <Layout className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support, updates, and security monitoring to keep your site running smoothly.",
    icon: <Wrench className="w-8 h-8 text-primary" />,
  },
  {
    title: "SEO & Analytics",
    description: "Search engine optimization and data tracking to help you reach more customers.",
    icon: <LineChart className="w-8 h-8 text-secondary" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
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
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive digital solutions designed to elevate your local business. We blend creativity with modern technology.
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
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
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
