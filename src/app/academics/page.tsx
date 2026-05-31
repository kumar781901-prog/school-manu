import PageHero from '@/components/PageHero';
import { BookOpen, FlaskConical, Monitor, Calculator, Globe, Music, ChevronRight } from 'lucide-react';

const sections = [
  {
    level: 'Primary Section',
    classes: 'Classes I – V',
    color: '#f07c00',
    age: 'Age 6–11',
    desc: 'Foundation years focused on literacy, numeracy, and curiosity. Activity-based learning with emphasis on Hindi, English, Mathematics, and Environmental Studies.',
    subjects: ['English', 'Hindi', 'Urdu', 'Mathematics', 'Environmental Science', 'Drawing & Craft', 'Moral Science'],
  },
  {
    level: 'Middle Section',
    classes: 'Classes VI – VIII',
    color: '#1e6320',
    age: 'Age 11–14',
    desc: 'Building depth in core subjects. Introduction to Science, Social Studies, and Computer Education as students develop critical thinking skills.',
    subjects: ['English', 'Hindi/Urdu', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Sanskrit/Punjabi'],
  },
  {
    level: 'Secondary Section',
    classes: 'Classes IX – X',
    color: '#7a1b1b',
    age: 'Age 14–16',
    desc: 'Preparation for the JKBOSE Class 10 Board Examination. Strong focus on Science, Mathematics, and language skills with regular mock tests.',
    subjects: ['English', 'Hindi/Urdu', 'Mathematics', 'Science (Phy+Chem+Bio)', 'Social Science', 'Sanskrit/Computer', 'Physical Education'],
  },
  {
    level: 'Senior Secondary',
    classes: 'Classes XI – XII',
    color: '#c9941a',
    age: 'Age 16–18',
    desc: 'Specialised streams aligned with future career goals. Preparation for JKBOSE Class 12 Board Exam, JEE, NEET, and other competitive entrance exams.',
    subjects: ['Science Stream (PCM/PCB)', 'Commerce Stream', 'Arts/Humanities Stream', 'English (Compulsory)', 'Physical Education'],
  },
];

const streams = [
  {
    name: 'Science (PCM)',
    icon: Calculator,
    color: '#f07c00',
    subs: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science / Physical Ed.'],
    careers: 'Engineering, Architecture, Technology, Defence',
  },
  {
    name: 'Science (PCB)',
    icon: FlaskConical,
    color: '#1e6320',
    subs: ['Physics', 'Chemistry', 'Biology', 'English', 'Physical Education'],
    careers: 'Medicine, Pharmacy, Nursing, Research',
  },
  {
    name: 'Commerce',
    icon: Globe,
    color: '#7a1b1b',
    subs: ['Accountancy', 'Business Studies', 'Economics', 'English', 'Mathematics / Informatics'],
    careers: 'CA, Banking, Finance, Management, Law',
  },
  {
    name: 'Arts / Humanities',
    icon: Music,
    color: '#c9941a',
    subs: ['History', 'Political Science', 'Geography', 'English', 'Economics / Psychology'],
    careers: 'Civil Services, Law, Teaching, Journalism',
  },
];

export default function AcademicsPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="Academics"
        subtitle="JKBOSE-affiliated curriculum from Class I to XII — shaping scholars, scientists, and leaders"
        breadcrumb="Academics"
      />

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Academic Framework
          </h2>
          <p className="text-gray-600 font-crimson text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            Manu Shiksha Kendra School follows the curriculum prescribed by the <strong>J&K Board of School Education (JKBOSE)</strong>. Our structured academic program ensures strong foundations at every level, with experienced teachers, regular assessments, and personalised attention.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Board', value: 'JKBOSE' },
              { label: 'Medium', value: 'English / Urdu' },
              { label: 'Classes', value: 'I – XII' },
              { label: 'Type', value: 'Co-Educational' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-4 border border-[#edd8a8] shadow-sm">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                <p className="font-bold text-[#f07c00] text-lg" style={{ fontFamily: 'Cinzel, serif' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {sections.map(({ level, classes, color, age, desc, subjects }) => (
            <div key={level} className="bg-white rounded-3xl overflow-hidden border-2 shadow-sm card-hover" style={{ borderColor: `${color}30` }}>
              <div className="h-2" style={{ background: color }} />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}20` }}>
                        <BookOpen size={20} style={{ color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#1a0a00]" style={{ fontFamily: 'Cinzel, serif' }}>{level}</h3>
                        <p className="text-sm font-semibold" style={{ color }}>{classes}</p>
                      </div>
                    </div>
                    <span className="inline-block bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">{age}</span>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{desc}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Subjects Offered</p>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((sub) => (
                        <span key={sub} className="text-sm px-3 py-1.5 rounded-lg font-medium border" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Secondary Streams */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Senior Secondary Streams (XI–XII)
            </h2>
            <p className="text-gray-500 mt-6 font-crimson text-lg">Choose your path to a successful career</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {streams.map(({ name, icon: Icon, color, subs, careers }) => (
              <div key={name} className="rounded-2xl overflow-hidden border-2 card-hover bg-white shadow-sm" style={{ borderColor: `${color}40` }}>
                <div className="p-5" style={{ background: `${color}12` }}>
                  <Icon size={30} style={{ color }} className="mb-2" />
                  <h3 className="font-bold text-[#1a0a00]" style={{ fontFamily: 'Cinzel, serif' }}>{name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Subjects</p>
                  <ul className="space-y-1 mb-4">
                    {subs.map((s) => (
                      <li key={s} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <ChevronRight size={12} className="flex-shrink-0 mt-0.5" style={{ color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Career Paths</p>
                    <p className="text-xs text-gray-600">{careers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Activities */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Beyond the Classroom
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'NCC / Scout & Guide', desc: 'Building discipline, leadership, and patriotism through NCC and Scouting programs.' },
              { title: 'Science Club', desc: 'Weekly experiments, science fairs, and JKBOSE Olympiad preparation for budding scientists.' },
              { title: 'Sports & Athletics', desc: 'Cricket, football, kabaddi, badminton, and track events with inter-school competitions.' },
              { title: 'Cultural Programs', desc: 'Annual day, independence day, republic day celebrations with drama, music, and dance.' },
              { title: 'Computer Education', desc: 'Practical coding, MS Office, internet skills and digital literacy from Class V onwards.' },
              { title: 'Moral & Value Education', desc: 'Regular sessions on ethics, citizenship, environment, and community responsibility.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-[#edd8a8] card-hover">
                <div className="w-8 h-8 rounded-lg bg-[#f07c00]/15 flex items-center justify-center mb-3">
                  <Monitor size={16} className="text-[#f07c00]" />
                </div>
                <h3 className="font-bold text-[#1a0a00] text-sm mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
