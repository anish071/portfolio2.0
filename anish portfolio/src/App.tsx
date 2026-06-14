import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles, MessageCircleCode } from 'lucide-react';

// Import custom modular sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // preloader simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scrolling to show the scroll-to-top indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper which can target any DOM id
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="portfolio-app" className="relative min-h-screen bg-brand-cream selection:bg-brand-accent selection:text-brand-cream antialiased">
      
      {/* 1. SEAMLESS AWwWards-Style PRELOADER SCREEN */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            id="app-preloader"
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%', 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-50 bg-[#F7F3EE] flex flex-col items-center justify-center"
          >
            <div className="text-center space-y-6">
              {/* Grand Monogram */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-20 h-20 rounded-full border border-brand-accent/30 bg-brand-soft-beige flex items-center justify-center mx-auto shadow-md"
              >
                <span className="font-display font-bold text-3xl text-brand-accent tracking-tighter">
                  AT
                </span>
              </motion.div>

              {/* Loader tagline */}
              <div className="space-y-1.5">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-display font-bold text-md tracking-widest text-[#6A5545] uppercase"
                >
                  ANISH KUMAR TIWARI
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.6 }}
                  className="font-mono text-[9px] tracking-widest text-[#8A7564] uppercase"
                >
                  LOADING LUXURY PORTFOLIO EXPERIENCE
                </motion.p>
              </div>

              {/* Progress Line */}
              <div className="w-48 h-[2px] bg-brand-soft-beige rounded-full mx-auto overflow-hidden relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-24 bg-brand-accent rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE MAIN PORTFOLIO BODY CONTENT (Revealed after preloading completes) */}
      <div id="portfolio-main-content">
        
        {/* Navigation Floating Header */}
        <Navbar onContactClick={() => scrollToSection('contact')} />

        {/* Hero Section */}
        <Hero onContactClick={() => scrollToSection('contact')} />

        {/* About Info Section */}
        <About />

        {/* Skills Competency Section */}
        <Skills />

        {/* Professional Milestones (Experience) Section */}
        <Experience />

        {/* Selected Projects Showcase */}
        <Projects />

        {/* Education Progress Section */}
        <Education />

        {/* Contact Form Section */}
        <Contact />

        {/* Bottom Banner & Footer */}
        <Footer onHireMeClick={() => scrollToSection('contact')} />

        {/* 3. COHESIVE INTERACTIVE FLOATING PILLS */}
        {/* Back To Top Button */}
        <AnimatePresence>
          {showScrollToTop && (
            <motion.button
              id="btn-scroll-to-top"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={() => scrollToSection('hero')}
              className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#6A5545] hover:bg-[#5C4738] text-brand-cream border border-brand-border/40 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll back to top"
              whileHover={{ y: -4 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
