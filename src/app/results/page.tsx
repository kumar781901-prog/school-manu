import PageHero from '@/components/PageHero';
import { Trophy, Star, TrendingUp, Award } from 'lucide-react';

const class10Toppers = [
  { rank: '1st', name: 'Priya Sharma', rollNo: '1001', marks: '498/500', percentage: '99.6%', stream: 'Science' },
  { rank: '2nd', name: 'Rahul Verma', rollNo: '1002', marks: '492/500', percentage: '98.4%', stream: 'Science' },
  { rank: '3rd', name: 'Anjali Gupta', rollNo: '1003', marks: '488/500', percentage: '97.6%', stream: 'Science' },
  { rank: '4th', name: 'Mohd. Arif Khan', rollNo: '1004', marks: '485/500', percentage: '97.0%', stream: 'Arts' },
  { rank: '5th', name: 'Sneha Devi', rollNo: '1005', marks: '480/500', percentage: '96.0%', stream: 'Commerce' },
];

const class12Toppers = [
  { rank: '1st', name: 'Amit Sharma', rollNo: '2001', marks: '480/500', percentage: '96.0%', stream: 'Science (PCM)' },
  { rank: '2nd', name: 'Pooja Khajuria', rollNo: '2002', marks: '474/500', percentage: '94.8%', stream: 'Science (PCB)' },
  { rank: '3rd', name: 'Vikas Manhas', rollNo: '2003', marks: '468/500', percentage: '93.6%', stream: 'Commerce' },
  { rank: '4th', name: 'Nazia Begum', rollNo: '2004', marks: '461/500', percentage: '92.2%', stream: 'Arts' },
  { rank: '5th', name: 'Rohit Choudhary', rollNo: '2005', marks: '458/500', percentage: '91.6%', stream: 'Science (PCM)' },
];

const yearlyResults = [
  { year: '2024', class10pass: '98.5%', class12pass: '97.2%', class10merit: 3, class12merit: 2 },
  { year: '2023', class10pass: '97.8%', class12pass: '96.5%', class10merit: 2, class12merit: 3 },
  { year: '2022', class10pass: '96.2%', class12pass: '95.0%', class10merit: 2, class12merit: 1 },
  { year: '2021', class10pass: '98.0%', class12pass: '96.8%', class10merit: 4, class12merit: 2 },
  { year: '2020', class10pass: '95.5%', class12pass: '94.2%', class10merit: 1, class12merit: 2 },
];

export default function ResultsPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="Exam Results"
        subtitle="JKBOSE Board Examination Results — Class X & XII"
        breadcrumb="Results"
      />

      {/* Highlight Cards */}
      <section className="py-12 px-4 bg-white border-b border-[#edd8a8]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { val: '98.5%', label: 'Class X Pass %', sub: '2024', icon: TrendingUp, color: '#1e6320' },
            { val: '97.2%', label: 'Class XII Pass %', sub: '2024', icon: TrendingUp, color: '#f07c00' },
            { val: '5', label: 'District Toppers', sub: 'from our school', icon: Trophy, color: '#7a1b1b' },
            { val: '18+', label: 'Merit Positions', sub: 'last 5 years', icon: Star, color: '#c9941a' },
          ].map(({ val, label, sub, icon: Icon, color }) => (
            <div key={label} className="text-center rounded-2xl p-5 border border-[#edd8a8] bg-[#faf5e8] card-hover">
              <Icon size={28} className="mx-auto mb-2" style={{ color }} />
              <p className="text-3xl font-bold" style={{ fontFamily: 'Cinzel, serif', color }}>{val}</p>
              <p className="text-[#1a0a00] text-sm font-semibold mt-1">{label}</p>
              <p className="text-gray-400 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Check Result CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1a0a00] to-[#0f2e10] rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>Check JKBOSE Results Online</h2>
          <p className="text-[#ffecd4] mb-6 font-crimson text-lg">
            Official JKBOSE results are published on the J&K Board website. Visit the official portal to check your result.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.jkbose.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #f07c00, #b34d00)', fontFamily: 'Cinzel, serif' }}
            >
              JKBOSE Official Website ↗
            </a>
            <a
              href="https://jkresults.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-bold border-2 border-[#4f9e4f] text-[#4f9e4f] hover:bg-[#4f9e4f] hover:text-white transition-all"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              J&K Results Portal ↗
            </a>
          </div>
        </div>
      </section>

      {/* Class 10 Toppers */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Trophy size={28} className="text-[#f07c00]" />
            <h2 className="text-2xl font-bold text-[#7a1b1b]" style={{ fontFamily: 'Cinzel, serif' }}>
              Class X Board Toppers — 2024
            </h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-[#edd8a8] shadow-sm">
            <table className="w-full result-table">
              <thead>
                <tr>
                  <th className="text-left">Rank</th>
                  <th className="text-left">Student Name</th>
                  <th>Roll No.</th>
                  <th>Marks</th>
                  <th>Percentage</th>
                  <th>Stream</th>
                </tr>
              </thead>
              <tbody>
                {class10Toppers.map(({ rank, name, rollNo, marks, percentage, stream }) => (
                  <tr key={rollNo} className="hover:bg-[#fff8f0] transition-colors">
                    <td>
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-xs"
                        style={{
                          background: rank === '1st' ? '#c9941a' : rank === '2nd' ? '#94a3b8' : rank === '3rd' ? '#b45309' : '#e5e7eb',
                          color: ['1st', '2nd', '3rd'].includes(rank) ? 'white' : '#374151',
                          fontFamily: 'Cinzel, serif',
                        }}
                      >
                        {rank === '1st' ? '🥇' : rank === '2nd' ? '🥈' : rank === '3rd' ? '🥉' : rank}
                      </span>
                    </td>
                    <td className="font-bold text-[#1a0a00]">{name}</td>
                    <td className="text-center text-gray-500 text-sm">{rollNo}</td>
                    <td className="text-center font-semibold text-[#1e6320]">{marks}</td>
                    <td className="text-center font-bold text-[#f07c00]">{percentage}</td>
                    <td className="text-center">
                      <span className="text-xs bg-[#f07c00]/10 text-[#b34d00] px-2 py-0.5 rounded-full font-semibold">{stream}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Class 12 Toppers */}
      <section className="py-4 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award size={28} className="text-[#1e6320]" />
            <h2 className="text-2xl font-bold text-[#7a1b1b]" style={{ fontFamily: 'Cinzel, serif' }}>
              Class XII Board Toppers — 2024
            </h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-[#edd8a8] shadow-sm">
            <table className="w-full result-table">
              <thead>
                <tr>
                  <th className="text-left">Rank</th>
                  <th className="text-left">Student Name</th>
                  <th>Roll No.</th>
                  <th>Marks</th>
                  <th>Percentage</th>
                  <th>Stream</th>
                </tr>
              </thead>
              <tbody>
                {class12Toppers.map(({ rank, name, rollNo, marks, percentage, stream }) => (
                  <tr key={rollNo} className="hover:bg-[#f0f7f0] transition-colors">
                    <td>
                      <span className="font-bold text-sm" style={{ color: rank === '1st' ? '#c9941a' : '#374151', fontFamily: 'Cinzel, serif' }}>
                        {rank === '1st' ? '🥇' : rank === '2nd' ? '🥈' : rank === '3rd' ? '🥉' : rank}
                      </span>
                    </td>
                    <td className="font-bold text-[#1a0a00]">{name}</td>
                    <td className="text-center text-gray-500 text-sm">{rollNo}</td>
                    <td className="text-center font-semibold text-[#1e6320]">{marks}</td>
                    <td className="text-center font-bold text-[#f07c00]">{percentage}</td>
                    <td className="text-center">
                      <span className="text-xs bg-[#1e6320]/10 text-[#1e6320] px-2 py-0.5 rounded-full font-semibold">{stream}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Year-wise Summary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              5-Year Result Summary
            </h2>
          </div>
          <div className="bg-[#faf5e8] rounded-2xl overflow-hidden border border-[#edd8a8]">
            <table className="w-full result-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Class X Pass %</th>
                  <th>Class XII Pass %</th>
                  <th>Class X Merit</th>
                  <th>Class XII Merit</th>
                </tr>
              </thead>
              <tbody>
                {yearlyResults.map(({ year, class10pass, class12pass, class10merit, class12merit }) => (
                  <tr key={year} className="hover:bg-[#fff8f0] transition-colors text-center">
                    <td className="font-bold text-[#f07c00]" style={{ fontFamily: 'Cinzel, serif' }}>{year}</td>
                    <td className="font-semibold text-[#1e6320]">{class10pass}</td>
                    <td className="font-semibold text-[#1e6320]">{class12pass}</td>
                    <td><span className="inline-flex items-center gap-1 text-[#c9941a] font-bold"><Star size={13} />{class10merit}</span></td>
                    <td><span className="inline-flex items-center gap-1 text-[#c9941a] font-bold"><Star size={13} />{class12merit}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
