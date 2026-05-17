import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-bold text-foreground font-mono">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Satisfied Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Response Time" },
];

export default function Counters() {
  return (
    <section className="py-20 relative z-10 border-y border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center justify-center"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
