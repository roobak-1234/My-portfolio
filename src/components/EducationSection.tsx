import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in AI & DS",
      institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
      year: "Expected 2027",
      cgpa: "8.03",
      icon: GraduationCap,
      current: true
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "I.V.L Matric Hr. Sec. School, Dharmapuri",
      year: "2023",
      cgpa: "92.6%",
      icon: Award,
      current: false
    }
  ];

  return (
    <section id="education" className="py-12 px-6 relative z-10 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Education</h2>
          <p className="text-lg text-muted-foreground">
             Academic background and credentials
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
              className="relative group z-10"
            >
              <div className={`rounded-2xl p-8 transition-all duration-300 border border-white/10 hover:border-white/20 hover:bg-white/5 relative overflow-hidden backdrop-blur-sm ${
                edu.current ? 'shadow-[0_0_20px_rgba(255,255,255,0.05)] border-white/25' : ''
              }`}>
                {/* Background scanning effect */}
                <div className="absolute top-0 bottom-0 left-[-100%] w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />

                <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                  {/* Icon Node */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${
                      edu.current ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/20'
                    } border-2 flex items-center justify-center backdrop-blur-md`}>
                      <edu.icon className={`w-8 h-8 ${edu.current ? 'text-primary drop-shadow-[0_0_8px_rgba(71,218,255,1)]' : 'text-white/50'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold font-mono text-white tracking-tight">{edu.degree}</h3>
                      {edu.current && (
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/50 rounded-full text-xs font-mono font-medium shadow-[0_0_10px_rgba(71,218,255,0.4)] mt-2 md:mt-0">
                          In Progress
                        </span>
                      )}
                    </div>
                    
                    <p className={`text-lg mb-3 ${edu.current ? 'text-primary/90' : 'text-white/60'}`}>{edu.institution}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground font-mono text-sm">
                      <span className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${edu.current ? 'bg-primary animate-pulse' : 'bg-white/30'}`} />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${edu.current ? 'bg-primary' : 'bg-white/30'}`} />
                        {edu.degree.includes('B.Tech') ? 'CGPA' : 'Score'}: <span className="text-white font-bold ml-1">{edu.cgpa}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};