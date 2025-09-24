import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "roobakdinesh@gmail.com",
      href: "mailto:roobakdinesh@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8667292689",
      href: "tel:+918667292689"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI and Data Science
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              className={`group glass-effect rounded-2xl p-6 interactive-hover text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{contact.label}</h3>
              <p className="text-sm text-muted-foreground">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="glass-effect rounded-2xl p-8 glow-secondary">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative AI and Data Science solutions
            </p>
            <a
              href="mailto:roobakdinesh@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full interactive-hover font-medium"
            >
              <Send className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2024 Roobak Kumar M. Built with React & TypeScript
        </p>
      </div>
    </section>
  );
};