import PageHero from '@/components/PageHero';

const categories = ['All', 'Events', 'Sports', 'Academics', 'Cultural', 'Infrastructure'];

const galleryItems = [
  { id: 1, cat: 'Events', title: 'Annual Prize Distribution 2024', bg: 'from-[#f07c00] to-[#7a1b1b]', size: 'large' },
  { id: 2, cat: 'Sports', title: 'Inter-School Cricket Tournament', bg: 'from-[#1e6320] to-[#0f2e10]', size: 'normal' },
  { id: 3, cat: 'Academics', title: 'Science Exhibition 2024', bg: 'from-[#3b6b9e] to-[#1a0a3e]', size: 'normal' },
  { id: 4, cat: 'Cultural', title: 'Independence Day Celebration', bg: 'from-[#c9941a] to-[#7a1b1b]', size: 'large' },
  { id: 5, cat: 'Infrastructure', title: 'New Computer Laboratory', bg: 'from-[#2d7f2d] to-[#0f3811]', size: 'normal' },
  { id: 6, cat: 'Events', title: 'Republic Day March Past', bg: 'from-[#b34d00] to-[#1a0a00]', size: 'normal' },
  { id: 7, cat: 'Sports', title: 'Athletics Meet 2024', bg: 'from-[#7c3d9e] to-[#1a0a00]', size: 'normal' },
  { id: 8, cat: 'Cultural', title: 'Diwali Mela & Cultural Night', bg: 'from-[#d9ab56] to-[#7a1b1b]', size: 'large' },
  { id: 9, cat: 'Academics', title: 'Class XII Board Toppers', bg: 'from-[#1e6320] to-[#c9941a]', size: 'normal' },
  { id: 10, cat: 'Infrastructure', title: 'School Library & Reading Room', bg: 'from-[#3b6b9e] to-[#0f2e10]', size: 'normal' },
  { id: 11, cat: 'Events', title: 'Teacher\'s Day Celebration', bg: 'from-[#f07c00] to-[#1e6320]', size: 'normal' },
  { id: 12, cat: 'Sports', title: 'Kabaddi District Champions', bg: 'from-[#7a1b1b] to-[#c9941a]', size: 'large' },
];

const icons: Record<string, string> = {
  Events: '🎉',
  Sports: '🏆',
  Academics: '📚',
  Cultural: '🎭',
  Infrastructure: '🏫',
};

export default function GalleryPage() {
  return (
    <div className="bg-[#faf5e8]">
      <PageHero
        title="Gallery"
        subtitle="Memories of excellence, achievement, and joy at Manu Shiksha Kendra School"
        breadcrumb="Gallery"
      />

      {/* Category Filter - Static display (no JS filter for SSR) */}
      <section className="py-8 px-4 bg-white border-b border-[#edd8a8]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-semibold border-2 cursor-pointer transition-all duration-200"
                style={{
                  borderColor: cat === 'All' ? '#f07c00' : '#edd8a8',
                  background: cat === 'All' ? '#f07c00' : 'white',
                  color: cat === 'All' ? 'white' : '#6b7280',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                {cat !== 'All' && <span className="mr-1">{icons[cat]}</span>}
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map(({ id, cat, title, bg, size }) => (
              <div
                key={id}
                className={`break-inside-avoid rounded-2xl overflow-hidden card-hover cursor-pointer group relative ${size === 'large' ? 'h-72' : 'h-52'}`}
                style={{ background: `linear-gradient(135deg, ${bg.replace('from-[', '').replace(']', '').split(' to-[')[0]}, ${bg.replace('from-[', '').replace(']', '').split(' to-[')[1]})` }}
              >
                {/* Placeholder with icon */}
                <div className={`w-full h-full bg-gradient-to-br ${bg} flex flex-col items-center justify-center relative overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10 mandala-bg" />

                  {/* Icon */}
                  <div className="text-6xl mb-3 opacity-60">{icons[cat]}</div>

                  {/* Text */}
                  <div className="relative z-10 text-center px-6">
                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                      {cat}
                    </span>
                    <p className="text-white font-bold text-center leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
                      {title}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-2xl">🔍</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#7a1b1b] section-heading" style={{ fontFamily: 'Cinzel, serif' }}>
              School Highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🎓', title: 'Annual Day 2024', sub: 'Prize distribution ceremony' },
              { emoji: '⚽', title: 'Sports Week 2024', sub: 'Inter-house sports competition' },
              { emoji: '🔬', title: 'Science Fair 2024', sub: 'Student project exhibitions' },
            ].map(({ emoji, title, sub }) => (
              <div key={title} className="rounded-2xl overflow-hidden bg-[#faf5e8] border border-[#edd8a8] card-hover">
                <div className="h-44 bg-gradient-to-br from-[#1a0a00] to-[#0f2e10] flex items-center justify-center relative">
                  <div className="text-7xl">{emoji}</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <span className="text-white text-2xl ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1a0a00] text-sm" style={{ fontFamily: 'Cinzel, serif' }}>{title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <div className="py-8 px-4 text-center bg-[#faf5e8]">
        <p className="text-gray-400 text-sm font-crimson italic">
          📸 Photos and videos from recent school events are published with parent/guardian consent. For high-resolution images, contact the school office.
        </p>
      </div>
    </div>
  );
}
