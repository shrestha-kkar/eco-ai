import React from 'react';
import {
  Target, Rocket, Zap, Cpu, Shield,
  Phone, Mail,
  LayoutDashboard, Construction, CheckCircle2,
  Clock, Lightbulb, Globe,
  Settings, ArrowRight, Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ label, title, description, centered }) => (
  <div className={cn("mb-16", centered && "text-center max-w-2xl mx-auto")}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
    >
      <Zap size={12} />
      <span>{label}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-black text-brand-navy mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-brand-navy/60 leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay?: number }> = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-8 group overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-green/10 transition-colors" />
    <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-green group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm border border-brand-navy/5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-green transition-colors">{title}</h3>
    <p className="text-brand-navy/60 text-sm leading-relaxed mb-6">
      {desc}
    </p>
    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-green opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
      <span>Learn more</span>
      <ArrowRight size={14} />
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-green selection:text-white pb-20 overflow-x-hidden">

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-brand-navy/5 py-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand-navy/20 group-hover:bg-brand-green transition-colors overflow-hidden">
                <Zap size={22} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-black text-brand-navy leading-none tracking-tight">ECO-AI</h1>
              <span className="text-[9px] font-bold text-brand-green uppercase tracking-[0.3em]">Energy Solutions</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Expertise', 'Our Why', 'Team', 'Projects'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-bold text-brand-navy/40 hover:text-brand-navy transition-colors uppercase tracking-[0.2em]">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:ecoai.energy25@gmail.com" className="px-6 py-2.5 bg-brand-navy text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-xl hover:bg-brand-green transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-brand-navy/20">
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 page-container relative">
        <div className="max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm"
          >
            <Globe size={14} />
            <span>Founded in 2025 • Ahmedabad, Gujarat</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-brand-navy mb-10 leading-[0.95] tracking-tighter"
          >
            Smart <span className="text-brand-green">Infras.</span><br />
            For A <span className="gradient-text">Sustainable</span> Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-brand-navy/60 leading-relaxed max-w-2xl mb-12 font-medium"
          >
            ECO-AI ENERGY SOLUTION AND SERVICES LLP delivers robust, scalable, and secure technical solutions for the energy, education, and infrastructure sectors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <button className="px-10 py-5 bg-gradient-brand text-white text-[12px] font-black uppercase tracking-widest rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform flex items-center gap-3">
              View Capabilities <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white border-4 border-brand-light flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={18} className="text-brand-green" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-[0.2em] leading-tight">
                50+ Projects<br />Delivered Nationwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section-padding page-container">
        <SectionTitle
          label="Our Expertise"
          title="Industrial-Scale Technical Solutions"
          description="We combine engineering excellence with AI-driven intelligence to transform urban and energy infrastructure."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Lightbulb size={28} />}
            title="Renewable Energy (SITC)"
            desc="End-to-end Supply, Installation, Testing, and Commissioning of solar PV, wind, and hybrid energy systems for diverse sectors."
            delay={0.1}
          />
          <FeatureCard
            icon={<Zap size={28} />}
            title="Smarter Electrification"
            desc="Comprehensive DC & AC work including substation integration, energy distribution, and advanced switchgear installation."
            delay={0.2}
          />
          <FeatureCard
            icon={<LayoutDashboard size={28} />}
            title="Traffic Management"
            desc="Designing intelligent highway systems (TMS/ATMS) using real-time analytics to optimize traffic flow and safety."
            delay={0.3}
          />
          <FeatureCard
            icon={<Shield size={28} />}
            title="Advanced Surveillance"
            desc="Industrial-grade CCTV systems, IP networking, and biometric access control for secure perimeter management."
            delay={0.4}
          />
          <FeatureCard
            icon={<Cpu size={28} />}
            title="AI/ML Applications"
            desc="Custom AI solutions for predictive maintenance, computer vision, and industrial automation tasks."
            delay={0.5}
          />
          <FeatureCard
            icon={<Settings size={28} />}
            title="IT Infrastructure"
            desc="Robust digital foundations and scalable technical ecosystems for the energy and education sectors."
            delay={0.6}
          />
        </div>
      </section>

      {/* Impact Section -> Narrative flow */}
      <section id="our-why" className="section-padding bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 blur-[150px] rounded-full translate-x-[40%] translate-y-[-40%]" />

        <div className="page-container flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-1 bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/20"
            >
              <div className="p-10 md:p-16">
                <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-green/20">
                      <Target size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-white">Our Vision</h3>
                      <p className="text-lg text-white/70 italic leading-relaxed">
                        "To be the most trusted technology partner in digital transformation of industries through innovation."
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Rocket size={28} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-white">Our Mission</h3>
                      <p className="text-lg text-white/70 leading-relaxed font-medium">
                        To deliver smart, secure, and sustainable technical solutions that solve real-world problems for businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/20 blur-[120px] rounded-full -z-10" />
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Driving Change<br /><span className="text-brand-green">Every Mile.</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
                Founded with a focus on delivering robust, scalable, and secure technical solutions, we have rapidly become a go-to partner for some of India's biggest infrastructure projects.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-brand-green mb-1">3.5L+</h4>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Daily Transactions</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-brand-green mb-1">3000+</h4>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">KM of Highways</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding page-container">
        <SectionTitle
          label="Our Leadership"
          title="Guided by Industry Visionaries"
          description="Our core management brings over 40 years of combined experience in large-scale infrastructure and smart city projects."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nimesh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass-card p-10 h-full border-t-8 border-t-brand-green relative overflow-hidden">
              <div className="absolute top-4 right-10 text-8xl font-black text-brand-navy/5 -z-10">NM</div>
              <div className="w-20 h-20 bg-brand-navy text-white rounded-3xl flex items-center justify-center text-3xl font-black mb-8 shadow-xl shadow-brand-navy/20 group-hover:bg-brand-green transition-colors">
                NM
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-1">Nimesh Mayank</h3>
              <p className="text-[11px] font-black text-brand-green uppercase tracking-[0.3em] mb-8">Founding Partner & Infrastructure Expert</p>
              <p className="text-brand-navy/60 text-sm leading-relaxed mb-8">
                Former Head of TMS & ATMS Department at L&T and Adani. A strategic expert in nationwide ETC programs, tolling solutions, and maintenance software for large scale highway projects.
              </p>
              <div className="space-y-4">
                {[
                  "Managed 3.5 lakh daily transactions",
                  "Led 50+ major infrastructure projects",
                  "Managed 3000+ KM of highway systems"
                ].map((cite, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold text-brand-navy/80">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                      <Check size={12} />
                    </div>
                    <span>{cite}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mitul */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="glass-card p-10 h-full border-t-8 border-t-brand-blue relative overflow-hidden px-4 md:px-10 py-12">
              <div className="absolute top-4 right-10 text-8xl font-black text-brand-navy/5 -z-10">MT</div>
              <div className="w-20 h-20 bg-brand-navy text-white rounded-3xl flex items-center justify-center text-3xl font-black mb-8 shadow-xl shadow-brand-navy/20 group-hover:bg-brand-blue transition-colors">
                MT
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-1">Mitul Trivedi</h3>
              <p className="text-[11px] font-black text-brand-blue uppercase tracking-[0.3em] mb-8">Techno-Operational Specialist</p>
              <p className="text-brand-navy/60 text-sm leading-relaxed mb-8">
                Techno-operational expert with 18+ years in TMS/ATMS solutions across Sadbhav, L&T IDPL, and IL&FS. Specialist in revenue assurance and stakeholder coordination.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Highway Ops', 'Revenue Assurance', 'SOP Development', 'Incident Mgmt'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-brand-navy/5 rounded-lg text-[10px] font-bold text-brand-navy/60 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-brand-light/50 relative">
        <div className="page-container">
          <SectionTitle
            label="In Flight & Completed"
            title="Real-World Impact Sites"
            description="Our site teams operate across India, delivering high-stakes energy and traffic infrastructure."
          />

          <div className="space-y-8">
            {/* Large Project Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-1 md:p-2 border-brand-green/10"
            >               <div className="bg-white rounded-[24px] overflow-hidden flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-brand-green/8 border-r border-brand-green/10 p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green text-[9px] font-black uppercase tracking-widest mb-6">
                      <CheckCircle2 size={12} />
                      <span>Project Site Completed</span>
                    </div>
                    <h4 className="text-3xl font-black mb-4 text-brand-navy">MAHAGENCAO 250 MW</h4>
                    <p className="text-brand-navy/50 text-sm font-medium">Dondaicha, Maharashtra</p>
                  </div>
                  <div className="space-y-4 pt-10">
                    <div className="flex justify-between items-end border-b border-brand-navy/10 pb-3">
                      <span className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest">Scope</span>
                      <span className="text-sm font-bold text-brand-green uppercase">10 MW AC, DC & MMS</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-10 flex flex-col justify-center gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h5 className="text-[11px] font-black uppercase tracking-widest text-brand-navy/40">Work Executed</h5>
                      <ul className="space-y-3">
                        {[
                          "Comprehensive AC/DC Electrification",
                          "MMS Structures (Module Mounting Systems)",
                          "Substation Connectivity",
                          "Earthing Systems Implementation"
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-brand-navy/70 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/5 flex flex-col items-center justify-center text-center">
                      <Construction size={40} className="text-brand-navy/20 mb-4" />
                      <p className="text-xs font-bold text-brand-navy/40 leading-relaxed uppercase tracking-widest">
                        Critical Infrastructure<br />Project Sites
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 group">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-widest mb-6">
                  <Clock size={12} />
                  <span>Ongoing Site</span>
                </div>
                <h4 className="text-xl font-black text-brand-navy mb-2">NTPC 320 MW Unit</h4>
                <p className="text-xs font-bold text-brand-navy/40 mb-6 uppercase tracking-widest">Pokaran, Jaisalmer</p>
                <p className="text-sm text-brand-navy/60 leading-relaxed">2 MW specialized DC &amp; MMS installation project site.</p>
              </div>

              <div className="glass-card p-8 group">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-widest mb-6">
                  <Rocket size={12} />
                  <span>Innovation Group</span>
                </div>
                <h4 className="text-xl font-black text-brand-navy mb-2">Solar AI Solution</h4>
                <p className="text-xs font-bold text-brand-navy/40 mb-6 uppercase tracking-widest">Research &amp; POC</p>
                <p className="text-sm text-brand-navy/60 leading-relaxed">Image Processing based Solar Plant Maintenance Solution for large utility plants.</p>
              </div>

              <div className="glass-card p-8 group">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[9px] font-black uppercase tracking-widest mb-6">
                  <Globe size={12} />
                  <span>Regional Sites</span>
                </div>
                <h4 className="text-xl font-black text-brand-navy mb-2">Multi-State Operations</h4>
                <p className="text-xs font-bold text-brand-navy/40 mb-6 uppercase tracking-widest">Maharashtra · Rajasthan · Gujarat</p>
                <p className="text-sm text-brand-navy/60 leading-relaxed">Expanding project footprint across key energy infrastructure corridors in western India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section/Clients Section (Very Minimal) */}
      <section className="py-24 page-container border-b border-brand-navy/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em] mb-2 opacity-40">Trusted by</h4>
            <p className="text-2xl font-black text-brand-navy/80">Leading Enterprises</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-center">
              <p className="text-2xl font-black uppercase tracking-[0.2em]">TATA Power</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black uppercase tracking-[0.1em]">SAHARA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect Section - dark navy, matching "Driving Change" section */}
      <footer id="contact" className="bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-green/10 blur-[150px] rounded-full translate-x-[-40%] translate-y-[-40%]" />
        <div className="page-container pt-32 pb-16 flex flex-col lg:flex-row gap-20 items-start relative z-10">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-green/20">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white leading-none">Connect.</h4>
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-[0.3em] mt-1">Growth Partnership</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 font-medium">
              Ready to scale your next infrastructure or energy project? Reach out to our technical advisory team.
            </p>
            <div className="space-y-4">
              <a href="mailto:ecoai.energy25@gmail.com" className="flex items-center gap-3 text-sm font-bold text-white/80 hover:text-brand-green transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Mail size={16} /></div>
                ecoai.energy25@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm font-bold text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Phone size={16} /></div>
                +91 99255 05952
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Ahmedabad HQ</h5>
              <address className="not-italic text-sm font-bold text-white/80 space-y-2 leading-relaxed">
                S-203, Shukan Mall<br />
                Science City Road, Sola<br />
                Ahmedabad, Gujarat
              </address>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] flex flex-col justify-between">
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">Newsletter</h5>
                <p className="text-sm font-bold mb-6 text-white">Stay updated on our smart city initiatives.</p>
              </div>
              <div className="relative">
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-green transition-colors text-white" />
                <button className="absolute right-2 top-2 bottom-2 w-10 bg-brand-green text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-brand-green/20">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tiny Legal Footer */}
        <div className="border-t border-white/10 py-8 page-container flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">© 2025 ECO-AI ENERGY SOLUTION AND SERVICES LLP</p>
          <div className="flex gap-8">
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] cursor-pointer hover:text-brand-green transition-colors">Privacy Policy</span>
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] cursor-pointer hover:text-brand-green transition-colors">Digital Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
