import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  const items = [
    { q: t('faq.viewing.question'),     a: t('faq.viewing.answer') },
    { q: t('faq.minRental.question'),   a: t('faq.minRental.answer') },
    { q: t('faq.reason.question'),      a: t('faq.reason.answer') },
    { q: t('faq.utilities.question'),   a: t('faq.utilities.answer') },
    { q: t('faq.internet.question'),    a: t('faq.internet.answer') },
    { q: t('faq.accessibility.question'), a: t('faq.accessibility.answer') },
    { q: t('faq.smoking.question'),     a: t('faq.smoking.answer') },
    { q: t('faq.heating.question'),     a: t('faq.heating.answer') },
    { q: t('faq.deposit.question'),     a: t('faq.deposit.answer') },
    { q: t('faq.parking.question'),     a: t('faq.parking.answer') },
  ];

  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          <div className="space-y-2.5">
            {items.map(({ q, a }, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={cn(
                    'rounded-xl border bg-card transition-shadow duration-200',
                    isOpen
                      ? 'border-border shadow-warm-md'
                      : 'border-border/60 shadow-warm-sm hover:shadow-warm-md'
                  )}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span className={cn(
                      'font-display text-[17px] leading-snug transition-colors duration-200',
                      isOpen
                        ? 'font-semibold text-foreground'
                        : 'font-semibold text-foreground/90 group-hover:text-foreground'
                    )}>
                      {q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-180 text-terracotta' : 'text-muted-foreground/50 group-hover:text-terracotta'
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <div className="h-px bg-border/50 mb-4" />
                      <div className="space-y-3">
                        {a.split('\n\n').map((block, pi) => {
                          const lines = block.split('\n');
                          const bulletLines = lines.filter(l => l.startsWith('• '));
                          const textLines = lines.filter(l => !l.startsWith('• '));
                          if (bulletLines.length > 0) {
                            return (
                              <div key={pi}>
                                {textLines.length > 0 && (
                                  <p className="font-sans text-[15px] text-muted-foreground leading-relaxed mb-2">
                                    {textLines.join(' ')}
                                  </p>
                                )}
                                <ul className="space-y-1.5 ml-1">
                                  {bulletLines.map((l, li) => (
                                    <li key={li} className="flex items-start gap-2 font-sans text-[15px] text-muted-foreground leading-relaxed">
                                      <span className="mt-[9px] w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                                      {l.slice(2)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }
                          return (
                            <p key={pi} className="font-sans text-[15px] text-muted-foreground leading-relaxed">
                              {block}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact nudge */}
          <div className="mt-10 rounded-xl border border-border/50 bg-muted/30 px-6 py-5 text-center">
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {t('faq.nudge.text')}{' '}
              <Link
                to="/kontakt"
                className="text-azure font-medium hover:underline underline-offset-2 transition-colors duration-200"
              >
                {t('faq.nudge.link')}
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
