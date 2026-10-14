'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
  price?: number;
}

export function Navbar({ onRegisterClick, price = 199 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: "What You'll Learn", href: '#outcomes' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Who Should Attend', href: '#audience' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A192F] to-[#1D4ED8] flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform duration-200">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-[#0A192F] tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                GARVI EDUCATION
              </span>
              <span className="text-[10px] tracking-wider font-semibold text-slate-500 uppercase mt-0.5">
                Rewa, Madhya Pradesh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919425100000?text=Hello%20Garvi%20Education,%20I%20have%20an%20inquiry%20about%20the%20School%20Management%20Workshop."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 px-3 py-2 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Support</span>
            </a>

            <button
              id="nav-register-btn"
              onClick={onRegisterClick}
              className="inline-flex items-center gap-2 bg-[#0A192F] hover:bg-[#152544] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group"
            >
              <span>Register Now</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                ₹{price}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRegisterClick}
              className="sm:hidden bg-[#0A192F] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              ₹{price} Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-blue-700 py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0A192F] text-white text-base font-semibold py-3.5 rounded-xl shadow-md"
              >
                <span>Register for Workshop</span>
                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded font-bold">₹{price}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Workshop • Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
