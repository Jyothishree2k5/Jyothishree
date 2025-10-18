import React from 'react';
import Hero from './components/Hero';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import BackgroundPattern from './components/BackgroundPattern';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience'; 
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <BackgroundPattern />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects/>
        <Experience/>
        <Contact/>  
      </main>
      <Analytics />
    </div>
  );
}

export default App;