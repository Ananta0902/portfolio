import React, { useState } from 'react';
import { Code2, FileText, Mail, Phone, MapPin, CheckCircle, ExternalLink, Network, Award, Copy, Check } from 'lucide-react';
import {
  SiGithub,
  SiLeetcode,
  SiCodechef,
} from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  /* STREAMING_CHUNK: Managing state logic for Clipboard Copied Feedback */
  const [copied, setCopied] = useState(false);
  const emailAddress = "anantapandey0902@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API transport pipeline delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  const Professional = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ananta-pandey-b58b282b1/',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'bg-[#0077B5] shadow-[#0077B5]/20'
    },
    {
      name: 'View Resume',
      url: '',
      icon: <FileText className="w-5 h-5 text-white" />,
      color: 'bg-[#0077B5] shadow-[#0077B5]/20'
    }
  ];

  const CodingPlatforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Ananta_09/',
      icon: <SiLeetcode className="w-5 h-5 text-white" />,
      color: 'bg-[#FFA116] shadow-[#FFA116]/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ananta0902',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'bg-[#24292e] shadow-white/10 border border-zinc-800'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/cuddly_sun_47',
      icon: <SiCodechef className="w-5 h-5 text-white" />,
      color: 'bg-[#1F8ACB] shadow-[#1F8ACB]/20'
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/ananta0902',
      icon: <Code2 className="w-5 h-5" />,
      color: 'bg-[#8E24AA] shadow-[#8E24AA]/20'
    }
  ];

  return (
    <section id="contact" className="py-20 border-b border-zinc-900 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Contact Me</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        {/* Layout Grid containing contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Contact Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 bg-zinc-900/20 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg group hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 mb-3 group-hover:bg-blue-500/10 transition-colors">
              <Phone className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-blue-400 font-bold tracking-wide text-xs sm:text-sm uppercase mb-1">Contact</span>
            <span className="text-zinc-300 font-semibold text-sm sm:text-base">+91 8789634599</span>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 bg-zinc-900/20 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg group hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 mb-3 group-hover:bg-blue-500/10 transition-colors">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-blue-400 font-bold tracking-wide text-xs sm:text-sm uppercase mb-1">Location</span>
            <span className="text-zinc-300 font-semibold text-sm sm:text-base">Kolkata, West Bengal</span>
          </motion.div>

          {/* Email Card with copy feedback */}
          {/* STREAMING_CHUNK: Integrating the responsive Copy Clipboard Email UI component */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 bg-zinc-900/20 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg group hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 mb-3 group-hover:bg-blue-500/10 transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-blue-400 font-bold tracking-wide text-xs sm:text-sm uppercase mb-1">Email</span>
            <div className="flex flex-col items-center gap-2 w-full">
              <span className="text-zinc-300 font-semibold text-xs sm:text-sm break-all">{emailAddress}</span>
              
              <button
                onClick={handleCopyEmail}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 cursor-pointer ${
                  copied
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-zinc-950/60 border-zinc-800 hover:border-blue-500/30 text-zinc-400 hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 animate-bounce" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Double column form capture and social link console */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Block - Fill Your Query Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/20 border border-zinc-800 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 tracking-wide">Let's Connect</h3>
              <div className="h-0.5 w-8 bg-blue-500/30 mx-auto mt-2 rounded-full" />
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 focus:border-blue-500/50 rounded-xl text-white text-sm outline-none transition-all placeholder:text-zinc-600 shadow-inner"
                    />
                  </div>

                  <div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 focus:border-blue-500/50 rounded-xl text-white text-sm outline-none transition-all placeholder:text-zinc-600 shadow-inner"
                    />
                  </div>

                  <div>
                    <input 
                      type="email" 
                      required
                      placeholder="Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 focus:border-blue-500/50 rounded-xl text-white text-sm outline-none transition-all placeholder:text-zinc-600 shadow-inner"
                    />
                  </div>

                  <div>
                    <textarea 
                      rows="4"
                      required
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 focus:border-blue-500/50 rounded-xl text-white text-sm outline-none transition-all placeholder:text-zinc-600 resize-none shadow-inner"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 text-white text-sm font-extrabold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-16 h-16 text-blue-400 mb-4" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2">Query Received!</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. I've received your query and will reply within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono rounded-lg transition-colors border border-zinc-700"
                  >
                    Send another query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Category structured social link container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/20 border border-zinc-800 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 tracking-wide">Also Connect Through</h3>
              <div className="h-0.5 w-8 bg-blue-500/30 mx-auto mt-2 rounded-full" />
            </div>

            {/* Structured Subsections Container */}
            <div className="space-y-6 my-auto">
              
              {/* Category 1: Professional */}
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-blue-400/80 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-mono">
                  <Network className="w-3.5 h-3.5" />
                  <span>Professional</span>
                </h4>
                <div className="space-y-3">
                  {Professional.map((social) => (
                    <div 
                      key={social.name}
                      className="p-3 bg-zinc-950/80 border border-zinc-850 rounded-2xl flex items-center justify-between group hover:border-blue-500/20 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3.5">
                        <div className={`p-2 sm:p-2.5 rounded-xl ${social.color} shadow-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}>
                          {social.icon}
                        </div>
                        <span className="text-white font-extrabold text-xs sm:text-base tracking-wide">{social.name}</span>
                      </div>
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 sm:px-4 sm:py-1.5 bg-blue-500 hover:bg-blue-400 text-white text-[10px] sm:text-xs font-black rounded-lg transition-all shadow-md active:scale-95 text-center flex items-center gap-1 shrink-0"
                      >
                        <span>View<span className="hidden sm:inline"> Profile</span></span>
                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-85" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Coding Profiles */}
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-blue-400/80 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-mono">
                  <Award className="w-3.5 h-3.5" />
                  <span>Coding Platforms</span>
                </h4>
                <div className="space-y-3">
                  {CodingPlatforms.map((social) => (
                    <div 
                      key={social.name}
                      className="p-3 bg-zinc-950/80 border border-zinc-850 rounded-2xl flex items-center justify-between group hover:border-blue-500/20 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3.5">
                        <div className={`p-2 sm:p-2.5 rounded-xl ${social.color} shadow-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}>
                          {social.icon}
                        </div>
                        <span className="text-white font-extrabold text-xs sm:text-base tracking-wide">{social.name}</span>
                      </div>
                      {social.url ? (
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 sm:px-4 sm:py-1.5 bg-blue-500 hover:bg-blue-400 text-white text-[10px] sm:text-xs font-black rounded-lg transition-all shadow-md active:scale-95 text-center flex items-center gap-1 shrink-0"
                        >
                          <span>View<span className="hidden sm:inline"> Profile</span></span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-85" />
                        </a>
                      ) : (
                        <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 bg-zinc-800 text-zinc-500 text-[10px] sm:text-xs font-bold rounded-lg cursor-not-allowed shrink-0">
                          In Progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;