import React from "react";
import { motion } from "framer-motion";
import { Zap, Palette, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast, responsive websites that work on all devices",
  },
  {
    icon: Palette,
    title: "Modern, clean UI/UX design focused on users",
  },
  {
    icon: DollarSign,
    title: "Affordable pricing",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Why Webify?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Webify builds modern, clean, and responsive websites designed to help businesses grow online. We focus on simplicity, performance, and user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <Icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-foreground text-lg font-semibold">
                {benefit.title}
              </h3>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
