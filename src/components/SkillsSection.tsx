import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

export const SkillsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass-effect p-6 rounded-2xl interactive-hover ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`flex items-center p-3 bg-secondary/50 rounded-lg ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` 
                    }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};