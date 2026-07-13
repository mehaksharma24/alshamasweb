import { useState, useEffect } from 'react';
import { X, Send, Gift, Sparkles } from 'lucide-react';
import { NEWSLETTER_POPUP_IMAGE } from '../assets';

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (dismissed && !minimized) return null;

  return (
    <>
      {/* Minimized tab */}
      {(dismissed || !visible) && !minimized ? null : null}

      {/* Minimized peek tab */}
      {minimized && (
        <button
          onClick={() => { setMinimized(false); setVisible(true); setDismissed(false); }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-red text-white px-4 py-3 rounded-2xl shadow-2xl hover:bg-brand-red-light transition-all animate-bounce"
        >
          <Gift size={16} />
          <span className="text-xs font-semibold">Exclusive Offer</span>
        </button>
      )}

      {/* Full popup */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
          visible && !minimized
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
        style={{ width: '340px' }}
      >
        {/* Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Top image band */}
          <div className="relative h-28 overflow-hidden">
            <img
              src={NEWSLETTER_POPUP_IMAGE}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(200,16,46,0.85) 0%, rgba(232,119,34,0.80) 100%)' }}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-center gap-1 mb-1">
                <Sparkles size={14} className="text-white/80" />
                <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">Exclusive Offer</span>
                <Sparkles size={14} className="text-white/80" />
              </div>
              <p className="text-white font-serif font-bold text-xl leading-tight">
                Get 10% Off Your<br />First Order
              </p>
            </div>

            {/* Close + minimize buttons */}
            <div className="absolute top-2 right-2 flex gap-1">
              <button
                onClick={() => setMinimized(true)}
                className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
                title="Minimize"
              >
                <span className="text-xs leading-none font-bold">–</span>
              </button>
              <button
                onClick={handleDismiss}
                className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            {submitted ? (
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-full bg-brand-green-pale flex items-center justify-center mx-auto mb-3">
                  <Gift size={22} className="text-brand-green" />
                </div>
                <p className="font-serif font-semibold text-gray-900 mb-1">You're in!</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Welcome to the Al Shamas family. Check your inbox for your discount code.
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                  Subscribe for new products, exclusive recipes, and special offers — delivered to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange bg-gray-50"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white rounded-xl transition-all"
                    style={{ background: 'linear-gradient(90deg, #C8102E, #E87722)' }}
                  >
                    Claim My Discount <Send size={14} />
                  </button>
                </form>
                <p className="text-center text-gray-300 text-xs mt-2">No spam, unsubscribe anytime.</p>
              </>
            )}
          </div>

          {/* Bottom accent bar */}
          <div className="h-1" style={{ background: 'linear-gradient(90deg, #C8102E, #E87722, #2D6A4F)' }}></div>
        </div>
      </div>
    </>
  );
}
