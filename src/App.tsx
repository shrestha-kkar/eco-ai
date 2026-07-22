import React from 'react';
import {
  Target, Rocket, Zap, Cpu, Shield,
  LayoutDashboard, CheckCircle2,
  Lightbulb, Globe,
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
    {/* <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-green opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
      <span>Learn more</span>
      <ArrowRight size={14} />
    </div> */}
  </motion.div>
);

// --- Home Page ---

export default function App() {
  return (
    <div className="pb-20" id="top">

      {/* Hero Section */}
      <section className="pt-32 pb-24 page-container relative">
        <div className="max-w-4xl relative z-10">
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm"
          >
            <Globe size={14} />
            <span>Founded in 2025 • Ahmedabad, Gujarat</span>
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
            desc="Comprehensive DC & AC work including substation integration, energy storage, energy distribution, and advanced switchgear installation."
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
      <section id="our-why" className="section-padding bg-brand-navy/5 text-brand-navy overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full translate-x-[40%] translate-y-[-40%]" />

        <div className="page-container flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-1 bg-brand-navy/5 backdrop-blur-3xl rounded-[40px] border border-brand-navy/10"
            >
              <div className="p-10 md:p-16">
                <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-green/20">
                      <Target size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-brand-navy">Our Vision</h3>
                      <p className="text-lg text-brand-navy/70 italic leading-relaxed">
                        "To be the most trusted technology partner in digital transformation of industries through innovation."
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 border border-brand-green/20">
                      <Rocket size={28} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-brand-navy">Our Mission</h3>
                      <p className="text-lg text-brand-navy/70 leading-relaxed font-medium">
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
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-brand-navy">
                Driving Change<br /><span className="text-brand-green">Every Mile.</span>
              </h2>
              <p className="text-xl text-brand-navy/60 mb-12 leading-relaxed">
                Founded with a focus on delivering robust, scalable, and secure technical solutions, we have rapidly become a go-to partner for some of India's biggest infrastructure projects.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-brand-green mb-1">3.5L+</h4>
                  <p className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest">Daily Transactions</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-brand-green mb-1">3000+</h4>
                  <p className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest">KM of Highways</p>
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
              <div className="flex gap-6 items-center mb-8">
                <div className="w-28 h-28 rounded-3xl shadow-xl shadow-brand-navy/20 group-hover:shadow-2xl group-hover:shadow-brand-green/30 transition-all overflow-hidden flex-shrink-0">
                  <img src="/media/team/nimesh.png" alt="Nimesh Mayank" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-brand-navy mb-1">Nimesh Mayank</h3>
                  <p className="text-[13px] font-black text-brand-green uppercase tracking-[0.3em]">Founding Partner & Infrastructure Expert</p>
                </div>
              </div>
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
              <div className="flex gap-6 items-center mb-8">
                <div className="w-28 h-28 rounded-3xl shadow-xl shadow-brand-navy/20 group-hover:shadow-2xl group-hover:shadow-brand-blue/30 transition-all overflow-hidden flex-shrink-0">
                  <img src="/media/team/mitul.png" alt="Mitul Trivedi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-brand-navy mb-1">Mitul Trivedi</h3>
                  <p className="text-[13px] font-black text-brand-blue uppercase tracking-[0.3em]">Techno-Operational Specialist</p>
                </div>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { src: '/media/project/photo1.jpg', alt: 'Project Site 1' },
              { src: '/media/project/photo2.jpg', alt: 'Project Site 2' },
              { src: '/media/project/photo3.jpg', alt: 'Project Site 3' },
              { src: '/media/project/photo4.jpg', alt: 'Project Site 4' },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-video shadow-lg shadow-brand-navy/10 hover:shadow-xl hover:shadow-brand-green/20 transition-all"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 border-l-4 border-l-brand-blue"
            >
              <h4 className="text-sm font-black text-brand-navy/40 uppercase tracking-widest mb-3">Completed Projects</h4>
              <p className="text-4xl md:text-5xl font-black text-brand-blue leading-tight">3+ <span className="text-lg text-brand-navy/60">Completed</span></p>
              <p className="text-xs text-brand-navy/50 mt-4">Successfully delivered infrastructure projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 border-l-4 border-l-brand-green"
            >
              <h4 className="text-sm font-black text-brand-navy/40 uppercase tracking-widest mb-3">Commissioned Projects</h4>
              <p className="text-4xl md:text-5xl font-black text-brand-green leading-tight">35+ <span className="text-lg text-brand-navy/60">MWh</span></p>
              <p className="text-xs text-brand-navy/50 mt-4">Clean energy capacity deployed across India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 border-l-4 border-l-brand-blue"
            >
              <h4 className="text-sm font-black text-brand-navy/40 uppercase tracking-widest mb-3">Presence In</h4>
              <p className="text-4xl md:text-5xl font-black text-brand-blue leading-tight">2+ <span className="text-lg text-brand-navy/60">States</span></p>
              <p className="text-xs text-brand-navy/50 mt-4">Active operations across multiple Indian states</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section/Clients Section */}
      <section className="py-12 page-container border-b border-brand-navy/5">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em] opacity-40">Trusted by</h4>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src="/media/client-logos/logo1.png"
                alt="Client Logo 1"
                className="h-20 w-auto object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src="/media/client-logos/logo2.png"
                alt="Client Logo 2"
                className="h-20 w-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
