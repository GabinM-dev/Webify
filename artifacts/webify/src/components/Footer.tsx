import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <img
                src="/images/Webify.png"
                alt="Webify Logo"
                className="w-18 h-18 rounded-lg object-cover group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">Webify</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              We help local businesses grow online with sleek, professional websites — built by students who are passionate about design.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Custom Web Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile Optimization</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brand Identity</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Why Webify?</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Webify Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
