import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200 scroll-smooth">
      {/* Sticky Top Bar */}
      <Navbar />
      
      {/* Dynamic Data Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Achievements/>
        <Contact />
      </main>

      {/* Terminal Footer */}
      <Footer />
    </div>
  );
}

export default App;
