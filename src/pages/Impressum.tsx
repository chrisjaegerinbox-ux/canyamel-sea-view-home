import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('imprint.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('imprint.subtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('navigation.home')}
              </Button>
            </Link>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t('imprint.title')}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">{t('imprint.provider')}:</strong> {t('imprint.providerName')}
                  </div>
                  <div>
                    <strong className="text-foreground">{t('imprint.address')}:</strong> {t('imprint.addressDetails')}
                  </div>
                  <div>
                    <strong className="text-foreground">{t('imprint.email')}:</strong> {t('imprint.emailAddress')}
                  </div>
                  <div>
                    <strong className="text-foreground">{t('imprint.contactOption')}:</strong> {t('imprint.contactDetails')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;