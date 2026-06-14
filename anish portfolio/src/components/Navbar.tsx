import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'experience', 'projects', 'education'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Highlights section currently in the middle of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('');
      }
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    
    // Optimistically set active state immediately on click
    setActiveSection(targetId);

    // Short delay to let the mobile menu close animation complete without scroll conflicts
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-brand-cream/90 backdrop-blur-md border-b border-brand-border/40 shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div id="navbar-container" className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Monogram representing AT for Anish Tiwari */}
          <a 
            id="nav-logo"
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('');
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-brand-accent/30 bg-brand-soft-beige flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent group-hover:border-brand-accent">
              <span className="font-display font-bold text-lg text-brand-accent group-hover:text-brand-cream transition-colors duration-300">
                AT
              </span>
            </div>
            <span className="font-display font-medium tracking-widest text-[#5C4738] uppercase hidden sm:inline text-sm">
              ANISH TIWARI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div id="nav-links-desktop" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  id={`nav-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-sans font-medium text-sm transition-colors duration-200 relative py-1 group ${
                    isActive ? 'text-brand-accent' : 'text-[#6A5545] hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </div>

          {/* Desktop Call to Action button */}
          <div id="nav-actions-desktop" className="hidden md:block">
            <button
              id="btn-nav-touch"
              onClick={onContactClick}
              className="px-6 py-2.5 rounded-full border border-[#D1C2B1] bg-[#6A5545] hover:bg-[#5C4738] text-[#F7F3EE] font-sans font-medium text-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex items-center gap-1 group"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            id="btn-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-brand-mocha hover:text-brand-accent md:hidden transition-all focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-accent/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-brand-cream border-l border-brand-border shadow-2xl p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div id="mobile-drawer-top" className="flex flex-col gap-8 mt-16">
                <span className="font-display font-medium text-xs tracking-widest text-[#8A7564] uppercase border-b border-brand-border/40 pb-2">
                  Navigation Menu
                </span>
                <div id="mobile-links" className="flex flex-col gap-6">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <a
                        id={`mobile-link-${link.name.toLowerCase()}`}
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`font-display font-medium text-2xl transition-colors duration-200 ${
                          isActive ? 'text-brand-accent' : 'text-[#6A5545] hover:text-brand-accent'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div id="mobile-drawer-bottom" className="flex flex-col gap-4">
                <button
                  id="btn-mobile-touch"
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-center py-3 rounded-full bg-[#6A5545] hover:bg-[#5C4738] text-brand-cream font-medium text-md transition-colors shadow-md"
                >
                  Get in touch
                </button>
                <div className="text-center text-xs text-brand-mocha-light font-mono mt-4">
                  at4344958@gmail.com
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
