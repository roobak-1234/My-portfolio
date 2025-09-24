import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Cloud, Shield, Cpu, Users, Database } from 'lucide-react';

export const CertificationsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      icon: Cloud,
      color: "text-orange-500"
    },
    {
      name: "Azure Fundamentals",
      provider: "Microsoft",
      icon: Cloud,
      color: "text-blue-500"
    },
    {
      name: "Google AI Essentials",
      provider: "Google",
      icon: Cpu,
      color: "text-green-500"
    },
    {
      name: "Intro to Cybersecurity",
      provider: "Cisco",
      icon: Shield,
      color: "text-red-500"
    },
    {
      name: "SQL (Basic)",
      provider: "HackerRank",
      icon: Database,
      color: "text-purple-500"
    },
    {
      name: "Java (Basic)",
      provider: "HackerRank",
      icon: Award,
      color: "text-amber-500"
    },
    {
      name: "Problem Solving (Basic)",
      provider: "HackerRank",
      icon: Cpu,
      color: "text-emerald-500"
    },
    {
      name: "Developing Soft Skills and Personality",
      provider: "NPTEL",
      icon: Users,
      color: "text-pink-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`group glass-effect rounded-2xl p-6 interactive-hover text-center ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.provider}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};