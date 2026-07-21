import { Mail, Phone, MapPin } from 'lucide-react';
import logo from './assets/logo.png';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-xl w-full text-center">
        <img
          src={logo}
          alt="Eco AI Logo"
          className="w-20 h-20 object-contain rounded-2xl shadow-xl shadow-brand-navy/10 mx-auto mb-8"
        />

        <h1 className="text-2xl md:text-3xl font-black text-brand-navy leading-tight tracking-tight mb-1">
          ECO-AI ENERGY SOLUTION AND SERVICES LLP
        </h1>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm">
          <span>Website Under Construction</span>
        </div>

        <p className="text-brand-navy/60 leading-relaxed font-medium mb-12">
          Our website is launching soon. In the meantime, feel free to reach out to us directly.
        </p>

        <div className="glass-card rounded-3xl p-8 grid gap-4 text-left">
          <a
            href="mailto:ecoai.energy25@gmail.com"
            className="flex items-center gap-3 text-sm font-bold text-brand-navy p-4 bg-brand-green/10 rounded-lg hover:bg-brand-green/20 transition-colors border border-brand-green/20"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0"><Mail size={16} /></div>
            <span>ecoai.energy25@gmail.com</span>
          </a>
          <a
            href="tel:+919925505952"
            className="flex items-center gap-3 text-sm font-bold text-brand-navy p-4 bg-brand-green/10 rounded-lg hover:bg-brand-green/20 transition-colors border border-brand-green/20"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0"><Phone size={16} /></div>
            <span>+91 99255 05952</span>
          </a>
          <div className="flex items-center gap-3 text-sm font-bold text-brand-navy p-4 bg-brand-green/10 rounded-lg border border-brand-green/20">
            <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0"><MapPin size={16} /></div>
            <span>S-203, Shukan Mall, Science City Road, Sola, Ahmedabad, Gujarat</span>
          </div>
        </div>

        <p className="text-[9px] font-bold text-brand-navy/30 uppercase tracking-[0.3em] mt-12">
          © 2025 ECO-AI ENERGY SOLUTION AND SERVICES LLP
        </p>
      </div>
    </div>
  );
}
