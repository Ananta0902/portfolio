import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CircleCheck } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Graho',
      companyUrl: 'https://graho.in/',
      type: 'Summer Intern',
      duration: 'May 2026 – July 2026',
      highlights: [
        'Improved the overall UI/UX of the company\'s  platform by design-engineering highly responsive, modular, and reusable React components.',
        'Collaborated directly with the development team to build and launch end-to-end product listing layouts, product detail sheets, and complex state-managed shopping cart systems.',
        'Actively participated in Agile workflows, peer code reviews, critical bug fixing campaigns, and Git/GitHub team collaboration protocols.'
      ],
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub']
    }
  ];

  return (
    <section id="experience" className="py-20 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {/* Timeline center line gradient mask */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-indigo-500 via-zinc-800 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Pulsing Node Indicator */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 z-10">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-600 border border-zinc-950"></span>
                </span>
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl flex flex-col justify-between transition-all group hover:border-indigo-500/30">
                <div>
                  {/* Top Metadata Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-indigo-400 shrink-0" />
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 font-medium text-sm mt-1">
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-indigo-400 hover:underline transition-all duration-200"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )} <span className="text-gray-600 font-normal">|</span> <span className="text-purple-400">{exp.type}</span>
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-mono bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800/80 w-fit">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3.5 mb-8">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                        <CircleCheck className="w-5 h-5 text-indigo-500/80 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills Footer */}
                <div>
                  <div className="h-[1px] w-full bg-zinc-800/60 mb-5" />
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-mono bg-zinc-950 text-indigo-300 rounded-md border border-zinc-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;