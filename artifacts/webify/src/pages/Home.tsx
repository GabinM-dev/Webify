import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Counters from "@/components/Counters";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Counters />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
