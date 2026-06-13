import { Wifi, Eye, BedDouble, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface Feature72Props {
  className?: string;
}

export function Feature72({ className }: Feature72Props) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Wifi,
      title: t('feature.wifi.title'),
      description: t('feature.wifi.desc'),
      gradient: 'from-azure/10 to-azure/5',
      iconColor: 'text-azure',
    },
    {
      icon: Eye,
      title: t('feature.seaview.title'),
      description: t('feature.seaview.desc'),
      gradient: 'from-terracotta/10 to-terracotta/5',
      iconColor: 'text-terracotta',
    },
    {
      icon: BedDouble,
      title: t('feature.bedrooms.title'),
      description: t('feature.bedrooms.desc'),
      gradient: 'from-azure/10 to-azure/5',
      iconColor: 'text-azure',
    },
    {
      icon: Wind,
      title: t('feature.ac.title'),
      description: t('feature.ac.desc'),
      gradient: 'from-terracotta/10 to-terracotta/5',
      iconColor: 'text-terracotta',
    },
  ];

  return (
    <section className={cn('pt-20 pb-8 lg:pt-28 lg:pb-12 bg-background', className)}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">
            {t('feature.eyebrow')}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
            {t('feature.heading')}
          </h2>
          <p className="font-sans text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            {t('feature.sub')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, description, gradient, iconColor }) => (
            <div
              key={title}
              className="group bg-card rounded-xl border border-border/60 shadow-warm-sm p-6 flex flex-col gap-4 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className={cn(
                  'w-11 h-11 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0',
                  gradient,
                )}
              >
                <Icon className={cn('w-5 h-5', iconColor)} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5 leading-snug">
                  {title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
