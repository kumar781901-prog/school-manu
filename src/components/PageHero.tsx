interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div
      className="relative py-16 px-4 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a00 0%, #2d1500 40%, #0f2e10 100%)',
      }}
    >
      {/* Decorative mandala circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-[#f07c00]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-[#c9941a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#4f9e4f]" />
      </div>

      <div className="relative z-10">
        {breadcrumb && (
          <p className="text-[#ffb85c] text-sm mb-2 font-semibold tracking-widest uppercase">
            Home / {breadcrumb}
          </p>
        )}
        <h1
          className="text-3xl md:text-5xl font-bold text-white mb-3"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#f4e9cc] text-lg max-w-2xl mx-auto font-crimson">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#faf5e8] to-transparent" />
    </div>
  );
}
