import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 flex justify-center items-center min-h-[40vh] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 md:p-12 rounded-2xl max-w-4xl w-full text-center relative overflow-hidden"
      >
        
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6 gradient-text"
        >
          About Me
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl text-foreground/80 leading-relaxed mx-auto p-4 rounded-lg border border-white/5 backdrop-blur-sm"
        >
          I am a B.Tech student specializing in Artificial Intelligence & Data Science, engineered to build scalable, innovative software solutions. 
          With strong expertise connecting C++, Java, React.js, and Cloud technologies, I continuously process and output highly optimized, 
          intelligent backend and frontend architectures.
        </motion.p>
      </motion.div>
    </section>
  );
};
