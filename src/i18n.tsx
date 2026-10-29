import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'fr';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the English or French string for the current language. */
  t: (en: string, fr: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = 'alshamas-lang';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    /* storage unavailable */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) return 'fr';
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';
  }, [lang]);

  const t = useCallback((en: string, fr: string) => (lang === 'fr' ? fr : en), [lang]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center rounded-full border border-gray-200 bg-white p-0.5 text-xs font-semibold ${className}`} role="group" aria-label="Language / Langue">
      {(['en', 'fr'] as const).map(code => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            lang === code ? 'bg-brand-green text-white' : 'text-gray-500 hover:text-brand-green'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
