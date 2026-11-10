import { ArrowRight } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';
import PageBanner from '../components/PageBanner';
import { useLang } from '../i18n';

export default function PrivateLabelPage({ navigate }: { navigate: (path: string) => void }) {
  const { t } = useLang();
  return (
    <div className="min-h-screen pt-24">
      <PageBanner
        script={t('Your brand, our kitchen', 'Votre marque, notre cuisine')}
        title={t('Private Label', 'Marque privée')}
        sub={t('Halal frozen foods made by Al-Shamas, packed under your brand.', 'Des aliments halal surgelés préparés par Al-Shamas, emballés sous votre marque.')}
      />

      <section className="pt-6 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 leading-relaxed mb-8">
            {t(
              'Looking for kebabs, samosas or spring rolls under your own label? Get in touch with our team to talk about your products, quantities and packaging.',
              'Vous cherchez des kebabs, des samosas ou des rouleaux impériaux sous votre propre marque? Contactez notre équipe pour discuter de vos produits, quantités et emballages.',
            )}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange-deep text-white font-semibold rounded-full hover:brightness-95 transition-all text-sm"
          >
            {t('Contact Us', 'Nous joindre')} <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <NewsletterBanner />
    </div>
  );
}
