import React from 'react';
import Hero from './components/Hero';
import './index.css';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience'; 
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <main>
        <Hero />
        <Skills />
        <Projects/>
        <Experience/>
        <Contact/>  
      </main>
    </div>
  );
}

export default App;