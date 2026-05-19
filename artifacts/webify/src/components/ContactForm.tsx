import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Build Something <span className="text-primary">Extraordinary</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Ready to elevate your business? Send us an email and we’ll respond within 6 hours. Let’s discuss your vision.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground">Email Us</h4>
                <p className="text-muted-foreground">gabin.m2009@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">Response Time</h4>
                <p className="text-muted-foreground">Within 6 hours</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-background p-10 rounded-2xl border border-border shadow-2xl text-center"
          >

            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Webify
            </h3>

            <a href="mailto:gabin.m2009@gmail.com?subject=Webify%20Project%20Inquiry&body=Hi%20Webify%2C%20I%20want%20a%20website%20for%20my%20business.">
              <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                Send Email
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mt-4">
              ⏱ We respond within 6 hours
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}