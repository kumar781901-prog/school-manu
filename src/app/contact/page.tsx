import PageHero from '@/components/PageHero';
import { MapPin, Phone, Mail, Clock, MessageSquare, Building, Bus } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="Contact Us"
        subtitle="We are always here to help — reach out to us for admissions, queries, or feedback"
        breadcrumb="Contact"
      />

      {/* Quick Contact Cards */}
      <section className="py-12 px-4 bg-white border-b border-[#edd8a8]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: Phone, color: '#f07c00',
              title: 'Call Us',
              lines: ['+91-9419-XXXXXX', '+91-9419-YYYYYY'],
              sub: 'Mon–Sat, 8AM–2PM',
            },
            {
              icon: Mail, color: '#1e6320',
              title: 'Email Us',
              lines: ['info@manushikshakendra.edu.in', 'principal@manushikshakendra.edu.in'],
              sub: 'We reply within 24 hours',
            },
            {
              icon: MapPin, color: '#7a1b1b',
              title: 'Visit Us',
              lines: ['Rajbagh, Kathua', 'Jammu & Kashmir – 184141'],
              sub: 'Near [local landmark]',
            },
          ].map(({ icon: Icon, color, title, lines, sub }) => (
            <div key={title} className="text-center rounded-2xl p-6 border border-[#edd8a8] card-hover bg-[#faf5e8]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${color}18` }}>
                <Icon size={26} style={{ color }} />
              </div>
              <h3 className="font-bold text-[#1a0a00] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
              {lines.map((line) => (
                <p key={line} className="text-gray-700 text-sm">{line}</p>
              ))}
              <p className="text-gray-400 text-xs mt-2">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#7a1b1b] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
              Send Us a Message
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#f07c00] to-[#1e6320] rounded mb-6" />

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1a0a00] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#edd8a8] bg-white focus:outline-none focus:border-[#f07c00] text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a0a00] mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#edd8a8] bg-white focus:outline-none focus:border-[#f07c00] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a0a00] mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#edd8a8] bg-white focus:outline-none focus:border-[#f07c00] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a0a00] mb-1.5">Subject *</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#edd8a8] bg-white focus:outline-none focus:border-[#f07c00] text-sm transition-colors">
                  <option value="">Select a subject</option>
                  <option>Admission Enquiry</option>
                  <option>Fee Related Query</option>
                  <option>Academic Query</option>
                  <option>Result / TC Request</option>
                  <option>Complaint / Suggestion</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a0a00] mb-1.5">Student Class (if applicable)</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#edd8a8] bg-white focus:outline-none focus:border-[#f07c00] text-sm transition-colors">
                  <option value="">Select class</option>
                  {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((c) => (
                    <option key={c}>Class {c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a0a00] mb-1.5">Message *</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#edd8a8] bg-white focus:outline-none focus:border-[#f07c00] text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #f07c00, #b34d00)', fontFamily: 'Cinzel, serif', boxShadow: '0 4px 15px rgba(240,124,0,0.3)' }}
              >
                <MessageSquare size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* School Info + Map */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#7a1b1b] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                School Information
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#f07c00] to-[#1e6320] rounded mb-6" />
            </div>

            {/* Map Placeholder */}
            <div className="h-52 rounded-2xl bg-gradient-to-br from-[#1e6320] to-[#0f2e10] flex items-center justify-center relative overflow-hidden border border-[#edd8a8]">
              <div className="text-center text-white z-10">
                <MapPin size={36} className="mx-auto mb-2 text-[#ffb85c]" />
                <p className="font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Manu Shiksha Kendra School</p>
                <p className="text-sm text-[#ffecd4]">Rajbagh, Kathua, J&K</p>
                <a
                  href="https://maps.google.com/?q=Rajbagh+Kathua+Jammu+Kashmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full hover:bg-white/30 transition-colors font-semibold"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="absolute inset-0 mandala-bg opacity-20" />
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 border border-[#edd8a8]">
              <h3 className="font-bold text-[#1a0a00] mb-4 flex items-center gap-2" style={{ fontFamily: 'Cinzel, serif' }}>
                <Clock size={18} className="text-[#f07c00]" /> Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Monday – Friday', time: '8:00 AM – 2:30 PM', note: 'Full day' },
                  { day: 'Saturday', time: '8:00 AM – 1:00 PM', note: 'Half day' },
                  { day: 'Sunday', time: 'Closed', note: 'Holiday' },
                ].map(({ day, time, note }) => (
                  <div key={day} className="flex justify-between items-center py-1.5 border-b border-[#edd8a8] last:border-0">
                    <span className="font-semibold text-[#1a0a00]">{day}</span>
                    <div className="text-right">
                      <p className="text-[#f07c00] font-semibold">{time}</p>
                      <p className="text-gray-400 text-xs">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Reach */}
            <div className="bg-white rounded-2xl p-6 border border-[#edd8a8]">
              <h3 className="font-bold text-[#1a0a00] mb-4 flex items-center gap-2" style={{ fontFamily: 'Cinzel, serif' }}>
                <Bus size={18} className="text-[#1e6320]" /> How to Reach
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Building size={16} className="text-[#f07c00] flex-shrink-0 mt-0.5" />
                  <p><strong>Address:</strong> Manu Shiksha Kendra School, Rajbagh, Kathua, Jammu & Kashmir – 184141</p>
                </div>
                <div className="flex items-start gap-3">
                  <Bus size={16} className="text-[#1e6320] flex-shrink-0 mt-0.5" />
                  <p><strong>By Bus:</strong> Regular bus service from Kathua city centre to Rajbagh. Get off at Rajbagh main stop.</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#7a1b1b] flex-shrink-0 mt-0.5" />
                  <p><strong>Landmark:</strong> Near [local landmark, e.g., Rajbagh Chowk / Main Market]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Key Contacts
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { dept: 'Principal Office', contact: '+91-9419-XXXXXX', email: 'principal@manushikshakendra.edu.in', color: '#f07c00' },
              { dept: 'Admissions Office', contact: '+91-9419-YYYYYY', email: 'admissions@manushikshakendra.edu.in', color: '#1e6320' },
              { dept: 'Accounts / Fee', contact: '+91-9419-ZZZZZZ', email: 'accounts@manushikshakendra.edu.in', color: '#7a1b1b' },
              { dept: 'Academic Office', contact: '+91-9419-AAAAAA', email: 'academics@manushikshakendra.edu.in', color: '#c9941a' },
              { dept: 'Examination Cell', contact: '+91-9419-BBBBBB', email: 'exams@manushikshakendra.edu.in', color: '#3b6b9e' },
              { dept: 'Transport / Sports', contact: '+91-9419-CCCCCC', email: 'sports@manushikshakendra.edu.in', color: '#4f9e4f' },
            ].map(({ dept, contact, email, color }) => (
              <div key={dept} className="rounded-2xl p-5 border-2 card-hover bg-[#faf5e8]" style={{ borderColor: `${color}30` }}>
                <h3 className="font-bold text-[#1a0a00] text-sm mb-3" style={{ fontFamily: 'Cinzel, serif', borderLeft: `3px solid ${color}`, paddingLeft: '8px' }}>
                  {dept}
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                  <Phone size={13} style={{ color }} /> {contact}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <Mail size={13} style={{ color }} /> {email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
