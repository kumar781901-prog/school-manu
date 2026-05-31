'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, Phone, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#7a1b1b] via-[#b34d00] to-[#1e6320] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={12} /> +91-9419-XXXXXX
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} /> info@manushikshakendra.edu.in
            </span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <BookOpen size={12} />
            <span>Affiliated to JKBOSE | School Code: XXXX</span>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="bg-cream-50 border-b-4 border-[#f07c00] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* School Emblem */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f07c00] to-[#b34d00] flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-[#c9941a]">
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Cinzel, serif' }}>MSK</span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#7a1b1b] leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              Manu Shiksha Kendra School
            </h1>
            <p className="text-sm text-[#1e6320] font-semibold tracking-wide">
              Rajbagh, Kathua — Jammu & Kashmir
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Affiliated to J&K Board of School Education (JKBOSE) | Est. 2005
            </p>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #2d1500 50%, #0f2e10 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-4 py-3 text-sm font-semibold tracking-wide transition-colors duration-200
                    ${pathname === link.href
                      ? 'text-[#ffb85c] border-b-2 border-[#ffb85c]'
                      : 'text-white hover:text-[#ffb85c]'
                    }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Tagline right side */}
            <div className="hidden lg:block text-[#ffb85c] text-xs font-medium italic" style={{ fontFamily: 'Crimson Text, serif' }}>
              "शिक्षा ही शक्ति है" — Education is Power
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#f07c00]/30 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-5 py-3 text-sm font-semibold border-b border-white/10
                  ${pathname === link.href ? 'text-[#ffb85c] bg-white/10' : 'text-white hover:bg-white/10 hover:text-[#ffb85c]'}`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
