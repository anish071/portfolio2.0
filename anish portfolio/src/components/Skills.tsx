import { motion } from 'motion/react';
import { 
  Atom, 
  Code2, 
  Smartphone, 
  Coffee, 
  FileCode, 
  Server, 
  Zap, 
  Database, 
  GitBranch, 
  Network, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

// Custom Type for Icons mapping
const iconMap: Record<string, any> = {
  "Atom": Atom,
  "Code2": Code2,
  "Smartphone": Smartphone,
  "Coffee": Coffee,
  "FileCode": FileCode,
  "Server": Server,
  "Zap": Zap,
  "Database": Database,
  "GitBranch": GitBranch,
  "Network": Network,
  "Sparkles": Sparkles
};

export default function Skills() {
  const techIcons = [
    { name: "React", iconName: "Atom" },
    { name: "Python", iconName: "Code2" },
    { name: "Kotlin", iconName: "Smartphone" },
    { name: "Java", iconName: "Coffee" },
    { name: "JavaScript", iconName: "FileCode" },
    { name: "Node.js", iconName: "Server" },
    { name: "FastAPI", iconName: "Zap" },
    { name: "PostgreSQL", iconName: "Database" },
    { name: "Git", iconName: "GitBranch" },
    { name: "LangChain", iconName: "Network" },
    { name: "Gemini AI", iconName: "Sparkles" }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-cream overflow-hidden border-t border-brand-border/30"
    >
      {/* Large Faded Background Heading */}
      <div className="absolute top-10 right-4 pointer-events-none select-none z-0">
        <h2 className="font-display font-bold text-[12rem] sm:text-[18rem] md:text-[24rem] leading-none text-brand-soft-beige/50 tracking-tighter uppercase text-right">
          SKILLS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A7564]">
            02 / STACK & COMPETENCY
          </span>
          <h3 className="font-display text-4xl font-bold tracking-tight text-[#6A5545] mt-2">
            Tooling & Frameworks
          </h3>
        </div>

        {/* Technology Icons Row (Matches Reference Style exactly) */}
        <div id="tech-icons-row" className="bg-brand-soft-beige/40 border-y border-brand-border/60 py-10 px-4 mb-20 overflow-x-auto scrollbar-none flex gap-8 md:justify-center items-center">
          {techIcons.map((tech, idx) => {
            const IconComponent = iconMap[tech.iconName] || Code2;
            return (
              <motion.div
                id={`tech-icon-badge-${idx}`}
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 shrink-0 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-brand-cream border border-brand-border/60 flex items-center justify-center transition-all duration-300 group-hover:bg-[#6A5545] group-hover:border-[#6A5545] shadow-xs group-hover:shadow-md">
                  <IconComponent className="w-6 h-6 text-[#6A5545] group-hover:text-brand-cream transition-colors duration-300" />
                </div>
                <span className="font-mono text-[11px] font-medium tracking-wide text-brand-mocha group-hover:text-brand-accent transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Large Speciality Skill Cards Grid (Matches Bento / Service Grid layout from Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Text Side Accent */}
          <div className="hidden lg:flex lg:col-span-1 h-full flex-col justify-between items-center py-4 border-r border-brand-border/40 select-none">
            <span className="font-mono text-xs text-brand-mocha-light tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 mb-8">
              ANISH KUMAR TIWARI
            </span>
            <span className="font-display font-medium text-4xl text-[#E8DDD0] tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">
              SPECIALISTS
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-8" />
          </div>

          {/* Specialization Cards Layout */}
          <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                id={`skill-large-card-${idx}`}
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-brand-sand/40 hover:bg-brand-sand transition-all duration-300 border border-brand-border rounded-[30px] p-8 md:p-10 flex flex-col justify-between h-full group mocha-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-6 pb-4 border-b border-brand-border/50">
                    <span className="font-mono text-xs text-brand-mocha-light font-bold">
                      02.0{idx + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-brand-accent bg-[#F7F3EE]/60 px-2.5 py-1 rounded-full border border-brand-border/30">
                      Core Sector
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-2xl md:text-3xl text-[#6A5545] tracking-tight mb-4">
                    {cat.title}
                  </h4>
                  <p className="font-sans text-sm md:text-base text-[#8A7564] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div>
                  {/* Detailed features bullet-badges list */}
                  <div id={`skill-list-${idx}`} className="flex flex-wrap gap-2 pt-6 border-t border-brand-border/30">
                    {cat.skillsList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-brand-cream/80 text-[#6A5545] text-xs font-medium rounded-full border border-brand-border/50 font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 group-hover:text-brand-accent transition-colors pt-4 text-xs font-mono font-semibold tracking-wider text-brand-mocha-light">
                    EXPLORE PROJECTS
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
