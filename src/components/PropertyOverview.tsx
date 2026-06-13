import { BedDouble, Waves, Wifi, Wind, Car, KeyRound, Tv2, WashingMachine, UtensilsCrossed, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PropertyOverview = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: BedDouble, value: '2', label: t('property.feature.bedrooms') },
    { icon: Waves, value: '∞', label: t('property.feature.seaview') },
    { icon: Wifi, value: '300', label: 'Mbit/s Glasfaser' },
    { icon: Wind, value: '24/7', label: t('property.feature.ac') },
  ];

  const features = [
    { icon: Waves, label: t('property.feature.pool') },
    { icon: Car, label: t('property.feature.parking') },
    { icon: Briefcase, label: t('property.feature.workspace') },
    { icon: UtensilsCrossed, label: t('property.feature.kitchen') },
    { icon: KeyRound, label: t('property.feature.keyless') },
    { icon: Tv2, label: t('property.feature.tv') },
    { icon: WashingMachine, label: t('property.feature.washer') },
    { icon: BedDouble, label: t('property.feature.furnished') },
  ];

  return (
    <section className="section-padding section-tinted">
      <div className="container mx-auto px-4">

        {/* Key Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-warm-sm">
          {facts.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-white px-6 py-8 text-center">
              <Icon className="w-5 h-5 text-terracotta mx-auto mb-3" />
              <div className="font-display text-3xl font-semibold text-azure mb-1">{value}</div>
              <div className="font-sans text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="text-center mb-7">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">Highlights</p>
          <h2 className="section-title">{t('property.title')}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-warm-sm border border-border/60">
              <Icon className="w-4 h-4 text-azure flex-shrink-0" />
              <span className="font-sans text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyOverview;
