import type { ReactNode } from 'react';
import type { NutritionFacts } from '../data';

// Recreates the bilingual Canadian Nutrition Facts table printed on the packaging.
function Row({
  children,
  dv,
  className = '',
}: {
  children: ReactNode;
  dv?: string;
  className?: string;
}) {
  return (
    <div className={`flex justify-between items-baseline ${className}`}>
      <span>{children}</span>
      {dv && <span className="whitespace-nowrap">{dv}</span>}
    </div>
  );
}

export default function NutritionLabel({ facts: f }: { facts: NutritionFacts }) {
  return (
    // Sizes are designed at 344px wide and scale down with the column via --u.
    <div className="w-full max-w-[344px] [container-type:inline-size]">
      <div
        className="[--u:min(1px,100cqw/344)] bg-white text-black border border-black pl-[calc(var(--u)*10)] pr-[calc(var(--u)*9)] pt-[calc(var(--u)*6)] pb-[calc(var(--u)*8)] text-[length:calc(var(--u)*17.5)] leading-[1.22]"
        style={{ fontFamily: "'Roboto Condensed', 'Arial Narrow', sans-serif" }}
      >
        <div className="font-bold text-[length:calc(var(--u)*30)] leading-[calc(var(--u)*33)] tracking-[-0.01em]">
          Nutrition Facts
          <br />
          Valeur nutritive
        </div>
        <div className="text-[length:calc(var(--u)*18.5)] leading-[calc(var(--u)*22)]">
          {f.servingEn}
          <br />
          {f.servingFr}
        </div>

        <div className="border-t-[length:calc(var(--u)*2)] border-black mt-[calc(var(--u)*5)]" />

        <div className="flex justify-between items-start pt-[calc(var(--u)*5)]">
          <div className="font-bold text-[length:calc(var(--u)*25)] leading-[calc(var(--u)*28)]">
            Calories&nbsp;&nbsp;{f.calories}
            <div className="h-[calc(var(--u)*4)] bg-black mt-[calc(var(--u)*4)]" />
          </div>
          <div className="text-right font-bold text-[length:calc(var(--u)*16)] leading-[calc(var(--u)*17)] pt-[calc(var(--u)*2)]">
            % Daily Value*
            <br />% valeur quotidienne*
          </div>
        </div>

        <div className="mt-[calc(var(--u)*6)]">
          <Row dv={f.fat.dv}>
            <b>Fat / Lipides</b> {f.fat.amount}
          </Row>
          <div className="flex justify-between items-center pb-[calc(var(--u)*4)]">
            <div className="pl-[calc(var(--u)*15)]">
              Saturated / saturés {f.saturated}
              <br />+ Trans / trans {f.trans}
            </div>
            <span className="whitespace-nowrap">{f.saturatedTransDv}</span>
          </div>

          <div className="border-t border-black pt-[calc(var(--u)*3)] pb-[calc(var(--u)*4)]">
            <Row dv={f.carbsDv}>
              <b>Carbohydrate / Glucides</b> {f.carbs}
            </Row>
            <Row dv={f.fibre.dv} className="pl-[calc(var(--u)*15)]">
              Fibre / Fibres {f.fibre.amount}
            </Row>
            <Row dv={f.sugars.dv} className="pl-[calc(var(--u)*15)]">
              Sugars / Sucres {f.sugars.amount}
            </Row>
          </div>

          <Row className="border-t border-black py-[calc(var(--u)*4)]">
            <b>Protein / Protéines</b> {f.protein}
          </Row>
          <Row dv={f.cholesterol.dv} className="border-t border-black py-[calc(var(--u)*4)]">
            <b>Cholesterol / Cholestérol</b> {f.cholesterol.amount}
          </Row>
          <Row dv={f.sodium.dv} className="border-t border-black py-[calc(var(--u)*4)]">
            <b>Sodium</b> {f.sodium.amount}
          </Row>

          <div className="border-t-[length:calc(var(--u)*5)] border-black" />
          {f.potassium && (
            <Row dv={f.potassium.dv} className="py-[calc(var(--u)*4)]">
              Potassium {f.potassium.amount}
            </Row>
          )}
          {f.vitaminA && (
            <Row dv={f.vitaminA.dv} className={`${f.potassium ? 'border-t border-black ' : ''}py-[calc(var(--u)*4)]`}>
              Vitamin A / Vitamine A {f.vitaminA.amount}
            </Row>
          )}
          {f.vitaminC && (
            <Row dv={f.vitaminC.dv} className={`${f.potassium || f.vitaminA ? 'border-t border-black ' : ''}py-[calc(var(--u)*4)]`}>
              Vitamin C / Vitamine C {f.vitaminC.amount}
            </Row>
          )}
          <Row dv={f.calcium.dv} className={`${f.potassium || f.vitaminA || f.vitaminC ? 'border-t border-black ' : ''}py-[calc(var(--u)*4)]`}>
            Calcium {f.calcium.amount}
          </Row>
          <Row dv={f.iron.dv} className="border-t border-black py-[calc(var(--u)*4)]">
            Iron / Fer {f.iron.amount}
          </Row>
        </div>

        <div className="border-t-[length:calc(var(--u)*5)] border-black pt-[calc(var(--u)*4)] text-[length:calc(var(--u)*17.5)] leading-[calc(var(--u)*21)]">
          *5% or less is <b>a little</b>, 15% or more is
          <div className="pl-[calc(var(--u)*10)]">
            <b>a lot</b> / *5% ou moins c’est <b>peu</b>, 15% ou
            <br />
            plus c’est <b>beaucoup</b>
          </div>
        </div>
      </div>
    </div>
  );
}
