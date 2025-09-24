import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

export const SkillsSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [sectionTransition, setSectionTransition] = useState(false);

  useEffect(() => {
    if (isVisible && !sectionTransition) {
      setSectionTransition(true);
    }
  }, [isVisible, sectionTransition]);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C++", "Java", "JavaScript", "HTML/CSS", "SQL"],
      color: "text-primary"
    },
    {
      title: "Core Concepts",
      icon: Database,
      skills: ["Data Structures", "Algorithms", "DBMS", "Computer Networks"],
      color: "text-accent"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["React.js", "Spring Boot (REST API)"],
      color: "text-primary"
    },
    {
      title: "Developer Tools & Cloud",
      icon: Cloud,
      skills: ["AWS", "Git", "Docker"],
      color: "text-accent"
    }
  ];

  return (
    <>
      {/* Section Divider with Animation */}
      <div className="section-divider h-16"></div>
      
      <section id="skills" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div 
            ref={ref} 
            className={`text-center mb-16 ${sectionTransition ? 'animate-section-transition' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`glass-effect p-6 rounded-2xl interactive-hover glow-secondary ${
                  sectionTransition ? 'animate-float-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <category.icon className={`w-8 h-8 ${category.color} mr-3 animate-sparkle`} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center p-3 bg-secondary/50 rounded-lg transition-all duration-300 hover:bg-secondary/70 ${
                        sectionTransition ? 'animate-scale-in' : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` 
                      }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-sparkle" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};