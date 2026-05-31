import Link from 'next/link';
import { Phone, Mail, MapPin, BookOpen, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a0a00] text-white">
      {/* Decorative top border */}
      <div className="border-pattern" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f07c00] to-[#b34d00] flex items-center justify-center shadow-lg border-2 border-[#c9941a]">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Cinzel, serif' }}>MSK</span>
              </div>
              <div>
                <h3 className="font-bold text-[#ffb85c] text-sm leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
                  Manu Shiksha Kendra
                </h3>
                <p className="text-xs text-gray-400">Rajbagh, Kathua – J&K</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-crimson">
              Providing quality education under JKBOSE affiliation, nurturing minds and building character for a brighter tomorrow.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#4f9e4f]">
              <BookOpen size={14} />
              <span>Affiliated to JKBOSE | Est. 2005</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#ffb85c] font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/academics', label: 'Academics' },
                { href: '/admissions', label: 'Admissions' },
                { href: '/faculty', label: 'Our Faculty' },
                { href: '/results', label: 'Exam Results' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ffb85c] text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-[#f07c00] text-xs">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#ffb85c] font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-[#f07c00] flex-shrink-0 mt-0.5" />
                <span>Rajbagh, Kathua<br />Jammu & Kashmir – 184141</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={16} className="text-[#f07c00] flex-shrink-0" />
                <span>+91-9419-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} className="text-[#f07c00] flex-shrink-0" />
                <span>info@manushikshakendra.edu.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Clock size={16} className="text-[#f07c00] flex-shrink-0 mt-0.5" />
                <span>Mon–Sat: 8:00 AM – 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Board Affiliation */}
          <div>
            <h4 className="text-[#ffb85c] font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              Board Affiliation
            </h4>
            <div className="bg-white/5 rounded-lg p-4 border border-[#f07c00]/20">
              <p className="text-[#ffb85c] font-bold text-sm">JKBOSE</p>
              <p className="text-gray-300 text-xs mt-1">J&K Board of School Education</p>
              <div className="mt-3 space-y-1 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>School Code:</span>
                  <span className="text-white">XXXX</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes:</span>
                  <span className="text-white">I – XII</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium:</span>
                  <span className="text-white">English / Urdu</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="text-white">Co-Educational</span>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-[#f07c00]/20 to-[#1e6320]/20 rounded-lg p-3 border border-[#c9941a]/30">
              <p className="text-[#c9941a] text-xs font-semibold text-center italic" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem' }}>
                "ज्ञानं परमं बलम्"
              </p>
              <p className="text-gray-400 text-xs text-center mt-1">Knowledge is the Supreme Power</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Manu Shiksha Kendra School, Rajbagh Kathua. All rights reserved.</p>
          <p>Affiliated to JKBOSE | Designed for Academic Excellence</p>
        </div>
      </div>
    </footer>
  );
}
