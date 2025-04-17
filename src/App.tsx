import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;