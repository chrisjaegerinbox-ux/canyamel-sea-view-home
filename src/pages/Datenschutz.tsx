import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Datenschutz = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('privacy.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('privacy.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-12">
              
              {/* Section 1: Verarbeitung personenbezogener Daten */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section1Title')}
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>{t('privacy.section1Text1')}</p>
                  <p>{t('privacy.section1Text2')}</p>
                </div>
              </div>

              {/* Section 2: Einwilligung */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section2Title')}
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>{t('privacy.section2Text1')}</p>
                  <p>{t('privacy.section2Text2')}</p>
                </div>
              </div>

              {/* Section 3: Weitergabe von Daten */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section3Title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.section3Text')}
                </p>
              </div>

              {/* Section 4: Speicherdauer */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section4Title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.section4Text')}
                </p>
              </div>

              {/* Section 5: Rechte der Betroffenen */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section5Title')}
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>{t('privacy.section5Text1')}</p>
                  <p>
                    {t('privacy.section5Text2')}{' '}
                    <a 
                      href="mailto:Chris.jaeger.inbox@gmail.com"
                      className="text-primary hover:underline"
                    >
                      Chris.jaeger.inbox@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Section 6: Urheberrecht & Inhalte */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section6Title')}
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>{t('privacy.section6Text1')}</p>
                  <p>{t('privacy.section6Text2')}</p>
                </div>
              </div>

              {/* Section 7: Kontaktformulare */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('privacy.section7Title')}
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>{t('privacy.section7Text1')}</p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 italic">
                    <p className="text-foreground">{t('privacy.section7Text2')}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;