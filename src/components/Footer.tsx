import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import logo from '../logo.png'; // ✅ your real logo

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1a3d2b' }}>
      {/* Top accent bar */}
      <div className="h-1 bg-brand-orange"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* 🔥 Replaced circle + text with full logo */}
              <img
                src={logo}
                alt="Al Shamas"
                className="w-32 h-auto object-contain"  // adjust size if needed
              />
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Canada's trusted halal frozen food brand since 1993. Premium quality, authentic flavours, 31+ years of excellence.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center text-white/70 hover:text-white transition-all">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center text-white/70 hover:text-white transition-all">
                <Facebook size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center text-white/70 hover:text-white transition-all">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-orange inline-block"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Products', path: '/products' },
                { label: 'Recipes', path: '/recipes' },
                { label: 'Our Story', path: '/our-story' },
                { label: 'The Difference', path: '/the-difference' },
                { label: 'Find a Store', path: '/locations' },
                { label: 'Halal & Certifications', path: '/halal' },
              ].map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-white/60 text-sm hover:text-brand-orange-light transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-orange inline-block"></span>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 text-brand-orange-light shrink-0" />
                <span>1234 Industrial Pkwy, Mississauga, ON L5B 1M5</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={14} className="text-brand-orange-light shrink-0" />
                <span>905-555-0100</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size={14} className="text-brand-orange-light shrink-0" />
                <span>info@alshamasfood.ca</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Halal', 'FSSC 22000', 'HACCP', 'ISO 9001'].map(cert => (
                <span key={cert} className="text-xs px-2.5 py-1 rounded-full border border-brand-orange/40 text-brand-orange-light font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-2 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-brand-orange inline-block"></span>
              Stay in the Loop
            </h4>
            <p className="text-white/60 text-sm mb-4">New products, recipes, and exclusive offers.</p>
            {submitted ? (
              <div className="bg-white/10 text-brand-orange-light text-sm rounded-xl px-4 py-3 border border-brand-orange/30">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 text-sm px-3 py-2 rounded-xl border border-white/20 focus:outline-none focus:border-brand-orange bg-white/10 text-white placeholder-white/40"
                />
                <button
                  type="submit"
                  className="p-2 bg-brand-orange text-white rounded-xl hover:bg-brand-orange-light transition-colors"
                >
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Al Shamas Food Products Inc. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Proudly Canadian • Since 1993 • Halal Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
