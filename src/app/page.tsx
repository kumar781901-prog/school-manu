import Link from 'next/link';
import {
  BookOpen, Users, Award, Star, ChevronRight,
  GraduationCap, Heart, Target, Lightbulb, Phone
} from 'lucide-react';

const notices = [
  "📢 Admissions Open for Session 2024-25 | Classes I to XII",
  "🏆 MSK Students excel in JKBOSE Class 10 & 12 Results 2024",
  "📅 Annual Prize Distribution Ceremony scheduled for December 15, 2024",
  "🎓 New Computer Lab inaugurated — equipped with 30 workstations",
  "📝 Half-yearly examination schedule released — check Results section",
  "🌟 School receives Best Educational Institution Award, Kathua District 2024",
];

const stats = [
  { value: '1200+', label: 'Students Enrolled', icon: Users },
  { value: '98%', label: 'Pass Percentage', icon: Award },
  { value: '45+', label: 'Qualified Faculty', icon: GraduationCap },
  { value: '18+', label: 'Years of Excellence', icon: Star },
];

const features = [
  {
    icon: BookOpen,
    title: 'JKBOSE Curriculum',
    desc: 'Comprehensive education following J&K Board syllabus from Class I to XII with updated textbooks and modern pedagogy.',
    color: '#f07c00',
  },
  {
    icon: Lightbulb,
    title: 'Smart Classrooms',
    desc: 'Digital learning environment with projectors, interactive boards, and e-learning resources for enhanced comprehension.',
    color: '#1e6320',
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    desc: 'Sports, cultural activities, NCC, and extracurriculars ensure balanced growth of mind, body, and character.',
    color: '#7a1b1b',
  },
  {
    icon: Target,
    title: 'Excellent Results',
    desc: 'Consistent top results in JKBOSE examinations with many students securing merit positions at district and state level.',
    color: '#c9941a',
  },
];

const programs = [
  { name: 'Primary Section', range: 'Classes I – V', color: '#f07c00' },
  { name: 'Middle Section', range: 'Classes VI – VIII', color: '#1e6320' },
  { name: 'Secondary Section', range: 'Classes IX – X', color: '#7a1b1b' },
  { name: 'Senior Secondary', range: 'Classes XI – XII', color: '#c9941a' },
];

export default function HomePage() {
  return (
    <div className="bg-[#faf5e8]">

      {/* News Ticker */}
      <div className="bg-[#7a1b1b] text-white py-2 overflow-hidden">
        <div className="flex items-center">
          <span className="bg-[#f07c00] text-white text-xs font-bold px-3 py-1 mr-4 flex-shrink-0 whitespace-nowrap" style={{ fontFamily: 'Cinzel, serif' }}>
            NOTICE
          </span>
          <div className="ticker-wrap flex-1">
            <div className="animate-marquee inline-block whitespace-nowrap text-sm">
              {notices.join('   •   ')}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="hero-pattern relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden"
      >
        {/* Decorative mandala bg */}
        <div className="absolute inset-0 mandala-bg opacity-30" />

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-[#f07c00]/20" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-[#4f9e4f]/20" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full border border-[#c9941a]/10" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Emblem */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#f07c00] to-[#b34d00] flex items-center justify-center shadow-2xl border-4 border-[#c9941a]"
              style={{ boxShadow: '0 0 40px rgba(240,124,0,0.4)' }}>
              <div className="text-center">
                <div className="text-white font-bold text-2xl leading-none" style={{ fontFamily: 'Cinzel, serif' }}>MSK</div>
                <div className="text-[#ffecd4] text-xs">School</div>
              </div>
            </div>
          </div>

          <div className="text-[#ffb85c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Rajbagh, Kathua — Jammu & Kashmir
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Manu Shiksha{' '}
            <span className="gradient-text">Kendra</span>{' '}
            School
          </h1>

          <p className="text-[#f4e9cc] text-lg md:text-xl mb-2 font-crimson italic">
            Affiliated to J&K Board of School Education (JKBOSE)
          </p>
          <p className="text-[#aed8ae] text-base mb-8">
            Nurturing Excellence · Building Character · Shaping Futures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f07c00, #b34d00)', fontFamily: 'Cinzel, serif', boxShadow: '0 4px 20px rgba(240,124,0,0.4)' }}
            >
              Apply for Admission <ChevronRight size={18} />
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold border-2 border-[#ffb85c] text-[#ffb85c] hover:bg-[#ffb85c] hover:text-[#1a0a00] transition-all duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              View Results <ChevronRight size={18} />
            </Link>
          </div>

          {/* JKBOSE badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-[#c9941a]/40">
            <div className="w-2 h-2 rounded-full bg-[#4f9e4f] animate-pulse" />
            <span className="text-[#f4e9cc] text-sm">JKBOSE Affiliated School | School Code: XXXX</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#7a1b1b] via-[#b34d00] to-[#1e6320] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center text-white">
              <Icon className="mx-auto mb-2 text-[#ffb85c]" size={28} />
              <div className="text-3xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>{value}</div>
              <div className="text-[#ffecd4] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Why Choose MSK School?
            </h2>
            <p className="text-gray-600 mt-6 text-lg font-crimson max-w-2xl mx-auto">
              A tradition of academic excellence combined with modern teaching methods to prepare students for life's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="card-hover bg-white rounded-2xl p-6 border border-[#edd8a8] shadow-sm">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}18`, border: `2px solid ${color}30` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 className="font-bold text-[#1a0a00] mb-2 text-base" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Academic Programs
            </h2>
            <p className="text-gray-600 mt-6 font-crimson text-lg">Classes I through XII under JKBOSE curriculum</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map(({ name, range, color }) => (
              <div
                key={name}
                className="card-hover rounded-2xl overflow-hidden border-2"
                style={{ borderColor: color }}
              >
                <div className="h-3" style={{ background: color }} />
                <div className="p-6 text-center">
                  <GraduationCap size={40} className="mx-auto mb-3" style={{ color }} />
                  <h3 className="font-bold text-[#1a0a00] text-base mb-1" style={{ fontFamily: 'Cinzel, serif' }}>{name}</h3>
                  <p className="text-gray-500 text-sm font-semibold">{range}</p>
                  <Link
                    href="/academics"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                    style={{ color }}
                  >
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Teaser */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #fff8f0, #f0f7f0)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[#f07c00] text-sm font-bold tracking-widest uppercase mb-2">
                From The Principal's Desk
              </div>
              <h2 className="text-3xl font-bold text-[#7a1b1b] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                A Message of Inspiration
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#f07c00] to-[#1e6320] rounded mb-5" />
              <blockquote className="text-gray-700 text-lg leading-relaxed font-crimson italic border-l-4 border-[#f07c00] pl-5 mb-6">
                "At Manu Shiksha Kendra School, we believe education is not merely the transfer of knowledge, but the kindling of a flame that will guide our students throughout their lives. We are committed to providing an environment where every child can discover their potential and grow into responsible citizens of tomorrow."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f07c00] to-[#7a1b1b] flex items-center justify-center text-white font-bold text-xl" style={{ fontFamily: 'Cinzel, serif' }}>
                  P
                </div>
                <div>
                  <p className="font-bold text-[#1a0a00]" style={{ fontFamily: 'Cinzel, serif' }}>Mr. / Mrs. [Principal Name]</p>
                  <p className="text-gray-500 text-sm">Principal, MSK School Rajbagh</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Academic Excellence', value: '98%', sub: 'Pass Rate 2024' },
                { label: 'District Toppers', value: '12', sub: 'From our school' },
                { label: 'Scholarships', value: '35+', sub: 'Awarded annually' },
                { label: 'Years Strong', value: '18+', sub: 'Of quality education' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[#edd8a8] card-hover">
                  <div className="text-3xl font-bold text-[#f07c00]" style={{ fontFamily: 'Cinzel, serif' }}>{value}</div>
                  <div className="text-[#1a0a00] font-semibold text-sm mt-1">{label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Latest Notices
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { date: 'Dec 01, 2024', title: 'Admissions Open for Session 2024-25 – Classes I to XII', tag: 'Admissions', tagColor: '#f07c00' },
              { date: 'Nov 28, 2024', title: 'Half-Yearly Examination Time-Table Released – Download from Results Section', tag: 'Exam', tagColor: '#7a1b1b' },
              { date: 'Nov 20, 2024', title: 'Annual Sports Day scheduled on December 10, 2024 – All students to participate', tag: 'Event', tagColor: '#1e6320' },
              { date: 'Nov 15, 2024', title: 'PTM (Parent-Teacher Meeting) scheduled for November 30, 2024', tag: 'Meeting', tagColor: '#c9941a' },
              { date: 'Nov 10, 2024', title: 'Scholarship forms for meritorious students available at school office', tag: 'Scholarship', tagColor: '#4f9e4f' },
            ].map(({ date, title, tag, tagColor }) => (
              <div key={title} className="flex items-start gap-4 p-4 rounded-xl border border-[#edd8a8] hover:bg-[#faf5e8] transition-colors duration-200 group cursor-pointer">
                <div className="text-center flex-shrink-0 w-14">
                  <div className="text-xs text-gray-400">{date.split(' ')[0]}</div>
                  <div className="text-xl font-bold text-[#f07c00]" style={{ fontFamily: 'Cinzel, serif' }}>{date.split(' ')[1].replace(',', '')}</div>
                  <div className="text-xs text-gray-400">{date.split(' ')[2]}</div>
                </div>
                <div className="w-px bg-[#edd8a8] self-stretch flex-shrink-0" />
                <div className="flex-1">
                  <span
                    className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-1 text-white"
                    style={{ background: tagColor }}
                  >
                    {tag}
                  </span>
                  <p className="text-[#1a0a00] text-sm font-semibold group-hover:text-[#f07c00] transition-colors">{title}</p>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#f07c00] transition-colors flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-14 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #2d1500 50%, #0f2e10 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
            Begin Your Journey with MSK School
          </h2>
          <p className="text-[#ffecd4] mb-8 font-crimson text-lg">
            Secure a bright future for your child. Admissions open for all classes. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f07c00, #b34d00)', fontFamily: 'Cinzel, serif', boxShadow: '0 4px 20px rgba(240,124,0,0.4)' }}
            >
              Apply Now <ChevronRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold border-2 border-[#4f9e4f] text-[#4f9e4f] hover:bg-[#4f9e4f] hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <Phone size={16} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
