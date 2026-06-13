import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Send, ExternalLink, CheckCircle, Calendar } from 'lucide-react';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { useLanguage } from '@/contexts/LanguageContext';

const inputClass = "w-full px-4 py-3 border border-border rounded text-sm font-sans bg-white focus:ring-2 focus:ring-azure/30 focus:border-azure outline-none transition-colors duration-200";
const labelClass = "block text-sm font-medium font-sans text-foreground mb-1.5";

const Kontakt = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '1', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.checkIn) {
      alert(t('contact.errorAlert'));
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mqaypoyq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '1', message: '' });
      }
    } catch {
      alert(t('contact.sendError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="section-padding flex items-center justify-center">
          <div className="max-w-md mx-auto text-center card-luxury p-10">
            <CheckCircle className="w-12 h-12 text-terracotta mx-auto mb-4" />
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">{t('contact.successTitle')}</h2>
            <p className="font-sans text-muted-foreground text-sm mb-6">{t('contact.successText')}</p>
            <button onClick={() => setIsSubmitted(false)} className="btn-primary text-sm">
              {t('contact.newInquiry')}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="page-header">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">{t('contact.eyebrow')}</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">{t('contact.title')}</h1>
          <p className="font-sans text-muted-foreground mt-3 max-w-lg mx-auto">{t('contact.subtitle')}</p>
        </div>
      </div>

      <section className="py-10 lg:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-6 lg:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-5 flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-terracotta" />
                  {t('contact.formTitle')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t('contact.name')}{t('contact.required')}</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder={t('contact.namePlaceholder')} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('contact.email')}{t('contact.required')}</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder={t('contact.emailPlaceholder')} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t('contact.phone')}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder={t('contact.phonePlaceholder')} />
                  </div>
                  <div>
                    <DateRangePicker
                      startDate={formData.checkIn}
                      endDate={formData.checkOut}
                      onStartChange={val => setFormData(d => ({ ...d, checkIn: val }))}
                      onEndChange={val => setFormData(d => ({ ...d, checkOut: val }))}
                      startLabel={`${t('contact.checkIn')} *`}
                      endLabel={t('contact.checkOut')}
                      minStayMonths={2}
                    />
                    {/* hidden inputs keep Formspree submission intact */}
                    <input type="hidden" name="checkIn" value={formData.checkIn} />
                    <input type="hidden" name="checkOut" value={formData.checkOut} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('contact.guests')}{t('contact.required')}</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} required className={inputClass}>
                      <option value="1">{t('contact.guestOptions.1')}</option>
                      <option value="2">{t('contact.guestOptions.2')}</option>
                      <option value="3">{t('contact.guestOptions.3')}</option>
                      <option value="4">{t('contact.guestOptions.4')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('contact.message')}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClass} placeholder={t('contact.messagePlaceholder')} />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" required className="mt-1 accent-azure flex-shrink-0" />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground font-sans leading-relaxed">
                      {t('contact.privacyPrefix')}{' '}
                      <Link to="/legal#datenschutz" className="text-azure hover:underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                        {t('contact.privacyLink')}
                      </Link>{' '}
                      {t('contact.privacySuffix')}{t('contact.required')}
                    </label>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-50">
                    <Send className="w-4 h-4" />
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-luxury p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <ExternalLink className="w-4 h-4 text-terracotta" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{t('contact.idealista.title')}</h3>
                </div>
                <p className="font-sans text-xs text-muted-foreground mb-4 leading-relaxed">
                  {t('contact.idealista.desc')}
                </p>
                <a
                  href="https://www.idealista.com/de/inmueble/109019022/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-azure hover:text-azure/80 transition-colors duration-200"
                >
                  {t('contact.idealista.link')}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="card-luxury p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t('contact.faqTitle')}</h3>
                <p className="font-sans text-sm text-muted-foreground mb-3">{t('contact.faqText')}</p>
                <Link to="/faq" className="font-sans text-sm text-azure hover:underline inline-flex items-center gap-1">
                  {t('contact.faqLink')} →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
