import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import News from './components/News';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden w-full">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <News />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;