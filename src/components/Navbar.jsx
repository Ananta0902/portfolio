import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth monitoring for overlay blur and boundary highlights on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4 ${
      scrolled 
        ? 'bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900/80 shadow-lg shadow-black/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Profile Logo Signature */}
        <a 
          href="#" 
          className="text-xl font-black text-white tracking-wider flex items-center gap-1.5 group select-none"
        >
          <span>Hi,Welcome :)</span>
        </a>

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center space-x-1.5 bg-zinc-900/10 border border-zinc-800/10 rounded-full p-1 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white rounded-full transition-all duration-200 uppercase tracking-widest hover:bg-zinc-900/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button - Direct PDF Resume Shortcut */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1lbH-yMJD-UpJNfrYJamrOE87dwacb-DL/view"
            className="px-4 py-2 text-xs font-extrabold text-blue-400 hover:text-white bg-blue-500/5 hover:bg-blue-500 border border-blue-500/20 hover:border-blue-500 rounded-full transition-all duration-300 flex items-center gap-1 shadow-lg shadow-blue-500/5"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900/40 border border-zinc-800/50 rounded-xl transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* STREAMING_CHUNK: Rendering the Mobile Collapsed Drawer Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900/90 shadow-2xl px-6 py-6 space-y-3 flex flex-col backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-bold text-zinc-400 hover:text-white hover:bg-zinc-900/40 border border-transparent hover:border-zinc-900 rounded-xl transition-all duration-200 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3.5 mt-2 bg-blue-500 text-white text-xs font-black rounded-xl uppercase tracking-widest shadow-lg shadow-blue-500/10 active:scale-95"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;