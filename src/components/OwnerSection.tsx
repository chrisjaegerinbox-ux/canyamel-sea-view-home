import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import vermieterBild from '@/assets/vermieter-bild.jpg';

const OwnerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding section-tinted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-warm border-4 border-white">
              <img
                src={vermieterBild}
                alt="Christian Jaeger"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-2">{t('owner.eyebrow')}</p>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              {t('about.landlordName')}
            </h2>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
              {t('about.p1')}
            </p>
            <Link to="/ueber-uns" className="font-sans text-sm text-azure underline underline-offset-4 hover:text-azure-dark transition-colors duration-200">
              {t('owner.link')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
