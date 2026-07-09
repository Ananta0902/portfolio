import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-zinc-950 border-t border-zinc-900 text-center overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white tracking-widest mb-3 uppercase"
        >
          Ananta
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 text-base sm:text-lg font-medium leading-relaxed max-w-md"
        >
          Thanks for visiting my portfolio :)
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-blue-400 font-extrabold tracking-wide text-sm uppercase mt-1 mb-8 font-mono"
        >
          Let's build something amazing together.
        </motion.p>

        {/* STREAMING_CHUNK: Aligning bulletproof inline SVG buttons in the center */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {/* GitHub action button */}
          <a
            href="https://github.com/Ananta0902"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-black rounded-full transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn action button */}
          <a
            href="https://www.linkedin.com/in/ananta-pandey-b58b282b1/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-[#0077B5] hover:bg-[#0077B5]/95 text-white text-xs font-black rounded-full transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-lg shadow-[#0077B5]/15 hover:shadow-[#0077B5]/25"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Email action button */}
          <a
            href="mailto:anantapandey0902@gmail.com"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black rounded-full transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25"
          >
            <Mail className="w-4 h-4"/>
            <span>Email Me</span>
          </a>
        </motion.div>

        {/* Verification Copyright segment */}
        <motion.div 
          initial={{ opacity: 1.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] font-mono text-zinc-600 space-y-1 select-none"
        >
          <p>
            &copy; 2026 Ananta. All Rights Reserved.
          </p>
          <p className="opacity-100">
            Built with React, Tailwind CSS ,Framer Motion &  ❤️
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;