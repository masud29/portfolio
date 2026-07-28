import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { AIIntegration } from './components/AIIntegration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onContactClick={scrollToContact} />
      <main style={{ flex: 1 }}>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <AIIntegration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
