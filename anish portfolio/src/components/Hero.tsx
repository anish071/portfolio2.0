import { motion } from 'motion/react';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  // Stagger Container Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Fade Up Elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for luxury luxury feel
      },
    },
  };

  // Stacked Name Character/Word Animation
  const nameLineVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };



  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 pb-16 md:py-32 px-6 md:px-12 bg-brand-cream overflow-hidden"
    >
      {/* Editorial Watermark background */}
      <div className="absolute top-1/4 right-[2%] pointer-events-none select-none hidden lg:block">
        <span className="font-display font-bold text-[15rem] leading-none text-brand-soft-beige/40 tracking-tighter uppercase">
          DEV
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Staggered Content */}
        <motion.div
          id="hero-content-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Header Tagline */}
          <motion.div variants={fadeUpVariants} className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft-beige font-mono text-xs font-semibold tracking-widest text-brand-accent uppercase">
              SEEKING OPPORTUNITIES • READY TO GROW
            </span>
          </motion.div>

          {/* Large Stacked Monospaced Name */}
          <div id="hero-stacked-name" className="mb-6 flex flex-col">
            <div className="overflow-hidden h-[75px] sm:h-[95px] md:h-[120px] lg:h-[135px]">
              <motion.h1 
                variants={nameLineVariants}
                className="font-display font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter text-[#6A5545]"
              >
                ANISH
              </motion.h1>
            </div>
            <div className="overflow-hidden h-[75px] sm:h-[95px] md:h-[120px] lg:h-[135px]">
              <motion.h1 
                variants={nameLineVariants}
                className="font-display font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter text-[#6A5545]/80"
              >
                KUMAR
              </motion.h1>
            </div>
            <div className="overflow-hidden h-[75px] sm:h-[95px] md:h-[120px] lg:h-[135px]">
              <motion.h1 
                variants={nameLineVariants}
                className="font-display font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter text-[#6A5545]"
              >
                TIWARI
              </motion.h1>
            </div>
          </div>

          {/* Subtitle / Roles */}
          <motion.h2 
            variants={fadeUpVariants}
            className="font-display text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-brand-accent mb-4"
          >
            {HERO_DATA.titleAndRoles}
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={fadeUpVariants}
            className="font-sans text-[#8A7564] text-base md:text-lg max-w-xl leading-relaxed mb-8"
          >
            {HERO_DATA.description}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeUpVariants} 
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center"
          >
            <a
              id="cta-hash-projects"
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-[#6A5545] hover:bg-[#5C4738] text-brand-cream border border-[#D1C2B1] font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              id="cta-btn-resume"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Anish_Kumar_Tiwari_Resume.pdf"
              className="px-8 py-3.5 rounded-full bg-brand-soft-beige hover:bg-brand-sand text-[#6A5545] border border-brand-border font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-brand-accent" />
              Download Resume
            </a>

            <button
              id="cta-btn-contact-me"
              onClick={onContactClick}
              className="px-8 py-3.5 rounded-full border border-brand-border hover:border-brand-mocha bg-transparent hover:bg-brand-soft-beige text-[#6A5545] font-medium transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait image container */}
        <motion.div
          id="hero-content-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div 
            id="hero-img-container" 
            className="relative float-animation max-w-[340px] sm:max-w-[400px] lg:max-w-full w-full"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            {/* Background design accents */}
            <div className="absolute -inset-2 bg-brand-sand/40 rounded-[34px] -z-10 blur-sm" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-mocha/30 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-mocha/30 rounded-br-xl" />

            {/* Main Picture Frame - Matching Natural Tones Rounded Thick Border Card */}
            <div 
              id="hero-portrait"
              className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-full lg:aspect-[3/4] bg-brand-sand border-[8px] border-brand-cream rounded-[40px] overflow-hidden group mocha-shadow mx-auto"
            >
              {/* Monochromatic Overlay filter */}
              <div className="absolute inset-0 bg-[#5C4738]/10 mix-blend-color z-10 pointer-events-none group-hover:bg-[#5C4738]/5 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6A5545]/40 via-transparent to-transparent z-10 pointer-events-none" />

              <img
                src={HERO_DATA.avatarUrl}
                alt={`${HERO_DATA.name} Portrait`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Float info tags */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                <div className="px-4 py-2 bg-brand-cream/90 backdrop-blur-sm rounded-xl border border-brand-border/40">
                  <p className="font-display font-bold text-[#6A5545] text-xs uppercase tracking-wider">
                    Ranchi, JH
                  </p>
                  <p className="font-mono text-[10px] text-brand-mocha-light">
                    Active Base
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#6A5545] flex items-center justify-center border border-brand-cream/40 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
