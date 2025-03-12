import React from 'react';
import Hero from './components/Hero';
import './index.css';

import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="relative">
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;