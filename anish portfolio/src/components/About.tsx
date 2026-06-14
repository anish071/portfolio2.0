import { motion } from 'motion/react';
import { Sparkles, Brain, Code2, Smartphone, Terminal, GraduationCap } from 'lucide-react';

export default function About() {
  const specializations = [
    {
      title: "Artificial Intelligence",
      description: "Developing intelligent algorithms and cognitive tools that can think, reason, and interpret complex data patterns natively.",
      icon: Brain,
    },
    {
      title: "Machine Learning",
      description: "Engineering and training deep neural architectures including CNNs and LSTMs to make predictive, context-aware decisions.",
      icon: Sparkles,
    },
    {
      title: "Full Stack Development",
      description: "Building responsive, beautiful client-side web interfaces supported by robust databases and microservice backend systems.",
      icon: Code2,
    },
    {
      title: "Android Development",
      description: "Crafting modern mobile experiences using Jetpack Compose, localized databases, and seamless network communication.",
      icon: Smartphone,
    },
    {
      title: "AI Automation Systems",
      description: "Creating parallel, multi-agent frameworks using LangChain and Gemini to execute complex task workflows autonomously.",
      icon: Terminal,
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-soft-beige/50 overflow-hidden border-t border-brand-border/30"
    >
      {/* Massive Faded Background Typography */}
      <div className="absolute top-10 left-5 pointer-events-none select-none z-0">
        <h2 className="font-display font-bold text-[12rem] sm:text-[18rem] md:text-[24rem] leading-none text-[#E8DDD0]/50 tracking-tighter uppercase">
          ABOUT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline mb-20">
          
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
              01 / INTRODUCTION
            </span>
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#6A5545] mt-2">
              The Mindset & Mission
            </h3>
          </div>

          <div className="lg:col-span-8">
            <p className="font-display text-2xl md:text-3xl font-medium text-[#6A5545] leading-snug mb-6">
              Passionate Full Stack Developer and AI enthusiast currently pursuing a Bachelor&apos;s degree in Computer Applications at Usha Martin University.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 p-6 bg-brand-sand/30 border border-brand-border/40 rounded-[24px]">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-sand flex items-center justify-center border border-brand-border/40">
                <GraduationCap className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-[#6A5545] text-md">Usha Martin University</h4>
                <p className="font-sans text-sm text-[#8A7564] leading-relaxed mt-1">
                  Actively studying and researching distributed computing, data architectures, neural models, and full-stack integration frameworks to address modern industrial bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specialization Cards Subtitle */}
        <div className="mb-10 text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A7564]">
            CORE SPECIALIZATIONS
          </span>
          <h4 className="font-display text-2xl font-bold text-[#6A5545] tracking-tight mt-1">
            Areas of Focused Technical Expertise
          </h4>
        </div>

        {/* Horizontal Staggered Grid of Specialization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                id={`about-spec-card-${i}`}
                key={spec.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-brand-sand/50 hover:bg-brand-sand transition-all duration-300 border border-brand-border rounded-[24px] p-8 flex flex-col justify-between group cursor-default h-full mocha-shadow hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-border flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent group-hover:border-brand-accent/50 mb-6">
                    <Icon className="w-5 h-5 text-[#8A7564] group-hover:text-brand-cream transition-colors duration-300" />
                  </div>
                  <h5 className="font-display font-bold text-xl text-[#6A5545] tracking-tight mb-3">
                    {spec.title}
                  </h5>
                  <p className="font-sans text-sm text-[#8A7564] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-brand-border/40 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                    Expertise Area {i+1}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
