import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const education = [
    {
      degree: "B.Tech in AI & DS",
      institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
      year: "Expected 2027",
      cgpa: "8.05",
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
    <section id="education" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Education</h2>
          <p className="text-lg text-muted-foreground">
            Academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`group relative ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className={`glass-effect rounded-2xl p-8 interactive-hover ${
                edu.current ? 'ring-2 ring-primary glow-primary' : ''
              }`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${
                      edu.current ? 'bg-primary' : 'bg-accent'
                    } flex items-center justify-center`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold mb-2 md:mb-0">{edu.degree}</h3>
                      {edu.current && (
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-lg text-accent mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {edu.degree.includes('B.Tech') ? 'CGPA' : 'Score'}: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};