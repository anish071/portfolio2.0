import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending time
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');

      // Auto-reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-cream overflow-hidden border-t border-brand-border/30"
    >
      {/* Massive Background Heading */}
      <div className="absolute top-10 left-4 pointer-events-none select-none z-0">
        <h2 className="font-display font-bold text-[12rem] sm:text-[18rem] md:text-[23rem] leading-none text-brand-soft-beige/50 tracking-tighter uppercase">
          CONTACT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section title */}
        <div className="mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A7564]">
            06 / CONNECTION PORT
          </span>
          <h3 className="font-display text-4xl font-bold tracking-tight text-[#6A5545] mt-2">
            Let&apos;s Create Together
          </h3>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Hand-crafted details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h4 className="font-display text-2xl font-bold text-[#6A5545] tracking-tight mb-4">
                Reach Out Directly
              </h4>
              <p className="font-sans text-sm md:text-base text-[#8A7564] leading-relaxed">
                Whether you have an engaging full-time engineering opportunity, a remote project, or just feel like saying hello—feel free to reach out. I will respond within 24 hours.
              </p>
            </div>

            {/* Direct Lines */}
            <div className="space-y-4">
              
              {/* Phone Node */}
              <div className="flex items-center justify-between p-4 bg-brand-soft-beige/30 hover:bg-brand-soft-beige/60 border border-brand-border/40 rounded-2xl transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-border/50 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-brand-mocha-light uppercase tracking-wider">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="font-sans font-medium text-[#6A5545] hover:text-brand-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                  className="p-2 text-[#8A7564] hover:text-[#5C4738] rounded-lg hover:bg-brand-cream/80 transition-all cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedText === 'phone' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Node */}
              <div className="flex items-center justify-between p-4 bg-brand-soft-beige/30 hover:bg-brand-soft-beige/60 border border-brand-border/40 rounded-2xl transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-border/50 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-brand-mocha-light uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-sans font-medium text-[#6A5545] hover:text-brand-accent transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                  className="p-2 text-[#8A7564] hover:text-[#5C4738] rounded-lg hover:bg-brand-cream/80 transition-all cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedText === 'email' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Node */}
              <div className="flex items-center p-4 bg-brand-soft-beige/30 border border-brand-border/40 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-border/50 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-brand-mocha-light uppercase tracking-wider">Location</p>
                  <p className="font-sans font-medium text-[#6A5545]">{CONTACT_INFO.location}</p>
                </div>
              </div>

            </div>

            {/* Structured Social Port channels */}
            <div className="pt-6 border-t border-brand-border/40">
              <span className="block font-mono text-[11px] text-[#8A7564] uppercase tracking-widest mb-4">
                DIGITAL NETWORKS
              </span>
              <div className="flex gap-4">
                {/* GitHub link option */}
                <a
                  href={`https://github.com/${CONTACT_INFO.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-brand-soft-beige/50 hover:bg-[#6A5545] text-[#6A5545] hover:text-brand-cream border border-brand-border/40 font-mono text-xs transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GITHUB: {CONTACT_INFO.github}
                </a>

                {/* LinkedIn Link option */}
                <a
                  href="https://linkedin.com/in/anish-kumar-tiwari-72a159265" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-brand-soft-beige/50 hover:bg-[#6A5545] text-[#6A5545] hover:text-brand-cream border border-brand-border/40 font-mono text-xs transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form block */}
          <div className="lg:col-span-7">
            <div className="bg-brand-sand/30 border border-brand-border rounded-[30px] p-8 md:p-10 mocha-shadow">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    id="contact-form"
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="font-mono text-xs font-bold text-[#6A5545] uppercase tracking-wider">
                        FULL NAME
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-brand-border text-[#6A5545] placeholder-[#8A7564]/50 rounded-xl focus:outline-none focus:border-brand-accent transition-all duration-200 font-sans text-sm focus:ring-1 focus:ring-brand-accent/20"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-email" className="font-mono text-xs font-bold text-[#6A5545] uppercase tracking-wider">
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-brand-border text-[#6A5545] placeholder-[#8A7564]/50 rounded-xl focus:outline-none focus:border-brand-accent transition-all duration-200 font-sans text-sm focus:ring-1 focus:ring-brand-accent/20"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-message" className="font-mono text-xs font-bold text-[#6A5545] uppercase tracking-wider">
                        YOUR MESSAGE
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your project vision or message here..."
                        className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-brand-border text-[#6A5545] placeholder-[#8A7564]/50 rounded-xl focus:outline-none focus:border-brand-accent transition-all duration-200 font-sans text-sm focus:ring-1 focus:ring-brand-accent/20 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="form-btn-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#6A5545] hover:bg-[#5C4738] text-brand-cream border border-[#D1C2B1] font-mono font-semibold tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-sm focus:ring-2 focus:ring-brand-accent/40 focus:outline-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-brand-cream border-t-transparent animate-spin" />
                          TRANSMITTING SECURELY...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          TRANSMIT MESSAGE
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="form-success-alert"
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8 text-brand-cream" />
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-display font-medium text-2xl text-brand-accent">
                        Message Transmitted
                      </h5>
                      <p className="font-sans text-[#8A7564] text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you! Your message has been routed successfully. Anish will reconnect with you shortly.
                      </p>
                    </div>

                    <button
                      id="form-btn-reset"
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2 border border-brand-border hover:border-brand-mocha rounded-full font-mono text-[11px] text-[#6A5545] hover:bg-[#E8DDD0] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
