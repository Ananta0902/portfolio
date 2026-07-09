import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: '🌍Wanderlust-Airbnb inspired Listing Platform',
      desc: 'Built a full-stack rental model featuring secure authentication, property management, interactive maps, reviews, and cloud-based image storage. Integrated Google Gemini AI to deliver personalized travel guides, trip planning, and intelligent destination assistance, while implementing role-based authorization, geolocation services, and an MVC architecture.',
      tags: ['Node.js','Express.js','MongoDB','EJS','Passport.js','Cloudinary','Google Gemini API','Mapbox','Bootstrap'],
      githubLink: 'https://github.com/Ananta0902/wanderLust-',
      liveLink: 'https://wanderlust-4ahg.onrender.com/listings'
    },
    {
      title: '🎥Meetify-Real-Time Video Conferencing Platform',
      desc: 'Designed a real-time communication platform supporting HD video calls, screen sharing, live messaging, and multi-user meeting rooms using peer-to-peer WebRTC connections. Built a scalable signaling server with Socket.IO to coordinate secure session establishment.',
      tags: ['Node.js','Express.js','React.js','WebRTC','Socket.IO'],
      githubLink: 'https://github.com/Ananta0902/Meetify',
      liveLink: ''
    },
    {
      title: '📈TradeSphere-MERN Stock Trading Simulator',
      desc: 'Built a modern trading platform with portfolio tracking, watchlists, simulated stock transactions, analytics dashboards, and responsive user interfaces. Developed RESTful backend services and optimized frontend state management for a smooth, interactive trading experience.',
      tags: ['React.js','Node.js','Express.js','MongoDB','Redux Toolkit','Material UI', 'Chart.js'],
      githubLink: 'https://github.com/Ananta0902/TradeSphere',
      liveLink: ''
    }
  ];

  return (
    <section id="projects" className="py-20 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl flex flex-col justify-between transition-all group hover:border-indigo-500/30"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-8 h-8 text-indigo-400 group-hover:text-purple-400 transition-colors" />
                  <div className="flex items-center space-x-3.5 text-gray-500">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="View Code Repository"
                      className="hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="View Live Site"
                      className="hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{project.desc}</p>
              </div>

              {}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-mono bg-zinc-950 text-gray-400 rounded-md border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;