import React, { useRef } from 'react';
import { Brain, BarChart3, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "Codsoft (Virtual)",
    dates: "June 2024",
    description: "Developed AI-based solutions, collaborated on AI model design, and gained hands-on experience in applied machine learning concepts during a 4-week internship.",
    icon: Brain,
    color: "#47daff",
    certificate: "/lovable-uploads/codsoft-certificate.png"
  },
  {
    title: "Data Science Intern",
    company: "Oasis Infobyte (AICTE OIB-SIP)",
    dates: "May 2024 - June 2024",
    description: "Engineered data preprocessing and visualization pipelines, implemented basic machine learning models for insights, and applied data science techniques to solve project goals.",
    icon: BarChart3,
    color: "#a78bfa",
    certificate: "/lovable-uploads/oasis-certificate.png"
  }
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-12 px-6 relative z-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and internships.</p>
        </motion.div>

        <div className="relative">
          {/* Static Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          <div className="space-y-20 relative z-20">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row">
                  
                  {/* Left Side (Desktop) */}
                  <div className={`md:w-[45%] w-full pl-24 md:pl-0 ${isEven ? 'md:text-right' : 'md:order-3 md:text-left'} order-2`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className={`p-6 rounded-2xl cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all border border-white/10 group ${isEven ? 'md:mr-4' : 'md:ml-4'} relative overflow-hidden backdrop-blur-sm`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                            <p className="text-primary/80 font-mono text-sm mb-3">{exp.company}</p>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">{exp.description}</p>
                            
                            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground font-mono">
                              {exp.dates}
                            </span>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                          <div className="flex justify-center items-center">
                            <img
                              src={exp.certificate}
                              alt={`${exp.title} Certificate`}
                              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border-2 border-primary/50 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] md:order-2">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(71,218,255,0.3)]"
                    >
                      <exp.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  {/* Right Side (Empty space for alternating layout on Desktop) */}
                  <div className={`md:w-[45%] hidden md:block ${isEven ? 'order-3' : 'order-1'}`} />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};