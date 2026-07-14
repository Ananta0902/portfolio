import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Award, Zap, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievementsData = [
    {
      title: 'Top 25 Coders - HackOn with Amazon 6.0',
      description: 'Secured a spot among the Top 25 Fastest Coders nationwide in Amazon\'s HackOn 6.0 hackathon. Recognized for high-speed algorithmic efficiency and scalable product prototyping under timed, competitive constraints.',
      badge: 'Hackathon',
      icon: Trophy,
      color: 'border-amber-500/30 text-amber-400 glow-amber'
    },
    {
      title: '1,000+ DSA Problems Solved',
      description: 'Solved over 1,000  Data Structures & Algorithms (DSA) questions across various coding platforms.Maintained consistent streaks while tackling medium-hard problems on LeetCode, GFG, and Coding Ninjas.',
      badge: 'Coding Metrics',
      icon: Code2,
      color: 'border-indigo-500/30 text-indigo-400 glow-indigo',
      links: [
        { label: 'LeetCode', url: 'https://leetcode.com/u/Ananta_09/', color: 'hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5' },
        { label: 'GFG', url: 'https://www.geeksforgeeks.org/profile/anantapaw7k8?tab=activity', color: 'hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5' },
        { label: 'Code360', url: ' https://www.naukri.com/code360/profile/a7fd58ff-31ba-43fa-b98d-959fbf7a58e9', color: 'hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/5' }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Achievements</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Dynamic Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {achievementsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`p-6 sm:p-8 bg-zinc-900/40 border ${item.color.split(' ')[0]} rounded-2xl flex flex-col justify-between transition-all group relative overflow-hidden`}
              >
                {/* Subtle Radial Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-zinc-950/60 border border-zinc-800/80 rounded-xl">
                      <IconComponent className={`w-6 h-6 ${item.color.split(' ')[1]}`} />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-gray-400">
                      {item.badge}
                    </span>
                  </div>

                  {/* Achievement Title & Metadata */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Body Copy */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dynamic External Links Block */}
                  {item.links && (
                    <div className="flex flex-wrap gap-2.5 mt-6 relative z-10">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-zinc-950/60 border border-zinc-800/80 rounded-xl text-gray-400 transition-all duration-200 ${link.color}`}
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;