import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RechtlicheGrundlage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('legal.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('legal.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('legal.paragraph1')}
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    {t('legal.regulationTitle')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('legal.regulationText')}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    {t('legal.depositTitle')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('legal.depositText')}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    {t('legal.nonTouristTitle')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('legal.nonTouristText')}
                  </p>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t('legal.noteTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('legal.noteText')}
                  </p>
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

export default RechtlicheGrundlage;