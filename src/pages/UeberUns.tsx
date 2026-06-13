import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import vermieterBild from '@/assets/vermieter-bild.jpg';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const UeberUns = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="page-header">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">Ihr Vermieter</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">{t('about.title')}</h1>
        </div>
      </div>

      <main className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">

              {/* Portrait */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="inline-block mb-5">
                  <img
                    src={vermieterBild}
                    alt="Christian Jaeger"
                    className="w-40 h-40 rounded-full object-cover shadow-warm-lg border-4 border-white mx-auto"
                  />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-1">{t('about.landlordName')}</h2>
                <p className="font-sans text-sm text-muted-foreground mb-2">{t('about.landlordRole')}</p>
                <p className="font-sans text-xs text-muted-foreground/70">{t('about.landlordSubrole')}</p>
                <blockquote className="mt-5 border-l-2 border-terracotta pl-4">
                  <p className="font-display text-lg italic text-foreground/70">{t('about.landlordSlogan')}</p>
                </blockquote>
                <div className="mt-6">
                  <Link to="/kontakt" className="btn-accent text-sm inline-flex">{t('owner.ctaBtn')}</Link>
                </div>
              </div>

              {/* Story */}
              <div className="lg:col-span-3 space-y-5">
                <p className="font-sans text-muted-foreground leading-relaxed">{t('about.p1')}</p>
                <p className="font-sans text-muted-foreground leading-relaxed">{t('about.p2')}</p>
                <div>
                  <Link
                    to="/canyamel#lage"
                    className="btn-outline inline-flex items-center gap-2 text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    {t('owner.mapLink')}
                  </Link>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">{t('about.p3')}</p>
                <p className="font-sans text-muted-foreground leading-relaxed">{t('about.p4')}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-sans text-sm text-azure font-medium">{t('about.ctaText')}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UeberUns;
