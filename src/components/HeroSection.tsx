import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const HeroSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:roobakdinesh@gmail.com" },
    { icon: Phone, href: "tel:+918667292689" },
    { icon: Linkedin, href: "https://linkedin.com/in/roobak-kumar-m" },
    { icon: Github, href: "https://github.com/roobak-1234" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img 
              src="/lovable-uploads/Original_Photo-removebg-preview.png" 
              alt="Roobak Kumar M" 
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover object-top"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Roobak Kumar M
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light mb-4 text-foreground/90">
            Artificial Intelligence & Data Science Engineer
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
          
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/10 transition-all hover:bg-white/10 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                <Eye className="w-5 h-5" />
                <span>View Resume</span>
              </motion.button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[90vh] p-0 border-white/10 bg-black/95 backdrop-blur-2xl">
              <DialogHeader className="p-4 pb-2 border-b border-white/10 pr-12">
                <DialogTitle className="text-lg flex items-center justify-between text-white">
                  Resume
                  <a
                    href="https://drive.google.com/file/d/11comOVlcBKJxgDhMzDRYmvTtnoFOmbi_/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg text-sm transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 w-full h-[calc(90vh-70px)] p-2">
                <iframe
                  src="https://drive.google.com/file/d/11comOVlcBKJxgDhMzDRYmvTtnoFOmbi_/preview"
                  className="w-full h-full rounded-lg border border-white/10 bg-white/5"
                  title="Resume PDF"
                  allow="autoplay"
                />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};