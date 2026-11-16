import { Leaf } from 'lucide-react';
import CatalogueText from './CatalogueText';
import NutritionLabel from './NutritionLabel';
import type { Pack, Product } from '../catalog';
import { useLang } from '../i18n';

/** Nutrition Facts + Ingredients + Preparation — used on product and pack pages. */
export default function ProductInfo({ product, pack }: { product: Product; pack?: Pack }) {
  const { lang, t } = useLang();
  // A pack page shows that pack's own ingredients/instructions (from its packaging).
  const ingredients = (pack?.ingredients ?? product.ingredients)[lang];
  const instructions = (pack?.instructions ?? product.instructions)[lang];
  return (
    <section className="pt-6 pb-10 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-pale rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red-pale rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Nutrition */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">
              {t('Nutrition', 'Valeur nutritive')}
            </h2>
            {product.nutritionFacts ? (
              <NutritionLabel facts={product.nutritionFacts} />
            ) : (
              <p className="text-sm text-gray-400">
                {t('Nutrition information coming soon.', 'Valeur nutritive à venir.')}
              </p>
            )}
          </div>

          <div className="space-y-6">
            {/* Ingredients */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-gray-900 mb-4">
                <Leaf size={16} className="text-brand-green" />
                {t('Ingredients', 'Ingrédients')}
              </h2>
              {ingredients.length ? (
                <CatalogueText paras={ingredients} lang={lang} />
              ) : (
                <p className="text-sm text-gray-400">{t('Ingredients coming soon.', 'Ingrédients à venir.')}</p>
              )}
            </div>

            {/* Heating / cooking / storage */}
            {instructions.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {t('Preparation & Storage', 'Préparation et conservation')}
                </h2>
                <CatalogueText paras={instructions} lang={lang} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
