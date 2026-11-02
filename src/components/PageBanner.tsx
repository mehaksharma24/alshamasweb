/** Shared page header: red script line, Playfair Display Black title, red underline, red curve. */
export default function PageBanner({ script, title, sub }: { script: string; title: string; sub?: string }) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative pt-12 pb-24 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-script text-brand-red text-3xl sm:text-4xl">{script}</p>
          <h1 className="font-serif font-black text-[#2b1410] leading-none tracking-tight text-5xl sm:text-6xl mt-2">{title}</h1>
          <svg className="mx-auto mt-3 w-48 h-4" viewBox="0 0 300 16" aria-hidden="true">
            <path d="M4 12 C80 2 200 2 296 8" fill="none" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {sub && <p className="mt-4 text-gray-700 text-lg leading-relaxed">{sub}</p>}
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-20 pointer-events-none" viewBox="0 0 1440 112" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 C260 110 560 112 820 78 C1060 46 1260 54 1440 92 V112 H0 Z" fill="#C8102E" />
          <path d="M0 24 C260 96 560 98 820 64 C1060 32 1260 40 1440 78" fill="none" stroke="#C8102E" strokeWidth="4" opacity="0.35" />
        </svg>
      </div>
    </section>
  );
}
