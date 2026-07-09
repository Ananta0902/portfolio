import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Decorative Mesh Gradients (Matching Royal Blues) */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content Wrapper - Added mx-auto and flex-centering rules */}
      <div className="max-w-3xl px-4 mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Main Headline - Centered, with clean blue gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-center w-full leading-tight"
        >
          Hi there👋,<span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">I am Ananta</span>
        </motion.h1>

        {/* Subtitle / Role - Centered */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-zinc-400 mb-6 text-center"
        >
          Final-Year Btech IT Student & Aspiring Software Engineer
        </motion.h2>

        {/* Short impactful description - Centered */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-8 leading-relaxed text-center"
        >
          I’m a Passionate Full-Stack Developer dedicated to building robust web applications and crafting elegant digital experiences. I bridge clean code with intuitive design to transform complex engineering problems into scalable software.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;