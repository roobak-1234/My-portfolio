import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Brain, TrendingUp, Database } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const projects = [
  {
    title: "Hospital Management Application",
    description: "A scalable full-stack healthcare management system enabling efficient handling of appointments, patient records, ambulance services, and staff operations. Designed role-based dashboards with secure authentication and built high-performance REST APIs using .NET 8 and MySQL for seamless data management.",
    techStack: [".NET 8", "React.js", "TypeScript", "MySQL"],
    links: {
      github: "https://github.com/roobak-1234/Docent.git"
    },
    icon: Database,
    color: "#60a5fa"
  },
  {
    title: "Multi-User AR Application",
    description: "A collaborative Augmented Reality application for multiple users to interact with shared virtual objects in a real-world environment. Implemented real-time synchronization using Photon Engine.",
    techStack: ["Unity", "C#", "Photon Engine", "AR Foundation"],
    links: {
      demo: "https://areality.netlify.app/"
    },
    icon: Smartphone,
    color: "#47daff"
  },
  {
    title: "Iris Classification",
    description: "Developed a machine learning model to classify iris flower species based on their sepal and petal measurements. Implemented algorithms like K-Nearest Neighbors to achieve high accuracy.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    links: {
      github: "https://github.com/roobak-1234/Oasis-infobyte/blob/main/iris_classification.py"
    },
    icon: Brain,
    color: "#a78bfa"
  },
  {
    title: "Sales Prediction",
    description: "Built a predictive model to forecast future product sales using historical data. Employed time-series analysis and regression techniques to provide actionable insights for inventory management.",
    techStack: ["Python", "TensorFlow", "Pandas", "Seaborn"],
    links: {
      github: "https://github.com/roobak-1234/Oasis-infobyte/blob/main/sales_prediction.py"
    },
    icon: TrendingUp,
    color: "#4ade80"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(x, springConfig);
  const rotateY = useSpring(y, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current || isOpen) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rX = (mouseY / height - 0.5) * -20;
    const rY = (mouseX / width - 0.5) * 20;
    
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isOpen) {
      x.set(0);
      y.set(0);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="relative rounded-2xl p-[1px] group z-10 h-full flex flex-col"
    >
      {/* Static subtle border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 -z-10" />

      <div className="flex-1 flex flex-col p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] bg-card/40">


        <div className="flex items-center mb-4 z-10">
          <div className="p-3 rounded-xl mr-4 border border-white/10 bg-white/5">
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">{project.title}</h3>
        </div>

        <p className="text-foreground/80 mb-6 flex-grow z-10 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 z-10">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 z-10 mt-auto">
          {project.links.demo && project.title === "Multi-User AR Application" ? (
            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <button className="flex items-center justify-center flex-1 gap-2 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 transition-colors rounded-lg text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  View Demo
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 border-white/10 bg-black/95 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl">
                <DialogHeader className="p-4 border-b border-white/10 bg-white/5">
                  <DialogTitle className="text-white font-bold select-none text-xl">
                    Collaborative AR Experience
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-1 w-full h-[calc(90vh-70px)] bg-black/50">
                  <iframe
                    src={project.links.demo}
                    className="w-full h-full border-none"
                    title={`${project.title} Demo`}
                    allow="camera;gyroscope;accelerometer"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ) : project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 gap-2 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 transition-colors rounded-lg text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Demo
            </a>
          ) : null}
          
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 gap-2 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 transition-colors rounded-lg text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
             Check out some of my recent work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};