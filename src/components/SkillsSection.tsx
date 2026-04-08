import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'C++', 'JavaScript', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Core Concepts',
    skills: ['Machine Learning', 'Deep Learning', 'DBMS', 'Exploratory Data Analysis', 'Data Structures and Algorithms']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Docker', 'Git/GitHub']
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Spring Boot']
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 relative min-h-[60vh] flex flex-col items-center justify-center px-4 z-10 w-full">
      <div className="text-center mb-16 z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto backdrop-blur-sm p-2 rounded">
          Technical competencies and areas of expertise.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(71,218,255,0.05)]"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-card/60 text-white border border-primary/10 text-sm md:text-base whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};