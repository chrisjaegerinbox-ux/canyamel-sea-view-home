import { CalendarCheck, ClipboardList, ShieldCheck, CreditCard, KeyRound, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const stepIcons = [CalendarCheck, ClipboardList, ShieldCheck, CreditCard, KeyRound];

export function PaymentProcessSection() {
  const { t } = useLanguage();

  const steps = [
    { number: 1, icon: stepIcons[0], title: t('payment.step1.title'), text: t('payment.step1.text') },
    { number: 2, icon: stepIcons[1], title: t('payment.step2.title'), text: t('payment.step2.text') },
    { number: 3, icon: stepIcons[2], title: t('payment.step3.title'), text: t('payment.step3.text') },
    { number: 4, icon: stepIcons[3], title: t('payment.step4.title'), text: t('payment.step4.text') },
    { number: 5, icon: stepIcons[4], title: t('payment.step5.title'), text: t('payment.step5.text') },
  ];

  const trustItems = [
    t('payment.trust1'),
    t('payment.trust2'),
    t('payment.trust3'),
  ];

  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">
            {t('payment.steps.eyebrow')}
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            {t('payment.steps.heading')}
          </h2>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-1">
            {t('payment.steps.sub1')}
          </p>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            {t('payment.steps.sub2')}
          </p>
        </div>

        {/* ── Desktop: horizontal journey ───────────────────────── */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Connector line through badge centers */}
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-azure/15 via-azure/35 to-azure/15" />
            {/* Dashed overlay for texture */}
            <div
              className="absolute top-5 left-[10%] right-[10%] h-px opacity-60"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, #1B3A5C33 0px, #1B3A5C33 6px, transparent 6px, transparent 12px)',
              }}
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map(({ number, icon: Icon, title, text }, i) => (
                <div
                  key={number}
                  className={cn(
                    'flex flex-col',
                    i % 2 === 1 && 'pt-12',   // alternating vertical offset
                  )}
                >
                  {/* Number badge — ring-background cuts the line visually */}
                  <div className="relative z-10 mx-auto mb-4 w-10 h-10 rounded-full bg-azure text-white text-sm font-bold font-sans flex items-center justify-center shadow-warm ring-4 ring-background">
                    {number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card rounded-xl border border-border/60 shadow-warm-sm p-4 flex flex-col gap-3 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure/10 to-azure/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5 leading-snug">
                        {title}
                      </h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical timeline ─────────────────────────── */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-azure/20 via-azure/35 to-azure/10" />

            <div className="space-y-4">
              {steps.map(({ number, icon: Icon, title, text }) => (
                <div key={number} className="flex gap-4 items-start">
                  {/* Badge */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-azure text-white text-sm font-bold font-sans flex items-center justify-center shadow-warm flex-shrink-0 ring-4 ring-background">
                    {number}
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-card rounded-xl border border-border/60 shadow-warm-sm p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-md bg-azure/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-azure" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                        {title}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 bg-muted/40 rounded-xl px-6 py-4 border border-border/50">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
                <span className="font-sans text-sm text-foreground/75">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
