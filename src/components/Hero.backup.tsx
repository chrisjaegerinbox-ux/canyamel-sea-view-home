import { ArrowRight, ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/balcony-titelbild.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-azure/30 via-azure/40 to-azure/65" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-20">
        {/* Location tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-sans font-medium text-white/90 tracking-widest uppercase">
          Canyamel, Mallorca
        </div>

        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-none mb-6 opacity-0 animate-fade-up">
          {t('hero.title')}<br />
          <em className="font-normal italic text-sand">{t('hero.subtitle')}</em>
        </h1>

        <p className="font-sans text-lg md:text-xl text-white/85 max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up-delay">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2.5 bg-terracotta hover:bg-terracotta-dark text-white font-sans font-medium px-8 py-3.5 rounded transition-all duration-200 shadow-warm-md hover:shadow-warm-lg hover:-translate-y-px"
          >
            <MessageSquare className="w-4 h-4" />
            {t('hero.cta.availability')}
          </Link>

          <Link
            to="/apartment"
            className="inline-flex items-center gap-2.5 border border-white/50 text-white hover:bg-white/10 font-sans font-medium px-8 py-3.5 rounded transition-all duration-200"
          >
            {t('hero.cta.features')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 group"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
      </button>
    </section>
  );
};

export default Hero;
