import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Shield, Cpu, Users, Database } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const certifications = [
  { name: "AWS Cloud Practitioner", provider: "AWS", icon: Cloud, color: "#f97316", image: "/uploads/aws-cloud-practitioner.png" },
  { name: "Azure Fundamentals", provider: "Microsoft", icon: Cloud, color: "#3b82f6", image: "/uploads/azure-fundamentals.png" },
  { name: "Google AI Essentials", provider: "Google", icon: Cpu, color: "#22c55e", image: "/uploads/google-ai-essentials.png" },
  { name: "Intro to Cybersecurity", provider: "Cisco", icon: Shield, color: "#ef4444", image: "/uploads/intro-to-cybersecurity.png" },
  { name: "SQL (Basic)", provider: "HackerRank", icon: Database, color: "#a855f7", image: "/uploads/sql-basic.png" },
  { name: "Java (Basic)", provider: "HackerRank", icon: Award, color: "#f59e0b", image: "/uploads/java-basic.png" },
  { name: "Problem Solving (Basic)", provider: "HackerRank", icon: Cpu, color: "#10b981", image: "/uploads/problem-solving-basic.png" },
  { name: "Developing Soft Skills", provider: "NPTEL", icon: Users, color: "#ec4899", image: "/uploads/developing-soft-skills.png" }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12 px-6 relative z-10 w-full min-h-[60vh] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Certifications</h2>
        <p className="text-lg text-muted-foreground">Professional certifications and accomplishments.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div 
                  className="relative border border-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center justify-center shadow-lg cursor-pointer group transition-all duration-500 hover:-translate-y-2 h-48 overflow-hidden"
                >
                  {/* Certificate Image Background (Reveals on Hover) */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-cover bg-center bg-no-repeat scale-125 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cert.image})` }}
                  />
                  
                  {/* Hover Overlay (Lighter on hover) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-90 group-hover:pointer-events-none">
                    <cert.icon className="w-10 h-10 mb-4" style={{ color: cert.color }} />
                    <h3 className="text-sm md:text-base font-bold text-center text-white/90 mb-2 line-clamp-2">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{cert.provider}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                <div className="flex justify-center items-center">
                  <img
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
};