import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import { COMPANY } from '../company';
import { useLang } from '../i18n';

const MAP_SRC = 'https://www.google.com/maps?q=2244+Drew+Road,+Mississauga,+ON+L5S+1B1&output=embed';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { lang, t } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">{t('Contact Us', 'Nous joindre')}</h1>
          <p className="text-gray-500 text-base">{t('We’d love to hear from you — questions, orders, wholesale enquiries.', 'Nous serions ravis de vous lire — questions, commandes, demandes de vente en gros.')}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-green-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-40 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">{t('Send a Message', 'Envoyez-nous un message')}</h2>

              {submitted ? (
                <div className="bg-brand-green-pale text-brand-green rounded-2xl p-6 text-center">
                  <div className="font-serif text-xl font-semibold mb-2">{t('Message Received', 'Message reçu')}</div>
                  <p className="text-sm">{t('Thank you for reaching out. Our team will get back to you within 1–2 business days.', 'Merci de nous avoir écrit. Notre équipe vous répondra d’ici 1 à 2 jours ouvrables.')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First + Last name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t('First Name', 'Prénom')}</label>
                      <input
                        required
                        value={form.firstName}
                        onChange={e => setForm({ ...form, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder={t('First name', 'Prénom')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t('Last Name', 'Nom')}</label>
                      <input
                        required
                        value={form.lastName}
                        onChange={e => setForm({ ...form, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder={t('Last name', 'Nom')}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t('Email', 'Courriel')}</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder={t('your@email.com', 'vous@courriel.com')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t('Contact Number', 'Téléphone')}</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50"
                        placeholder={t('e.g. 905-555-0100', 'p. ex. 905-555-0100')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t('Subject', 'Objet')}</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50 text-gray-600"
                    >
                      <option value="">{t('Select a subject', 'Choisissez un objet')}</option>
                      <option value="general">{t('General Enquiry', 'Demande générale')}</option>
                      <option value="wholesale">{t('Wholesale / Distribution', 'Vente en gros / distribution')}</option>
                      <option value="product">{t('Product Question', 'Question sur un produit')}</option>
                      <option value="halal">{t('Halal Certification', 'Certification halal')}</option>
                      <option value="feedback">{t('Feedback', 'Commentaires')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t('Message', 'Message')}</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red bg-gray-50 resize-none"
                      placeholder={t('How can we help?', 'Comment pouvons-nous vous aider ?')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-light transition-colors shadow-sm text-sm"
                  >
                    {t('Send Message', 'Envoyer')} <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info + map */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: MapPin,
                    label: t('Address', 'Adresse'),
                    value: t(
                      `${COMPANY.street}, Unit 1 & Unit 3\nMississauga, ON L5S 1B1`,
                      `${COMPANY.street}, unités 1 et 3\nMississauga (Ontario) L5S 1B1`
                    ),
                    color: 'brand-red',
                  },
                  { icon: Phone, label: t('Office Phone', 'Téléphone du bureau'), value: COMPANY.phone, color: 'brand-green' },
                  {
                    icon: Mail,
                    label: t('Email', 'Courriel'),
                    value: `${COMPANY.email}\n${t('Wholesale enquiries welcome', 'Demandes de vente en gros bienvenues')}`,
                    color: 'brand-orange',
                  },
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
                  <h3 className="font-semibold text-gray-900 text-sm">{t('Business Hours', 'Heures d’ouverture')}</h3>
                </div>
                <div className="space-y-1.5 text-xs text-gray-500">
                  {[
                    [t('Monday – Friday', 'Lundi au vendredi'), lang === 'fr' ? '9 h – 17 h' : '9:00 am – 5:00 pm'],
                    [t('Saturday', 'Samedi'), lang === 'fr' ? '10 h – 15 h' : '10:00 am – 3:00 pm'],
                    [t('Sunday', 'Dimanche'), t('Closed', 'Fermé')],
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
                  title={t('Al-Shamas location — 2244 Drew Road, Mississauga', 'Emplacement Al-Shamas — 2244 Drew Road, Mississauga')}
                  src={MAP_SRC}
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
