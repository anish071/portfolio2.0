import { motion } from 'motion/react';
import { GraduationCap, Calendar, Landmark, Award } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data';

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#F7F3EE] overflow-hidden border-t border-brand-border/30"
    >
      {/* Giant Faded Heading */}
      <div className="absolute top-10 right-4 pointer-events-none select-none z-0">
        <h2 className="font-display font-bold text-[12rem] sm:text-[18rem] md:text-[23rem] leading-none text-brand-soft-beige/50 tracking-tighter uppercase text-right">
          STUDIES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section title */}
        <div className="mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A7564]">
            05 / SCHOLASTIC ROOTS
          </span>
          <h3 className="font-display text-4xl font-bold tracking-tight text-[#6A5545] mt-2">
            Education Timeline
          </h3>
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-display text-2xl font-bold text-brand-accent tracking-tight mb-4">
                Academic Background
              </h4>
              <p className="font-sans text-sm md:text-base text-brand-mocha-light leading-relaxed mb-6">
                Pursuing technical expertise in computer applications, programming, system engineering, and artificial systems. Focused on modern practical methodologies.
              </p>
            </div>
            
            <div className="p-6 bg-brand-soft-beige/40 border border-brand-border rounded-[24px] hidden lg:block">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#6A5545]/15 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-[#6A5545]">Graduation Project Area</h5>
                  <p className="font-sans text-xs text-brand-mocha-light mt-1">
                    AI agent orchestration systems, crop health predictive diagnostics, and web infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="education-timeline-grid" className="lg:col-span-8 flex flex-col gap-6">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <motion.div
                id={`education-card-${idx}`}
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-brand-sand/30 hover:bg-brand-sand/50 transition-all duration-300 border border-brand-border rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mocha-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-border flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg md:text-xl text-[#6A5545] tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="font-sans text-sm text-[#8A7564] flex items-center gap-1.5 mt-1.5">
                      <Landmark className="w-4 h-4 text-brand-accent" />
                      {edu.institution}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#6A5545] bg-brand-cream border border-brand-border px-4 py-2 rounded-full shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[#8A7564]" />
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
