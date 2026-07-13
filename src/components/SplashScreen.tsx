import { useEffect, useState } from 'react';
import { SPLASH_BG_IMAGE } from '../assets';
import logo from '../logo.png'; // your real logo

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 200);
    const t2 = setTimeout(() => setFade(true), 2000);
    const t3 = setTimeout(() => onDone(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background */}
      {SPLASH_BG_IMAGE && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${SPLASH_BG_IMAGE}')` }}
        />
      )}

      <div className="absolute inset-0" style={{ background: 'rgba(15, 34, 24, 0.82)' }} />

      {/* Logo pop */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'scale(1) translateY(0)' : 'scale(0.72) translateY(16px)',
          transition:
            'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Al Shamas"
          className="w-48 h-auto object-contain mb-3"  // closer spacing
        />

      
      </div>
    </div>
  );
}
