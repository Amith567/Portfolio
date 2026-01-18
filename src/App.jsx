import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
