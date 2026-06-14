import { ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface FooterProps {
  onHireMeClick: () => void;
}

export default function Footer({ onHireMeClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-brand-cream border-t border-brand-border/40">
      
      {/* 1. GRAND RECRUITER CTA BANNER */}
      <div 
        id="recruiter-cta-banner" 
        className="mx-6 md:mx-12 my-12 bg-brand-accent p-8 md:p-16 rounded-[40px] text-brand-cream relative overflow-hidden group shadow-lg"
      >
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
          
          <span className="font-mono text-xs font-bold tracking-widest text-[#E8DDD0] uppercase bg-black/10 px-4 py-1.5 rounded-full">
            RECRUITER ACCESS CORE
          </span>

          {/* Slogan */}
          <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight uppercase max-w-4xl">
            OPEN TO SOFTWARE ENGINEERING, AI ENGINEERING, FULL STACK DEVELOPMENT, AND ANDROID DEVELOPMENT OPPORTUNITIES
          </h2>

          <p className="font-sans text-sm sm:text-base text-brand-soft-beige max-w-2xl leading-relaxed">
            Ready to contribute in technical positions, optimize localized and distributed AI modules, or engineer performant client-to-server systems. Available for onsite placements in Ranchi or flexible remote agreements.
          </p>

          <button
            id="btn-recruiter-hire"
            onClick={onHireMeClick}
            className="px-10 py-4 rounded-full bg-brand-cream hover:bg-brand-soft-beige text-brand-accent font-mono font-bold text-xs tracking-widest transition-all duration-300 transform hover:scale-103 cursor-pointer shadow-md flex items-[#6A5545] gap-2 uppercase group"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 text-brand-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* 2. MINIMALIST LUXURY COPYRIGHT BAR */}
      <div id="footer-bottom-bar" className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-brand-border/20">
        
        {/* Monogram Logo representation */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-brand-border bg-brand-soft-beige flex items-center justify-center">
            <span className="font-display font-bold text-xs text-brand-accent">
              AT
            </span>
          </div>
          <span className="font-display font-semibold tracking-widest text-xs uppercase text-[#6A5545]">
            ANISH TIWARI
          </span>
        </div>

        {/* Minimal Copyright watermark label */}
        <div className="text-center md:text-right space-y-1">
          <p className="font-mono text-[10px] text-brand-mocha-light">
            © {currentYear} Anish Kumar Tiwari. All rights and creation credits reserved.
          </p>
          <p className="font-mono text-[9px] text-[#8A7564]/50 uppercase tracking-widest">
            MINIMALIST LUXURY SYSTEM CONFIG V2.0
          </p>
        </div>

      </div>

    </footer>
  );
}
