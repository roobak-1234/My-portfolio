import { useState, useEffect } from 'react';

export const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  const sections = [
    { id: 'hero', label: '01', name: 'Home' },
    { id: 'skills', label: '02', name: 'Skills' },
    { id: 'experience', label: '03', name: 'Experience' },
    { id: 'projects', label: '04', name: 'Projects' },
    { id: 'education', label: '05', name: 'Education' },
    { id: 'certifications', label: '06', name: 'Certifications' },
    { id: 'contact', label: '07', name: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map(({ id, label, name }) => {
          const isActive = activeSection === id;
          return (
            <div
              key={id}
              className={`group flex items-center transition-all duration-300 ${
                isActive ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className="relative">
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-primary border-primary scale-125'
                      : 'bg-background border-border hover:border-primary'
                  }`}
                />
                <div
                  className={`absolute right-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}
                >
                  <div className="bg-card border border-border rounded-lg px-3 py-1 shadow-lg">
                    <span className="text-sm font-medium text-primary">{label}</span>
                    <span className="text-xs text-muted-foreground ml-2">{name}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};