import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="page-header">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">FAQ</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">{t('faq.title')}</h1>
          <p className="font-sans text-muted-foreground mt-3 max-w-lg mx-auto">{t('faq.description')}</p>
        </div>
      </div>

      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQPage;