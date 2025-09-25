import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github, Smartphone, Brain, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ProjectsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Multi-User AR Application",
      description: "A collaborative Augmented Reality application for multiple users to interact with shared virtual objects in a real-world environment. Implemented real-time synchronization using Photon Engine.",
      techStack: ["Unity", "C#", "Photon Engine", "AR Foundation"],
      links: {
        demo: "https://68be97147e1db67d41344aae--areality.netlify.app/",
        github: "https://github.com/roobak-1234"
      },
      icon: Smartphone,
      gradient: "from-primary to-accent"
    },
    {
      title: "Iris Classification with ML",
      description: "Developed a machine learning model to classify iris flower species based on their sepal and petal measurements. Implemented algorithms like K-Nearest Neighbors to achieve high accuracy.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      links: {
        github: "https://github.com/roobak-1234"
      },
      icon: Brain,
      gradient: "from-accent to-primary"
    },
    {
      title: "Sales Prediction using ML",
      description: "Built a predictive model to forecast future product sales using historical data. Employed time-series analysis and regression techniques to provide actionable insights for inventory management.",
      techStack: ["Python", "TensorFlow", "Pandas", "Seaborn"],
      links: {
        github: "https://github.com/roobak-1234"
      },
      icon: TrendingUp,
      gradient: "from-primary/80 to-accent/80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, ML, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass-effect rounded-2xl overflow-hidden interactive-hover ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} mr-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.demo && project.title === "Multi-User AR Application" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg interactive-hover text-sm">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0">
                        <DialogHeader className="p-4 pb-2 border-b">
                          <DialogTitle className="text-lg">{project.title} - Live Demo</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 w-full h-[calc(90vh-60px)] p-4">
                          <iframe
                            src={project.links.demo}
                            className="w-full h-full rounded-lg border-0"
                            title={`${project.title} Demo`}
                            allow="camera; microphone; gyroscope; accelerometer; xr-spatial-tracking"
                            style={{ 
                              transform: 'scale(1)', 
                              transformOrigin: 'top left',
                              overflow: 'hidden'
                            }}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg interactive-hover text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  ) : null}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg interactive-hover text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};