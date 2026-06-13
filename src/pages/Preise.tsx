import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Info, MessageSquare, Sun, Snowflake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Preise = () => {
  const { t } = useLanguage();


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <div className="pt-28 pb-10 lg:pt-36 lg:pb-14 bg-gradient-to-b from-muted/50 via-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">{t('prices.eyebrow')}</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">{t('prices.title')}</h1>
          <p className="font-sans text-muted-foreground mt-3 max-w-xl mx-auto">{t('prices.subtitle')}</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

              {/* Winter */}
              <div className="card-luxury overflow-visible relative">
                <div className="bg-azure/5 px-6 pt-6 pb-5 border-b border-border">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Snowflake className="w-4 h-4 text-azure" />
                    <h3 className="font-display text-xl font-semibold text-foreground">{t('prices.winter')}</h3>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">{t('prices.winterPeriod')}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="font-display text-5xl font-semibold text-azure">1.248</span>
                    <span className="font-sans text-muted-foreground text-sm">€ / {t('prices.perMonth')}</span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground/70 mb-1">{t('prices.coldRent')}</p>
                  <p className="font-sans text-xs text-muted-foreground mb-6">{t('prices.utilities')}</p>
                  <Link
                    to="/kontakt?saison=winter"
                    className="btn-outline w-full text-center block text-sm"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    {t('prices.ctaWinter')}
                  </Link>
                </div>
              </div>

              {/* Summer */}
              <div className="card-luxury overflow-visible relative ring-2 ring-terracotta">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta text-white text-xs font-sans font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  {t('prices.popular')}
                </div>
                <div className="bg-terracotta/5 px-6 pt-6 pb-5 border-b border-border">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Sun className="w-4 h-4 text-terracotta" />
                    <h3 className="font-display text-xl font-semibold text-foreground">{t('prices.summer')}</h3>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">{t('prices.summerPeriod')}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="font-display text-5xl font-semibold text-terracotta">1.458</span>
                    <span className="font-sans text-muted-foreground text-sm">€ / {t('prices.perMonth')}</span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground/70 mb-1">{t('prices.coldRent')}</p>
                  <p className="font-sans text-xs text-muted-foreground mb-6">{t('prices.utilities')}</p>
                  <Link
                    to="/kontakt?saison=sommer"
                    className="btn-accent w-full text-center block text-sm"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    {t('prices.ctaSummer')}
                  </Link>
                </div>
              </div>

            </div>

            {/* Utilities note */}
            <div className="flex items-start gap-3 bg-muted/50 rounded-lg px-5 py-4 mb-8">
              <Info className="w-4 h-4 text-azure mt-0.5 flex-shrink-0" />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">{t('prices.utilitiesPauschale')}</strong><br />
                {t('prices.utilitiesDesc')}
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Zahlungsablauf CTA */}
      <section className="section-tinted py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-2">{t('prices.paymentHeading')}</h2>
          <p className="font-sans text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
            {t('prices.paymentDesc')}
          </p>
          <Link to="/zahlungsabwicklung" className="btn-outline text-sm inline-flex">
            {t('prices.paymentLink')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Preise;
