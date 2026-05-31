import PageHero from '@/components/PageHero';
import { Target, Eye, Heart, Award, BookOpen, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="About Our School"
        subtitle="Building a legacy of excellence in Rajbagh, Kathua since 2005"
        breadcrumb="About"
      />

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f07c00] text-sm font-bold tracking-widest uppercase mb-2">Our Story</div>
              <h2 className="text-3xl font-bold text-[#7a1b1b] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                A Beacon of Education in Kathua
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#f07c00] to-[#1e6320] rounded mb-6" />
              <div className="space-y-4 text-gray-700 font-crimson text-lg leading-relaxed">
                <p>
                  Manu Shiksha Kendra School was established in 2005 with a vision to provide quality education to the children of Rajbagh and the broader Kathua district in Jammu & Kashmir. Affiliated to the Jammu & Kashmir Board of School Education (JKBOSE), our school has grown from a humble beginning into one of the most respected educational institutions in the region.
                </p>
                <p>
                  Over the years, we have maintained our commitment to academic excellence while embracing modern educational practices. Our students consistently perform at the top in JKBOSE examinations, bringing pride to their families and our institution.
                </p>
                <p>
                  With state-of-the-art facilities, a dedicated faculty team, and a warm, nurturing environment, MSK School provides an ideal setting for holistic child development from Classes I through XII.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#edd8a8] card-hover col-span-2">
                <div className="text-4xl font-bold text-[#f07c00]" style={{ fontFamily: 'Cinzel, serif' }}>2005</div>
                <p className="text-gray-600 mt-1">Year Established</p>
              </div>
              {[
                { num: '1200+', label: 'Total Students' },
                { num: '45+', label: 'Teaching Staff' },
                { num: '12', label: 'Classrooms per Floor' },
                { num: '98%', label: 'Board Pass Rate' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[#edd8a8] card-hover">
                  <div className="text-2xl font-bold text-[#1e6320]" style={{ fontFamily: 'Cinzel, serif' }}>{num}</div>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                color: '#f07c00',
                content: 'To provide affordable, high-quality education to every student in the Kathua region, fostering intellectual curiosity, moral integrity, and a love for lifelong learning through a balanced JKBOSE curriculum.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                color: '#1e6320',
                content: 'To be the leading educational institution in Kathua district, recognized for academic excellence, character development, and producing graduates who contribute meaningfully to society and the nation.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                color: '#7a1b1b',
                content: 'Integrity, Respect, Excellence, Innovation, and Service. We instill these core values in every student, preparing them not just for exams, but for life itself.',
              },
            ].map(({ icon: Icon, title, color, content }) => (
              <div key={title} className="rounded-2xl p-8 card-hover border-2" style={{ borderColor: `${color}30`, background: `${color}08` }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}20` }}>
                  <Icon size={32} style={{ color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cinzel, serif', color }}>
                  {title}
                </h3>
                <p className="text-gray-600 font-crimson text-base leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Our Facilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Smart Classrooms', desc: '30+ fully equipped digital classrooms with projectors and interactive whiteboards.' },
              { title: 'Science Laboratories', desc: 'Separate Physics, Chemistry, and Biology labs with modern equipment for practical learning.' },
              { title: 'Computer Lab', desc: 'New 30-workstation computer lab with high-speed internet and updated software.' },
              { title: 'Library', desc: 'Extensive collection of JKBOSE textbooks, reference books, newspapers, and digital resources.' },
              { title: 'Sports Ground', desc: 'Large playground for cricket, football, kabaddi, athletics, and outdoor games.' },
              { title: 'Activity Hall', desc: 'Multi-purpose hall for cultural events, annual functions, seminars, and assemblies.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#edd8a8] card-hover">
                <div className="w-10 h-10 rounded-lg bg-[#f07c00]/15 flex items-center justify-center mb-4">
                  <BookOpen size={20} className="text-[#f07c00]" />
                </div>
                <h3 className="font-bold text-[#1a0a00] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Principal's Message
            </h2>
          </div>
          <div className="bg-gradient-to-br from-[#fff8f0] to-[#f0f7f0] rounded-3xl p-8 md:p-12 border border-[#edd8a8] shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f07c00] to-[#7a1b1b] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                  P
                </div>
                <p className="font-bold text-[#1a0a00] text-sm" style={{ fontFamily: 'Cinzel, serif' }}>The Principal</p>
                <p className="text-gray-500 text-xs">MSK School, Rajbagh</p>
              </div>
              <div>
                <div className="text-[#f07c00] text-5xl font-serif mb-3 leading-none">"</div>
                <p className="text-gray-700 font-crimson text-lg leading-relaxed mb-4">
                  Welcome to Manu Shiksha Kendra School — a place where knowledge meets wisdom and ambition meets guidance. Our institution is built on the foundation that every child is unique and deserves an education tailored to unlock their individual potential.
                </p>
                <p className="text-gray-700 font-crimson text-lg leading-relaxed mb-4">
                  We follow the JKBOSE curriculum with dedication, while also ensuring that our students develop the soft skills, values, and confidence needed in today's world. Our teachers are not just instructors — they are mentors, guides, and friends.
                </p>
                <p className="text-gray-700 font-crimson text-lg leading-relaxed">
                  I invite you to be part of the MSK family, where your child's dreams will find wings and their future will be secured through the power of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1a0a00, #0f2e10)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Our Achievements
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Best School Award', desc: 'Best Educational Institution, Kathua District – 2024', color: '#c9941a' },
              { icon: Users, title: 'Community Impact', desc: 'Served 10,000+ students over 18 years of operation', color: '#4f9e4f' },
              { icon: BookOpen, title: 'Academic Excellence', desc: '12 students secured district-level merit in JKBOSE 2024', color: '#ffb85c' },
              { icon: Target, title: 'Sports Excellence', desc: 'District champions in Inter-School Cricket Tournament 2024', color: '#f07c00' },
              { icon: Heart, title: 'Social Responsibility', desc: 'Annual scholarship program supporting 35+ meritorious students', color: '#e55353' },
              { icon: Award, title: 'Digital Innovation', desc: 'Awarded for best use of technology in classroom teaching', color: '#7c9ef0' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 card-hover">
                <Icon size={28} className="mb-3" style={{ color }} />
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
