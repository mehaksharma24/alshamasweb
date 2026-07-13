import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-green-pale opacity-40 pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange-pale opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 px-8 py-10 text-center">
          <div className="inline-block bg-brand-orange-pale text-brand-orange text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Newsletter
          </div>
          <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-2">
            Recipes, Offers & New Arrivals
          </h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Join thousands of Canadians who get our latest products and exclusive recipes in their inbox.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-6 py-3 rounded-2xl font-medium text-sm">
              You're subscribed — welcome to the Al Shamas family!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-brand-orange bg-gray-50"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-semibold rounded-2xl hover:bg-brand-orange-light transition-colors shadow-sm"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
