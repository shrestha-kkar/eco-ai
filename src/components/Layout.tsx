import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Mail, ArrowRight } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isGallery = location.pathname === '/gallery';
  const isHome = location.pathname === '/';

  const navItems = [
    { label: 'Expertise', hash: '#expertise' },
    { label: 'Our Why', hash: '#our-why' },
    { label: 'Team', hash: '#team' },
    { label: 'Projects', hash: '#projects' },
    { label: 'Gallery', href: '/gallery' },
  ];

  // Handle scrolling to section after navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash && isHome) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, isHome]);

  // Handle navigation to sections
  const handleSectionClick = (hash: string) => {
    if (isGallery) {
      // If on gallery, navigate home first, then scroll
      navigate('/' + hash);
    } else {
      // If already on home, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-green selection:text-white overflow-x-hidden">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-brand-navy/5 py-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group cursor-pointer">
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
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map(item => (
              item.href ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] ${
                    isGallery && item.label === 'Gallery'
                      ? 'text-brand-navy'
                      : 'text-brand-navy/40 hover:text-brand-navy'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleSectionClick(item.hash)}
                  className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] cursor-pointer bg-transparent border-none ${
                    isHome ? 'text-brand-navy/40 hover:text-brand-navy' : 'text-brand-navy/40 hover:text-brand-navy'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:ecoai.energy25@gmail.com"
              className="px-6 py-2.5 bg-brand-navy text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-xl hover:bg-brand-green transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-brand-navy/20"
            >
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-[100px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white overflow-hidden relative">
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
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><ArrowRight size={16} /></div>
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
