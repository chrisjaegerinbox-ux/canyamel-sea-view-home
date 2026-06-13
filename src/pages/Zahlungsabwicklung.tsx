import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PaymentProcessSection } from '@/components/PaymentProcessSection';
import { Link } from 'react-router-dom';
import { Shield, FileText, CreditCard, Calendar, MessageSquare, Video, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Zahlungsabwicklung = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <div className="page-header border-b border-border/40">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">{t('payment.page.eyebrow')}</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">{t('payment.page.title')}</h1>
          <p className="font-sans text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            {t('payment.page.desc')}
          </p>
        </div>
      </div>

      {/* 5-step process timeline */}
      <PaymentProcessSection />

      {/* Sichere und transparente Zahlungsabwicklung */}
      <section className="py-14 lg:py-20 section-tinted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-10">
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">{t('payment.trust.eyebrow')}</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                {t('payment.trust.heading')}
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {t('payment.trust.sub')}
              </p>
            </div>

            {/* Three trust cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

              <div className="card-luxury p-5 flex flex-col gap-4">
                <div className="w-9 h-9 rounded-lg bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-azure" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                    {t('payment.card1.title')}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {t('payment.card1.text')}
                  </p>
                </div>
              </div>

              <div className="card-luxury p-5 flex flex-col gap-4">
                <div className="w-9 h-9 rounded-lg bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-4 h-4 text-azure" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                    {t('payment.card2.title')}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {t('payment.card2.text')}
                  </p>
                </div>
              </div>

              <div className="card-luxury p-5 flex flex-col gap-4">
                <div className="w-9 h-9 rounded-lg bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-azure" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                    {t('payment.card3.title')}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {t('payment.card3.text')}
                  </p>
                </div>
              </div>

            </div>

            {/* Viewing notice */}
            <div className="rounded-xl border border-border/50 bg-card px-5 py-4 flex items-start gap-3.5 shadow-warm-sm">
              <Info className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground/80 mb-1">{t('payment.viewing.title')}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {t('payment.viewing.text')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Zahlungsmodalitäten */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-8">
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">{t('payment.modal.eyebrow')}</p>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-2">{t('payment.modal.heading')}</h2>
              <p className="font-sans text-sm text-muted-foreground">{t('payment.modal.sub')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: CreditCard, title: t('payment.modal.bank.title'), text: t('payment.modal.bank.text') },
                { icon: Calendar,   title: t('payment.modal.monthly.title'), text: t('payment.modal.monthly.text') },
                { icon: FileText,   title: t('payment.modal.docs.title'), text: t('payment.modal.docs.text') },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="card-luxury p-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground mb-1.5 leading-snug">{title}</h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 section-tinted">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">{t('payment.cta.heading')}</h2>
            <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
              {t('payment.cta.text')}
            </p>
            <Link to="/kontakt" className="btn-accent inline-flex items-center gap-2 text-sm">
              <MessageSquare className="w-4 h-4" />
              {t('contact.send')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zahlungsabwicklung;
