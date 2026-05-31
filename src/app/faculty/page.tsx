import PageHero from '@/components/PageHero';
import { GraduationCap, Mail, BookOpen } from 'lucide-react';

const departments = [
  {
    dept: 'Science Department',
    color: '#1e6320',
    members: [
      { name: 'Mr. Ramesh Kumar Sharma', qual: 'M.Sc. Physics, B.Ed.', role: 'HOD Science & Sr. Physics Teacher', exp: '15 yrs' },
      { name: 'Mrs. Sunita Devi', qual: 'M.Sc. Chemistry, B.Ed.', role: 'Chemistry Teacher', exp: '12 yrs' },
      { name: 'Mr. Vijay Singh Jamwal', qual: 'M.Sc. Biology, B.Ed.', role: 'Biology Teacher', exp: '10 yrs' },
    ],
  },
  {
    dept: 'Mathematics Department',
    color: '#f07c00',
    members: [
      { name: 'Mr. Anil Kumar Gupta', qual: 'M.Sc. Mathematics, B.Ed.', role: 'HOD Mathematics', exp: '18 yrs' },
      { name: 'Mrs. Kavita Sharma', qual: 'B.Sc. Math, B.Ed., M.Ed.', role: 'Mathematics Teacher', exp: '11 yrs' },
      { name: 'Mr. Deepak Verma', qual: 'M.Sc. Mathematics, B.Ed.', role: 'Mathematics Teacher', exp: '7 yrs' },
    ],
  },
  {
    dept: 'Languages Department',
    color: '#7a1b1b',
    members: [
      { name: 'Mrs. Neelam Bhat', qual: 'M.A. English, B.Ed.', role: 'HOD Languages & Sr. English Teacher', exp: '16 yrs' },
      { name: 'Mr. Mohammad Iqbal', qual: 'M.A. Urdu, B.Ed.', role: 'Urdu Teacher', exp: '14 yrs' },
      { name: 'Mrs. Priya Khajuria', qual: 'M.A. Hindi, B.Ed.', role: 'Hindi Teacher', exp: '9 yrs' },
      { name: 'Mrs. Asha Devi', qual: 'M.A. Sanskrit, B.Ed.', role: 'Sanskrit Teacher', exp: '13 yrs' },
    ],
  },
  {
    dept: 'Social Science Department',
    color: '#c9941a',
    members: [
      { name: 'Mr. Rakesh Choudhary', qual: 'M.A. History, B.Ed.', role: 'HOD Social Science', exp: '13 yrs' },
      { name: 'Mrs. Rekha Sharma', qual: 'M.A. Geography, B.Ed.', role: 'Geography Teacher', exp: '10 yrs' },
      { name: 'Mr. Suresh Mehta', qual: 'M.A. Pol. Science, B.Ed.', role: 'Civics & Economics Teacher', exp: '8 yrs' },
    ],
  },
  {
    dept: 'Commerce Department',
    color: '#4f9e4f',
    members: [
      { name: 'Mrs. Usha Devi', qual: 'M.Com., B.Ed.', role: 'HOD Commerce & Accountancy', exp: '14 yrs' },
      { name: 'Mr. Sanjay Kapoor', qual: 'MBA, B.Ed.', role: 'Business Studies Teacher', exp: '9 yrs' },
    ],
  },
  {
    dept: 'Computer Science',
    color: '#3b6b9e',
    members: [
      { name: 'Mr. Rohit Manhas', qual: 'MCA, B.Ed.', role: 'Computer Science Teacher', exp: '11 yrs' },
      { name: 'Mrs. Seema Gupta', qual: 'B.Tech CSE, B.Ed.', role: 'IT & Computer Teacher', exp: '6 yrs' },
    ],
  },
];

export default function FacultyPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="Our Faculty"
        subtitle="Dedicated, qualified, and passionate educators shaping the next generation"
        breadcrumb="Faculty"
      />

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b border-[#edd8a8]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '45+', label: 'Teaching Staff' },
            { val: '100%', label: 'B.Ed. Qualified' },
            { val: '12+', label: 'Avg. Experience (yrs)' },
            { val: '6', label: 'Academic Departments' },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#f07c00]" style={{ fontFamily: 'Cinzel, serif' }}>{val}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal & Vice Principal */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              School Leadership
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Mr. / Mrs. [Principal Name]',
                role: 'Principal',
                qual: 'M.A., M.Ed., Ph.D. (Education)',
                exp: '25+ years in education',
                color: '#f07c00',
                letter: 'P',
                desc: 'Visionary leader with 25+ years of experience in JKBOSE curriculum. Committed to academic excellence and holistic student development.',
              },
              {
                name: 'Mr. / Mrs. [Vice Principal]',
                role: 'Vice Principal',
                qual: 'M.Sc., B.Ed., M.Ed.',
                exp: '18+ years in education',
                color: '#1e6320',
                letter: 'VP',
                desc: 'Oversees academics, timetabling, and faculty coordination. Instrumental in maintaining the school\'s high standards.',
              },
            ].map(({ name, role, qual, exp, color, letter, desc }) => (
              <div key={role} className="bg-white rounded-3xl p-8 border-2 shadow-sm card-hover" style={{ borderColor: `${color}30` }}>
                <div className="flex items-start gap-5">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)`, fontFamily: 'Cinzel, serif' }}
                  >
                    {letter}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a0a00] text-lg" style={{ fontFamily: 'Cinzel, serif' }}>{name}</h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color }}>{role}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{qual}</p>
                    <p className="text-gray-400 text-xs">{exp}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department-wise Faculty */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Teaching Staff by Department
            </h2>
          </div>

          <div className="space-y-10">
            {departments.map(({ dept, color, members }) => (
              <div key={dept}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-0.5 flex-1" style={{ background: `${color}40` }} />
                  <h3 className="text-lg font-bold px-4 py-1.5 rounded-full text-white" style={{ background: color, fontFamily: 'Cinzel, serif' }}>
                    {dept}
                  </h3>
                  <div className="h-0.5 flex-1" style={{ background: `${color}40` }} />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {members.map(({ name, qual, role, exp }) => (
                    <div key={name} className="bg-white rounded-2xl p-5 border border-[#edd8a8] card-hover shadow-sm">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)`, fontFamily: 'Cinzel, serif' }}
                        >
                          {name.split(' ').slice(-2).map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-[#1a0a00] text-sm leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>{name}</h4>
                          <p className="text-xs font-semibold mt-0.5" style={{ color }}>{role}</p>
                          <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                            <GraduationCap size={11} /> {qual}
                          </p>
                          <p className="text-gray-400 text-xs flex items-center gap-1">
                            <BookOpen size={11} /> Experience: {exp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Support & Administrative Staff
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'School Administrator', 'Head Clerk', 'Accountant', 'Lab Assistant (Science)',
              'Library In-Charge', 'Computer Lab Technician', 'Sports Coach', 'Counsellor',
            ].map((role) => (
              <div key={role} className="bg-[#faf5e8] rounded-xl p-3 text-center border border-[#edd8a8]">
                <div className="w-10 h-10 rounded-full bg-[#f07c00]/15 flex items-center justify-center mx-auto mb-2">
                  <Mail size={16} className="text-[#f07c00]" />
                </div>
                <p className="text-xs font-semibold text-[#1a0a00]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
