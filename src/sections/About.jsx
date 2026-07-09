import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-14 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Title block with tighter bottom margin */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me & Education</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Grid with condensed gap parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Professional Narrative Pitch with tighter spacing */}
          <div className="lg:col-span-3 space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            <p>
              I am a final-year Information Technology student driven by a deep interest in distributed backend architectures and software engineering principles. Throughout my academic career, I have dedicated my time to mastering core cs fundamentals and building modular web applications.
            </p>
            <p>
              My engineering focus centers around writing clean, highly maintainable code and optimizing data flows. I am thoroughly prepared to translate theoretical metrics into scalable enterprise engineering setups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl flex items-center space-x-3">
                <Code className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium text-gray-200">MERN Stack & AI Integration </span>
              </div>
              <div className="p-3.5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl flex items-center space-x-3">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-gray-200">1000+ DSA Problems</span>
              </div>
            </div>
          </div>

          {/* Academic Timeline Segment with tighter cards spacing */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-base font-bold text-gray-200 mb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Academic Foundation</span>
            </h3>
            
            {/* College Card */}
            <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> 2023 - 2027
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-indigo-400 font-semibold">CGPA: 8.44</span>
              </div>
              <h4 className="font-bold text-white text-sm sm:text-base">B.Tech in Information Technology</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">IIEST,Shibpur</p>
              <div className="mt-2.5 pt-2.5 border-t border-zinc-800/60">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">Core Coursework</p>
                <div className="flex flex-wrap gap-1">
                  {['Data Structures','DBMS','OS','OOPs','Computer Networks','Machine Learning','Artifical Intelligence',].map(course => (
                    <span key={course} className="text-[10px] px-2 py-0.5 bg-zinc-950 rounded text-gray-400 border border-zinc-900">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Class XII Card */}
            <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all">
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> 2022 - 2023
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-indigo-400 font-semibold">Score: 90%</span>
              </div>
              <h4 className="font-bold text-white text-sm sm:text-base">Senior Secondary (Class XII)</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">DAV Public School</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-mono"> Major: Physics, Chemistry, Math (PCM)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;