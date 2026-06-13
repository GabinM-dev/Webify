import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitted(false);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
    } finally {
      setSubmitted(true);
      reset();
    }
  };

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
            className="flex-1 w-full bg-background p-10 rounded-2xl border border-border shadow-2xl"
          >

            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Contact Webify
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">First name</span>
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <span className="text-xs text-destructive">{errors.firstName.message}</span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-foreground">Last name</span>
                  <input
                    {...register("lastName", { required: "Last name is required" })}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <span className="text-xs text-destructive">{errors.lastName.message}</span>
                  )}
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Email</span>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="text-xs text-destructive">{errors.email.message}</span>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-foreground">What are you looking for?</span>
                <textarea
                  {...register("message", { required: "Please describe your project" })}
                  className="mt-2 min-h-[140px] w-full rounded-3xl border border-border bg-background px-4 py-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your website, branding, or project goals..."
                />
                {errors.message && (
                  <span className="text-xs text-destructive">{errors.message.message}</span>
                )}
              </label>

              {submitted && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  Thank you! Your message is on its way and we&apos;ll be in touch soon.
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              ⏱ We typically respond within 6 hours.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}