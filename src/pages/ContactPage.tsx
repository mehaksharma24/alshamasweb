import { MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../company';
import { useLang } from '../i18n';

const MAP_SRC = 'https://www.google.com/maps?q=2244+Drew+Road,+Mississauga,+ON+L5S+1B1&output=embed';

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-3">{t('Contact Us', 'Nous joindre')}</h1>
          <p className="text-gray-500 text-base">
            {t('Questions, orders or wholesale enquiries — call our office.', 'Questions, commandes ou ventes en gros — appelez notre bureau.')}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-green-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-40 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              {/* Phone */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-brand-green-pale flex items-center justify-center mb-4">
                  <Phone size={18} className="text-brand-green" />
                </div>
                <h2 className="font-serif text-xl font-semibold text-gray-900 mb-1">{t('Office Phone', 'Téléphone du bureau')}</h2>
                <a href={COMPANY.phoneHref} className="text-2xl font-semibold text-brand-red hover:underline">
                  {COMPANY.phone}
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-brand-red-pale flex items-center justify-center mb-4">
                  <MapPin size={18} className="text-brand-red" />
                </div>
                <h2 className="font-serif text-xl font-semibold text-gray-900 mb-3">{t('Our Facilities', 'Nos installations')}</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <span className="font-semibold text-gray-900">{t('Location 1', 'Emplacement 1')}:</span> 2244 Drew Road, {t('Unit 1', 'unité 1')}, Mississauga, ON L5S 1B1 – EST #7088
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">{t('Location 2', 'Emplacement 2')}:</span> 2244 Drew Road, {t('Unit 3', 'unité 3')}, Mississauga, ON L5S 1B1 – EST #866
                  </li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title={t('Al-Shamas location — 2244 Drew Road, Mississauga', 'Emplacement Al-Shamas — 2244 Drew Road, Mississauga')}
                src={MAP_SRC}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
