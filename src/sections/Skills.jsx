import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Skills = () => {
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

        {}
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
            <div className="p-3 bg-zinc-950/60 border border-zinc-800/40 rounded-xl overflow-x-auto max-w-full scrollbar-none">
              <img 
                src="https://skillicons.dev/icons?i=cpp,js,html,css,react,nodejs,express,mongodb,mysql,python,git,github,vscode,postman" 
                alt="My Tech Stack Icons"
                className="max-w-full h-auto object-contain shrink-0 filter drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)] select-none pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;