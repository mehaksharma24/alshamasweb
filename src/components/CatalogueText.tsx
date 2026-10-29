import type { Para } from '../catalog';

/** Renders catalogue paragraphs: a label with empty text is a sub-heading, otherwise "Label: text". */
export default function CatalogueText({ paras, lang }: { paras: Para[]; lang: 'en' | 'fr' }) {
  const sep = lang === 'fr' ? ' : ' : ': ';
  return (
    <div className="space-y-2.5 text-sm text-gray-600 leading-relaxed">
      {paras.map((p, i) =>
        p.label && !p.text ? (
          <h3 key={i} className="font-semibold text-gray-900 pt-1">
            {p.label}
          </h3>
        ) : (
          <p key={i}>
            {p.label && <b className="text-gray-900">{p.label}{sep}</b>}
            {p.text}
          </p>
        )
      )}
    </div>
  );
}
