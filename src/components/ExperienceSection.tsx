import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Brain, BarChart3 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const ExperienceSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Codsoft (Virtual)",
      dates: "June 2024",
      description: "Developed AI-based solutions, collaborated on AI model design, and gained hands-on experience in applied machine learning concepts during a 4-week internship.",
      icon: Brain,
      color: "text-primary",
      certificate: "/lovable-uploads/codsoft-certificate.png"
    },
    {
      title: "Data Science Intern (AICTE OIB-SIP Program)",
      company: "Oasis Infobyte",
      dates: "May 2024 - June 2024",
      description: "Engineered data preprocessing and visualization pipelines, implemented basic machine learning models for insights, and applied data science techniques to solve project goals.",
      icon: BarChart3,
      color: "text-accent",
      certificate: "/lovable-uploads/oasis-certificate.png"
    }
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <section id="experience" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Professional journey in AI and Data Science
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 w-1 timeline-line ${isVisible ? 'animate-draw-line' : 'h-0'}`} 
                 style={{ height: isVisible ? '100%' : '0%' }} />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex items-start ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 400}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center glow-primary">
                      <exp.icon className={`w-8 h-8 ${exp.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <Dialog>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                          <div className="ml-8 glass-effect p-6 rounded-2xl flex-1 interactive-hover cursor-pointer">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                              </div>
                              <div className="text-sm text-muted-foreground bg-accent/20 px-3 py-1 rounded-full">
                                {exp.dates}
                              </div>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                          </div>
                        </DialogTrigger>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="p-2 max-w-xs">
                        <div className="text-center">
                          <img
                            src={exp.certificate}
                            alt={`${exp.title} Certificate Preview`}
                            className="w-48 h-32 object-contain rounded-md mb-2"
                          />
                          <p className="font-medium text-sm">{exp.title}</p>
                          <p className="text-xs text-muted-foreground">{exp.company}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    <DialogContent className="max-w-2xl w-full max-h-[70vh] p-4">
                      <DialogHeader className="pb-2">
                        <DialogTitle className="text-lg">{exp.title} - {exp.company}</DialogTitle>
                      </DialogHeader>
                      <div className="flex justify-center">
                        <img
                          src={exp.certificate}
                          alt={`${exp.title} Certificate`}
                          className="max-w-full max-h-[50vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};