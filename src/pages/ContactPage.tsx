import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-500 text-base">We'd love to hear from you — questions, orders, wholesale enquiries.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-green-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-40 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>

              {submitted ? (
                <div className="bg-brand-green-pale text-brand-green rounded-2xl p-6 text-center">
                  <div className="font-serif text-xl font-semibold mb-2">Message Received</div>
                  <p className="text-sm">Thank you for reaching out. Our team will get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First + Last name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name</label>
                      <input
                        required
                        value={form.firstName}
                        onChange={e => setForm({ ...form, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label>
                      <input
                        required
                        value={form.lastName}
                        onChange={e => setForm({ ...form, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Contact Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder="e.g. 416-555-0100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50 text-gray-600"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Enquiry</option>
                      <option value="wholesale">Wholesale / Distribution</option>
                      <option value="product">Product Question</option>
                      <option value="halal">Halal Certification</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50 resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-light transition-colors shadow-sm text-sm"
                  >
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info + map */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: MapPin, label: 'Address', value: '1234 Industrial Pkwy\nMississauga, ON L5B 1M5', color: 'brand-red' },
                  { icon: Phone, label: 'Phone', value: '905-555-0100\nMon–Fri, 9am–5pm', color: 'brand-green' },
                  { icon: Mail, label: 'Email', value: 'info@alshamasfood.ca\nWholesale enquiries welcome', color: 'brand-orange' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className={`w-8 h-8 rounded-xl bg-${color}-pale flex items-center justify-center mb-3`}>
                      <Icon size={16} className={`text-${color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{label}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-brand-orange" />
                  <h3 className="font-semibold text-gray-900 text-sm">Business Hours</h3>
                </div>
                <div className="space-y-1.5 text-xs text-gray-500">
                  {[
                    ['Monday – Friday', '9:00 am – 5:00 pm'],
                    ['Saturday', '10:00 am – 3:00 pm'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span>{day}</span>
                      <span className="font-medium text-gray-700">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  title="Al Shamas Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46076.17940499786!2d-79.65469849999999!3d43.5890452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b470b0a098001%3A0x19f5d81e7c5c9d34!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
