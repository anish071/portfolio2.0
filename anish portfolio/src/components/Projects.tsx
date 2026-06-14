import { motion } from 'motion/react';
import { Github, ArrowUpRight, Shield, Calendar, Landmark, Settings, Activity } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  // Let's create beautiful decorative visual icons/mockups for each project's thumbnail representation 
  // since real files don't exit. This simulates a high-end designer mockup!
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case "secureurl-plus":
        return (
          <div className="w-full h-full bg-gradient-to-tr from-[#6A5545]/20 to-[#DCCFC0] flex flex-col justify-between p-6 relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            {/* Visual Phone Frame Outline */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] h-[300px] bg-brand-cream border-4 border-brand-accent rounded-[32px] shadow-lg p-3 flex flex-col gap-3">
              <div className="w-12 h-3.5 bg-brand-soft-beige rounded-full mx-auto" />
              <div className="w-full grow bg-brand-cream border border-brand-border/60 rounded-xl p-2 flex flex-col justify-between text-[8px] font-mono">
                <div className="flex justify-between items-center bg-[#5C4738]/10 p-1 rounded">
                  <span className="text-brand-accent">SecureURL+</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="space-y-1 my-2">
                  <div className="h-2 bg-brand-soft-beige rounded" />
                  <div className="h-2 bg-brand-soft-beige rounded w-4/5" />
                  <div className="h-6 border border-dashed border-red-400 bg-red-50/50 rounded flex items-center justify-center text-[6px] text-red-500 text-center uppercase">
                    AI Scanned: Secure
                  </div>
                </div>
                <button className="w-full py-1 text-center bg-brand-accent text-brand-cream rounded-md text-[6px]">
                  Shorten URL
                </button>
              </div>
            </div>
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <Shield className="w-12 h-12 text-[#6A5545]/30 absolute bottom-4 left-4" />
          </div>
        );
      case "cropguard-ai":
        return (
          <div className="w-full h-full bg-gradient-to-tr from-[#8A7564]/35 to-[#E8DDD0] flex flex-col justify-between p-6 relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            {/* Visual Dashboard Representation */}
            <div className="absolute top-8 left-6 right-6 bottom-4 bg-brand-cream/90 border border-brand-border rounded-xl shadow-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-brand-border/40 pb-2">
                <span className="font-mono text-[9px] font-bold text-brand-accent flex items-center gap-1">
                  <Activity className="w-2.5 h-2.5" /> DIAGNOSTICS ENG-01
                </span>
                <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-sans font-semibold">
                  LIVE STATUS
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-1 border border-brand-border/60 rounded bg-brand-cream flex flex-col justify-center">
                  <span className="font-mono text-[6px] text-brand-mocha-light">DISEASE INDEX</span>
                  <span className="font-display font-medium text-xs text-brand-accent">94.8% Safe</span>
                </div>
                <div className="p-1 border border-brand-border/60 rounded bg-brand-cream flex flex-col justify-center">
                  <span className="font-mono text-[6px] text-brand-mocha-light">LSTM HISTORICS</span>
                  <span className="font-display font-medium text-xs text-brand-accent">Stable</span>
                </div>
              </div>
              <div className="grow bg-brand-soft-beige/30 border border-dashed border-brand-border rounded p-1 flex items-center justify-center text-[7px] text-[#6A5545] font-mono">
                [CNN Layer: Chlorosis Detected - Low]
              </div>
            </div>
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
          </div>
        );
      case "multi-agent-orchestrator":
        return (
          <div className="w-full h-full bg-gradient-to-tr from-[#6A5545]/40 to-[#DCCFC0] flex flex-col justify-between p-6 relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
            {/* Loop network interface */}
            <div className="absolute top-6 left-6 right-6 bottom-4 bg-brand-cream/95 border border-brand-border rounded-xl shadow-lg p-4 font-mono text-[8px] flex flex-col justify-between">
              <div className="flex justify-between border-b border-brand-border/30 pb-2 text-brand-mocha-light">
                <span>AGENT_SYS // V2.5</span>
                <span>ONLINE</span>
              </div>
              <div className="space-y-1.5 my-2 grow overflow-y-auto pr-1">
                <div className="text-green-600">[OK] Spawning ResearchAgent...</div>
                <div className="text-brand-accent">[RUN] Crawling source documents...</div>
                <div className="text-brand-accent">[RUN] Synthesizing Gemini Pro context...</div>
                <div className="text-green-600">[OK] Formatted outputs built.</div>
              </div>
              <div className="flex gap-2 border-t border-brand-border/30 pt-2 shrink-0">
                <span className="text-[6px] bg-[#6A5545] text-brand-cream px-1 rounded">2 Agents Live</span>
                <span className="text-[6px] border border-[#6A5545] text-[#6A5545] px-1 rounded">Task ID: #020</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-cream overflow-hidden border-t border-brand-border/30"
    >
      {/* Huge Decorative Header */}
      <div className="absolute top-10 left-4 pointer-events-none select-none z-0">
        <h2 className="font-display font-bold text-[12rem] sm:text-[18rem] md:text-[23rem] leading-none text-brand-soft-beige/50 tracking-tighter uppercase">
          PROJECTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A7564]">
            04 / INDUSTRIAL DELIVERABLES
          </span>
          <h3 className="font-display text-4xl font-bold tracking-tight text-[#6A5545] mt-2">
            Selected Work
          </h3>
        </div>

        {/* Rectangular project cards with mockups */}
        <div className="grid grid-cols-1 gap-16">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              id={`project-card-row-${idx}`}
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch group"
            >
              {/* Thumbnail Representation columns */}
              <div className="lg:col-span-5 h-[280px] sm:h-[350px] lg:h-auto border border-brand-border rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {renderProjectVisual(proj.id)}
              </div>

              {/* Text Description columns */}
              <div className="lg:col-span-7 flex flex-col justify-between py-2">
                <div id={`project-info-${idx}`}>
                  {/* Category Indices */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-border/30">
                    <span className="font-mono text-xs font-bold text-brand-mocha-light">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-medium tracking-widest text-[#8A7564] uppercase">
                      BUILD STACK
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display font-bold text-3xl sm:text-4xl text-[#6A5545] tracking-tight group-hover:text-brand-accent transition-colors">
                    {proj.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-[#8A7564] text-base leading-relaxed mt-4 mb-6">
                    {proj.description}
                  </p>

                  {/* Tech badging */}
                  <div id={`project-tech-badges-${idx}`} className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-brand-soft-beige text-brand-accent text-xs font-mono font-medium rounded-full border border-brand-border/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Github Direct Action Trigger */}
                <div id={`project-actions-${idx}`} className="flex items-center gap-4">
                  <a
                    id={`project-btn-${proj.id}`}
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-[#6A5545] hover:bg-[#5C4738] text-brand-cream font-mono text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-sm"
                  >
                    <Github className="w-4 h-4 text-brand-cream/80" />
                    GITHUB CODE REPOSITORY
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-cream/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
