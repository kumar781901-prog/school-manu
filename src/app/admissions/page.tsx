import PageHero from '@/components/PageHero';
import { CheckCircle, FileText, Calendar, Phone, AlertCircle, ChevronRight } from 'lucide-react';

const steps = [
  { step: '01', title: 'Collect Application Form', desc: 'Visit the school office or download the form from this page. Forms are available free of cost.', icon: FileText },
  { step: '02', title: 'Fill & Submit Form', desc: 'Complete the form with accurate details and attach all required documents. Submit at the school office.', icon: CheckCircle },
  { step: '03', title: 'Entrance Assessment', desc: 'Students applying for Class II and above may need a basic oral/written assessment as per JKBOSE norms.', icon: AlertCircle },
  { step: '04', title: 'Fee Payment', desc: 'Upon selection, pay the admission fee and first term fee at the school cashier to confirm enrollment.', icon: Calendar },
  { step: '05', title: 'Enrollment Confirmed', desc: 'Receive your admit card, school diary, and uniform details. Welcome to the MSK family!', icon: CheckCircle },
];

const docs = [
  'Birth Certificate (original + photocopy)',
  'Transfer Certificate (TC) from previous school (Classes II onwards)',
  'Character Certificate from previous school',
  'Report card / Mark sheet of last class passed',
  'Aadhar Card of student (photocopy)',
  'Aadhar Card of parent/guardian (photocopy)',
  'Passport-size photographs (4 copies)',
  'Domicile Certificate (for J&K residents)',
  'Caste Certificate (if applicable, for fee concession)',
  'Income Certificate (for scholarship/concession)',
];

const feeStructure = [
  { cls: 'Class I – V', admission: '₹ 1,500', monthly: '₹ 350', annual: '₹ 800' },
  { cls: 'Class VI – VIII', admission: '₹ 2,000', monthly: '₹ 450', annual: '₹ 1,000' },
  { cls: 'Class IX – X', admission: '₹ 2,500', monthly: '₹ 550', annual: '₹ 1,200' },
  { cls: 'Class XI – XII', admission: '₹ 3,000', monthly: '₹ 650', annual: '₹ 1,500' },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="Admissions"
        subtitle="Join the MSK family — Admissions open for Session 2024-25 for Classes I to XII"
        breadcrumb="Admissions"
      />

      {/* Status Banner */}
      <div className="bg-[#1e6320] text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#7cbc7c] animate-pulse" />
          <p className="font-semibold text-sm md:text-base">
            🎓 Admissions for Session 2024-25 are currently <span className="text-[#7cbc7c] font-bold">OPEN</span> — Limited seats available. Apply now!
          </p>
        </div>
      </div>

      {/* Admission Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Admission Process
            </h2>
            <p className="text-gray-500 mt-6 font-crimson text-lg">Simple 5-step process to secure your child's seat</p>
          </div>
          <div className="space-y-6">
            {steps.map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-[#edd8a8] shadow-sm card-hover">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f07c00] to-[#b34d00] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Cinzel, serif' }}>{step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-[#1e6320]" />
                    <h3 className="font-bold text-[#1a0a00]" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#7a1b1b] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                Documents Required
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#f07c00] to-[#1e6320] rounded mb-6" />
              <ul className="space-y-3">
                {docs.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#1e6320] flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-[#fff8f0] border border-[#f07c00]/30 rounded-xl p-4">
                <p className="text-xs text-[#b34d00] font-semibold flex items-start gap-2">
                  <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                  All original documents must be produced at the time of admission verification. Photocopies to be submitted along with the form.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#7a1b1b] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                Important Dates
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#f07c00] to-[#1e6320] rounded mb-6" />
              <div className="space-y-4">
                {[
                  { date: 'Dec 1 – Jan 31', event: 'Application Forms Available', status: 'open' },
                  { date: 'February 15', event: 'Last date to submit forms', status: 'upcoming' },
                  { date: 'February 20-25', event: 'Entrance Assessment (if applicable)', status: 'upcoming' },
                  { date: 'March 1', event: 'Merit list / Selection announcement', status: 'upcoming' },
                  { date: 'March 5-15', event: 'Fee payment & Enrollment', status: 'upcoming' },
                  { date: 'April 1', event: 'New Academic Session begins', status: 'upcoming' },
                ].map(({ date, event, status }) => (
                  <div key={event} className="flex items-start gap-4 p-3 rounded-xl border border-[#edd8a8] bg-[#faf5e8]">
                    <div className="flex-shrink-0 text-center w-24">
                      <p className="text-xs font-bold text-[#f07c00]">{date}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#1a0a00] font-medium">{event}</p>
                    </div>
                    {status === 'open' && (
                      <span className="text-xs bg-[#1e6320] text-white px-2 py-0.5 rounded-full font-bold flex-shrink-0">OPEN</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              Fee Structure 2024-25
            </h2>
            <p className="text-gray-500 mt-6 font-crimson text-base">Affordable quality education for every family</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-[#edd8a8] shadow-sm">
            <table className="w-full result-table">
              <thead>
                <tr>
                  <th className="text-left">Class</th>
                  <th>Admission Fee</th>
                  <th>Monthly Fee</th>
                  <th>Annual Charges</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map(({ cls, admission, monthly, annual }) => (
                  <tr key={cls} className="hover:bg-[#fff8f0] transition-colors">
                    <td className="font-semibold text-[#1a0a00]">{cls}</td>
                    <td className="text-center text-[#f07c00] font-semibold">{admission}</td>
                    <td className="text-center text-[#1e6320] font-semibold">{monthly}</td>
                    <td className="text-center text-[#7a1b1b] font-semibold">{annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            * Fee concessions available for meritorious students, siblings, and economically weaker sections (EWS). Contact office for details.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#1a0a00] via-[#2d1500] to-[#0f2e10] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
            Have Questions About Admissions?
          </h2>
          <p className="text-[#ffecd4] mb-6 font-crimson text-lg">
            Our admission team is happy to guide you. Visit us or call during school hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919419000000"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #f07c00, #b34d00)', fontFamily: 'Cinzel, serif' }}
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-bold border-2 border-[#4f9e4f] text-[#4f9e4f] hover:bg-[#4f9e4f] hover:text-white transition-all"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Visit Us <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
