import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "SYS.ERR",
        description: "Missing parameters. Name, email, and message required.",
        variant: "destructive",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Setup Required",
        description: "Email keys are not configured yet.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        serviceId, templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
          to_name: 'Roobak Kumar M',
        },
        publicKey
      );

      setIsSent(true);

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsDialogOpen(false);
        setIsSent(false);
      }, 2000);

    } catch (error: any) {
      toast({
        title: "SYS.ERR",
        description: "Transmission failed. Connection unstable.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "roobakdinesh@gmail.com", href: "mailto:roobakdinesh@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8667292689", href: "tel:+918667292689" },
    { icon: MapPin, label: "Location", value: "Krishnagiri, Tamil Nadu", href: "#" }
  ];

  return (
    <section id="contact" className="py-12 px-6 relative z-10 w-full overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact Me</h2>
          <p className="text-lg text-muted-foreground">
             Let's get in touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const isLocation = contact.label === "Location";
            const isLink = contact.href !== "#";
            const CardComponent = isLink ? motion.a : motion.div;
            
            return (
              <CardComponent
                key={contact.label}
                href={isLink ? contact.href : undefined}
                target={isLink ? "_blank" : undefined}
                rel={isLink ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-500 block ${isLink ? 'cursor-pointer' : 'cursor-default'} ${isLocation ? 'hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] h-44' : 'h-44'} overflow-hidden`}
              >
                {/* Map Reveal (Only for Location) */}
                {isLocation && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://maps.google.com/maps?q=Krishnagiri,Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="filter grayscale contrast-125 opacity-40 h-full w-full pointer-events-none"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                )}

                <div className={`flex justify-center mb-4 relative z-10 transition-transform duration-500 ${isLocation ? 'group-hover:-translate-y-2' : ''}`}>
                  <div className={`p-4 bg-white/5 rounded-xl transition-all duration-300 ${isLocation ? 'group-hover:bg-white/10' : ''}`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className={`relative z-10 transition-all duration-500 ${isLocation ? 'group-hover:opacity-0 group-hover:translate-y-2' : ''}`}>
                  <h3 className="text-lg font-bold mb-1 text-white">{contact.label}</h3>
                  <p className="text-sm text-white/70">{contact.value}</p>
                </div>
              </CardComponent>
            );
          })}
        </div>

        {/* CTA Terminal Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center w-full max-w-2xl mx-auto"
        >
          <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
            {/* Ambient terminal light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

            <div className="text-center mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-sm relative z-10">
              Fill out the form below to send an email directly to me.
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/btn overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-mono font-medium shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:bg-white hover:text-black transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                  {/* Ripple border */}
                  <span className="absolute inset-0 rounded-lg border border-white/10 group-hover/btn:border-white group-hover/btn:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-full bg-black/20 border-white/5 backdrop-blur-[30px] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white text-center mb-4">
                    Contact Form
                  </DialogTitle>
                </DialogHeader>
                
                <AnimatePresence mode='wait'>
                  {isSent ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 flex flex-col items-center justify-center text-center"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                      >
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </motion.div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-white/60 text-sm">I'll get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8 px-2 pb-4"
                    >
                      <div className="relative group">
                        <Input
                          id="name" name="name"
                          placeholder="Your Name"
                          value={formData.name} onChange={handleInputChange}
                          className="bg-transparent border-t-0 border-l-0 border-r-0 border-b-white/10 text-white focus:border-b-white transition-all rounded-none px-0 h-12 text-lg placeholder:text-white/20 focus-visible:ring-0"
                          required
                        />
                      </div>
                      <div className="relative group">
                        <Input
                          id="email" name="email" type="email"
                          placeholder="Email Address"
                          value={formData.email} onChange={handleInputChange}
                          className="bg-transparent border-t-0 border-l-0 border-r-0 border-b-white/10 text-white focus:border-b-white transition-all rounded-none px-0 h-12 text-lg placeholder:text-white/20 focus-visible:ring-0"
                          required
                        />
                      </div>
                      <div className="relative group">
                        <Input
                          id="subject" name="subject"
                          placeholder="Subject"
                          value={formData.subject} onChange={handleInputChange}
                          className="bg-transparent border-t-0 border-l-0 border-r-0 border-b-white/10 text-white focus:border-b-white transition-all rounded-none px-0 h-12 text-lg placeholder:text-white/20 focus-visible:ring-0"
                        />
                      </div>
                      <div className="relative group">
                        <Textarea
                          id="message" name="message"
                          placeholder="Tell me about your project..."
                          value={formData.message} onChange={handleInputChange}
                          rows={3}
                          className="bg-transparent border-t-0 border-l-0 border-r-0 border-b-white/10 text-white focus:border-b-white transition-all rounded-none px-0 text-lg placeholder:text-white/20 focus-visible:ring-0 resize-none min-h-[100px]"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full h-14 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 transition-all duration-500 font-bold tracking-[0.2em] uppercase text-xs shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                      >
                        {isLoading ? 'Sending...' : 'Send'}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-primary/20 text-center relative z-10">
        <p className="text-white/30 font-mono text-sm">
           Roobak Kumar M.
        </p>
      </div>
    </section>
  );
};