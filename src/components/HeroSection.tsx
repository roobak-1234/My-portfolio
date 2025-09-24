import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, Github, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [animatedWords, setAnimatedWords] = useState<string[]>([]);

  const title = "Roobak Kumar M";
  const subtitle = "A motivated B.Tech student specializing in AI & Data Science.";
  const pitch = "I build scalable and innovative software solutions using C++, Java, and cloud technologies.";

  const words = [title, subtitle, pitch];

  useEffect(() => {
    if (isVisible) {
      words.forEach((text, index) => {
        setTimeout(() => {
          setAnimatedWords(prev => [...prev, text]);
        }, index * 600);
      });
    }
  }, [isVisible]);

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:roobakdinesh@gmail.com",
      label: "roobakdinesh@gmail.com"
    },
    {
      icon: Phone,
      href: "tel:+918667292689",
      label: "+91 8667292689"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/roobak-kumar-m",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/roobak-1234",
      label: "GitHub"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Animated Title */}
        <div className="mb-8">
          {animatedWords.includes(title) && (
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-word-reveal">
              {title}
            </h1>
          )}
          
          {animatedWords.includes(subtitle) && (
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground animate-fade-in">
              {subtitle}
            </p>
          )}
          
          {animatedWords.includes(pitch) && (
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 animate-slide-up">
              {pitch}
            </p>
          )}
        </div>

        {/* Social Links */}
        {isVisible && (
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border glow-secondary"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <link.icon className="w-5 h-5 text-primary" />
                <span className="hidden sm:inline text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        )}

        {/* Scroll Indicator */}
        {isVisible && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        )}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};