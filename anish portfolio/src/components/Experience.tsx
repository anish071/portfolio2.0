import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-soft-beige/30 overflow-hidden border-t border-brand-border/30"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Header (Hidden on large displays where vertical text is active) */}
        <div className="block lg:hidden mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-mocha-light">
            03 / HISTORICAL MILESTONES
          </span>
          <h3 className="font-display text-4xl font-bold tracking-tight text-[#6A5545] mt-2">
            Professional Experience
          </h3>
        </div>

        {/* Outer Grid showing rotated vertical text on left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Rotated Vertical Header (Matches Reference perfectly) */}
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-2 flex-col justify-start items-center border-r border-brand-border/40 select-none">
            <div className="sticky top-32 flex flex-col items-center">
              <span className="font-mono text-xs font-bold text-brand-mocha-light tracking-widest uppercase mb-12">
                WORK HISTORY
              </span>
              <div className="relative h-[400px] w-full flex items-center justify-center">
                <h2 className="absolute font-display font-black text-7xl xl:text-8xl leading-none text-brand-sand/70 tracking-tighter uppercase origin-center rotate-270 whitespace-nowrap">
                  EXPERIENCE
                </h2>
              </div>
              <div className="w-1.5 h-16 bg-gradient-to-b from-brand-accent to-transparent rounded-full mt-4" />
            </div>
          </div>

          {/* Experience Content Area */}
          <div className="lg:col-span-9 xl:col-span-10 flex flex-col justify-center">
            
            {/* Desktop Section Subtext */}
            <div className="hidden lg:block mb-12">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A7564]">
                03 / HISTORICAL MILESTONES
              </span>
              <h4 className="font-display text-2xl font-bold text-[#6A5545] tracking-tight mt-1">
                Timeline & Contributions
              </h4>
            </div>

            {/* Experience Cards / Timeline Node */}
            <div id="experience-timeline" className="relative pl-0 md:pl-8 border-l-0 md:border-l-2 md:border-brand-border/40 flex flex-col gap-12">
              
              {EXPERIENCE_ITEMS.map((exp, idx) => (
                <motion.div
                  id={`experience-timeline-card-${idx}`}
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline point indicator for desktop screens */}
                  <div className="absolute top-6 -left-[41px] w-[18px] h-[18px] rounded-full bg-brand-cream border-4 border-brand-accent hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-sm" />
                  
                  {/* Main Internship Card */}
                  <div className="bg-brand-sand/40 hover:bg-brand-sand/60 transition-all duration-300 border border-brand-border rounded-[30px] p-8 md:p-10 mocha-shadow hover:shadow-lg">
                    
                    {/* Role header metadata */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-border/40 pb-6 mb-6">
                      
                      <div>
                        {/* Company & Location info */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-display font-bold text-[#6A5545] text-xl sm:text-2xl tracking-tight">
                            {exp.company}
                          </span>
                          <span className="text-[#8A7564] text-sm hidden sm:inline">•</span>
                          <span className="inline-flex items-center gap-1 font-sans text-xs text-[#8A7564] bg-brand-cream/60 px-3 py-1 rounded-full border border-brand-border/20">
                            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                            {exp.location}
                          </span>
                        </div>
                        {/* Exact Role */}
                        <h4 className="font-display text-lg font-semibold tracking-wide text-brand-accent flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-brand-accent" />
                          {exp.role}
                        </h4>
                      </div>

                      {/* Timeline Duration Badge */}
                      <div className="inline-flex items-center gap-1.5 self-start md:self-center font-mono text-xs font-semibold text-[#6A5545] bg-[#F7F3EE] border border-brand-border px-4 py-2 rounded-full">
                        <Calendar className="w-3.5 h-3.5 text-[#8A7564]" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Responsibilities lists */}
                    <div id="experience-bullets" className="space-y-4">
                      {exp.points.map((point, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="w-5 h-5 rounded-full bg-[#6A5545]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#6A5545]/20 transition-colors">
                            <Sparkles className="w-2.5 h-2.5 text-brand-accent" />
                          </div>
                          <p className="font-sans text-sm md:text-base text-[#6A5545] leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}

              {/* Live Future Placeholder card for Career */}
              <motion.div
                id="experience-future-node"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-0"
              >
                <div className="border border-dashed border-brand-border/60 rounded-[30px] p-6 text-center bg-transparent">
                  <span className="font-mono text-xs text-brand-mocha-light uppercase">
                    NEXT CHAPTER
                  </span>
                  <p className="font-display text-sm font-semibold text-brand-accent mt-1">
                    Seeking full-time roles in AI & Technical Software Engineering
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
