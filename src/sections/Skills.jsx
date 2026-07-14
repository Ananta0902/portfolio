import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Split your tech stack into 14 icons
  const icons = "cpp,js,html,css,react,nodejs,express,mongodb,mysql,python,git,github,vscode,postman";

  return (
    <section id="skills" className="py-20 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Visual Skills Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden group"
        >
          {/* Centered responsive container for the Skill Icons */}
          <div className="flex flex-col items-center justify-center py-4">
            <div className="p-3 bg-zinc-950/60 border border-zinc-800/40 rounded-xl max-w-full">
              
              {/* 📱 MOBILE VIEW: Renders exactly 2 rows (7 icons per line) and remains visible */}
              <img 
                src={`https://skillicons.dev/icons?i=${icons}&perline=7`} 
                alt="My Tech Stack Icons Mobile"
                className="block md:hidden max-w-full h-auto object-contain shrink-0 filter drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)] select-none pointer-events-none"
              />

              {/* 💻 DESKTOP/LAPTOP VIEW: Renders as a single horizontal line */}
              <img 
                src={`https://skillicons.dev/icons?i=${icons}`} 
                alt="My Tech Stack Icons Desktop"
                className="hidden md:block max-w-full h-auto object-contain shrink-0 filter drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)] select-none pointer-events-none"
              />

            </div>
          </div>
        </motion.div>

      </div>
{/* 🚀 CURRENTLY EXPLORING / LEARNING SUB-SECTION */}
<div className="mt-6 pt-6 border-t border-zinc-850 w-full px-2">
  <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center">
    
    {/* Heading: Mobile-centered, text scales elegantly */}
    <span className="text-xs font-mono tracking-widest text-indigo-400 font-bold uppercase text-center md:text-left shrink-0">
      ⚡Currently Diving Deep Into:
    </span>
    
    {/* Badges Container: Evenly distributed grid/wrap flow across all screens */}
    <div className="flex flex-wrap justify-center gap-2 mt-1 md:mt-0 max-w-full">
      {[
        'Next.js 15',
         'Docker', 
         'TypeScript',
         'Redis',
        'System Design', 
        'LLMs'
      ].map((tech) => (
        <span 
          key={tech} 
          className="text-[10px] sm:text-[11px] font-medium font-mono text-zinc-400 bg-zinc-950/60 border border-zinc-800/60 px-2 sm:px-2.5 py-0.5 rounded-md shadow-sm whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
    </div>

  </div>
</div>
 </section>
  );
};

export default Skills;