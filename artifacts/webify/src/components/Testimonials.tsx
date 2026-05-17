import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Webify completely transformed our online presence. Our old site was outdated and hard to use. Since launching the new site, our online reservations have doubled. These students know exactly what they're doing.",
    author: "Sarah Jenkins",
    role: "Owner, The Rustic Table",
  },
  {
    quote: "Working with Webify was incredibly smooth. They captured the high-energy vibe of our gym perfectly. The design is sleek, modern, and really sets us apart from competitors in the area.",
    author: "Marcus Thorne",
    role: "Founder, Iron Core Fitness",
  },
  {
    quote: "Professional, responsive, and incredibly talented. They delivered a website that exudes trust and authority for our law firm, but did it with a modern edge that we didn't even know we needed.",
    author: "Elena Rodriguez",
    role: "Partner, Smith & Associates",
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
            Client Stories
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <p className="text-foreground text-lg leading-relaxed relative z-10 mt-8 mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold font-mono text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
