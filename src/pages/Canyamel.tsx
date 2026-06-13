import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MallorcaLocationMap from '@/components/MallorcaLocationMap';
import { ExternalLink, Car, Waves, ShoppingBag, MapPin, Laptop, Utensils, TreePine, Bus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  { icon: Waves,       keyTitle: 'canyamel.feature1Title', keyDesc: 'canyamel.feature1Desc' },
  { icon: ShoppingBag, keyTitle: 'canyamel.feature2Title', keyDesc: 'canyamel.feature2Desc' },
  { icon: MapPin,      keyTitle: 'canyamel.feature3Title', keyDesc: 'canyamel.feature3Desc' },
  { icon: Laptop,      keyTitle: 'canyamel.feature4Title', keyDesc: 'canyamel.feature4Desc' },
  { icon: Utensils,    keyTitle: 'canyamel.feature5Title', keyDesc: 'canyamel.feature5Desc' },
  { icon: TreePine,    keyTitle: 'canyamel.feature6Title', keyDesc: 'canyamel.feature6Desc' },
];

const links = [
  { href: 'https://yes-mallorca-immobilien.de/blog/mallorca/canyamel-reisefuhrer/', keyTitle: 'canyamel.linkGuide',     keyDesc: 'canyamel.linkGuideDesc' },
  { href: 'https://www.holamallorca.com/de/mallorca/reisefuehrer/orte/canyamel.htm', keyTitle: 'canyamel.linkHiking',  keyDesc: 'canyamel.linkHikingDesc' },
  { href: 'https://www.abc-mallorca.de/canyamel/',                                   keyTitle: 'canyamel.linkAbout',   keyDesc: 'canyamel.linkAboutDesc' },
  { href: 'https://maps.app.goo.gl/X8THkTvZ4ZLPasHt8',                              keyTitle: 'canyamel.linkLocation', keyDesc: 'canyamel.linkLocationDesc' },
];

const Canyamel = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Map */}
      <section id="lage" className="pt-28 pb-10 lg:pt-32 lg:pb-12 section-tinted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-5">
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-2">{t('canyamel.map.eyebrow')}</p>
              <h2 className="font-display text-2xl font-semibold text-foreground">{t('canyamel.map.heading')}</h2>
            </div>
            <MallorcaLocationMap />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-10 lg:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-7">

            {/* Lead paragraph */}
            <div className="border-l-2 border-terracotta pl-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">{t('canyamel.placeToFeelGood')}</h2>
              <p className="font-sans text-base text-foreground/80 leading-relaxed">{t('canyamel.description1')}</p>
            </div>

            {/* 2-column paragraphs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t('canyamel.description2')}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t('canyamel.description3')}</p>
              </div>
              <div className="space-y-4">
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t('canyamel.description4')}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t('canyamel.description5')}</p>
              </div>
            </div>

            {/* Closing highlight */}
            <div className="bg-azure/5 border border-azure/15 rounded-lg px-5 py-3">
              <p className="font-sans text-sm text-azure/90 leading-relaxed italic">{t('canyamel.description6')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 lg:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-7">
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-2">{t('canyamel.features.eyebrow')}</p>
              <h2 className="font-display text-2xl font-semibold text-foreground">{t('canyamel.featuresTitle')}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, keyTitle, keyDesc }) => (
                <div key={keyTitle} className="card-luxury p-4 hover:shadow-warm-md transition-shadow duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-azure/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground mb-0.5">{t(keyTitle)}</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">{t(keyDesc)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobility + Links */}
      <section className="py-10 lg:py-14 section-tinted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">

            {/* Mobility */}
            <div className="card-luxury p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{t('canyamel.mobilityTitle')}</h3>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <Car className="w-4 h-4 text-azure mt-0.5 flex-shrink-0" />
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t('canyamel.mobilityRecommendation')}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Bus className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t('canyamel.mobilityPublicTransport')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <div className="text-center mb-5">
                <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-2">{t('canyamel.links.eyebrow')}</p>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-1">{t('canyamel.linksTitle')}</h2>
                <p className="font-sans text-sm text-muted-foreground">{t('canyamel.linksSubtitle')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {links.map(({ href, keyTitle, keyDesc }) => (
                  <a
                    key={keyTitle}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-luxury p-4 flex items-center justify-between gap-4 hover:shadow-warm-md transition-shadow duration-200 group"
                  >
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-azure transition-colors duration-200 mb-0.5">
                        {t(keyTitle)}
                      </h3>
                      <p className="font-sans text-xs text-muted-foreground">{t(keyDesc)}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-azure transition-colors duration-200 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Canyamel;
