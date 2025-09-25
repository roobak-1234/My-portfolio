import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Cloud, Shield, Cpu, Users, Database } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const CertificationsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      icon: Cloud,
      color: "text-orange-500",
      image: "/lovable-uploads/7dd95db7-4b58-494a-9028-4c918d8764a7.png"
    },
    {
      name: "Azure Fundamentals",
      provider: "Microsoft",
      icon: Cloud,
      color: "text-blue-500",
      image: "/lovable-uploads/c4ad2300-ee66-49d5-b79c-893df23a76c7.png"
    },
    {
      name: "Google AI Essentials",
      provider: "Google",
      icon: Cpu,
      color: "text-green-500",
      image: "/lovable-uploads/005c8822-2f25-45ee-9ed8-cd2c0ad35509.png"
    },
    {
      name: "Intro to Cybersecurity",
      provider: "Cisco",
      icon: Shield,
      color: "text-red-500",
      image: "/lovable-uploads/13cbb9b6-ca81-4b25-80d1-7621feef1799.png"
    },
    {
      name: "SQL (Basic)",
      provider: "HackerRank",
      icon: Database,
      color: "text-purple-500",
      image: "/lovable-uploads/8de3a9e0-fe60-4323-8604-671e5e1143a9.png"
    },
    {
      name: "Java (Basic)",
      provider: "HackerRank",
      icon: Award,
      color: "text-amber-500",
      image: "/lovable-uploads/28cb5318-4b47-4b78-87c8-4c56496b0523.png"
    },
    {
      name: "Problem Solving (Basic)",
      provider: "HackerRank",
      icon: Cpu,
      color: "text-emerald-500",
      image: "/lovable-uploads/06165a57-198d-409a-840e-275c0df49163.png"
    },
    {
      name: "Developing Soft Skills and Personality",
      provider: "NPTEL",
      icon: Users,
      color: "text-pink-500",
      image: "/lovable-uploads/c09cfcbe-52c5-43e1-ac0a-4995d2075acb.png"
    }
  ];

  return (
    <TooltipProvider delayDuration={300}>
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
              <Dialog key={cert.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      <div
                        className={`group glass-effect rounded-2xl p-6 interactive-hover text-center cursor-pointer ${
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
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="p-2 max-w-xs">
                    <div className="text-center">
                      <img
                        src={cert.image}
                        alt={`${cert.name} Certificate Preview`}
                        className="w-48 h-32 object-contain rounded-md mb-2"
                      />
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.provider}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
                <DialogContent className="max-w-2xl w-full max-h-[70vh] p-4">
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-lg">{cert.name} - {cert.provider}</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      className="max-w-full max-h-[50vh] object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};