/** Shared page header: red script line, Playfair Display Black title, red underline, red curve. */
export default function PageBanner({ script, title, sub }: { script: string; title: string; sub?: string }) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative pt-12 pb-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-script text-brand-red text-3xl sm:text-4xl">{script}</p>
          <h1 className="font-serif font-black text-[#2b1410] leading-none tracking-tight text-5xl sm:text-6xl mt-2">{title}</h1>
          <svg className="mx-auto mt-3 w-48 h-4" viewBox="0 0 300 16" aria-hidden="true">
            <path d="M4 12 C80 2 200 2 296 8" fill="none" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {sub && <p className="mt-4 text-gray-700 text-lg leading-relaxed">{sub}</p>}
        </div>
      </div>
    </section>
  );
}
