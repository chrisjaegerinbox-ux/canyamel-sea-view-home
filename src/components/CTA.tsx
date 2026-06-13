import { MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import balcony from '@/assets/balcony.jpg';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${balcony})` }}
      />
      <div className="absolute inset-0 bg-azure/80" />

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 text-center text-white">
        <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-sand/80 mb-4">{t('cta.eyebrow')}</p>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4 max-w-2xl mx-auto leading-tight">
          {t('cta.title')}
        </h2>
        <p className="font-sans text-white/75 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          {t('cta.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2.5 bg-terracotta hover:bg-terracotta-dark text-white font-sans font-medium px-8 py-3.5 rounded transition-all duration-200 shadow-warm-md hover:shadow-warm-lg hover:-translate-y-px"
          >
            <MessageSquare className="w-4 h-4" />
            {t('cta.inquiry')}
          </Link>
          <Link
            to="/preise"
            className="inline-flex items-center justify-center gap-2.5 border border-white/40 text-white hover:bg-white/10 font-sans font-medium px-8 py-3.5 rounded transition-all duration-200"
          >
            {t('cta.prices')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Price teaser */}
        <p className="mt-8 text-white/50 text-sm font-sans">
          {t('cta.priceFrom')} <span className="text-sand font-medium">€ 1.248</span> {t('cta.priceSuffix')}
        </p>
      </div>
    </section>
  );
};

export default CTA;
