import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const CONTACT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbynCIsDUaWfw9munnpwHHxSCwcTk7H3bcMchh4gNXjxP9iAE1pw1mXY3hQr8HbaK-Zw/exec';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const navItems = [
    { label: 'Home', hash: '#top' },
    { label: 'Expertise', hash: '#expertise' },
    { label: 'Our Why', hash: '#our-why' },
    { label: 'Team', hash: '#team' },
    { label: 'Projects', hash: '#projects' },
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
    if (!isHome) {
      // If not on home, navigate to home+hash so the section can be scrolled to
      navigate('/' + hash);
    } else {
      // If already on home, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setStatusMessage('Please enter your name.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setStatusMessage('Please provide a phone number or email address.');
      return;
    }

    // Validate phone digit count (allow international formats) if phone provided
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly) {
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        setStatusMessage('Please enter a valid phone number (10–15 digits).');
        return;
      }
    }

    setSubmitting(true);
    setStatusMessage('');

    try {
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('message', message);

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error('Submit failed');
      }

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Submit failed');
      }

      setStatusMessage('Your inquiry was sent successfully.');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatusMessage('Failed to send inquiry. Please try again later.');
    } finally {
      setSubmitting(false);
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
            <img src={logo} alt="Eco AI Logo" className="w-10 h-10 object-contain rounded-xl shadow-xl shadow-brand-navy/10" />
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
                  className="text-xs font-bold transition-colors uppercase tracking-[0.2em] text-brand-navy/40 hover:text-brand-navy"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleSectionClick(item.hash)}
                  className="text-xs font-bold transition-colors uppercase tracking-[0.2em] cursor-pointer bg-transparent border-none text-brand-navy/40 hover:text-brand-navy"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleSectionClick('#contact')}
              className="px-6 py-2.5 bg-brand-navy text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-xl hover:bg-brand-green transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-brand-navy/20"
            >
              Start Project
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-[100px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-brand-navy/20 text-brand-navy overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-green/5 blur-[150px] rounded-full translate-x-[-40%] translate-y-[-40%]" />
        
        {/* Details Section */}
        <div className="page-container pt-32 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
            {/* Column 1: Connect & Address */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-green/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-brand-navy leading-none">Connect.</h4>
                  <p className="text-[10px] font-bold text-brand-green uppercase tracking-[0.3em] mt-1">Growth Partnership</p>
                </div>
              </div>
              <p className="text-brand-navy/60 leading-relaxed mb-8 font-medium">
                Ready to scale your next infrastructure or energy project? Reach out to our technical advisory team.
              </p>
              <div className="w-full">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/40 mb-6">Ahmedabad HQ</h5>
                <address className="not-italic text-sm font-bold text-brand-navy/80 space-y-2 leading-relaxed">
                  S-203, Shukan Mall, Science City Road, Sola, Ahmedabad, Gujarat
                </address>
              </div>
            </div>

            {/* Column 2: Contact Details */}
            <div className="flex flex-col justify-start">
              <div className="space-y-4">
                <a href="mailto:ecoai.energy25@gmail.com" className="flex items-center gap-3 text-sm font-bold text-brand-navy p-4 bg-brand-green/10 rounded-lg hover:bg-brand-green/20 transition-colors border border-brand-green/20">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center"><Mail size={16} /></div>
                  <span>ecoai.energy25@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm font-bold text-brand-navy p-4 bg-brand-green/10 rounded-lg border border-brand-green/20">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center"><ArrowRight size={16} /></div>
                  <span>+91 99255 05952</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="page-container pb-16 relative z-10">
          <form
            className="p-8 bg-brand-navy/5 backdrop-blur-md border border-brand-navy/10 rounded-[32px] grid gap-6"
            onSubmit={handleContactSubmit}
          >
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-navy/40 mb-4">Contact</h5>
              <p className="text-sm font-bold mb-6 text-brand-navy">Share your project details and our team will contact you shortly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={name}
                onChange={event => setName(event.target.value)}
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full bg-brand-navy/5 border border-brand-navy/10 rounded-2xl py-4 px-6 text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-green transition-colors text-brand-navy"
              />
              <input
                value={phone}
                onChange={event => setPhone(event.target.value)}
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full bg-brand-navy/5 border border-brand-navy/10 rounded-2xl py-4 px-6 text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-green transition-colors text-brand-navy"
              />
              <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full bg-brand-navy/5 border border-brand-navy/10 rounded-2xl py-4 px-6 text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-green transition-colors text-brand-navy"
              />
            </div>
            <textarea
              value={message}
              onChange={event => setMessage(event.target.value)}
              name="message"
              rows={5}
              placeholder="Your message"
              className="w-full bg-brand-navy/5 border border-brand-navy/10 rounded-3xl py-4 px-6 text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-green transition-colors text-brand-navy resize-none"
            />
            {statusMessage && (
              <p className="text-sm font-medium text-brand-navy/80">{statusMessage}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-fit px-8 py-4 bg-brand-green text-white font-black uppercase tracking-[0.15em] rounded-2xl hover:bg-brand-green/90 transition-colors shadow-lg shadow-brand-green/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>

        <div className="border-t border-brand-navy/10 py-8 page-container flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-[9px] font-bold text-brand-navy/30 uppercase tracking-[0.3em]">© 2025 ECO-AI ENERGY SOLUTION AND SERVICES LLP</p>
          <div className="flex gap-8">
            <span className="text-[9px] font-bold text-brand-navy/30 uppercase tracking-[0.2em] cursor-pointer hover:text-brand-green transition-colors">Privacy Policy</span>
            <span className="text-[9px] font-bold text-brand-navy/30 uppercase tracking-[0.2em] cursor-pointer hover:text-brand-green transition-colors">Digital Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
